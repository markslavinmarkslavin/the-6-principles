#!/usr/bin/env node

/**
 * TASK VALIDATOR
 * Validiert Aufgaben auf vollständige Fields
 * Verhindert incomplete Tasks in Beads
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_FIELDS = ['title', 'priority', 'due'];
const OPTIONAL_FIELDS = ['description', 'tags', 'owner', 'context'];

/**
 * Validate a single task object
 */
function validateTask(task, taskId) {
  const errors = [];
  const warnings = [];

  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!task[field] || task[field].toString().trim() === '') {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Check date format if due exists
  if (task.due && !task.due.match(/^\d{4}-\d{2}-\d{2}$/)) {
    errors.push(`Invalid due date format: ${task.due} (use YYYY-MM-DD)`);
  }

  // Check priority values
  if (task.priority && !['P0', 'P1', 'P2', 'P3', 'none'].includes(task.priority)) {
    warnings.push(`Unknown priority: ${task.priority} (expected P0-P3 or none)`);
  }

  // Check status if present
  if (task.status && !['open', 'active', 'pending', 'completed', 'done'].includes(task.status.toLowerCase())) {
    warnings.push(`Unknown status: ${task.status}`);
  }

  return { valid: errors.length === 0, errors, warnings };
}

/**
 * Generate task template
 */
function generateTemplate(title = 'New Task', context = 'privat') {
  const today = new Date();
  const dueDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // +7 days
  const dueDateStr = dueDate.toISOString().split('T')[0];

  return {
    title,
    description: '',
    priority: 'P1',
    due: dueDateStr,
    context,
    tags: [],
    status: 'open'
  };
}

/**
 * Check all aufgaben.md files for quality
 */
function auditAufgabenFiles() {
  console.log('📋 TASK QUALITY AUDIT\n');

  const contexts = ['privat', 'schule', 'organisation', 'familie', 'wohnung', 'gesundheit'];
  let totalTasks = 0;
  let validTasks = 0;
  let issues = [];

  for (const ctx of contexts) {
    const filePath = path.join('my_life_os', 'notes', ctx, 'aufgaben.md');

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  ${ctx}: File not found`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract tasks from markdown
    const taskMatches = content.matchAll(/^- \[([ xX])\]\s+\*\*(.+?)\*\*\s*(\[.+?\])?/gm);
    const tasks = [];

    for (const match of taskMatches) {
      tasks.push({
        title: match[2],
        id: match[3] ? match[3].slice(1, -1) : 'unknown',
        completed: match[1] !== ' '
      });
    }

    console.log(`\n${ctx.toUpperCase()}: ${tasks.length} tasks`);

    for (const task of tasks) {
      totalTasks++;

      // Quick validation
      if (!task.title || task.title.length === 0) {
        issues.push({ ctx, task: task.id, issue: 'Missing title' });
      } else if (task.title.length < 5) {
        issues.push({ ctx, task: task.id, issue: 'Title too short' });
      } else {
        validTasks++;
      }
    }
  }

  console.log(`\n📊 Results: ${validTasks}/${totalTasks} valid (${Math.round(validTasks / totalTasks * 100)}%)`);

  if (issues.length > 0) {
    console.log(`\n⚠️  Issues found:\n`);
    issues.forEach(i => {
      console.log(`  ${i.ctx}: ${i.task} - ${i.issue}`);
    });
  }

  return { totalTasks, validTasks, issues };
}

/**
 * Show task template
 */
function showTemplate(title = 'Example Task', context = 'privat') {
  const template = generateTemplate(title, context);
  console.log('\n📝 TASK TEMPLATE\n');
  console.log('```json');
  console.log(JSON.stringify(template, null, 2));
  console.log('```\n');

  // Validate the template
  const validation = validateTask(template);
  if (validation.valid) {
    console.log('✅ Template is valid\n');
  } else {
    console.log('❌ Validation errors:');
    validation.errors.forEach(e => console.log(`   - ${e}`));
    console.log();
  }
}

// ============================================================================
// CLI
// ============================================================================

const cmd = process.argv[2];

switch (cmd) {
  case 'audit':
    auditAufgabenFiles();
    break;

  case 'template':
    const title = process.argv[3] || 'New Task';
    const context = process.argv[4] || 'privat';
    showTemplate(title, context);
    break;

  default:
    console.log('Task Validator\n');
    console.log('Usage:');
    console.log('  node task-validator.cjs audit              - Audit all aufgaben.md files');
    console.log('  node task-validator.cjs template [title]   - Show task template');
    console.log();
}

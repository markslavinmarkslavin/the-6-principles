#!/usr/bin/env node

/**
 * BENCHMARK-FULL.JS
 * Comprehensive Speed + Quality benchmark across all tools
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

const CACHE_DIR = path.join(__dirname, '..', 'cache');
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });

// Set proper base directory
const BASE_DIR = 'C:/Users/Admin';
const BEADS_EXE = 'C:/Users/Admin/AppData/Local/Programs/bd/bd.exe';

console.log('╔════════════════════════════════════════════════╗');
console.log('║     FULL SYSTEM BENCHMARK (Speed + Quality)    ║');
console.log('╚════════════════════════════════════════════════╝\n');

// ============================================================================
// SECTION 1: TOOL PERFORMANCE
// ============================================================================

console.log('📈 TOOL PERFORMANCE\n');

const tools = [
  { name: 'heute-query.js', cmd: 'node tools/heute-query.js', timeout: 5000 },
  { name: 'search.js (simple)', cmd: 'node tools/search.js "aufgaben"', timeout: 8000 },
  { name: 'beads ready', cmd: 'bd ready --json', timeout: 3000 },
];

const toolResults = {};

tools.forEach(tool => {
  try {
    const start = Date.now();
    const result = spawnSync('bash', ['-c', tool.cmd], {
      timeout: tool.timeout,
      stdio: 'pipe',
      cwd: 'C:\\Users\\Admin'
    });
    const time = Date.now() - start;
    const status = result.status === 0 ? '✅' : '❌';
    toolResults[tool.name] = { time, status: result.status === 0 ? 'success' : 'failed' };
    console.log(`${status} ${tool.name}: ${time}ms`);
  } catch (e) {
    toolResults[tool.name] = { time: -1, status: 'timeout' };
    console.log(`⏱️  ${tool.name}: TIMEOUT (>${tool.timeout}ms)`);
  }
});

// ============================================================================
// SECTION 2: DATA VOLUME ANALYSIS
// ============================================================================

console.log('\n📊 DATA VOLUME\n');

const dirs = [
  { path: path.join(BASE_DIR, 'logs'), name: 'Logs' },
  { path: path.join(BASE_DIR, 'notes'), name: 'Notes' },
  { path: path.join(BASE_DIR, 'my_life_os'), name: 'System' }
];

const volumes = {};

// Helper: recursively count .md files
function countMdFiles(dir) {
  let count = 0;
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    items.forEach(item => {
      if (item.isDirectory()) {
        count += countMdFiles(path.join(dir, item.name));
      } else if (item.name.endsWith('.md')) {
        count++;
      }
    });
  } catch (e) {
    // Directory doesn't exist
  }
  return count;
}

dirs.forEach(dir => {
  const count = countMdFiles(dir.path);
  volumes[dir.name] = count;
  console.log(`📁 ${dir.name}: ${count} files`);
});

// ============================================================================
// SECTION 3: CONSISTENCY CHECK
// ============================================================================

console.log('\n🔄 CONSISTENCY CHECK\n');

const consistency = {};

// Check aufgaben.md consistency (all contexts)
let aufgabenItems = 0;
const contexts = ['privat', 'schule', 'organisation', 'familie', 'wohnung', 'gesundheit'];
const aufgabenBreakdown = {};

try {
  for (const ctx of contexts) {
    const aufgabenPath = path.join(BASE_DIR, 'my_life_os', 'notes', ctx, 'aufgaben.md');
    try {
      const aufgaben = fs.readFileSync(aufgabenPath, 'utf8');
      const count = (aufgaben.match(/- \[/g) || []).length;
      aufgabenBreakdown[ctx] = count;
      aufgabenItems += count;
    } catch (e) {
      aufgabenBreakdown[ctx] = 0;
    }
  }
  consistency['aufgaben.md items (total)'] = aufgabenItems;
  consistency['aufgaben.md breakdown'] = aufgabenBreakdown;
  console.log(`✅ aufgaben.md: ${aufgabenItems} items total`);
  console.log(`   Breakdown: ${JSON.stringify(aufgabenBreakdown).replace(/"/g, '')}`);
} catch (e) {
  console.log(`❌ aufgaben.md: error reading files`);
}

// Check Beads sync
let beadsItems = 0;
try {
  const beads = execSync(`"${BEADS_EXE}" list --json`, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    cwd: BASE_DIR,
    env: { ...process.env, BEADS_DIR: path.join(BASE_DIR, 'my_life_os', '.beads') }
  });
  const parsed = JSON.parse(beads);
  beadsItems = Array.isArray(parsed) ? parsed.length : 0;
  consistency['Beads items'] = beadsItems;
  console.log(`✅ Beads: ${beadsItems} items`);
} catch (e) {
  console.log(`⚠️  Beads: not available (${e.message})`);
}

if (aufgabenItems > 0 && beadsItems > 0) {
  const diff = Math.abs(aufgabenItems - beadsItems);
  console.log(`   Sync difference: ${diff} items (${diff > 3 ? '⚠️ ALERT' : '✅ OK'})`);
}

// Check logs structure
let logEntries = 0;
try {
  const logFile = path.join(BASE_DIR, 'logs', 'privat', '2026', '2026-03.md');
  if (fs.existsSync(logFile)) {
    const content = fs.readFileSync(logFile, 'utf8');
    logEntries = (content.match(/^##\s+\d{4}-\d{2}-\d{2}/gm) || []).length;
    consistency['Log entries (March)'] = logEntries;
    console.log(`✅ Log entries (March): ${logEntries}`);
  } else {
    console.log(`⚠️  Log entries: file not found`);
  }
} catch (e) {
  console.log(`⚠️  Log entries: could not count`);
}

// ============================================================================
// SECTION 4: QUALITY METRICS
// ============================================================================

console.log('\n⭐ QUALITY METRICS\n');

const quality = {
  completeness: 0,
  consistency: 0,
  timeliness: 0
};

// Completeness: Do tasks have all fields?
let completeFields = 0;
try {
  const aufgabenPath = path.join(BASE_DIR, 'notes', 'privat', 'aufgaben.md');
  const aufgaben = fs.readFileSync(aufgabenPath, 'utf8');
  const sections = aufgaben.split('- [ ]').length - 1;
  const withDeadline = (aufgaben.match(/@deadline/g) || []).length;
  completeFields = sections > 0 ? Math.round((withDeadline / sections) * 100) : 0;
  quality.completeness = completeFields;
  console.log(`📋 Completeness (fields): ${completeFields}%`);
} catch (e) {
  console.log(`❌ Completeness: could not measure`);
}

// Consistency: Beads ↔ notes ↔ logs
try {
  const diff = Math.abs(aufgabenItems - beadsItems);
  const sync = diff === 0 ? 100 : Math.max(0, 100 - (diff * 10));
  quality.consistency = Math.round(sync);
  console.log(`🔄 Consistency (sync): ${quality.consistency}%`);
} catch (e) {
  console.log(`⚠️  Consistency: could not measure`);
}

// Timeliness: Are old tasks updated?
let stalePercent = 0;
try {
  const aufgabenPath = path.join(BASE_DIR, 'notes', 'privat', 'aufgaben.md');
  const aufgaben = fs.readFileSync(aufgabenPath, 'utf8');
  const oldDates = (aufgaben.match(/202[0-5]-0[1-2]/g) || []).length; // Feb or earlier
  const allDates = (aufgaben.match(/202\d-\d{2}/g) || []).length;
  stalePercent = allDates > 0 ? Math.round(((allDates - oldDates) / allDates) * 100) : 100;
  quality.timeliness = stalePercent;
  console.log(`🕐 Timeliness (current): ${stalePercent}%`);
} catch (e) {
  console.log(`⚠️  Timeliness: could not measure`);
}

// ============================================================================
// SECTION 5: BOTTLENECK RANKING
// ============================================================================

console.log('\n🎯 TOP BOTTLENECKS\n');

const bottlenecks = [
  { name: 'Master-Replica Sync', issue: 'aufgaben.md ↔ Beads mismatch', severity: 'High', impact: `${Math.abs(aufgabenItems - beadsItems)} items out of sync` },
  { name: 'Missing Status Fields', issue: 'Tasks lack @status tags', severity: 'Medium', impact: `${logEntries} log entries without status` },
  { name: 'Phone Numbers', issue: 'Contacts incomplete', severity: 'Low', impact: 'Communication delays' },
  { name: 'Tool Speed', issue: 'search.js slower than needed', severity: 'Medium', impact: `${toolResults['search.js (simple)']?.time || 'N/A'}ms per query` }
];

bottlenecks.slice(0, 3).forEach((b, i) => {
  const icon = b.severity === 'High' ? '🚨' : b.severity === 'Medium' ? '⚠️' : '🟡';
  console.log(`${i + 1}. ${icon} ${b.name}`);
  console.log(`   Issue: ${b.issue}`);
  console.log(`   Impact: ${b.impact}\n`);
});

// ============================================================================
// SECTION 6: SUMMARY & SCORES
// ============================================================================

console.log('════════════════════════════════════════════════\n');

const speedScore = Math.max(0, Math.min(100, 120 - (toolResults['today-query.js']?.time || 0) / 10));
const qualityScore = (quality.completeness + quality.consistency + quality.timeliness) / 3;
const overall = Math.round((speedScore + qualityScore) / 2);

console.log(`⚡ SPEED:     ${Math.round(speedScore)}/100`);
console.log(`✨ QUALITY:   ${Math.round(qualityScore)}/100`);
console.log(`📊 OVERALL:   ${overall}/100`);

// ============================================================================
// SAVE FULL RESULTS
// ============================================================================

const fullResults = {
  timestamp: new Date().toISOString(),
  tools: toolResults,
  volumes,
  consistency,
  quality,
  scores: {
    speed: Math.round(speedScore),
    quality: Math.round(qualityScore),
    overall
  },
  recommendations: [
    'Implement automatic Beads↔notes sync (Gate 1)',
    'Add @status field requirement to all log entries',
    'Create phone number validation (Quality check)',
    'Optimize search.js with caching layer'
  ]
};

fs.writeFileSync(
  path.join(CACHE_DIR, 'benchmark-full.json'),
  JSON.stringify(fullResults, null, 2)
);

console.log(`\n✅ Full results saved to tools/cache/benchmark-full.json`);
console.log(`📁 Previous results in tools/cache/`);

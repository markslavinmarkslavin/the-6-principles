# Priority System Documentation

---
# === SYSTEM METADATA ===
id: priority-system-2026
type: documentation
version: "1.0.0"
created: 2026-02-02
last_updated: 2026-02-02
domain: "task_prioritization"

# === AI-CONTEXT INJECTION ===
ai_context:
  llm_hints: ["prioritization_logic", "consistency_enforcement", "conflict_resolution"]
  processing_priority: critical
  reference_required: true
  load_before_processing: true

# === PRIORITY CLASSIFICATION ===
priority_levels:
  P0_CRITICAL: {urgency: immediate, impact: high, deadline: fixed}
  P1_HIGH: {urgency: soon, impact: high, deadline: flexible}
  P2_MEDIUM: {urgency: routine, impact: medium, deadline: none}
  P3_LOW: {urgency: optional, impact: low, deadline: none}
---

<!-- AI_PROCESSING_HINTS -->
<!-- domain: task_prioritization, complexity: critical, tokens_required: 600 -->
<!-- purpose: Enforce consistent task prioritization across all AI processing -->
<!-- processing_style: rule_based_classification -->
<!-- critical_rule: Priority assignment must be consistent across files -->
<!-- output_format: prioritized_task_list -->

## 🎯 PRIORITY CLASSIFICATION SYSTEM

### P0 - CRITICAL (Immediate Action Required)
```yaml
definition: "Time-sensitive tasks with fixed deadlines and high impact"
urgency_level: "immediate"
impact_level: "high"
deadline_type: "fixed"
examples:
  - Childcare pickup arrangements
  - Teaching schedules with fixed times
  - Medical appointments
  - Emergency situations

processing_rules:
  - Always process first
  - Cannot be postponed
  - Highest resource allocation
  - Immediate notification required

ai_context:
  - "time_critical"
  - "deadline_fixed"
  - "no_flexibility"
```

### P1 - HIGH (High Impact, Flexible Timing)
```yaml
definition: "Important tasks that significantly impact goals but have flexible timing"
urgency_level: "soon" 
impact_level: "high"
deadline_type: "flexible"
examples:
  - Teaching preparation
  - School project work
  - Family obligations
  - Important appointments

processing_rules:
  - Process after P0 tasks
  - Can be rescheduled if needed
  - High resource allocation
  - Advance notification preferred

ai_context:
  - "important_not_critical"
  - "deadline_flexible"
  - "goal_impacting"
```

### P2 - MEDIUM (Routine Tasks)
```yaml
definition: "Regular activities that maintain systems and routines"
urgency_level: "routine"
impact_level: "medium" 
deadline_type: "none"
examples:
  - Daily habits and routines
  - Regular administrative tasks
  - Health and wellness activities
  - Standard documentation

processing_rules:
  - Process after P1 tasks
  - Can be batched together
  - Standard resource allocation
  - Scheduled processing preferred

ai_context:
  - "routine_maintenance"
  - "no_deadline"
  - "system_health"
```

### P3 - LOW (Optional Tasks)
```yaml
definition: "Tasks that provide value but are not essential for immediate goals"
urgency_level: "optional"
impact_level: "low"
deadline_type: "none"
examples:
  - Long-term planning
  - Optional professional development
  - Administrative organization
  - Research and exploration

processing_rules:
  - Process only when time permits
  - Can be postponed indefinitely
  - Minimal resource allocation
  - Batch processing recommended

ai_context:
  - "nice_to_have"
  - "no_urgency"
  - "value_adding"
```

## 🔄 PRIORITY ASSIGNMENT LOGIC

### Automatic Classification Rules

#### Time-Based Classification
```yaml
time_criteria:
  less_than_1_hour: "P0_CRITICAL"
  less_than_24_hours: "P1_HIGH" 
  less_than_1_week: "P1_HIGH"
  recurring_daily: "P2_MEDIUM"
  no_deadline: "P3_LOW"
```

#### Impact-Based Classification
```yaml
impact_criteria:
  critical_consequences: "P0_CRITICAL"
  goal_blocking: "P1_HIGH"
  goal_supporting: "P2_MEDIUM"
  value_adding: "P3_LOW"
```

#### Domain-Specific Rules

```yaml
education_domain:
  teaching_schedule: "P0_CRITICAL"
  lesson_preparation: "P1_HIGH"
  administrative_tasks: "P2_MEDIUM"
  professional_development: "P3_LOW"

personal_domain:
  childcare_arrangements: "P0_CRITICAL"
  family_obligations: "P1_HIGH"
  health_routines: "P2_MEDIUM"
  personal_projects: "P3_LOW"

business_domain:
  client_deadlines: "P0_CRITICAL"
  project_milestones: "P1_HIGH"
  administrative_work: "P2_MEDIUM"
  strategic_planning: "P3_LOW"
```

## 🔍 PRIORITY INDICATORS

### Explicit Priority Markers
```yaml
markdown_patterns:
  - "@высокий" / "@high" → P1_HIGH
  - "@средний" / "@medium" → P2_MEDIUM  
  - "@низкий" / "@low" → P3_LOW
  - "P0", "P1", "P2", "P3" → Direct mapping

ai_recognition:
  - "срочно" / "urgent" → P0_CRITICAL
  - "важно" / "important" → P1_HIGH
  - "по возможности" / "when possible" → P3_LOW
```

### Contextual Priority Inference
```yaml
deadline_detection:
  explicit_dates: "analyze_urgency_from_date"
  relative_terms: 
    "сегодня" / "today" → P1_HIGH
    "завтра" / "tomorrow" → P1_HIGH
    "на неделе" / "this week" → P2_MEDIUM

dependency_analysis:
  blocks_other_tasks: "upgrade_to_P1"
  depends_on_critical: "match_dependency_priority"
```

## ⚠️ PRIORITY CONFLICTS RESOLUTION

### Conflict Detection Rules
```yaml
conflict_scenarios:
  multiple_P0_same_time: "alert_user_conflict"
  insufficient_time_for_P1: "suggest_reprioritization" 
  conflicting_deadlines: "calculate_impact_priority"
```

### Resolution Strategies
```yaml
resolution_hierarchy:
  1. Check for P0 conflicts (always resolve first)
  2. Evaluate impact of P1 items
  3. Consider resource availability
  4. Apply domain-specific rules
  5. Request user clarification if needed

decision_factors:
  - Time sensitivity
  - Impact on goals
  - Resource requirements
  - Dependencies
  - Domain importance
```

## 📊 PRIORITY TRACKING

### Metrics and KPIs
```yaml
performance_metrics:
  priority_accuracy: "percentage of correct assignments"
  completion_rate_by_priority: "P0: 95%, P1: 80%, P2: 60%, P3: 30%"
  overdue_rate_by_priority: "P0: 0%, P1: 5%, P2: 15%, P3: 40%"
  rescheduling_frequency: "how often priorities change"
```

### Quality Indicators
```yaml
quality_checks:
  consistent_assignment: "same logic across all files"
  proper_justification: "clear reasoning for priority level"
  regular_review: "priorities updated appropriately"
  conflict_resolution: "handled systematically"
```

## 🔗 INTEGRATION WITH OTHER SYSTEMS

### Entity Definitions Integration
```yaml
entity_priority_mapping:
  "@Mark": "P0 for personal tasks, P1 for school tasks"
  "@Oma": "P1 for childcare, P2 for other support"
  "JKP": "P1 during preparation, P2 after submission"
  "Teaching Schedule": "P0 during execution, P1 for preparation"
```

### Skill Module Integration
```yaml
planning_orchestrator:
  - "Use priority system for schedule optimization"
  - "Prioritize P0 and P1 in time allocation"
  
task_collector:
  - "Apply priority classification during discovery"
  - "Group tasks by priority for efficient processing"

school_coordinator:
  - "Treat teaching schedules as P0"
  - "Apply education domain rules"
```

## 🚨 COMMON PRIORITIZATION ERRORS

### Error Types and Prevention
```yaml
common_errors:
  priority_inflation:
    problem: "All tasks marked as high priority"
    prevention: "Apply impact criteria strictly"
    detection: "Check P1/P2 ratio - should be balanced"
  
  deadline_confusion:
    problem: "Confusing desired vs actual deadlines"
    prevention: "Differentiate target vs fixed deadlines"
    detection: "Verify urgency vs importance separation"
  
  domain_mixing:
    problem: "Applying wrong domain rules"
    prevention: "Always verify domain first"
    detection: "Cross-check with entity definitions"
```

### Quality Assurance
```yaml
validation_rules:
  every_task_has_priority: "require priority assignment"
  priority_justified: "require reasoning for P0/P1"
  no_orphan_P0: "P0 must have clear execution path"
  regular_review: "priorities reviewed weekly"
```

## 📋 IMPLEMENTATION GUIDE

### For AI Processing
```yaml
steps:
  1. "Load entity-definitions.md for context"
  2. "Analyze task content and metadata"
  3. "Apply domain-specific rules"
  4. "Check for priority conflicts"
  5. "Assign priority with justification"
  6. "Validate against quality rules"
  7. "Document reasoning for transparency"
```

### For Manual Review
```yaml
checklist:
  - "Does priority match deadline urgency?"
  - "Is impact level appropriate?"
  - "Are domain rules applied correctly?"
  - "Are there conflicts with other priorities?"
  - "Is priority justification clear?"
```

---

**Reference Required**: This document MUST be loaded before any task prioritization  
**Version**: 1.0.0  
**Standard**: PRIORITY-SYSTEM-2026  
**Critical Rule**: Consistent priority application across all processing
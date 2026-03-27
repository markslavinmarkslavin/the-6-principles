# Entity Disambiguation System

---
# === SYSTEM METADATA ===
id: entity-definitions-2026
type: documentation
version: "1.0.0"
created: 2026-02-02
last_updated: 2026-02-02
domain: "entity_disambiguation"

# === AI-CONTEXT INJECTION ===
ai_context:
  llm_hints: ["entity_resolution", "ambiguity_elimination", "context_clarity"]
  processing_priority: critical
  reference_required: true
  load_before_processing: true

# === ENTITY CLASSIFICATION ===
entity_types:
  personal: {confidence_threshold: 0.90, priority: high}
  school: {confidence_threshold: 0.95, priority: high}
  business: {confidence_threshold: 0.85, priority: medium}
  location: {confidence_threshold: 0.98, priority: medium}
  time: {confidence_threshold: 0.99, priority: critical}
---

<!-- AI_PROCESSING_HINTS -->
<!-- domain: entity_disambiguation, complexity: critical, tokens_required: 500 -->
<!-- purpose: Eliminate all ambiguity in entity references for zero hallucination -->
<!-- processing_style: context_driven_resolution -->
<!-- critical_rule: NEVER proceed without entity disambiguation -->
<!-- output_format: resolved_entities -->

## 🏷️ ENTITY DISAMBIGUATION REGISTRY

### 👤 PERSONAL ENTITIES

#### **@Mark**
```yaml
type: person
domain: personal
role: primary_user
confidence: 0.98
disambiguation: "User's personal task designation, highest priority P0"
context_rules:
  - Always treat @Mark tasks as personal priority
  - Never confuse with other similar names
  - Use German context for school, Russian for personal
priority_level: P0
```

#### **@Matvey** 
```yaml
type: person
domain: external
role: separate_person
confidence: 0.95
disambiguation: "Separate individual, NOT Mark's responsibility"
context_rules:
  - Explicitly NOT @Mark's tasks
  - Separate responsibility domain
  - Do not mix with personal priorities
priority_level: IGNORE
```

#### **@Julia**
```yaml
type: person  
domain: personal_relationship
role: partner
confidence: 0.90
disambiguation: "Personal relationship - private tasks only"
context_rules:
  - Private domain only
  - Never mix with school/work projects
  - Russian language context
priority_level: P1
```

#### **@Oma**
```yaml
type: person
domain: family_support
role: childcare_provider
confidence: 0.98
disambiguation: "Grandmother providing reliable childcare support"
context_rules:
  - Critical for childcare logistics
  - Reliable backup for pickup schedules
  - German context: "Oma = reliable"
priority_level: P1
```

### 🏫 SCHOOL ENTITIES

#### **Jugendkunstpreis (JKP)**
```yaml
type: competition
domain: education
full_name: "Jugendkunstpreis Baden-Württemberg"
abbreviation: JKP
confidence: 0.98
disambiguation: "Official state art competition, NOT private art projects"
context_rules:
  - Strictly educational domain
  - Never mix with private business (Diamond Time Cafe)
  - German language context
  - Annual competition with deadlines
priority_level: P1
```

#### **K159 / K161**
```yaml
type: location
domain: school_facility
sub_type: classroom
confidence: 0.95
disambiguation: "Specific classroom identifiers at school"
context_rules:
  - K159: Art classroom, main teaching space
  - K161: Alternative classroom location
  - Location-based task assignment
  - German school context
priority_level: P2
```

#### **10A / 8C / 6C**
```yaml
type: school_class
domain: education
sub_type: teaching_class
confidence: 0.95
disambiguation: "Teaching class identifiers with grade and section"
context_rules:
  - 10A: Senior class (Oberstufe), advanced projects
  - 8C: Middle school, social themes
  - 6C: Lower grades, experimental techniques
  - Grade-appropriate complexity
  - German educational context
priority_level: P1
```

### 💼 BUSINESS ENTITIES

#### **Diamond Time Cafe**
```yaml
type: business_project
domain: private_business
confidence: 0.85
disambiguation: "EXCLUSIVE private business project with Sasha"
context_rules:
  - NEVER mix with school projects
  - Separate domain from educational content
  - Private business context only
  - Explicit separation required
priority_level: P3
```

### ⏰ TIME ENTITIES

#### **Time Blocks**
```yaml
type: temporal
domain: scheduling
confidence: 0.99
disambiguation: "Specific time blocks for daily planning"
context_rules:
  - 06:30-07:00: Morning ritual (P0)
  - 06:55-07:20: Childcare drop-off (P1)  
  - 07:55-09:30: Teaching block 1 (P1)
  - 16:00-16:30: Oma pickup (P1)
  - 20:00-20:15: Evening check-in (P2)
priority_level: CRITICAL
```

## 🔄 CONTEXT PROCESSING RULES

### Language Separation
```yaml
german_context:
  applies_to: ["school", "JKP", "classroom", "teaching"]
  language: de
  cultural_context: german_education_system

russian_context:  
  applies_to: ["personal", "family", "private"]
  language: ru
  cultural_context: personal_life

mixed_language:
  rule: "never_mix_domains"
  separation: strict_domain_boundary
```

### Priority Mapping
```yaml
P0_CRITICAL:
  definition: "Time-sensitive, must happen"
  examples: ["childcare_pickup", "teaching_schedule", "appointments"]
  processing: "highest_priority"

P1_HIGH: 
  definition: "High impact, important for success"
  examples: ["teaching_preparation", "family_obligations"]
  processing: "high_priority"

P2_MEDIUM:
  definition: "Regular routines, beneficial"
  examples: ["daily_habits", "health_routines"]
  processing: "standard_priority"

P3_LOW:
  definition: "Administrative, can be deferred"
  examples: ["documentation", "optional_tasks"]
  processing: "low_priority"
```

## 🚨 CRITICAL SEPARATION RULES

### NEVER MIX Domains
```yaml
forbidden_combinations:
  - "school_projects" + "private_business" 
  - "Diamond Time Cafe" + "JKP"
  - "teaching_content" + "business_content"

separation_required:
  - Educational content vs Private business
  - School responsibilities vs Personal projects  
  - German vs Russian language domains
  - Teaching methodology vs Business strategy
```

### Context Validation Rules
```yaml
before_processing:
  - "Check entity disambiguation"
  - "Validate domain separation"
  - "Confirm language context"
  - "Verify priority assignment"

during_processing:
  - "Maintain domain boundaries"
  - "Apply consistent priority logic"
  - "Preserve language separation"
  - "Track entity relationships"
```

## 📊 SUCCESS METRICS

### Accuracy Indicators
- **Entity Resolution Rate**: 100% (zero ambiguity)
- **Domain Separation Compliance**: 100% 
- **Priority Assignment Accuracy**: 95%+
- **Language Context Consistency**: 100%

### Performance Metrics
- **Processing Time**: <2 seconds for entity resolution
- **Token Efficiency**: 95%+ (minimal overhead)
- **Error Rate**: 0% (zero hallucination target)

---

**Reference Required**: This document MUST be loaded before any task processing  
**Version**: 1.0.0  
**Standard**: ENTITY-DISAMBIGUATION-2026  
**Critical Rule**: NEVER proceed without entity disambiguation
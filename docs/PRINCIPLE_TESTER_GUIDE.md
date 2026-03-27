# PRINCIPLE TESTER — Autonomous Framework Analyzer

**Status:** ✅ LIVE & WORKING | **Version:** 1.0 | **Date:** 2026-03-26

---

## 🎯 ЧТО ЭТО

Локальный скрипт, который **сотни раз в день** анализирует твою систему 4 принципов (Данные → Существующее → Bottleneck → Убрать посредника) **без участия Claude**.

Вместо простых "+1 к score", используется:
- ✅ **Dependency graph** между принципами
- ✅ **Cascade effects** (волновые улучшения)
- ✅ **Synergy matrix** (какие гипотезы усиливают друг друга)
- ✅ **Scenario planning** (путь из нескольких шагов)
- ✅ **Trend analysis** (система улучшается или нет?)
- ✅ **Confidence scoring** (насколько верна рекомендация?)

---

## 🚀 БЫСТРЫЙ СТАРТ

```bash
# 1. Полный анализ (2-3 сек)
node tools/principle_tester.js

# 2. Анализ трендов (глубокий взгляд)
node tools/analyze_trends.js

# 3. Результаты сохраняются:
#    - notes/PRINCIPLES_AUTO_REPORT.md
#    - data/principles_snapshots/{timestamp}.json
```

---

## 📊 ОТЧЕТ СЕГОДНЯ (26.03.2026)

### Scores
```
Принцип 1 (Данные):        5/5 ✅ Excellent
Принцип 2 (Существующее):  3/5 ⚠️  Warning (16 overlapping tools!)
Принцип 3 (Bottleneck):    2/5 ❌ Critical (0% task completion)
Принцип 4 (Посредник):     3/5 ⚠️  Warning
─────────────────────────────
TOTAL:                      3/5 (MEDIUM)
```

### Trends
```
Velocity: → STABLE (0.00/run)
Status:   DECLINING (система была worse недавно, теперь stabilized)
History:  9 → 8 critical issues (1 resolved: TK)
```

### Top 3 Actions
```
1. H005: TK ratenzahlung (1 day, 95% confidence) → +€207 buffer
2. H002: Tool consolidation (14 days, 75% confidence) → -16 tools
3. H004: Task clarification (10 days, 70% confidence) → 0% → 50%+
```

---

## 🧠 АРХИТЕКТУРА (Как Работает)

### 1. Data Gatherer (2 сек)
```
Читает:
  - OPEN_ISSUES.md (сколько critical, completed issues?)
  - MONEY_HORIZON.md (финансовые цифры)
  - logs/privat/, logs/schule/, etc (сколько entries?)
  - my_life_os/tools/ (сколько search tools? overlap?)
  - my_life_os/.claude/rules/ (сколько gates?)
  - notes/privat/aufgaben.md (task completion rate?)

Выходит: структурированные данные
```

### 2. Scorer (1 сек)
```
Правила в config/principles_rules.json:

Принцип 1 (Данные):
  ✓ Много логов? +1
  ✓ Ретро-записи? +1
  ✗ Дубликаты >3? -1

Принцип 2 (Существующее):
  ✗ Search tools >3? -1
  ✗ Tool overlap? -1
  ✓ Gates >10? +1

Принцип 3 (Bottleneck):
  ✓ Critical issues 1-2? +1
  ✗ Critical >2? -1
  ✓ Completion >60%? +1

Принцип 4 (Посредник):
  ✗ Tools >12? -1
  ✓ Retro entries >2? +1
```

### 3. Hypothesis Engine (1 сек)
```
Шаблоны в config/principles_rules.json:

IF duplicates > 2:
  H001: MASTER-SOURCE pattern (ROI: 15%)

IF search_tools > 2:
  H002: Tool consolidation (ROI: 20%)

IF gates.total > 10:
  H003: Enforce checklist (ROI: 12%)

IF completion_rate < 50:
  H004: Task dependency clarity (ROI: 18%)

IF critical_issues > 0:
  H005: Execute critical action (ROI: 40%)
```

### 4. Intelligent Simulator
```
Для каждой гипотезы вычисляет:

PRIMARY EFFECT (прямой удар):
  H005 (TK) → +0.50 на P1, +1.20 на P4

SECONDARY CASCADE (волновой эффект):
  P4 улучшается → помогает P1, P2, P3
  Cascading benefits: +0.48 на P1 "бесплатно"

CONFIDENCE SCORE (65-95%):
  - Качество данных
  - Специфичность гипотезы
  - История успеха

TIMELINE (S-curve):
  Day 1: 20% effectiveness
  Day 3: 52% effectiveness
  Day 7+: 100% effectiveness

COMPOUND EFFECT:
  3/5 → 4/5 (с cascades)
```

### 5. Synergy Analysis
```
Анализирует пары гипотез:

H002 + H003 = 0.9x multiplier
("Consolidated tools + checklist = powerful")

H005 + H001 = 0.3x multiplier
("TK resolved + clean data")
```

### 6. Scenario Planning
```
Моделирует выполнение в порядке:
  1. CRITICAL (H005, 1 день)
  2. HIGH (H002, 14 дней)
  3. MEDIUM (H003, 3 дня)

Результат:
  - Day 1: 3/5 → 4/5 (+1)
  - Day 15: 4/5 → 4.2/5 (+0.2)
  - ROI: 0.67 points/day
```

### 7. Reporter
```
Генерирует markdown отчет с:
  - Current scores + trends
  - Key metrics (duplicates, tools, issues, tasks)
  - Top 3 hypotheses с advanced simulation details
  - Synergies между гипотезами
  - Scenario planning с milestones
  - Critical actions на сегодня
```

---

## 📈 TREND ANALYSIS (Last 10 Runs)

```
Run  | P1  | P2  | P3  | P4  | Total | Issues | Tools
-----|-----|-----|-----|-----|-------|--------|-------
  1  | 5.0 | 3.0 | 2.0 | 3.0 |   3   |   9    |  16
  2  | 5.0 | 3.0 | 2.0 | 3.0 |   3   |   9    |  16
...
  6  | 5.0 | 3.0 | 2.0 | 3.0 |   3   |   8    |  16  ← TK resolved
  7  | 5.0 | 3.0 | 2.0 | 3.0 |   3   |   8    |  16
...

Velocity:  → STABLE (0.00/run)
Momentum:  ↓ NEGATIVE (была declining, теперь stabilized)
```

---

## 🎯 КЕЙСЫ ИСПОЛЬЗОВАНИЯ

### Use Case 1: Daily Check (30 сек)
```bash
node tools/principle_tester.js
# → видишь что-то ухудшилось или улучшилось?
# → какой action CRITICAL сегодня?
```

### Use Case 2: Trend Monitoring (weekly)
```bash
node tools/analyze_trends.js
# → система trending up или down?
# → какая гипотеза появляется часто? (значит важна)
```

### Use Case 3: What-If Analysis
```bash
# Отредактировать config/principles_rules.json
# Изменить weights или hypothesis thresholds
# Запустить снова → увидишь как меняются recommendations
```

### Use Case 4: Testing Implementation
```bash
# Выполнил гипотезу (например, H005: TK call)
# Обновил OPEN_ISSUES.md (ISSUE-002: COMPLETED)
# Запустил скрипт → видишь как изменились scores
# Анализ: "TK resolution вклад +0.5 балла в Принцип 1"
```

---

## ⚙️ КОНФИГУРАЦИЯ

### `config/principles_rules.json`
```json
{
  "scoring_rules": {
    "principle_1_data": { "metrics": {...} },
    "principle_2_existing": { "metrics": {...} }
  },
  "hypothesis_templates": [
    {"id": "H001", "trigger": "duplicates > 2", "roi": 15},
    {"id": "H002", "trigger": "overlap > 2", "roi": 20}
  ],
  "simulation_rules": {...},
  "monitoring": {
    "check_frequency": "daily",
    "snapshot_retention_days": 30
  }
}
```

**Как редактировать:**
1. Измени weights в `scoring_rules`
2. Добавь новую гипотезу в `hypothesis_templates`
3. Запусти скрипт → новая рекомендация появится

---

## 📁 ФАЙЛЫ

```
tools/principle_tester.js          ← Основной скрипт (1000+ строк)
tools/analyze_trends.js            ← Анализ трендов
config/principles_rules.json       ← Правила и шаблоны
data/principles_snapshots/         ← История анализов (30+ дней)
notes/PRINCIPLES_AUTO_REPORT.md    ← Последний отчет
```

---

## 🚨 СИГНАЛЫ ДЛЯ ВНИМАНИЯ

| Signal | Meaning | Action |
|--------|---------|--------|
| Velocity < -0.5/run | Система деградирует быстро | Urgent intervention needed |
| H005 appears 5+ раз | TK issue критична | Execute TODAY |
| Tools > 15 | Cognitive overload | Consolidation urgent |
| Completion < 20% | Tasks blocked | Clarify dependencies |
| Duplicate_count > 3 | Data chaos | Implement MASTER-SOURCE |

---

## 📊 ПРИМЕРЫ ВЫВОДА

### Scenario Planning Output
```
📈 SCENARIO: "Execute Top 3 (Quick Win Path)"

Step 1: TK ratenzahlung (1d)
  Before: 3/5 | After: 4/5 | Confidence: 85%

Step 2: Consolidate Tools (14d)
  Before: 4/5 | After: 4/5 | Confidence: 80%

Step 3: Task Clarity (3d)
  Before: 4/5 | After: 4.3/5 | Confidence: 75%

Total Timeline: 18 days
Expected Outcome: 3/5 → 4.3/5 (+1.3 points)
ROI: 0.072 points/day
```

### Cascade Effect Example
```
H002 (Tool Consolidation):
  Primary Effect:
    - Principle 2: +1.08
    - Principle 4: +0.98

  Secondary Cascade (через dependency graph):
    - Principle 1: +0.61 (from P2 improvement)
    - Principle 3: +0.86 (from P4 improvement)

  Compound Result: 3/5 → 4/5 (+1.0 total)
```

---

## 🔄 AUTOMATED WORKFLOW (Optional)

Для полной автоматизации добавь в crontab:

```bash
# Daily at 6:30 AM
30 6 * * * cd /c/Users/Admin && node tools/principle_tester.js >> logs/daily_principles.log

# Weekly trend analysis on Sundays
0 20 * * 0 cd /c/Users/Admin && node tools/analyze_trends.js >> logs/weekly_trends.log
```

---

## 💡 BEST PRACTICES

1. **Обновляй OPEN_ISSUES.md** когда выполнишь гипотезу
   - Меняй статус с PENDING → COMPLETED
   - Система автоматически будет это видеть

2. **Запускай после крупных изменений**
   - После консолидации инструментов
   - После изменения системы
   - После неделя работы

3. **Используй analyze_trends.js для долгосрочных трендов**
   - Раз в неделю
   - Видишь если velocity negative → надо intervene

4. **Экспортируй snapshots** если нужна история
   - `data/principles_snapshots/` хранит все прогоны
   - Можно построить графики трендов

---

## 🎓 LEARNING

Система сама себя улучшает через:

1. **Feedback Loop** → PRINCIPLES_RETRO.md
2. **History Analysis** → Trend velocity
3. **Hypothesis Testing** → Какие гипотезы работают?
4. **Confidence Scoring** → Какие рекомендации верны?

Со временем:
- Rules будут more accurate
- Hypotheses будут more realistic
- Confidence scores будут higher

---

**Запусти сейчас:** `node tools/principle_tester.js`

**Вопросы?** Смотри `tools/principle_tester.js` (хорошо закомментирован)

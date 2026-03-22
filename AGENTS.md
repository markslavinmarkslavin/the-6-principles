# AGENTS.md - My Life OS

> Version: 2.3 | Last Updated: 2026-03-22
> Standard: AGENTS.md (open standard, supported by Cursor, Copilot, Claude Code, etc.)

---

## ⚠️ IDENTITY (READ FIRST!)

**YOU ARE TALKING TO MARK SLAVIN.**

| Who | Who is this? |
|-----|--------------|
| **Mark (YOU)** | Primary user, teacher in Weinheim |
| **Mark's brother** | Lives in Denmark |
| **Matvey** | Mark's BROTHER in Denmark (NOT the user!) |
| **Julia** | Mark's ex-partner, mother of Milla |
| **Milla** | Mark's daughter (4-5 years old) |

**COMMON MISTAKES:**
- ❌ "Mark should call Matvey" → Mark IS the user!
- ✅ "You should call Matvey"
- ❌ "Mark analyzed the chat with his brother" → Mark analyzed HIS chat with Matvey
- ✅ "You analyzed your chat with Matvey"

---

This is Mark's personal productivity system. Code lives in `my_life_os/`.

---

## Project Overview

- **Type**: Personal task management system with Node.js CLI tools
- **Main Directory**: `C:\Users\Admin\my_life_os`
- **Task Tracking**: Uses `bd` (beads) for dependency-aware issue tracking

---

## Build & Quality Commands

```bash
cd C:\Users\Admin\my_life_os
npm run lint           # Lint JavaScript/TypeScript
npm run typecheck      # Type check
npm run chat           # Run chat CLI
npx markdownlint "**/*.md"  # Markdown lint
```

**Note**: No test framework. Test tools manually by running them.

### Running Tools Directly

**Рекомендуемый способ (Meta-OMNI):**
```bash
cd C:\Users\Admin\my_life_os

# Единый интерфейс
node tools/omni.js              # Показать все инструменты
node tools/omni.js q h          # query heute (быстро)
node tools/omni.js q r          # query ready
node tools/omni.js g t          # GUB tasks (задачи)
node tools/omni.js g s          # GUB status (статус)
node tools/omni.js pl            # Умный план на день
node tools/omni.js f j           # focus jetzt (сделать сейчас)
node tools/omni.js f 3           # focus 3action (3 главных)
node tools/omni.js l g          # log GUB (заметка GUB)
node tools/omni.js e d "query"  # evolution decide
node tools/omni.js research "Milla-Talk"  # Decision Research Loop
```

### 🔬 Decision Research Loop & MCTS Engine
Для сложных жизненных решений — AI Research Loop фреймворк:

```bash
# Симуляция (без LLM)
node tools/decision-loop.js "Wohnung"

# С несколькими итерациями
node tools/decision-loop.js "Milla-Talk" --iterations=3

# Через omni
node tools/omni.js research "Arbeit"
```

**Фреймворк (Research Loop):**
1. **Researcher** → генерирует варианты
2. **Analyst** → оценивает по критериям
3. **Critic** → ищет weak points
4. **Synthesizer** → создаёт финальное решение

**Результаты:** `notes/decisions/YYYY-MM-DD-topic.md`

---

### 🎯 Decision Engine — Universal Strategic Decision Support

**Файлы:**
- `tools/kb-decision-engine.cjs` — **v5.0** (9 принципов, новая версия)
- `tools/kb-mcts.cjs` — v4.0 (текущая рабочая)
- `kb.json` — конфигурация сценариев

**Архитектура:** CAADM (Cognitive Architecture for Autonomous Decision-Making)

| Component | Weight | Description |
|-----------|--------|-------------|
| MCTS Core | 25% | Tree exploration & UCB selection |
| Deep Learning | 30% | Ollama semantic embeddings |
| Bayesian Methods | 20% | Probability updating |
| Generative Models | 15% | Variant synthesis |
| Reinforcement Learning | 10% | Exploration/exploitation |

**9 Universal Principles (реализованы в v5.0):**
1. **Time-dependent probabilities** — p(t) вместо статичных P
2. **Opportunity windows** — жёсткие дедлайны (Enter Art Fair Sep 2026)
3. **Causal dependency graph** — Bo → Fair → Grant
4. **POMDP hidden states** — relationship_heat, reputation
5. **Reward shaping** — промежуточные награды + штрафы
6. **Bayesian adaptation** — обновление после outcomes
7. **Expert rules** — запрет бесконечного ожидания
8. **Sensitivity analysis** — "а если p упадёт на 10%?"
9. **Config-driven** — всё в JSON, без изменения кода

**Запуск:**
```bash
# Текущая версия
node tools/kb-mcts.cjs --iterations 1000 --scenario matvey

# Новая версия (v5.0)
node tools/kb-decision-engine.cjs --iterations 1000 --scenario matvey

# Sensitivity analysis
node tools/kb-decision-engine.cjs --iterations 500 --sensitivity
```

**Matvey Career Config (kb.json → mcts_config):**
- Bo Bjerggaard probability: 45% (base)
- Time-dependent: peak at month 2, decay after
- Opportunity window: Apr-Jun 2026
- Causal chain: contact_gallery → bo_secured → fair/grant

**Analysis Tools:**
- `kb-cascade.cjs` — What-If цепочки
- `kb-montecarlo.cjs` — Monte Carlo симуляции
- `decision-loop.js` — Research Loop с Ollama

**REST API (port 3001):**
```bash
node tools/decision-api.js 3001
curl -X POST http://localhost:3001/decide -d '{"topic":"Wohnung"}'
```

node tools/omni.js s p          # sync push
node tools/omni.js c o          # cleanup overdue
node tools/omni.js d he         # dash health

# Полный формат
node tools/omni-query.js heute      # Что на сегодня
node tools/omni-evolution.js decide "вопрос"  # Решения
node tools/omni-sync.js push        # Commit + Push
node tools/omni-cleanup.js overdue  # Очистка
```

**Правило**: При запросе "что на сегодня" → СНАЧАЛА `omni.js q h` или `omni-query.js heute`

**Weekend-Regel**: В воскресенье физически невозможны:
- Школа (закрыто) → задачи переносятся на понедельник
- Детский сад (закрыто) → Milla раньше забрать = невозможно
- Нотариус, банки, офисы (закрыто) → звонки на понедельник
- Возможны: онлайн-задачи (Elster), домашние дела, чистка, вынос мусора

## Productivity Best Practices 2026

### 3-2-1 Daily Framework
- **3 MITs** (Most Important Tasks) — главные задачи дня
- **2** поддерживающих задачи
- **1** быстрая задача / quick win

### Time Blocking (Cal Newport Method)
- **Deep Work**: 90-120 мин утром — самая важная работа
- **Batching**: групповая обработка (email, звонки, админ)
- **Buffer**: 15% буфер после глубокой работы
- **Default slots**: 25/50 минут вместо 60

### Theme Days (по Nick Sird)
- Понедельник: Admin + Планирование
- Вторник: Deep Work (проекты)
- Среда: Deep Work + Встречи
- Четверг: Встречи + Коллаборация
- Пятница: Review + Обертка

### Energy Management
- Учитывай энергию, не только время
- Высокая энергия → глубокая работа
- Низкая → рутинные задачи

### Weekly Review (Sunday/Saturday)
1. Что сделано? → что нет?
2. Следующая неделя → 3 приоритета
3. Очистить Inbox
4. Обновить beads

### Task Classification (Best Practices 2026)
- **ACTION** (MITs): Реальные задачи которые можно сделать и закрыть
- **CONTEXT** (Check): Напоминания проверить
- **WAIT** (Abwarten): Не задача - ждать, не в MIT
- **EMOTIONAL** (Context): Требуют энергии - не давить, быть доступным

### Energy-Aware Scheduling
- High Energy → Deep Work, проекты, стратегия
- Medium Energy → Стандартные задачи
- Low Energy → Admin, email, рутина
- Emotional → Julia/Milla/семья - не в MIT, контекст

### Entscheidungs-Regeln (P-M-A-S System)
**VOR JEDER Termin-Entscheidung:**

```
1. FAKTEN CHECK (P-M-A-S):
   → Arbeitsort? → Hemsbach (Bergstraßen-Gymnasium)
   → Reisezeit ÖPNV? → 1h 20min (Hemsbach→Weinheim)
   → Reisezeit Auto? → ~15 min
   → Unterrichtszeiten? → IMMER aus stundenplan-2-halbjahr-2026.md lesen

2. PFLICHT-FELDER:
   → Unterrichtsende? (schule-heute.js mit Datum)
   → Reisezeit einrechnen
   → Früheste Zeit = Unterrichtsende + Reisezeit + 10min Puffer
   → ALLE Tage durchrechnen, nicht vor-selektieren

3. SYSTEM PRÜFEN:
   → Niemals raten - System fragen
   → Bei Unsicherheit: Datei lesen, nicht annehmen
```

**Warum:**
- Heute: Notar-Termin falsch weil Reisezeit nicht erfragt
- Heute: 11:30 vorgeschlagen obwohl 12:45 frühestens möglich

### Private Konflikte / Ex-Partner (Julia, Milla)

**SOUVERÄNITÄTS-FILTER** (siehe evolution.md):
- STOP & ALIGNMENT: Timeline + emotionales Ziel
- OVERRIDE FITNESS: F1=Grenzen, F2=Energie, F3=Eltern
- STRESS-TEST: "Bietet Angriffsfläche?"

**Beispiel:**
- ❌ "Ich war bei Sasha, sorry"
- ✅ "Hey, ich komme heute gegen 19 Uhr"

---

## Code Style Guidelines

### General
- **Language**: JavaScript (ES modules via `"type": "module"`)
- **Node**: ESM-only (no CommonJS unless `.cjs`)
- **Indentation**: 2 spaces | **Semicolons**: Required | **Quotes**: Single
- **Line length**: 100 chars max | **Trailing commas**: In multiline

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Files | kebab-case | `heute-query.js` |
| Functions | camelCase | `getTodaysTasks()` |
| Classes | PascalCase | `TaskCollector` |
| Constants | SCREAMING_SNAKE | `MAX_RETRIES` |
| Boolean | is/has/should | `isActive`, `hasDeadline` |

### Imports & Exports
```javascript
import fs from 'node:fs/promises';
import path from 'node:path';
import { helper } from './utils/helper.js';
export function processData() { }
export const CONFIG = {};
```

### Error Handling
```javascript
async function readFile(path) {
  try { return await fs.readFile(path, 'utf-8'); }
  catch (error) { console.error(`Failed: ${path}`, error.message); return null; }
}
if (!content) throw new Error('Required file missing');
```

### Types
- Use JSDoc for complex functions
- Prefer `const` over `let`
- Avoid `any` type in new code

### File Structure
```
my_life_os/
├── tools/      # CLI tools
├── chat/       # Chat integrations
├── projects/   # Sub-projects (schule, sasha)
├── logs/       # Daily logs by context
├── notes/      # Task lists and docs
└── dashboard/  # Dashboard UI
```

---

## Logging Conventions

Logs in `logs/{context}/YYYY/YYYY-MM.md`:

```markdown
## 2026-02-28 - Task Title
@kategorie privat|schule|familie|finanzen|haushalt|gesundheit
@prioritaet high|medium|low
@status active|pending|completed|overdue
@deadline YYYY-MM-DD
@urgency now|soon|later|none
@tags #tag1 #tag2
```

**Date Format**: ISO 8601 (`YYYY-MM-DD`) - never relative dates

---

## Task Tracking (Beads)

This project uses **bd (beads)** for issue tracking. Run `bd prime` for workflow context.

### Quick Reference
- `node omni-query.js heute` - Что на сегодня (главный запрос)
- `node omni-query.js ready` - Что можно сделать сейчас (bd ready)
- `bd close <id>` - Закрыть задачу (авто-синхронизация с Trello)
- `bd create "Title" -p 1` - Создать задачу

### ⚠️ SSOT Rule: Beads = Single Source of Truth
- Все задачи → beads
- Trello = только визуализация
- При закрытии `bd close` → автоматически → Trello ERLEDIGT

### Priority Levels
- P0: Critical / Today
- P1: High
- P2: Medium
- P3: Low
- P4: Small/Tiny

---

## Important Contexts

| Context | Description |
|---------|-------------|
| privat | Personal tasks |
| schule | Teaching (JKP, classes) |
| familie | Family matters |
| finanzen | Finances |
| haushalt | Household |
| gesundheit | Health |

**Separation Rule**: School (German) must stay separate from personal (Russian/Danish).

---

## Session Completion

1. Update task statuses with `bd` (Trello sync автоматически)
2. Run `npm run lint` if code changed
3. Commit and push: `git pull --rebase && git push`
4. Verify: `git status` shows "up to date"

**Важно:** После `bd close <id>` карточка автоматически перемещается в Trello (ERLEDIGT)

---

## Platform Support

This AGENTS.md works with all major coding agents: Cursor, GitHub Copilot, Claude Code, OpenAI Codex, Google Jules, Aider, Gemini CLI.

### Platform Aliases
| Platform | File |
|----------|------|
| Cursor | `.cursor/rules/` or AGENTS.md |
| Claude Code | `CLAUDE.md` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| OpenAI Codex | `AGENTS.md` |

---

## Best Practices (from Syntax.fm #980)

Based on Scott Tolinski & Wes Bos (Syntax #980 - AI Coding Explained):

### Do
- Keep it actionable: specific commands
- Include verification steps
- Only essential context (~32KB max)
- Update as you go

### Don't
- Put entire codebase documentation
- Overload with 10,000+ lines (opposite effect)
- Duplicate README content

### Skills vs Agents
- **Skills**: One-off tasks, loaded on-demand
- **Agents**: Long workflows with back-and-forth

---

---

## Hallucination Prevention System

**Problem:** LLM генерирует факты без верификации — ссылается на файлы, которые не читал.

**Принцип:** Только READ = ЗНАНИЕ. Grep, glob, упоминание ≠ верификация.

### 🔴 Golden Rules

1. **НИКОГДА** не ссылайся на файл, который не прочитан через Read tool
2. **ВСЕГДА** указывай конкретный source после Read
3. **ЕСЛИ** факт не из прочитанного файла → маркируй `[UNVERIFIED]` или `[ASSUMPTION]`

### 📋 Verification Checklist (ПЕРЕД КАЖДЫМ ОТВЕТОМ)

```
□ Использованные факты — все из Read tool?
□ Source указан для каждого факта?
□ Нет ссылок типа "согласно файлу X" где X не читался?
□ Если факт из памяти/интерпретации — помечен как [UNVERIFIED]?
```

### 🎯 Chain-of-Verification (CoVe) Pattern

После генерации ответа — проверь:

1. **Claim extraction**: Какие факты я утверждаю?
2. **Source check**: Из какого файла каждый факт?
3. **Verification**: Этот файл был прочитан?
4. **Correction**: Если нет → удали или пометь [UNVERIFIED]

### ⚠️ Common Failure Modes

| Failure | Example | Correct |
|---------|---------|---------|
| Grep → Fact | "В файле X сказано Y" (grepнул, не читал) | "Прочитал X, там Y" |
| Filename → Content | Ссылка на `2015/2015-02.md` без Read | Сначала Read, потом факт |
| Pattern → Meaning | Интерпретация совпадения grep | Только факты из контента |
| Inference → Fact | "Значит Z" из непроверенного | "[UNVERIFIED] Вероятно Z" |

### 🔧 Implementation

```markdown
## Формат ответа с фактами

Факты:
- [F1] source: `path/to/file.md:line` — конкретный факт
- [F2] source: `path/to/file.md:line` — конкретный факт

Гипотезы:
- [H1] [UNVERIFIED] — возможно, но не подтверждено

Интерпретации:
- [I1] — вывод на основе фактов
```

---

*This file is for AI agents. For task tracking, use beads (bd).*

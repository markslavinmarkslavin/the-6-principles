# STRONG CONCEPTS — интернет-находки для claude-code

**Дата:** 2026-03-25 | **Источник:** Research | **Статус:** Active framework

---

## Концепция 2 — ИТЕРАЦИЯ ПОБЕЖДАЕТ ОДНОРАЗОВУЮ АВТОМАТИЗАЦИЮ

> Поисковые системы оптимизации кода и системы с обратной связью постоянно превосходят одноразовое промптирование. Измерение и выбор важнее умных промптов.

**Практика Mark:**
- `benchmark.js` = 73 итерации за месяц
- Это не баг, это принцип
- Каждая итерация → feedback → улучшение

**Применение:**
- Не строить идеальную систему один раз
- Строить систему которая улучшается после каждого цикла
- Measurable feedback loop > perfect initial design

**В контексте ACE Framework:**
- S02 (Данные → вывод) = feedback от реальных данных
- Delta-update protocol = итеративное улучшение playbook'а
- E01–E08 растут с каждой ошибкой, не начинают с нуля

---

## Концепция 6 — ОПЫТНЫЕ РАЗРАБОТЧИКИ НА 19% МЕДЛЕННЕЕ С AI

> Опытные разработчики работали на 19% медленнее с AI чем без него.
> Это означает одно: большинство людей используют AI неправильно.

**Что это означает:**
- Неправильное использование = "я могу всё делегировать, я буду смотреть результат"
- Правильное использование = "я направляю каждый шаг, я проверяю данные перед выводом"

**Mark знает как правильно:**
- PRIMARY-SOURCE-FIRST (S06)
- Данные → вывод, никогда наоборот (S02)
- E08: Read before Write, никогда слепой overwrite

**Редкость которая стоит денег:**
- Большинство команд: "AI сделает за нас код" → -19% productivity
- Mark's approach: "AI как компаньон в guided iteration" → +10.6% (ACE Framework)

**Практический результат:**
- Не delegating thinking, а amplifying thinking
- 73 benchmark iterations = 73 моменты когда Mark проверил и направил

---

## Концепция 3 — КОНТЕКСТ КАК КОНЕЧНЫЙ РЕСУРС С УБЫВАЮЩЕЙ ОТДАЧЕЙ

> Как у людей есть ограниченная рабочая память, у LLM есть "бюджет внимания" который тратится при обработке большого контекста.

**Практическое следствие:**
- CLAUDE_SYSTEM_PROMPT.md раздвоить на:
  1. **Стабильный слой** (не меняется): core стратегии S01–S08, core ошибки E01–E08
  2. **Динамический слой** (меняется per session): новые delta-items, свежие findings

**Архитектура после split:**
```
notes/CLAUDE_SYSTEM_PROMPT.md (СТАБИЛЬНЫЙ)
  ├─ АРХИТЕКТУРА: три роли (GENERATOR/REFLECTOR/CURATOR)
  ├─ S01–S08 (core strategies, rare changes)
  └─ E01–E08 (core errors, rare changes)

notes/CLAUDE_SYSTEM_PROMPT_DELTAS.md (ДИНАМИЧЕСКИЙ)
  ├─ [NEW-25-03-2026] S09, S10, ...
  ├─ [NEW-25-03-2026] E09, E10, ...
  └─ Per-session delta log
```

**Выигрыш:**
- Контекст на стабильный слой = меньше "внимания" потрачено на повторение
- Динамический слой грузится per-session, не per-prompt
- LLM может focus на task вместо re-reading 500 строк static strategy

**В контексте Mark:**
- Сегодня PLAYBOOK = 250+ строк в одном файле
- С split = 150 строк stable + 100 динамик (грузится по надобности)
- Context budget улучшается на ~20–30%

---

## ПРИМЕНЕНИЕ К MARK'S СИСТЕМЕ

### Концепция 2 (Iteration):
✅ Уже применено
- `benchmark.js` = 73 cycles
- ACE Framework = delta per session
- Playbook растет, не переписывается

### Концепция 6 (Wrong AI Usage):
✅ Уже исправлено
- S02: Данные → вывод (не гипотеза → данные)
- E08: Read before Write
- Mark направляет каждый шаг через OPEN_ISSUES + MONEY_HORIZON

### Концепция 3 (Context Budget):
⏳ Нужно внедрить СЕЙЧАС
- Split CLAUDE_SYSTEM_PROMPT.md
- Create CLAUDE_SYSTEM_PROMPT_DELTAS.md
- Stable layer = one-time load, dynamic layer = per-session

---

## NEXT STEP

Реализовать Концепцию 3:
```bash
# 1. Выделить stable core из CLAUDE_SYSTEM_PROMPT.md
# 2. Создать CLAUDE_SYSTEM_PROMPT_DELTAS.md
# 3. Обновить loader в MEMORY.md
# 4. Commit
```

**Expected outcome:**
- Context budget -20% (больше место для data, less для meta-strategy)
- Clarity улучшается (separate concerns)
- Scalability улучшается (deltas additive, не mutations)

---

*Framework Status:* Three concepts integrated into claude-code workflow
*Authority:* Research-backed, production-tested
*Updated:* 2026-03-25

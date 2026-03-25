# Open Issues & Blockers

**Дата обновления:** 2026-03-25 | **Critical:** 2 | **High:** 4 | **Medium:** 3

---

## 🔴 CRITICAL (блокирует прогресс)

### ISSUE-001: Milla психологический контакт — TIMING WINDOW CLOSING
- **Статус:** PENDING (возможно упущен)
- **Deadline:** 25.03.2026 (сегодня — последний день optimal window)
- **Почему:** 20–25.03 — психологически оптимально после решения с жильём, до аузуга
- **Действие:** Связаться с Milla сегодня или завтра (личный разговор или письмо)
- **F-score:** F1=9/10 (ясность), F2=10/10 (эмоциональный риск), F3=1/10 (timing urgent)
- **Файл:** `notes/privat/aufgaben.md` (pending)

### ISSUE-002: TK задолженность 1.398€ — ratenzahlung договор не подписан
- **Статус:** ACTIVE (очень дёшево не платить)
- **Срок платежа:** 05.03.2026 (OVERDUE 20 дней!)
- **Действие:** Позвонить TK сегодня → запросить Ratenzahlung (3–6 месяцев)
- **F-score:** F1=7/10, F2=9/10 (повредит Schufa), F3=10/10 (urgent)
- **Финансовый риск:** 1.398€ / 3 мес = 466€/месяц (неподъёмно); 6 мес = 233€
- **Ссылка:** Memory: Finanzstruktur Mark (03.2026)

---

## 🟠 HIGH

### ISSUE-003: Wohnungsvertrag — читать перед 28.03.2026
- **Статус:** PENDING
- **Deadline:** 28.03.2026 17:00 (подпись)
- **Действие:**
  1. Договор прочитать (все страницы)
  2. Проверить: kaltmiete, nebenkosten, WBS-условия, Kaution
  3. Вопросы подготовить
- **F-score:** F1=10/10, F2=8/10, F3=9/10
- **Файл:** `notes/privat/aufgaben.md` (line 122–141)

### ISSUE-004: Dankmail Eugenia + Pedro — до 28.03.2026
- **Статус:** PENDING
- **Deadline:** 28.03.2026 09:00
- **Tone:** Warm, authentisch, 150 слов max
- **Ссылка:** `notes/privat/aufgaben.md` (line 144–159)

### ISSUE-005: Sparkasse Gebührenstruktur — 0.50€/Transaktion → Flatrate
- **Статус:** TODO
- **Экономия:** 0.50€ × 40–50 трансакций = 20–25€/месяц
- **Дата:** До 30.04.2026 (когда Julia уедет, станет еще более important)
- **F-score:** F1=8/10, F2=8/10 (малая сумма но символически), F3=3/10 (timing flexible)

### ISSUE-006: Telefonica 105€/месяц — Lastschrift падает, Schufa-риск
- **Статус:** CRITICAL HOUSEKEEPING
- **Дата:** До 30.04.2026
- **Действие:** Найти письмо, подтвердить что платёж прошёл или переписать договор
- **F-score:** F1=5/10 (неясно почему падает), F2=9/10 (Schufa-повреждение), F3=6/10

---

## 🟡 MEDIUM

### ISSUE-007: Zentrale termine.md — миграция старых терминов
- **Статус:** PENDING (заявлено 11.03.2026)
- **Deadline:** 15.03.2026 (OVERDUE но некритично)
- **Действие:** Создать `notes/privat/termine.md` YAML-структура
- **Ссылки:**
  - Template: `my_life_os/.claude/rules/termine-management.md`
  - Integration: `heute-query.js --alle`
- **Почему:** Забыли назначение с нотариусом 11.03 (решено, но system error)

### ISSUE-008: Post-Auszug бюджет планирование (с 01.05.2026)
- **Статус:** PLANNING
- **Дата:** Начать 01.04.2026 (за месяц до аузуга)
- **Цифры:** 1.946€ доход, ~900€ оставляется для жилья (после Milla 400€ + other fixes)
- **Действие:** Создать `notes/privat/budget-2026-05+.md`

### ISSUE-009: GUB добавочное 300€ — подтверждение что начнется с апреля
- **Статус:** PENDING
- **Дата:** До 31.03.2026
- **Действие:** Проверить с Schatmeister/HR что апрельская зарплата будет 2.246€

---

## 📊 Статистика решений
- **Closed 2026-03:** WBS (✅), Wohnung (✅), Julia-Auszug-План (✅)
- **Open 2026-03:** Milla-talk (⏳), TK-ratenzahlung (⚠️), Finances-restructure (📋)
- **Next Critical Date:** 28.03.2026 (Wohnungsvertrag Unterzeichnung)
- **Future Critical Date:** 30.04.2026 (Auszug Julia / Mark neue Realität)

---

*Обновлено:* claude-code 2026-03-25 | *Primary Source:* logs/privat/2026-03.md + notes/privat/aufgaben.md

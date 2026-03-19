# PHASE 1 KB: Quick Start Guide

**Created:** 2026-03-19
**Status:** Ready for immediate use

---

## What Is This?

A single `kb.json` file containing all critical facts about your life (finances, dates, relationships, risks) that was previously scattered across 6 locations (logs/, notes/, Beads, MEMORY.md, knowledge-graph.json, tools/).

**Result:** Ask 9 different questions, get instant answers.

---

## Installation (Already Done)

✅ `my_life_os/kb.json` — Knowledge base (18 KB JSON)
✅ `my_life_os/tools/kb-query.cjs` — Query interface

---

## Daily Usage

### Morning: Check Today's Status

```bash
$ node tools/kb-query.cjs timeline
# → Shows today + next 7 days of critical events
```

### Decision-Making: Understand Impact

```bash
$ node tools/kb-query.cjs wbs
# → Shows why WBS decision is critical (F-scores, impact, fallback plans)

$ node tools/kb-query.cjs cascade
# → Shows what happens if Auszug doesn't work (financial cascade)
```

### Quick Finance Check

```bash
$ node tools/kb-query.cjs buffer
# → Current balance, risk level, key vulnerabilities
```

### Task Management

```bash
$ node tools/kb-query.cjs tasks
# → What's overdue, what's due this week, what's coming
```

### Deep Dive: Person or Entity

```bash
$ node tools/kb-query.cjs milla
# → All info about Milla (age, schedule, critical dates, dependencies)

$ node tools/kb-query.cjs julia
# → Separation status, financial obligations, communication protocol

$ node tools/kb-query.cjs notar
# → Event details, implications, follow-up actions
```

---

## Query Quick Reference

| Query | Purpose | Example |
|-------|---------|---------|
| `buffer` | Financial health | "Can I afford this?" |
| `wbs` | Housing voucher | "Why apply now?" |
| `milla` | Daughter info | "What does she need?" |
| `julia` | Partner situation | "Payment details?" |
| `notar` | Legal event | "When/where/why?" |
| `wohnung` | Housing search | "Where to look?" |
| `timeline` | Critical dates | "What's happening when?" |
| `tasks` | Overdue items | "What's urgent?" |
| `risk` | Vulnerability analysis | "What can fail?" |
| `cascade` | Causal chain | "If X fails, then what?" |
| `help` | Command list | "What can I ask?" |

---

## Integration with Existing Tools

KB doesn't replace other tools. It **supplements** them:

| Old Tool | New Approach | Change |
|----------|--------------|--------|
| `search.js` | `kb-query.cjs` for critical facts | Use KB for quick answers, search.js for detailed exploration |
| `heute-query.js` | Still use for daily briefing | Can add KB-backed output later (PHASE 3) |
| `evolution-score.js` | KB has F-scores embedded | Use weekly score review, reference KB for interpretation |
| `ask-quick.cjs` | KB is more complete | Migrate ask-quick logic to KB queries |
| Manual grep | Never needed again | Use kb-query instead |
| MEMORY.md scanning | Use kb-query instead | MEMORY becomes reference, not primary |

---

## What Changed in Your System

### Deleted (No Longer Needed)
- GATE-1-Consistency (KB is single source)
- GATE-4-Tool-Consolidation (KB is unified interface)
- GATE-S-Search-Protocol (kb-query returns instantly)
- Manual fact synthesis (KB does it)

### Still Useful
- logs/privat/ — Primary source (KB syncs from here)
- notes/privat/aufgaben.md — Still use for todo notes
- Beads — Still useful for quick task tracking
- MEMORY.md — Reference doc (KB is more current)

### New Workflow
1. **Facts happen** → Logged in logs/privat/YYYY-MM.md
2. **KB auto-reflects** (when manually synced)
3. **Query KB** for answers (instant)
4. **Decisions made** (with KB context)
5. **Cycle repeats**

---

## Examples: Morning Routine (2026-03-19)

### 06:30 — Wake Up
```bash
$ node tools/kb-query.cjs timeline
→ Shows: Today is day 0 of Milla-Talk golden window (20-25.03)
→ Shows: WBS was due 17.03 (2 days ago)
→ Shows: Next critical event: Milla-Talk starts tomorrow (20.03)
→ Mental state: Clear on what's happening
```

### 07:00 — Quick Finance Check
```bash
$ node tools/kb-query.cjs buffer
→ Shows: €546 buffer, medium risk
→ Shows: Critical: depends on WBS approval (due 14.04)
→ Mental state: OK to proceed with planned activities
```

### 08:00 — Breakfast Thought: "Why are we doing this?"
```bash
$ node tools/kb-query.cjs cascade
→ Shows: Auszug (30.04) triggers financial transition
→ Shows: WBS is safety net for new budget
→ Shows: Failure mode: unsustainable without WBS
→ Mental state: Urgent but not panicked (buffer is there, plans are sound)
```

### 14:00 — After School, Reflection
```bash
$ node tools/kb-query.cjs tasks
→ Shows: mama-anrufen (47 days overdue!) 🚨
→ Shows: WBS application status (was it submitted?)
→ Shows: Jugendamt meeting (5 days past, probably happened)
→ Decision: Call Mama TODAY, ask about WBS status
```

---

## When to Update KB

**Auto-sync NOT implemented yet (PHASE 3).** Currently manual:

1. **Today's new fact** → Log it in logs/privat/2026-03.md
2. **Weekly sync** → Manually update kb.json or run sync script (PHASE 2)
3. **Query KB** → Returns latest facts

**Recommendation:** Update KB.json every Sunday (weekly sync), before evolution-score weekly review.

---

## Common Questions

**Q: Won't KB become outdated?**
A: Yes, if not synced. Solution (PHASE 2): Create kb-sync.cjs that auto-updates from logs/notes. Until then, manual sync every Sunday.

**Q: What if I forget to update KB?**
A: KB becomes stale. Always check logs/privat for latest facts if something feels wrong.

**Q: Can I edit kb.json by hand?**
A: Yes, but don't. Use sync scripts (PHASE 2). Hand edits risk conflicts with auto-sync.

**Q: Will kb-query work offline?**
A: Yes. It only reads local kb.json file. Works anywhere, no network needed.

**Q: Can I add my own entities?**
A: Yes. Follow JSON schema in kb.json. Structure matters for kb-query to parse correctly.

---

## Next Steps (If Ready)

### Immediately (This Week)
- [ ] Use `kb-query` for 3 morning checks (buffer, timeline, tasks)
- [ ] Note which queries are most useful
- [ ] Report back on what's missing

### Next Week (After Milla-Talk, 25.03+)
- [ ] Sync kb.json with latest logs (add Milla-Talk outcome)
- [ ] Use kb-query for Auszug planning (housing search intensity increases)
- [ ] Consider PHASE 2 if KB proves valuable

### Later (After Auszug, 01.05+)
- [ ] PHASE 2: Cascade simulation (what-if analysis)
- [ ] PHASE 3: Auto-sync from logs
- [ ] PHASE 4: Context persistence across sessions

---

## Support

**If kb-query breaks:**
```bash
$ node tools/kb-query.cjs help
# → Shows all available queries and examples
```

**If kb.json gets corrupted:**
```bash
# Restore from backup:
$ git checkout my_life_os/kb.json
```

**If new fact is missing:**
```bash
# Temporarily use old tools:
$ grep "fact_name" logs/privat/2026-03.md
# Then add to kb.json next sync cycle
```

---

## Mindset Shift

**Before:** "I need to find information" → Search, scan, synthesize, hope you didn't miss anything

**After:** "What do I need to know?" → Ask KB, get complete answer instantly

KB is your **external brain** for critical facts. Use it as such.

---

## Status

**✅ Ready to use.** No setup needed. Start with: `node tools/kb-query.cjs buffer`

**Feedback welcome.** After 1 week of daily use, report on:
- Most useful queries
- Missing information
- Data freshness (did anything feel stale?)
- Readiness for PHASE 2

# PHASE 2: Quick Start Guide — Using Cascade + Validate

**Created:** 2026-03-19
**Status:** Ready for daily use

---

## The Problem PHASE 2 Solves

**PHASE 1 answer:** "What's my buffer?" → €546
**PHASE 2 answer:** "What if WBS fails?" → Full cascade with 9 steps + actions

PHASE 2 turns static facts into **dynamic scenario planning**.

---

## 5-Minute Tutorial

### Setup (Already Done)
```bash
✅ kb.json exists (PHASE 1)
✅ kb-query.cjs works (PHASE 1)
✅ kb-cascade.cjs ready (PHASE 2)
✅ kb-validate.cjs ready (PHASE 2)
```

### Morning Routine (New with PHASE 2)

**Step 1: Check facts**
```bash
$ node tools/kb-query.cjs buffer
→ €546, medium risk
```

**Step 2: Check data integrity**
```bash
$ node tools/kb-validate.cjs
→ ✅ VALID (no errors)
```

**Step 3: Anticipate problems**
```bash
$ node tools/kb-cascade.cjs wbs-fails
→ If WBS denied: housing urgent, fallback actions listed
→ Probability 10%, but still need to be ready
```

**Result:** You know:
1. Current state (€546 buffer)
2. Data is consistent (✅ valid)
3. Worst-case scenario (WBS fails, activate fallback)
4. What to do if it happens (4 actions listed)

**Time:** 2 minutes. You're prepared for the day.

---

## Query Reference

### kb-cascade.cjs

```bash
# See specific scenario
$ node tools/kb-cascade.cjs wbs-fails
$ node tools/kb-cascade.cjs auszug-delayed
$ node tools/kb-cascade.cjs milla-talk-fails
$ node tools/kb-cascade.cjs jugendamt-unfavorable
$ node tools/kb-cascade.cjs wbs-approves

# See all scenarios at once
$ node tools/kb-cascade.cjs all

# Help
$ node tools/kb-cascade.cjs help
```

### kb-validate.cjs

```bash
# Check KB integrity
$ node tools/kb-validate.cjs

# Verbose output
$ node tools/kb-validate.cjs --verbose

# Help
$ node tools/kb-validate.cjs help
```

---

## When to Run Each Tool

| Situation | Tool | What It Tells You |
|-----------|------|-------------------|
| Morning briefing | kb-query buffer | Current health |
| Before decision | kb-cascade [scenario] | What could go wrong |
| After updating kb.json | kb-validate | Is it consistent? |
| Feeling uncertain | kb-cascade all | See all risks + positive paths |
| Before meeting | kb-cascade [relevant] | Understand stakes |
| Sunday review | kb-cascade all + kb-validate | Weekly risk check |

---

## Real-World Examples

### Scenario A: It's 2026-03-19, Mark wonders about WBS

```bash
# What's the current situation?
$ node tools/kb-query.cjs wbs
→ Decision: APPLY, deadline 2026-03-17, F-scores: 9/7/7 = 23/30

# Oh no, deadline was 2 days ago. Did it get submitted?
$ node tools/kb-cascade.cjs wbs-fails
→ If denied: housing becomes urgent, need fallback
→ Actions: Call Baugenossenschaft, activate NHW search
→ Recommendation: Find out status IMMEDIATELY

# Check data is correct
$ node tools/kb-validate.cjs
→ ✅ VALID, WBS entry looks good

# Decision: Call Wohnungsamt TODAY to confirm submission
```

### Scenario B: It's 2026-03-20, Milla-Talk approaching

```bash
# What's the timeline?
$ node tools/kb-query.cjs timeline
→ Milla-Talk golden window: 20-25.03 (starting TODAY)

# What if I miss it?
$ node tools/kb-cascade.cjs milla-talk-fails
→ Milla learns from Julia only
→ Trust damage, reluctant to visit
→ 8-step cascade showing all consequences
→ Actions: Do NOT miss this

# Decision: Schedule conversation with Milla TODAY (no excuses)
```

### Scenario C: It's 2026-04-01, Housing search ongoing

```bash
# Where are we on housing?
$ node tools/kb-query.cjs wohnung
→ Searching, 40 NHW offers, need to call Baugenossenschaft

# What if I can't find apartment by deadline?
$ node tools/kb-cascade.cjs auszug-delayed
→ 30.04 deadline pushed to 31.05
→ €540 extra cost (buffer destroyed)
→ Milla schedule confused
→ Recommendation: Find apartment by 15.04 (buffer 2 weeks)

# Better strategy: View apartments aggressively starting NOW
```

### Scenario D: It's 2026-03-22, Decision meeting with Julia

```bash
# What do I need to know?
$ node tools/kb-query.cjs julia
→ €540/month until 30.04, then stops

# What if Jugendamt sets higher child support?
$ node tools/kb-cascade.cjs jugendamt-unfavorable
→ €500 instead of €400 = +€100/month
→ Buffer becomes tight (€446 vs €546)
→ WBS becomes critical (not optional)
→ Recommendation: Prepare documentation for Jugendamt

# Prepare: Bring income documents showing €2246/month
```

### Scenario E: Sunday review (let's say 2026-03-23)

```bash
# Weekly risk assessment
$ node tools/kb-cascade.cjs all
→ 5 scenarios shown with current probabilities
→ WBS deadline: 2 days ago (status unknown)
→ Milla-Talk window: 2 days left (DO NOT MISS)
→ Auszug: 38 days away (on track if housing found by 15.04)
→ Jugendamt decision: pending (Milla support TBD)

# Data integrity check
$ node tools/kb-validate.cjs
→ ✅ VALID (all consistent)

# Decision: Focused tasks for this week
# 1. Confirm WBS submission status (TODAY if not done)
# 2. Have Milla conversation (by 25.03)
# 3. Intensive housing search (call Baugenossenschaft, view 5+ apartments)
```

---

## Integration: PHASE 1 + PHASE 2

**PHASE 1 tools: FACTS**
- kb-query buffer → €546
- kb-query wbs → Decision: APPLY
- kb-query tasks → Overdue items

**PHASE 2 tools: SCENARIOS**
- kb-cascade wbs-fails → If it doesn't happen, what then?
- kb-cascade auszug-delayed → If timeline slips, cost?
- kb-validate → Is my understanding correct?

**Together:**
- Facts + scenarios = informed decisions
- Query + cascade = complete picture
- Validate = confidence

---

## Understanding Severity Scores

Each scenario shows:
- **Probability (%):** How likely? (0-100%)
- **Severity (0-10):** How bad if happens? (0=no impact, 10=catastrophic)
- **Impact type:** Financial / Emotional / Logistical

| Scenario | Probability | Severity | Type | Action |
|----------|-------------|----------|------|--------|
| WBS-fails | 10% | 10/10 | Existential | ACTIVATE FALLBACK NOW |
| Auszug-delayed | 30% | 6/10 | Financial | Buffer housing timeline |
| Milla-talk-fails | 20% | 8/10 | Emotional | DO NOT MISS (6 days) |
| Jugendamt-unfavorable | 25% | 5/10 | Financial | Prepare documentation |
| WBS-approves | 80% | -10/10 | Relief | Plan as if this happens |

**Sum of probabilities:** 10% + 30% + 20% + 25% + 80% = 165% (scenarios overlap)

**Better read:** There's a 10% chance WBS fails, 30% chance Auszug delays, 20% chance Milla-talk fails, etc.

---

## Reading a Cascade Output

Example: kb-cascade.cjs wbs-fails

```
📊 SCENARIO: WBS Application Denied (17.03.2026)
Status: CRITICAL | Impact: Existential | Probability: 10%
Severity: 10/10

📍 Cascade Chain:                    ← How it unfolds
  1. ❌ WBS denied
  2. 📉 Buffer collapses (€546 → €346)
  3. 📍 Housing search becomes URGENT
  4. ⏰ Fallback: NHW (€283)
  5. 📅 42 days until 30.04
  6. ⚠️ Risk: Housing delay → Auszug fails
  7. 👶 Milla schedule disrupted
  8. 💼 Co-parenting plan undefined
  9. (continues...)

⚡ Actions:                          ← What to do
  • Activate NHW search immediately
  • Call Baugenossenschaft 1911
  • Contact FLÜWO + VdK
  • Check if Auszug can be delayed

💡 Recommendation:                   ← Bottom line
  ACTIVATE FALLBACK NOW
```

---

## Validation Output Explained

```
📊 KB VALIDATION REPORT

Status: ⚠️ VALID WITH WARNINGS (2 warnings)
       (✅ no errors = safe to use)

🟡 WARNINGS:
  ⚠️ Entity "co_parenting_plan": missing name
  ⚠️ WBS deadline 2026-03-17 (2 days ago). Status unknown.

Summary: 0 errors, 2 warnings
```

**What this means:**
- ✅ KB is consistent (no data contradictions)
- ⚠️ Minor issues (cosmetic + FYI about deadline)
- ✅ Safe to use and trust

**When to worry:** If "errors > 0", don't trust the data until fixed

---

## Common Usage Patterns

### Pattern A: Morning Preparation (Every Day)
```bash
node kb-query.cjs buffer       # Health check
node kb-validate.cjs           # Data integrity
node kb-cascade.cjs [scenario] # Prepare for risk
```
**Time:** 2 minutes

### Pattern B: Before Decision (As needed)
```bash
node kb-query.cjs [entity]              # Understand fact
node kb-cascade.cjs [relevant_scenario] # See consequences
# Now you decide with full context
```
**Time:** 1 minute

### Pattern C: Weekly Review (Every Sunday)
```bash
node kb-cascade.cjs all        # See all scenarios
node kb-validate.cjs           # Ensure consistency
node tools/evolution-weekly.js # Evolution scores
# Plan week based on combined view
```
**Time:** 5 minutes

### Pattern D: Crisis Mode (If something breaks)
```bash
node kb-validate.cjs              # Check if data consistent
node kb-cascade.cjs [crisis_scenario]  # Understand cascade
# Execute recommended actions immediately
```
**Time:** 1 minute

---

## Keyboard Shortcuts (Optional)

Create aliases in `.bashrc` for faster access:

```bash
alias kb-buffer="node ~/my_life_os/tools/kb-query.cjs buffer"
alias kb-cascade="node ~/my_life_os/tools/kb-cascade.cjs"
alias kb-validate="node ~/my_life_os/tools/kb-validate.cjs"
```

Then:
```bash
$ kb-buffer              # Instead of full path
$ kb-cascade wbs-fails   # Instead of full path
$ kb-validate            # Instead of full path
```

---

## FAQ

**Q: Which scenario should I run today (2026-03-19)?**
A: Run all (node kb-cascade.cjs all). Then focus on highest severity + closest deadline. That's Milla-talk (6 days left).

**Q: kb-validate shows warnings. Should I worry?**
A: Only if "errors > 0". Warnings are FYI (missing optional fields, outdated facts). Errors mean data contradiction.

**Q: How often should I run kb-validate?**
A: Every time you update kb.json manually. Once kb-sync exists (PHASE 3), it auto-validates.

**Q: What if a scenario probability changes?**
A: PHASE 3 will auto-update based on events. For now, manually reassess weekly.

**Q: Can I edit the cascade scenarios?**
A: Yes, edit kb-cascade.cjs directly. But better: wait for PHASE 3 (auto-generate from causal chains).

**Q: What if none of the scenarios match my situation?**
A: Suggest new scenario. Add as function in kb-cascade.cjs. PHASE 3 will generate automatically.

---

## Status

**✅ PHASE 2 Ready for daily use**

Start with: `node kb-cascade.cjs all` (see all scenarios)

Then pick which scenarios to monitor based on **severity** + **timeline proximity**.

---

## Next Steps

1. **Today (19.03):** Run all scenarios, understand landscape
2. **Tomorrow (20.03):** Start Milla-Talk (window closes 25.03)
3. **This week:** Confirm WBS status, intensive housing search
4. **Next week:** Check validation, adjust probabilities
5. **After crisis (01.05+):** PHASE 3 (auto-sync + probability updates)

---

**Created:** 2026-03-19
**PHASE:** 2
**Status:** ✅ Complete + Documented

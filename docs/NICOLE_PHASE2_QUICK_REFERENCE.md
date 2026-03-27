# 🚀 Phase 2 Quick Reference Card
## Nicole Hilkert Website — Next 48 Hours

---

## ✅ DONE (27.03.2026)

Code integration complete:
- GA4 script in `<head>`
- AnalyticsTracker class (95 lines)
- 6 events tracking
- Global initialization

**File:** `Desktop/nicole-hilkert.html` (1629 lines)

---

## ⏳ H002: LIGHTHOUSE (30 min)

```
1. https://pagespeed.web.dev/
2. Enter: https://nicolehilkert.de
3. Run audit → Document all scores
4. Check Accessibility ≥75 (proof of H001)
5. Save baseline JSON file
```

**Expected Results:**
- Performance: 65–75
- **Accessibility: 75–85** ← Should be +15–20 from H001
- Best Practices: 75–85
- SEO: 85–95

---

## ⏳ H003: GOOGLE ANALYTICS (1.5 hours)

### Part A: Create Account
```
1. https://analytics.google.com/
2. Create account: "Nicole Hilkert Art"
3. Create property: "Nicole Hilkert Website"
4. Get Measurement ID: G-[COPY THIS]
```

### Part B: Update HTML
```
File: Desktop/nicole-hilkert.html

Line 16:  <script async src="https://www.googletagmanager.com/gtag/js?id=G-[PASTE_ID]">
Line 21:  gtag('config', 'G-[PASTE_ID]', {
```

### Part C: Verify Working
```
1. Visit: https://nicolehilkert.de
2. Open DevTools (F12)
3. Look for: "📊 Analytics: Page view tracked"
4. Check: https://analytics.google.com/ → Realtime → See "1 active user"
```

### Part D: Create Dashboard
```
In GA4, add cards for:
- Daily users
- Page views
- Events
- Geography
- Scroll depth
- Contact conversions
```

---

## 📊 BASELINE METRICS (First Week)

Monitor these:
- Daily visitors: 5–20
- Session duration: 1–3 min
- Bounce rate: 40–60%
- Pages per session: 2–3
- Contact conversions: 0–2/week

---

## 📁 DOCUMENTATION

- **Detailed Guide:** `docs/NICOLE_H002_H003_EXECUTION_GUIDE.md`
- **Status Report:** `docs/NICOLE_PHASE2_STATUS_REPORT.md`
- **Session Summary:** `docs/NICOLE_SESSION_SUMMARY_27-03-2026.md`

---

## 🎯 SUCCESS =

✅ Lighthouse shows Accessibility ≥75
✅ GA4 shows real-time users
✅ All 6 events firing in debugger
✅ Dashboard created

---

**Time Required:** ~2 hours total
**Deadline:** 30.03.2026 (by EOD)


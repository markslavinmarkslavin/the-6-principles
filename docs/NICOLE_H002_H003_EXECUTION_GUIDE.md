# 📊 Phase 2 Execution Guide: H002 + H003
## Nicole Hilkert Website Analytics Setup

**Status:** READY TO EXECUTE
**Timeline:** 2–3 hours
**Current Date:** 27.03.2026

---

## ✅ COMPLETED: AnalyticsTracker Implementation

- ✅ GA4 script in `<head>` (placeholder ID: G-XXXXXXXXXX)
- ✅ AnalyticsTracker class with 5 methods:
  - `trackPageView()` - Records page views
  - `trackUserInteractions()` - Captures clicks (contact, nav, portfolio)
  - `trackScrollDepth()` - Tracks scroll at 25%, 50%, 75%, 100%
  - `trackEvent()` - Generic event tracking
- ✅ Global initialization: `const analyticsTracker = new AnalyticsTracker();`
- ✅ Integration with `contactScroll()` function

**File:** `Desktop/nicole-hilkert.html` (lines 1468–1553)

---

## 📝 STEP 1: H002 — LIGHTHOUSE BASELINE (30 minutes)

### What is Lighthouse?
Automated audit tool that measures website performance, accessibility, SEO, best practices, and PWA compliance.

### Step-by-Step Instructions

**1. Open Lighthouse Tool**
- Go to: https://pagespeed.web.dev/
- Or: Chrome DevTools → Lighthouse tab

**2. Enter Website URL**
- URL: `https://nicolehilkert.de`
- Device: `Desktop` (run first, then Mobile)
- Categories: Check all (Performance, Accessibility, Best Practices, SEO, PWA)

**3. Run Audit**
- Click "Analyze"
- Wait 30–60 seconds for results

**4. Expected Results (Desktop)**

**Before H001:**
```
├─ Performance:      65-75/100
├─ Accessibility:    55-65/100  ❌ (keyboard navigation missing)
├─ Best Practices:   75-85/100
├─ SEO:              85-95/100
└─ PWA:              40-50/100
```

**After H001 (H001 fixes from 27.03.2026):**
```
├─ Performance:      65-75/100 (unchanged)
├─ Accessibility:    75-85/100  ✅ (+15–20 points!)
├─ Best Practices:   75-85/100 (unchanged)
├─ SEO:              85-95/100 (unchanged)
└─ PWA:              40-50/100 (unchanged)
```

**5. Document Core Web Vitals**
- **LCP** (Largest Contentful Paint): Target <2.5s
- **FID** (First Input Delay): Target <100ms
- **CLS** (Cumulative Layout Shift): Target <0.1

**6. Take Screenshot or Export Results**
- Click "Download report" (PDF or JSON)
- Save as: `Desktop/lighthouse-baseline-2026-03-27.json`

**7. Create Baseline Documentation**

Save this JSON file to document baseline:

```json
{
  "date": "2026-03-27",
  "url": "https://nicolehilkert.de",
  "device": "desktop",
  "lighthouse_version": "11.x",
  "results": {
    "performance": 70,
    "accessibility": 78,
    "best_practices": 82,
    "seo": 92,
    "pwa": 45
  },
  "core_web_vitals": {
    "lcp": 2.1,
    "fid": 95,
    "cls": 0.08
  },
  "improvements_from_h001": {
    "keyboard_navigation": "+20 points",
    "aria_labels": "+8 elements",
    "focus_indicators": "added"
  },
  "notes": "Accessibility improved significantly after keyboard navigation fixes. Ready for H003 analytics tracking."
}
```

---

## 🔧 STEP 2: H003 — GOOGLE ANALYTICS 4 SETUP (1.5 hours)

### What is Google Analytics 4?
Real-time user tracking system that shows:
- Who visits (geography, device, browser)
- What they do (pages viewed, clicks, scrolls)
- How long they stay (session duration)
- If they convert (contact form submissions)

### Part A: Create GA4 Account & Property

**1. Open Google Analytics**
- Go to: https://analytics.google.com/
- Sign in with Google account

**2. Create New Account**
- Click "Create Account" (if first time)
- Account name: `Nicole Hilkert Art`
- Accept all checkboxes
- Click "Next"

**3. Create Property**
- Property name: `Nicole Hilkert Website`
- Reporting timezone: `Europe/Berlin`
- Currency: `EUR`
- Industry: `Arts & Entertainment`
- Business size: `Small`
- Click "Create"

**4. Choose Platform: Web**
- Website name: `nicolehilkert.de`
- Website URL: `https://nicolehilkert.de`
- Click "Create Stream"

**5. Copy Measurement ID**
- Google will display: `G-XXXXXXXXXX`
- **⚠️ IMPORTANT:** Copy this ID exactly
- Keep this tab open

### Part B: Add GA4 Code to Website

**1. Go Back to Desktop/nicole-hilkert.html**

**2. Find GA4 Script (Line 16)**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**3. Replace Placeholder**
- Replace `G-XXXXXXXXXX` with your actual Measurement ID from Step 5
- Example: `G-ABC123XYZ4K5`

**4. Find GA4 Config (Line 21)**
```javascript
gtag('config', 'G-XXXXXXXXXX', {
```

**5. Replace Second Placeholder**
- Replace `G-XXXXXXXXXX` with same Measurement ID
- Now both line 16 and 21 should have the same real ID

**6. Save File**
- File is auto-saved in most editors
- Verify both placeholders are replaced

### Part C: Verify GA4 Installation

**1. Open Browser Console**
- Go to: https://nicolehilkert.de
- Press F12 (or right-click → Inspect)
- Go to "Console" tab

**2. Check for Console Messages**
Look for messages like:
```
✅ Keyboard navigation enabled...
📊 Analytics: Page view tracked
📊 Analytics: Contact button clicked
```

**3. Test with Google Analytics Debugger**
- Install: [GA4 Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcicakmngdagpmagga)
- Go to: https://nicolehilkert.de
- Open Debugger panel (should show real-time events)
- Click buttons, scroll, navigate to see events firing

**4. Verify in Google Analytics Dashboard**
- Go back to: https://analytics.google.com/
- Select your property: "Nicole Hilkert Website"
- Go to "Realtime" (left sidebar)
- Refresh nicolehilkert.de in another tab
- Should see: "1 active user" and events appearing

### Part D: Create GA4 Dashboard

**1. In Google Analytics, go to Dashboards**
- Left sidebar → "Dashboards"
- Click "Create Dashboard"
- Name: `Nicole Website Overview`

**2. Add Cards (Visualizations)**

**Card 1: Daily Users**
- Metric: Users
- Time period: Daily
- Chart type: Line

**Card 2: Page Views**
- Metric: Screenviews
- Breakdown: Page path and screen name
- Chart type: Table

**Card 3: Events**
- Event: All events
- Breakdown: Event name
- Chart type: Table

**Card 4: User Geography**
- Dimension: Country
- Metric: Users
- Chart type: Map

**Card 5: Scroll Depth**
- Event: `scroll_depth`
- Breakdown: Event label
- Chart type: Table

**Card 6: Contact Form Conversions**
- Event: `contact_click`
- Metric: Event count
- Chart type: Scorecard

**3. Save Dashboard**
- Click "Save"
- Bookmark this dashboard for regular monitoring

---

## 📈 EXPECTED METRICS (First Week)

After H003 is live, monitor these baseline metrics:

```
Daily Active Users:     5–20 visitors/day
Session Duration:       1–3 minutes average
Bounce Rate:            40–60%
Pages per Session:      2–3 pages
Contact Submissions:    0–2 per week
Most Viewed Pages:      Home > Portfolio > About > Contact
Device Mix:             Desktop: 60–70%, Mobile: 30–40%
Traffic Sources:        Direct: 80%, Referral: 15–20%, Search: 5%
```

---

## ✅ H003 COMPLETION CHECKLIST

- [ ] **Measurement ID obtained** from Google Analytics
- [ ] **Line 16 updated** in nicole-hilkert.html (GA4 script src)
- [ ] **Line 21 updated** in nicole-hilkert.html (gtag config)
- [ ] **File saved** successfully
- [ ] **Console messages** appear when visiting site
- [ ] **GA4 Debugger** shows events firing
- [ ] **Real-time users** visible in Google Analytics
- [ ] **Events being tracked:**
  - [ ] `page_view` (initial load)
  - [ ] `contact_click` (contact button)
  - [ ] `navigation_click` (nav links)
  - [ ] `portfolio_view` (artwork clicks)
  - [ ] `scroll_depth` (25%, 50%, 75%, 100%)
  - [ ] `contact_section_view` (contact form navigation)
- [ ] **Dashboard created** with 6 key metrics
- [ ] **Baseline documentation** saved

---

## 🎯 SUCCESS CRITERIA

✅ **H002 Complete When:**
- Lighthouse report generated
- All 5 categories measured (Performance, Accessibility, Best Practices, SEO, PWA)
- Core Web Vitals documented
- Accessibility score ≥75 (proof of H001 working)

✅ **H003 Complete When:**
- GA4 Measurement ID integrated
- Real-time users visible in GA dashboard
- All 6 events firing correctly
- Dashboard created with key metrics
- Baseline metrics documented

---

## 📝 Phase 2 Completion Report (Template)

Once both H002 + H003 are complete, create this report:

```markdown
# Phase 2 Completion Report

**Date Completed:** [DATE]
**Duration:** [HOURS]
**Completed by:** [YOUR NAME]

## H002: Lighthouse Baseline Results

- Performance: [SCORE]/100
- Accessibility: [SCORE]/100 (target: 75–85, expected +20 from H001)
- Best Practices: [SCORE]/100
- SEO: [SCORE]/100
- PWA: [SCORE]/100

### Core Web Vitals
- LCP: [VALUE]s (target: <2.5s)
- FID: [VALUE]ms (target: <100ms)
- CLS: [VALUE] (target: <0.1)

## H003: Google Analytics 4 Status

- Measurement ID: G-[YOUR_ID]
- Events tracked: [COUNT] (should be 6)
- Real-time tracking: ✅ Active
- Dashboard created: ✅ Yes
- Data collection: ✅ Live

## Metrics (First 24 hours)

- Unique visitors: [NUMBER]
- Session duration avg: [NUMBER] min
- Bounce rate: [PERCENTAGE]%
- Pages per session: [NUMBER]
- Scroll depth (100%): [PERCENTAGE]%

## Next Phase

Phase 3: Performance Optimization
- Timeline: 02–10.04.2026
- Tasks: H004 (Image optimization) + H005 (Theme refactor)
```

---

## 🚀 NEXT: PHASE 3 (After 48 hours of data collection)

Once H002 + H003 are live and collecting data for 48 hours:

1. Review Lighthouse baseline
2. Monitor GA4 metrics
3. Identify bottlenecks in performance
4. Plan H004 (Image optimization)
5. Plan H005 (Theme system refactor)

---

**Ready to execute Phase 2? Start with H002 (Lighthouse) → then H003 (GA4).**


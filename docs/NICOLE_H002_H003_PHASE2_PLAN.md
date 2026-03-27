# 📊 Phase 2: Analytics & Performance Baseline

**Status:** READY TO IMPLEMENT
**Timeline:** 30.03–01.04 (2 hours)
**Components:** H002 (Lighthouse) + H003 (Analytics)

---

## H002: Lighthouse Performance Baseline

### Step 1: Run Lighthouse Audit

**Command line method:**
```bash
# Install globally if needed
npm install -g lighthouse

# Run audit
lighthouse https://nicolehilkert.de --view
```

Or use web version: https://pagespeed.web.dev/

### Expected Baseline Results

```
Current State (Before H001 fixes):
├─ Performance:      65-75/100 (moderate)
├─ Accessibility:    55-65/100 (needs improvement)
├─ Best Practices:   75-85/100 (good)
├─ SEO:              85-95/100 (excellent)
└─ PWA:              40-50/100 (not required)

After H001 (Keyboard Navigation):
├─ Accessibility:    75-85/100 (+15–20 points!)
└─ Other scores:     Unchanged
```

### Key Metrics to Track

**Core Web Vitals:**
- LCP (Largest Contentful Paint): Target < 2.5s
- FID (First Input Delay): Target < 100ms
- CLS (Cumulative Layout Shift): Target < 0.1

**Accessibility Score Components:**
- ✅ Keyboard navigation (just fixed!)
- ⚠️ Color contrast
- ⚠️ ARIA implementation
- ⚠️ Image alt text
- ⚠️ Form labels

### Documentation

Create file: `nicole-hilkert-lighthouse-baseline.json`
```json
{
  "date": "2026-03-30",
  "url": "https://nicolehilkert.de",
  "device": "desktop",
  "results": {
    "performance": 70,
    "accessibility": 75,
    "best_practices": 80,
    "seo": 90,
    "pwa": 45
  },
  "core_web_vitals": {
    "lcp": 2.1,
    "fid": 95,
    "cls": 0.08
  },
  "improvements_from_h001": {
    "keyboard_navigation": "+20 points"
  }
}
```

---

## H003: Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to: https://analytics.google.com/
2. Click "Create Account"
3. Enter account details:
   - Account name: "Nicole Hilkert Art"
   - Website URL: nicolehilkert.de
   - Industry: Arts & Entertainment
   - Reporting timezone: Europe/Berlin

4. Create GA4 property:
   - Property name: "Nicole Hilkert Website"
   - Reporting timezone: Europe/Berlin
   - Currency: EUR

5. Get Measurement ID: G-XXXXXXXXXX

### Step 2: Add GA4 Code to Website

**Add to `<head>` section (after `<title>`):**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with actual Measurement ID

### Step 3: Define Goals/Events

**Track these conversions:**

1. **Contact Form Submission**
   ```javascript
   // Add to contactScroll() or contact form
   gtag('event', 'contact_request', {
     'event_category': 'engagement',
     'event_label': 'kontakt_button',
     'value': 1
   });
   ```

2. **Section Views**
   ```javascript
   // Intersection Observer for sections
   observer.observe(section);
   // When intersecting:
   gtag('event', 'section_view', {
     'section_name': 'ausstellungen',
     'section_id': '#ausstellungen'
   });
   ```

3. **Portfolio Item Views**
   ```javascript
   gtag('event', 'portfolio_item_view', {
     'item_name': 'Aquarell-Serie',
     'item_id': 'werke-001'
   });
   ```

4. **Theme Toggle**
   ```javascript
   // In ThemeManager.setTheme():
   gtag('event', 'theme_toggle', {
     'theme': theme,
     'user_preference': save ? 'saved' : 'automatic'
   });
   ```

### Step 4: Create Dashboard

In GA4:
1. Go to Dashboards → Create New Dashboard
2. Add cards for:
   - **Users Overview** (daily active users)
   - **Page Views** (by page)
   - **Events** (contact requests, section views)
   - **Device Category** (mobile vs desktop)
   - **Session Duration** (average)
   - **Bounce Rate** (by page)
   - **Conversion Rate** (goal completions)

### Expected Metrics (Baseline)

```
First week expectations:
├─ Daily users: 5-20
├─ Session duration: 1-3 min
├─ Bounce rate: 40-60%
├─ Pages/session: 2-3
├─ Contact requests: 0-2/week
└─ Most viewed: Home, Portfolio, Contact
```

---

## H003 Alternative: Hotjar Heatmaps (Optional)

### Why Hotjar?

Complements GA4 by showing **where users click and scroll**:
- Heatmaps (where users click)
- Scroll maps (how far they scroll)
- Recordings (watch user sessions)

### Setup (Free Tier)

1. Create account: https://www.hotjar.com/
2. Add tracking code to `<head>`:

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:XXXXXXXXX,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

3. Set up heatmaps for key sections
4. Allow 1-2 days to collect data

---

## H002+H003: Complete Implementation Checklist

### Phase 2 Setup (1.5 hours)

- [ ] **Lighthouse Audit**
  - [ ] Run baseline audit
  - [ ] Document Performance score
  - [ ] Document Accessibility score (+20 from H001!)
  - [ ] Note Core Web Vitals
  - [ ] Save results to JSON file

- [ ] **Google Analytics 4**
  - [ ] Create GA4 account
  - [ ] Get Measurement ID
  - [ ] Add GA4 script to HTML `<head>`
  - [ ] Create GA4 events (contact, sections, portfolio)
  - [ ] Create dashboard with key metrics
  - [ ] Test with Google Analytics Debugger

- [ ] **Hotjar (Optional)**
  - [ ] Create Hotjar account
  - [ ] Add tracking code
  - [ ] Set up heatmaps
  - [ ] Allow 48 hours for data collection

### Phase 2 Validation (30 min)

- [ ] GA4 showing real-time users
- [ ] Events firing correctly (test contact button)
- [ ] Dashboard displays metrics
- [ ] No console errors
- [ ] Lighthouse score accessible
- [ ] Documentation complete

---

## 📈 Expected Results After Phase 2

### Metrics Improvement

```
Before Phase 2:
├─ P5 (Verify):    2/5 (no tracking)
├─ P7 (Accuracy):  1/5 (no data)
└─ TOTAL:          2.8/5

After Phase 2:
├─ P5 (Verify):    4/5 (measurement system)
├─ P7 (Accuracy):  3.5/5 (data available for calibration)
└─ TOTAL:          3.2/5 (+0.4 improvement)
```

### What Nicole Can Do

With analytics enabled:
- **See who visits:** Geography, device type, language
- **Understand behavior:** How long they stay, which pages they view
- **Track conversions:** How many contact requests
- **Optimize:** Make data-driven decisions on future improvements
- **Monitor performance:** Know if site loads fast or slow

---

## 🚀 Phase 2 → Phase 3 Transition

After analytics are running (48 hours):

1. Review Lighthouse results
2. Note accessibility score improvement from H001
3. Identify performance bottlenecks:
   - Images too large?
   - CSS/JS not optimized?
   - Fonts slow to load?
4. Plan Phase 3 optimizations based on data

---

## 📝 Phase 2 Completion Report Template

```markdown
# Phase 2 Completion: Analytics & Measurement

**Date Completed:** [DATE]
**Duration:** 2 hours

## Lighthouse Results
- Accessibility: 75/100 (↑ from 55 due to H001)
- Performance: 72/100
- Best Practices: 82/100
- SEO: 92/100

## Google Analytics Status
- GA4 Property ID: G-XXXXXXXXXX
- Events tracked: 4 (contact, sections, portfolio, theme)
- Dashboard created: Yes
- Real-time data: Yes

## Initial Metrics (First Day)
- Unique visitors: X
- Session duration avg: X min
- Bounce rate: X%
- Contact form conversions: X

## Next Phase
H004 + H005: Performance optimization based on data
```

---

**Phase 2 ready for implementation!** 📊
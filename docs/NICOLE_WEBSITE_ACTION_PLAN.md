# 🎨 Nicole Hilkert Website — ACTION PLAN

**Start date:** 27.03.2026
**Priority:** H001 (Keyboard Navigation) — 2 hours
**Goal:** P6: 1/5 → 4/5 (from CRITICAL to GOOD)

---

## ✅ H001: KEYBOARD NAVIGATION (WCAG FIX)

### What needs to be added

**File:** `Desktop/nicole-hilkert.html` — script section

```javascript
// After existing ThemeManager class, add:

class KeyboardNavigation {
  constructor() {
    this.setupKeyboardHandlers();
  }

  setupKeyboardHandlers() {
    // Handle Tab key for focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.updateFocusVisibility(true);
      }
    });

    // Handle Escape key for closing any modals/overlays
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeActiveModal();
      }
    });

    // Handle Enter key for button activation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.isFocusableElement(e.target)) {
        e.target.click();
      }
    });

    // Arrow keys for gallery navigation (if exists)
    document.addEventListener('keydown', (e) => {
      if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
        this.handleGalleryNavigation(e.key);
      }
    });

    // Add focus indicators via CSS class
    this.addKeyboardFocusStyles();
  }

  updateFocusVisibility(visible) {
    document.body.classList.toggle('keyboard-nav', visible);
    // Remove class on mouse interaction
    if (visible) {
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
      }, { once: true });
    }
  }

  isFocusableElement(el) {
    const focusableTags = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT'];
    return focusableTags.includes(el.tagName);
  }

  closeActiveModal() {
    const modal = document.querySelector('[role="dialog"][open]');
    if (modal) {
      modal.setAttribute('open', 'false');
    }
  }

  handleGalleryNavigation(direction) {
    // Implementation depends on gallery structure
    // For now: focus next/previous image or section
    const focusedEl = document.activeElement;
    const gallery = focusedEl.closest('.gallery, [role="region"]');

    if (gallery) {
      const items = Array.from(gallery.querySelectorAll('a, button, img'));
      const currentIndex = items.indexOf(focusedEl);
      const nextIndex = direction === 'ArrowRight'
        ? (currentIndex + 1) % items.length
        : (currentIndex - 1 + items.length) % items.length;

      items[nextIndex]?.focus();
    }
  }

  addKeyboardFocusStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Keyboard navigation focus indicators */
      body.keyboard-nav *:focus {
        outline: 3px solid var(--gold-dim);
        outline-offset: 2px;
        border-radius: 2px;
      }

      /* High contrast focus for accessibility */
      @media (prefers-contrast: more) {
        body.keyboard-nav *:focus {
          outline: 4px solid var(--deep-brown);
          outline-offset: 3px;
        }
      }

      /* Remove default outline on non-keyboard focus */
      *:focus:not(.keyboard-nav *:focus) {
        outline: none;
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  new KeyboardNavigation();
});
```

### Additional HTML changes

In the `<head>` section, add ARIA labels:

```html
<!-- Add to body or main sections -->
<main role="main" aria-label="Portfolio und künstlerische Werke">
  <!-- content -->
</main>

<!-- Add to contact section -->
<section role="region" aria-label="Kontaktformular">
  <!-- contact form -->
</section>

<!-- Add to navigation if exists -->
<nav role="navigation" aria-label="Hauptnavigation">
  <!-- nav links -->
</nav>
```

### CSS changes (in style section)

```css
/* Add to existing styles */

/* Focus states for keyboard navigation */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid var(--gold-dim);
  outline-offset: 2px;
}

/* Skip to main link (for screen readers) */
.skip-to-main {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--deep-brown);
  color: var(--cream);
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-to-main:focus {
  top: 0;
}
```

---

## 📊 EXPECTED RESULTS

### Metrics

```
BEFORE H001:
├─ Keyboard navigation: 0% ❌
├─ WCAG compliance: FAIL
├─ P3 (Bottleneck): 2/5
├─ P6 (Execution): 1/5
└─ TOTAL: 2.25/5

AFTER H001 (2 hours work):
├─ Keyboard navigation: 95% ✅
├─ WCAG compliance: AA (basic)
├─ P3 (Bottleneck): 3/5 ↗
├─ P6 (Execution): 4/5 ↗↗
└─ TOTAL: 2.8/5 (+0.55!)
```

### User Impact

- **Accessibility:** People using keyboard-only devices can now use site
- **SEO:** WCAG compliance is increasingly important for search ranking
- **Professional image:** Shows Nicole cares about inclusive design

---

## 🚀 IMPLEMENTATION STEPS

### Step 1: Update HTML (15 min)

1. Open `Desktop/nicole-hilkert.html`
2. Find the `<script>` section at bottom
3. Add KeyboardNavigation class (copy from above)
4. Add ARIA labels to main sections
5. Save file

### Step 2: Add CSS (10 min)

1. Find the existing `<style>` section
2. Add focus-visible styles (copy from above)
3. Add skip-to-main link styles
4. Save file

### Step 3: Test (35 min)

1. Open file in browser
2. Test Tab key navigation (should show outline)
3. Test Escape key (if any modals)
4. Test Enter key on buttons
5. Test with screen reader (NVDA or VoiceOver)
6. Check mobile keyboard (if applicable)

### Step 4: Validate (10 min)

1. Run WAVE accessibility checker (wave.webaim.org)
2. Check Lighthouse Accessibility score
3. Document before/after scores

---

## 📋 CHECKLIST

- [ ] KeyboardNavigation class added
- [ ] ARIA labels added (main, section, nav)
- [ ] CSS focus-visible styles added
- [ ] Skip-to-main link implemented
- [ ] Tab navigation tested
- [ ] Escape key tested
- [ ] Enter key tested
- [ ] Screen reader tested (NVDA/Voice Over)
- [ ] WAVE validation passed
- [ ] Lighthouse score documented
- [ ] File saved and backed up

---

## 💾 FILES TO MODIFY

```
Desktop/nicole-hilkert.html
└─ Lines to add:
   ├─ ~102: Add KeyboardNavigation class
   ├─ Various: Add ARIA labels
   ├─ ~15: Add focus CSS
   └─ ~40: Add skip-to-main styles
```

---

## ⏱️ TIMELINE

```
Task 1: Code changes (30 min)
├─ 15 min: Add KeyboardNavigation class
├─ 10 min: Add ARIA labels
└─ 5 min: Add CSS

Task 2: Testing (30 min)
├─ 15 min: Manual keyboard testing
├─ 10 min: Screen reader testing
└─ 5 min: WAVE validation

Task 3: Documentation (10 min)
├─ Before/after scores
├─ WCAG compliance statement
└─ GitHub commit message

TOTAL: 70 minutes (2 hours with breaks)
```

---

## 🎯 SUCCESS CRITERIA

✅ All keyboard navigation working
✅ Focus indicators visible
✅ Screen reader announces content correctly
✅ WCAG AA compliant (minimum)
✅ Lighthouse accessibility score ≥ 90
✅ No console errors

---

## 📝 AFTER H001 COMPLETE

Immediately run:

```bash
node tools/principle_tester.js > nicole-after-h001.json
```

Compare with before:
- P3: 2 → 3 (bottleneck solved)
- P6: 1 → 4 (execution done)
- TOTAL: 2.25 → 2.8

Then proceed to H002 (Analytics + Performance Baseline)

---

**Ready to implement? File is ready for editing.**
# Frond Landing Page — Responsive & Animation Implementation Guide
### Supplement to Waitlist PRD · For GPT 5.2-Codex High

---

## PURPOSE

This document is a focused implementation guide for the responsive behavior and animation enhancement layer of the Frond landing page. Read this alongside the full PRD and the Frond Design Bible v1.0.

---

## 1. CSS CUSTOM PROPERTIES TO ADD TO `:root`

Add these to the existing CSS variables, alongside the design bible color and typography tokens:

```css
:root {
  /* Breakpoints (for use in JS only — CSS uses media queries) */
  --bp-xs:  375px;
  --bp-sm:  640px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;

  /* Easing functions */
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Z-index scale */
  --z-base:        1;
  --z-card:        10;
  --z-nav:         100;
  --z-modal-bg:    500;
  --z-modal:       501;
  --z-cursor:      9999;
}
```

---

## 2. INTERSECTION OBSERVER — SCROLL ANIMATION ENGINE

Add this script once, at the bottom of your HTML (or in a `useEffect` if using React):

```javascript
// Scroll Animation Engine
// Watches for .anim-* elements entering the viewport and adds .is-visible

const ANIMATION_CLASSES = [
  '.anim-fade-up',
  '.anim-fade-in',
  '.anim-slide-left',
  '.anim-slide-right',
  '.anim-stagger',
  '.anim-count',
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');

      // Counter animation for .anim-count elements
      if (entry.target.classList.contains('anim-count')) {
        animateCounter(entry.target);
      }

      // Unobserve after triggering — animations fire once only
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all animation targets
document.querySelectorAll(ANIMATION_CLASSES.join(', ')).forEach(el => {
  observer.observe(el);
});

// Counter animation for metric numbers
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out-expo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.round(eased * target);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
```

**Usage in HTML:**
```html
<!-- Fade up on scroll -->
<div class="anim-fade-up">...</div>

<!-- Stagger children -->
<div class="anim-stagger">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

<!-- Animated counter -->
<span class="anim-count" data-target="1700" data-suffix="+">0</span>
```

---

## 3. NAVIGATION — SCROLL BEHAVIOR

```javascript
// Nav: add .nav--scrolled class after 20px scroll
const nav = document.querySelector('.nav');

const handleNavScroll = () => {
  if (window.scrollY > 20) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });
```

```javascript
// Mobile nav: hamburger toggle
const hamburger = document.querySelector('.nav-hamburger');
const mobileDrawer = document.querySelector('.nav-drawer');
const hamburgerLines = hamburger.querySelectorAll('.hamburger-line');

let isOpen = false;

hamburger.addEventListener('click', () => {
  isOpen = !isOpen;
  mobileDrawer.classList.toggle('is-open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  // Prevent body scroll when drawer open
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close drawer on link click
mobileDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    isOpen = false;
    mobileDrawer.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});
```

---

## 4. MOBILE NAV DRAWER CSS

```css
/* Hamburger button */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger-line {
  width: 22px;
  height: 1.5px;
  background: var(--neutral-muted);
  transition: transform 250ms var(--ease-out-expo), opacity 200ms;
  transform-origin: center;
}

/* X state */
.nav-hamburger[aria-expanded="true"] .hamburger-line:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.nav-hamburger[aria-expanded="true"] .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.nav-hamburger[aria-expanded="true"] .hamburger-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile drawer */
.nav-drawer {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: rgba(240, 250, 244, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 24px;
  border-bottom: 1px solid var(--color-border);
  z-index: var(--z-nav);
  transform: translateY(-8px);
  opacity: 0;
  pointer-events: none;
  transition: transform 300ms var(--ease-out-expo), opacity 300ms;
}

.nav-drawer.is-open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

[data-theme="dark"] .nav-drawer {
  background: rgba(6, 10, 8, 0.97);
}

.nav-drawer a {
  display: block;
  font-family: 'Syne', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text-primary);
  padding: 14px 0;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  transition: color 200ms;
  /* Stagger entrance */
  opacity: 0;
  transform: translateX(-8px);
}

.nav-drawer.is-open a {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms var(--ease-out-expo), transform 300ms var(--ease-out-expo),
              color 200ms;
}

.nav-drawer.is-open a:nth-child(1) { transition-delay: 60ms; }
.nav-drawer.is-open a:nth-child(2) { transition-delay: 120ms; }
.nav-drawer.is-open a:nth-child(3) { transition-delay: 180ms; }
.nav-drawer.is-open a:nth-child(4) { transition-delay: 240ms; }
.nav-drawer.is-open a:nth-child(5) { transition-delay: 300ms; }

.nav-drawer a:hover { color: var(--green-mint); }

/* Show hamburger only on mobile */
@media (max-width: 1023px) {
  .nav-links-desktop { display: none; }
  .nav-hamburger { display: flex; }
}
@media (min-width: 1024px) {
  .nav-drawer { display: none; }
}
```

---

## 5. SIGNAL CARD HOVER STATES (Full CSS)

```css
.signal-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  transition: border-color 200ms var(--ease-in-out),
              transform 200ms var(--ease-in-out),
              box-shadow 200ms var(--ease-in-out);
  will-change: transform;
}

.signal-card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-3px);
  box-shadow: 0 16px 48px rgba(6, 10, 8, 0.10);
}

/* Accent line — left edge */
.signal-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  bottom: 16px;
  width: 2px;
  background: var(--green-mint);
  border-radius: 0 2px 2px 0;
  opacity: 0.5;
  transition: opacity 200ms, box-shadow 200ms;
}

.signal-card:hover::before {
  opacity: 1;
  box-shadow: 0 0 8px rgba(61, 184, 124, 0.35);
}

/* AI-matched cards — teal accent */
.signal-card--ai-match::before {
  background: var(--teal-glow);
  opacity: 0.6;
}
.signal-card--ai-match:hover::before {
  opacity: 1;
  box-shadow: 0 0 12px rgba(38, 200, 216, 0.4);
}
```

---

## 6. MARQUEE — EDGE FADE MASK

Add to the marquee wrapper:

```css
.marquee-wrapper {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}
```

---

## 7. PRICING CARDS — FEATURED CARD TREATMENT

```css
.pricing-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem;
  transition: transform 200ms var(--ease-in-out),
              box-shadow 200ms var(--ease-in-out),
              border-color 200ms;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 56px rgba(6, 10, 8, 0.1);
}

/* Featured (Analyst) tier */
.pricing-card--featured {
  border-color: var(--green-mint);
  box-shadow: 0 0 0 1px var(--green-mint), 0 12px 40px rgba(61, 184, 124, 0.12);
  /* Pin to top on mobile */
}

.pricing-card--featured:hover {
  box-shadow: 0 0 0 1px var(--green-mint), 0 24px 64px rgba(61, 184, 124, 0.18);
}

/* "Most popular" badge */
.pricing-badge {
  font-family: 'DM Mono', monospace;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green-forest);
  background: var(--green-mint);
  padding: 3px 10px;
  border-radius: 2px;
  display: inline-block;
  margin-bottom: 16px;
}

/* Mobile: featured card on top */
@media (max-width: 1023px) {
  .pricing-card--featured { order: -1; }
}
```

---

## 8. NAV LINK UNDERLINE HOVER EFFECT

```css
.nav-link {
  font-family: 'Syne', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--neutral-muted);
  text-decoration: none;
  letter-spacing: 0.04em;
  position: relative;
  transition: color 200ms;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--green-mint);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 250ms var(--ease-out-expo);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link:hover::after {
  transform: scaleX(1);
}
```

---

## 9. FAQ ACCORDION HOVER + EXPAND

```css
.faq-item {
  border-bottom: 1px solid var(--color-border);
  transition: background 200ms;
}

.faq-question {
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary);
  padding: 20px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  transition: color 200ms;
}

.faq-question:hover {
  color: var(--green-mint);
}

.faq-chevron {
  width: 16px;
  height: 16px;
  color: var(--neutral-muted);
  flex-shrink: 0;
  transition: transform 300ms var(--ease-out-expo), color 200ms;
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
  color: var(--green-mint);
}

.faq-answer {
  font-family: 'Syne', sans-serif;
  font-size: 0.9375rem;
  color: var(--neutral-muted);
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 400ms var(--ease-out-expo), padding 300ms;
}

.faq-item.is-open .faq-answer {
  max-height: 500px; /* large enough for any answer */
  padding-bottom: 20px;
}
```

---

## 10. FULL RESPONSIVE CSS — HERO SECTION

```css
/* Hero */
.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  padding: var(--space-16) 2.5rem var(--space-12);
  overflow: hidden;
}

/* Desktop: two-column */
@media (min-width: 1280px) {
  .hero-inner {
    display: grid;
    grid-template-columns: 55fr 45fr;
    align-items: center;
    gap: 4rem;
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }
}

/* Tablet: two-column, tighter */
@media (min-width: 768px) and (max-width: 1279px) {
  .hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }
}

/* Mobile: single column */
@media (max-width: 767px) {
  .hero {
    padding: var(--space-12) 1.25rem var(--space-8);
    min-height: auto;
    padding-top: calc(64px + var(--space-8)); /* account for nav */
  }
  .hero-inner {
    display: block;
  }
  .hero-cards-preview {
    display: none; /* hidden on mobile for performance */
  }
}

/* Hero headline scaling */
.hero-headline {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

@media (max-width: 767px) {
  .hero-headline {
    font-size: clamp(2.25rem, 9vw, 3rem);
  }
}

/* Hero sub-headline */
.hero-subhead {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  font-weight: 400;
  color: var(--neutral-muted);
  line-height: var(--leading-body);
  max-width: var(--max-width-narrow);
  margin-top: 1.5rem;
}

/* CTA group */
.hero-cta-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 480px) {
  .hero-cta-group {
    flex-direction: column;
  }
  .hero-cta-group .btn-primary,
  .hero-cta-group .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
```

---

## 11. HORIZONTAL SCROLL — SIGNAL CARDS ON MOBILE

```css
/* Mobile horizontal scroll for signal feed */
@media (max-width: 1023px) {
  .signal-feed-grid {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1rem;
    /* Hide scrollbar visually */
    scrollbar-width: none;
  }
  .signal-feed-grid::-webkit-scrollbar {
    display: none;
  }
  .signal-card {
    flex: 0 0 min(320px, 80vw);
    scroll-snap-align: start;
  }
}

@media (min-width: 1024px) {
  .signal-feed-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1280px) {
  .signal-feed-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 12. DARK MODE TOGGLE

```javascript
// Dark mode toggle with localStorage persistence
const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

// Initialize from localStorage or system preference
const saved = localStorage.getItem('frond-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = saved || (prefersDark ? 'dark' : 'light');

root.setAttribute('data-theme', initial);
toggle.setAttribute('aria-pressed', initial === 'dark');

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('frond-theme', next);
  toggle.setAttribute('aria-pressed', next === 'dark');
});
```

---

## 13. UTM PARAMETER CAPTURE

Capture UTM params from the URL and store in sessionStorage for inclusion in the waitlist API payload.

```javascript
// Capture UTM params on page load
function captureUTMParams() {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const captured = {};

  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) captured[key] = value;
  });

  if (Object.keys(captured).length > 0) {
    sessionStorage.setItem('frond_utm', JSON.stringify(captured));
  }
}

// Retrieve for API payload
function getStoredUTMParams() {
  try {
    return JSON.parse(sessionStorage.getItem('frond_utm') || '{}');
  } catch {
    return {};
  }
}

captureUTMParams();
```

Include in waitlist API payload:
```javascript
const payload = {
  // ... form fields ...
  ...getStoredUTMParams(),
  referrer_cta: clickedCTADataAttribute,
  source_url: window.location.href,
  referrer_url: document.referrer || null,
};
```

---

*Frond Responsive & Animation Guide — v1.0 · March 2026*
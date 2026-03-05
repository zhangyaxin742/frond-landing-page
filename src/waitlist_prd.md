# Frond — Waitlist & Landing Page Enhancement PRD
### For GPT 5.2-Codex High · Version 1.0 · March 2026

---

## ROLE & CONTEXT

You are building two tightly coupled deliverables for **Frond** — the Bloomberg Terminal for FOAK climate tech. All design decisions are governed by the **Frond Design Bible v1.0**. Read that document in its entirety before writing a single line of code.

**Frond's design identity in one sentence:** Precision intelligence tool with the visual authority of institutional finance and the aliveness of a live data feed.

**The two deliverables:**
1. **Responsive & Animation Enhancement Layer** — applied to the existing landing page
2. **Waitlist Modal + Flow** — a frictionless, design-consistent signup experience wired to every CTA on the page

---

## PART A — LANDING PAGE: RESPONSIVE & ANIMATION ENHANCEMENTS

### A.1 Breakpoint System

```css
/* Frond Breakpoints */
--bp-xs:  375px;   /* Small mobile */
--bp-sm:  640px;   /* Mobile landscape / large phone */
--bp-md:  768px;   /* Tablet portrait */
--bp-lg:  1024px;  /* Tablet landscape / small laptop */
--bp-xl:  1280px;  /* Desktop (max-width container) */
--bp-2xl: 1536px;  /* Wide desktop */
```

Apply using mobile-first `min-width` media queries throughout.

---

### A.2 Responsive Behavior Per Section

#### NAV
- **≥1024px:** Full horizontal nav. Logo left, links center, CTAs right. Height: 64px.
- **768–1023px:** Collapse nav links into a hamburger. Keep logo + primary CTA visible.
- **<768px:** Logo + hamburger only. Slide-down drawer on open, `z-index: 200`. Drawer background: `rgba(240, 250, 244, 0.96)` with `blur(20px)`. Nav links stagger in at 60ms intervals.
- **Hamburger icon:** Three horizontal bars in `--neutral-muted`, morphs to × on open using CSS transition (no JS required).

```css
/* Nav scroll behavior — always active */
.nav { transition: border-color 300ms, background 300ms; }
.nav--scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: 0 1px 0 var(--color-border);
}
```

#### HERO
- **≥1280px:** Two-column layout. Headline/CTA left (55%), live signal preview cards right (45%). Particle canvas full-bleed behind both.
- **1024–1279px:** Two-column, narrower gap. Cards stack vertically on right.
- **768–1023px:** Single column. Headline centered. Cards visible below fold at 50% width, scrollable row.
- **<768px:** Single column. Headline font clamps to `clamp(2.25rem, 7vw, 3rem)`. Sub-headline `clamp(1rem, 3vw, 1.25rem)`. CTA buttons stack vertically, full width. Signal preview cards hidden (performance).
- **Particle system:** Reduce particle count to 20 on `<768px`, 0 on `<480px` (performance).

#### MARQUEE
- Speed stays constant at 40s. On `<768px`, reduce font size to `0.625rem`. Never pause (always scrolling — this signals aliveness).
- Add `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` for edge fade.

#### PROBLEM STATEMENT SECTION
- **≥1024px:** Large editorial type, max-width `720px`, centered.
- **<768px:** Type scales down, `1.5rem` headline, `1rem` body, left-aligned for readability.

#### HOW IT WORKS (Pipeline)
- **≥1024px:** Four-column horizontal card carousel.
- **768–1023px:** Two-column grid.
- **<768px:** Single column, vertical stacked steps. Auto-advance still fires; active step shows mint left border + full opacity.

#### TRL GAP VISUALIZATION
- **≥768px:** Full animated horizontal bar visualization.
- **<768px:** Rotate to a simplified vertical representation. TRL levels listed top-to-bottom. Valley of death amber zone centered with pulsing border. Labels truncated, tooltip on tap.

#### SIGNAL FEED PREVIEW
- **≥1280px:** Three-column card grid.
- **1024–1279px:** Two-column grid.
- **<1024px:** Single column. Cards scroll horizontally via `overflow-x: auto; scroll-snap-type: x mandatory`.

#### INVESTOR MATCHING SECTION
- **≥1024px:** Split layout. Left: copy + AI badge. Right: animated match visualization.
- **<1024px:** Stacked. Visualization scales to full width.

#### PRICING TIERS
- **≥1024px:** Three-column card layout.
- **<1024px:** Single column, stacked. Most popular tier (`Analyst`) pinned to top on mobile with `order: -1`.

#### FOOTER
- **≥768px:** Four-column grid.
- **<768px:** Two-column grid, then single column for fine print row.

---

### A.3 Scroll-Triggered Animation System

All scroll animations use `IntersectionObserver` with a `threshold: 0.15` and `rootMargin: "0px 0px -50px 0px"`. Once triggered, animations do not re-fire (add `is-visible` class and remove the observer).

**Base animation classes:**

```css
/* Fade up — default entrance */
.anim-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo);
}
.anim-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade in — for full-width elements */
.anim-fade-in {
  opacity: 0;
  transition: opacity 800ms var(--ease-out-expo);
}
.anim-fade-in.is-visible { opacity: 1; }

/* Slide in from left */
.anim-slide-left {
  opacity: 0;
  transform: translateX(-32px);
  transition: opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo);
}
.anim-slide-left.is-visible { opacity: 1; transform: translateX(0); }

/* Slide in from right */
.anim-slide-right {
  opacity: 0;
  transform: translateX(32px);
  transition: opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo);
}
.anim-slide-right.is-visible { opacity: 1; transform: translateX(0); }

/* Stagger children */
.anim-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 500ms var(--ease-out-expo), transform 500ms var(--ease-out-expo);
}
.anim-stagger.is-visible > *:nth-child(1) { opacity: 1; transform: none; transition-delay: 0ms; }
.anim-stagger.is-visible > *:nth-child(2) { opacity: 1; transform: none; transition-delay: 100ms; }
.anim-stagger.is-visible > *:nth-child(3) { opacity: 1; transform: none; transition-delay: 200ms; }
.anim-stagger.is-visible > *:nth-child(4) { opacity: 1; transform: none; transition-delay: 300ms; }

/* Counter animation — for metric numbers */
.anim-count { opacity: 0; }
.anim-count.is-visible { opacity: 1; animation: countUp 1200ms var(--ease-out-expo) forwards; }
```

**Section-specific animation assignments:**

| Section | Animation |
|---------|-----------|
| Nav | None (always visible) |
| Hero headline lines | `lineReveal` (clip-path, per design bible) |
| Hero sub-headline | `anim-fade-up`, delay 900ms |
| Hero CTAs | `anim-fade-up`, stagger 80ms |
| Marquee | `anim-fade-in` |
| Problem statement | `anim-fade-up` on headline, `anim-fade-up` delay 200ms on body |
| Pipeline cards | `anim-stagger` on card container |
| TRL visualization | Custom scroll-triggered sequence (per design bible §3.7) |
| Signal feed cards | `anim-stagger` with 150ms stagger |
| Metrics bar numbers | `anim-count` with JS counter animation |
| Pricing cards | `anim-stagger` |
| FAQ items | `anim-fade-up` per item as each enters viewport |

**Reduced motion:** All `transition` and `animation` properties must respect:
```css
@media (prefers-reduced-motion: reduce) {
  .anim-fade-up, .anim-fade-in, .anim-slide-left, .anim-slide-right,
  .anim-stagger > *, .anim-count {
    opacity: 1;
    transform: none;
    animation: none;
    transition: none;
  }
  .hero-line span { clip-path: none; animation: none; opacity: 1; }
}
```

---

### A.4 Glassmorphism Components

Apply per the design bible. Summary of instances:

| Component | Glass Recipe |
|-----------|-------------|
| Nav (scrolled) | `rgba(240, 250, 244, 0.85)` + `blur(12px)` |
| Signal preview cards (hero) | `.glass-card` — `rgba(255,255,255,0.65)` + `blur(16px)` + `border: 1px solid rgba(184,245,216,0.5)` |
| AI match cards | `.glass-card--ai` — `rgba(15,74,82,0.15)` + `blur(16px)` + teal border |
| Pricing card (featured) | `.glass-card` with `box-shadow: 0 0 0 2px var(--green-mint)` |
| Waitlist modal backdrop | `rgba(6, 10, 8, 0.72)` + `blur(8px)` |
| Waitlist modal panel | `rgba(255,255,255,0.92)` + `blur(20px)` + `border: 1px solid rgba(184,245,216,0.6)` |

**Dark mode variants:** Swap white-based glass for forest-based glass per design bible §1.7.

---

### A.5 Hover & Interaction States

Every interactive element must have a hover state. No exceptions.

**Buttons:**
- Primary: `translateY(-1px)` + `box-shadow: 0 8px 24px rgba(61,184,124,0.3)` + background darkens to `--green-jade`
- Secondary: border transitions to `--green-mint`, text to `--green-mint`, subtle mint bg wash
- AI CTA: `box-shadow: 0 0 32px rgba(38,200,216,0.25)` + slight background shift

**Signal cards:**
- `translateY(-2px)` + stronger border (`--color-border-strong`) + elevated shadow
- Left accent line brightens to full mint or teal-glow

**Nav links:**
- Color: `--neutral-muted` → `--color-text-primary`
- Add mint underline that sweeps left-to-right: `transform: scaleX(0) → scaleX(1)`, origin left

**Pricing cards:**
- Non-featured: subtle scale `1.01`, border brightens
- Featured: already elevated, shadow intensifies

**FAQ items:**
- Background: transparent → `rgba(61,184,124,0.04)`, border-left appears in mint

**All interactive elements:**
- `transition` duration: 200ms (micro), 350ms (cards/panels)
- `cursor: none` — custom cursor active on desktop
- `:focus-visible` ring: `outline: 2px solid var(--green-mint); outline-offset: 3px`

---

### A.6 Custom Cursor (Desktop Only)

Per design bible §3.4. Hide on touch devices:
```css
@media (hover: none) {
  .cursor-dot, .cursor-ring { display: none; }
  * { cursor: auto !important; }
}
```

Teal ring (`--teal-glow` border) activates when cursor enters `.ai-zone` elements — specifically the investor matching section, AI badge cards, and the teal CTA button.

---

### A.7 CTA Wiring — Every Button Opens the Waitlist

Every single CTA on the page must open the waitlist modal. This is non-negotiable.

**Inventory of all CTAs to wire:**

```javascript
const WAITLIST_TRIGGERS = [
  '[data-cta="hero-primary"]',       // "Access the database" — hero
  '[data-cta="hero-secondary"]',     // "See it in action" — hero
  '[data-cta="marquee-cta"]',        // Optional inline CTA in marquee
  '[data-cta="problem-cta"]',        // CTA in problem section
  '[data-cta="pipeline-cta"]',       // CTA in How It Works
  '[data-cta="signal-cta"]',         // CTA in signal feed section
  '[data-cta="matching-cta"]',       // "Run your first match" — AI matching
  '[data-cta="pricing-scout"]',      // Scout tier CTA
  '[data-cta="pricing-analyst"]',    // Analyst tier CTA
  '[data-cta="pricing-enterprise"]', // Enterprise tier CTA
  '[data-cta="final-cta"]',          // Final CTA section
  '[data-cta="nav-cta"]',            // Nav bar CTA button
];

// Wire all triggers
WAITLIST_TRIGGERS.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openWaitlistModal(el.dataset.tier || null);
    });
  });
});
```

Pricing CTAs pass their tier as context so the modal can pre-select the correct option:
- Scout CTA → `data-tier="investor"` with Scout pre-selected in comments
- Enterprise CTA → passes intent context in hidden field

---

## PART B — WAITLIST: PRODUCT REQUIREMENTS

### B.1 Overview

A frictionless, design-consistent waitlist modal and confirmation flow. The modal opens over the landing page (not a new page) to minimize friction. After submission, a confirmation state replaces the form in-place.

**Goals:**
1. Capture qualified signups: name, email, role type, org name, optional note
2. Segment users immediately: investor vs. FOAK researcher/founder
3. Send a professional confirmation email
4. Store all data in PostgreSQL
5. Zero drop-off from CTA click to form submission

---

### B.2 Waitlist Modal — UX Flow

```
[User clicks any CTA]
        ↓
[Modal backdrop fades in — 350ms]
[Modal panel slides up from center — ease-out-expo, 400ms]
        ↓
[STEP 1: Form — 5 fields]
        ↓
[User submits → loading state on button]
        ↓
[API call → POST /api/waitlist]
        ↓
[SUCCESS: Form transitions to confirmation state in-place]
        ↓
[User closes modal or it auto-closes after 6 seconds]

[ERROR: Inline error message, form remains editable]
```

---

### B.3 Waitlist Modal — UI Specification

#### Modal Backdrop
```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(6, 10, 8, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  animation: backdropIn 350ms var(--ease-out-expo) forwards;
}
@keyframes backdropIn {
  to { opacity: 1; }
}
```

#### Modal Panel
```css
.modal-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  opacity: 0;
  z-index: 501;
  width: min(560px, calc(100vw - 32px));
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(184, 245, 216, 0.6);
  border-radius: 8px;
  box-shadow: 0 32px 80px rgba(6, 10, 8, 0.18), 0 0 0 1px rgba(61, 184, 124, 0.08);
  padding: 48px;
  animation: modalIn 400ms var(--ease-out-expo) forwards;
}
@keyframes modalIn {
  to { opacity: 1; transform: translate(-50%, -50%); }
}

/* Dark mode */
[data-theme="dark"] .modal-panel {
  background: rgba(12, 34, 24, 0.96);
  border-color: rgba(30, 92, 62, 0.5);
}

/* Mobile: bottom sheet */
@media (max-width: 640px) {
  .modal-panel {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 32px 24px;
    transform: translateY(100%);
    animation: sheetIn 400ms var(--ease-out-expo) forwards;
  }
  @keyframes sheetIn {
    to { transform: translateY(0); }
  }
}
```

#### Modal Header
```
[DM Mono XS — NEUTRAL DIM — 0.12em tracking — uppercase]
EARLY ACCESS · LIMITED SPOTS

[Cormorant Garamond Light — 32px — Text Primary]
Get in before we launch.

[Syne 400 — 15px — Neutral Muted]
Join the waitlist. When we launch, you'll be the first
to receive a login link and account invitation.

[× close button — top right — 24px — neutral-dim, mint on hover]
```

#### Form Fields

**Field 1 — First Name**
```
Label:       First name
Type:        text
Placeholder: e.g. Sarah
Required:    Yes
Width:       50% (paired with Last Name on desktop; full width on mobile)
```

**Field 2 — Last Name**
```
Label:       Last name
Type:        text
Placeholder: e.g. Chen
Required:    Yes
Width:       50% (paired with First Name on desktop)
```

**Field 3 — Work Email**
```
Label:       Work email
Type:        email
Placeholder: e.g. sarah@congruent.vc
Required:    Yes
Width:       100%
Validation:  Valid email format; warn (not block) on personal email domains (gmail, yahoo, hotmail, outlook) with note: "Most of our users join with a work email — but personal is fine too."
```

**Field 4 — I am a... (role toggle)**
```
Label:       I am a...
Type:        Visual toggle / radio group — NOT a dropdown
Options:     [ Investor / Fund ] [ FOAK Researcher / Founder ]
Style:       Two pill-shaped selectable cards side by side
             Inactive: border 1px solid --color-border, bg transparent, Syne 500 --neutral-muted
             Active:   border 1px solid --green-mint, bg rgba(61,184,124,0.08), Syne 600 --green-mint
             Teal variant: AI matching section may pass 'investor' pre-selected
Required:    Yes — must select one before submission
Width:       100%
```

**Field 5 — Organization Name**
```
Label:       [Conditional — changes based on Field 4]
             If Investor:  "Fund or firm name"
             If Founder:   "Lab, institution, or company name"
Type:        text
Placeholder: [Conditional]
             If Investor:  "e.g. Congruent Ventures"
             If Founder:   "e.g. Pacific Northwest National Lab"
Required:    Yes
Width:       100%
```

**Field 6 — Anything else we should know? (optional)**
```
Label:       Anything we should know?
Type:        textarea
Placeholder: Tell us what you're working on, what problem you're trying to solve, or what you'd want Frond to do for you.
Required:    No
Rows:        3
Resize:      none (fixed height)
MaxLength:   500 characters. Show counter: "247 / 500" in DM Mono XS, neutral-dim, bottom-right of textarea.
Width:       100%
```

#### Submit Button
```
Text:        "Join the waitlist"
Style:       .btn-primary — full width — height 52px
Loading:     Replace text with "Sending..." + spinner (mint color, CSS animation)
             Disable button during loading
             Loading state: opacity 0.85, cursor not-allowed
```

#### Field Styling
```css
.form-field {
  font-family: 'Syne', sans-serif;
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-text-primary);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  width: 100%;
  transition: border-color 200ms, box-shadow 200ms;
  outline: none;
}
.form-field:focus {
  border-color: var(--green-mint);
  box-shadow: 0 0 0 3px rgba(61, 184, 124, 0.12);
}
.form-field::placeholder {
  color: var(--neutral-dim);
  font-style: normal;
}

.form-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--neutral-muted);
  display: block;
  margin-bottom: 0.375rem;
}

.form-error {
  font-family: 'Syne', sans-serif;
  font-size: 0.8125rem;
  color: var(--amber);
  margin-top: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}
.form-error::before {
  content: '⚠';
  font-size: 0.75rem;
}
```

#### Success State
Replaces the form in-place (no page reload, no redirect). Transition: form fades out (200ms), success content fades in (400ms, slight scale up from 0.96 to 1).

```
[Large mint checkmark icon — 48px — animated stroke draw]

[Cormorant Garamond — 28px — Text Primary]
You're on the list.

[Syne 400 — 15px — Neutral Muted]
We'll send a confirmation to [email] shortly.
When Frond launches, you'll be the first to know.

[DM Mono XS — Neutral Dim — centered]
SPOT #[sequential number] RESERVED

[Secondary button — "Back to the site"]
```

Auto-close after 6 seconds with a thin mint progress bar at the bottom of the modal (CSS animation, 6s linear).

---

### B.4 Confirmation Email

Send immediately on successful form submission via the configured email provider (see B.7).

**From:** `hello@foak.earth`
**Subject:** `You're on the Frond waitlist — here's what happens next.`
**Reply-to:** `hello@foak.earth`

**Email body (plain text base — HTML template must match brand):**

```
[Frond logotype — Cormorant Garamond + fern mark, mint on dark bg header]

Hi [First Name],

You're on the list.

We're building Frond — the intelligence layer between breakthrough 
climate science and the capital it deserves. You'll be among the 
first to access the platform when we launch.

What you'll get:
  · A personal login link the day we launch
  · Early access to the FOAK technology database
  · The SBIR/ARPA-E signal feed for your sectors
  [If investor:] · AI-powered portfolio gap analysis
  [If founder:]  · Curated investor match recommendations

In the meantime, we publish weekly intelligence on FOAK 
technologies moving through the government funding pipeline.
Worth reading if you're in the weeds on this.

[CTA button: "Read the latest signal brief →"]

— The Frond team

---
[DM Mono footer]
Frond · hello@foak.earth
You're receiving this because you joined the waitlist at foak.earth.
[Unsubscribe] · [Privacy Policy]
```

**HTML email requirements:**
- Max width 600px, centered
- Header: `--green-forest` background, mint logotype, 40px vertical padding
- Body: white background, `--green-black` text, Syne/system-sans fallback
- CTA button: `--green-mint` background, `--green-forest` text, 8px border-radius
- Footer: `--green-foam` background, DM Mono / monospace fallback, `--neutral-muted` text
- Conditional blocks rendered server-side based on `user_type` field

---

### B.5 Form Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| First name | Required, min 1 char, max 50 | "First name is required." |
| Last name | Required, min 1 char, max 50 | "Last name is required." |
| Email | Required, valid email format | "Please enter a valid email address." |
| Email (duplicate) | Checked on submit against DB | "This email is already on the waitlist. We've got you." |
| Role | Required toggle selection | "Please select your role." |
| Org name | Required, min 2 chars, max 100 | "Please enter your organization name." |
| Notes | Optional, max 500 chars | "Please keep your note under 500 characters." |

All validation: client-side first (on blur + on submit), then server-side confirmation. Never submit to the API with invalid data.

---

### B.6 Accessibility Requirements

- All form fields: `<label for="">` properly associated
- Role toggle: `role="radiogroup"`, `aria-label`, each option `role="radio"` with `aria-checked`
- Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to modal title
- Focus trap: Tab key cycles only within modal while open
- Close on Escape key
- Close on backdrop click
- `aria-live="polite"` region for form errors and success message
- All error messages linked to field via `aria-describedby`
- Submit button: `aria-busy="true"` during loading state

---

## PART C — API & BACKEND SPECIFICATION

### C.1 Endpoint

```
POST /api/waitlist
Content-Type: application/json
```

**Request body:**
```json
{
  "first_name": "Sarah",
  "last_name": "Chen",
  "email": "sarah@congruent.vc",
  "user_type": "investor",
  "org_name": "Congruent Ventures",
  "notes": "Looking for early-stage energy storage deals.",
  "referrer_cta": "pricing-analyst",
  "source_url": "https://foak.earth",
  "utm_source": "linkedin",
  "utm_medium": "post",
  "utm_campaign": "launch-2026"
}
```

**Response — 201 Created:**
```json
{
  "success": true,
  "waitlist_number": 142,
  "message": "You're on the list."
}
```

**Response — 409 Conflict (duplicate email):**
```json
{
  "success": false,
  "error": "already_registered",
  "message": "This email is already on the waitlist."
}
```

**Response — 422 Unprocessable:**
```json
{
  "success": false,
  "error": "validation_failed",
  "fields": { "email": "Invalid email format." }
}
```

**Response — 500:**
```json
{
  "success": false,
  "error": "server_error",
  "message": "Something went wrong. Please try again."
}
```

### C.2 Server-Side Processing Sequence

```
1. Validate all fields (server-side mirror of client validation)
2. Normalize email (lowercase, trim whitespace)
3. Check for duplicate email in waitlist table
   → If duplicate: return 409
4. BEGIN TRANSACTION
5. INSERT into waitlist_signups
6. SELECT COUNT(*) from waitlist_signups WHERE id <= new_id (for waitlist number)
7. COMMIT
8. Enqueue confirmation email (async — do not block response)
9. Return 201 with waitlist_number
```

---

## PART D — SQL SCHEMA

### D.1 PostgreSQL Schema

```sql
-- ============================================================
-- FROND WAITLIST SCHEMA
-- PostgreSQL 15+ · Supabase-compatible
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- WAITLIST SIGNUPS TABLE
-- ============================================================

CREATE TABLE waitlist_signups (
  -- Primary key
  id                UUID DEFAULT uuid_generate_v4() PRIMARY KEY,

  -- User identity
  first_name        VARCHAR(50)  NOT NULL CHECK (char_length(trim(first_name)) >= 1),
  last_name         VARCHAR(50)  NOT NULL CHECK (char_length(trim(last_name)) >= 1),
  email             VARCHAR(254) NOT NULL,
  
  -- Segmentation
  user_type         VARCHAR(20)  NOT NULL CHECK (user_type IN ('investor', 'researcher_founder')),
  org_name          VARCHAR(100) NOT NULL CHECK (char_length(trim(org_name)) >= 2),
  notes             TEXT         CHECK (char_length(notes) <= 500),
  
  -- Attribution & analytics
  referrer_cta      VARCHAR(50),    -- Which CTA button was clicked: 'hero-primary', 'pricing-analyst', etc.
  source_url        TEXT,           -- Full URL of the page they signed up from
  utm_source        VARCHAR(100),
  utm_medium        VARCHAR(100),
  utm_campaign      VARCHAR(100),
  utm_content       VARCHAR(100),
  utm_term          VARCHAR(100),
  referrer_url      TEXT,           -- HTTP Referer header
  user_agent        TEXT,           -- Browser/device info

  -- Status & lifecycle
  status            VARCHAR(20)  NOT NULL DEFAULT 'waitlisted'
                                 CHECK (status IN ('waitlisted', 'invited', 'active', 'unsubscribed')),
  waitlist_number   INTEGER,        -- Sequential position on waitlist (set on insert by trigger)
  invited_at        TIMESTAMPTZ,    -- When login link was sent
  
  -- Email tracking
  confirmation_sent BOOLEAN      NOT NULL DEFAULT FALSE,
  confirmation_sent_at TIMESTAMPTZ,
  email_bounced     BOOLEAN      NOT NULL DEFAULT FALSE,
  unsubscribed      BOOLEAN      NOT NULL DEFAULT FALSE,
  unsubscribed_at   TIMESTAMPTZ,
  
  -- Timestamps
  created_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ============================================================
-- CONSTRAINTS
-- ============================================================

-- Case-insensitive unique email
CREATE UNIQUE INDEX waitlist_email_unique_idx 
  ON waitlist_signups (lower(trim(email)));

-- Index for fast lookup by status (for invite batching)
CREATE INDEX waitlist_status_idx 
  ON waitlist_signups (status, created_at);

-- Index for analytics queries by user_type
CREATE INDEX waitlist_user_type_idx 
  ON waitlist_signups (user_type, created_at);

-- Index for UTM analytics
CREATE INDEX waitlist_utm_source_idx 
  ON waitlist_signups (utm_source, utm_campaign);

-- ============================================================
-- AUTO-UPDATE updated_at TRIGGER
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER waitlist_signups_updated_at
  BEFORE UPDATE ON waitlist_signups
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- SEQUENTIAL WAITLIST NUMBER TRIGGER
-- Assigns a sequential integer position to each signup
-- ============================================================

CREATE SEQUENCE waitlist_position_seq START 1;

CREATE OR REPLACE FUNCTION assign_waitlist_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.waitlist_number = nextval('waitlist_position_seq');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER assign_waitlist_position
  BEFORE INSERT ON waitlist_signups
  FOR EACH ROW EXECUTE FUNCTION assign_waitlist_number();

-- ============================================================
-- EMAIL SEND LOG TABLE
-- Tracks every transactional email sent to waitlist users
-- ============================================================

CREATE TABLE email_send_log (
  id              UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  waitlist_id     UUID NOT NULL REFERENCES waitlist_signups(id) ON DELETE CASCADE,
  email_type      VARCHAR(50) NOT NULL 
                  CHECK (email_type IN ('confirmation', 'launch_invite', 'update', 'unsubscribe_confirm')),
  provider        VARCHAR(50),        -- 'resend', 'sendgrid', 'postmark', etc.
  provider_msg_id VARCHAR(255),       -- Message ID from email provider
  status          VARCHAR(20) NOT NULL DEFAULT 'queued'
                  CHECK (status IN ('queued', 'sent', 'delivered', 'bounced', 'failed')),
  sent_at         TIMESTAMPTZ,
  delivered_at    TIMESTAMPTZ,
  bounced_at      TIMESTAMPTZ,
  error_message   TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX email_log_waitlist_idx ON email_send_log (waitlist_id);
CREATE INDEX email_log_status_idx ON email_send_log (status, created_at);

-- ============================================================
-- USEFUL VIEWS
-- ============================================================

-- Summary view for admin dashboard
CREATE VIEW waitlist_summary AS
SELECT
  COUNT(*)                                          AS total_signups,
  COUNT(*) FILTER (WHERE user_type = 'investor')    AS investors,
  COUNT(*) FILTER (WHERE user_type = 'researcher_founder') AS founders_researchers,
  COUNT(*) FILTER (WHERE status = 'invited')        AS invited,
  COUNT(*) FILTER (WHERE status = 'active')         AS active_users,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') AS signups_last_7d,
  COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') AS signups_last_30d
FROM waitlist_signups
WHERE unsubscribed = FALSE;

-- CTA attribution breakdown
CREATE VIEW cta_attribution AS
SELECT
  referrer_cta,
  COUNT(*) AS signups,
  COUNT(*) FILTER (WHERE user_type = 'investor') AS investors,
  COUNT(*) FILTER (WHERE user_type = 'researcher_founder') AS founders,
  MIN(created_at) AS first_signup,
  MAX(created_at) AS latest_signup
FROM waitlist_signups
GROUP BY referrer_cta
ORDER BY signups DESC;

-- UTM performance view
CREATE VIEW utm_performance AS
SELECT
  COALESCE(utm_source, 'direct')   AS source,
  COALESCE(utm_medium, 'none')     AS medium,
  COALESCE(utm_campaign, 'none')   AS campaign,
  COUNT(*)                         AS signups,
  COUNT(*) FILTER (WHERE user_type = 'investor') AS investors
FROM waitlist_signups
GROUP BY utm_source, utm_medium, utm_campaign
ORDER BY signups DESC;

-- ============================================================
-- ROW LEVEL SECURITY (Supabase)
-- Only server-side service role key can read/write
-- ============================================================

ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_send_log ENABLE ROW LEVEL SECURITY;

-- No public access — all operations via service role only
-- API endpoint authenticates with SUPABASE_SERVICE_ROLE_KEY (server-side only, never exposed to client)

-- ============================================================
-- SAMPLE QUERIES
-- ============================================================

-- Fetch ordered waitlist for invite batch
-- SELECT id, first_name, last_name, email, user_type, org_name, waitlist_number
-- FROM waitlist_signups
-- WHERE status = 'waitlisted' AND unsubscribed = FALSE
-- ORDER BY waitlist_number ASC
-- LIMIT 50;

-- Mark batch as invited
-- UPDATE waitlist_signups
-- SET status = 'invited', invited_at = NOW()
-- WHERE id = ANY($1::uuid[]);

-- Check if email already registered
-- SELECT id FROM waitlist_signups WHERE lower(trim(email)) = lower(trim($1)) LIMIT 1;
```

---

## PART E — TECH STACK RECOMMENDATION

### E.1 Full Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend framework** | Next.js 14 (App Router) | SSR for SEO; API routes for waitlist endpoint; Vercel deployment |
| **Styling** | Tailwind CSS + CSS custom properties | Tailwind for layout; CSS vars for Frond design tokens (the design bible maps directly) |
| **Animations** | CSS animations + IntersectionObserver | No library needed for scroll triggers at this scale. Framer Motion optional for modal transitions. |
| **Database** | Supabase (PostgreSQL) | Schema above deploys directly; built-in RLS; `$25/month` Pro |
| **Email provider** | **Resend** (recommended) | Best DX for transactional email in Next.js; native React Email support; generous free tier (3K emails/month); excellent deliverability |
| **Email templating** | React Email | Type-safe HTML emails using React components; pairs with Resend perfectly |
| **Form state** | React Hook Form | Minimal re-renders; built-in validation; integrates with zod |
| **Schema validation** | Zod | Shared validation schema between client and API endpoint |
| **Hosting** | Vercel | Zero-config Next.js; free tier sufficient for waitlist traffic; Edge Functions for fast API responses |
| **Analytics** | Plausible (privacy-first) or Vercel Analytics | UTM param capture in DB; no GA cookies blocking EU visitors |
| **Environment** | `.env.local` | `NEXT_PUBLIC_` prefix for client-safe vars only; `SUPABASE_SERVICE_ROLE_KEY` server-side only |

### E.2 Environment Variables Required

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]         # Public (read-only, RLS-protected)
SUPABASE_SERVICE_ROLE_KEY=[service-role-key]     # Server-side ONLY — never expose

# Email
RESEND_API_KEY=[resend-api-key]
RESEND_FROM_EMAIL=hello@foak.earth

# App
NEXT_PUBLIC_APP_URL=https://foak.earth
```

### E.3 File Structure (Relevant to Waitlist)

```
/app
  /api
    /waitlist
      route.ts          ← POST handler: validate → insert → send email → respond
  /components
    /waitlist
      WaitlistModal.tsx ← Modal shell, backdrop, animation, close logic
      WaitlistForm.tsx  ← Form fields, validation, submit handler
      WaitlistSuccess.tsx ← Success state with animated checkmark
      RoleToggle.tsx    ← Visual investor/founder toggle component
  /emails
    WaitlistConfirmation.tsx ← React Email template
  /lib
    supabase.ts         ← Supabase client (server-side, uses service role)
    waitlist.ts         ← DB insert function, duplicate check
    email.ts            ← Resend send function
    schema.ts           ← Zod validation schema (shared client/server)
  /hooks
    useWaitlistModal.ts ← Global modal state (open/close, pre-fill tier context)
```

### E.4 Deployment Checklist

```
□ Supabase project created, schema applied (frond-waitlist-schema.sql)
□ RLS enabled on both tables
□ Resend account created, domain verified (foak.earth)
□ From email verified in Resend
□ All environment variables set in Vercel dashboard
□ SUPABASE_SERVICE_ROLE_KEY confirmed as server-side only (no NEXT_PUBLIC_ prefix)
□ Resend webhook configured for bounce/delivery tracking (optional, updates email_send_log)
□ Test end-to-end: submit form → check DB row → check email received
□ Test duplicate email: submit same email twice → verify 409 response and friendly message
□ Test on mobile (375px): bottom sheet modal, full-width fields, stacked role toggle
□ Verify custom cursor disabled on touch devices
□ Run Lighthouse: target 90+ performance on mobile
□ Verify prefers-reduced-motion disables all animations
□ Set up Supabase database backups (daily, enabled by default on Pro)
```

---

## PART F — ANIMATION TIMING MASTER TABLE

For GPT 5.2-Codex: implement these timings exactly as specified.

| Element | Animation | Duration | Delay | Easing |
|---------|-----------|----------|-------|--------|
| Modal backdrop in | opacity 0→1 | 350ms | 0ms | ease-out-expo |
| Modal panel in (desktop) | opacity+translateY | 400ms | 0ms | ease-out-expo |
| Modal panel in (mobile sheet) | translateY | 400ms | 0ms | ease-out-expo |
| Form field focus ring | box-shadow | 200ms | 0ms | ease-in-out |
| Submit button loading | opacity | 150ms | 0ms | linear |
| Form → success transition | opacity | 200ms | 0ms | ease-in-out |
| Success checkmark stroke | stroke-dashoffset | 600ms | 200ms | ease-out-expo |
| Success text | opacity+translateY | 400ms | 400ms | ease-out-expo |
| Auto-close progress bar | width 100%→0% | 6000ms | 0ms | linear |
| Modal close | opacity 1→0 + translateY | 250ms | 0ms | ease-in-out |
| Hero line reveal | clip-path | 700ms | staggered per bible | ease-out-expo |
| Scroll section entrance | opacity+translateY | 600ms | 0ms | ease-out-expo |
| Staggered children | per child | 500ms | +100ms per child | ease-out-expo |
| Card hover lift | transform+shadow | 200ms | 0ms | ease-in-out |
| Button hover | background+shadow | 200ms | 0ms | ease-in-out |
| Nav border on scroll | border-color | 300ms | 0ms | ease-in-out |
| Cursor ring follow | JS lerp 0.12 factor | — | — | — |
| Gradient mesh drift | background-position | 18s | 0ms | ease-in-out infinite alternate |

---

## APPENDIX — COPY REFERENCE

### Hero CTAs
- Primary: **"Access the database"**
- Secondary: **"See how it works"**

### Waitlist Modal Headline
- **"Get in before we launch."**

### Waitlist Modal Subhead
- *"Join the waitlist. When Frond launches, you'll be the first to receive a login link and account invitation."*

### Submit Button
- Default: **"Join the waitlist"**
- Loading: **"Sending..."**

### Success Headline
- **"You're on the list."**

### Confirmation Email Subject
- **"You're on the Frond waitlist — here's what happens next."**

### Pricing CTAs (all open waitlist)
- Scout: **"Get early access"**
- Analyst: **"Reserve your spot"**
- Enterprise: **"Talk to us"** (opens waitlist with enterprise context pre-filled in notes)

---

*Frond Waitlist PRD — v1.0 · March 2026*
*Design: Frond Design Bible v1.0*
*Fonts: Cormorant Garamond, Syne, DM Mono (Google Fonts)*
*Colors: Frond Primary Greens, Frond Teals (AI & Matching), Frond Accents & Neutrals*
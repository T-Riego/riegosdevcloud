# Roadmap: Riegos Dev — Site Institucional

## Overview

The site is built in four phases driven by a strict dependency chain: the content model and design system must exist before any section renders text; Server Component sections must be verified before Client Component islands are added; interactive/animated islands are layered onto confirmed static structure; and SEO metadata, contact form, and mobile polish are finalized last — when all copy exists in both languages. Each phase delivers a coherent, independently verifiable capability. No phase can begin until the previous phase's success criteria are observable.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Design system, content model, i18n context, header shell, and footer
- [ ] **Phase 2: Static Sections** - All content sections as Server Components with full bilingual text
- [ ] **Phase 3: Interactive Islands** - Particles, typewriter, scroll animations, portfolio modal, carousel, and language toggle
- [ ] **Phase 4: Contact, SEO & Polish** - Contact/CTA section, SEO metadata, mobile responsiveness audit, and Lighthouse validation

## Phase Details

### Phase 1: Foundation
**Goal**: The project scaffold and content infrastructure are in place — developers can build any section without inline strings, dark theme is correct on first paint, and the visual identity is established
**Depends on**: Nothing (first phase)
**Requirements**: DSGN-01, DSGN-02, I18N-01, NAV-01, FOOT-01, FOOT-02
**Success Criteria** (what must be TRUE):
  1. Running `curl localhost:3000` returns HTML with the dark background and `#00FFFF` accent — no flash of white on page load
  2. The sticky header is visible and anchored at the top on every viewport size; the footer renders with logo, links, and brand phrase
  3. All display strings for all sections exist in both `lib/content/pt-BR.ts` and `lib/content/en.ts` — no section needs inline copy
  4. Social media placeholder links are present in the footer
**Plans**: TBD
**UI hint**: yes

### Phase 2: Static Sections
**Goal**: Every content section of the site is visible and readable in both languages as Server Components — layout, typography, and hierarchy are verified without any JavaScript islands
**Depends on**: Phase 1
**Requirements**: HERO-01, HERO-04, ABOUT-01, ABOUT-02, SERV-01, SERV-02, SERV-03, TEST-01, TEST-02, PROC-01
**Success Criteria** (what must be TRUE):
  1. The hero section shows the headline, subheadline, and two CTA buttons ("Ver Projetos" and "Falar com Especialista") without particles or typewriter effect
  2. The About section shows Tiago's photo placeholder, biography, and all tool badges (n8n, Cursor, Supabase, GPT/Claude APIs, WhatsApp API)
  3. All 6 service cards are visible with icon, title, and description; hover produces a CSS glow effect with no JavaScript required
  4. The 4-step process timeline renders correctly on both desktop (horizontal) and mobile (vertical)
  5. The testimonials section renders 3 placeholder cards, each with italic quote, name, company, circular avatar, and 5 stars
**Plans**: TBD
**UI hint**: yes

### Phase 3: Interactive Islands
**Goal**: The site is fully animated and interactive — particles animate in the hero, typewriter cycles specialties, scroll animations trigger on entry, the portfolio modal opens project details, the testimonial carousel works, and the language toggle switches all content without a page reload
**Depends on**: Phase 2
**Requirements**: HERO-02, HERO-03, NAV-02, NAV-03, NAV-04, PORT-01, PORT-02, PORT-03, TEST-03, DSGN-04, PERF-02, I18N-02, I18N-03
**Success Criteria** (what must be TRUE):
  1. The hero background shows cyan (#00FFFF) particle animation on desktop; on mobile the particle count is reduced or disabled and the page still scrolls smoothly
  2. The typewriter effect cycles through Tiago's specialties in the hero headline; a screen-reader-only full-text equivalent is present in the DOM
  3. Clicking a navigation anchor link scrolls smoothly to the target section; the floating WhatsApp button is always visible and opens the correct WhatsApp link
  4. The language toggle in the header switches all visible text between PT-BR and EN without a page reload, and the preference persists after closing and reopening the browser tab
  5. Each portfolio card expands to a modal showing full project details; a "Novo Projeto em Breve" placeholder card is present for visual composition
  6. All sections fade or slide in when they enter the viewport; animations use only `transform` and `opacity` (no layout shift)
**Plans**: TBD
**UI hint**: yes

### Phase 4: Contact, SEO & Polish
**Goal**: The site is launch-ready — the contact form converts to WhatsApp, metadata is correct in both languages for search engines, and the site passes mobile responsiveness and Lighthouse audits
**Depends on**: Phase 3
**Requirements**: CONT-01, CONT-02, CONT-03, DSGN-03, PERF-01, SEO-01, SEO-02
**Success Criteria** (what must be TRUE):
  1. Submitting the contact form with a name, email, and message opens WhatsApp with a pre-filled message in the correct language; the WhatsApp CTA button and number are visible in the section
  2. The page title, meta description, and Open Graph tags are correct in both languages when the locale is toggled
  3. A sitemap is accessible at `/sitemap.xml` and language alternate tags are present in the HTML head
  4. Every section is fully usable and visually correct at 375px, 390px, and 430px viewport widths (mobile-first)
  5. Lighthouse mobile audit scores Performance >= 80, and CLS < 0.1; images use lazy loading and the build uses code splitting
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/TBD | Not started | - |
| 2. Static Sections | 0/TBD | Not started | - |
| 3. Interactive Islands | 0/TBD | Not started | - |
| 4. Contact, SEO & Polish | 0/TBD | Not started | - |

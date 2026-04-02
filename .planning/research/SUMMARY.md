# Project Research Summary

**Project:** Riegos Dev — riegosdev.cloud
**Domain:** Bilingual AI/Automation Agency Portfolio SPA (Next.js 15, dark theme, animation-heavy, WhatsApp conversion)
**Researched:** 2026-04-02
**Confidence:** MEDIUM-HIGH overall

---

## Executive Summary

Riegos Dev is a single-page institutional site for a Brazilian AI/automation micro-agency. The goal is not to inform — it is to convert: every visitor should leave as a WhatsApp conversation. Expert-built sites in this category are static-first (SSG on Vercel), animation-enhanced without sacrificing mobile performance, and built around a single conversion path. The research confirms that Next.js 15 App Router with static export is the right foundation, with `next-intl` for bilingual content, Framer Motion for scroll animations, and tsParticles for the hero particle background. No backend is needed — the contact flow terminates in a pre-filled WhatsApp deeplink.

The recommended build approach is bottom-up by dependency: establish the content model and i18n context first, then assemble static sections, then layer in interactive Client Component islands (particles, carousel, modal), and finish with polish (SEO metadata, mobile audit). This order is non-negotiable — nearly every critical pitfall in this domain is caused by getting these layers reversed or collapsed. Specifically: locale context must exist before any section that renders text, and particle/canvas components must be dynamically imported with `ssr: false` from the start, not retrofitted.

The primary risks are performance on mid-range Android (particle count, Framer Motion bundle size), dark-theme hydration flash (FOUC), and inadvertently breaking SSR/SEO by pushing `"use client"` too high in the tree. All three are preventable with known, well-documented patterns and are addressed in the pitfalls research. Execution risk is low for a developer who reads the pitfalls file before building each phase.

---

## Key Findings

### Recommended Stack

See full detail: `.planning/research/STACK.md`

Next.js 15 is the required framework (confirmed in PROJECT.md and verified by the official Oct 2024 release post). It delivers SSG output for Vercel CDN deployment, the App Router metadata API for bilingual SEO, and built-in `next/image` and `next/font` optimization. All styling is Tailwind CSS 4 (zero-runtime, purge at build) with CSS Modules reserved only for particle canvas and complex keyframes. No CSS-in-JS — it adds hydration complexity and bundle weight for zero benefit here.

**Core technologies:**
- **Next.js 15 + TypeScript 5**: App framework — SSG export, App Router, `next.config.ts` first-class, built-in performance primitives
- **Tailwind CSS 4**: Utility styling — zero runtime, `dark:` variants, CSS variables for `#00FFFF` accent
- **Framer Motion 11** (package: `motion`): Scroll animations and interactive islands — declarative `whileInView`, `AnimatePresence` for modal/language transitions; use `LazyMotion + domAnimation` to minimize bundle
- **tsParticles** (`@tsparticles/react` + `@tsparticles/slim`): Hero particle background — `slim` preset keeps bundle small; always `dynamic({ ssr: false })`
- **react-type-animation 3**: Typewriter effect — lightweight, zero dependencies, actively maintained
- **Lenis 1**: Smooth scroll — replaces native `scroll-behavior`; integrates with Framer Motion velocity
- **next-intl 3**: Bilingual PT-BR/EN — use in "no locale in path" mode (localStorage + React Context); do NOT wire up Next.js built-in locale routing for a toggle-based SPA
- **next/font (built-in)**: Space Grotesk (primary) + Inter (body/fallback) — self-hosted at build time, zero CLS
- **Vercel**: Zero-config CDN deployment; free tier covers this scope

**Reject:** GSAP (commercial license), AOS (jQuery-era), styled-components (runtime CSS-in-JS), next-i18next (Pages Router only), old `react-particles` (deprecated).

---

### Expected Features

See full detail: `.planning/research/FEATURES.md`

**Must have (table stakes):**
- Hero section with clear headline and primary CTA visible without scrolling
- Sticky navigation with anchor-link scroll
- Services section (6 cards with icon, title, short description)
- About / founder story (photo, bio, tool badges)
- Portfolio section (minimum 3 project cards)
- Contact / CTA with WhatsApp as sole conversion path
- Mobile responsiveness (mobile-first, intentional layout)
- Fast load time (images lazy-loaded, no blocking scripts)
- Consistent dark visual identity
- Footer with logo, links, and contact info

**Should have (differentiators):**
- Bilingual PT-BR/EN toggle (localStorage-persisted, no page reload)
- Hero particle animation (capped for mobile performance)
- Typewriter headline rotation effect
- Scroll-triggered entrance animations (subtle, not aggressive)
- Process / "how we work" 4-step timeline
- WhatsApp CTA as primary conversion (pre-filled message per service)
- AI/automation credibility signals (tool badges: n8n, GPT, Claude, Supabase)
- Results-oriented copy ("saved 20h/wk") — copy effort, high ROI
- Floating WhatsApp button (persistent but unobtrusive)
- Domain-specific SEO metadata (PT-BR + EN, "automacao com IA" keywords)
- Expandable portfolio cards (modal or accordion for project depth)

**Defer to v2+:**
- Video testimonials / demo reels (high content cost, not blocking launch)
- Schema.org structured data (add after indexing is established)
- Blog / content strategy (requires sustained effort; empty blog hurts credibility)
- Analytics tracking (add after launch; don't let it block ship)
- Dark/light mode toggle (committed to dark — it is a brand positioning choice, not a preference)

**Anti-features to explicitly avoid:** custom backend, CMS, login, e-commerce, third-party chat widgets (not WhatsApp), social media feed embeds, Calendly/booking widgets that split the conversion path.

---

### Architecture Approach

See full detail: `.planning/research/ARCHITECTURE.md`

A single-route Next.js App Router application. `app/page.tsx` renders all sections sequentially. There are no multi-page routes — the "SPA feel" is entirely smooth-scroll navigation. App Router is used for its SSG output, metadata API, and image/font optimization, not for routing. Content lives in static TypeScript objects (`lib/content/pt-BR.ts` and `lib/content/en.ts`), bundled at build time. The only "integration" is the WhatsApp deeplink — no fetch calls, no server actions, no API.

The critical architectural rule is Server/Client boundary discipline: default to Server Components, add `'use client'` only at the leaf that needs `useState`, `useEffect`, browser APIs, or event handlers. Heavy animated islands (particles, carousel, modal, contact form) are Client Components. All other sections are Server Components that read locale content from a `LocaleContext`.

**Major components:**
1. `LocaleContext` (Client) — language state persisted to `localStorage`; wraps root layout; read by every section
2. `ParticleBackground` (Client, lazy-loaded with `ssr: false`) — tsParticles canvas; self-contained
3. `AnimatedSection` (Client wrapper) — `IntersectionObserver` scroll entrance; wraps static Server sections
4. `PortfolioSection` + `ProjectModal` (Client) — modal open/closed state; only interactive island in the portfolio layer
5. `TestimonialsSection` (Client) — carousel index state
6. `ContactSection` (Client) — form state + WhatsApp URL builder
7. All other sections (Server) — `AboutSection`, `ServicesSection`, `ProcessSection`, `Header`, `Footer`

---

### Critical Pitfalls

See full detail: `.planning/research/PITFALLS.md`

1. **Dark theme flash (FOUC / hydration mismatch)** — Use a blocking inline `<script>` in `app/layout.tsx` `<head>` to set `document.documentElement.className` synchronously before first paint; add `suppressHydrationWarning` to `<html>`. Never gate theme on `useEffect` alone. This must be done in Phase 1 before anything else is built.

2. **Particles blocking main thread on mobile** — Hard cap: `<= 40` particles on mobile, `<= 80` on desktop. Set `fpsLimit: 30`. Wrap in `dynamic(..., { ssr: false })`. Provide a static gradient fallback when `prefers-reduced-motion` is set. Test on CPU 4x throttle before marking hero complete.

3. **"use client" boundary too high — breaking SSR/SEO** — Keep `"use client"` at the leaf level. All text content (headline, services, testimonials, about) must exist in Server Components. Validate with `curl localhost:3000 | grep "Riegos Dev"` after each new component is added.

4. **i18n toggle causing full page reload or state loss** — Do NOT use Next.js built-in locale routing for a toggle-based SPA. Store language in `localStorage` + React Context only. No URL changes on toggle.

5. **Scroll animation CLS (Cumulative Layout Shift)** — Animate only `transform` and `opacity` (GPU-composited, no layout reflow). Test Core Web Vitals at "Slow 3G" throttle. CLS must stay below 0.1.

6. **Framer Motion full import bundle bloat** — Use `LazyMotion + domAnimation + m.div` instead of `motion.div`. Saves ~60% of the animation JS bundle. Run `ANALYZE=true next build` after each phase to catch regressions.

---

## Implications for Roadmap

Based on the combined research, 4 phases are recommended. The ordering is driven by three dependency rules: (1) content model before any section that displays text, (2) Server Components before Client Component islands, (3) static layout correctness before animation layering.

---

### Phase 1: Foundation and Content Model

**Rationale:** Everything else depends on these outputs. LocaleContext, content objects, CSS variables, and dark theme handling must be correct before any section is built. Fixing dark theme FOUC and "use client" discipline after sections are built requires painful refactoring. Do it once, do it right.

**Delivers:**
- Project scaffold (Next.js 15, TypeScript, Tailwind 4, ESLint)
- `app/layout.tsx` with dark theme blocking script, `suppressHydrationWarning`, and Space Grotesk / Inter fonts via `next/font`
- `app/globals.css` with `#00FFFF` CSS variable, Tailwind dark base, and animation utility classes
- `lib/content/pt-BR.ts` and `lib/content/en.ts` with ALL display strings (every section, both languages)
- `context/LocaleContext.tsx` — language state from `localStorage`, toggle function
- Static `Header` shell (no working toggle yet) and `Footer`
- `app/page.tsx` assembling section placeholders

**Addresses (FEATURES.md):** Consistent visual identity, typography system, footer, sticky nav structure
**Avoids (PITFALLS.md):** Pitfall 1 (FOUC), Pitfall 3 (i18n full reload), Pitfall 5 (use client too high), Pitfall 8 (Google Fonts), Pitfall 14 (missing lang attribute), Pitfall 15 (cyan contrast)

**Research flag:** Standard patterns — no phase research needed. Next.js App Router docs are authoritative.

---

### Phase 2: Static Sections (Server Components)

**Rationale:** Build all content sections as Server Components first, before any animation or interactivity. This validates layout, typography, and content in a state where SSR is guaranteed and easy to debug. Sections built as Server Components first can always have Client behavior added as child islands — the reverse (converting a Client Component back to Server) is painful.

**Delivers:**
- `HeroSection` — static headline, subheadline, dual CTA buttons (WhatsApp + scroll-to-portfolio); no particles yet
- `AboutSection` — Tiago's photo (`next/image`), bio, tool badges grid with descriptive `alt` text
- `ServicesSection` — 6 service cards (Tailwind hover glow; pure CSS, no JS)
- `ProcessSection` — 4-step timeline (horizontal desktop, vertical mobile)
- `TestimonialsSection` — static grid variant (carousel added in Phase 3)
- Verify: `curl localhost:3000` returns full text content for all sections

**Addresses (FEATURES.md):** Hero, services, about, process timeline, testimonials (static), portfolio placeholder
**Avoids (PITFALLS.md):** Pitfall 5 (use client too high), Pitfall 13 (missing alt text)

**Research flag:** Standard patterns — no phase research needed.

---

### Phase 3: Interactive Islands and Visual Layer

**Rationale:** Interactive Client Component islands are built after static structure is confirmed. Adding interactivity to a working layout is additive; rebuilding static sections around broken interactive dependencies is wasteful. Particles specifically must be the last visual element added to the hero — they are the highest-risk performance item.

**Delivers:**
- `ParticleBackground` — `dynamic({ ssr: false })`, capped particle count (40 mobile / 80 desktop), `fpsLimit: 30`, `prefers-reduced-motion` fallback
- `TypewriterText` — `react-type-animation`; hero h1 also contains `sr-only` full text for SEO
- `AnimatedSection` wrapper — `IntersectionObserver` scroll entrance using `transform` + `opacity` only
- `PortfolioSection` + `ProjectModal` — 3 project cards with expandable modal (Framer Motion `height: auto`)
- `TestimonialsSection` upgraded to carousel — Framer Motion `AnimatePresence`
- Language toggle wired in `Header` — writes to `LocaleContext`
- `WhatsAppButton` component — branded CTA using `buildWhatsAppUrl()` utility
- Floating WhatsApp button — fixed position

**Stack used (STACK.md):** tsParticles slim, react-type-animation, Framer Motion `LazyMotion + domAnimation`, Lenis smooth scroll initialized in layout
**Addresses (FEATURES.md):** Particle hero, typewriter, scroll animations, bilingual toggle functional, expandable portfolio cards, floating WhatsApp button
**Avoids (PITFALLS.md):** Pitfall 2 (particles mobile performance), Pitfall 4 (scroll animation CLS), Pitfall 6 (Framer Motion bundle), Pitfall 9 (typewriter SEO), Pitfall 11 (tsparticles SSR crash), Pitfall 12 (Safari card expand)

**Research flag:** This phase has the highest risk. Run `ANALYZE=true next build` and Lighthouse mobile audit after each interactive island is added. If Lighthouse Performance drops below 70 on mobile simulation, pause and diagnose before continuing.

---

### Phase 4: Contact, SEO, and Launch Polish

**Rationale:** Contact section is last because it depends on all copy being finalized in both languages (pre-filled WhatsApp messages reference service names). SEO metadata similarly requires final copy. Mobile responsiveness audit is most useful when all sections are complete.

**Delivers:**
- `ContactSection` — contact form with `buildWhatsAppUrl()` redirect; pre-filled message includes service context and language
- CTA section — full-bleed banner with WhatsApp primary CTA
- SEO metadata via `generateMetadata` — bilingual title/description, OG tags, `lang` attribute updated on locale toggle
- `sitemap.ts` (built-in Next.js 15 convention, no `next-sitemap` dependency)
- `robots.txt`
- Full mobile responsiveness audit — all sections at 375px, 390px, 430px breakpoints
- Lighthouse audit: Performance >= 80 mobile, >= 95 desktop; CLS < 0.1; LCP < 2.5s
- Final: `curl https://[preview-url] | grep "Riegos Dev"` confirms SSR text content

**Addresses (FEATURES.md):** WhatsApp CTA form, SEO metadata, mobile-first responsiveness, domain-specific keywords
**Avoids (PITFALLS.md):** Pitfall 7 (WhatsApp link without context), Pitfall 10 (mobile menu scroll lock)

**Research flag:** Standard patterns — no phase research needed. Well-documented Next.js metadata API.

---

### Phase Ordering Rationale

- **Content model before sections:** `LocaleContext` and content objects are Phase 1 because every subsequent component reads from them. Building sections first forces inline strings that must be extracted and re-wired later.
- **Server before Client:** Static Server Component sections are Phase 2 because SSR correctness is easy to validate and debug before Client islands exist. Adding `'use client'` children to working Server shells is additive; the reverse requires architectural surgery.
- **Animations and interactivity third:** Animation layer is Phase 3 because CLS and bundle-size problems are invisible until the layout they animate is stable. Testing Lighthouse on an animated section that will change in Phase 2 is wasted effort.
- **SEO and contact last:** Final copy is a Phase 3 dependency (bilingual WhatsApp messages, metadata descriptions). Auditing mobile responsiveness when sections are incomplete leads to false signals.

---

### Research Flags

**Phases needing deeper research during planning:**
- **Phase 3 (Interactive Islands):** tsParticles configuration options and `LazyMotion` API surface may have changed since knowledge cutoff (Aug 2025). Recommend checking npmjs.com for `@tsparticles/react` and `framer-motion` current major versions before scaffolding. If Framer Motion has reached v12+, the `LazyMotion` pattern may have changed.
- **Phase 3 (Interactive Islands):** `next-intl` standalone mode (no locale in path) — confirm this usage pattern is documented for next-intl 3.x before wiring the toggle. The alternative (custom `LocaleContext` with a plain TypeScript content map) is lower-risk and requires no library knowledge.

**Phases with standard patterns (skip research-phase):**
- **Phase 1 (Foundation):** Next.js App Router scaffold, `next/font`, Tailwind 4, dark theme blocking script — all well-documented with official sources. HIGH confidence.
- **Phase 2 (Static Sections):** Pure Server Component markup with Tailwind — no unknown patterns.
- **Phase 4 (SEO + Polish):** Next.js 15 `generateMetadata` and `sitemap.ts` are documented in official Next.js docs (verified 2026-04-02). HIGH confidence.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM-HIGH | Next.js 15 and React 19 verified via official blog. Tailwind 4, Framer Motion 11, next-intl 3, tsParticles 3 from training data (cutoff Aug 2025) — pin exact versions at scaffold time |
| Features | HIGH | Table stakes are universal conventions. WhatsApp-first conversion strategy is strongly supported by BR market signals. Anti-features are clear value/complexity tradeoffs |
| Architecture | HIGH | Next.js App Router official docs verified 2026-04-02. Server/Client boundary patterns are authoritative. WhatsApp deeplink is a stable, documented API |
| Pitfalls | HIGH | All critical pitfalls (1-6, 8, 11, 14) are well-documented in Next.js and React communities. Patterns for prevention are established and tested in production |

**Overall confidence:** MEDIUM-HIGH

---

### Gaps to Address

- **Exact npm versions at scaffold time:** Install with `@latest` then inspect `package.json` to lock exact versions. Do not hardcode version numbers from this research into `package.json` without verifying on npmjs.com first.
- **next-intl standalone mode:** The recommendation to use next-intl without URL routing is based on training data. If the API has changed, fall back to a simple custom `LocaleContext` with typed content objects — this is architecturally equivalent and has zero external dependencies.
- **Framer Motion v12+ API:** If the major version has incremented past 11, verify that `LazyMotion + domAnimation + m.div` pattern is unchanged before adopting it in Phase 3.
- **Real testimonial content:** Social proof section requires actual client quotes. This is a content dependency, not a code dependency, but it can block Phase 2 completion if quotes are not ready. Static placeholder cards are acceptable until real quotes arrive.
- **WhatsApp number confirmation:** The number `+55 31 98896-9661` is in PROJECT.md. Confirm it is production-ready before wiring into `buildWhatsAppUrl()` in Phase 3.

---

## Sources

### Primary (HIGH confidence)
- Next.js 15 official release blog: https://nextjs.org/blog/next-15 (Oct 21, 2024) — Next.js 15 + React 19 versions confirmed
- Next.js App Router docs: https://nextjs.org/docs (fetched 2026-04-02 via llms-full.txt) — Server/Client boundaries, `generateMetadata`, `sitemap.ts`, `next/font`, `next/dynamic`
- WhatsApp deeplink format: `https://wa.me/{phone}?text={message}` — stable, well-documented API
- `.planning/PROJECT.md` — project requirements, WhatsApp number, design system, out-of-scope items

### Secondary (MEDIUM confidence)
- Framer Motion v11 changelog / package rename (`motion`) — training data; verify package name on npmjs.com
- next-intl 3.x App Router compatibility — training data (Aug 2025); verify standalone mode in current docs
- @tsparticles/react 3.x + slim preset — training data; confirm slim preset bundle still exists
- Tailwind CSS 4 (Oxide engine, no config file) — training data (stable release Feb 2025 per knowledge cutoff)
- Lenis 1.x rebranding from `@studio-freight/lenis` — training data

### Tertiary (LOW confidence)
- WhatsApp conversion rate superiority in Brazilian market — strong signal from BR dev/marketing community through Aug 2025; no live 2026 data

---

*Research completed: 2026-04-02*
*Ready for roadmap: yes*

# Architecture Patterns

**Domain:** Bilingual agency portfolio SPA — Next.js 15, dark theme, animation-heavy
**Researched:** 2026-04-02
**Confidence:** HIGH (Next.js official docs verified, MEDIUM on animation library patterns from training data)

---

## Recommended Architecture

A single-route Next.js App Router application. The root `app/page.tsx` renders all sections sequentially. The "SPA feel" is achieved by smooth scroll navigation — no actual page transitions. The App Router is used for its SSG output, SEO metadata API, and Image/Font optimization, not for multi-page routing.

```
RootLayout (app/layout.tsx)
  └── HomePage (app/page.tsx)
        ├── <Header />        → sticky nav + language toggle
        ├── <HeroSection />   → particles + typewriter + dual CTA
        ├── <AboutSection />  → profile card + tool badges
        ├── <ServicesSection /> → 6 animated service cards
        ├── <PortfolioSection /> → project cards + modal overlay
        ├── <TestimonialsSection /> → carousel + star ratings
        ├── <ProcessSection /> → 4-step timeline
        ├── <ContactSection /> → WhatsApp CTA + form
        └── <Footer />        → logo + quick links
```

---

## Project Folder Structure

```
app/
  layout.tsx              # Root layout: html/body, fonts, global metadata
  page.tsx                # Single page: renders all section components
  globals.css             # Global CSS variables, Tailwind base, animations

components/
  layout/
    Header.tsx            # Sticky nav, logo, language toggle, mobile menu
    Footer.tsx            # Logo, quick links, brand tagline
  sections/
    HeroSection.tsx       # tsParticles canvas + typewriter + CTA buttons
    AboutSection.tsx      # Profile card + tool badges grid
    ServicesSection.tsx   # 6 service cards with glow hover
    PortfolioSection.tsx  # Project cards + modal controller
    TestimonialsSection.tsx # Carousel with star ratings
    ProcessSection.tsx    # 4-step timeline (horizontal desktop, vertical mobile)
    ContactSection.tsx    # WhatsApp button + contact form
  ui/
    ParticleBackground.tsx  # tsParticles wrapper (Client Component, lazy-loaded)
    TypewriterText.tsx      # Typewriter effect hook/component (Client Component)
    AnimatedSection.tsx     # Scroll-triggered fade/slide wrapper (Client Component)
    ServiceCard.tsx         # Individual service card with glow animation
    ProjectCard.tsx         # Portfolio card
    ProjectModal.tsx        # Expandable/modal overlay for project details
    TestimonialCard.tsx     # Single testimonial with stars
    ProcessStep.tsx         # Timeline step with icon
    WhatsAppButton.tsx      # Branded CTA button linking to wa.me

lib/
  content/
    pt-BR.ts              # All static content in Portuguese
    en.ts                 # All static content in English
  types.ts                # Shared TypeScript types
  utils.ts                # Helpers (scroll to section, WhatsApp URL builder)

hooks/
  useLocale.ts            # Language state: read/write from localStorage + context
  useScrollAnimation.ts   # IntersectionObserver wrapper for entrance animations
  useTypewriter.ts        # Typewriter effect state machine

context/
  LocaleContext.tsx       # React Context: current locale + toggle function
```

---

## Component Boundaries

| Component | Type | Responsibility | Communicates With |
|-----------|------|---------------|-------------------|
| `app/layout.tsx` | Server | HTML/body, fonts, root metadata, LocaleProvider wrapper | All children |
| `app/page.tsx` | Server | Assembles all sections in document order | All section components |
| `Header` | Client | Sticky nav, anchor links, language toggle | `LocaleContext` (read/write) |
| `HeroSection` | Server shell + Client island | Static structure is server; ParticleBackground + TypewriterText are client | `LocaleContext` (read) |
| `ParticleBackground` | Client | tsParticles canvas initialization and lifecycle | None (self-contained) |
| `TypewriterText` | Client | Cycling typewriter strings | `LocaleContext` (read for strings) |
| `AboutSection` | Server | Profile card, tool badges — no interactivity | `LocaleContext` (read) |
| `ServicesSection` | Server shell | Renders 6 `<ServiceCard>` — hover CSS only, no JS needed | `LocaleContext` (read) |
| `ServiceCard` | Server | Static card with Tailwind hover:glow class | None |
| `PortfolioSection` | Client | Modal state (open/closed, which project) | `LocaleContext` (read) |
| `ProjectModal` | Client | Overlay with project details, close handler | `PortfolioSection` (props) |
| `TestimonialsSection` | Client | Carousel index state | `LocaleContext` (read) |
| `ProcessSection` | Server | Static timeline — CSS scroll reveal only | `LocaleContext` (read) |
| `ContactSection` | Client | Form state, WhatsApp redirect URL builder | `LocaleContext` (read) |
| `AnimatedSection` | Client | IntersectionObserver, triggers CSS class on enter | Wraps any section |
| `Footer` | Server | Static links, brand text | `LocaleContext` (read) |
| `LocaleContext` | Client | Language state persisted to localStorage | All components needing text |

**Server vs Client boundary rule:** Default to Server Components. Add `'use client'` only when the component needs `useState`, `useEffect`, browser APIs (localStorage, IntersectionObserver, canvas), or event handlers. Heavy animated islands (particles, carousel, modal) are Client Components. All other sections are Server Components that consume locale-aware static text via a context read pattern.

---

## Data Flow

### Language / i18n

The site has no backend. All content lives in static TypeScript objects (`lib/content/pt-BR.ts` and `lib/content/en.ts`). Language preference is stored in `localStorage` and managed by `LocaleContext`.

```
localStorage ('locale' key)
    │
    ▼
LocaleContext (Client, wraps layout)
    │
    ├──► Header (renders toggle, updates context)
    ├──► HeroSection → TypewriterText (reads strings)
    ├──► AboutSection (reads bio text)
    ├──► ServicesSection → ServiceCard[] (reads service data)
    ├──► PortfolioSection → ProjectCard[], ProjectModal (reads project data)
    ├──► TestimonialsSection (reads testimonial data)
    ├──► ProcessSection (reads step labels)
    ├──► ContactSection (reads form labels, WhatsApp message template)
    └──► Footer (reads nav labels, tagline)
```

No prop-drilling of content — each component reads from context directly. The content objects for both languages are bundled at build time (static).

### Contact Form → WhatsApp

No API call. The form builds a pre-filled WhatsApp URL:

```
User fills form (Name, Email, Message)
    │
    ▼
ContactSection (Client Component) builds:
  `https://wa.me/5531988969661?text=...`
    │
    ▼
window.open() or <a href> target="_blank"
```

WhatsApp link is the only "integration" — no fetch, no server action needed.

### Scroll Animations

```
AnimatedSection (Client Component)
    │
    ├── wraps each section with initial CSS: opacity:0, translateY:20px
    ├── registers IntersectionObserver on mount
    │
    ▼
When section enters viewport:
    └── adds CSS class → opacity:1, translateY:0, transition applied
```

This is the extent of scroll state — purely local to each `AnimatedSection` instance.

---

## Suggested Build Order (Dependency Graph)

Build bottom-up: foundation first, then shells, then interactive islands.

```
1. FOUNDATION
   ├── app/layout.tsx           — HTML/body, fonts, metadata
   ├── app/globals.css          — CSS variables (#00FFFF accent, dark base)
   ├── lib/content/pt-BR.ts     — All Portuguese strings
   ├── lib/content/en.ts        — All English strings
   └── context/LocaleContext.tsx — Language state

2. LAYOUT SHELLS (Server Components — no interactivity yet)
   ├── Header.tsx               — Static nav, placeholder toggle
   ├── Footer.tsx               — Static links
   └── app/page.tsx             — Assembles section placeholders

3. STATIC SECTIONS (Server Components, consume locale content)
   ├── AboutSection.tsx
   ├── ServicesSection.tsx + ServiceCard.tsx
   ├── ProcessSection.tsx + ProcessStep.tsx
   └── TestimonialCard.tsx (static variant first)

4. SCROLL ANIMATION LAYER
   └── AnimatedSection.tsx (wrap existing sections — IntersectionObserver)

5. INTERACTIVE ISLANDS (Client Components)
   ├── TypewriterText.tsx       — depends on: locale context
   ├── PortfolioSection.tsx     — depends on: locale content, ProjectModal
   ├── ProjectModal.tsx         — depends on: PortfolioSection state
   └── TestimonialsSection.tsx  — depends on: testimonial data

6. HEAVY VISUAL LAYER (Client, lazy-loaded)
   └── ParticleBackground.tsx   — tsParticles, dynamic import with ssr:false

7. CONTACT + CTA
   └── ContactSection.tsx       — depends on: locale context (form labels, WA template)

8. POLISH
   ├── Language toggle in Header (wires LocaleContext write)
   ├── SEO metadata (generateMetadata in layout/page)
   ├── next/image optimization for profile photo
   └── Mobile responsive audit
```

The order matters because: locale context must exist before any content-consuming component; static sections can be built and verified without animation; particle canvas must be `dynamic(() => import(...), { ssr: false })` — if built first it complicates SSR debugging.

---

## Patterns to Follow

### Pattern 1: Locale-Aware Static Content

Keep all display strings in typed content objects, never inline in JSX.

```typescript
// lib/content/pt-BR.ts
export const ptBR = {
  hero: {
    headline: "Inteligência que escala o seu negócio",
    typewriterItems: ["Automação com IA", "Agentes para WhatsApp", "..."],
    ctaPrimary: "Ver Projetos",
    ctaWhatsApp: "Falar com Especialista",
  },
  services: [
    { id: "automation", title: "Automação com IA", description: "..." },
    // ...
  ],
} as const
```

```typescript
// context/LocaleContext.tsx
'use client'
const content = locale === 'pt-BR' ? ptBR : en
```

Components destructure only what they need from `content`.

### Pattern 2: Client Islands via dynamic()

Heavy Client Components (particles, carousel) should be lazy-loaded to avoid SSR errors and reduce initial bundle.

```typescript
// components/sections/HeroSection.tsx (Server Component shell)
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(
  () => import('@/components/ui/ParticleBackground'),
  { ssr: false, loading: () => <div className="particle-placeholder" /> }
)
```

### Pattern 3: AnimatedSection Wrapper

All sections get entrance animation by wrapping with a single reusable component — keeps section components clean.

```typescript
// app/page.tsx
<AnimatedSection>
  <AboutSection />
</AnimatedSection>
<AnimatedSection delay={0.1}>
  <ServicesSection />
</AnimatedSection>
```

### Pattern 4: WhatsApp URL Builder

Centralize URL construction in a utility to ensure consistent encoding.

```typescript
// lib/utils.ts
export function buildWhatsAppUrl(message: string): string {
  const phone = '5531988969661'
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
```

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Prop-Drilling Locale Strings

**What:** Passing translated strings down through multiple component layers via props.
**Why bad:** Creates tight coupling; changes to content shape require updating every prop interface in the chain.
**Instead:** Each component reads directly from `LocaleContext` — single indirection.

### Anti-Pattern 2: Making All Components Client Components

**What:** Adding `'use client'` to every component because "it's easier."
**Why bad:** Eliminates SSG benefits; ships unnecessary JS; hurts Lighthouse score and SEO.
**Instead:** Default to Server Components. Only sections with actual interactivity (carousel, modal, form, particles) need `'use client'`.

### Anti-Pattern 3: Rendering Particles Without ssr:false

**What:** Importing tsParticles in a Server Component or without `dynamic(..., { ssr: false })`.
**Why bad:** tsParticles accesses `window` and `canvas` — throws on server render, breaks build.
**Instead:** Always use `dynamic()` with `ssr: false` for canvas-based and browser-API-dependent components.

### Anti-Pattern 4: Inline Static Content

**What:** Writing headline text, service descriptions, and button labels directly in JSX strings.
**Why bad:** Makes bilingual support a find-and-replace nightmare; impossible to maintain consistency.
**Instead:** All display text in `lib/content/pt-BR.ts` and `lib/content/en.ts` from day one, even before the toggle is wired.

### Anti-Pattern 5: One Giant page.tsx

**What:** Writing all section markup directly in `app/page.tsx`.
**Why bad:** Single file becomes 1000+ lines; no code splitting; impossible to work on sections in parallel.
**Instead:** Each section is its own component in `components/sections/`. `page.tsx` only imports and orders them.

---

## Scalability Considerations

| Concern | Current (v1) | Future (v2) |
|---------|-------------|------------|
| Content updates | Edit TypeScript files, redeploy | Extract to JSON files; consider Contentlayer or Sanity CMS |
| New sections | Add component + import in page.tsx | Same pattern, no architecture change needed |
| New language | Add `lib/content/fr.ts`; update LocaleContext union type | Already structured for N locales |
| Blog / case studies | Out of scope — add `app/blog/[slug]/page.tsx` route | New route segment, no SPA refactor needed |
| Contact backend | Currently WhatsApp redirect | Add `app/api/contact/route.ts` Server Action without changing form UI |
| Analytics | Add `next/script` with Strategy `afterInteractive` | No architecture change |

---

## Sources

- Next.js App Router official documentation (verified via nextjs.org/docs/llms-full.txt, 2026-04-02) — HIGH confidence
- Next.js Server vs Client Components boundary guidance — HIGH confidence (official docs)
- Project requirements from `.planning/PROJECT.md` and `instrucoes.txt` — authoritative (primary source)
- tsParticles/dynamic import pattern — MEDIUM confidence (standard Next.js community practice, training data verified against official dynamic import docs)
- next-intl without URL routing approach — MEDIUM confidence (training data; could not fetch next-intl docs due to WebFetch restrictions)
- WhatsApp deep link format (`wa.me`) — HIGH confidence (stable, well-documented API)

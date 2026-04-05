# Phase 2: Static Sections - Research

**Researched:** 2026-04-02
**Domain:** Next.js Server Components / Tailwind CSS static layout — hero, about, services, process, testimonials
**Confidence:** HIGH

---

## Summary

Phase 2 builds every content section of the site as pure Server Components (or Client Components only where strictly necessary) and wires them into `app/page.tsx`. Phase 1 established the design tokens, fonts, bilingual content objects, `LocaleContext`, `Header`, and `Footer`. Phase 2 has everything it needs: colors, typography, and all copy already live in `lib/content/pt-BR.ts` and `lib/content/en.ts`.

The critical architectural constraint is the "use client" boundary. `LocaleContext` is a Client Component provider. Any component that calls `useLocale()` must be a Client Component. But the sections themselves are mostly static layouts — the client boundary should be kept as narrow as possible. The recommended pattern is thin "section wrapper" Client Components that read locale and pass content down as props to purely static child markup.

The second critical insight is that SERV-02 (CSS glow on hover) and TEST-01 (grid of cards) require zero JavaScript. Both are achievable with pure Tailwind utility classes and CSS transitions — no Framer Motion, no event handlers, no `'use client'`. Glow effects are a standard CSS `box-shadow` transition pattern, trivially expressed with a Tailwind `group/hover:shadow-[0_0_20px_#00FFFF40]` variant.

**Primary recommendation:** Build each section as a `'use client'` wrapper that calls `useLocale()` and renders its layout directly — avoid the over-engineered Server Component + props drilling pattern for this SPA scale, since every section will need locale content anyway.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| HERO-01 | Visitor sees impactful headline with clear value proposition on load | Content ready in `content.hero.headline` + `content.hero.subheadline`; Tailwind typographic scale patterns documented below |
| HERO-04 | Visitor can click "Ver Projetos" to navigate to portfolio or "Falar com Especialista" to open WhatsApp | CTA buttons are plain `<a href="#portfolio">` anchors and a WhatsApp `tel:` / `wa.me` link; no JS required |
| ABOUT-01 | About section presents Tiago as founder with photo (placeholder) and biography | `content.about` has `headline`, `bio`; photo placeholder uses `next/image` with a gray div fallback |
| ABOUT-02 | Visual badges of mastered tools (n8n, Cursor, Supabase, GPT/Claude APIs, WhatsApp API) | `content.about.tools` array maps to styled `<span>` pill badges — pure CSS |
| SERV-01 | 6 service cards with icon, title, description | `content.services.items` array (6 items); lucide-react provides icons; card grid is pure Tailwind |
| SERV-02 | Cards with glow animation on hover | Pure CSS `box-shadow` transition via Tailwind `hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]` — no JS |
| SERV-03 | Services covered: Automation AI, WhatsApp Agents, Lead Capture, Sites/Landing Pages, Full Stack Apps, Marketing Videos | All 6 items are in the content object with matching `id` keys |
| TEST-01 | Section with grid of 3 testimonial placeholder cards | `content.testimonials.items` (3 items); CSS grid layout |
| TEST-02 | Each card with italic text, name, company, circular avatar, 5 stars | Pure HTML/Tailwind: `italic`, rounded-full avatar placeholder, star unicode or SVG |
| PROC-01 | Visual timeline (horizontal/vertical) with 4 steps: Diagnóstico, Estratégia, Desenvolvimento, Entrega & Suporte | `content.process.steps` (4 items); horizontal on desktop, vertical on mobile via Tailwind responsive classes |
</phase_requirements>

---

## Standard Stack

### Core (already installed — VERIFIED: package.json)

| Library | Installed Version | Purpose | Why |
|---------|-------------------|---------|-----|
| Next.js | 16.2.2 | App framework | Already in project; App Router; page.tsx assembles sections |
| React | 19.2.4 | UI runtime | Ships with Next.js 16 |
| TypeScript | 5.x | Type safety | Already configured; `SiteContent` type enforces content shape |
| Tailwind CSS | 4.x (^4) | Utility CSS | Already in project; `@theme` block defines all design tokens |

[VERIFIED: package.json in project root — all four libraries confirmed]

### To Install

| Library | Latest Version | Purpose | Why |
|---------|----------------|---------|-----|
| lucide-react | 1.7.0 | SVG icons for service cards | Tree-shakeable, React-first, zero runtime overhead; each service card needs one icon |

[VERIFIED: npm registry — `npm view lucide-react version` returned 1.7.0 on 2026-04-02]

**Why lucide-react over alternatives:**
- `react-icons` (5.6.0) is larger bundle — pulls all icon families even with tree-shaking in some bundlers
- `@heroicons/react` (2.2.0) is valid alternative but lucide has more variety for tech/automation icons
- inline SVG is also acceptable if bundle size is a concern — lucide is the pragmatic choice

**Installation:**
```bash
npm install lucide-react
```

**Version verification:**
```bash
npm view lucide-react version  # returned 1.7.0 on 2026-04-02
```

---

## Architecture Patterns

### Recommended Project Structure (Phase 2 additions)

```
components/
├── layout/
│   ├── Header.tsx          # Phase 1 — exists
│   └── Footer.tsx          # Phase 1 — exists
└── sections/               # Phase 2 — new directory
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── ServicesSection.tsx
    ├── TestimonialsSection.tsx
    └── ProcessSection.tsx

app/
└── page.tsx                # Updated: import and render all 5 sections
```

### Pattern 1: Thin Client Component Wrapper (Recommended)

**What:** Each section is a `'use client'` component that calls `useLocale()` and renders its own markup inline. No prop-drilling, no Server/Client split.

**When to use:** This SPA has a `LocaleProvider` wrapping the entire tree. Every section needs locale content. The overhead of keeping sections as Server Components and threading content as props is not justified at this scale.

**Why this works:** Next.js App Router allows Client Components to render rich static markup. The page is statically exported anyway (SSG). The "Server Component" benefit (zero client JS) is marginal here because the locale toggle already requires a Client Component boundary at the provider level.

```tsx
// Source: established pattern from Header.tsx and Footer.tsx in Phase 1
'use client'
import { useLocale } from '@/context/LocaleContext'

export function HeroSection() {
  const { content } = useLocale()
  return (
    <section id="hero" /* ... */>
      <h1>{content.hero.headline}</h1>
      {/* ... */}
    </section>
  )
}
```

[VERIFIED: same pattern used in Header.tsx and Footer.tsx — confirmed working in Phase 1]

### Pattern 2: CSS-Only Glow on Hover (SERV-02)

**What:** Service cards gain a cyan box-shadow glow on hover using only CSS — no JavaScript, no Framer Motion.

**When to use:** Any hover effect that doesn't require state change. Pure CSS transitions are GPU-accelerated and work without hydration.

```tsx
// Source: Tailwind v4 arbitrary value + transition utility pattern [ASSUMED — Tailwind v4 docs]
<div className="
  rounded-xl border border-surface bg-surface
  transition-all duration-300
  hover:border-accent/40
  hover:shadow-[0_0_24px_rgba(0,255,255,0.2)]
  cursor-default
">
```

**Note on Tailwind v4 arbitrary values:** The `shadow-[...]` arbitrary value syntax is unchanged from v3. Tailwind v4 retains full arbitrary value support. [ASSUMED — confirm at build time if shadow utility behaves differently]

### Pattern 3: Responsive Timeline (PROC-01)

**What:** 4-step process rendered as horizontal row on desktop, vertical stack on mobile. Pure CSS flexbox/grid with responsive breakpoints.

```tsx
// Desktop: flex-row with connector lines between steps
// Mobile: flex-col with vertical connector line on the left
<div className="flex flex-col md:flex-row gap-0 relative">
  {steps.map((step, i) => (
    <div key={step.id} className="flex-1 flex flex-col md:items-center relative">
      {/* Step number circle */}
      <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
        <span className="text-accent font-bold text-sm">{step.number}</span>
      </div>
      {/* Connector line — shown between items */}
      {i < steps.length - 1 && (
        <div className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-surface" />
      )}
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ))}
</div>
```

[ASSUMED — standard CSS pattern, will verify render at build time]

### Pattern 4: Circular Avatar Placeholder (TEST-02)

**What:** Testimonial cards require circular avatar. No real photos exist — use a placeholder div styled as a circle with initials or a neutral color.

```tsx
// Pure CSS avatar placeholder — no image dependency
<div className="w-12 h-12 rounded-full bg-surface border border-accent/30 flex items-center justify-center">
  <span className="text-accent text-sm font-bold">
    {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
  </span>
</div>
```

### Pattern 5: Star Rating (TEST-02)

**What:** 5 stars per testimonial card. Use Unicode character or SVG — no library needed for static 5-star display.

```tsx
// Unicode star — simplest approach, accessibility with aria-label
<div aria-label="5 out of 5 stars">
  {Array.from({ length: 5 }).map((_, i) => (
    <span key={i} className="text-accent text-sm">★</span>
  ))}
</div>
```

### Pattern 6: WhatsApp CTA Link (HERO-04)

**What:** "Falar com Especialista" opens WhatsApp directly. Use `wa.me` deep link. Phone number is already in `content.contact.whatsappNumber`.

```tsx
// WhatsApp deep link — no JS needed, plain anchor
const phone = content.contact.whatsappNumber.replace(/\D/g, '') // "5531988969661"
const message = encodeURIComponent(content.contact.whatsappMessage)
const href = `https://wa.me/${phone}?text=${message}`

<a href={href} target="_blank" rel="noopener noreferrer">
  {content.hero.ctaWhatsApp}
</a>
```

[VERIFIED: `content.contact.whatsappNumber` and `content.contact.whatsappMessage` both exist in pt-BR.ts]

### Pattern 7: Section Anchor IDs

Phase 1's Header already has hardcoded anchor IDs. Phase 2 sections MUST use matching `id` attributes:

```
id="sobre"       → AboutSection
id="servicos"    → ServicesSection
id="portfolio"   → (Phase 3)
id="depoimentos" → TestimonialsSection
id="processo"    → ProcessSection
id="contato"     → (Phase 4)
```

[VERIFIED: Header.tsx uses `#${link.key}` where keys are `['sobre', 'servicos', 'portfolio', 'depoimentos', 'processo', 'contato']`]

### Anti-Patterns to Avoid

- **Inline strings:** Every display string MUST come from `useLocale().content`. No hardcoded Portuguese or English in JSX. [VERIFIED: D-08 decision from Phase 1 CONTEXT.md]
- **Adding `'use client'` to `app/page.tsx`:** Keep `page.tsx` as a Server Component. Import Client Component sections into it — this is valid in Next.js App Router (Client Components can be children of Server Components).
- **Using `next/image` for placeholder avatars:** `next/image` requires a real `src`. Use a styled `<div>` for placeholders. For the About section photo placeholder, a div with `aspect-square` and a gray background is correct.
- **Installing framer-motion for Phase 2:** Animations are deferred to Phase 3 (DSGN-04, TEST-03). Do NOT add Framer Motion in this phase — it would be premature and the Phase 3 plan should own that installation.
- **Using Tailwind `group` without a named group:** Tailwind v4 requires `group/{name}` for nested group hover if multiple groups exist. For simple single-group hover (card glow), plain `group` + `group-hover:` is sufficient.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Service card icons | Custom SVG components | `lucide-react` | 1000+ icons, tree-shakeable, maintained |
| Star rating display | Custom star SVG | Unicode `★` with `text-accent` | Static 5-star display needs no library |
| WhatsApp URL builder | Custom encoder function | Inline `wa.me` template literal | One URL, no complex encoding beyond `encodeURIComponent` |
| CSS glow effect | JS mouseover handler | Tailwind `hover:shadow-[...]` | Pure CSS, no hydration needed |

**Key insight:** This entire phase is markup + data. The content objects are complete. The design tokens are defined. The task is connecting them with Tailwind utility classes — no custom logic, no complex state.

---

## Common Pitfalls

### Pitfall 1: Hero CTA "Ver Projetos" points to wrong anchor

**What goes wrong:** Link points to `#portfolio` but the portfolio section is not built until Phase 3. Clicking the button scrolls to nothing.

**Why it happens:** Premature wiring. The anchor exists in the header nav, but the section `id="portfolio"` won't be in the DOM until Phase 3.

**How to avoid:** The `href="#portfolio"` link is still correct — it will simply scroll to nothing in Phase 2. This is acceptable per phase design. Do NOT add a portfolio section stub that conflicts with Phase 3 scope.

**Warning signs:** User reports "Ver Projetos" doesn't scroll anywhere — expected behavior in Phase 2.

### Pitfall 2: Forgetting `id` attributes on section wrappers

**What goes wrong:** Header anchor links (`#sobre`, `#servicos`, etc.) don't scroll to sections because the sections lack matching `id` attributes.

**Why it happens:** Section IDs were deferred to Phase 2 in the Phase 1 Header comment. Easy to forget.

**How to avoid:** Each section's outermost `<section>` element MUST have `id="sobre"`, `id="servicos"`, etc. The Header already hard-codes these IDs.

**Warning signs:** Clicking nav links doesn't scroll page — verify with browser DevTools element inspector.

### Pitfall 3: Calling `useLocale()` in a Server Component

**What goes wrong:** TypeScript/React error — `useLocale` uses `useContext` which is a hook, and hooks are illegal in Server Components.

**Why it happens:** Forgetting `'use client'` directive at the top of a section component.

**How to avoid:** Every component that calls `useLocale()` MUST have `'use client'` as its first line. `app/page.tsx` itself should remain a Server Component — it imports Client Component sections, which is valid.

**Warning signs:** Build error: "You're importing a component that needs `useContext`."

### Pitfall 4: Tailwind v4 `hover:shadow` arbitrary value not purging

**What goes wrong:** The glow shadow style doesn't appear in production build because Tailwind v4's content scanning missed the arbitrary value string.

**Why it happens:** Tailwind v4 scans source files for class names at build time. Dynamically constructed class strings (template literals) are not detected.

**How to avoid:** Write the full shadow class as a static string — do NOT construct it with string interpolation. Example: `"hover:shadow-[0_0_24px_rgba(0,255,255,0.2)]"` as a literal, not `\`hover:shadow-[${glowColor}]\``.

**Warning signs:** Glow works in `npm run dev` (JIT) but disappears in `npm run build` production output.

### Pitfall 5: `page.tsx` importing from `'use client'` sections causes hydration warnings

**What goes wrong:** Browser console shows React hydration mismatch warnings.

**Why it happens:** Not a real issue if sections are consistent. Server renders the Client Component shell, client hydrates it. As long as `useLocale()` defaults to `pt-BR` (which it does — confirmed in LocaleContext.tsx), initial server HTML matches client initial render.

**How to avoid:** LocaleContext already handles this correctly — `useState('pt-BR')` on initial render, `useEffect` reads localStorage after mount. No action needed.

---

## Code Examples

### HeroSection skeleton

```tsx
// Source: established pattern from Phase 1 Header.tsx [VERIFIED]
'use client'
import { useLocale } from '@/context/LocaleContext'

export function HeroSection() {
  const { content } = useLocale()
  const phone = content.contact.whatsappNumber.replace(/\D/g, '')
  const waMsg = encodeURIComponent(content.contact.whatsappMessage)

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center"
    >
      {/* Particle canvas injected here in Phase 3 via next/dynamic ssr:false */}
      <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary leading-tight max-w-4xl">
        {content.hero.headline}
      </h1>
      <p className="font-body text-lg md:text-xl text-secondary mt-4 max-w-2xl">
        {content.hero.subheadline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="#portfolio"
          className="px-8 py-3 rounded-lg bg-accent text-background font-heading font-bold text-base hover:opacity-90 transition-opacity"
        >
          {content.hero.ctaPrimary}
        </a>
        <a
          href={`https://wa.me/${phone}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg border border-accent text-accent font-heading font-bold text-base hover:bg-accent/10 transition-colors"
        >
          {content.hero.ctaWhatsApp}
        </a>
      </div>
    </section>
  )
}
```

### Service card with CSS glow

```tsx
// Source: Tailwind CSS arbitrary value pattern [ASSUMED — verify at build]
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="
      group relative rounded-xl border border-surface bg-surface p-6
      transition-all duration-300
      hover:border-accent/40 hover:shadow-[0_0_24px_rgba(0,255,255,0.2)]
    ">
      <Icon className="w-8 h-8 text-accent mb-4" />
      <h3 className="font-heading font-bold text-lg text-primary mb-2">{title}</h3>
      <p className="font-body text-sm text-secondary leading-relaxed">{description}</p>
    </div>
  )
}
```

### Service icon mapping

```tsx
// Map service ID to lucide-react icon [ASSUMED — icon names are illustrative; verify in lucide-react 1.7.0]
import { Bot, MessageCircle, Users, Globe, Code, Video } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SERVICE_ICONS: Record<string, LucideIcon> = {
  automation: Bot,
  whatsapp:   MessageCircle,
  leads:      Users,
  sites:      Globe,
  apps:       Code,
  videos:     Video,
}
```

**Note:** Verify these icon names exist in lucide-react 1.7.0. Icon names occasionally change between versions. [ASSUMED — validate with `import { Bot } from 'lucide-react'` at implementation time]

### Testimonial card

```tsx
// Source: standard HTML/Tailwind pattern [ASSUMED]
interface TestimonialCardProps {
  text: string
  name: string
  company: string
  stars: number
}

function TestimonialCard({ text, name, company, stars }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)
  return (
    <div className="rounded-xl border border-surface bg-surface p-6 flex flex-col gap-4">
      {/* Stars */}
      <div aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-accent">★</span>
        ))}
      </div>
      {/* Quote */}
      <p className="font-body text-secondary italic leading-relaxed">{`"${text}"`}</p>
      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-background border border-accent/30 flex items-center justify-center shrink-0">
          <span className="text-accent text-xs font-bold">{initials}</span>
        </div>
        <div>
          <p className="font-heading font-medium text-sm text-primary">{name}</p>
          <p className="font-body text-xs text-secondary">{company}</p>
        </div>
      </div>
    </div>
  )
}
```

### About section — tool badge

```tsx
// Tool badge — pure CSS pill [ASSUMED — standard pattern]
<span className="inline-flex items-center px-3 py-1 rounded-full border border-accent/40 text-accent text-xs font-body font-medium bg-accent/5">
  {tool}
</span>
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `framer-motion` package name | `motion` package name | Framer Motion v11 (2024) | Install as `npm install motion`, not `framer-motion` — but motion is NOT needed for Phase 2 |
| `react-tsparticles` | `@tsparticles/react` | 2023 migration | Phase 3 concern only |
| Tailwind config file | CSS `@theme` block in globals.css | Tailwind v4 (Feb 2025) | Already done in Phase 1 — `@theme` block is the source of truth |

**Deprecated/outdated:**
- `framer-motion` (old package name): replaced by `motion` in v11 — Phase 3 concern
- `create-next-app` scaffold: project is already initialized — Phase 1 complete

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Tailwind v4 arbitrary shadow value `shadow-[0_0_24px_rgba(0,255,255,0.2)]` works identically to v3 | Architecture Patterns (Pattern 2), Code Examples | Glow effect may not render; fallback: use inline `style` prop with `boxShadow` |
| A2 | lucide-react 1.7.0 exports `Bot`, `MessageCircle`, `Users`, `Globe`, `Code`, `Video` under those exact names | Code Examples (service icon mapping) | Build error at import; fix: check lucide.dev for correct icon names |
| A3 | Tailwind v4 content scanning detects arbitrary class names written as static string literals in TSX | Common Pitfalls (Pitfall 4) | Glow disappears in production; fix: use `style` prop as fallback |
| A4 | Horizontal-to-vertical timeline responsive layout using `flex-col md:flex-row` renders correctly | Architecture Patterns (Pattern 3) | Visual layout incorrect; fix: adjust flex/grid at review time |

**If this table is empty:** All claims in this research were verified or cited — no user confirmation needed.

---

## Open Questions

1. **Does Phase 2 need a photo for About section, or is a placeholder sufficient?**
   - What we know: REQUIREMENTS.md says "foto (placeholder)"
   - What's unclear: Should the placeholder be a `next/image` with a gray fallback, a `<div>`, or a gradient?
   - Recommendation: Use a styled `<div>` with `aspect-square`, `rounded-full`/`rounded-2xl`, and `bg-surface border border-accent/20` — no image dependency, no layout shift.

2. **Should the Hero section have a minimum viewport height to anchor the page?**
   - What we know: Success criteria says the hero shows headline + CTA "without particles or typewriter" — layout/hierarchy is the goal
   - Recommendation: `min-h-[90vh]` so the hero fills the screen before scroll, preparing the layout for Phase 3 particle background.

---

## Environment Availability

Phase 2 is purely code additions — no external services, no databases, no CLI tools beyond `npm`. Step 2.6 is effectively N/A. The one installation needed is `lucide-react`.

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | npm install | ✓ | v24.11.1 | — |
| npm | package installs | ✓ | (with Node 24) | — |
| lucide-react | Service card icons | ✗ (not yet installed) | 1.7.0 available | Inline SVG or Unicode characters |
| Next.js dev server | Visual verification | ✓ | 16.2.2 | — |

[VERIFIED: `node --version` returned v24.11.1; `npm view lucide-react version` returned 1.7.0]

**Missing dependencies with no fallback:** None — lucide-react has a viable inline SVG fallback.

**Missing dependencies with fallback:**
- lucide-react: not installed, but simple inline SVGs or symbol characters work as a fallback if install fails.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual verification + browser DevTools + `npm run build` |
| Config file | none |
| Quick run command | `npm run dev` + visual check at localhost:3000 |
| Full suite command | `npm run build && npx tsc --noEmit` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| HERO-01 | Headline visible with correct text | Visual | `curl -s localhost:3000 \| grep "Inteligência"` | ❌ Wave 0 |
| HERO-04 | Two CTA buttons present and linked correctly | Visual + DOM | Inspect anchors in DevTools | ❌ Wave 0 |
| ABOUT-01 | About section renders with biography text | Visual | `curl -s localhost:3000 \| grep "Tiago"` | ❌ Wave 0 |
| ABOUT-02 | All 5 tool badges visible | Visual | Count badge elements in DevTools | ❌ Wave 0 |
| SERV-01 | 6 service cards render | Visual | Count card elements in DevTools | ❌ Wave 0 |
| SERV-02 | CSS glow on card hover | Visual | Mouse hover check — no JS required | ❌ Wave 0 |
| SERV-03 | All 6 service titles present | Visual | Check card titles against content.services.items | ❌ Wave 0 |
| TEST-01 | 3 testimonial cards in grid | Visual | Count card elements | ❌ Wave 0 |
| TEST-02 | Each card has italic quote, name, company, avatar, stars | Visual | Inspect card DOM structure | ❌ Wave 0 |
| PROC-01 | 4-step timeline, horizontal desktop / vertical mobile | Visual | Check at 375px and 1280px viewport widths | ❌ Wave 0 |

### Sampling Rate

- **Per task commit:** `npm run dev` + visual check of new section
- **Per wave merge:** `npm run build && npx tsc --noEmit`
- **Phase gate:** Full build passes + all 5 sections visible in both PT-BR and EN before `/gsd:verify-work`

### Wave 0 Gaps

- [ ] Install `lucide-react` before writing section components: `npm install lucide-react`
- [ ] Create `components/sections/` directory
- [ ] All verification is manual/visual — no automated test framework needed for this phase

*(No existing test infrastructure to extend — consistent with Phase 1 approach)*

---

## Security Domain

Phase 2 is static content rendering. The only potential security touch-point is the WhatsApp URL generated in HeroSection.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | — |
| V3 Session Management | no | — |
| V4 Access Control | no | — |
| V5 Input Validation | partial | WhatsApp URL: phone number from content object (not user input); message from content object — no sanitization needed |
| V6 Cryptography | no | — |

### Known Threat Patterns

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Open redirect via WhatsApp href | Tampering | href is a template literal from a static content object — no user input reaches it; `rel="noopener noreferrer"` on all `target="_blank"` links |
| XSS via content injection | Tampering | React escapes all JSX string interpolations by default — no `dangerouslySetInnerHTML` used |

---

## Sources

### Primary (HIGH confidence)
- `lib/content/pt-BR.ts` — all content keys verified present (hero, about, services, testimonials, process, contact)
- `components/layout/Header.tsx` — section anchor IDs confirmed (`sobre`, `servicos`, `portfolio`, `depoimentos`, `processo`, `contato`)
- `package.json` — installed package versions confirmed (Next.js 16.2.2, React 19.2.4, Tailwind ^4)
- `app/globals.css` — Tailwind design tokens confirmed (`bg-background`, `bg-surface`, `text-accent`, `font-heading`, `font-body`)
- `context/LocaleContext.tsx` — `useLocale()` API confirmed; PT-BR default on first render confirmed
- `.planning/phases/01-foundation/01-CONTEXT.md` — D-08 (no inline strings) and section ID conventions confirmed
- npm registry: `npm view lucide-react version` → 1.7.0 [VERIFIED: 2026-04-02]
- npm registry: `npm view next version` → 16.2.2 [VERIFIED: 2026-04-02]

### Secondary (MEDIUM confidence)
- Tailwind v4 arbitrary value shadow syntax — same as v3; no config change needed [ASSUMED based on Tailwind v4 upgrade guide patterns]
- lucide-react icon name conventions — `Bot`, `MessageCircle`, `Users`, `Globe`, `Code`, `Video` [ASSUMED — verify at import time]

### Tertiary (LOW confidence)
- None

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — package.json verified, npm registry queried
- Architecture: HIGH — patterns derived directly from Phase 1 working code
- Content availability: HIGH — all Phase 2 content keys verified in pt-BR.ts
- Pitfalls: MEDIUM — Tailwind v4 arbitrary value scanning behavior not directly tested
- Icons: MEDIUM — lucide-react version verified; exact icon names assumed

**Research date:** 2026-04-02
**Valid until:** 2026-07-02 (stable ecosystem — Tailwind/Next.js patch releases won't affect these patterns)

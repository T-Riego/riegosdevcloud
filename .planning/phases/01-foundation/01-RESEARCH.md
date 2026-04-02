# Phase 1: Foundation - Research

**Researched:** 2026-04-02
**Domain:** Next.js 15 App Router scaffold, dark theme FOUC prevention, bilingual content model (pure React Context), sticky header, footer — greenfield project
**Confidence:** HIGH (stack confirmed against npm registry; architecture from official Next.js docs and project research files; pitfalls from PITFALLS.md HIGH confidence entries)

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Typography**
- D-01: Two-font system — Space Grotesk for headings/titles, Inter for body text
- D-02: Load 3 weights per font: Regular (400), Medium (500), Bold (700) via next/font
- D-03: Use next/font for both fonts — zero layout shift, self-hosted

**i18n System**
- D-04: Pure React Context + localStorage — no next-intl or other i18n library
- D-05: Translation files as TypeScript with full type safety: `lib/content/pt-BR.ts` and `lib/content/en.ts`
- D-06: Default language is PT-BR on first visit; user preference persisted in localStorage
- D-07: Toggle switches language instantly without page reload — context re-renders all text
- D-08: All display strings for ALL sections (including Phase 2-4 sections) must be externalized in the content files from the start

**Header**
- D-09: Logo is styled text "Riegos Dev" in Space Grotesk Bold with cyan (#00FFFF) accent
- D-10: Navigation items: Sobre, Servicos, Portfolio, Depoimentos, Processo, Contato (all sections)
- D-11: PT/EN toggle positioned at the right side of the header (desktop), always visible
- D-12: Mobile: hamburger menu icon (3 lines), opens overlay/sidebar with nav links + toggle
- D-13: Header is sticky — stays fixed at top on scroll with background blur/opacity

**Color Palette**
- D-14: Background: #0A0A0A (near-black, deep)
- D-15: Accent: #00FFFF (cyan electric) — single accent color, no secondary
- D-16: Text hierarchy: #FFFFFF for headings, #E0E0E0 for body text
- D-17: Cards/surfaces: #111111 with subtle cyan border on hover
- D-18: Dark theme FOUC prevention: inline blocking script in layout.tsx to set dark background before hydration

### Claude's Discretion
- Exact gradient styles and subtle color variations within the palette
- Spacing system (use Tailwind defaults unless something specific is needed)
- Header animation on scroll (background opacity transition)
- Hamburger menu animation style

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| DSGN-01 | Dark theme com preto/grafite profundo e acento ciano eletrico (#00FFFF) com gradientes sutis | CSS variables in globals.css + Tailwind config + FOUC blocking script in layout.tsx |
| DSGN-02 | Fonte Inter ou Space Grotesk via Google Fonts (next/font) | next/font/google with Space Grotesk + Inter, 3 weights each, applied in root layout |
| I18N-01 | Todo conteudo textual externalizado em arquivos de traducao PT-BR e EN | lib/content/pt-BR.ts + lib/content/en.ts TypeScript content objects; LocaleContext provider |
| NAV-01 | Header sticky que permanece fixo ao rolar a pagina com anchor links para cada secao | Tailwind `sticky top-0 z-50` + backdrop-blur; mobile hamburger with body scroll lock |
| FOOT-01 | Footer com logo Riegos Dev, links rapidos para secoes, frase de marca e copyright | Server Component; reads from LocaleContext; anchor href links to section IDs |
| FOOT-02 | Links placeholder para redes sociais | Static anchor tags with aria-label; real URLs filled later in Phase 4 |
</phase_requirements>

---

## Summary

Phase 1 scaffolds the entire project foundation: Next.js 15 is installed fresh (no existing code), the design system is established via CSS variables and Tailwind configuration, FOUC is eliminated by an inline blocking script, both font families are loaded via `next/font`, the bilingual content model is created as typed TypeScript objects, and the header and footer shells are built as working React components.

The most critical technical decision for this phase — and already locked by the user — is to use **pure React Context + localStorage** for i18n instead of next-intl or URL-based routing. This is architecturally sound for a single-URL portfolio SPA and avoids unnecessary complexity. The content files must be complete for all sections (Phases 2-4 text too) from day one (D-08).

The second most critical concern is FOUC: the dark background (#0A0A0A) must be applied before the first paint via a synchronous inline `<script>` in `app/layout.tsx`. Without this, users see a white flash on load — especially damaging on mobile networks common in Brazil.

**Primary recommendation:** Scaffold with `create-next-app@latest`, configure Tailwind CSS variables for the full design system, implement the blocking FOUC script, load both fonts, build LocaleContext + complete content files, then build Header and Footer as functional shells.

---

## Standard Stack

### Core (Phase 1 specific)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.2.2 | App framework + SSG | Verified on npm 2026-04-02. App Router, TypeScript-first, built-in font/image optimization |
| React | 19.x | UI runtime | Bundled with Next.js 16 — no separate install |
| TypeScript | 6.0.2 | Type safety | Verified on npm 2026-04-02. Ships via create-next-app |
| Tailwind CSS | 4.2.2 | Utility CSS + design tokens | Verified on npm 2026-04-02. v4 uses CSS-native variables, no tailwind.config.ts needed for basic use |

> **Version note:** npm registry confirms Next.js is currently at **16.2.2** (not 15.x as in earlier research). `create-next-app@latest` will scaffold this version. The App Router, `next/font`, and `next/dynamic` patterns documented in project research files are all valid for Next.js 16.x. [VERIFIED: npm registry, 2026-04-02]

> **TypeScript note:** npm shows TypeScript at **6.0.2**. Breaking changes from TS 5.x are unlikely to affect this project's patterns. [VERIFIED: npm registry, 2026-04-02]

> **Tailwind note:** Tailwind CSS 4.x is confirmed at 4.2.2. The v4 engine does not require `tailwind.config.ts` for basic use — configuration is done via CSS `@theme` blocks in globals.css. This changes how custom colors (like `#00FFFF` accent) are registered. [VERIFIED: npm registry, 2026-04-02]

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next-intl | 4.9.0 | (NOT USED in Phase 1) | Locked out by D-04; pure React Context chosen instead |

> `next-intl` is listed here only to document the version available should the decision ever change. It is explicitly excluded by D-04.

### Phase 1 — No additional library installs needed

Phase 1 uses only:
- `create-next-app` (bundles Next.js, React, TypeScript, Tailwind, ESLint)
- `next/font` (built-in — no install)
- Pure React Context (built-in — no install)
- Tailwind CSS (bundled via create-next-app)

No additional `npm install` commands for Phase 1 deliverables.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Pure React Context | next-intl 4.9.0 | next-intl adds type-safe message keys and plural/date formatting but requires more setup; user locked React Context as simpler for this scope |
| next/font | @import Google Fonts in CSS | next/font self-hosts fonts at build time — eliminates render-blocking and FOUT; @import is objectively worse for Next.js |
| Tailwind CSS v4 | Tailwind CSS v3 (3.4.x) | v4 has no config file (CSS-native); v3 requires tailwind.config.ts; v4 is the current standard but has breaking changes from v3 syntax |

**Installation:**

```bash
npx create-next-app@latest riegosdev-site \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

> No additional packages for Phase 1. Animation libraries (motion, @tsparticles) are Phase 2+.

**Version verification:** [VERIFIED: npm registry, 2026-04-02]
- `next`: 16.2.2
- `tailwindcss`: 4.2.2
- `typescript`: 6.0.2
- `motion` (Framer Motion): 12.38.0
- `@tsparticles/react`: 3.0.0
- `lenis`: 1.3.21
- `react-type-animation`: 3.2.0
- `next-intl`: 4.9.0

---

## Architecture Patterns

### Recommended Project Structure (Phase 1 deliverables only)

```
app/
  layout.tsx              # Root layout: html/body, FOUC script, fonts, LocaleProvider
  page.tsx                # Single page: section placeholder assembler (grows in Phase 2+)
  globals.css             # CSS variables for design system, Tailwind base

components/
  layout/
    Header.tsx            # Sticky nav, logo, language toggle, mobile hamburger
    Footer.tsx            # Logo, quick links, social placeholders, copyright

lib/
  content/
    pt-BR.ts              # ALL display strings in Portuguese (Phases 1-4 sections)
    en.ts                 # ALL display strings in English (Phases 1-4 sections)
  types.ts                # Shared TypeScript types (ContentSchema, Locale union)

context/
  LocaleContext.tsx       # React Context: locale state + toggle, reads/writes localStorage
```

> `hooks/` directory is optional for Phase 1. The `useLocale` hook can be co-located in `LocaleContext.tsx` as a named export. Separate hook files make sense in Phase 2 when more hooks are needed.

### Pattern 1: FOUC Prevention — Inline Blocking Script

**What:** An inline `<script>` injected into `<head>` in `app/layout.tsx` that reads localStorage synchronously and sets `document.documentElement.style.backgroundColor` before any paint occurs.

**When to use:** Always in dark-theme Next.js App Router projects. This is the Phase 1 foundation requirement D-18.

**Example:**
```tsx
// app/layout.tsx (Server Component — no "use client")
// Source: PITFALLS.md Pitfall 1 + Next.js App Router official docs pattern

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.backgroundColor='#0A0A0A';`,
          }}
        />
      </head>
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
```

> `suppressHydrationWarning` on `<html>` is intentional and documented — it prevents React from warning about the `style` attribute set by the inline script before hydration. [ASSUMED — standard Next.js dark theme pattern; not re-verified against Next.js 16 docs in this session]

### Pattern 2: next/font — Two-Font System

**What:** Load Space Grotesk (headings) and Inter (body) at build time via `next/font/google`. Apply via CSS variables to Tailwind.

**When to use:** Root `app/layout.tsx` — load once, applied globally via CSS variable on `<body>`.

**Example:**
```tsx
// app/layout.tsx
import { Space_Grotesk, Inter } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Apply both variables to <body>:
// <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
```

```css
/* globals.css — use in Tailwind v4 @theme block */
@theme {
  --font-heading: var(--font-space-grotesk), system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
}
```

[ASSUMED — next/font API is stable across Next.js 13-16; font variable application pattern is standard]

### Pattern 3: Tailwind v4 CSS Variables for Design System

**What:** In Tailwind v4, custom design tokens are declared in CSS using `@theme` blocks, not in a JavaScript config file.

**When to use:** `app/globals.css` — this replaces the `tailwind.config.ts` color/font customization from v3.

**Example:**
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Color palette */
  --color-background: #0A0A0A;
  --color-surface: #111111;
  --color-accent: #00FFFF;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #E0E0E0;

  /* Typography */
  --font-heading: var(--font-space-grotesk), system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
}

/* FOUC-safe base styles */
html {
  background-color: #0A0A0A;
  color: #FFFFFF;
}
```

> In Tailwind v4 the `@import "tailwindcss"` replaces `@tailwind base; @tailwind components; @tailwind utilities;`. Custom colors defined in `@theme` are available as `bg-background`, `text-accent`, etc. automatically. [ASSUMED — Tailwind v4 CSS-native config pattern; not re-fetched from official docs in this session; treat as MEDIUM confidence]

### Pattern 4: LocaleContext — Pure React Context i18n

**What:** A client-side React Context that holds the current locale string, a toggle function, and exports the content object for the current locale. On mount it reads from localStorage.

**When to use:** Wraps the entire app in `app/layout.tsx` (via `<LocaleProvider>`). All components read locale-aware content from this context.

**Example:**
```tsx
// context/LocaleContext.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { ptBR } from '@/lib/content/pt-BR'
import { en } from '@/lib/content/en'

type Locale = 'pt-BR' | 'en'

interface LocaleContextType {
  locale: Locale
  content: typeof ptBR
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt-BR') // D-06: default PT-BR

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored === 'pt-BR' || stored === 'en') {
      setLocale(stored)
    }
  }, [])

  const toggleLocale = () => {
    const next = locale === 'pt-BR' ? 'en' : 'pt-BR'
    setLocale(next)
    localStorage.setItem('locale', next) // D-06: persist preference
  }

  const content = locale === 'pt-BR' ? ptBR : en

  return (
    <LocaleContext.Provider value={{ locale, content, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
```

> Note: The `useEffect` reading localStorage runs client-side only — no hydration mismatch because the initial state (`'pt-BR'`) matches what the server would render. The brief flash from PT-BR to user preference on first load is acceptable because this is the default language for most visitors. [ASSUMED — standard React Context + localStorage pattern]

### Pattern 5: Content File Schema (TypeScript as const)

**What:** Both content files export a single `as const` object matching an identical shape. TypeScript infers the type from `ptBR` and `en` must match it.

**When to use:** D-08 requires ALL sections' strings to be in these files from day one.

**Example:**
```typescript
// lib/content/pt-BR.ts
export const ptBR = {
  nav: {
    logo: 'Riegos Dev',
    links: {
      sobre: 'Sobre',
      servicos: 'Serviços',
      portfolio: 'Portfólio',
      depoimentos: 'Depoimentos',
      processo: 'Processo',
      contato: 'Contato',
    },
    langToggle: 'EN',
  },
  footer: {
    tagline: 'Inteligência que escala o seu negócio',
    copyright: '© 2024 Riegos Dev. Todos os direitos reservados.',
    social: {
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  hero: {
    headline: 'Inteligência que escala o seu negócio',
    typewriterItems: [
      'Automação com IA',
      'Agentes para WhatsApp',
      'Captação Inteligente de Clientes',
    ],
    ctaPrimary: 'Ver Projetos',
    ctaWhatsApp: 'Falar com Especialista',
  },
  about: {
    sectionTitle: 'Sobre',
    headline: 'Quem está por trás da Riegos Dev',
    bio: 'Tiago é engenheiro de IA e automação...',
    toolsLabel: 'Ferramentas dominadas',
  },
  services: {
    sectionTitle: 'Serviços',
    headline: 'O que posso fazer pelo seu negócio',
    items: [
      { id: 'automation', title: 'Automação com IA', description: '...' },
      { id: 'whatsapp', title: 'Agentes WhatsApp', description: '...' },
      { id: 'leads', title: 'Captação de Clientes', description: '...' },
      { id: 'sites', title: 'Sites / Landing Pages', description: '...' },
      { id: 'apps', title: 'Apps Full Stack', description: '...' },
      { id: 'videos', title: 'Vídeos de Marketing', description: '...' },
    ],
  },
  portfolio: {
    sectionTitle: 'Portfólio',
    headline: 'Projetos que entregaram resultado',
    viewDetails: 'Ver detalhes',
    items: [
      { id: 'p1', title: 'Projeto 1', description: '...', tech: [], status: 'Concluído' },
      { id: 'p2', title: 'Projeto 2', description: '...', tech: [], status: 'Concluído' },
      { id: 'p3', title: 'Novo Projeto em Breve', description: '...', tech: [], status: 'Em breve' },
    ],
  },
  testimonials: {
    sectionTitle: 'Depoimentos',
    headline: 'O que os clientes dizem',
    items: [
      { id: 't1', text: '...', name: 'Cliente 1', company: 'Empresa A', stars: 5 },
      { id: 't2', text: '...', name: 'Cliente 2', company: 'Empresa B', stars: 5 },
      { id: 't3', text: '...', name: 'Cliente 3', company: 'Empresa C', stars: 5 },
    ],
  },
  process: {
    sectionTitle: 'Processo',
    headline: 'Como trabalhamos juntos',
    steps: [
      { id: 'step1', title: 'Diagnóstico', description: '...' },
      { id: 'step2', title: 'Estratégia', description: '...' },
      { id: 'step3', title: 'Desenvolvimento', description: '...' },
      { id: 'step4', title: 'Entrega & Suporte', description: '...' },
    ],
  },
  contact: {
    sectionTitle: 'Contato',
    headline: 'Pronto para automatizar seu crescimento?',
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      submit: 'Enviar via WhatsApp',
    },
    whatsappLabel: 'Falar pelo WhatsApp',
    whatsappMessage: 'Olá, vim pelo site e tenho interesse em seus serviços.',
  },
} as const

export type SiteContent = typeof ptBR
```

```typescript
// lib/content/en.ts — must match ptBR shape exactly
import type { SiteContent } from './pt-BR'

export const en: SiteContent = {
  nav: {
    logo: 'Riegos Dev',
    links: {
      sobre: 'About',
      servicos: 'Services',
      portfolio: 'Portfolio',
      depoimentos: 'Testimonials',
      processo: 'Process',
      contato: 'Contact',
    },
    langToggle: 'PT',
  },
  // ... (all keys matching ptBR shape)
} as const
```

> The `SiteContent` type exported from `pt-BR.ts` and applied to `en.ts` ensures TypeScript enforces structural parity — any missing key in `en.ts` is a compile error. [ASSUMED — standard TypeScript pattern; verified to work with `as const` in TS 5+]

### Pattern 6: Sticky Header with Scroll Blur

**What:** Header uses Tailwind `sticky top-0 z-50` and applies a background blur effect when scrolled past a threshold via `useState` + `useEffect`.

**When to use:** Header component (Client Component required for scroll listener).

**Example:**
```tsx
// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { locale, content, toggleLocale } = useLocale()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-surface'
          : 'bg-transparent'
        }`}
    >
      {/* logo, nav, toggle */}
    </header>
  )
}
```

[ASSUMED — standard Next.js sticky header with scroll detection pattern]

### Pattern 7: Mobile Menu with Body Scroll Lock

**What:** Hamburger menu toggles a state boolean; when open, `document.body.style.overflow = 'hidden'` prevents background scroll.

**When to use:** Inside Header.tsx, tied to the `menuOpen` state.

**Example:**
```tsx
const [menuOpen, setMenuOpen] = useState(false)

useEffect(() => {
  document.body.style.overflow = menuOpen ? 'hidden' : ''
  return () => { document.body.style.overflow = '' }
}, [menuOpen])
```

> Critical on iOS Safari — without overflow:hidden, users scroll the background while the overlay is open. [CITED: PITFALLS.md Pitfall 10 — HIGH confidence documented pattern]

### Anti-Patterns to Avoid

- **`'use client'` on layout.tsx or page.tsx:** Kills SSR for the entire page. LocaleProvider must be Client Component but layout.tsx stays Server — pass children through.
- **Inline strings in JSX:** Any text visible to users must come from `lib/content/`. No exceptions, even for placeholder text.
- **Google Fonts via `<link>` tag:** Blocks rendering, leaks user IP to Google, causes FOUT. Always use `next/font/google`.
- **Dark background applied only via Tailwind class on mount:** Creates FOUC. Must use inline blocking script in `<head>`.
- **No `suppressHydrationWarning` on `<html>`:** Causes React hydration warning from the FOUC script.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading with zero CLS | Custom font loading logic | `next/font/google` built-in | Handles self-hosting, preloading, FOUT prevention; hand-rolling misses these |
| FOUC prevention | Elaborate JS theme provider | Inline blocking `<script>` in `<head>` | The only reliable approach in App Router; theme providers run after hydration |
| Scroll detection for header | Polling or complex hooks | `window.addEventListener('scroll', ..., { passive: true })` in useEffect | Passive listeners are non-blocking; this is the correct 5-line implementation |
| Body scroll lock | Complex scroll position math | `document.body.style.overflow = 'hidden'` | Works in all modern browsers; CSS-only alternatives fail on iOS Safari |
| TypeScript content parity enforcement | Runtime validation | `export const en: SiteContent` type annotation | Compile-time enforcement is faster and catches errors before runtime |

**Key insight:** Phase 1 infrastructure is well-understood — the patterns are 5-10 lines each. The value is in using them correctly (FOUC script, passive scroll, suppressHydrationWarning) rather than inventing alternatives.

---

## Common Pitfalls

### Pitfall 1: Dark Theme Flash of Unstyled Content (FOUC)

**What goes wrong:** Page renders with white/light background for a split second before JavaScript applies dark theme.

**Why it happens:** Any theme state managed by React reads localStorage only on the client, after SSR. SSR output has no theme class on `<html>`.

**How to avoid:**
1. Add `document.documentElement.style.backgroundColor='#0A0A0A'` as an inline `<script>` in `<head>` — this runs synchronously before first paint.
2. Set `background-color: #0A0A0A` on `html` in `globals.css` as a CSS fallback layer.
3. Add `suppressHydrationWarning` to `<html>` element.
4. Do NOT use `useEffect` for theme application — it fires after paint.

**Warning signs:** White flash visible on refresh with dark monitor; React console: "Prop className did not match"

**Confidence:** HIGH [CITED: PITFALLS.md Pitfall 1]

---

### Pitfall 2: `'use client'` Too High — Kills SSR

**What goes wrong:** Adding `'use client'` to `app/layout.tsx` or `app/page.tsx` because LocaleContext requires it. This opts the entire page out of SSR.

**Why it happens:** The error "useContext can only be used in Client Components" leads developers to mark the wrong file.

**How to avoid:**
- `app/layout.tsx` stays a Server Component
- `LocaleProvider` is extracted as a separate `'use client'` component
- Pass `{children}` as props through `LocaleProvider` — children remain Server Components

```tsx
// CORRECT: layout.tsx is Server, LocaleProvider is Client
// app/layout.tsx (Server Component)
import { LocaleProvider } from '@/context/LocaleContext'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
```

**Warning signs:** `curl localhost:3000` returns empty HTML; "View Page Source" shows no text content

**Confidence:** HIGH [CITED: PITFALLS.md Pitfall 5 + ARCHITECTURE.md Component Boundaries]

---

### Pitfall 3: Content Files Missing Phase 2-4 Strings

**What goes wrong:** Phase 1 creates content files with only nav and footer strings. Phase 2 implementors add inline strings in section components because "the content file doesn't have them yet."

**Why it happens:** D-08 is easy to defer; "I'll add it when I build that section" becomes technical debt that propagates everywhere.

**How to avoid:** Phase 1 must create the full content schema for ALL sections — hero, about, services, portfolio, testimonials, process, contact — even if the values are placeholder text. The planner should treat this as a hard deliverable, not a nice-to-have.

**Warning signs:** Any JSX file in Phase 2+ with a string literal that's visible to the user

**Confidence:** HIGH [CITED: 01-CONTEXT.md D-08]

---

### Pitfall 4: Google Fonts via `<link>` Tag Instead of `next/font`

**What goes wrong:** Fonts loaded via `<link rel="stylesheet">` block rendering, cause CLS when fonts load late, and make requests to Google's servers at runtime.

**How to avoid:** Only use `next/font/google`. No `<link>` tags for fonts. No `@import` in CSS.

**Warning signs:** Chrome Network tab shows requests to `fonts.gstatic.com` after page loads; Lighthouse flags render-blocking resources

**Confidence:** HIGH [CITED: PITFALLS.md Pitfall 8]

---

### Pitfall 5: Tailwind v4 Syntax Differences from v3

**What goes wrong:** Using Tailwind v3 config patterns (`tailwind.config.ts` with `theme.extend.colors`) with a v4 installation. v4 ignores the config file for most settings.

**Why it happens:** Most documentation and AI training data reference Tailwind v3. v4 (now at 4.2.2) uses a fundamentally different CSS-first configuration approach.

**How to avoid:**
- Register custom colors in `globals.css` inside an `@theme {}` block, not in a JS config file
- Replace `@tailwind base; @tailwind components; @tailwind utilities;` with `@import "tailwindcss";`
- Custom color classes (`bg-accent`, `text-accent`) are generated automatically from `@theme` variables

**Warning signs:** Custom colors like `bg-[#00FFFF]` work but `bg-accent` does not resolve; Tailwind config changes have no effect

**Confidence:** MEDIUM [ASSUMED — Tailwind v4 CSS-native config; not re-verified against v4.2.2 docs in this session]

---

### Pitfall 6: Mobile Menu — Background Scroll Not Locked

**What goes wrong:** Mobile overlay menu opens but underlying page scrolls behind it, especially on iOS Safari where fixed-position overlays don't block scroll propagation.

**How to avoid:** `document.body.style.overflow = 'hidden'` when menu opens; `''` when it closes. Always in a `useEffect` with cleanup.

**Confidence:** HIGH [CITED: PITFALLS.md Pitfall 10]

---

### Pitfall 7: Missing `lang` Attribute Update on Language Toggle

**What goes wrong:** `<html lang="pt-BR">` is set statically in layout.tsx but never updated when user toggles to English. Screen readers and search engines see wrong language.

**How to avoid:** In `LocaleContext.tsx`, add:
```tsx
useEffect(() => {
  document.documentElement.setAttribute('lang', locale === 'pt-BR' ? 'pt-BR' : 'en')
}, [locale])
```

**Confidence:** HIGH [CITED: PITFALLS.md Pitfall 14]

---

## Code Examples

### FOUC Prevention Script

```tsx
// app/layout.tsx
// Source: PITFALLS.md Pitfall 1 — documented Next.js App Router pattern

<html lang="pt-BR" suppressHydrationWarning>
  <head>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            document.documentElement.style.backgroundColor = '#0A0A0A';
            var stored = localStorage.getItem('locale');
            if (stored === 'en' || stored === 'pt-BR') {
              document.documentElement.setAttribute('lang', stored === 'en' ? 'en' : 'pt-BR');
            }
          })();
        `,
      }}
    />
  </head>
  <body className={`${spaceGrotesk.variable} ${inter.variable} bg-background text-text-primary`}>
    <LocaleProvider>
      {children}
    </LocaleProvider>
  </body>
</html>
```

> The IIFE also initializes `lang` from localStorage — this means the lang attribute is correct before hydration if the user has previously set a preference. [ASSUMED]

### Tailwind v4 Design System Registration

```css
/* app/globals.css */
/* Source: Tailwind v4 CSS-native configuration pattern */
@import "tailwindcss";

@theme {
  /* Brand palette — D-14 through D-17 */
  --color-background: #0A0A0A;
  --color-surface: #111111;
  --color-accent: #00FFFF;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #E0E0E0;

  /* Typography — D-01 through D-03 */
  --font-heading: var(--font-space-grotesk), system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, sans-serif;

  /* Spacing — Tailwind defaults unless specific need arises */
}

/* CSS fallback for FOUC prevention */
html {
  background-color: #0A0A0A;
  color: #FFFFFF;
}

body {
  font-family: var(--font-body);
  background-color: #0A0A0A;
}
```

### Header Sticky + Scroll Blur

```tsx
// components/layout/Header.tsx
'use client'
// Source: Standard Next.js sticky header pattern [ASSUMED]

import { useState, useEffect } from 'react'
import { useLocale } from '@/context/LocaleContext'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, content, toggleLocale } = useLocale()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`
      sticky top-0 z-50 w-full transition-all duration-300
      ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-surface' : 'bg-transparent'}
    `}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo — D-09 */}
        <span className="font-heading font-bold text-xl text-text-primary">
          Riegos <span className="text-accent">Dev</span>
        </span>

        {/* Desktop nav — D-10 */}
        <nav className="hidden md:flex items-center gap-6">
          {Object.entries(content.nav.links).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="text-text-secondary hover:text-accent transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* Toggle + hamburger — D-11, D-12 */}
        <div className="flex items-center gap-4">
          <button onClick={toggleLocale} className="text-text-secondary hover:text-accent text-sm font-medium">
            {content.nav.langToggle}
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* 3-line hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile overlay — D-12 */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          {/* Nav links + toggle */}
        </div>
      )}
    </header>
  )
}
```

### Footer Shell

```tsx
// components/layout/Footer.tsx
// Source: REQUIREMENTS.md FOOT-01, FOOT-02
// Footer is a Server Component — no 'use client' needed if it reads from context via a wrapper

import { useLocale } from '@/context/LocaleContext'

// NOTE: Footer needs useLocale (Client hook) → must be 'use client'
// Alternative: pass content as props from a Server Component parent
'use client'

export function Footer() {
  const { content } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-surface mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo */}
          <div>
            <span className="font-heading font-bold text-xl text-text-primary">
              Riegos <span className="text-accent">Dev</span>
            </span>
            <p className="mt-2 text-text-secondary text-sm">{content.footer.tagline}</p>
          </div>

          {/* Quick links */}
          <nav className="flex gap-6 flex-wrap">
            {Object.entries(content.nav.links).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-text-secondary hover:text-accent text-sm">
                {label}
              </a>
            ))}
          </nav>

          {/* Social placeholders — FOOT-02 */}
          <div className="flex gap-4">
            <a href="#" aria-label={content.footer.social.instagram} className="text-text-secondary hover:text-accent">
              {/* Instagram icon placeholder */}
            </a>
            <a href="#" aria-label={content.footer.social.linkedin} className="text-text-secondary hover:text-accent">
              {/* LinkedIn icon placeholder */}
            </a>
            <a href="#" aria-label={content.footer.social.github} className="text-text-secondary hover:text-accent">
              {/* GitHub icon placeholder */}
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-text-secondary text-xs">
          © {year} Riegos Dev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `@tailwind base; @tailwind components; @tailwind utilities;` in CSS | `@import "tailwindcss";` | Tailwind v4 (Feb 2025) | Simpler; don't add old directives |
| `tailwind.config.ts` for custom colors | `@theme {}` block in CSS | Tailwind v4 (Feb 2025) | JS config file no longer needed for token definition |
| `import { motion } from 'framer-motion'` | `import { m } from 'motion'` with `LazyMotion` | Framer Motion v11 (2024) — package renamed to `motion` | Bundle size reduction; use `<m.div>` not `<motion.div>` |
| `framer-motion` package name | `motion` package name | v11 rename | Install `motion`, not `framer-motion` |
| `next-intl` with `[locale]` path segments | Pure React Context + localStorage | Decision D-04 (this project) | No URL change on toggle; simpler for SPA |

**Deprecated/outdated:**
- `@tailwind` directives: Replaced by `@import "tailwindcss"` in v4
- `tailwind.config.js` color customization: Use `@theme {}` in v4
- `framer-motion` npm package name: Now `motion` (12.38.0 on npm)
- `@studio-freight/lenis`: Rebranded to `lenis` (1.3.21 on npm)
- `react-particles` / `react-tsparticles`: Deprecated, use `@tsparticles/react` (3.0.0 on npm)

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `suppressHydrationWarning` on `<html>` prevents React warning from FOUC inline script | Pattern 1 (FOUC) | Low — well-documented Next.js pattern; worst case is a console warning |
| A2 | Tailwind v4 `@theme {}` syntax is correct for registering custom colors | Pattern 3, Pitfall 5 | Medium — if v4.2.2 changed the syntax, custom colors won't resolve; fallback is arbitrary values like `bg-[#00FFFF]` |
| A3 | `@import "tailwindcss"` replaces the three `@tailwind` directives | Pattern 3 | Medium — same risk as A2; styles would not load if wrong |
| A4 | next/font API (`variable`, `weight`, `subsets`) is unchanged in Next.js 16 | Pattern 2 | Low — font API has been stable since Next.js 13; extremely unlikely to have changed |
| A5 | React Context + localStorage pattern causes no hydration mismatch (initial state = 'pt-BR' matches server) | Pattern 4 | Low — standard React pattern; the initial state matches what SSR renders |
| A6 | `motion` package (12.38.0) uses `LazyMotion` + `m.*` API for bundle optimization | State of the Art | Medium — verify import path before Phase 2 when motion is first installed |

---

## Open Questions

1. **Tailwind v4 — exact @theme syntax for current version (4.2.2)**
   - What we know: v4 uses CSS-native configuration and @theme blocks [ASSUMED from training data]
   - What's unclear: Whether the exact syntax has changed between v4 release and 4.2.2
   - Recommendation: At scaffold time, check the Tailwind v4 migration guide at tailwindcss.com before writing globals.css. Takes 5 minutes and eliminates uncertainty.

2. **Next.js 16 — any breaking changes from 15 that affect App Router patterns?**
   - What we know: Next.js is at 16.2.2 (verified npm); earlier research assumed 15.x
   - What's unclear: Whether any App Router, next/font, or next/dynamic APIs changed in 16
   - Recommendation: Run `npx create-next-app@latest` and inspect the generated files — the scaffold itself documents the current conventions. Check the Next.js 16 release notes before implementing custom patterns.

3. **Footer as Server vs Client Component**
   - What we know: Footer reads from LocaleContext (Client hook `useLocale`) — this forces it to be `'use client'`
   - What's unclear: Whether this is acceptable or if footer content should be passed as props from a Server Component to keep Footer server-rendered
   - Recommendation: Accept Footer as `'use client'` for Phase 1 — it contains no text content relevant to SEO (nav links, tagline, copyright) and the bundle cost is negligible. Mark for revisit in Phase 4 SEO polish if needed.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | create-next-app, npm | Yes | v24.11.1 | — |
| npm | Package installation | Yes | 11.6.2 | — |
| create-next-app (npx) | Project scaffold | Yes | 16.2.2 | — |
| Git | Version control | Yes | (confirmed — git repo exists) | — |

**No missing dependencies.** All tools required for Phase 1 scaffold are available on the machine.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None currently — Wave 0 must establish it |
| Config file | None — create `jest.config.ts` or use Next.js built-in test runner |
| Quick run command | `npm test -- --watchAll=false` (after setup) |
| Full suite command | `npm test` |

> Phase 1 is a greenfield scaffold. No test infrastructure exists yet. Wave 0 should create the minimal test setup. For Phase 1, most deliverables are visual/structural and better validated by browser verification than unit tests. Integration-style smoke tests checking DOM structure are appropriate.

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DSGN-01 | Dark background (#0A0A0A) present in HTML before hydration | Smoke | `curl localhost:3000 \| grep 0A0A0A` | No — Wave 0 |
| DSGN-02 | Space Grotesk and Inter font variables present in body | Smoke | `curl localhost:3000 \| grep font-space-grotesk` | No — Wave 0 |
| I18N-01 | PT-BR and EN content files export correct shape | Unit | `npx tsc --noEmit` (type check) | No — Wave 0 |
| I18N-01 | LocaleContext toggles language without page reload | Manual | Browser toggle + observe content change | Manual only |
| NAV-01 | Header has `position: sticky` or equivalent | Smoke | Browser DevTools inspection | Manual only |
| NAV-01 | Header anchor links resolve to section IDs | Smoke | `curl localhost:3000 \| grep 'href="#sobre"'` | No — Wave 0 |
| FOOT-01 | Footer renders logo, links, tagline, copyright | Smoke | `curl localhost:3000 \| grep 'Riegos Dev'` | No — Wave 0 |
| FOOT-02 | Social placeholder links present in footer | Smoke | `curl localhost:3000 \| grep 'aria-label'` | No — Wave 0 |

### Sampling Rate

- **Per task commit:** `npx tsc --noEmit` (compile check — zero config needed)
- **Per wave merge:** `curl localhost:3000 | grep` smoke checks + `npx tsc --noEmit`
- **Phase gate:** All curl smoke checks pass + TypeScript compiles clean + visual browser inspection confirms dark theme, sticky header, footer visible

### Wave 0 Gaps

- [ ] Test runner setup (Jest or Vitest) — optional for Phase 1; type checking + smoke are sufficient
- [ ] `tests/smoke/phase1.sh` — shell script running curl checks (simple, no test framework needed)

*(Primary validation for Phase 1 is `npx tsc --noEmit` + browser visual inspection + curl smoke checks — no heavy test framework needed for structural scaffold)*

---

## Sources

### Primary (HIGH confidence)
- npm registry (2026-04-02) — verified versions: next@16.2.2, tailwindcss@4.2.2, typescript@6.0.2, motion@12.38.0, @tsparticles/react@3.0.0, lenis@1.3.21, react-type-animation@3.2.0, next-intl@4.9.0 [VERIFIED: npm registry]
- `.planning/research/PITFALLS.md` — Pitfalls 1, 3, 5, 8, 10, 14 (HIGH confidence per file's own confidence rating)
- `.planning/research/ARCHITECTURE.md` — Component boundaries, folder structure, data flow patterns (HIGH confidence per file)
- `.planning/research/STACK.md` — Stack rationale and alternatives (HIGH/MEDIUM per file)
- `.planning/phases/01-foundation/01-CONTEXT.md` — All locked decisions D-01 through D-18

### Secondary (MEDIUM confidence)
- Tailwind v4 CSS-native configuration: Pattern confirmed from training data (Feb 2025 release); exact syntax not re-fetched from docs [ASSUMED]
- next/font API: Confirmed stable pattern from Next.js 13-15 documentation; assumed unchanged in 16 [ASSUMED]

### Tertiary (LOW confidence)
- None — all claims are either npm-verified, cited from project research files, or explicitly tagged ASSUMED

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — npm registry confirmed all versions on 2026-04-02
- Architecture: HIGH — sourced from project ARCHITECTURE.md (itself sourced from official Next.js docs)
- Pitfalls: HIGH — sourced from project PITFALLS.md (documented production failure modes)
- Tailwind v4 config syntax: MEDIUM — training data, not re-verified from tailwindcss.com in this session

**Research date:** 2026-04-02
**Valid until:** 30 days (stable ecosystem — Next.js, Tailwind, TypeScript patch versions may increment but patterns remain stable)

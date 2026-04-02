# Technology Stack

**Project:** Riegos Dev — Bilingual Portfolio/Agency Site
**Researched:** 2026-04-02
**Confidence note:** Next.js 15 confirmed via official blog post (Oct 2024). All other versions are from training data (cutoff Aug 2025) — treat as MEDIUM confidence and pin with `@latest` at scaffold time, then lock exact versions.

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 15.x | App framework | Confirmed stable (Oct 2024). App Router + React 19, Turbopack dev, built-in image optimization, SSG for SEO, TypeScript config support. Static export works cleanly for Vercel/Netlify CDN deploy as required by project constraints. |
| React | 19.x | UI runtime | Ships with Next.js 15 App Router by default. New `use()` hook, improved hydration errors, React Compiler (experimental). |
| TypeScript | 5.x | Type safety | `next.config.ts` is now a first-class citizen in Next.js 15. Eliminates whole classes of runtime bugs in i18n routing and animation props. |

### Styling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Tailwind CSS | 4.x | Utility CSS | v4 rewrote the engine (Oxide/Rust-based, no config file needed for basic use). Dark mode via `dark:` variants without a JS theme provider. CSS variables for the `#00FFFF` cyan accent. Zero runtime, purged at build. If v4 causes friction, pin 3.4.x — identical DX for this scope. |
| CSS Modules | built-in | Particle canvas + complex keyframe scoping | For the hero particle canvas and any CSS keyframe animations that Tailwind doesn't model well. Not a replacement for Tailwind, used alongside for exceptional cases. |

**Do NOT use:** styled-components, Emotion, or any CSS-in-JS with a runtime. They add JS bundle weight, complicate SSR hydration, and are unnecessary when Tailwind covers 95% of the design system.

### Animations

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Framer Motion | 11.x (package: `motion`) | Scroll animations, card entrance, section fades, carousel | The de-facto standard for React animation. Declarative API with `whileInView`, `initial`/`animate` — perfect for fade-in-on-scroll for services cards, portfolio cards, timeline. `AnimatePresence` handles language toggle transitions. Ships tree-shakeable. |
| tsParticles (`@tsparticles/react` + `@tsparticles/slim`) | 3.x | Hero particle background | The canonical React-compatible particle library. `slim` preset keeps bundle small — avoids shipping all physics engines. Must be loaded `dynamic()` with `ssr: false` (canvas API). |
| `react-type-animation` | 3.x | Typewriter effect in hero | Lightweight, pure CSS-driven fallback-friendly typewriter. Simpler API than `typewriter-effect` and actively maintained as of 2024. Zero dependencies. |
| Lenis | 1.x | Smooth scroll | Best-in-class smooth scroll that replaces `scroll-behavior: smooth`. Plays well with Framer Motion scroll-linked animations. Replaces the deprecated `@studio-freight/lenis` (same library, rebranded). |

**Alternatives considered and rejected:**

| Category | Rejected | Reason |
|----------|----------|--------|
| Animations | GSAP | License cost for commercial use; much heavier API surface for what is needed here |
| Animations | AOS (Animate on Scroll) | jQuery-era library; no React primitives; Framer Motion's `whileInView` does the same with better DX |
| Animations | Anime.js | Solid library but imperative API; more friction in React component model than Framer Motion |
| Particles | `react-particles` (old) | Deprecated. The ecosystem migrated to `@tsparticles/react` |
| Smooth scroll | `react-scroll` | Provides anchor-click scrolling only; no smooth momentum physics; use Lenis instead |

### Internationalisation (i18n)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `next-intl` | 3.x | PT-BR/EN toggle, message keys, URL-based locale routing | Best-in-class for Next.js 15 App Router. First-party Vercel sponsorship. Supports `[locale]` path prefix (`/pt` vs `/en`) or cookie-based detection. Ships TypeScript-first message types. Actively maintained and documents Next.js 15 specifically. |

**Alternative considered:** `next-i18next` — designed for Pages Router, awkward in App Router, lower community momentum in 2024-2025. Do not use.

**Architecture note for this project:** Because the toggle is a UI element (not a URL change), implement locale as a React context wrapping `next-intl`'s `NextIntlClientProvider`. Users toggle language without navigating — the URL can stay at `/` with locale stored in `localStorage` + a cookie for SSG. This avoids the complexity of `[locale]` routing while keeping content translatable.

### Fonts

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `next/font` (built-in) | built-in | Inter or Space Grotesk | Zero layout shift, self-hosted from Google Fonts CDN with privacy compliance. PROJECT.md specifies these two fonts. Recommend **Space Grotesk** as primary (tech identity matches brand positioning) with Inter as fallback/body. |

**Do NOT use:** `@import` in CSS for Google Fonts. It blocks rendering and leaks user IPs to Google servers. Always use `next/font/google`.

### Performance

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `next/image` | built-in | Profile photo, project screenshots | Automatic WebP/AVIF conversion, lazy loading, aspect-ratio reservation. Eliminates CLS. |
| `next/dynamic` | built-in | Particle canvas, heavy carousel components | Defers JS to after paint. Particle canvas MUST use `{ ssr: false }` — it depends on `window`. |

### SEO

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js Metadata API | built-in | Title, description, OG tags | Built into Next.js 15 App Router via `generateMetadata`. No extra library needed. Handles bilingual metadata by locale. |
| `next-sitemap` | 4.x | sitemap.xml + robots.txt | Simple config-driven generation. Run as a `postbuild` script. Alternatively use Next.js 15's built-in `sitemap.ts` file convention — that is now preferred and removes the dependency entirely. |

**Recommendation:** Use the built-in `sitemap.ts` approach (Next.js 15 native). Drop `next-sitemap` as a dependency.

### Deployment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | — | Hosting | Zero-config Next.js deploy. CDN edge network. Preview deployments per push. Free tier covers this use case. PROJECT.md calls this out. |

**Alternative:** Netlify — also zero-config for Next.js static exports. Both work. Vercel is preferred because it is made by the same team as Next.js.

---

## Full Installation Command

```bash
# Create project
npx create-next-app@latest riegosdev-site \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# i18n
npm install next-intl

# Animations
npm install motion
npm install @tsparticles/react @tsparticles/slim
npm install react-type-animation
npm install lenis

# Fonts (zero-config via next/font — no install needed)

# Dev tools
npm install -D @types/node
```

**Version pinning note:** Run the above, then inspect `package.json` and lock the exact versions in `package-lock.json`. Do not pin manually in `package.json` — let npm resolve the latest compatible set and then freeze.

---

## Alternatives Considered (Full Summary)

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Next.js 15 | Astro, Remix | Next.js is explicitly required by PROJECT.md; Astro would be lighter but lacks SSR flexibility for future v2 features |
| CSS | Tailwind 4 | Tailwind 3.4 | v4 is leaner (no config file, faster build); pin 3.4 if v4 produces friction |
| CSS | Tailwind | styled-components | Runtime CSS-in-JS adds bundle weight with no benefit for this project |
| Animation | Framer Motion 11 | GSAP | GSAP requires commercial license; overkill for scroll fades and card entrances |
| Particles | @tsparticles/slim | canvas-confetti, custom canvas | tsParticles is purpose-built, configurable via JSON, no custom canvas code needed |
| i18n | next-intl | next-i18next, react-i18next | next-intl is purpose-built for App Router; others require workarounds |
| Smooth scroll | Lenis | native CSS scroll-behavior | CSS smooth scroll has no easing control; Lenis integrates with Framer Motion velocity |
| Typewriter | react-type-animation | typewriter-effect | typewriter-effect is heavier and less maintained; react-type-animation is purpose-built for React |
| Hosting | Vercel | Netlify, Cloudflare Pages | Vercel is made by Next.js team; zero additional config |

---

## Confidence Assessment

| Library | Confidence | Basis |
|---------|------------|-------|
| Next.js 15 | HIGH | Confirmed via official Next.js blog post (Oct 2024) |
| React 19 | HIGH | Confirmed same source — ships with Next.js 15 App Router |
| Tailwind CSS 4 | MEDIUM | Training data (stable release Feb 2025 per knowledge cutoff) — verify at scaffold time |
| Framer Motion 11 | MEDIUM | Training data — package renamed from `framer-motion` to `motion` in v11; confirm on npmjs.com before install |
| next-intl 3 | MEDIUM | Training data — actively maintained with Next.js 15 docs as of Aug 2025 |
| @tsparticles/react 3 | MEDIUM | Training data — migration from `react-tsparticles` happened in 2023; confirm slim bundle still exists |
| react-type-animation 3 | MEDIUM | Training data — 3.x stable as of Aug 2025 |
| Lenis 1 | MEDIUM | Training data — rebranded from `@studio-freight/lenis` in 2024 |
| TypeScript 5 | HIGH | Ships with create-next-app by default |

---

## Sources

- Next.js 15 official release blog: https://nextjs.org/blog/next-15 (Oct 21, 2024) — HIGH confidence
- Framer Motion v11 changelog: https://www.framer.com/motion/ — not fetched (access blocked); use training data at MEDIUM confidence
- All other sources: training data through Aug 2025 — verify at implementation time

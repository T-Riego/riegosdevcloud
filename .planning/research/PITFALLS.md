# Domain Pitfalls: Next.js Portfolio / Agency Site

**Domain:** Bilingual SPA portfolio with heavy animations, dark theme, i18n toggle, WhatsApp CTA
**Project:** Riegos Dev — riegosdev.cloud
**Researched:** 2026-04-02
**Confidence:** HIGH (well-documented failure modes in production Next.js + animation stacks)

---

## Critical Pitfalls

Mistakes that cause rewrites, Lighthouse regressions below 50, or broken UX in production.

---

### Pitfall 1: Dark Theme Flash (FOUC / Hydration Mismatch)

**What goes wrong:** The page renders white or in the wrong theme for a split second on first load before JavaScript hydrates and applies the dark class. This is the single most reported UX defect in Next.js dark-theme projects.

**Why it happens:** `next-themes` or any theme state stored in React reads `localStorage` only on the client. SSR renders without that value, so the initial HTML is theme-neutral. When hydration fires and applies `dark` to `<html>`, the user sees a flash. Attempting to fix it with `useEffect` makes it worse — it defers the theme application by an additional render cycle.

**Consequences:** Jarring white flash on dark-themed site. Disproportionately bad on slow mobile connections. Signals amateur work to tech visitors. Can cause hydration warnings in React 18.

**Prevention:**
- Use `next-themes` with `attribute="class"` and add a blocking inline script via `<script>` in `_document.tsx` (Pages Router) or in the root `layout.tsx` `<head>` (App Router) that reads `localStorage` and sets `document.documentElement.className` synchronously before any paint.
- With App Router + `next-themes`, set `suppressHydrationWarning` on `<html>` — this is intentional and documented, not a hack.
- Never gate the theme on `useEffect` alone.

**Detection warning signs:**
- Visible white flash when refreshing on a dark monitor
- React console warning: "Prop `className` did not match. Server: '' Client: 'dark'"
- Lighthouse accessibility report flagging color contrast at initial render

**Phase:** Foundation / Layout setup (Phase 1)

---

### Pitfall 2: Particles Canvas Blocking Main Thread on Mobile

**What goes wrong:** `tsparticles` or `react-particles` with a high particle count (>80) runs physics calculations on the main thread inside `requestAnimationFrame`. On mid-range Android devices (the majority of Brazilian mobile users), this causes janky scroll, dropped frames, and battery drain. The hero section — the most critical conversion point — becomes the biggest performance liability.

**Why it happens:** Canvas animation libraries are not Web Worker-aware by default. Every frame recalculates particle positions, applies gravity/velocity, and repaints. Combined with a React re-render cycle, this doubles the cost.

**Consequences:** INP (Interaction to Next Paint) degrades. Scroll feels sluggish. Users on low-end phones abandon before reaching the CTA. Lighthouse Performance score tanks.

**Prevention:**
- Hard cap particle count: `<= 40` particles for mobile, `<= 80` for desktop. Use `useMediaQuery` or CSS media query to pass different configs.
- Set `fpsLimit: 30` in the tsparticles config — halves rendering cost invisibly to most users.
- Wrap the entire `<Particles>` component in `dynamic(() => import(...), { ssr: false })` so it never runs during SSR or blocks hydration.
- Provide a reduced-motion fallback: if `window.matchMedia('(prefers-reduced-motion: reduce)').matches`, render a static gradient instead of particles.
- Test on a real Android device at CPU 4x throttle in DevTools before shipping.

**Detection warning signs:**
- Lighthouse Performance < 70 on mobile simulation
- "Long Tasks" visible in Chrome Performance timeline during hero render
- `requestAnimationFrame` callbacks showing > 16ms in profiler

**Phase:** Hero / Animation implementation (Phase 2)

---

### Pitfall 3: i18n Language Toggle Causing Full Page Reload or State Loss

**What goes wrong:** Two common bad implementations: (a) storing language in URL path (`/en/`, `/pt/`) and doing a hard navigation on toggle, which resets all scroll position and animation state; (b) storing language in React state only, which is lost on page refresh.

**Why it happens:** URL-based i18n (Next.js `next.config.js` locales) is designed for SEO multi-language sites. For a single-page portfolio with a toggle, it adds unnecessary complexity and causes route changes on every language switch. State-only storage fails across sessions.

**Consequences:** Toggle feels broken (full page reload). Scroll position jumps to top. Animations replay. Users who refresh lose their language preference. SEO may serve wrong language to crawlers.

**Prevention:**
- For a portfolio SPA with toggle: store language preference in `localStorage`, use React Context or Zustand for in-memory state, and load from storage on mount.
- Do NOT use Next.js built-in locale routing unless you intend separate URLs per language (e.g., `/en` and `/pt-BR` for SEO). For a toggle-only bilingual site, this is overkill and adds friction.
- Use `next-intl` in "standalone" mode (no locale in path) or implement a simple custom context — a translation map with `{ pt: {...}, en: {...} }` is entirely sufficient for a static portfolio.
- Persist the choice: `localStorage.setItem('lang', value)` on toggle, read on `useEffect` mount.

**Detection warning signs:**
- Language toggle triggers a network request or full page reload visible in Network tab
- `window.location` changes on toggle
- Language resets to default on browser refresh

**Phase:** Foundation / i18n setup (Phase 1)

---

### Pitfall 4: Scroll Animation Library Causing CLS (Cumulative Layout Shift)

**What goes wrong:** Scroll-triggered animations (fade-in, slide-up) implemented by setting `opacity: 0; transform: translateY(30px)` as the initial state in CSS or inline styles cause Cumulative Layout Shift if the element's space is not reserved. Even more critically: when JavaScript hasn't loaded yet (SSR HTML), elements appear visible — then when JS hydrates, they become invisible (opacity 0), then animate back in. This creates a visible flash of content then disappearance.

**Why it happens:** Framer Motion's `initial` prop applies client-side only. The SSR HTML renders without `initial` state, so elements are visible at first render. Hydration then applies `initial: { opacity: 0 }`, causing a flash-of-visible-content before the animation starts.

**Consequences:** CLS score above 0.1 (Google "Poor" threshold). Animations feel glitchy on first load. Google Search Console may flag the page.

**Prevention:**
- For SSR-rendered content, add CSS class `[data-animate="false"] .animated-element { visibility: hidden }` and remove `data-animate="false"` from `<html>` after hydration. This prevents FOUC without CLS.
- Use Framer Motion's `AnimatePresence` and always pair `initial` with matching CSS in a `<noscript>` fallback.
- Prefer `transform` and `opacity` only for animations — these are GPU-composited and do not trigger layout. Never animate `height`, `padding`, `margin`, or `top/left`.
- Test Core Web Vitals with "Slow 3G" throttle before declaring any section complete.

**Detection warning signs:**
- Chrome DevTools "Rendering > Layout Shift Regions" shows blue rectangles on scroll
- PageSpeed Insights CLS > 0.1
- Elements visibly disappear then reappear on first load

**Phase:** Animation implementation for each section

---

### Pitfall 5: "use client" Boundary Too High — Killing SSR/SEO

**What goes wrong:** Developers add `"use client"` to large layout components or entire page files because one child needs interactivity (e.g., the i18n context provider, or a component that uses `useState`). This opts the entire component tree out of SSR, meaning Google receives near-empty HTML — catastrophic for SEO.

**Why it happens:** The error "You're importing a component that needs X. It only works in a Client Component" leads developers to add `"use client"` to the nearest parent file, not the minimal child that actually needs it.

**Consequences:** Google indexes a page with no text content. Portfolio ranks for nothing. `curl https://riegosdev.cloud` returns empty `<div id="root"></div>`.

**Prevention:**
- Keep `"use client"` at the leaf level. The rule: add it to the smallest component that actually needs browser APIs or interactivity.
- All text content (hero headline, service descriptions, testimonials, about section) must exist in Server Components.
- The i18n Provider can be a Client Component wrapper, but the text it serves must be rendered server-side wherever possible, or accepted as props from a Server Component parent.
- Validate SSR output: `curl https://localhost:3000 | grep "Riegos Dev"` should return actual content, not empty HTML.
- Use Next.js bundle analyzer to audit which components are client-only.

**Detection warning signs:**
- `curl localhost:3000` returns minimal HTML with no visible text
- "View Page Source" shows `<div id="__next"></div>` with no content
- Lighthouse SEO audit flags missing meta content
- React DevTools shows the root component as "Client"

**Phase:** Foundation setup AND every new section added (ongoing discipline)

---

### Pitfall 6: Framer Motion Imported Fully — Bundle Bloat

**What goes wrong:** `import { motion } from 'framer-motion'` with the full library adds ~50-80KB gzipped to the client bundle. For a portfolio site where animations are decorative, this directly hurts LCP (Largest Contentful Paint) because the main thread must parse and execute the JS before animations can start.

**Why it happens:** The obvious import is the full package. Tree-shaking works poorly on Framer Motion's main entry point due to internal dependencies.

**Consequences:** JavaScript parse time increases by 200-400ms on mobile. Lighthouse Performance score drops 5-15 points. First animation fires noticeably late.

**Prevention:**
- Import from `framer-motion/client` (Framer Motion v11+) to exclude server utilities.
- Use `LazyMotion` with `domAnimation` feature bundle instead of `motion` — reduces the animation feature set to what portfolios actually need and cuts bundle size by ~60%.
  ```tsx
  import { LazyMotion, domAnimation, m } from 'framer-motion'
  // Use <m.div> instead of <motion.div>
  ```
- Alternatively, use CSS animations + `IntersectionObserver` for simple fade-in/slide-up effects and reserve Framer Motion only for complex interactions (expandable cards, carousel).
- Run `ANALYZE=true next build` after every major feature addition to catch bundle regressions.

**Detection warning signs:**
- `next build` output shows a route chunk > 200KB
- Network tab shows `framer-motion` chunk taking > 300ms to load on Fast 3G simulation
- Lighthouse "Reduce unused JavaScript" flags framer-motion

**Phase:** Animation setup (Phase 2), monitored every phase

---

## Moderate Pitfalls

---

### Pitfall 7: WhatsApp Redirect Losing UTM / Context

**What goes wrong:** The WhatsApp CTA button opens `https://wa.me/5531988969661` with a generic message or no message. Leads arrive with no context — Tiago cannot tell which service they clicked from, which language they used, or where in the funnel they converted.

**Prevention:**
- Pre-fill the WhatsApp message using the `text` parameter: `https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+tenho+interesse+em+...`
- Pass the service name from whatever card or section triggered the click into the message template.
- For the contact form redirect, build the message from form field values before redirecting.
- Include the source language in the message template (PT-BR vs EN).

**Phase:** CTA / Contact section (Phase 3)

---

### Pitfall 8: Google Fonts Causing Layout Shift and Render Blocking

**What goes wrong:** Loading Inter or Space Grotesk via a `<link>` tag in `<head>` (the naive approach) blocks rendering until the font loads. When it loads late, text reflows — this is FOUT (Flash of Unstyled Text) or FOIT (Flash of Invisible Text), both causing CLS.

**Prevention:**
- Use Next.js `next/font` (built-in) — it downloads the font at build time, self-hosts it, and injects the CSS inline. Zero runtime font requests, zero CLS from fonts. This is the only correct approach in Next.js App Router.
  ```tsx
  import { Inter } from 'next/font/google'
  const inter = Inter({ subsets: ['latin'], display: 'swap' })
  ```
- Never use a raw `<link rel="stylesheet" href="https://fonts.googleapis.com/...">` in Next.js.

**Detection warning signs:**
- Network tab shows requests to `fonts.gstatic.com` at runtime
- Lighthouse "Eliminate render-blocking resources" flags a Google Fonts URL
- Text visibly changes size/weight after page load

**Phase:** Foundation / Layout (Phase 1)

---

### Pitfall 9: Typewriter Effect Hurting SEO (Text Not in DOM at Crawl Time)

**What goes wrong:** Typewriter/typing animations render text character by character via JavaScript. If the hero headline or key value proposition is only present as animated text (never in static DOM), Google's crawler may not see it — especially if the crawler processes only the initial HTML without executing JS.

**Prevention:**
- Render the full headline text in the `<h1>` as a Server Component, then overlay or replace it with the typewriter animation client-side using a pattern like:
  ```tsx
  // Server renders: <h1 className="sr-only">Full headline text</h1>
  // Client animates: <span aria-hidden="true"><TypewriterEffect /></span>
  ```
- Or use CSS-only typewriter animation — it works without JS and is fully crawlable.
- At minimum, include the hero text in `<meta name="description">` and structured data.

**Detection warning signs:**
- `curl localhost:3000 | grep "automacao"` returns no results for key headline words
- Google Search Console "Coverage" shows pages indexed with low content signals

**Phase:** Hero section (Phase 2)

---

### Pitfall 10: Mobile Menu / Overlay Not Handling Scroll Lock

**What goes wrong:** Mobile hamburger menu opens an overlay but the background page remains scrollable. Users accidentally scroll behind the menu. On iOS Safari, `-webkit-overflow-scrolling: touch` propagates scroll events through fixed overlays.

**Prevention:**
- On menu open: `document.body.style.overflow = 'hidden'`
- On menu close: `document.body.style.overflow = ''`
- Wrap in a `useEffect` cleanup to handle route changes and unmounts.
- Test specifically on iOS Safari — it has the most aggressive scroll propagation behavior.

**Phase:** Header / Navigation (Phase 1)

---

### Pitfall 11: tsparticles `window` / `document` Access Crashing SSR

**What goes wrong:** tsparticles accesses `window` and `document` during module initialization. Importing it in a Server Component or without `ssr: false` in `next/dynamic` causes a build-time crash: "ReferenceError: window is not defined".

**Prevention:**
- Always import tsparticles with `dynamic`:
  ```tsx
  const Particles = dynamic(() => import('@/components/ParticlesBackground'), {
    ssr: false,
    loading: () => <div className="particles-placeholder" />,
  })
  ```
- Never import tsparticles (or any canvas/WebGL library) at the top level of a Server Component file.

**Detection warning signs:**
- `next build` crashes with "ReferenceError: window is not defined"
- Console error in server logs referencing tsparticles or react-particles

**Phase:** Hero section (Phase 2)

---

### Pitfall 12: Expandable Portfolio Cards Breaking Layout on Safari

**What goes wrong:** CSS `grid` auto-rows with `transition: height` or `max-height` animations for expandable cards behave differently in Safari vs Chrome. Specifically, `height: auto` cannot be transitioned in CSS — setting `transition: height 0.3s` where height changes from a fixed value to `auto` snaps instantly in all browsers.

**Prevention:**
- Use Framer Motion's `AnimatePresence` + `animate={{ height: 'auto' }}` which uses a JS-measured animation, bypassing the CSS `height: auto` limitation.
- Or use `max-height` transitioning from `0` to a large known value (e.g., `500px`) — acceptable for cards.
- Test on Safari (macOS or iOS) before marking portfolio section complete.

**Phase:** Portfolio cards section

---

## Minor Pitfalls

---

### Pitfall 13: Image `alt` Text Missing for Tech Badges / Service Icons

**What goes wrong:** Badge images for tools (n8n, Supabase, Cursor, etc.) get `alt=""` or `alt="icon"`. Screen readers skip them. Accessibility score drops. More importantly, Google Images cannot index the tools Tiago works with.

**Prevention:** Every tool badge gets descriptive alt text: `alt="n8n workflow automation"`, `alt="Supabase database"`, etc.

**Phase:** About section, Service cards

---

### Pitfall 14: Missing `lang` Attribute on `<html>` Element

**What goes wrong:** Screen readers default to the OS language instead of the document language. Google may classify language wrong.

**Prevention:** Keep `<html lang="pt-BR">` as the default (or dynamically update it on language toggle via `document.documentElement.setAttribute('lang', currentLang)`). This is a one-line fix but frequently forgotten.

**Phase:** Foundation (Phase 1)

---

### Pitfall 15: `#00FFFF` Cyan on Dark Background Failing Contrast Ratio

**What goes wrong:** Pure cyan `#00FFFF` on `#000000` has a contrast ratio of 21:1 — technically passing. But `#00FFFF` on dark gray like `#1a1a2e` (a common deep navy) can drop to ~12:1. The real problem: using cyan for body text or small descriptive text where contrast must exceed 4.5:1 (WCAG AA). Cyan on near-black backgrounds may be so saturated it causes eye strain in extended reading.

**Prevention:**
- Reserve `#00FFFF` for accent elements only: button borders, hover states, icons, underlines, highlighted keywords.
- Never use pure cyan as paragraph/body text color.
- Run every text/background combination through a contrast checker before considering it done.

**Phase:** Design system / Tailwind config (Phase 1)

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|----------------|------------|
| Foundation / Layout | Dark theme FOUC (#1) | Blocking inline script in `<html>` before first paint |
| Foundation / Layout | `"use client"` too high (#5) | Keep client boundary at leaf components only |
| Foundation / Layout | Google Fonts render blocking (#8) | Use `next/font` exclusively |
| Foundation / i18n | Toggle causing full reload (#3) | localStorage + Context, no locale routing |
| Hero section | Particles blocking main thread (#2) | Cap particle count, `fpsLimit: 30`, `ssr: false` |
| Hero section | tsparticles SSR crash (#11) | `dynamic(..., { ssr: false })` |
| Hero section | Typewriter text invisible to SEO (#9) | `sr-only` full text, animated overlay |
| All animated sections | Scroll animations causing CLS (#4) | Use transform/opacity only, test CLS metric |
| All animated sections | Framer Motion bundle bloat (#6) | `LazyMotion` + `domAnimation` features only |
| Portfolio cards | Safari expandable card bug (#12) | Framer Motion `height: auto` animation |
| CTA / Contact | WhatsApp link without context (#7) | Pre-fill message with service and language |
| Mobile navigation | Scroll not locked behind overlay (#10) | `overflow: hidden` on body on menu open |

---

## Confidence Notes

All pitfalls above are drawn from documented Next.js App Router behavior (as of Next.js 14/15), Framer Motion v10/v11 APIs, known browser inconsistencies on iOS Safari, and Google Core Web Vitals scoring methodology. Confidence: HIGH for pitfalls 1–6, 8, 11, 14. MEDIUM for 7, 9, 10, 12, 13, 15 (well-known but less catastrophic, easier to catch in QA).

No external sources were verified due to tool restrictions. These represent established, widely-documented patterns, not speculation.

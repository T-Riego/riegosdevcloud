---
phase: quick-260416-iyl
plan: 01
subsystem: ui
tags: [marquee, animation, testimonials, css, framer-motion, accessibility]

requires:
  - phase: quick-260406-bb6
    provides: AnimateOnScroll component used for header fade-in

provides:
  - Infinite LTR marquee testimonials section with seamless loop
  - @keyframes marquee + .animate-marquee CSS utility in globals.css
  - prefers-reduced-motion fallback for marquee

affects: [ui, testimonials, globals.css, accessibility]

tech-stack:
  added: []
  patterns:
    - "CSS-only infinite marquee via translateX(-50% → 0) on duplicated DOM track"
    - "Inline maskImage style prop as Tailwind v4 fallback for arbitrary mask-image"
    - "aria-hidden on duplicate DOM elements to prevent screen reader double-reads"

key-files:
  created: []
  modified:
    - components/sections/TestimonialsSection.tsx
    - app/globals.css

key-decisions:
  - "Used inline style maskImage + WebkitMaskImage instead of Tailwind arbitrary bracket syntax — more reliable across Tailwind v4 rendering"
  - "translateX(-50% to 0) LTR direction: second copy of items starts visible at left edge, first copy enters from right — seamless at loop boundary"
  - "aria-hidden='true' on duplicate half to avoid screen readers announcing each testimonial twice"
  - "prefers-reduced-motion: transform stays at translateX(-50%) so second copy of items fills the viewport rather than leaving blank space"

patterns-established:
  - "Marquee pattern: duplicate items array in JSX, animate translateX(-50%→0), w-max on track, overflow-hidden on viewport"

requirements-completed: [QUICK-IYL-01]

duration: 15min
completed: 2026-04-16
---

# Quick Task 260416-iyl: Testimonials Section Refactor to Infinite Marquee

**Replaced static 3-column CSS grid with a CSS-only infinite left-to-right marquee ticker using duplicated DOM and pure CSS keyframes.**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-04-16T16:33:00Z
- **Completed:** 2026-04-16T16:48:00Z
- **Tasks:** 2 completed
- **Files modified:** 2

## Accomplishments

- Refactored `TestimonialsSection.tsx` from a static 3-column grid to a horizontally scrolling infinite marquee
- Added `@keyframes marquee`, `.animate-marquee`, and reduced-motion override to `globals.css` with no new npm dependencies
- Preserved all existing card visual design (border, hover lift, stars, blockquote, avatar initials, name/company) with full accessibility (aria-hidden on duplicates, role="region", reduced-motion fallback, hover pause)

## Task Commits

1. **Task 1: Add marquee CSS primitives to globals.css** - `6c09945` (feat)
2. **Task 2: Refactor TestimonialsSection to infinite LTR marquee** - `553dab9` (feat)

## Files Created/Modified

- `app/globals.css` - Added `@keyframes marquee`, `.animate-marquee` utility with `--marquee-duration` CSS variable (default 40s), hover pause rule, and prefers-reduced-motion override
- `components/sections/TestimonialsSection.tsx` - Replaced stagger grid with duplicated flex marquee track; header AnimateOnScroll retained; soft edge fade via inline maskImage style

## How the Seamless Loop Works

The testimonials array is duplicated in the DOM (`[...items, ...items]`). The `@keyframes marquee` animates the track from `translateX(-50%)` to `translateX(0)`:

- At `from` (start): track is offset left by 50% of its own width — the second copy of items fills the viewport
- At `to` (end): track is at natural position — the first copy of items fills the viewport
- Since both copies are identical, the transition from `to` back to `from` (at loop restart) is invisible to the user

## Accessibility Considerations

| Concern | Solution |
|---------|----------|
| Screen readers reading duplicates | `aria-hidden="true"` on all cards from index >= items.length |
| Motion sensitivity | `@media (prefers-reduced-motion: reduce)` sets `animation: none; transform: translateX(-50%)` — second copy stays visible, no blank space |
| Hover pause | `.animate-marquee:hover { animation-play-state: paused }` in CSS |
| Region landmark | `role="region" aria-label={content.testimonials.sectionTitle}` on marquee viewport |

## Deviations from Plan

### Inline maskImage instead of Tailwind arbitrary bracket

**Found during:** Task 2
**Issue:** Tailwind v4 arbitrary `[mask-image:...]` class syntax is less reliable at build time and may require PostCSS plugin configuration not present in this project.
**Fix:** Used `style={{ maskImage: '...', WebkitMaskImage: '...' }}` inline prop for both standard and webkit prefix variants — more explicit and guaranteed to render correctly.
**Files modified:** `components/sections/TestimonialsSection.tsx`
**Commit:** `553dab9`

## Known Stubs

None — all testimonials are wired to `content.testimonials.items` via `useLocale()` for both PT-BR and EN locales.

## Self-Check

- [x] `app/globals.css` contains `@keyframes marquee` (line 66)
- [x] `app/globals.css` contains `.animate-marquee` (line 71)
- [x] `app/globals.css` contains `prefers-reduced-motion` override for marquee (line 80)
- [x] `components/sections/TestimonialsSection.tsx` contains `animate-marquee` class (line 83)
- [x] Commit `6c09945` exists (Task 1)
- [x] Commit `553dab9` exists (Task 2)
- [x] `npm run build` passes with no TypeScript or compilation errors

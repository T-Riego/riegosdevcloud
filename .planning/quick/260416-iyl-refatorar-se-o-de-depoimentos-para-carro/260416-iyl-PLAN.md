---
phase: quick-260416-iyl
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - components/sections/TestimonialsSection.tsx
  - app/globals.css
autonomous: true
requirements:
  - QUICK-IYL-01
must_haves:
  truths:
    - "Testimonials section renders as a single horizontal marquee row that auto-scrolls left-to-right continuously"
    - "The scroll loops seamlessly with no visible jump or reset at the end of the cycle"
    - "Marquee pauses (or falls back to static) when user has prefers-reduced-motion enabled"
    - "Section header (sectionTitle + headline) stays static above the marquee — header is not animated horizontally"
    - "Marquee overflow is contained within the testimonials section and does not cause horizontal scroll on the page or leak into adjacent sections"
    - "Each card keeps its current visual design: rounded border, hover accent border, stars, italic quote, avatar initials, name, company"
    - "Cards are rendered for all testimonials in content.testimonials.items, regardless of count"
  artifacts:
    - path: "components/sections/TestimonialsSection.tsx"
      provides: "Marquee testimonials section with infinite LTR auto-scroll"
      contains: "animate-marquee"
    - path: "app/globals.css"
      provides: "@keyframes marquee + .animate-marquee utility + reduced-motion override"
      contains: "@keyframes marquee"
  key_links:
    - from: "components/sections/TestimonialsSection.tsx"
      to: "app/globals.css"
      via: "className=\"animate-marquee\" consumes @keyframes marquee"
      pattern: "animate-marquee"
    - from: "components/sections/TestimonialsSection.tsx"
      to: "content.testimonials.items"
      via: "useLocale() hook, items mapped twice for seamless duplication"
      pattern: "\\[\\.\\.\\.content\\.testimonials\\.items, \\.\\.\\.content\\.testimonials\\.items\\]|duplicated"
---

<objective>
Refactor the Testimonials section from a static 3-column CSS grid into an infinite horizontal marquee (ticker) that auto-scrolls left-to-right continuously, while preserving the existing card visual design, respecting `prefers-reduced-motion`, and containing overflow to the section.

Purpose: Increase perceived social proof density by showing all testimonials continuously, delivering a modern "always-moving" dynamic feel consistent with the site's tech-forward brand positioning.

Output:
- Updated `TestimonialsSection.tsx` rendering a duplicated track inside an `overflow-hidden` viewport
- New `@keyframes marquee` + `.animate-marquee` utility in `globals.css` with `prefers-reduced-motion` override
</objective>

<execution_context>
@~/.claude/get-shit-done/workflows/execute-plan.md
@~/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@./CLAUDE.md
@components/sections/TestimonialsSection.tsx
@app/globals.css

<interfaces>
<!-- Existing contracts the executor must preserve. -->

From `context/LocaleContext` (already in use):
```ts
const { content } = useLocale()
// content.testimonials: {
//   sectionTitle: string
//   headline: string
//   items: Array<{ id: string | number; name: string; company: string; stars: number; text: string }>
// }
```

From `components/ui/AnimateOnScroll` (keep for the header only):
- Used as-is around the `<p>` + `<h2>` block
- REMOVE from the card grid wrapper — marquee replaces stagger animation

Tailwind v4 tokens in `@theme` (available as classes):
- `bg-surface`, `bg-background`, `border-surface`, `text-accent`, `text-primary`, `text-secondary`
- `font-heading`, `font-body`

Existing CSS animation pattern (reference — do NOT modify):
- `.section-divider` uses `@keyframes glow-pulse` with `@media (prefers-reduced-motion: reduce)` override
- Follow the same pattern for `@keyframes marquee`
</interfaces>

<design-spec>
**Marquee direction**: left-to-right. Translate the track from `translateX(-50%)` to `translateX(0)`. (Duplicate the items in DOM; at 50% the second copy aligns with the first, creating a seamless loop.)

**Speed**: target ~40s per full cycle on desktop. Tune if items count changes readability.

**Card sizing**: each card gets a fixed min-width (e.g. `min-w-[320px] sm:min-w-[360px] md:min-w-[400px]`) and `shrink-0` so cards do not flex in the flex track.

**Gap between cards**: `gap-6` (24px) — matches current grid gap.

**Viewport overflow**: outer wrapper `overflow-hidden`; inner track is a flexbox row.

**Edge fade (optional polish)**: left/right gradient mask via Tailwind `[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]` to soften the cut. If Tailwind v4 struggles, inline the `maskImage` via `style` prop.

**Accessibility**:
- Entire marquee wrapper gets `role="region"` and `aria-label` with localized string (fallback: hardcoded "Testimonials" — content.testimonials.sectionTitle is fine as the label).
- `prefers-reduced-motion: reduce` stops the animation (`animation-play-state: paused` OR `animation: none` + `transform: translateX(0)`).
- Each card's `aria-label` for stars is preserved.

**Hover pause (nice-to-have, include)**: `hover:[animation-play-state:paused]` on the track.
</design-spec>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Add marquee CSS primitives to globals.css</name>
  <files>app/globals.css</files>
  <action>
Append the following to `app/globals.css` AFTER the existing `.section-divider` blocks (before the final `@media (prefers-reduced-motion: reduce)` rule, or within it — add a new rule there too).

Add these three pieces:

1. New `@keyframes marquee` that translates from `translateX(-50%)` to `translateX(0)` — this produces LEFT-TO-RIGHT motion when the duplicated track is laid out normally. DO NOT use `0 -> -50%` (that would be right-to-left).

```css
@keyframes marquee {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
```

2. Utility class `.animate-marquee` that applies the keyframes, with a CSS variable `--marquee-duration` defaulting to `40s` so the component can override if desired:

```css
.animate-marquee {
  animation: marquee var(--marquee-duration, 40s) linear infinite;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```

3. Extend the existing `@media (prefers-reduced-motion: reduce)` block (or add a new one) to disable the marquee and reset transform so static cards remain visible:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
    transform: translateX(-50%); /* keep the loop offset so both sets remain visible */
  }
}
```

NOTE on reduced-motion transform value: using `translateX(-50%)` when duplicated means the second set is visible (starts at left edge). Using `translateX(0)` would push the duplicate off-screen right and leave blank space at left. Test both visually during execution; prefer whichever keeps the viewport full of cards.

DO NOT remove or modify existing `.section-divider` / `@keyframes glow-pulse` / FOUC rules.
  </action>
  <verify>
    <automated>npm run build</automated>
  </verify>
  <done>
- `globals.css` contains `@keyframes marquee`, `.animate-marquee`, and a reduced-motion rule that disables the marquee animation
- `npm run build` compiles Tailwind v4 + CSS without errors
- Manual grep confirms: `grep -n "@keyframes marquee" app/globals.css` returns a match
  </done>
</task>

<task type="auto" tdd="false">
  <name>Task 2: Refactor TestimonialsSection to infinite LTR marquee</name>
  <files>components/sections/TestimonialsSection.tsx</files>
  <behavior>
- The section header (sectionTitle + headline) continues to animate on scroll via AnimateOnScroll fadeUp (unchanged).
- The testimonials track renders `content.testimonials.items` TWICE back-to-back in a single flex row.
- The track has class `animate-marquee flex gap-6 w-max` and is wrapped in an `overflow-hidden` viewport.
- Cards are `shrink-0` with a fixed min-width so they never compress inside the flex row.
- Cards keep ALL existing visual styling: rounded-xl, border-surface, bg-surface, p-7, hover:border-accent/20, hover:-translate-y-1, stars, blockquote, author row with initials avatar.
- Hovering the marquee pauses the animation (via `:hover` rule added in Task 1).
- Users with `prefers-reduced-motion: reduce` see a static, non-moving row (duplicates still present, but no animation).
- No horizontal scrollbar appears on the page; overflow is contained within the section.
- The max-width container (`max-w-6xl mx-auto`) stays around the HEADER only. The marquee viewport spans wider (section-width) so cards can flow past the viewport edges — BUT still inside the section, not full bleed across the document. Use a wrapper: header inside `max-w-6xl mx-auto`, marquee viewport full-width of the section with its own `px-0` reset and `overflow-hidden`.
  </behavior>
  <action>
Rewrite `components/sections/TestimonialsSection.tsx` to the following structure. Do NOT add new imports beyond what's already there (no new libraries — use CSS animation from Task 1).

```tsx
'use client'

import { useLocale } from '@/context/LocaleContext'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function TestimonialsSection() {
  const { content } = useLocale()

  // Duplicate the list for seamless loop.
  // The keyframes in globals.css translate from -50% to 0, so the second copy
  // (offset by -50%) is what becomes visible at the start; at animation end,
  // track is at 0 and looks identical to start — loop is seamless.
  const items = content.testimonials.items
  const doubled = [...items, ...items]

  const renderCard = (item: typeof items[number], index: number) => {
    const initials = item.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)

    return (
      <div
        key={`${item.id}-${index}`}
        // shrink-0 prevents flex compression; min-w sizes the card explicitly
        className="shrink-0 w-[320px] sm:w-[360px] md:w-[400px] rounded-xl border border-surface bg-surface p-7 flex flex-col gap-5 transition-all duration-300 ease-out hover:border-accent/20 hover:-translate-y-1"
        // aria-hidden on the duplicate half so screen readers don't read testimonials twice
        aria-hidden={index >= items.length ? 'true' : undefined}
      >
        {/* Stars */}
        <div className="flex gap-0.5" role="img" aria-label={`${item.stars} out of 5 stars`}>
          {Array.from({ length: item.stars }).map((_, i) => (
            <span key={i} className="text-accent text-sm">★</span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="font-body text-secondary italic leading-[1.75] flex-1 text-[0.95rem]">
          &ldquo;{item.text}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-2 border-t border-surface mt-auto">
          <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <span className="text-accent text-xs font-bold">{initials}</span>
          </div>
          <div>
            <p className="font-heading font-semibold text-sm text-primary">
              {item.name}
            </p>
            <p className="font-body text-xs text-secondary/70">{item.company}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="depoimentos" className="py-24 overflow-hidden">
      {/* Header stays inside the max-w container and keeps padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll animation="fadeUp">
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
            {content.testimonials.sectionTitle}
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
            {content.testimonials.headline}
          </h2>
        </AnimateOnScroll>
      </div>

      {/* Marquee viewport: full section width, overflow contained */}
      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        role="region"
        aria-label={content.testimonials.sectionTitle}
      >
        <div className="flex gap-6 w-max animate-marquee">
          {doubled.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  )
}
```

Key points to verify while writing:
1. Outer `<section>` has `overflow-hidden` — prevents the marquee from causing page horizontal scroll.
2. `<section>` REMOVES the `px-4 sm:px-6` from the section element itself (moved inside the header's `max-w-6xl` wrapper). This lets the marquee viewport span edge-to-edge within the section.
3. The flex track uses `w-max` so its intrinsic width equals the sum of all doubled cards + gaps — required for the `translateX(-50%)` math to align perfectly.
4. `AnimateOnScroll staggerChildren` is REMOVED from the card grid — the marquee animation IS the entrance/motion.
5. The card's key uses `${item.id}-${index}` since each id appears twice.
6. The duplicate half is marked `aria-hidden="true"` so screen readers don't announce every testimonial twice.
7. The mask-image creates soft edges. If Tailwind v4 does not parse the bracket arbitrary property correctly, replace with an inline `style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: '...' }}`.
  </action>
  <verify>
    <automated>npm run build</automated>
  </verify>
  <done>
- TestimonialsSection compiles with no TypeScript or lint errors
- `npm run build` succeeds
- Visual check (manual confirmation during execution):
  - Cards scroll smoothly from left to right on load
  - No visible jump when the loop restarts
  - Hovering pauses the scroll
  - Page has no horizontal scrollbar
  - Header sectionTitle + headline are static above the marquee
  - Edges have a soft mask fade (not a hard cut)
  - DevTools > Rendering > "Emulate CSS prefers-reduced-motion" = "reduce" freezes the marquee, cards still visible
  </done>
</task>

</tasks>

<verification>
**Build check (automated):**
- `npm run build` — must complete with no errors

**Visual verification (manual, during execution):**
1. Run `npm run dev` and open the site at the `#depoimentos` section
2. Confirm cards move continuously left-to-right
3. Confirm seamless loop (no visible jump every ~40s)
4. Hover the track — animation pauses
5. Open DevTools > Rendering panel > enable "Emulate CSS prefers-reduced-motion: reduce" → marquee stops, cards remain visible
6. Resize window — no horizontal scrollbar appears on page at any breakpoint (mobile 375px, tablet 768px, desktop 1440px)
7. Inspect adjacent sections (services above, contact below) — marquee overflow does not leak into them
8. Toggle language PT-BR / EN — all testimonials still scroll correctly with translated text

**Grep checks:**
- `grep -n "@keyframes marquee" app/globals.css` returns 1 match
- `grep -n "animate-marquee" components/sections/TestimonialsSection.tsx` returns ≥1 match
- `grep -n "prefers-reduced-motion" app/globals.css` returns ≥1 match (original) and a second entry covering `.animate-marquee`
</verification>

<success_criteria>
- [ ] `globals.css` has `@keyframes marquee`, `.animate-marquee`, and a reduced-motion override
- [ ] `TestimonialsSection.tsx` renders a duplicated, left-to-right scrolling marquee inside an `overflow-hidden` viewport
- [ ] Header remains static above the marquee via `AnimateOnScroll fadeUp`
- [ ] `prefers-reduced-motion: reduce` disables the animation but keeps cards visible
- [ ] Hover pauses the marquee
- [ ] No horizontal page scroll on any breakpoint
- [ ] Card visual design (border, hover, stars, quote, avatar, name, company) unchanged
- [ ] No new npm dependencies added
- [ ] `npm run build` passes
</success_criteria>

<output>
After completion, create `.planning/quick/260416-iyl-refatorar-se-o-de-depoimentos-para-carro/260416-iyl-SUMMARY.md` documenting:
- What changed in `TestimonialsSection.tsx` (before/after structure)
- The CSS primitives added to `globals.css`
- How the seamless loop works (translateX -50% → 0 with duplicated DOM)
- Accessibility considerations applied (aria-hidden on duplicate, reduced-motion fallback, hover pause, role="region" + aria-label)
- Any deviations from the plan (e.g. mask-image fallback, min-width tuning)
</output>

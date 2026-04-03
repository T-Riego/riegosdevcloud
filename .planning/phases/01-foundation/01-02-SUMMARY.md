---
phase: 01-foundation
plan: 02
subsystem: i18n
tags: [typescript, react-context, localstorage, bilingual, pt-BR, en, content-model]

# Dependency graph
requires:
  - phase: 01-01
    provides: "Next.js scaffold, app/layout.tsx as Server Component with font setup"
provides:
  - "lib/types.ts — Locale union type and SiteContent re-export"
  - "lib/content/pt-BR.ts — Complete PT-BR content for all 9 site sections"
  - "lib/content/en.ts — Complete EN translation typed against SiteContent"
  - "context/LocaleContext.tsx — LocaleProvider and useLocale() hook"
  - "app/layout.tsx — Children wrapped in LocaleProvider (still Server Component)"
affects: [02-structure, 03-animations, 04-seo, all-components]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "DeepMutable utility type: widens as-const literal types to structural interface for bilingual content parity"
    - "LocaleProvider default PT-BR + useEffect localStorage read to avoid hydration mismatch"
    - "as const + typed SiteContent pattern: content source typed with SiteContent for compile-time key enforcement"

key-files:
  created:
    - lib/types.ts
    - lib/content/pt-BR.ts
    - lib/content/en.ts
    - context/LocaleContext.tsx
  modified:
    - app/layout.tsx

key-decisions:
  - "DeepMutable<typeof ptBR> used for SiteContent — widens as-const literal strings to string type, preserving numbers, so en.ts can satisfy the same structural shape without exact literal matches"
  - "ptBR cast as SiteContent in LocaleContext to bridge readonly/mutable array gap; safe because structure is identical"
  - "localStorage read in useEffect (not useState initializer) to ensure SSR/client initial render matches PT-BR, preventing hydration mismatch"

patterns-established:
  - "Pattern: No inline strings in components — all text comes from useLocale().content"
  - "Pattern: Locale validation on read — localStorage value must be 'pt-BR' or 'en', otherwise ignored"

requirements-completed: [I18N-01]

# Metrics
duration: 18min
completed: 2026-04-02
---

# Phase 01 Plan 02: Bilingual Content Model Summary

**Full PT-BR/EN typed content model with React Context delivery — 9 sections, compile-time parity, no inline strings in components**

## Performance

- **Duration:** ~18 min
- **Started:** 2026-04-02T09:00:00Z
- **Completed:** 2026-04-02T09:18:00Z
- **Tasks:** 2
- **Files modified:** 5 (3 created + 1 created + 1 modified)

## Accomplishments
- Complete bilingual content for all 9 site sections (nav, footer, hero, about, services, portfolio, testimonials, process, contact) in both PT-BR and EN
- TypeScript enforces structural parity — missing keys in `en.ts` are compile errors
- `LocaleProvider` wraps the app without making `app/layout.tsx` a Client Component
- `useLocale()` hook delivers locale, full content object, and `toggleLocale` to any component
- localStorage persistence with validation (T-02-01 threat mitigation applied)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create typed content files for all site sections** - `adf1636` (feat)
2. **Task 2: Create LocaleContext and wire into root layout** - `a0aab03` (feat)

**Plan metadata:** _(docs commit follows)_

## Files Created/Modified
- `lib/types.ts` — Locale union type + re-exports SiteContent
- `lib/content/pt-BR.ts` — Full PT-BR content for all 9 sections with `as const` and `SiteContent` type definition
- `lib/content/en.ts` — Full EN translation typed as `SiteContent` for compile-time parity enforcement
- `context/LocaleContext.tsx` — `LocaleProvider` (use client) + `useLocale()` hook with localStorage persistence and validation
- `app/layout.tsx` — Added `LocaleProvider` wrapper around children (layout remains Server Component)

## Content Sections Covered (9 total)
1. **nav** — logo, nav links, language toggle label
2. **footer** — tagline, copyright, social links, quick links label
3. **hero** — headline, subheadline, typewriter items (4), CTA buttons
4. **about** — section title, headline, bio, tools label, tools list
5. **services** — section title, headline, 6 service items (id, title, description)
6. **portfolio** — section title, headline, UI labels, 3 project items (id, title, descriptions, tech, status)
7. **testimonials** — section title, headline, 3 testimonial items (id, text, name, company, stars)
8. **process** — section title, headline, 4 step items (id, number, title, description)
9. **contact** — section title, headline, subheadline, form labels/placeholders, WhatsApp details

## LocaleContext API
`useLocale()` returns:
- `locale: Locale` — current locale (`'pt-BR'` | `'en'`)
- `content: SiteContent` — full content object for current locale
- `toggleLocale: () => void` — switches locale instantly, persists to localStorage

## Decisions Made
- `DeepMutable<typeof ptBR>` utility type established for `SiteContent` — widens `as const` literal string types to `string`, keeping numbers as `number`, so `en.ts` can satisfy the shape with different translated values without exact literal matches
- `ptBR` is cast `as SiteContent` in LocaleContext because `as const` produces `readonly` arrays, while `SiteContent` uses mutable arrays; the cast is structurally safe
- `useState('pt-BR')` + `useEffect localStorage read` pattern prevents hydration mismatch — server and initial client render both see PT-BR

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed SiteContent type incompatibility with as-const literal types**
- **Found during:** Task 1 (TypeScript check after creating content files)
- **Issue:** Plan specified `export type SiteContent = typeof ptBR` — but `as const` produces narrow literal string types (e.g. `"Sobre"` not `string`), so `en.ts` typed as `SiteContent` fails when providing different translated strings
- **Fix:** Defined `DeepMutable<T>` utility type that widens `as const` literal types to `string`/`number`/`boolean` base types while preserving object structure. `SiteContent = DeepMutable<typeof ptBR>` enforces structural parity without requiring exact string values
- **Files modified:** `lib/content/pt-BR.ts`
- **Verification:** `./node_modules/.bin/tsc --noEmit` exits 0 after fix
- **Committed in:** `adf1636` (Task 1 commit)

**2. [Rule 1 - Bug] Fixed readonly array assignment in LocaleContext**
- **Found during:** Task 2 (TypeScript check after creating LocaleContext)
- **Issue:** `ptBR` (from `as const`) has `readonly` arrays; `SiteContent` (via `DeepMutable`) uses mutable arrays; direct assignment `const content: SiteContent = ptBR` fails because `readonly` arrays are not assignable to mutable array types
- **Fix:** Added type cast `(locale === 'pt-BR' ? ptBR : en) as SiteContent` — structurally safe since the shape is identical, only mutability differs
- **Files modified:** `context/LocaleContext.tsx`
- **Verification:** `./node_modules/.bin/tsc --noEmit` exits 0 after fix
- **Committed in:** `a0aab03` (Task 2 commit)

---

**Total deviations:** 2 auto-fixed (both Rule 1 - Bug, TypeScript type system issues)
**Impact on plan:** Both fixes necessary for correct TypeScript compilation. No scope creep — same structural parity guarantee is maintained via the `DeepMutable` approach.

## Issues Encountered
- `npx tsc` pulled a wrong `tsc` package (not the TypeScript compiler); used `./node_modules/.bin/tsc` instead
- `node_modules` was not installed in the worktree; ran `npm install` as part of Rule 3 fix

## Known Stubs
None — content files contain real project strings (Tiago's actual bio, real WhatsApp number, real service descriptions). Portfolio item `p3` is intentionally marked "Em breve"/"Coming soon" as a placeholder for a future real project — this is by design, not a content stub blocking plan goals.

## Next Phase Readiness
- Any Phase 2+ component can call `useLocale()` to get locale-aware content — no inline strings needed
- All 9 sections have content ready; components can be built without waiting for copy
- `useLocale()` is available immediately after import from `@/context/LocaleContext`

---
*Phase: 01-foundation*
*Completed: 2026-04-02*

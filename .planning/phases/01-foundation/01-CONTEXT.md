# Phase 1: Foundation - Context

**Gathered:** 2026-04-02
**Status:** Ready for planning

<domain>
## Phase Boundary

Scaffold Next.js project with App Router, establish the design system (dark theme + cyan accent), create bilingual content model (PT-BR/EN), and build the header shell and footer. After this phase, any section can be built without inline strings, and the dark theme renders correctly on first paint.

</domain>

<decisions>
## Implementation Decisions

### Typography
- **D-01:** Two-font system — Space Grotesk for headings/titles, Inter for body text
- **D-02:** Load 3 weights per font: Regular (400), Medium (500), Bold (700) via next/font
- **D-03:** Use next/font for both fonts — zero layout shift, self-hosted

### i18n System
- **D-04:** Pure React Context + localStorage — no next-intl or other i18n library
- **D-05:** Translation files as TypeScript with full type safety: `lib/content/pt-BR.ts` and `lib/content/en.ts`
- **D-06:** Default language is PT-BR on first visit; user preference persisted in localStorage
- **D-07:** Toggle switches language instantly without page reload — context re-renders all text
- **D-08:** All display strings for ALL sections (including Phase 2-4 sections) must be externalized in the content files from the start

### Header
- **D-09:** Logo is styled text "Riegos Dev" in Space Grotesk Bold with cyan (#00FFFF) accent
- **D-10:** Navigation items: Sobre, Servicos, Portfolio, Depoimentos, Processo, Contato (all sections)
- **D-11:** PT/EN toggle positioned at the right side of the header (desktop), always visible
- **D-12:** Mobile: hamburger menu icon (3 lines), opens overlay/sidebar with nav links + toggle
- **D-13:** Header is sticky — stays fixed at top on scroll with background blur/opacity

### Color Palette
- **D-14:** Background: #0A0A0A (near-black, deep)
- **D-15:** Accent: #00FFFF (cyan electric) — single accent color, no secondary
- **D-16:** Text hierarchy: #FFFFFF for headings, #E0E0E0 for body text
- **D-17:** Cards/surfaces: #111111 with subtle cyan border on hover
- **D-18:** Dark theme FOUC prevention: inline blocking script in layout.tsx to set dark background before hydration

### Claude's Discretion
- Exact gradient styles and subtle color variations within the palette
- Spacing system (use Tailwind defaults unless something specific is needed)
- Header animation on scroll (background opacity transition)
- Hamburger menu animation style

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context
- `.planning/PROJECT.md` — Project vision, constraints, and scope
- `.planning/REQUIREMENTS.md` — Full v1 requirements with REQ-IDs
- `.planning/ROADMAP.md` — Phase structure and success criteria

### Research
- `.planning/research/STACK.md` — Recommended tech stack with versions and rationale
- `.planning/research/ARCHITECTURE.md` — Component architecture and build order
- `.planning/research/PITFALLS.md` — Critical pitfalls (especially FOUC, "use client" boundaries, tsParticles SSR)
- `.planning/research/SUMMARY.md` — Synthesized research findings

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project, no existing code

### Established Patterns
- None yet — this phase establishes the foundational patterns

### Integration Points
- Next.js App Router: `app/layout.tsx` is the root layout where fonts, theme, and providers are set
- `app/page.tsx` will assemble all sections (built in Phase 2+)
- `lib/content/` directory will hold the i18n content files consumed by all sections

</code_context>

<specifics>
## Specific Ideas

- Logo "Riegos Dev" should have the "Dev" portion in cyan or with cyan accent to reinforce the tech identity
- The dark theme must feel premium — not just "dark backgrounds with white text" but crafted with proper surface hierarchy
- Header should be subtle when at top, gain background opacity/blur on scroll

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-04-02*

# Stack - Riegos Dev

Atualizado em: 2026-05-04

## Stack instalada

Fonte: `package.json`.

| Tecnologia | Versão atual | Uso |
|---|---:|---|
| Next.js | 16.2.2 | App Router, metadata, sitemap, renderização React |
| React | 19.2.4 | UI |
| TypeScript | ^5 | Tipagem |
| Tailwind CSS | ^4 | CSS utilitário e tokens via `@theme` |
| motion | ^12.38.0 | Animações de entrada, stagger e modal |
| @tsparticles/react | ^3.0.0 | Partículas no hero |
| @tsparticles/slim | ^3.9.1 | Engine slim das partículas |
| lenis | ^1.3.21 | Smooth scroll |
| lucide-react | ^1.7.0 | Ícones |
| react-type-animation | ^3.2.0 | Typewriter do hero |

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Design system

Tokens definidos em `app/globals.css`:

- background: `#0A0A0A`
- surface: `#111111`
- accent: `#00FFFF`
- text primary: `#FFFFFF`
- text secondary: `#E0E0E0`

Fontes:

- headings: Space Grotesk via `next/font/google`
- body: Inter via `next/font/google`

## Pontos de atenção

- `CLAUDE.md` e `PRD-LOVABLE.md` ainda citam Next.js 15, mas o projeto atual já está em Next.js 16.2.2.
- A dependência instalada é `motion`, importada como `motion/react`, não `framer-motion`.
- O i18n não usa `next-intl`; usa React Context próprio em `context/LocaleContext.tsx`.

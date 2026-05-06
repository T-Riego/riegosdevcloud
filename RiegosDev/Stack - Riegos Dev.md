# Stack - Riegos Dev

Atualizado em: 2026-05-06

## Stack instalada

Fonte: `package.json`.

| Tecnologia | Versao atual | Uso |
|---|---:|---|
| Next.js | 16.2.2 | App Router, metadata, sitemap, renderizacao React |
| React | 19.2.4 | UI |
| TypeScript | ^5 | Tipagem |
| Tailwind CSS | ^4 | CSS utilitario e tokens via `@theme` |
| motion | ^12.38.0 | Animacoes pontuais |
| lenis | ^1.3.21 | Smooth scroll |
| lucide-react | ^1.7.0 | Icones |

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Design system

Tokens definidos em `app/globals.css`:

- background: `#f7f9fb`
- surface: `#ffffff`
- primary: `#006a6a`
- primary container: `#00ffff`
- text primary: `#191c1e`
- text secondary: `#545f73`

Fonte:

- Inter via `next/font/google`.

## Observacoes

- O projeto atual nao deve usar dark theme como base.
- O projeto atual nao deve usar particulas no hero, header ou background.
- O i18n nao usa `next-intl`; usa React Context proprio em `context/LocaleContext.tsx`.

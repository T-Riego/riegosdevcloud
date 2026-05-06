# Mapa do Codigo - Riegos Dev

Atualizado em: 2026-05-06

## Raiz

- `package.json`: dependencias e scripts.
- `next.config.ts`: configuracao do Next.js.
- `tsconfig.json`: aliases e configuracao TypeScript.
- `eslint.config.mjs`: ESLint.
- `CLAUDE.md`: contexto atual para agentes.
- `PRD-LOVABLE.md`: PRD atual do site.

## App Router

- `app/layout.tsx`: layout raiz, fonte Inter, metadata e provider de locale.
- `app/page.tsx`: composicao da SPA.
- `app/globals.css`: Tailwind v4, tokens do tema claro e utilitarios globais.
- `app/sitemap.ts`: sitemap.

## Conteudo

- `lib/content/pt-BR.ts`: fonte principal de conteudo e tipo `SiteContent`.
- `lib/content/en.ts`: traducao inglesa validada contra `SiteContent`.
- `lib/types.ts`: tipos publicos de locale e conteudo.

## Estado global

- `context/LocaleContext.tsx`: contexto de idioma, leitura de `localStorage`, toggle e hook `useLocale`.

## Layout

- `components/layout/Header.tsx`: logo, links, idioma, menu mobile e scroll lock.
- `components/layout/Footer.tsx`: logo, links e copyright.

## Secoes ativas

- `components/sections/HeroSection.tsx`: hero claro em duas colunas, CTAs e imagem.
- `components/sections/ServicesSection.tsx`: bento/grid de servicos com imagens e video.
- `components/sections/PortfolioSection.tsx`: processo e portfolio com cards/chips.
- `components/sections/CtaSection.tsx`: CTA final para WhatsApp.

## UI compartilhada

- `components/ui/SmoothScroll.tsx`: Lenis.
- `components/ui/WhatsAppFab.tsx`: botao flutuante do WhatsApp.
- `components/ui/AnimateOnScroll.tsx`, `ScrollAnimator.tsx`, `ScrollAnimations.tsx`, `ProcessLine.tsx`: utilitarios legados ou compartilhados; conferir uso antes de remover.

## Observacao importante

Nao existe requisito atual para particulas, typewriter ou dark theme. Se algum arquivo antigo citar isso, deve ser tratado como desatualizado.

# Mapa do Codigo - Riegos Dev

Atualizado em: 2026-05-14

## Raiz

- `package.json`: dependencias e scripts.
- `next.config.ts`: configuracao do Next.js.
- `tsconfig.json`: aliases e configuracao TypeScript.
- `eslint.config.mjs`: ESLint.
- `CLAUDE.md`: contexto atual para agentes.
- `PRD-LOVABLE.md`: PRD atual do site.
- `public/robots.txt`: liberacao de crawlers, incluindo Meta/Facebook para verificacao e Sharing Debugger.
- `.env.local`: variaveis locais ignoradas pelo Git; atualmente guarda `NEXT_PUBLIC_CLARITY_PROJECT_ID=wqzbfoy9h9`.

## App Router

- `app/layout.tsx`: layout raiz, fonte Inter, metadata e provider de locale.
- `app/page.tsx`: composicao da SPA e montagem do `PageEngagementTracker`.
- `app/globals.css`: Tailwind v4, tokens do tema claro e utilitarios globais.
- `app/sitemap.ts`: sitemap com `https://riegosdev.cloud` e paginas legais.
- `app/privacidade/page.tsx`: Politica de Privacidade.
- `app/termos/page.tsx`: Termos de Servico.
- `app/exclusao-de-dados/page.tsx`: instrucoes de exclusao de dados para Meta/LGPD.

## Conteudo

- `lib/content/pt-BR.ts`: fonte principal de conteudo e tipo `SiteContent`.
- `lib/content/en.ts`: traducao inglesa validada contra `SiteContent`.
- `lib/types.ts`: tipos publicos de locale e conteudo.

## Estado global

- `context/LocaleContext.tsx`: contexto de idioma, leitura de `localStorage`, toggle e hook `useLocale`.

## Layout

- `components/layout/Header.tsx`: logo, links, idioma, menu mobile e scroll lock.
- `components/layout/Footer.tsx`: logo, links sociais, links legais e copyright.
- `components/legal/LegalDocument.tsx`: layout compartilhado das paginas legais.

## Analytics e Tracking

- `components/analytics/ClarityAnalytics.tsx`: injeta Microsoft Clarity via `next/script`, usando `NEXT_PUBLIC_CLARITY_PROJECT_ID`.
- `components/analytics/PageEngagementTracker.tsx`: dispara `page_viewed`, `scroll_depth_reached` e `section_viewed`.
- `components/analytics/TrackedWhatsAppLink.tsx`: encapsula links de WhatsApp e dispara `whatsapp_clicked`.
- `lib/analytics.ts`: wrapper central de eventos, sanitizacao de query params sensiveis e ponte para `window.clarity`.
- `scripts/check-seo-phase1.mjs`: check local para SEO, JSON-LD, sitemap, Clarity e eventos principais.

## Secoes ativas

- `components/sections/HeroSection.tsx`: hero claro em duas colunas, CTAs e imagem.
- `components/sections/ServicesSection.tsx`: bento/grid de servicos com imagens e video.
- `components/sections/PortfolioSection.tsx`: processo e portfolio com cards/chips.
- `components/sections/CtaSection.tsx`: CTA final para WhatsApp.
- `components/sections/DiagnosticSection.tsx`: diagnostico gratuito antes do CTA final.

## UI compartilhada

- `components/ui/SmoothScroll.tsx`: Lenis.
- `components/ui/WhatsAppFab.tsx`: botao flutuante do WhatsApp.
- `components/ui/AnimateOnScroll.tsx`, `ScrollAnimator.tsx`, `ScrollAnimations.tsx`, `ProcessLine.tsx`: utilitarios legados ou compartilhados; conferir uso antes de remover.

## Observacao importante

Nao existe requisito atual para particulas, typewriter ou dark theme. Se algum arquivo antigo citar isso, deve ser tratado como desatualizado.

## Notas Operacionais

- [[Meta - Verificacao de Dominio e Crawlers]]: diagnostico completo da verificacao de dominio Meta, metatag, TXT DNS, `robots.txt`, Sharing Debugger e passos para VPS/Hostinger.
- [[Tracking e Clarity - Riegos Dev]]: contexto do Microsoft Clarity, project ID, eventos rastreados, privacidade e checklist de validacao.

# Mapa do Código - Riegos Dev

Atualizado em: 2026-05-04

## Raiz

- `package.json`: dependências e scripts.
- `next.config.ts`: configuração do Next.js.
- `tsconfig.json`: aliases e configuração TypeScript.
- `eslint.config.mjs`: ESLint.
- `CLAUDE.md`: contexto antigo do projeto e workflow GSD.
- `PRD-LOVABLE.md`: PRD original, parcialmente desatualizado em relação ao código atual.

## App Router

- `app/layout.tsx`: layout raiz, fontes, metadata, provider de locale.
- `app/page.tsx`: composição da SPA.
- `app/globals.css`: Tailwind v4, tokens de tema, animações globais.
- `app/sitemap.ts`: sitemap.

## Conteúdo

- `lib/content/pt-BR.ts`: fonte principal de conteúdo e tipo `SiteContent`.
- `lib/content/en.ts`: tradução inglesa validada contra `SiteContent`.
- `lib/types.ts`: tipos públicos de locale e conteúdo.

## Estado global

- `context/LocaleContext.tsx`: contexto de idioma, leitura de `localStorage`, toggle e hook `useLocale`.

## Layout

- `components/layout/Header.tsx`: logo, links, idioma, menu mobile e scroll lock.
- `components/layout/Footer.tsx`: logo, links rápidos, social placeholders e copyright.

## Seções

- `components/sections/HeroSection.tsx`: headline, typewriter, partículas, CTAs.
- `components/sections/ServicesSection.tsx`: grid de serviços com ícones lucide.
- `components/sections/PortfolioSection.tsx`: cards e modal de detalhes.
- `components/sections/ProcessSection.tsx`: timeline, antes/depois.
- `components/sections/TestimonialsSection.tsx`: marquee de depoimentos.
- `components/sections/AboutSection.tsx`: cards da equipe.
- `components/sections/ContactSection.tsx`: formulário que abre WhatsApp.

## UI compartilhada

- `components/ui/AnimateOnScroll.tsx`: wrapper de motion para fade e stagger.
- `components/ui/ParticleBackground.tsx`: tsParticles desktop/mobile.
- `components/ui/SmoothScroll.tsx`: Lenis.
- `components/ui/SectionDivider.tsx`: divisores entre seções.
- `components/ui/ProcessLine.tsx`: linha animada do processo.
- `components/ui/WhatsAppFab.tsx`: botão flutuante do WhatsApp.
- `components/ui/ScrollAnimator.tsx` e `components/ui/ScrollAnimations.tsx`: conferir se ainda são usados antes de refatorar.

## Arquivos de planejamento soltos

- `animacoes.txt`
- `instrucoes.txt`
- `instrucoes de como subir na vps.txt`
- `próximos passos.txt`
- `stackn8n portainer.txt`

Esses arquivos parecem conter contexto operacional antigo ou paralelo. Vale consolidar aos poucos no Obsidian.

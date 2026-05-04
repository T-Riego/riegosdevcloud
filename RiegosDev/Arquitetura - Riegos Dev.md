# Arquitetura - Riegos Dev

Atualizado em: 2026-05-04

## Visão técnica

Aplicação Next.js App Router com uma rota principal em `app/page.tsx`. A página monta seções client-side com conteúdo tipado vindo de arquivos centrais de i18n.

## Fluxo de renderização

`app/layout.tsx` configura:

- fontes Space Grotesk e Inter com `next/font`;
- metadata SEO e Open Graph;
- script anti-FOUC para manter fundo escuro antes da hidratação;
- `LocaleProvider` envolvendo a aplicação.

`app/page.tsx` monta a landing page:

- `SmoothScroll`
- `Header`
- seções principais
- `Footer`
- `WhatsAppFab`

## Conteúdo e i18n

Arquivos centrais:

- `lib/content/pt-BR.ts`
- `lib/content/en.ts`
- `lib/types.ts`
- `context/LocaleContext.tsx`

O padrão atual é:

- PT-BR como idioma padrão;
- preferência salva em `localStorage` com chave `locale`;
- toggle instantâneo sem trocar rota;
- `en.ts` tipado contra `SiteContent`, derivado de `pt-BR.ts`.

Regra importante: evitar strings visíveis inline nos componentes. O conteúdo deve entrar pelos objetos `ptBR` e `en`.

## Componentes principais

Layout:

- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

Seções:

- `HeroSection`
- `ServicesSection`
- `PortfolioSection`
- `ProcessSection`
- `TestimonialsSection`
- `AboutSection`
- `ContactSection`

UI compartilhada:

- `AnimateOnScroll`
- `ParticleBackground`
- `SmoothScroll`
- `SectionDivider`
- `ProcessLine`
- `WhatsAppFab`

## Interações relevantes

- Header sticky com detecção de scroll.
- Menu mobile com scroll lock no `body`.
- Toggle PT-BR/EN com persistência.
- Hero com partículas carregadas por `dynamic(..., { ssr: false })`.
- Typewriter reiniciado por `key={locale}`.
- Portfólio abre modal com `AnimatePresence`.
- Contato monta mensagem estruturada e abre `wa.me`.
- Depoimentos usam marquee CSS com lista duplicada.

## SEO

Atualmente configurado em:

- `app/layout.tsx`: metadata principal, Open Graph, Twitter Card, robots e alternates.
- `app/sitemap.ts`: sitemap com `https://riegosdev.com`.

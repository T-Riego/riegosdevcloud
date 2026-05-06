# Arquitetura - Riegos Dev

Atualizado em: 2026-05-06

## Visao tecnica

Aplicacao Next.js App Router com uma rota principal em `app/page.tsx`. A pagina monta secoes client-side com conteudo tipado vindo de arquivos centrais de i18n.

## Fluxo de renderizacao

`app/layout.tsx` configura:

- fonte Inter com `next/font`;
- metadata SEO e Open Graph;
- `LocaleProvider` envolvendo a aplicacao.

`app/page.tsx` monta a landing page:

- `SmoothScroll`
- `Header`
- `HeroSection`
- `ServicesSection`
- `PortfolioSection`
- `CtaSection`
- `Footer`
- `WhatsAppFab`

## Conteudo e i18n

Arquivos centrais:

- `lib/content/pt-BR.ts`
- `lib/content/en.ts`
- `lib/types.ts`
- `context/LocaleContext.tsx`

Padrao atual:

- PT-BR como idioma padrao;
- preferencia salva em `localStorage` com chave `locale`;
- toggle instantaneo sem trocar rota;
- `en.ts` tipado contra `SiteContent`, derivado de `pt-BR.ts`.

Regra importante: evitar strings visiveis inline nos componentes novos. O conteudo deve entrar pelos objetos `ptBR` e `en` sempre que possivel.

## Componentes principais

Layout:

- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

Secoes ativas:

- `HeroSection`
- `ServicesSection`
- `PortfolioSection`
- `CtaSection`

UI compartilhada:

- `SmoothScroll`
- `WhatsAppFab`
- utilitarios legados de animacao ainda presentes para revisao posterior.

## Interacoes relevantes

- Header sticky com deteccao de scroll.
- Menu mobile com scroll lock no `body`.
- Toggle PT-BR/EN com persistencia.
- Hero claro em duas colunas, sem particulas.
- Contato e CTAs abrem `wa.me`.

## SEO

Configurado em:

- `app/layout.tsx`: metadata principal, Open Graph, Twitter Card, robots e alternates.
- `app/sitemap.ts`: sitemap com `https://riegosdev.com`.

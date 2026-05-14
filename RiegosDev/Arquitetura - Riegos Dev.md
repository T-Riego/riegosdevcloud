# Arquitetura - Riegos Dev

Atualizado em: 2026-05-14

## Visao tecnica

Aplicacao Next.js App Router com uma rota principal em `app/page.tsx`. A pagina monta secoes client-side com conteudo tipado vindo de arquivos centrais de i18n.

## Fluxo de renderizacao

`app/layout.tsx` configura:

- fonte Inter com `next/font`;
- metadata SEO e Open Graph;
- dominio base `https://riegosdev.cloud`;
- metatag de verificacao de dominio da Meta no `<head>`;
- Microsoft Clarity via `ClarityAnalytics`, dependente de `NEXT_PUBLIC_CLARITY_PROJECT_ID`;
- `LocaleProvider` envolvendo a aplicacao.

`app/page.tsx` monta a landing page:

- `SmoothScroll`
- `PageEngagementTracker`
- `Header`
- `HeroSection`
- `ServicesSection`
- `PortfolioSection`
- `DiagnosticSection`
- `CtaSection`
- `Footer`
- `WhatsAppFab`

Rotas legais publicas:

- `app/privacidade/page.tsx`: Politica de Privacidade com LGPD, Meta APIs, WhatsApp, CRM, campanhas, boletos, compartilhamento e exclusao.
- `app/termos/page.tsx`: Termos de Servico.
- `app/exclusao-de-dados/page.tsx`: instrucoes objetivas para revogar acesso e solicitar exclusao de dados.
- `components/legal/LegalDocument.tsx`: layout reutilizavel das paginas legais.

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
- `components/legal/LegalDocument.tsx`

Secoes ativas:

- `HeroSection`
- `ServicesSection`
- `PortfolioSection`
- `DiagnosticSection`
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
- Diagnostico gratuito como CTA principal.
- Contato e CTAs abrem `wa.me` com mensagem alinhada ao idioma.
- Tracking comportamental basico:
  - page view;
  - scroll depth;
  - section view;
  - cliques em CTAs principais de WhatsApp.

## Analytics

Microsoft Clarity esta implementado como provider gratuito de comportamento visual.

- Project ID: `wqzbfoy9h9`.
- Variavel: `NEXT_PUBLIC_CLARITY_PROJECT_ID`.
- Local: `.env.local`.
- Producao: precisa ser configurada no ambiente do build da VPS/GitHub Actions.
- Nota completa: [[Tracking e Clarity - Riegos Dev]].

## SEO

Configurado em:

- `app/layout.tsx`: metadata principal, Open Graph, Twitter Card, robots e alternates.
- `app/sitemap.ts`: sitemap com `https://riegosdev.cloud`, incluindo home e paginas legais.

## Deploy

- Deploy automatico por GitHub Actions em `.github/workflows/deploy.yml`.
- Fluxo atual: push em `master` -> SSH na VPS -> `git pull` em `/opt/riegosdev-site` -> `docker build` -> `docker service update --image riegosdev-site:latest --force site-oficial_web`.
- Dominio publico atual: `https://riegosdev.cloud`.

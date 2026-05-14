# Tracking e Clarity - Riegos Dev

Atualizado em: 2026-05-14

## Objetivo

Registrar a implementacao de analytics comportamental do site `https://riegosdev.cloud`, com foco em Microsoft Clarity, eventos de CTA e leitura de comportamento sem coletar dados sensiveis.

Esta nota deve ser atualizada ao final de cada melhoria de SEO, analytics, tracking, heatmap, conversao ou privacidade.

## Estado Atual

- Ferramenta principal: Microsoft Clarity.
- Project ID: `wqzbfoy9h9`.
- Variavel publica usada pelo Next.js: `NEXT_PUBLIC_CLARITY_PROJECT_ID`.
- Ambiente local: `.env.local` criado com `NEXT_PUBLIC_CLARITY_PROJECT_ID=wqzbfoy9h9`.
- Ambiente de producao/VPS: GitHub Actions deve criar `.env.local` em `/opt/riegosdev-site` com o valor vindo da secret `NEXT_PUBLIC_CLARITY_PROJECT_ID` antes do `docker build`.
- Portainer: a stack `site-oficial` recebe a imagem atualizada via `docker service update`; nao basta configurar essa variavel apenas no runtime do Portainer, porque o Next.js precisa dela no build.
- Deploy validado em 2026-05-14: GitHub Actions `25862193507` concluiu com sucesso e o chunk publico `/_next/static/chunks/0j5vsiatubt.5.js` contem `clarity.ms/tag` e `wqzbfoy9h9`.
- O componente e env-gated: se a variavel nao existir, ele retorna `null` e nao quebra o site.

## Arquivos Principais

- `components/analytics/ClarityAnalytics.tsx`
  - injeta o script oficial do Microsoft Clarity via `next/script`;
  - usa `strategy="afterInteractive"`;
  - depende de `process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID`.
- `lib/analytics.ts`
  - wrapper central `trackEvent`;
  - remove parametros sensiveis da URL antes de montar `page_path`;
  - dispara `window.clarity('event', eventName)` quando Clarity esta disponivel;
  - tambem emite `CustomEvent('riegosdev:analytics')` para debug/futuras integracoes.
- `components/analytics/PageEngagementTracker.tsx`
  - dispara `page_viewed`;
  - mede `scroll_depth_reached` em 25, 50, 75, 90 e 100%;
  - mede `section_viewed` em secoes com `data-section-id`.
- `components/analytics/TrackedWhatsAppLink.tsx`
  - encapsula links de WhatsApp;
  - dispara `whatsapp_clicked` com `cta_id` e `cta_location`.
- `app/layout.tsx`
  - monta `<ClarityAnalytics />` dentro do `<body>`.
- `app/page.tsx`
  - monta `<PageEngagementTracker />` na home.
- `scripts/check-seo-phase1.mjs`
  - verifica se o wrapper, Clarity, JSON-LD, sitemap, OG e eventos principais continuam presentes.

## Eventos Rastreados

- `page_viewed`
  - propriedades: `page_title`, `referrer_domain`, `viewport_bucket`, `page_path`.
- `whatsapp_clicked`
  - propriedades: `cta_id`, `cta_location`, `destination_type`, `page_path`.
- `scroll_depth_reached`
  - propriedades: `milestone_percent`, `time_to_milestone_ms`, `page_path`.
- `section_viewed`
  - propriedades: `section_id`, `time_to_view_ms`, `page_path`.

Eventos previstos no wrapper, mas ainda pouco usados:

- `cta_clicked`
- `nav_clicked`
- `outbound_link_clicked`

## CTAs Instrumentados

- `hero_whatsapp`
- `diagnostic_whatsapp`
- `final_whatsapp`
- `whatsapp_fab`
- CTAs de navegacao/header quando usarem `TrackedWhatsAppLink` ou `trackEvent`.

## Privacidade

- Nao enviar nome, telefone, email, CPF, CNPJ, tokens, codigos de auth, valores de formulario ou texto digitado.
- `lib/analytics.ts` remove query params sensiveis:
  - `email`
  - `phone`
  - `cpf`
  - `cnpj`
  - `token`
  - `auth`
  - `code`
  - `session`
  - `name`
  - `document`
- A politica de privacidade ja cita provedores de analytics e transferencias internacionais.
- Se forem adicionados formularios, chats, area logada ou checkout, revisar mascaramento/exclusao de replay antes de publicar.

## Checklist de Validacao

Rodar localmente antes de concluir qualquer melhoria relacionada:

```bash
npm run lint
npm run check:seo
npm run build
```

Para validar Clarity em producao:

1. Confirmar que `NEXT_PUBLIC_CLARITY_PROJECT_ID=wqzbfoy9h9` existe no ambiente usado pelo build da VPS.
2. Fazer deploy.
3. Abrir `view-source:https://riegosdev.cloud/` e procurar `clarity.ms/tag/wqzbfoy9h9`.
4. Acessar o painel do Microsoft Clarity e verificar realtime/session recordings/heatmaps.
5. Clicar nos CTAs de WhatsApp e confirmar eventos no painel quando disponiveis.

## Regra de Memoria do Projeto

Ao final de cada melhoria relevante, atualizar:

- `RiegosDev/Retomada Codex - Riegos Dev.md`: resumo do que mudou, verificacoes e mensagem curta de retomada.
- `RiegosDev/Proximos Passos - Riegos Dev.md`: checklist do que foi concluido e o que ficou pendente.
- `RiegosDev/Mapa do Codigo - Riegos Dev.md`: novos arquivos, responsabilidades e notas operacionais.
- Nota especifica do tema, quando existir. Para tracking, usar esta nota.

## Proximos Passos

- [x] GitHub Secret `NEXT_PUBLIC_CLARITY_PROJECT_ID` criada pelo usuario.
- [x] Workflow ajustado para escrever `.env.local` na VPS antes do `docker build`.
- [x] Confirmar em producao que o bundle publico contem `clarity.ms/tag/wqzbfoy9h9`.
- [ ] Validar no painel do Microsoft Clarity se aparecem visitas, cliques mortos, rage clicks, scroll map e gravacoes.
- [ ] Definir se vamos adicionar consent banner LGPD antes de aumentar coleta/replay.
- [ ] Instrumentar `nav_clicked`, `cta_clicked` generico e `outbound_link_clicked` quando fizer sentido.

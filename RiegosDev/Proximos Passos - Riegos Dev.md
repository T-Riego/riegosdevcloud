# Próximos Passos - Riegos Dev

Atualizado em: 2026-05-14

## Status Atual - Redesign RiegosDev

- [x] Redesign estilo referencia implementado, mergeado em `master` e publicado em `origin/master`.
- [x] CTA principal alterado para diagnostico gratuito.
- [x] Hero, servicos, processo, projetos, diagnostico, CTA final e footer atualizados.
- [x] Conteudo PT-BR e EN mantidos com paridade.
- [x] Verificacao registrada: `npm run lint` com 0 erros/4 warnings existentes; `npm run build` passou.
- [x] Deploy final publicado em `https://riegosdev.cloud` via GitHub Actions/VPS.
- [x] Dominio final atualizado em metadata e sitemap para `https://riegosdev.cloud`.
- [x] Paginas legais publicadas: `/privacidade`, `/termos` e `/exclusao-de-dados`.
- [x] Metatag de verificacao da Meta publicada no `<head>` da home.
- [x] Validar novamente o visual mobile apos o ajuste de overflow dos headings. Confirmado em 360px, 375px, 390px, 414px e 430px sem overflow lateral.
- [x] Baseline de Microsoft Clarity/tracking implementado e validado localmente.
- [ ] Limpar worktrees temporarios `.claude/worktrees/agent-*` somente com autorizacao.
- [ ] Decidir se `NagoaDev Textos Site.pdf` deve entrar no Git ou ficar local.

## Tracking / Microsoft Clarity

- [x] Criar wrapper central de analytics em `lib/analytics.ts`.
- [x] Criar componente env-gated `ClarityAnalytics`.
- [x] Montar `<ClarityAnalytics />` no layout raiz.
- [x] Criar tracker de page view, scroll depth e section view.
- [x] Instrumentar CTAs principais de WhatsApp.
- [x] Criar nota Obsidian [[Tracking e Clarity - Riegos Dev]].
- [x] Registrar Project ID local: `wqzbfoy9h9`.
- [x] Criar `.env.local` com `NEXT_PUBLIC_CLARITY_PROJECT_ID=wqzbfoy9h9`.
- [x] Rodar `npm run check:seo` e confirmar `15/15`.
- [x] Criar GitHub Secret `NEXT_PUBLIC_CLARITY_PROJECT_ID` com valor `wqzbfoy9h9`.
- [x] Ajustar GitHub Actions para criar `.env.local` na VPS antes do `docker build`.
- [x] Fazer deploy apos a variavel estar configurada em producao.
- [x] Validar bundle publico procurando `clarity.ms/tag/wqzbfoy9h9`.
- [ ] Validar visitas/eventos no painel do Microsoft Clarity.
- [ ] Decidir se consent banner LGPD entra antes de expandir replay/heatmaps.

## Meta / Tech Provider

- [x] Criar Politica de Privacidade completa em `/privacidade`.
- [x] Criar Termos de Servico em `/termos`.
- [x] Criar pagina de Instrucao de Exclusao de Dados em `/exclusao-de-dados`.
- [x] Incluir links legais no footer.
- [x] Incluir as paginas legais no sitemap.
- [x] Atualizar dominio oficial para `riegosdev.cloud`.
- [x] Publicar metatag `facebook-domain-verification` no `<head>` da home.
- [x] Confirmar que a metatag aparece em `view-source:https://riegosdev.cloud/`.
- [ ] Clicar novamente em `Verificar dominio` no Meta Business Suite se o status ainda estiver pendente.
- [ ] Se a Meta continuar falhando, usar Sharing Debugger para raspar `https://riegosdev.cloud/` novamente e tentar verificar de novo.

## Amanhã - Pesquisa de Novos Exemplos de Portfólio

- [ ] Fazer pesquisa web de nichos vendaveis para videos de divulgacao e landing pages.
- [ ] Escolher 4 exemplos de videos, excluindo bijuteria.
- [ ] Escolher 4 exemplos de landing pages, excluindo EPI e protecao veicular.
- [ ] Para cada video: nicho, publico, oferta, gancho de 2s, roteiro de 20-35s, cenas/imagens, texto na tela, CTA e motivo comercial.
- [ ] Para cada landing page: nicho, objetivo, headline, estrutura, CTAs, imagens, objecoes, provas de confianca e motivo comercial.
- [ ] Gerar ranking do mais vendavel para o menos vendavel.
- [ ] Indicar quais exemplos servem melhor para site, Reels/Instagram e clientes de maior ticket.
- [ ] Avaliar tudo pela satisfacao do cliente comprador e capacidade real de vender, nao por gosto pessoal.

## Design & Layout (Stitch Visual Refresh)

- [x] Aplicar nova paleta de cores light e remover tema dark.
- [x] Refatorar Hero, Services, Portfolio e Footer para o novo design minimalista.
- [x] Corrigir conflitos de Tailwind V4 no layout responsivo (resolvido bug de quebra de grid/texto).
- [x] Trocar imagens de placeholders do Stitch por imagens/prints reais dos cases.
- [x] Criar ponto de restauração `restore-before-light-redesign`.
- [x] Remover instruções antigas de dark theme/partículas da documentação principal.
- [x] Remover dependências antigas de partículas/typewriter/tema dark não usadas.
- [x] Converter card escuro restante de Sites / Landing Pages para light theme.
- [x] Criar nota de retomada `Retomada Codex - Riegos Dev.md`.

## Documentação

- [ ] Sincronizar `PRD-LOVABLE.md` com o conteúdo atual do site.
- [ ] Atualizar `CLAUDE.md` para refletir Next.js 16.2.2 e a dupla Daniel + Tiago.
- [x] Consolidar `animacoes.txt`, `instrucoes.txt`, `próximos passos.txt` e `stackn8n portainer.txt` em notas Obsidian específicas.
- [ ] Criar uma nota separada para deploy/VPS se o projeto for hospedado fora da Vercel.

## Produto e conteúdo

- [ ] Decidir se a marca deve usar "Tiago fundador" ou "Daniel + Tiago" de forma definitiva em todos os documentos.
- [ ] Revisar diferença entre PT-BR e EN: o hero em inglês ainda está mais genérico do que o PT-BR.
- [ ] Preencher links reais de Instagram, LinkedIn e GitHub no footer.
- [ ] Validar se os depoimentos são placeholders ou cases reais.
- [ ] Revisar se "Facebook Ads & Aggressive Marketing" no inglês deve ter tom menos agressivo.

## Código

- [ ] Rodar `npm run lint`.
- [x] Rodar `npm run build`. (Passou com sucesso sem erros após correção do Tailwind V4)
- [ ] Verificar se `components/ui/ScrollAnimator.tsx`, `ScrollAnimations.tsx` e componentes similares ainda estão em uso.
- [ ] Verificar responsividade do marquee de depoimentos em mobile.
- [ ] Conferir acessibilidade do modal de portfólio: foco inicial, Escape para fechar e retorno de foco.

## SEO e deploy

- [x] Confirmar dominio final: `https://riegosdev.cloud`.
- [ ] Adicionar imagem Open Graph real.
- [ ] Validar metadados em PT-BR e EN.
- [x] Estrategia de deploy definida: GitHub Actions via SSH na VPS, com Docker build e update do service `site-oficial_web`.

---

## Log de Atualizações - 05/05/2026
- **Bento Grid (Serviços):** Imagens padronizadas e responsivas adicionadas (Atendimento 24/7 e Automação Inteligente).
- **Navegação (Header):** Corrigido o direcionamento da âncora do Portfólio e adicionado o botão "Processo".
- **Portfólio:** Todos os cases substituídos por imagens reais (ConectaSeguro, ConectaSaúde, AtualEPI) com novo design de "Chips" para as descrições.
- **Novos Serviços:** O serviço de "Captação de Clientes" foi substituído por "Vídeos & Roteiros de Alta Conversão", incluindo um vídeo em reprodução automática na interface.
- **Pipeline:** Commits e deploys para a VPS automatizados via GitHub Actions finalizados e testados com sucesso.

## Log de Atualizações - 06/05/2026
- **Restauração:** Criada a tag `restore-before-light-redesign` antes da limpeza do redesign.
- **Documentação:** CLAUDE, PRD e notas Obsidian principais atualizadas para light theme sem partículas.
- **Dependências:** Removidas libs não usadas de partículas, typewriter e tema dark.
- **Serviços:** Card de Sites / Landing Pages convertido para visual claro/ciano.
- **Skills:** Skill global `caveman` instalada em `C:\Users\tiago\.codex\skills\caveman`.
- **Retomada:** Criada nota para reiniciar Codex e continuar do mesmo ponto usando `caveman`.

## Log de Atualizacoes - Redesign RiegosDev - 06/05/2026

- **Redesign RiegosDev:** Implementado e mergeado localmente em `master` com diagnostico gratuito como CTA principal.
- **Verificacao:** `npm run lint` sem erros e `npm run build` aprovado.
- **Superado em 08/05:** push/deploy publicados. Ainda pendente: revisar visual, concluir verificacao no Meta Business Suite se necessario e limpar worktrees temporarios apenas com autorizacao.

## Log de Atualizacoes - Meta / Dominio - 08/05/2026

- **Dominio oficial:** `riegosdev.cloud` aplicado em metadata, Open Graph, alternates e sitemap.
- **Paginas legais:** `/privacidade`, `/termos` e `/exclusao-de-dados` criadas, publicadas e verificadas com HTTP `200`.
- **Footer:** links legais publicados no rodape.
- **Meta:** metatag `facebook-domain-verification` adicionada ao `<head>` da home e verificada no HTML publico.
- **Deploy:** commits `d488788` e `1faa9e8` publicados em `origin/master`; GitHub Actions de deploy na VPS concluiu com sucesso.

## Log de Atualizacoes - Tracking / Clarity - 14/05/2026

- **Microsoft Clarity:** Project ID `wqzbfoy9h9` registrado em `.env.local`.
- **Tracking:** baseline ja cobre page view, scroll depth, section view e cliques nos CTAs principais de WhatsApp.
- **Documentacao:** criada nota [[Tracking e Clarity - Riegos Dev]] e atualizadas notas de retomada/mapa/proximos passos.
- **Verificacao:** `npm run lint`, `npm run check:seo` e `npm run build` passaram em 2026-05-14.
- **Pendente:** configurar a env var no build da VPS/GitHub Actions e validar o script em producao.
- **Deploy validado:** GitHub Actions `25862193507` passou e o bundle publico contem `clarity.ms/tag` com `wqzbfoy9h9`.

## Modelo Codex Recomendado

- Planejamento, revisao critica, merge/deploy: usar `GPT-5.4` ou superior.
- Execucao de checklist ja aprovado: pode usar modelo menor/barato para economizar tokens.
- Bugs visuais, conflitos, CI, refatoracao em varios arquivos: voltar para `GPT-5.4`.
- Regra simples: modelo forte para decidir; modelo barato para executar tarefas mecanicas; modelo forte para revisar antes de publicar.

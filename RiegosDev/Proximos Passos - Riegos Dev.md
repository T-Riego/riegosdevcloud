# Próximos Passos - Riegos Dev

Atualizado em: 2026-05-06

## Status Atual - Redesign RiegosDev

- [x] Redesign estilo referencia implementado e mergeado localmente em `master`.
- [x] CTA principal alterado para diagnostico gratuito.
- [x] Hero, servicos, processo, projetos, diagnostico, CTA final e footer atualizados.
- [x] Conteudo PT-BR e EN mantidos com paridade.
- [x] Verificacao registrada: `npm run lint` com 0 erros/4 warnings existentes; `npm run build` passou.
- [ ] Tiago revisar visual final no navegador.
- [ ] Decidir integracao externa: push direto, PR ou deploy.
- [ ] Limpar worktrees temporarios `.claude/worktrees/agent-*` somente com autorizacao.
- [ ] Decidir se `NagoaDev Textos Site.pdf` deve entrar no Git ou ficar local.

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

- [ ] Confirmar domínio final antes de manter `https://riegosdev.com` em metadata e sitemap.
- [ ] Adicionar imagem Open Graph real.
- [ ] Validar metadados em PT-BR e EN.
- [ ] Definir estratégia de deploy: Vercel, VPS ou outro ambiente.

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
- **Pendente:** revisar visual, decidir push/PR/deploy e limpar worktrees temporarios apenas com autorizacao.

## Modelo Codex Recomendado

- Planejamento, revisao critica, merge/deploy: usar `GPT-5.4` ou superior.
- Execucao de checklist ja aprovado: pode usar modelo menor/barato para economizar tokens.
- Bugs visuais, conflitos, CI, refatoracao em varios arquivos: voltar para `GPT-5.4`.
- Regra simples: modelo forte para decidir; modelo barato para executar tarefas mecanicas; modelo forte para revisar antes de publicar.

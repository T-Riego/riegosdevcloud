# Próximos Passos - Riegos Dev

Atualizado em: 2026-05-05

## Design & Layout (Stitch Visual Refresh)

- [x] Aplicar nova paleta de cores light e remover tema dark.
- [x] Refatorar Hero, Services, Portfolio e Footer para o novo design minimalista.
- [x] Corrigir conflitos de Tailwind V4 no layout responsivo (resolvido bug de quebra de grid/texto).
- [ ] Trocar imagens de placeholders do Stitch por imagens/prints reais dos cases.

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

# Animacoes - Riegos Dev

Atualizado em: 2026-05-06

## Estado atual

O projeto usa animacoes de forma pontual. A prioridade e clareza, performance e legibilidade.

## Diretrizes

- Usar animacoes discretas, entre 150ms e 300ms para microinteracoes.
- Animar preferencialmente `transform` e `opacity`.
- Evitar animacoes decorativas que prejudiquem leitura.
- Respeitar `prefers-reduced-motion` quando adicionar novas animacoes.
- Nao adicionar particulas, typewriter ou fundos animados pesados.
- Nao instalar Anime.js sem necessidade; a stack atual ja possui `motion`.

## Componentes relacionados

- `components/ui/SmoothScroll.tsx`: Lenis.
- `components/ui/AnimateOnScroll.tsx`: wrapper legado/compartilhado para animacao de entrada.
- `components/ui/ScrollAnimator.tsx` e `components/ui/ScrollAnimations.tsx`: revisar uso antes de remover.

## Recomendacao

Para o redesign atual, priorizar composicao, hierarquia, copy e espaco visual. Animacao deve apoiar interacao, nao tentar compensar layout confuso.

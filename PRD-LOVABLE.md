# PRD - Riegos Dev: Site Institucional

## Visao Geral

Site profissional da Riegos Dev para apresentar servicos de automacao inteligente, atendimento via WhatsApp, sites/landing pages, videos e marketing com IA.

O objetivo principal e converter visitantes em conversas qualificadas no WhatsApp com uma experiencia clara, premium e facil de entender.

## Estado Atual

- Next.js App Router.
- SPA em uma rota principal.
- Bilingue PT-BR/EN com toggle em React Context.
- Light theme como direcao oficial.
- Sem dark theme como base.
- Sem particulas no hero, header ou background.
- Hero atual em duas colunas, com copy forte, CTAs e imagem.
- Paleta clara com ciano como assinatura visual.

## Stack Tecnica

| Tecnologia | Uso |
|---|---|
| Next.js 16.2.2 | App Router, metadata, sitemap |
| React 19.2.4 | UI |
| TypeScript | Tipagem |
| Tailwind CSS 4 | Tokens e utilitarios |
| motion | Animacoes pontuais |
| Lenis | Smooth scroll |
| lucide-react / Material Symbols | Icones |

## Design System

Tokens principais ficam em `app/globals.css`.

| Papel | Valor atual |
|---|---|
| Background | `#f7f9fb` |
| Surface | `#f7f9fb` / `#ffffff` |
| Surface low | `#f2f4f6` |
| Primary | `#006a6a` |
| Primary container | `#00ffff` |
| Text principal | `#191c1e` |
| Texto secundario | `#545f73` |
| WhatsApp | Verde oficial nos CTAs especificos |

## Estrutura Atual da Pagina

1. Header
2. Hero
3. Servicos
4. Processo
5. Portfolio
6. CTA final
7. Footer
8. WhatsApp FAB

## Diretrizes de Redesign

- Manter as cores atuais.
- Melhorar textos e hierarquia de leitura.
- Evitar excesso de cards pesados.
- Alternar blocos visuais para facilitar entendimento do cliente.
- Usar imagens reais dos cases quando disponiveis.
- Manter foco em WhatsApp e demonstracao gratuita.
- Garantir responsividade mobile.
- Evitar qualquer retorno a instrucoes antigas de dark theme, particulas e typewriter.

## Conteudo Central

O conteudo editavel vive em:

- `lib/content/pt-BR.ts`
- `lib/content/en.ts`

O ideal e evitar strings visiveis inline nos componentes novos.

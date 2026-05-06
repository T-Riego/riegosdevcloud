# Riegos Dev - Contexto Atual

## Projeto

Site institucional da Riegos Dev, marca de automacao inteligente, atendimento via WhatsApp, marketing com IA e desenvolvimento de solucoes digitais.

O projeto atual e uma landing page em Next.js App Router, React, TypeScript e Tailwind CSS v4. A pagina e bilingue PT-BR/EN via `LocaleContext`, sem rotas por idioma.

## Direcao Visual Vigente

- Light theme obrigatorio.
- Nao usar dark theme como base.
- Nao usar particulas no hero, header ou fundo.
- Manter a assinatura em ciano, usando os tokens atuais de `app/globals.css`.
- Visual desejado: claro, premium, moderno, tecnico, com bom respiro e foco em conversao.
- Evitar voltar para briefings antigos que citam fundo preto, glow pesado ou hero com particulas.

## Stack Real

- Next.js 16.2.2
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- `motion` 12 para animacoes quando necessario
- Lenis para smooth scroll
- Lucide e Material Symbols para icones

## Arquitetura

- `app/page.tsx`: composicao da landing page.
- `app/layout.tsx`: metadata, fonte Inter e `LocaleProvider`.
- `app/globals.css`: tokens do tema claro e utilitarios globais.
- `lib/content/pt-BR.ts`: fonte principal de conteudo e tipo `SiteContent`.
- `lib/content/en.ts`: traducao inglesa validada contra `SiteContent`.
- `components/layout`: Header e Footer.
- `components/sections`: Hero, Services, Portfolio e CTA atuais.
- `components/ui`: utilitarios visuais compartilhados.

## Regras de Conteudo

- Preferir conteudo visivel vindo de `lib/content/pt-BR.ts` e `lib/content/en.ts`.
- Se houver texto inline legado em componentes, migrar aos poucos para os arquivos de conteudo quando tocar na secao.
- CTA principal continua focado em WhatsApp.

## Restauracao

Existe uma tag Git de restauracao chamada `restore-before-light-redesign`, criada antes da limpeza dos documentos antigos e dos ajustes de redesign.

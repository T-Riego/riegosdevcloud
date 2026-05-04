# Riegos Dev - Hub do projeto

Atualizado em: 2026-05-04

Este cofre documenta o site institucional da Riegos Dev a partir do estado real do repositório `F:\RiegosDev\RiegosdevCloud`.

## Notas principais

- [[Visao Geral - Riegos Dev]]
- [[Stack - Riegos Dev]]
- [[Arquitetura - Riegos Dev]]
- [[Mapa do Codigo - Riegos Dev]]
- [[Proximos Passos - Riegos Dev]]
- [[Briefing Design Atual - Riegos Dev]]

## Estado atual

O projeto é uma SPA institucional em Next.js com App Router, bilíngue PT-BR/EN, dark theme, animações, partículas no hero e conversão via WhatsApp.

O conteúdo atual posiciona a Riegos Dev como solução de automação inteligente, atendimento 24/7 via WhatsApp, captação de clientes e marketing digital com IA. A seção Sobre apresenta Daniel Riêgo e Tiago Riêgo como responsáveis pela operação.

## Comandos úteis

```bash
npm run dev
npm run build
npm run lint
```

## Observações rápidas

- O PRD antigo ainda cita Next.js 15, mas o `package.json` atual usa Next.js 16.2.2.
- A documentação antiga falava apenas em Tiago; o conteúdo atual do site já está em formato de equipe com Daniel e Tiago.
- O conteúdo central vive em `lib/content/pt-BR.ts` e `lib/content/en.ts`.
- O WhatsApp principal configurado no site é `+55 31 98896-9661`.

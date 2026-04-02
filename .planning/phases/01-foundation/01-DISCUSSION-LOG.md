# Phase 1: Foundation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-02
**Phase:** 01-foundation
**Areas discussed:** Fonte tipografica, Sistema i18n, Layout do header, Paleta de cores

---

## Fonte tipografica

| Option | Description | Selected |
|--------|-------------|----------|
| Space Grotesk (Recommended) | Mais tech/moderna, geometrica — combina melhor com marca de IA | |
| Inter | Mais neutra e legivel, padrao da web moderna | |
| Combinar ambas | Space Grotesk para titulos, Inter para corpo de texto | ✓ |

**User's choice:** Combinar ambas — Space Grotesk para titulos, Inter para corpo
**Notes:** None

| Option | Description | Selected |
|--------|-------------|----------|
| 3 pesos (Recommended) | Regular (400), Medium (500), Bold (700) | ✓ |
| 4 pesos | Light (300), Regular, Semibold (600), Bold | |
| Voce decide | Claude escolhe | |

**User's choice:** 3 pesos (400, 500, 700)

---

## Sistema i18n

| Option | Description | Selected |
|--------|-------------|----------|
| React Context puro (Recommended) | Context + localStorage, sem biblioteca extra | ✓ |
| next-intl standalone | Biblioteca dedicada, mais features | |
| Voce decide | Claude escolhe | |

**User's choice:** React Context puro

| Option | Description | Selected |
|--------|-------------|----------|
| TypeScript tipado (Recommended) | pt-BR.ts e en.ts com tipos | ✓ |
| JSON | pt-BR.json e en.json — sem tipagem | |
| Voce decide | Claude escolhe | |

**User's choice:** TypeScript tipado

| Option | Description | Selected |
|--------|-------------|----------|
| PT-BR (Recommended) | Publico principal e brasileiro | ✓ |
| Detectar do browser | Usar navigator.language | |
| Voce decide | Claude escolhe | |

**User's choice:** PT-BR como padrao

---

## Layout do header

| Option | Description | Selected |
|--------|-------------|----------|
| Texto estilizado | "Riegos Dev" em Space Grotesk bold com acento ciano | ✓ |
| Logo SVG | Icone/simbolo + texto | |
| Voce decide | Claude escolhe | |

**User's choice:** Texto estilizado

| Option | Description | Selected |
|--------|-------------|----------|
| Todos as secoes | Sobre, Servicos, Portfolio, Depoimentos, Processo, Contato | ✓ |
| Principais apenas | Servicos, Portfolio, Contato | |
| Voce decide | Claude escolhe | |

**User's choice:** Todos as secoes

| Option | Description | Selected |
|--------|-------------|----------|
| Hamburger classico (Recommended) | Icone 3 linhas, abre sidebar/overlay | ✓ |
| Menu bottom sheet | Abre de baixo para cima | |
| Voce decide | Claude escolhe | |

**User's choice:** Hamburger classico

| Option | Description | Selected |
|--------|-------------|----------|
| Direita do header (Recommended) | Ao lado do CTA, sempre visivel no desktop | ✓ |
| Dentro do menu mobile | Economiza espaco | |
| Ambos | Header desktop + menu mobile | |

**User's choice:** Direita do header

---

## Paleta de cores

| Option | Description | Selected |
|--------|-------------|----------|
| Preto quase puro (Recommended) | #0A0A0A ou #0D0D0D | ✓ |
| Grafite escuro | #1A1A2E ou #16213E — com toque azulado | |
| Voce decide | Claude escolhe | |

**User's choice:** Preto quase puro (#0A0A0A)

| Option | Description | Selected |
|--------|-------------|----------|
| So ciano | #00FFFF como unica cor de destaque | ✓ |
| Ciano + roxo neon | #00FFFF + #8B5CF6 | |
| Ciano com gradiente | #00FFFF → #0066FF | |

**User's choice:** So ciano (#00FFFF)

| Option | Description | Selected |
|--------|-------------|----------|
| Branco suave (Recommended) | #E0E0E0 corpo, #FFFFFF titulos | ✓ |
| Branco puro | #FFFFFF para tudo | |
| Voce decide | Claude escolhe | |

**User's choice:** Branco suave (#E0E0E0 corpo, #FFFFFF titulos)

| Option | Description | Selected |
|--------|-------------|----------|
| Cinza levemente mais claro (Recommended) | #111111 com borda ciano no hover | ✓ |
| Glassmorphism | Cards semi-transparentes com blur | |
| Voce decide | Claude escolhe | |

**User's choice:** Cinza levemente mais claro (#111111)

---

## Claude's Discretion

- Gradient styles and subtle color variations
- Spacing system
- Header scroll animation
- Hamburger menu animation

## Deferred Ideas

None

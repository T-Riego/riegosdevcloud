# Riegos Dev — Site Institucional

## What This Is

Site profissional e institucional da Riegos Dev, marca de engenharia de IA e automacao inteligente fundada por Tiago. Single Page Application bilingue (PT-BR/EN) com dark theme, animacoes de particulas, e foco em conversao. O site apresenta servicos de automacao com IA, agentes para WhatsApp, desenvolvimento full stack, e captacao inteligente de clientes.

## Core Value

Transmitir credibilidade tecnica e modernidade, convertendo visitantes em contatos qualificados via WhatsApp.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section com particulas animadas, headline impactante e typewriter effect
- [ ] Secao Sobre com apresentacao do Tiago e badges de ferramentas
- [ ] Cards de servicos animados (6 servicos)
- [ ] Portfolio com cards expandiveis (3 projetos)
- [ ] Depoimentos com carousel/grid e estrelas
- [ ] Timeline de processo de trabalho (4 etapas)
- [ ] CTA final com botao WhatsApp e formulario que redireciona para WhatsApp
- [ ] Footer com logo, links rapidos e frase de marca
- [ ] Toggle bilingue PT-BR/EN no header
- [ ] Dark theme com ciano eletrico (#00FFFF) e gradientes
- [ ] 100% responsivo mobile-first
- [ ] Animacoes ao scroll (fade/slide)
- [ ] Smooth scroll entre secoes
- [ ] SEO otimizado
- [ ] Performance (lazy load, code splitting)

### Out of Scope

- Backend/API propria — formulario redireciona para WhatsApp
- Blog — nao mencionado, pode ser v2
- Sistema de login/cadastro — site institucional apenas
- E-commerce/pagamentos — nao aplicavel
- CMS/painel admin — conteudo estatico por enquanto

## Context

- Tiago e engenheiro de IA especializado em automacao inteligente, agentes de IA, e desenvolvimento full stack via vibecoding
- Ferramentas que domina: n8n, Cursor, Supabase, GPT/Claude APIs, WhatsApp API
- Dominio: riegosdev.cloud
- WhatsApp: +55 31 98896-9661
- Foto de perfil: placeholder por enquanto
- Posicionamento: moderno, tecnico mas acessivel, confiante, inovador
- Paleta: dark theme — preto/grafite profundo, acento ciano eletrico (#00FFFF), gradientes sutis

## Constraints

- **Tech Stack**: Next.js (SSR/SSG para SEO)
- **Idioma**: Bilingue PT-BR/EN com toggle
- **Design**: Dark theme obrigatorio, particulas no hero
- **Fonte**: Inter ou Space Grotesk (Google Fonts)
- **Performance**: Lazy load, code splitting, imagens otimizadas
- **Deploy**: Estatico-ready (Vercel/Netlify/qualquer CDN)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js ao inves de HTML puro | Melhor SEO, componentizacao, escalabilidade futura | — Pending |
| Bilingue desde o inicio | Alcance internacional, profissionalismo | — Pending |
| Formulario via WhatsApp | Simplicidade, sem backend necessario | — Pending |
| Dark theme com ciano | Identidade tech moderna, diferenciacao visual | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-03 — Phase 1 Foundation complete (scaffold, i18n, layout shells)*

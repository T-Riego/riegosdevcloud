# Requirements: Riegos Dev — Site Institucional

**Defined:** 2026-04-02
**Core Value:** Transmitir credibilidade tecnica e modernidade, convertendo visitantes em contatos qualificados via WhatsApp.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Hero

- [x] **HERO-01**: Visitante ve headline impactante com proposta de valor clara ao carregar a pagina
- [x] **HERO-02**: Visitante ve animacao de particulas interativas (ciano eletrico) no background do hero
- [x] **HERO-03**: Visitante ve texto rotacionando especialidades com efeito typewriter
- [x] **HERO-04**: Visitante pode clicar em "Ver Projetos" para navegar ao portfolio ou "Falar com Especialista" para abrir WhatsApp

### Navigation

- [x] **NAV-01**: Header sticky que permanece fixo ao rolar a pagina com anchor links para cada secao
- [x] **NAV-02**: Smooth scroll entre secoes ao clicar nos links de navegacao
- [x] **NAV-03**: Toggle bilingue PT-BR/EN no header que alterna todo o conteudo do site
- [x] **NAV-04**: Botao flutuante de WhatsApp sempre visivel com link direto para +55 31 98896-9661

### About

- [x] **ABOUT-01**: Secao Sobre apresenta Tiago como fundador com foto (placeholder) e biografia
- [x] **ABOUT-02**: Badges visuais das ferramentas dominadas (n8n, Cursor, Supabase, GPT/Claude APIs, WhatsApp API)

### Services

- [x] **SERV-01**: 6 cards de servicos com icone, titulo e descricao
- [x] **SERV-02**: Cards com animacao de glow no hover
- [x] **SERV-03**: Servicos cobertos: Automacao com IA, Agentes WhatsApp, Captacao de Clientes, Sites/Landing Pages, Apps Full Stack, Videos de Marketing

### Portfolio

- [x] **PORT-01**: 3 cards de projetos com titulo, descricao, tecnologias e status
- [x] **PORT-02**: Cards expandiveis com modal ou accordion mostrando detalhes do projeto
- [x] **PORT-03**: Card placeholder "Novo Projeto em Breve" para composicao visual

### Testimonials

- [x] **TEST-01**: Secao com carousel ou grid de 3 depoimentos placeholder
- [x] **TEST-02**: Cada card com texto em italico, nome, empresa, avatar circular e 5 estrelas
- [x] **TEST-03**: Animacao de entrada suave (fade-in ao scroll)

### Process

- [x] **PROC-01**: Timeline visual (horizontal ou vertical) com 4 etapas: Diagnostico, Estrategia, Desenvolvimento, Entrega & Suporte

### Contact

- [x] **CONT-01**: CTA final com headline "Pronto para automatizar seu crescimento?"
- [x] **CONT-02**: Formulario simples (Nome, E-mail, Mensagem) que redireciona para WhatsApp com mensagem pre-preenchida
- [x] **CONT-03**: Botao de WhatsApp destacado com icone e numero

### Footer

- [x] **FOOT-01**: Footer com logo Riegos Dev, links rapidos para secoes, frase de marca e copyright
- [x] **FOOT-02**: Links placeholder para redes sociais

### Design System

- [x] **DSGN-01**: Dark theme com preto/grafite profundo e acento ciano eletrico (#00FFFF) com gradientes sutis
- [x] **DSGN-02**: Fonte Inter ou Space Grotesk via Google Fonts (next/font)
- [x] **DSGN-03**: 100% responsivo mobile-first
- [x] **DSGN-04**: Animacoes ao scroll (fade/slide) em todas as secoes via Framer Motion

### Performance & SEO

- [x] **PERF-01**: Lazy loading de imagens e code splitting
- [x] **PERF-02**: Particulas reduzidas/desabilitadas em mobile para performance
- [x] **SEO-01**: Metadata otimizado com generateMetadata do Next.js (titulo, descricao, Open Graph)
- [x] **SEO-02**: Sitemap automatico e tags de idioma para bilingue

### i18n

- [x] **I18N-01**: Todo conteudo textual externalizado em arquivos de traducao PT-BR e EN
- [x] **I18N-02**: Toggle no header alterna idioma instantaneamente sem recarregar pagina
- [x] **I18N-03**: Preferencia de idioma persistida em localStorage

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Analytics & Tracking

- **ANLY-01**: Google Analytics ou Plausible integrado
- **ANLY-02**: Cookie consent banner (necessario com analytics)

### Content

- **BLOG-01**: Secao de blog com artigos sobre IA e automacao
- **CMS-01**: Painel admin para atualizar conteudo sem deploy

### Social Proof

- **SOCL-01**: Depoimentos reais (substituir placeholders)
- **SOCL-02**: Video testimonials ou demo reels
- **SOCL-03**: Logos de clientes/parceiros

### SEO Avancado

- **SEOA-01**: Schema.org structured data (ProfessionalService)
- **SEOA-02**: Estrategia de conteudo SEO com blog

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / API propria | Formulario redireciona para WhatsApp, zero infra necessaria |
| Login / cadastro de usuarios | Site institucional, sem area logada |
| E-commerce / pagamentos | Venda de servicos, nao produtos |
| Chat widget (nao-WhatsApp) | WhatsApp e o unico canal de conversao |
| Dark/light mode toggle | Dark theme e identidade da marca, nao preferencia |
| Social media feed embeds | Iframes pesados, impacto em performance |
| Calendario de agendamento | Conflita com estrategia WhatsApp-first |
| Paginacao/infinite scroll | 3-6 items de portfolio nao justificam |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| DSGN-01 | Phase 1 | Complete |
| DSGN-02 | Phase 1 | Complete |
| I18N-01 | Phase 1 | Complete |
| NAV-01 | Phase 1 | Complete |
| FOOT-01 | Phase 1 | Complete |
| FOOT-02 | Phase 1 | Complete |
| HERO-01 | Phase 2 | Complete |
| HERO-04 | Phase 2 | Complete |
| ABOUT-01 | Phase 2 | Complete |
| ABOUT-02 | Phase 2 | Complete |
| SERV-01 | Phase 2 | Complete |
| SERV-02 | Phase 2 | Complete |
| SERV-03 | Phase 2 | Complete |
| TEST-01 | Phase 2 | Complete |
| TEST-02 | Phase 2 | Complete |
| PROC-01 | Phase 2 | Complete |
| HERO-02 | Phase 3 | Complete |
| HERO-03 | Phase 3 | Complete |
| NAV-02 | Phase 3 | Complete |
| NAV-03 | Phase 3 | Complete |
| NAV-04 | Phase 3 | Complete |
| PORT-01 | Phase 3 | Complete |
| PORT-02 | Phase 3 | Complete |
| PORT-03 | Phase 3 | Complete |
| TEST-03 | Phase 3 | Complete |
| DSGN-04 | Phase 3 | Complete |
| PERF-02 | Phase 3 | Complete |
| I18N-02 | Phase 3 | Complete |
| I18N-03 | Phase 3 | Complete |
| CONT-01 | Phase 4 | Complete |
| CONT-02 | Phase 4 | Complete |
| CONT-03 | Phase 4 | Complete |
| DSGN-03 | Phase 4 | Complete |
| PERF-01 | Phase 4 | Complete |
| SEO-01 | Phase 4 | Complete |
| SEO-02 | Phase 4 | Complete |

**Coverage:**
- v1 requirements: 36 total
- Mapped to phases: 36
- Unmapped: 0

---
*Requirements defined: 2026-04-02*
*Last updated: 2026-04-02 after roadmap creation*

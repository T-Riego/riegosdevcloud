# Requirements: Riegos Dev — Site Institucional

**Defined:** 2026-04-02
**Core Value:** Transmitir credibilidade tecnica e modernidade, convertendo visitantes em contatos qualificados via WhatsApp.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Hero

- [ ] **HERO-01**: Visitante ve headline impactante com proposta de valor clara ao carregar a pagina
- [ ] **HERO-02**: Visitante ve animacao de particulas interativas (ciano eletrico) no background do hero
- [ ] **HERO-03**: Visitante ve texto rotacionando especialidades com efeito typewriter
- [ ] **HERO-04**: Visitante pode clicar em "Ver Projetos" para navegar ao portfolio ou "Falar com Especialista" para abrir WhatsApp

### Navigation

- [ ] **NAV-01**: Header sticky que permanece fixo ao rolar a pagina com anchor links para cada secao
- [ ] **NAV-02**: Smooth scroll entre secoes ao clicar nos links de navegacao
- [ ] **NAV-03**: Toggle bilingue PT-BR/EN no header que alterna todo o conteudo do site
- [ ] **NAV-04**: Botao flutuante de WhatsApp sempre visivel com link direto para +55 31 98896-9661

### About

- [ ] **ABOUT-01**: Secao Sobre apresenta Tiago como fundador com foto (placeholder) e biografia
- [ ] **ABOUT-02**: Badges visuais das ferramentas dominadas (n8n, Cursor, Supabase, GPT/Claude APIs, WhatsApp API)

### Services

- [ ] **SERV-01**: 6 cards de servicos com icone, titulo e descricao
- [ ] **SERV-02**: Cards com animacao de glow no hover
- [ ] **SERV-03**: Servicos cobertos: Automacao com IA, Agentes WhatsApp, Captacao de Clientes, Sites/Landing Pages, Apps Full Stack, Videos de Marketing

### Portfolio

- [ ] **PORT-01**: 3 cards de projetos com titulo, descricao, tecnologias e status
- [ ] **PORT-02**: Cards expandiveis com modal ou accordion mostrando detalhes do projeto
- [ ] **PORT-03**: Card placeholder "Novo Projeto em Breve" para composicao visual

### Testimonials

- [ ] **TEST-01**: Secao com carousel ou grid de 3 depoimentos placeholder
- [ ] **TEST-02**: Cada card com texto em italico, nome, empresa, avatar circular e 5 estrelas
- [ ] **TEST-03**: Animacao de entrada suave (fade-in ao scroll)

### Process

- [ ] **PROC-01**: Timeline visual (horizontal ou vertical) com 4 etapas: Diagnostico, Estrategia, Desenvolvimento, Entrega & Suporte

### Contact

- [ ] **CONT-01**: CTA final com headline "Pronto para automatizar seu crescimento?"
- [ ] **CONT-02**: Formulario simples (Nome, E-mail, Mensagem) que redireciona para WhatsApp com mensagem pre-preenchida
- [ ] **CONT-03**: Botao de WhatsApp destacado com icone e numero

### Footer

- [ ] **FOOT-01**: Footer com logo Riegos Dev, links rapidos para secoes, frase de marca e copyright
- [ ] **FOOT-02**: Links placeholder para redes sociais

### Design System

- [ ] **DSGN-01**: Dark theme com preto/grafite profundo e acento ciano eletrico (#00FFFF) com gradientes sutis
- [ ] **DSGN-02**: Fonte Inter ou Space Grotesk via Google Fonts (next/font)
- [ ] **DSGN-03**: 100% responsivo mobile-first
- [ ] **DSGN-04**: Animacoes ao scroll (fade/slide) em todas as secoes via Framer Motion

### Performance & SEO

- [ ] **PERF-01**: Lazy loading de imagens e code splitting
- [ ] **PERF-02**: Particulas reduzidas/desabilitadas em mobile para performance
- [ ] **SEO-01**: Metadata otimizado com generateMetadata do Next.js (titulo, descricao, Open Graph)
- [ ] **SEO-02**: Sitemap automatico e tags de idioma para bilingue

### i18n

- [ ] **I18N-01**: Todo conteudo textual externalizado em arquivos de traducao PT-BR e EN
- [ ] **I18N-02**: Toggle no header alterna idioma instantaneamente sem recarregar pagina
- [ ] **I18N-03**: Preferencia de idioma persistida em localStorage

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
| (To be filled by roadmapper) | | |

**Coverage:**
- v1 requirements: 30 total
- Mapped to phases: 0
- Unmapped: 30

---
*Requirements defined: 2026-04-02*
*Last updated: 2026-04-02 after initial definition*

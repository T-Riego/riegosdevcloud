# PRD — Riegos Dev: Site Institucional

## Visão Geral

Site profissional e institucional da **Riegos Dev**, marca de engenharia de IA e automação inteligente fundada por Tiago. Single Page Application bilingue (PT-BR/EN) com dark theme, animações de partículas, e foco em conversão via WhatsApp.

**Core Value:** Transmitir credibilidade técnica e modernidade, convertendo visitantes em contatos qualificados via WhatsApp.

---

## Stack Técnica

| Tecnologia | Versão | Função |
|---|---|---|
| Next.js | 15+ | Framework (App Router, SSG) |
| React | 19+ | UI Runtime |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility CSS com `@theme` design tokens |
| Framer Motion | 11+ (package: `motion`) | Scroll animations, modal transitions |
| tsParticles | 3.x (`@tsparticles/react` + `@tsparticles/slim`) | Partículas no hero |
| react-type-animation | 3.x | Typewriter effect |
| Lenis | 1.x | Smooth scroll |
| lucide-react | 1.7+ | Ícones SVG nos service cards |

---

## Design System

### Paleta de Cores (Dark Theme obrigatório)

| Token | Valor | Uso |
|---|---|---|
| `background` | `#0A0A0A` | Fundo principal (preto profundo) |
| `surface` | `#111111` | Cards, inputs, containers |
| `accent` | `#00FFFF` | Ciano elétrico — CTAs, ícones, destaques, glow |
| `text-primary` | `#FFFFFF` | Texto principal |
| `text-secondary` | `#E0E0E0` | Texto secundário, descrições |

### Tipografia

| Função | Fonte | Pesos |
|---|---|---|
| Headings | **Space Grotesk** | 400, 500, 700 |
| Body | **Inter** | 400, 500, 700 |

- Headlines usam `clamp()` responsivo: `text-[clamp(2.25rem,6vw,4.5rem)]` no hero, `text-[clamp(1.75rem,4vw,2.5rem)]` nas seções
- Line-height de 1.1 para headlines, 1.75 para body text
- Tracking tight (`-0.02em`) nos headings

### Efeitos Visuais

- **Glow hover nos cards:** `hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:border-accent/40 hover:-translate-y-1` com `transition-all duration-300 ease-out`
- **Section dividers:** Linha CSS com gradient ciano e `glow-pulse` animation (4s ease-in-out infinite)
- **Radial gradient sutil** no hero: `bg-[radial-gradient(ellipse_at_center_top,rgba(0,255,255,0.06)_0%,transparent_60%)]`
- **Focus visible:** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent` em todos os interativos
- **Active feedback:** `active:scale-[0.98]` nos botões
- **prefers-reduced-motion:** Respeitar — desabilitar glow-pulse e reduzir animações

### Acessibilidade (WCAG AA)

- Contraste mínimo 4.5:1 para texto
- Touch targets mínimo 44x44px
- `aria-label` em botões de ícone
- `role="img"` com `aria-label` nas estrelas de rating
- `sr-only` text alternativo para typewriter
- `focus-visible` rings em todos os interativos
- Labels em todos os inputs de formulário

---

## Estrutura da Página (SPA — Single Page)

### 1. Header (sticky)

- Logo: "Riegos " em branco + "Dev" em ciano (`#00FFFF`)
- 6 anchor links: Sobre, Serviços, Portfólio, Depoimentos, Processo, Contato
- Toggle PT-BR/EN no canto direito
- Mobile: hamburger → overlay fullscreen com nav + toggle
- Background transparente → `bg-background/90 backdrop-blur-md` ao scrollar
- Scroll lock no body quando menu mobile está aberto

### 2. Hero Section

- **Headline:** "Inteligência que escala o seu negócio" (h1, clamp responsivo)
- **Typewriter:** Cicla especialidades — "Automação com IA", "Agentes para WhatsApp", "Captação Inteligente de Clientes", "Desenvolvimento Full Stack" (com `react-type-animation`, key={locale} para resetar ao trocar idioma)
- **Subheadline:** Texto descritivo secundário
- **2 CTAs:**
  - "Ver Projetos" → âncora `#portfolio` (bg-accent, text-background)
  - "Falar com Especialista" → link `wa.me` (border-accent, text-accent)
- **Partículas:** tsParticles com preset slim, cor ciano, links entre partículas (opacity 0.15), 60 partículas desktop / 20 mobile, velocidade 0.8
- **Layout:** `min-h-[90vh]`, centralizado, `overflow-hidden`
- Partículas carregadas via `dynamic()` com `ssr: false`

### 3. Sobre (About) — `id="sobre"`

- Section title em ciano uppercase tracking-widest
- Headline: "Quem está por trás da Riegos Dev"
- Layout: foto placeholder (div 64x64 rounded-2xl com inicial "T") à esquerda + bio à direita (flex-col em mobile)
- Bio text com `leading-[1.75]`
- **Tool badges:** 5 pills — n8n, Cursor, Supabase, GPT / Claude APIs, WhatsApp API
  - Estilo: `rounded-full border border-accent/30 text-accent text-xs bg-accent/5`
  - Hover: `hover:border-accent/60 hover:bg-accent/10`

### 4. Serviços (Services) — `id="servicos"`

- Grid 1 col mobile / 2 cols tablet / 3 cols desktop (`gap-6`)
- **6 cards:**

| ID | Título | Ícone (lucide-react) |
|---|---|---|
| automation | Automação com IA | `Bot` |
| whatsapp | Agentes WhatsApp | `MessageCircle` |
| leads | Captação de Clientes | `Users` |
| sites | Sites / Landing Pages | `Globe` |
| apps | Apps Full Stack | `Code` |
| videos | Vídeos de Marketing | `Video` |

- Cada card: ícone em container `bg-accent/10 rounded-lg` (12x12, icon 6x6) + título + descrição
- **Glow hover:** `hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:border-accent/40 hover:-translate-y-1`
- Ícone container: `group-hover:bg-accent/20`

### 5. Portfólio (Portfolio) — `id="portfolio"`

- Grid 1 col mobile / 3 cols desktop
- **3 cards (button elements):**
  1. Agente de Atendimento WhatsApp — tech: n8n, WhatsApp Business API, GPT-4, Google Calendar API — status: Concluído
  2. Automação de Captação de Leads — tech: n8n, Supabase, Resend, Meta Ads API — status: Concluído
  3. Novo Projeto em Breve — sem tech, sem click — status: Em breve (opacity 60%, disabled)
- Cada card mostra: badge de status, título, descrição, tech tags
- Cards 1-2: clicáveis → abrem **modal** com:
  - Animação Framer Motion (scale 0.95→1, opacity, backdrop blur)
  - Descrição completa, lista de tecnologias como pills
  - Botão X para fechar + click no backdrop fecha
- Card 3: visual de placeholder (não clicável)

### 6. Depoimentos (Testimonials) — `id="depoimentos"`

- Grid 1 col mobile / 3 cols desktop
- **3 cards:**

| Nome | Empresa | Estrelas |
|---|---|---|
| Ana Paula Ferreira | Clínica Bem Estar | ★★★★★ |
| Carlos Mendes | Imobiliária Prime | ★★★★★ |
| Fernanda Oliveira | Studio FO Design | ★★★★★ |

- Cada card: estrelas (Unicode ★ em ciano) + quote em itálico com aspas tipográficas + separator border-t + avatar (iniciais em circle `bg-accent/10`) + nome + empresa
- Hover sutil: `hover:border-accent/20 hover:-translate-y-1`

### 7. Processo (Process) — `id="processo"`

- **4 passos:**

| Nº | Título | Descrição |
|---|---|---|
| 01 | Diagnóstico | Mapeamento de processos e gargalos |
| 02 | Estratégia | Desenho da solução técnica |
| 03 | Desenvolvimento | Construção e testes com acompanhamento |
| 04 | Entrega & Suporte | Implantação, treinamento e monitoramento |

- **Desktop:** Grid 4 colunas com linha horizontal contínua conectando os circles
- **Mobile:** Layout vertical com linha vertical contínua à esquerda
- Circles: `w-12 h-12 rounded-full border-2 border-accent bg-background` com `shadow-[0_0_16px_rgba(0,255,255,0.1)]`

### 8. Contato (Contact) — `id="contato"`

- Headline: "Pronto para automatizar seu crescimento?"
- Subheadline descritivo
- **Formulário** (max-w-3xl, centralizado):
  - Nome (text, required)
  - E-mail (email, required)
  - Mensagem (textarea, 4 rows, required)
  - Submit: "Enviar via WhatsApp" com ícone MessageCircle
- **Submit handler:** Monta mensagem com nome/email/mensagem → `window.open(wa.me/...)`
- Inputs: `bg-surface border-surface focus:border-accent/60 focus:ring-1 focus:ring-accent/40`
- Abaixo do form: link direto WhatsApp com número visível

### 9. Footer

- Logo Riegos Dev
- Quick links (âncoras para seções)
- Social links (Instagram, LinkedIn, GitHub — placeholders `href="#"`)
- Tagline: "Inteligência que escala o seu negócio"
- Copyright

### 10. Elementos Globais

- **WhatsApp FAB:** Botão flutuante `fixed bottom-6 right-6`, circle verde `#25D366`, ícone branco, `hover:scale-110`
- **Smooth Scroll:** Lenis com duration 1.2 e easing exponencial
- **Scroll Animations:** Cada seção (exceto hero) fade-in + translateY(40px→0) ao entrar no viewport (`whileInView`, `once: true`)
- **Section Dividers:** Linha CSS gradient ciano entre seções com glow-pulse animation
- **FOUC Prevention:** Inline script no `<head>` que seta `backgroundColor=#0A0A0A` antes do hydrate

---

## i18n — Bilíngue PT-BR / EN

- **Modelo:** React Context (`LocaleContext`) com `useState('pt-BR')` + `localStorage`
- **Sem routing por locale** — toggle instantâneo sem page reload
- **Default:** PT-BR (match server render para evitar hydration mismatch)
- **Persistência:** `localStorage.getItem('locale')` lido em `useEffect` após mount
- **Todo texto** vem de objetos content tipados (`SiteContent`) — zero strings inline no JSX
- **Typewriter:** `key={locale}` para resetar animação ao trocar idioma

---

## SEO

- **Metadata:** Title, description, keywords, authors, creator via Next.js Metadata API
- **Open Graph:** type website, locale pt_BR, alternateLocale en_US
- **Twitter Card:** summary_large_image
- **Sitemap:** `app/sitemap.ts` com alternates pt-BR/en
- **FOUC script:** Não bloqueia indexação (conteúdo estático no HTML)

---

## Performance

- **Partículas:** `dynamic()` com `ssr: false` — não bloqueia first paint
- **Mobile:** 20 partículas (vs 60 desktop), velocidade reduzida
- **Code splitting:** Next.js automático por route + dynamic imports
- **Fonts:** `next/font` self-hosted — zero layout shift
- **Animations:** Apenas `transform` e `opacity` — zero layout shift
- **prefers-reduced-motion:** Respeitado em CSS e animações

---

## Conteúdo Completo (PT-BR)

### Hero
- **Headline:** "Inteligência que escala o seu negócio"
- **Subheadline:** "Automação com IA, agentes para WhatsApp e desenvolvimento full stack para empresas que querem crescer."
- **Typewriter:** "Automação com IA" → "Agentes para WhatsApp" → "Captação Inteligente de Clientes" → "Desenvolvimento Full Stack"
- **CTA 1:** "Ver Projetos"
- **CTA 2:** "Falar com Especialista"

### Sobre
- **Headline:** "Quem está por trás da Riegos Dev"
- **Bio:** "Tiago é engenheiro de IA e automação com foco em soluções práticas que geram resultado. Fundador da Riegos Dev, combina desenvolvimento full stack com integração de modelos de linguagem, agentes autônomos e automações de alto impacto para pequenas e médias empresas."
- **Tools:** n8n, Cursor, Supabase, GPT / Claude APIs, WhatsApp API

### Serviços (6 cards)
1. **Automação com IA** — Processos repetitivos eliminados com agentes inteligentes. Do disparo de e-mails ao processamento de pedidos, tudo automático.
2. **Agentes WhatsApp** — Atendimento 24/7 com agentes treinados no seu negócio. Qualifica leads, responde dúvidas e agenda reuniões sem intervenção humana.
3. **Captação de Clientes** — Funis inteligentes que identificam, qualificam e nutrem leads automaticamente, entregando oportunidades prontas para fechar.
4. **Sites / Landing Pages** — Sites institucionais e landing pages de alta conversão, otimizados para SEO e integrados às suas automações.
5. **Apps Full Stack** — Aplicações web completas com backend robusto, banco de dados escalável e integrações com APIs e serviços externos.
6. **Vídeos de Marketing** — Conteúdo em vídeo produzido com IA — roteiro, locução e edição automatizados para campanhas e redes sociais.

### Portfólio (3 cards)
1. **Agente de Atendimento WhatsApp** — Agente autônomo integrado ao WhatsApp Business que qualifica leads, responde perguntas frequentes e agenda reuniões automaticamente. (Full: Solução completa de atendimento automatizado via WhatsApp Business API. O agente é treinado com base de conhecimento personalizada, usa GPT-4 para respostas naturais e integra com Google Calendar para agendamento. Reduziu o tempo de resposta de 4h para menos de 1 minuto.) — Tech: n8n, WhatsApp Business API, GPT-4, Google Calendar API — Status: Concluído
2. **Automação de Captação de Leads** — Funil automatizado que captura, qualifica e nutre leads de múltiplos canais, entregando oportunidades prontas para o time de vendas. (Full: Pipeline de captação integrado com Meta Ads, Google Ads e formulários web. Qualificação automática via scoring com IA, nutrição por e-mail e WhatsApp, e entrega de leads quentes direto no CRM. Aumentou conversão em 340%.) — Tech: n8n, Supabase, Resend, Meta Ads API — Status: Concluído
3. **Novo Projeto em Breve** — Mais um projeto de automação com IA em desenvolvimento. — Status: Em breve

### Depoimentos (3 cards)
1. **Ana Paula Ferreira** — Clínica Bem Estar — ★★★★★ — "A automação do WhatsApp transformou nosso atendimento. Antes demorávamos horas para responder; agora é instantâneo. Nossa conversão dobrou em 3 meses."
2. **Carlos Mendes** — Imobiliária Prime — ★★★★★ — "O funil de captação que a Riegos Dev criou para nós é incrível. Os leads chegam qualificados e prontos para fechar. ROI de 10x no primeiro trimestre."
3. **Fernanda Oliveira** — Studio FO Design — ★★★★★ — "Site entregue no prazo, com uma qualidade visual que superou nossas expectativas. Integração com WhatsApp funcionando perfeitamente desde o primeiro dia."

### Processo (4 passos)
1. **01 — Diagnóstico** — Entendemos seus processos, gargalos e objetivos. Mapeamos onde a automação gera mais impacto no menor tempo.
2. **02 — Estratégia** — Desenhamos a solução técnica ideal para o seu caso. Definimos ferramentas, integrações e cronograma realista.
3. **03 — Desenvolvimento** — Construímos e testamos cada componente com rigor. Você acompanha o progresso e valida cada etapa.
4. **04 — Entrega & Suporte** — Implantamos, treinamos sua equipe e monitoramos o desempenho. Suporte contínuo para garantir resultados duradouros.

### Contato
- **Headline:** "Pronto para automatizar seu crescimento?"
- **Subheadline:** "Entre em contato e descubra como a IA pode transformar seu negócio."
- **Form:** Nome, E-mail, Mensagem → "Enviar via WhatsApp"
- **WhatsApp:** +55 31 98896-9661
- **Mensagem padrão:** "Olá, vim pelo site e tenho interesse em seus serviços."

### Footer
- **Tagline:** "Inteligência que escala o seu negócio"
- **Copyright:** © 2025 Riegos Dev. Todos os direitos reservados.

---

## O que foi otimizado além do básico

Estas são as melhorias aplicadas via auditoria UI/UX Pro Max que vão além de um scaffold padrão:

1. **Typography responsiva com `clamp()`** — Headlines escalam fluidamente entre mobile e desktop sem breakpoints discretos. Evita texto gigante em telas pequenas ou minúsculo em telas grandes.

2. **Touch targets 44x44px** — Todos os botões e CTAs têm `min-h-[44px]` garantindo usabilidade em touch screens (requisito WCAG 2.5.8).

3. **Focus-visible rings** — Todos os elementos interativos têm `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent` para navegação por teclado.

4. **Active feedback** — `active:scale-[0.98]` nos botões dá feedback tátil imediato ao clicar.

5. **Hover lift effect** — Cards de serviço e depoimento sobem 4px (`hover:-translate-y-1`) com ease-out, criando sensação de profundidade e interatividade.

6. **Ícones em containers** — Ícones dos serviços não ficam soltos — estão dentro de `bg-accent/10 rounded-lg` com `group-hover:bg-accent/20`, criando hierarquia visual.

7. **CSS glow pulse dividers** — Linhas ciano entre seções com animação de respiração (4s ciclo) em CSS puro — zero JS, zero impacto em performance. Respeitam `prefers-reduced-motion`.

8. **Radial gradient overlay no hero** — Gradient sutil `rgba(0,255,255,0.06)` dá profundidade sem competir com as partículas.

9. **Semantic HTML** — `<blockquote>` para depoimentos, `role="img"` com `aria-label` para ratings, `role="separator"` nos dividers, `<nav>` com `aria-label` no header.

10. **Partículas adaptativas** — 60 partículas desktop / 20 mobile com velocidade reduzida. Carregamento via `dynamic({ ssr: false })` — não bloqueia first paint.

11. **Typewriter com key={locale}** — Reseta a animação ao trocar idioma, evitando texto misturado PT/EN durante a transição.

12. **Screen-reader typewriter fallback** — `<span className="sr-only">` com todas as especialidades listadas para leitores de tela.

13. **Testimonial card structure** — Border-top separator entre quote e autor, avatar com iniciais calculadas, flex-1 na quote para alinhamento consistente.

14. **Timeline dual-layout** — Desktop: grid 4 colunas com linha horizontal contínua. Mobile: layout vertical com linha contínua à esquerda. Não é o mesmo componente "esticado" — são layouts genuinamente diferentes.

15. **Modal com Framer Motion** — AnimatePresence para enter/exit animations, backdrop click para fechar, `stopPropagation` no conteúdo, scale + opacity + translateY na transição.

16. **Portfolio placeholder card** — Card "Em breve" com opacity 60%, disabled, sem hover effects — visualmente distinto dos cards ativos.

17. **Contact form UX** — Inputs com `bg-surface` (não branco), `focus:ring-1 focus:ring-accent/40` sutil, `resize-none` no textarea, labels explícitas com `htmlFor`.

18. **WhatsApp message builder** — Form monta mensagem estruturada (Nome/Email/Mensagem) e abre `wa.me` com texto pré-preenchido via `window.open`.

19. **FOUC prevention** — Inline script síncrono no `<head>` seta `backgroundColor=#0A0A0A` antes de qualquer React hydration — sem flash branco.

20. **Easing correto** — `ease-out` para elementos entrando, duração 200-300ms para micro-interações, 600-700ms para scroll animations. Nenhum `linear`.

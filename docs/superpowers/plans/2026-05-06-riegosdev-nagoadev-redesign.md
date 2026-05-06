# RiegosDev NagoaDev-Style Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the RiegosDev landing page to follow the approved NagoaDev-style structure, copy, and free-diagnostic CTA strategy.

**Architecture:** Keep the existing Next.js App Router single-page landing. Centralize visible copy in `lib/content/pt-BR.ts` and `lib/content/en.ts`, then update section components to consume `useLocale()` where user-facing copy changes. Add a dedicated diagnostic section between projects and final CTA.

**Tech Stack:** Next.js 16.2.2, React 19, TypeScript, Tailwind CSS v4, `lucide-react` already available, current `LocaleContext`.

---

## File Structure

- Modify `lib/content/pt-BR.ts`: source of truth for approved PT-BR copy, including hero, services, process, portfolio, new diagnostic, final CTA, footer, and WhatsApp messages.
- Modify `lib/content/en.ts`: structural parity with PT-BR; English text can be faithful, simple translation to keep build green and toggle usable.
- Modify `components/layout/Header.tsx`: use approved navigation labels and diagnostic CTA.
- Modify `components/sections/HeroSection.tsx`: use approved title/subtitle/CTAs and make hero less abstract.
- Modify `components/sections/ServicesSection.tsx`: reshape services into the three approved "O que fazemos" blocks.
- Modify `components/sections/PortfolioSection.tsx`: keep process and projects in the same file for now; rewrite copy and structure to approved sections 04 and 05.
- Create `components/sections/DiagnosticSection.tsx`: approved section 06.
- Modify `components/sections/CtaSection.tsx`: approved section 07.
- Modify `components/layout/Footer.tsx`: approved section 08 and locale content.
- Modify `app/page.tsx`: insert `DiagnosticSection` before `CtaSection`.

## Task 1: Update Content Model

**Files:**
- Modify: `lib/content/pt-BR.ts`
- Modify: `lib/content/en.ts`

- [ ] **Step 1: Replace PT-BR copy with approved content shape**

In `lib/content/pt-BR.ts`, update the existing object fields instead of creating a separate copy source. Add top-level `diagnostic` and `finalCta` objects, and add `hero.ctaSecondary`.

```ts
hero: {
  headline: 'Seu negócio respondendo clientes, tirando dúvidas e fechando vendas — mesmo quando você não está.',
  subheadline: 'A gente configura uma IA que fala pela sua empresa. Com a linguagem certa, na hora certa, sem aumentar sua equipe.',
  typewriterItems: [
    'Atendimento no WhatsApp com IA',
    'Diagnóstico gratuito do atendimento',
    'Páginas e vídeos que explicam melhor sua oferta',
  ],
  ctaPrimary: 'Agendar diagnóstico gratuito',
  ctaSecondary: 'Ver projetos que entregamos',
  ctaWhatsApp: 'Agendar diagnóstico gratuito',
},
services: {
  sectionTitle: 'O que fazemos',
  headline: 'Três coisas que a gente faz — e o que elas mudam no seu negócio',
  items: [
    {
      id: 'whatsapp',
      title: 'Atendimento com IA no WhatsApp',
      description: 'Sabe aquela mensagem que chega fora do horário e ninguém respondeu? A IA responde na hora, com a linguagem da sua empresa. O cliente não espera, a venda não esfria e sua equipe não precisa parar tudo para responder dúvida repetida.',
    },
    {
      id: 'videos',
      title: 'Vídeos que explicam e vendem enquanto você trabalha',
      description: 'Criamos roteiros e vídeos para explicar o que sua empresa faz de um jeito simples. O cliente entende melhor sua oferta e chega mais preparado para conversar.',
    },
    {
      id: 'sites',
      title: 'Site e página de vendas',
      description: 'Não adianta ter um site bonito que ninguém entende. Criamos páginas com uma mensagem clara e um objetivo específico: fazer quem visitou entrar em contato com você.',
    },
  ],
},
process: {
  sectionTitle: 'Como funciona',
  headline: 'Como trabalhamos — sem enrolação',
  subheadline: '',
  steps: [
    {
      id: 'step1',
      number: '01',
      title: 'Entendemos seu negócio',
      description: 'Uma conversa de 40 minutos já basta para identificar onde seu atendimento está perdendo cliente e o que dá para melhorar agora.',
    },
    {
      id: 'step2',
      number: '02',
      title: 'Montamos o que faz sentido para você',
      description: 'Nada de pacote genérico. O que você recebe é único, pensado para seu tipo de negócio, sua equipe e sua forma de atender.',
    },
    {
      id: 'step3',
      number: '03',
      title: 'Colocamos no ar e você acompanha o resultado',
      description: 'Você não precisa entender de tecnologia. Nós configuramos, testamos e mostramos o que mudou.',
    },
  ],
  beforeAfter: {
    beforeTitle: 'ANTES',
    afterTitle: 'DEPOIS',
    before: [
      'Cliente chama e fica esperando resposta',
      'Equipe presa em dúvida repetida',
      'Oportunidade esfria fora do horário'
    ],
    after: [
      'Resposta no tempo certo',
      'Dúvidas respondidas com a linguagem da empresa',
      'Lead encaminhado para o próximo passo'
    ]
  }
},
diagnostic: {
  sectionTitle: 'Diagnóstico gratuito',
  headline: 'Antes de qualquer proposta, alinhamos e entendemos como funciona o seu negócio.',
  description: 'Muitas empresas não sabem exatamente onde estão perdendo clientes. Em uma conversa gratuita de 30 minutos, olhamos para seu atendimento atual, identificamos os gargalos e mostramos o que pode ser melhorado agora. Não é "apenas" mais uma reunião de vendas.',
  outcomesTitle: 'Você sai com:',
  outcomes: [
    'Um mapa claro dos gargalos do seu atendimento hoje',
    '3 ações práticas para melhorar agora',
    'Um mini plano de automação pensado para seu negócio',
    'Clareza sobre se faz sentido seguir com a RiegosDev',
  ],
  cta: 'Agendar diagnóstico gratuito',
  note: 'Sem compromisso. A ideia é você sair da conversa com clareza, mesmo que a gente não siga junto.',
},
finalCta: {
  headline: 'Cansado de perder cliente porque a resposta demorou?',
  subheadline: 'A gente resolve isso começando por uma conversa gratuita de 30 minutos.',
  cta: 'Agendar diagnóstico gratuito',
  note: 'Atendemos empresas em todo o Brasil. Diagnóstico feito por videochamada.',
},
```

Update `nav.links` values to:

```ts
links: {
  sobre: 'Sobre',
  servicos: 'O que fazemos',
  portfolio: 'Projetos',
  depoimentos: 'Depoimentos',
  processo: 'Como funciona',
  contato: 'Contato',
},
```

Update `footer` to:

```ts
footer: {
  tagline: 'Automação · Vídeos · Sites',
  copyright: 'Todos os direitos reservados.',
  social: {
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
  },
  quickLinks: 'Links rápidos',
  socialHeading: 'Social',
},
```

Update `portfolio.items` descriptions to the approved text:

```ts
items: [
  {
    id: 'p1',
    title: 'Agente de Atendimento no WhatsApp',
    description: 'Uma IA configurada para responder clientes, tirar dúvidas, qualificar leads e encaminhar atendimentos quando a equipe não está disponível. Inclusive de madrugada ou finais de semana.',
    fullDescription: 'Uma IA configurada para responder clientes, tirar dúvidas, qualificar leads e encaminhar atendimentos quando a equipe não está disponível. Inclusive de madrugada ou finais de semana.',
    tech: ['WhatsApp', 'IA', 'Qualificação de leads', 'Follow-up automático'],
    status: 'Concluído',
  },
  {
    id: 'p2',
    title: 'ConectaSaúde',
    description: 'Plataforma criada para conectar pacientes com profissionais de saúde. Site, atendimento automático e humanizado, agendamento e lembrete de consultas em um só lugar.',
    fullDescription: 'Plataforma criada para conectar pacientes com profissionais de saúde. Site, atendimento automático e humanizado, agendamento e lembrete de consultas em um só lugar.',
    tech: ['Site', 'Atendimento humanizado', 'Agendamento', 'Lembrete de consultas'],
    status: 'Concluído',
  },
  {
    id: 'p3',
    title: 'Sites & Landing Pages',
    description: 'Páginas criadas com foco em conversão — não só em parecer bonito. Cada uma com uma mensagem clara e um objetivo específico.',
    fullDescription: 'Páginas criadas com foco em conversão — não só em parecer bonito. Cada uma com uma mensagem clara e um objetivo específico.',
    tech: ['Mensagem clara', 'Conversão', 'UX/UI', 'SEO'],
    status: 'Concluído',
  },
],
```

- [ ] **Step 2: Mirror the content shape in English**

In `lib/content/en.ts`, add the same keys with direct English translations. Exact text:

```ts
diagnostic: {
  sectionTitle: 'Free diagnosis',
  headline: 'Before any proposal, we align and understand how your business works.',
  description: 'Many companies do not know exactly where they are losing customers. In a free 30-minute conversation, we look at your current service flow, identify bottlenecks, and show what can be improved now. It is not "just" another sales meeting.',
  outcomesTitle: 'You leave with:',
  outcomes: [
    'A clear map of your current service bottlenecks',
    '3 practical actions to improve now',
    'A mini automation plan designed for your business',
    'Clarity on whether it makes sense to move forward with RiegosDev',
  ],
  cta: 'Schedule free diagnosis',
  note: 'No commitment. The idea is that you leave the conversation with clarity, even if we do not move forward together.',
},
finalCta: {
  headline: 'Tired of losing customers because the response came late?',
  subheadline: 'We solve this starting with a free 30-minute conversation.',
  cta: 'Schedule free diagnosis',
  note: 'We serve companies all over Brazil. Diagnosis by video call.',
},
```

Also mirror the footer shape:

```ts
footer: {
  tagline: 'Automation · Videos · Sites',
  copyright: 'All rights reserved.',
  social: {
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
  },
  quickLinks: 'Quick links',
  socialHeading: 'Social',
},
```

- [ ] **Step 3: Run TypeScript/build check for content shape**

Run:

```bash
npm run build
```

Expected: build exits `0`. If it fails with missing content keys, add the same keys to both `pt-BR.ts` and `en.ts`.

- [ ] **Step 4: Commit content model**

```bash
git add lib/content/pt-BR.ts lib/content/en.ts
git commit -m "feat: update landing copy model"
```

## Task 2: Header and Hero

**Files:**
- Modify: `components/layout/Header.tsx`
- Modify: `components/sections/HeroSection.tsx`

- [ ] **Step 1: Update header navigation and CTA**

In `components/layout/Header.tsx`, keep existing behavior. Change CTA href message to diagnostic intent:

```ts
const diagnosticWhatsAppHref = 'https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+agendar+um+diagn%C3%B3stico+gratuito.'
```

Use it in the desktop CTA. CTA label should read:

```tsx
{locale === 'pt-BR' ? 'Agendar diagnóstico gratuito' : 'Schedule free diagnosis'}
```

Import `locale` from `useLocale()`:

```ts
const { content, toggleLocale, locale } = useLocale()
```

- [ ] **Step 2: Replace hero copy and CTA labels**

In `components/sections/HeroSection.tsx`, add `'use client'` and use `useLocale()`:

```tsx
'use client'

import { useLocale } from '@/context/LocaleContext'

export function HeroSection() {
  const { content } = useLocale()
  const diagnosticWhatsAppHref = 'https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+agendar+um+diagn%C3%B3stico+gratuito.'
```

Use:

```tsx
<h1 className="font-h1 text-h1 text-on-background max-w-2xl">
  {content.hero.headline}
</h1>
<p className="font-body-lg text-body-lg text-secondary max-w-xl">
  {content.hero.subheadline}
</p>
```

Primary CTA:

```tsx
<a href={diagnosticWhatsAppHref} target="_blank" rel="noopener noreferrer">
  {content.hero.ctaPrimary}
</a>
```

Secondary CTA:

```tsx
<a href="#portfolio">{content.hero.ctaSecondary}</a>
```

- [ ] **Step 3: Run lint/build**

Run:

```bash
npm run lint
npm run build
```

Expected: lint exits `0` with existing warnings allowed; build exits `0`.

- [ ] **Step 4: Commit header and hero**

```bash
git add components/layout/Header.tsx components/sections/HeroSection.tsx
git commit -m "feat: update header and hero messaging"
```

## Task 3: Services Section

**Files:**
- Modify: `components/sections/ServicesSection.tsx`

- [ ] **Step 1: Replace services grid with three approved blocks**

Keep `useLocale()`. Replace the existing four-card bento content with a three-card grid using `content.services.items`. Use these assets:

- WhatsApp card: `/Imagens/Whatsapp3.png`
- Videos card: `/Imagens/Divulgacao%20lu%2002.mp4`
- Sites card: `/Imagens/AtualEpi.png`

Use this mapping:

```ts
const mediaById = {
  whatsapp: { type: 'image', src: '/Imagens/Whatsapp3.png', alt: 'Atendimento com IA no WhatsApp' },
  videos: { type: 'video', src: '/Imagens/Divulgacao%20lu%2002.mp4', alt: 'Vídeos que explicam e vendem' },
  sites: { type: 'image', src: '/Imagens/AtualEpi.png', alt: 'Site e página de vendas' },
} as const
```

Render:

```tsx
<section id="servicos" className="py-20 bg-surface-container-lowest">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16 space-y-4">
      <span className="text-primary font-bold uppercase tracking-widest text-xs">
        {content.services.sectionTitle}
      </span>
      <h2 className="font-h2 text-h2 text-on-background">{content.services.headline}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {content.services.items.map((item) => {
        const media = mediaById[item.id as keyof typeof mediaById]
        return (
          <article key={item.id} className="bg-white rounded-3xl border border-outline-variant/30 soft-card-shadow overflow-hidden flex flex-col">
            <div className="p-8 space-y-4">
              <h3 className="font-h3 text-[22px] leading-tight text-on-background">{item.title}</h3>
              <p className="text-secondary text-sm leading-6">{item.description}</p>
            </div>
            <div className="mt-auto bg-surface-container-lowest">
              {media.type === 'video' ? (
                <video autoPlay loop muted playsInline className="w-full aspect-video object-cover" src={media.src} />
              ) : (
                <img alt={media.alt} className="w-full aspect-video object-cover" src={media.src} />
              )}
            </div>
          </article>
        )
      })}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Run lint/build**

Run:

```bash
npm run lint
npm run build
```

Expected: lint exits `0` with existing image warnings allowed; build exits `0`.

- [ ] **Step 3: Commit services**

```bash
git add components/sections/ServicesSection.tsx
git commit -m "feat: align services with approved copy"
```

## Task 4: Process and Projects

**Files:**
- Modify: `components/sections/PortfolioSection.tsx`

- [ ] **Step 1: Convert section to locale-aware client component**

At top:

```tsx
'use client'

import { useLocale } from '@/context/LocaleContext'
```

Inside component:

```tsx
const { content } = useLocale()
```

- [ ] **Step 2: Render approved process steps**

Use `content.process.headline` and `content.process.steps`. Keep `id="processo"`.

```tsx
<section id="processo" className="py-20 bg-surface-container-low">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-h2 text-h2 text-on-background">{content.process.headline}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {content.process.steps.map((step) => (
        <article key={step.id} className="p-6 bg-white rounded-2xl border border-outline-variant/30 soft-card-shadow">
          <span className="text-h3 font-bold text-primary/30 block mb-4">{step.number}</span>
          <h3 className="font-h3 text-[20px] mb-2">{step.title}</h3>
          <p className="text-secondary text-sm leading-6">{step.description}</p>
        </article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 3: Render approved project cards from content**

Use existing images in order:

```ts
const projectImages = ['/Imagens/conectaseguro.png', '/Imagens/conectasaude.png', '/Imagens/AtualEpi.png']
```

Render `content.portfolio.items` with title, description, and `tech` chips. Heading:

```tsx
<h2 className="font-h2 text-h2">{content.portfolio.headline}</h2>
```

Remove "Ver todos os projetos" link unless a real target exists. It currently points to `#`, so do not render it.

- [ ] **Step 4: Run lint/build**

Run:

```bash
npm run lint
npm run build
```

Expected: lint exits `0` with existing image warnings allowed; build exits `0`.

- [ ] **Step 5: Commit process/projects**

```bash
git add components/sections/PortfolioSection.tsx
git commit -m "feat: update process and project proof"
```

## Task 5: Diagnostic Section

**Files:**
- Create: `components/sections/DiagnosticSection.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create diagnostic section component**

Create `components/sections/DiagnosticSection.tsx`:

```tsx
'use client'

import { CheckCircle2 } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'

const diagnosticWhatsAppHref = 'https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+agendar+um+diagn%C3%B3stico+gratuito.'

export function DiagnosticSection() {
  const { content } = useLocale()

  return (
    <section id="diagnostico" className="py-20 px-6 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div className="space-y-6">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            {content.diagnostic.sectionTitle}
          </span>
          <h2 className="font-h2 text-h2 text-on-background max-w-3xl">
            {content.diagnostic.headline}
          </h2>
          <p className="text-secondary text-body-md max-w-2xl">
            {content.diagnostic.description}
          </p>
          <a
            href={diagnosticWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 accent-gradient text-white rounded-xl font-bold active:scale-95 transition-transform"
          >
            {content.diagnostic.cta}
          </a>
        </div>
        <aside className="bg-white p-8 rounded-3xl border border-outline-variant/30 soft-card-shadow space-y-6">
          <h3 className="font-h3 text-h3 text-on-background">{content.diagnostic.outcomesTitle}</h3>
          <ul className="space-y-4">
            {content.diagnostic.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-secondary">{outcome}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-secondary border-t border-outline-variant/30 pt-5">
            {content.diagnostic.note}
          </p>
        </aside>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Insert diagnostic section**

In `app/page.tsx`, import and render:

```tsx
import { DiagnosticSection } from '@/components/sections/DiagnosticSection'
```

Place it after `PortfolioSection` and before `CtaSection`:

```tsx
<PortfolioSection />
<DiagnosticSection />
<CtaSection />
```

- [ ] **Step 3: Run lint/build**

Run:

```bash
npm run lint
npm run build
```

Expected: lint exits `0`; build exits `0`.

- [ ] **Step 4: Commit diagnostic section**

```bash
git add app/page.tsx components/sections/DiagnosticSection.tsx
git commit -m "feat: add diagnostic section"
```

## Task 6: Final CTA and Footer

**Files:**
- Modify: `components/sections/CtaSection.tsx`
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Update final CTA**

In `components/sections/CtaSection.tsx`, make it a client component and use final CTA content:

```tsx
'use client'

import { useLocale } from '@/context/LocaleContext'

const diagnosticWhatsAppHref = 'https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+agendar+um+diagn%C3%B3stico+gratuito.'

export function CtaSection() {
  const { content } = useLocale()
```

Render:

```tsx
<h2 className="font-h1 text-h1 text-white">{content.finalCta.headline}</h2>
<p className="text-white/80 font-body-lg text-body-lg max-w-xl mx-auto">
  {content.finalCta.subheadline}
</p>
<a href={diagnosticWhatsAppHref} target="_blank" rel="noopener noreferrer">
  {content.finalCta.cta}
</a>
<p className="text-white/70 text-sm">{content.finalCta.note}</p>
```

- [ ] **Step 2: Update footer**

In `components/layout/Footer.tsx`, make the component locale-aware:

```tsx
'use client'

import { useLocale } from '@/context/LocaleContext'

export function Footer() {
  const { content } = useLocale()
  const year = new Date().getFullYear()
```

Keep dynamic year so it displays 2026 on current date:

```tsx
const year = new Date().getFullYear()
```

Render service line:

```tsx
<p className="font-sans text-sm text-slate-500">{content.footer.tagline}</p>
```

Render social links:

```tsx
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{content.footer.social.instagram}</a>
<a href="https://wa.me/5531988969661" target="_blank" rel="noopener noreferrer">{content.footer.social.whatsapp}</a>
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">{content.footer.social.linkedin}</a>
```

Do not render GitHub in the approved footer.

- [ ] **Step 3: Run lint/build**

Run:

```bash
npm run lint
npm run build
```

Expected: lint exits `0`; build exits `0`.

- [ ] **Step 4: Commit final CTA/footer**

```bash
git add components/sections/CtaSection.tsx components/layout/Footer.tsx
git commit -m "feat: update final cta and footer"
```

## Task 7: Visual and Content Verification

**Files:**
- No code edits expected.

- [ ] **Step 1: Start dev server if needed**

Run:

```bash
try { (Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 5).StatusCode } catch { 'down' }
```

If output is not `200`, run:

```bash
Start-Process -FilePath powershell -ArgumentList @('-NoProfile','-Command','cd "F:\RiegosDev\RiegosdevCloud"; npm run dev') -WindowStyle Hidden
```

- [ ] **Step 2: Capture desktop and mobile screenshots**

Run:

```bash
$chrome='C:\Program Files\Google\Chrome\Application\chrome.exe'
$desktop=Join-Path $env:TEMP 'riegos-redesign-desktop.png'
$mobile=Join-Path $env:TEMP 'riegos-redesign-mobile.png'
& $chrome --headless=new --disable-gpu --hide-scrollbars --window-size=1440,1600 --screenshot=$desktop 'http://localhost:3000'
& $chrome --headless=new --disable-gpu --hide-scrollbars --window-size=390,1200 --screenshot=$mobile 'http://localhost:3000'
Write-Output $desktop
Write-Output $mobile
```

Expected: both PNG files are written.

- [ ] **Step 3: Inspect screenshots**

Open both screenshot files through the image viewer. Verify:

- Hero title is readable without horizontal clipping.
- Primary CTA says `Agendar diagnóstico gratuito`.
- Secondary CTA says `Ver projetos que entregamos`.
- First service card explains WhatsApp.
- Process shows 3 steps, not 4.
- Diagnostic section appears before final CTA.
- Footer shows `Automação · Vídeos · Sites` and no GitHub link.

- [ ] **Step 4: Final verification commands**

Run:

```bash
npm run lint
npm run build
git status --short --branch
```

Expected:

- `npm run lint`: exit `0`; existing warnings about `<img>` may appear.
- `npm run build`: exit `0`.
- `git status`: only expected untracked file is `NagoaDev Textos Site.pdf`, unless the user asks to track it.

- [ ] **Step 5: Final commit if visual verification required changes**

If Task 7 required any code changes, commit them:

```bash
git add app components lib
git commit -m "fix: polish redesign implementation"
```

If no code changes were needed, do not create an empty commit.

## Self-Review

Spec coverage:

- Sections 01-08 are covered by Tasks 1-6.
- Diagnostic-free CTA is covered by Tasks 1, 2, 5, and 6.
- Multi-tenant broad hero is covered by Task 2.
- Services and projects copy are covered by Tasks 3 and 4.
- Mobile/desktop verification is covered by Task 7.

Placeholder scan:

- No unresolved placeholder markers are present.
- All file paths and commands are explicit.

Type consistency:

- New content keys are added to PT-BR first, and EN mirrors the `SiteContent` shape.
- Components use `content.diagnostic` and `content.finalCta`, matching Task 1.

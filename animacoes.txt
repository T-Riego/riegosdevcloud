# Implementação de Animações com Anime.js — Riegos Dev

## Contexto do projeto
- Framework: Next.js 13+ (App Router) com Turbopack
- Estilização: Tailwind CSS
- Nenhuma lib de animação instalada ainda
- Projeto em: localhost:3000
- Design: dark theme, fundo preto, cor de destaque ciano (#00FFFF / `text-accent`), tipografia moderna

## Objetivo
Implementar animações sutis e profissionais com Anime.js nas seções abaixo, sem quebrar o estilo atual nem tornar o site pesado. O tom deve ser **tech premium, sóbrio**, nada exagerado.

---

## PASSO 1 — Instalar Anime.js
```bash
npm install animejs
```

---

## PASSO 2 — Criar hook reutilizável de scroll animation

Crie o arquivo `hooks/useScrollAnimation.ts`:
```typescript
'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dispatchEvent(new CustomEvent('animate-in'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
}
```

---

## PASSO 3 — Criar componente AnimateOnScroll reutilizável

Crie `components/AnimateOnScroll.tsx`:
```tsx
'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { animate, stagger } from 'animejs';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'staggerChildren';
  delay?: number;
  staggerDelay?: number;
  childSelector?: string;
}

export function AnimateOnScroll({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  staggerDelay = 80,
  childSelector = ':scope > *',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    // Set initial invisible state
    if (animation === 'staggerChildren') {
      const children = el.querySelectorAll(childSelector);
      children.forEach((child) => {
        (child as HTMLElement).style.opacity = '0';
        (child as HTMLElement).style.transform = 'translateY(24px)';
      });
    } else {
      el.style.opacity = '0';
      el.style.transform = animation === 'fadeUp' ? 'translateY(28px)' : 'none';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            if (animation === 'staggerChildren') {
              const children = Array.from(el.querySelectorAll(childSelector)) as HTMLElement[];
              animate(children, {
                opacity: [0, 1],
                translateY: [24, 0],
                duration: 600,
                delay: stagger(staggerDelay),
                ease: 'easeOutExpo',
              });
            } else if (animation === 'fadeUp') {
              animate(el, {
                opacity: [0, 1],
                translateY: [28, 0],
                duration: 700,
                delay,
                ease: 'easeOutExpo',
              });
            } else if (animation === 'fadeIn') {
              animate(el, {
                opacity: [0, 1],
                duration: 700,
                delay,
                ease: 'easeOutQuad',
              });
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animation, delay, staggerDelay, childSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

---

## PASSO 4 — Criar componente SVGLineDrawing para a seção Processo

Crie `components/ProcessLine.tsx`:
```tsx
'use client';

import { useEffect, useRef } from 'react';
import { animate, createDrawable } from 'animejs';

export function ProcessLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!svgRef.current) return;
    const path = svgRef.current.querySelector('path');
    if (!path) return;

    // Set initial state
    const drawable = createDrawable(path);
    animate(drawable, {
      draw: '0 0',
      duration: 0,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(drawable, {
              draw: ['0 0', '0 1'],
              duration: 1200,
              delay: 300,
              ease: 'easeInOutQuad',
            });
            observer.unobserve(svgRef.current!);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute top-6 left-[12.5%] right-[12.5%] w-[75%] hidden md:block"
      height="2"
      viewBox="0 0 100 2"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,1 L100,1"
        stroke="rgba(0,255,255,0.35)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
```

---

## PASSO 5 — Aplicar as animações nas seções

### 5.1 — Seção Serviços (`#servicos`)
No componente da seção Serviços, envolva o grid de cards com `AnimateOnScroll`:
```tsx
// Envolva o título da seção
<AnimateOnScroll animation="fadeUp">
  <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">Serviços</p>
  <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
    O que posso fazer pelo seu negócio
  </h2>
</AnimateOnScroll>

// Envolva o grid de cards com stagger
<AnimateOnScroll animation="staggerChildren" staggerDelay={90}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* ... seus 6 cards ... */}
  </div>
</AnimateOnScroll>
```

> ⚠️ Atenção: o `AnimateOnScroll` com `staggerChildren` precisa ter o `childSelector` apontando para os cards diretos. Se o grid já é o pai direto dos cards, o padrão `:scope > *` funciona. Se houver um wrapper intermediário, passe `childSelector=".grid > div"` ou similar.

---

### 5.2 — Seção Portfólio (`#portfolio`)
```tsx
// Título
<AnimateOnScroll animation="fadeUp">
  <p>Portfólio</p>
  <h2>Projetos que entregaram resultado</h2>
</AnimateOnScroll>

// Cards
<AnimateOnScroll animation="staggerChildren" staggerDelay={120}>
  <div className="grid ...">
    {/* 3 botões/cards de projeto */}
  </div>
</AnimateOnScroll>
```

---

### 5.3 — Seção Depoimentos (`#depoimentos`)
```tsx
<AnimateOnScroll animation="staggerChildren" staggerDelay={150}>
  <div className="grid ...">
    {/* 3 cards de depoimento */}
  </div>
</AnimateOnScroll>
```

---

### 5.4 — Seção Sobre (`#sobre`)
```tsx
<AnimateOnScroll animation="fadeUp" delay={100}>
  {/* Conteúdo da seção sobre */}
</AnimateOnScroll>
```

---

### 5.5 — Seção Processo (`#processo`) — Adicionar animação na linha horizontal
No componente da seção Processo (versão desktop), substitua o `div` que representa a linha horizontal:
```tsx
// ANTES: <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-accent/20" />

// DEPOIS: use o componente ProcessLine
import { ProcessLine } from '@/components/ProcessLine';

// Dentro do container relativo do processo desktop:
<ProcessLine />

// Também envolva os steps com stagger
<AnimateOnScroll animation="staggerChildren" staggerDelay={120}>
  <div className="hidden md:grid md:grid-cols-4 relative">
    <ProcessLine />
    {/* steps 01, 02, 03, 04 */}
  </div>
</AnimateOnScroll>
```

---

### 5.6 — Seção Contato (`#contato`)
```tsx
<AnimateOnScroll animation="fadeUp">
  {/* Conteúdo do formulário */}
</AnimateOnScroll>
```

---

## PASSO 6 — Animação de entrada dos botões CTA do Hero (opcional, impacto alto)

No componente Hero, adicione este efeito após o mount:
```tsx
'use client';
import { useEffect } from 'react';
import { animate, stagger } from 'animejs';

// Dentro do useEffect do Hero:
useEffect(() => {
  animate('.hero-cta', {
    opacity: [0, 1],
    translateY: [16, 0],
    duration: 600,
    delay: stagger(120, { start: 800 }), // começa 800ms após carregar
    ease: 'easeOutExpo',
  });
}, []);

// Adicione a classe 'hero-cta' nos dois botões/links do Hero:
// <Link className="... hero-cta" style={{ opacity: 0 }} ...>Ver Projetos</Link>
// <Link className="... hero-cta" style={{ opacity: 0 }} ...>Falar com Especialista</Link>
```

---

## Regras de qualidade que o código DEVE seguir

1. Todos os componentes de animação devem ter `'use client'` no topo (App Router)
2. Nunca usar `document` ou `window` fora de `useEffect` 
3. Usar `hasAnimated.current = true` para garantir que a animação rode só uma vez
4. Manter `ease: 'easeOutExpo'` como padrão — é suave e profissional
5. `opacity: 0` deve ser setado via JavaScript **antes** de observar o scroll, não via CSS estático (evita flash de conteúdo em SSR)
6. Durations entre 500ms e 800ms — nada mais lento
7. Stagger entre 80ms e 150ms por item

---

## Estrutura final de arquivos criados/modificados
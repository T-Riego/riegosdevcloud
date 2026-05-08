// lib/content/en.ts
// D-05: Typed against SiteContent — TypeScript enforces structural parity
// Any missing key is a compile error

import type { SiteContent } from './pt-BR'

export const en: SiteContent = {
  nav: {
    logo: 'RiegosDev',
    links: {
      sobre: 'About',
      servicos: 'What we do',
      portfolio: 'Projects',
      depoimentos: 'Testimonials',
      processo: 'How it works',
      contato: 'Contact',
    },
    langToggle: 'PT',
  },
  footer: {
    tagline: 'Automation · Videos · Sites',
    copyright: 'All rights reserved.',
    social: {
      instagram: 'Instagram',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
    },
    legal: {
      privacy: 'Privacy',
      terms: 'Terms',
      dataDeletion: 'Data deletion',
    },
    quickLinks: 'Quick links',
    socialHeading: 'Social',
  },
  hero: {
    badge: 'AI Automation Specialists',
    headline: 'Your business answering customers, clearing doubts, and closing sales — even when you are not there.',
    subheadline: 'We configure an AI that speaks for your company. With the right language, at the right time, without growing your team.',
    typewriterItems: [
      'WhatsApp service with AI',
      'Free service diagnosis',
      'Pages and videos that explain your offer better',
    ],
    ctaPrimary: 'Schedule free diagnosis',
    ctaSecondary: 'See projects we delivered',
    ctaWhatsApp: 'Schedule free diagnosis',
  },
  about: {
    sectionTitle: 'About',
    headline: 'The people behind Riegos Dev',
    team: [
      {
        id: 'daniel',
        name: 'Daniel Riêgo',
        role: 'Solutions Architect & Process Automation',
        description: 'Specialist in integrating systems and creating fluid digital ecosystems. Turns operational bottlenecks and process challenges into concrete results, focused on solving problems intelligently and maximizing business efficiency.',
        initials: 'DR',
      },
      {
        id: 'tiago',
        name: 'Tiago Riêgo',
        role: 'Automation Engineer & Operational Intelligence',
        description: 'Specialist in building secure, scalable, results-driven automation flows. Expert in automating repetitive processes, from intelligent spreadsheet handling to deploying personalized customer service assistants.',
        initials: 'TR',
      },
    ],
  },
  services: {
    sectionTitle: 'What we do',
    headline: 'Three things we do — and what they change in your business',
    items: [
      {
        id: 'whatsapp',
        title: 'AI service on WhatsApp',
        description: 'You know that message that arrives after hours and no one answered? The AI responds right away, with your company language. The customer does not wait, the sale does not cool down, and your team does not need to stop everything to answer repeated questions.',
      },
      {
        id: 'videos',
        title: 'Videos that explain and sell while you work',
        description: 'We create scripts and videos to explain what your company does in a simple way. The customer understands your offer better and arrives more prepared to talk.',
      },
      {
        id: 'sites',
        title: 'Website and sales page',
        description: 'A beautiful site that no one understands is not enough. We create pages with a clear message and one specific goal: to make visitors contact you.',
      },
    ],
  },
  portfolio: {
    sectionTitle: 'Portfolio',
    headline: 'Projects we delivered',
    viewDetails: 'View details',
    close: 'Close',
    technologies: 'Technologies',
    status: 'Status',
    items: [
      {
        id: 'p1',
        title: 'WhatsApp Customer Service Agent',
        description: 'An AI configured to answer customers, clear doubts, qualify leads, and route service requests when the team is not available. Including late nights or weekends.',
        fullDescription: 'An AI configured to answer customers, clear doubts, qualify leads, and route service requests when the team is not available. Including late nights or weekends.',
        tech: ['WhatsApp', 'AI', 'Lead qualification', 'Automatic follow-up'],
        status: 'Completed',
      },
      {
        id: 'p2',
        title: 'ConectaSaúde',
        description: 'A platform created to connect patients with health professionals. Website, automatic and humanized service, scheduling, and appointment reminders in one place.',
        fullDescription: 'A platform created to connect patients with health professionals. Website, automatic and humanized service, scheduling, and appointment reminders in one place.',
        tech: ['Site', 'Humanized service', 'Scheduling', 'Appointment reminders'],
        status: 'Completed',
      },
      {
        id: 'p3',
        title: 'Sites & Landing Pages',
        description: 'Pages created with a focus on conversion — not just looking good. Each one with a clear message and a specific goal.',
        fullDescription: 'Pages created with a focus on conversion — not just looking good. Each one with a clear message and a specific goal.',
        tech: ['Clear message', 'Conversion', 'UX/UI', 'SEO'],
        status: 'Completed',
      },
    ],
  },
  testimonials: {
    sectionTitle: 'Testimonials',
    headline: 'What clients say',
    items: [
      {
        id: 't1',
        text: 'The WhatsApp automation transformed our customer service. We used to take hours to respond; now it is instant. Our conversion doubled in 3 months.',
        name: 'Ana Paula Ferreira',
        company: 'Clínica Bem Estar',
        stars: 5,
      },
      {
        id: 't2',
        text: 'The lead generation funnel Riegos Dev built for us is incredible. Leads arrive qualified and ready to close. 10x ROI in the first quarter.',
        name: 'Carlos Mendes',
        company: 'Imobiliária Prime',
        stars: 5,
      },
      {
        id: 't3',
        text: 'Website delivered on time with visual quality that exceeded our expectations. WhatsApp integration working perfectly from day one.',
        name: 'Fernanda Oliveira',
        company: 'Studio FO Design',
        stars: 5,
      },
    ],
  },
  process: {
    sectionTitle: 'How it works',
    headline: 'How we work — without dragging things out',
    subheadline: '',
    steps: [
      {
        id: 'step1',
        number: '01',
        title: 'We understand your business',
        description: 'A 40-minute conversation is enough to identify where your service is losing customers and what can be improved now.',
      },
      {
        id: 'step2',
        number: '02',
        title: 'We build what makes sense for you',
        description: 'No generic package. What you receive is unique, designed for your type of business, your team, and the way you serve customers.',
      },
      {
        id: 'step3',
        number: '03',
        title: 'We launch it and you track the result',
        description: 'You do not need to understand technology. We configure, test, and show what changed.',
      },
    ],
    beforeAfter: {
      beforeTitle: 'BEFORE',
      afterTitle: 'AFTER',
      before: [
        'Customer messages and waits for a response',
        'Team stuck answering repeated questions',
        'Opportunity cools down after hours',
      ],
      after: [
        'Response at the right time',
        'Questions answered with the company language',
        'Lead routed to the next step',
      ],
    },
  },
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
  contact: {
    sectionTitle: 'Contact',
    headline: 'Ready to automate your growth?',
    subheadline: 'Get in touch and discover how AI can transform your business.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your full name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project or challenge...',
      submit: 'Send via WhatsApp',
    },
    whatsappLabel: 'Chat on WhatsApp',
    whatsappNumber: '+55 31 98896-9661',
    whatsappMessage: 'Hello, I came from your website and want to schedule a free diagnosis.',
  },
} as const

// lib/content/en.ts
// D-05: Typed against SiteContent — TypeScript enforces structural parity
// Any missing key is a compile error

import type { SiteContent } from './pt-BR'

export const en: SiteContent = {
  nav: {
    logo: 'Riegos Dev',
    links: {
      sobre: 'About',
      servicos: 'Services',
      portfolio: 'Portfolio',
      depoimentos: 'Testimonials',
      processo: 'Process',
      contato: 'Contact',
    },
    langToggle: 'PT',
  },
  footer: {
    tagline: 'Intelligence that scales your business',
    copyright: '© 2025 Riegos Dev. All rights reserved.',
    social: {
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickLinks: 'Quick links',
    socialHeading: 'Social',
  },
  hero: {
    headline: 'More responses, more organization, more clients closing.',
    subheadline: 'It\'s not just automation. It\'s predictable growth: WhatsApp customer service, reduction of manual work, zero failures. For companies that want to grow and profit more.',
    typewriterItems: [
      'Turn spreadsheets into data',
      'Automated scheduling, reminders and follow-ups without errors',
      'Intelligent Lead Generation',
      'Personalized digital marketing',
    ],
    ctaPrimary: 'View Projects',
    ctaWhatsApp: 'Talk to a Specialist',
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
    sectionTitle: 'Services',
    headline: 'What We Do for Your Business!',
    items: [
      {
        id: 'automation',
        title: 'Intelligent Automation',
        description: 'Eliminate repetitive tasks and human errors through end-to-end process orchestration with the best technologies on the market.',
      },
      {
        id: 'whatsapp',
        title: '24/7 Support, Never Lose a Customer',
        description: '24/7 customer service with agents trained on your business. Qualifies leads, answers questions, and schedules meetings without human intervention.',
      },
      {
        id: 'leads',
        title: 'Lead Generation',
        description: 'Intelligent funnels that automatically identify, qualify, and nurture leads — delivering sales-ready opportunities.',
      },
      {
        id: 'sites',
        title: 'Websites / Landing Pages',
        description: 'High-conversion institutional sites and landing pages, SEO-optimized and integrated with your automations.',
      },
      {
        id: 'apps',
        title: 'Facebook Ads & Creative Marketing',
        description: 'Facebook and Instagram ad campaigns created and managed with AI — precise targeting, optimized creatives, and scale to maximize your return.',
      },
      {
        id: 'videos',
        title: 'Marketing Videos',
        description: 'AI-produced video content — automated scripting, voiceover, and editing for campaigns and social media.',
      },
    ],
  },
  portfolio: {
    sectionTitle: 'Portfolio',
    headline: 'Projects that delivered results',
    viewDetails: 'View details',
    close: 'Close',
    technologies: 'Technologies',
    status: 'Status',
    items: [
      {
        id: 'p1',
        title: 'WhatsApp Customer Service Agent',
        description: 'Autonomous agent integrated with WhatsApp Business that qualifies leads, answers FAQs, and schedules meetings automatically.',
        fullDescription: 'Complete automated customer service solution via WhatsApp Business API. The agent is trained with a custom knowledge base, uses GPT-4 for natural responses, and integrates with Google Calendar for scheduling. Reduced response time from 4h to under 1 minute.',
        tech: ['n8n', 'WhatsApp Business API', 'GPT-4', 'Google Calendar API'],
        status: 'Completed',
      },
      {
        id: 'p2',
        title: 'Lead Generation Automation',
        description: 'Automated funnel that captures, qualifies, and nurtures leads from multiple channels, delivering sales-ready opportunities.',
        fullDescription: 'Capture pipeline integrated with Meta Ads, Google Ads, and web forms. Automatic qualification via AI scoring, nurturing by email and WhatsApp, and delivery of hot leads directly to CRM. Increased conversion by 340%.',
        tech: ['n8n', 'Supabase', 'Resend', 'Meta Ads API'],
        status: 'Completed',
      },
      {
        id: 'p3',
        title: 'Active Prospecting & Sales Growth',
        description: 'Automated system that identifies ideal customers, initiates personalized outreach, and moves leads through the funnel to conversion — growing your pipeline without manual effort.',
        fullDescription: 'Active prospecting solution integrated with Instagram, WhatsApp, and LinkedIn. AI identifies ideal customer profiles (ICP), sends personalized messages, tracks interactions, and automatically nurtures relationships through to closing. Combines behavioral analysis with follow-up automation to maximize response and conversion rates.',
        tech: ['n8n', 'GPT-4', 'WhatsApp Business API', 'Meta Ads API', 'Supabase'],
        status: 'In development',
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
    sectionTitle: 'Process',
    headline: 'How your operation starts generating results in a few days',
    subheadline: 'No complication, no rework, no depending on internal teams',
    steps: [
      {
        id: 'step1',
        number: '01',
        title: 'Bottleneck Diagnosis (24h)',
        description: '',
      },
      {
        id: 'step2',
        number: '02',
        title: 'Solution Structuring (automation + flow)',
        description: '',
      },
      {
        id: 'step3',
        number: '03',
        title: 'Fast Implementation',
        description: '',
      },
      {
        id: 'step4',
        number: '04',
        title: 'Activation & Continuous Optimization',
        description: '',
      },
    ],
    beforeAfter: {
      beforeTitle: 'BEFORE',
      afterTitle: 'AFTER',
      before: [
        'Lost leads on WhatsApp',
        'Slow customer service',
        'Overloaded team'
      ],
      after: [
        '24/7 automatic responses',
        'Organized lead generation',
        'Flow running by itself'
      ]
    }
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
    whatsappMessage: 'Hello, I came from your website and I am interested in your services.',
  },
} as const

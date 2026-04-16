// lib/content/pt-BR.ts
// D-05: TypeScript content object with full type safety
// D-08: ALL sections defined here — no inline strings allowed anywhere in the codebase

export const ptBR = {
  nav: {
    logo: 'Riegos Dev',
    links: {
      sobre: 'Sobre',
      servicos: 'Serviços',
      portfolio: 'Portfólio',
      depoimentos: 'Depoimentos',
      processo: 'Processo',
      contato: 'Contato',
    },
    langToggle: 'EN',
  },
  footer: {
    tagline: 'Inteligência que escala o seu negócio',
    copyright: '© 2025 Riegos Dev. Todos os direitos reservados.',
    social: {
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickLinks: 'Links rápidos',
    socialHeading: 'Social',
  },
  hero: {
    headline: 'Inteligência que escala o seu negócio',
    subheadline: 'Automação com IA, agentes para WhatsApp e desenvolvimento full stack para empresas que querem crescer.',
    typewriterItems: [
      'Automação com IA',
      'Agentes para WhatsApp',
      'Captação Inteligente de Clientes',
      'Desenvolvimento Full Stack',
    ],
    ctaPrimary: 'Ver Projetos',
    ctaWhatsApp: 'Falar com Especialista',
  },
  about: {
    sectionTitle: 'Sobre',
    headline: 'Quem está por trás da Riegos Dev',
    team: [
      {
        id: 'daniel',
        name: 'Daniel Riêgo',
        role: 'Arquiteto de Soluções & Automação de Processos',
        description: 'Especialista em integrar sistemas e criar ecossistemas digitais fluidos. Transforma gargalos operacionais e desafios de processos em resultados concretos, focado em resolver problemas de forma inteligente e maximizar a eficiência empresarial.',
        initials: 'DR',
      },
      {
        id: 'tiago',
        name: 'Tiago Riêgo',
        role: 'Engenheiro de Automação & Inteligência Operacional',
        description: 'Especialista na criação de fluxos de automação seguros, escaláveis e focados em resultados. Especializado na automação de processos repetitivos, desde manipulação inteligente de planilhas complexas até implementação de assistentes de atendimento personalizados.',
        initials: 'TR',
      },
    ],
  },
  services: {
    sectionTitle: 'Serviços',
    headline: 'O que posso fazer pelo seu negócio',
    items: [
      {
        id: 'automation',
        title: 'Automação com IA',
        description: 'Processos repetitivos eliminados com agentes inteligentes. Do disparo de e-mails ao processamento de pedidos, tudo automático.',
      },
      {
        id: 'whatsapp',
        title: 'Agentes WhatsApp',
        description: 'Atendimento 24/7 com agentes treinados no seu negócio. Qualifica leads, responde dúvidas e agenda reuniões sem intervenção humana.',
      },
      {
        id: 'leads',
        title: 'Captação de Clientes',
        description: 'Funis inteligentes que identificam, qualificam e nutrem leads automaticamente, entregando oportunidades prontas para fechar.',
      },
      {
        id: 'sites',
        title: 'Sites / Landing Pages',
        description: 'Sites institucionais e landing pages de alta conversão, otimizados para SEO e integrados às suas automações.',
      },
      {
        id: 'apps',
        title: 'Apps Full Stack',
        description: 'Aplicações web completas com backend robusto, banco de dados escalável e integrações com APIs e serviços externos.',
      },
      {
        id: 'videos',
        title: 'Vídeos de Marketing',
        description: 'Conteúdo em vídeo produzido com IA — roteiro, locução e edição automatizados para campanhas e redes sociais.',
      },
    ],
  },
  portfolio: {
    sectionTitle: 'Portfólio',
    headline: 'Projetos que entregaram resultado',
    viewDetails: 'Ver detalhes',
    close: 'Fechar',
    technologies: 'Tecnologias',
    status: 'Status',
    items: [
      {
        id: 'p1',
        title: 'Agente de Atendimento WhatsApp',
        description: 'Agente autônomo integrado ao WhatsApp Business que qualifica leads, responde perguntas frequentes e agenda reuniões automaticamente.',
        fullDescription: 'Solução completa de atendimento automatizado via WhatsApp Business API. O agente é treinado com base de conhecimento personalizada, usa GPT-4 para respostas naturais e integra com Google Calendar para agendamento. Reduziu o tempo de resposta de 4h para menos de 1 minuto.',
        tech: ['n8n', 'WhatsApp Business API', 'GPT-4', 'Google Calendar API'],
        status: 'Concluído',
      },
      {
        id: 'p2',
        title: 'Automação de Captação de Leads',
        description: 'Funil automatizado que captura, qualifica e nutre leads de múltiplos canais, entregando oportunidades prontas para o time de vendas.',
        fullDescription: 'Pipeline de captação integrado com Meta Ads, Google Ads e formulários web. Qualificação automática via scoring com IA, nutrição por e-mail e WhatsApp, e entrega de leads quentes direto no CRM. Aumentou conversão em 340%.',
        tech: ['n8n', 'Supabase', 'Resend', 'Meta Ads API'],
        status: 'Concluído',
      },
      {
        id: 'p3',
        title: 'Novo Projeto em Breve',
        description: 'Mais um projeto de automação com IA em desenvolvimento. Acompanhe as novidades.',
        fullDescription: 'Projeto em desenvolvimento. Detalhes em breve.',
        tech: [],
        status: 'Em breve',
      },
    ],
  },
  testimonials: {
    sectionTitle: 'Depoimentos',
    headline: 'O que os clientes dizem',
    items: [
      {
        id: 't1',
        text: 'A automação do WhatsApp transformou nosso atendimento. Antes demorávamos horas para responder; agora é instantâneo. Nossa conversão dobrou em 3 meses.',
        name: 'Ana Paula Ferreira',
        company: 'Clínica Bem Estar',
        stars: 5,
      },
      {
        id: 't2',
        text: 'O funil de captação que a Riegos Dev criou para nós é incrível. Os leads chegam qualificados e prontos para fechar. ROI de 10x no primeiro trimestre.',
        name: 'Carlos Mendes',
        company: 'Imobiliária Prime',
        stars: 5,
      },
      {
        id: 't3',
        text: 'Site entregue no prazo, com uma qualidade visual que superou nossas expectativas. Integração com WhatsApp funcionando perfeitamente desde o primeiro dia.',
        name: 'Fernanda Oliveira',
        company: 'Studio FO Design',
        stars: 5,
      },
    ],
  },
  process: {
    sectionTitle: 'Processo',
    headline: 'Como trabalhamos juntos',
    steps: [
      {
        id: 'step1',
        number: '01',
        title: 'Diagnóstico',
        description: 'Entendemos seus processos, gargalos e objetivos. Mapeamos onde a automação gera mais impacto no menor tempo.',
      },
      {
        id: 'step2',
        number: '02',
        title: 'Estratégia',
        description: 'Desenhamos a solução técnica ideal para o seu caso. Definimos ferramentas, integrações e cronograma realista.',
      },
      {
        id: 'step3',
        number: '03',
        title: 'Desenvolvimento',
        description: 'Construímos e testamos cada componente com rigor. Você acompanha o progresso e valida cada etapa.',
      },
      {
        id: 'step4',
        number: '04',
        title: 'Entrega & Suporte',
        description: 'Implantamos, treinamos sua equipe e monitoramos o desempenho. Suporte contínuo para garantir resultados duradouros.',
      },
    ],
  },
  contact: {
    sectionTitle: 'Contato',
    headline: 'Pronto para automatizar seu crescimento?',
    subheadline: 'Entre em contato e descubra como a IA pode transformar seu negócio.',
    form: {
      name: 'Nome',
      namePlaceholder: 'Seu nome completo',
      email: 'E-mail',
      emailPlaceholder: 'seu@email.com',
      message: 'Mensagem',
      messagePlaceholder: 'Conte sobre o seu projeto ou desafio...',
      submit: 'Enviar via WhatsApp',
    },
    whatsappLabel: 'Falar pelo WhatsApp',
    whatsappNumber: '+55 31 98896-9661',
    whatsappMessage: 'Olá, vim pelo site e tenho interesse em seus serviços.',
  },
} as const

// SiteContent uses DeepMutable to widen readonly/literal types from `as const`
// so that en.ts can satisfy the same shape with translated strings.
// Structural parity (all keys present) is enforced; exact string values are not.
// Numbers and booleans keep their base type; only string literals are widened.
type Widen<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T

type DeepMutable<T> = T extends ReadonlyArray<infer U>
  ? Array<DeepMutable<U>>
  : T extends object
  ? { [K in keyof T]: DeepMutable<T[K]> }
  : Widen<T>

export type SiteContent = DeepMutable<typeof ptBR>

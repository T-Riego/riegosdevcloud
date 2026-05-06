// lib/content/pt-BR.ts
// D-05: TypeScript content object with full type safety
// D-08: ALL sections defined here — no inline strings allowed anywhere in the codebase

export const ptBR = {
  nav: {
    logo: 'RiegosDev',
    links: {
      sobre: 'Sobre',
      servicos: 'O que fazemos',
      portfolio: 'Projetos',
      depoimentos: 'Depoimentos',
      processo: 'Como funciona',
      contato: 'Contato',
    },
    langToggle: 'EN',
  },
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
  portfolio: {
    sectionTitle: 'Portfólio',
    headline: 'Projetos que já entregamos',
    viewDetails: 'Ver detalhes',
    close: 'Fechar',
    technologies: 'Tecnologias',
    status: 'Status',
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
        'Oportunidade esfria fora do horário',
      ],
      after: [
        'Resposta no tempo certo',
        'Dúvidas respondidas com a linguagem da empresa',
        'Lead encaminhado para o próximo passo',
      ],
    },
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

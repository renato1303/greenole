import { SlideData, TeamMember, PhaseInfo, DeliverableItem, PricingOption } from '../types';

export const SLIDES_CONFIG: SlideData[] = [
  {
    id: 'cover',
    number: '01',
    title: 'Proposta Comercial',
    kicker: 'Sense Sales × Greenole',
    theme: 'black',
    speakerNotes: [
      'Abertura formal da reunião com o time da Greenole.',
      'Destacar o objetivo: transformar o conhecimento e a autoridade da Greenole em um evento de alta conversão.',
      'Reforçar o início previsto para 15 de setembro de 2026.'
    ]
  },
  {
    id: 'who-we-are',
    number: '02',
    title: 'Estratégia e crescimento com base no que realmente funciona',
    kicker: 'Quem é a Sense Sales',
    theme: 'white',
    brandbar: '02 · Sense Sales',
    speakerNotes: [
      'Somos estrategistas e especialistas em crescimento unindo negócios, marketing, vendas e tecnologia.',
      'Metodologia baseada em experimentação prática e adaptação contínua, sem achismos.',
      'Abordagem sem fórmulas prontas, adaptada ao cenário real para gerar resultados mensuráveis e sustentáveis.'
    ]
  },
  {
    id: 'team',
    number: '03',
    title: 'Um time, dois papéis complementares',
    kicker: 'Quem conduz o projeto',
    theme: 'black',
    brandbar: '03 · Squad Dedicado',
    speakerNotes: [
      'Apresentar Renato e Allan como pontos de contato diretos e sêniores.',
      'Renato: Automação & Growth, especialista em arquitetura de infraestrutura digital e resolução de alta complexidade.',
      'Allan: Estratégia & Mídia, especialista em direcionamento, posicionamento de marca e crescimento macro da operação.'
    ]
  },
  {
    id: 'portfolio-1',
    number: '04',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 01',
    theme: 'white',
    brandbar: '04 · Portfólio 01',
    speakerNotes: [
      'Apresentar o primeiro painel de marcas atendidas pelo nosso squad.',
      'Destaque para empresas de tecnologia, sustentabilidade e serviços B2B.',
      'Metodologia comprovada de aquisição e autoridade de marca.'
    ]
  },
  {
    id: 'portfolio-2',
    number: '05',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 02',
    theme: 'white',
    brandbar: '05 · Portfólio 02',
    speakerNotes: [
      'Apresentar o segundo painel de marcas aceleradas.',
      'Casos de sucesso em tráfego qualificado, retenção e posicionamento comercial.',
      'Validação de modelos em diferentes mercados e verticais.'
    ]
  },
  {
    id: 'portfolio-3',
    number: '06',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 03',
    theme: 'white',
    brandbar: '06 · Portfólio 03',
    speakerNotes: [
      'Apresentar o terceiro painel de marcas de grande porte e autoridade consolidada.',
      'Experiência em operações de alta escala e complexidade de mercado.',
      'Reforçar como essa mesma maturidade estratégica será aplicada na Greenole.'
    ]
  },
  {
    id: 'context',
    number: '07',
    title: 'Vender autoridade antes de vender produto',
    kicker: 'Contexto & Oportunidade',
    theme: 'green-deep',
    brandbar: '07 · Contexto',
    speakerNotes: [
      'No mercado B2B, a decisão de compra é complexa e exige confiança prévia.',
      'O webinar funciona como o grande catalisador de autoridade da Greenole.',
      'Nosso papel é preencher essa sala com tomadores de decisão qualificados.'
    ]
  },
  {
    id: 'macro-methodology',
    number: '08',
    title: 'Três fases, do discovery ao lançamento',
    kicker: 'Como trabalhamos',
    theme: 'white',
    brandbar: '08 · Metodologia',
    speakerNotes: [
      'Visão macro do projeto ao longo dos 90 dias.',
      'Mês 1 é a fundação técnica e arquitetura sem brechas.',
      'Mês 2 acumula tração, audiência e leads pré-aquecidos.',
      'Mês 3 é a execução precisa do evento e fechamento comercial.'
    ]
  },
  {
    id: 'week1-discovery',
    number: '09',
    title: 'Discovery & Alinhamento Estratégico',
    kicker: 'Semana 1 · Início 15 de setembro',
    theme: 'black',
    brandbar: '09 · Fase 1 — Estruturação',
    speakerNotes: [
      'Na Semana 1, mapeamos a fundo o ICP (Perfil de Cliente Ideal) da Greenole.',
      'Análise dos principais concorrentes e posicionamento de valor.',
      'Construção do roteiro temático e da promessa irresistível do webinar.'
    ]
  },
  {
    id: 'weeks2-3-tactical',
    number: '10',
    title: 'Infraestrutura do lançamento',
    kicker: 'Semanas 2 e 3 · Tático',
    theme: 'green-deep',
    brandbar: '10 · Fase 1 — Estruturação',
    speakerNotes: [
      'Construção da esteira técnica completa.',
      'Páginas de captura com tempo de carregamento ultrarrápido e mobile-first.',
      'Setup de tracking server-side (Meta CAPI, GA4, GTM) para zero perda de dados.',
      'Régua de automação de WhatsApp e e-mails de confirmação instantânea.'
    ]
  },
  {
    id: 'week4-warmup',
    number: '11',
    title: 'De pé para o aquecimento',
    kicker: 'Semana 4',
    theme: 'black',
    brandbar: '11 · Fase 1 — Estruturação',
    speakerNotes: [
      'Virada de chave no final do primeiro mês.',
      'Start nas primeiras campanhas de tráfego teste e pré-aquecimento.',
      'Reunião de Sprint 01 para apresentar os primeiros dados e refinar criativos.'
    ]
  },
  {
    id: 'month2-warmup',
    number: '12',
    title: 'Geração de leads e aquecimento de audiência',
    kicker: 'Mês 2',
    theme: 'white',
    brandbar: '12 · Fase 2 — Aquecimento',
    speakerNotes: [
      'Foco total em volume com qualidade e CPL controlado.',
      'Nutrição contínua nos canais (Grupo VIP WhatsApp + E-mails semanais).',
      'Testes A/B intensivos de criativos (vídeos, carrosséis, estáticos).'
    ]
  },
  {
    id: 'month3-launch',
    number: '13',
    title: 'O mês do lançamento',
    kicker: 'Mês 3',
    theme: 'black',
    brandbar: '13 · Fase 3 — Lançamento',
    speakerNotes: [
      'Pico da operação: intensificação de verba e frequência de lembretes.',
      'War room ao vivo durante o webinar para suporte a dúvidas e links.',
      'Régua pós-webinar: gravação para faltantes e contato comercial imediato para participantes.'
    ]
  },
  {
    id: 'deliverables',
    number: '14',
    title: 'Entregáveis da proposta',
    kicker: 'O que está incluso',
    theme: 'white',
    brandbar: '14 · Escopo',
    speakerNotes: [
      'Clareza total do escopo contratual sem letras miúdas.',
      'Cobrimos todas as 4 frentes: Estratégia, Técnico, Mídia e Conversão.',
      'Garantia de alinhamentos semanais de sprint para prestação de contas contínua.'
    ]
  },
  {
    id: 'investment',
    number: '15',
    title: 'Três meses, um só objetivo: o lançamento',
    kicker: 'Investimento & Condições',
    theme: 'lime',
    brandbar: '15 · Investimento',
    speakerNotes: [
      'Apresentar a modalidade de investimento recorrente.',
      'Previsibilidade e fluxo de caixa parcelado em 3 vezes de US$ 1.200.',
      'Apoio integral de Renato & Allan por 90 dias.'
    ]
  },
  {
    id: 'investment-onetime',
    number: '16',
    title: 'Condição Especial · Pagamento à Vista',
    kicker: 'Investimento & Condições',
    theme: 'black',
    brandbar: '16 · Pagamento À Vista',
    speakerNotes: [
      'Apresentar a modalidade de pagamento integral à vista por US$ 3.300.',
      'Destacar a economia imediata de US$ 300.',
      'Garantia de prioridade e kick-off em 15 de setembro.'
    ]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 'portfolio-1',
    slideNumber: '04',
    brandbar: '04 · Portfólio 01',
    kicker: 'Portfólio · Painel 01',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Histórico comprovado de impacto: operações que confiaram na nossa estratégia, tráfego e tecnologia para escalar resultados.',
    image: '/1.jpeg',
    tag: 'Painel 01 · Institucional & Tecnologia'
  },
  {
    id: 'portfolio-2',
    slideNumber: '05',
    brandbar: '05 · Portfólio 02',
    kicker: 'Portfólio · Painel 02',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Marcas aceleradas com funis de alta conversão, posicionamento estratégico de mercado e geração contínua de leads qualificados.',
    image: '/2.jpeg',
    tag: 'Painel 02 · Escala & Crescimento'
  },
  {
    id: 'portfolio-3',
    slideNumber: '06',
    brandbar: '06 · Portfólio 03',
    kicker: 'Portfólio · Painel 03',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Grandes marcas e players de mercado atendidos com esteiras completas de automação, mídia de performance e autoridade de marca.',
    image: '/3.jpeg',
    tag: 'Painel 03 · Marcas Consolidadas'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Renato',
    initial: 'R',
    role: 'Automação & Growth',
    photo: '/link%20ceo.jpg',
    focus: 'Especialista em Arquitetura de infraestrutura digital, entregando otimizações diárias e resoluções de demandas de alta complexidade sistêmica'
  },
  {
    name: 'Allan',
    initial: 'A',
    role: 'Estratégia & Mídia',
    photo: '/allan.jpeg',
    focus: 'Especialista em Direcionando e Posicionamento de marca, entregando de forma macro estratégias para crescimento da operação e otimizações dos fluxos de operação.'
  }
];

export const PHASES_DATA: PhaseInfo[] = [
  {
    id: 'fase1',
    number: '01',
    month: 'Mês 1 · Setembro',
    title: 'Estruturação',
    objective: 'Discovery, arquitetura digital, esteira de criativos e infraestrutura de dados para o lançamento.',
    highlights: [
      'Imersão profunda no ICP e dores do decisor',
      'Construção de LPs com alta taxa de conversão',
      'Setup de rastreamento com Meta CAPI + GA4',
      'Campanhas piloto de validação de audiência'
    ],
    kpis: 'LPs no ar, 100% de tracking validado, 1ª sprint entregue.'
  },
  {
    id: 'fase2',
    number: '02',
    month: 'Mês 2 · Outubro',
    title: 'Aquecimento',
    objective: 'Geração contínua de leads qualificados, nutrição de base e construção de autoridade antecipada.',
    highlights: [
      'Escala gradual do orçamento em canais validados',
      'Comunidade VIP no WhatsApp com taxa de entrega alta',
      'Testes contínuos de mensagens e abordagens',
      'Otimização diária de CPL e CTR dos criativos'
    ],
    kpis: 'CPL dentro da meta, volume de leads acumulado, base VIP engajada.'
  },
  {
    id: 'fase3',
    number: '03',
    month: 'Mês 3 · Novembro',
    title: 'Lançamento',
    objective: 'Intensificação de campanhas de recall, execução do webinar e conversão direta em pipeline.',
    highlights: [
      'Blitz de lembretes nas 48h e 1h antes do evento',
      'War Room em tempo real durante a transmissão',
      'Régua de recuperação para faltantes com replay',
      'Passagem de bastão quente para o comercial fechar'
    ],
    kpis: 'Taxa de presença no webinar > 35%, leads convertidos no pitch.'
  }
];

export const DELIVERABLES_LIST: DeliverableItem[] = [
  {
    id: 'd1',
    title: 'Pesquisa de ICP & Estudo de Mercado',
    category: 'Estratégia',
    detail: 'Mapeamento detalhado dos decisores, dores latentes, gatilhos de compra e benchmark de posicionamento.',
    timeline: 'Semana 1'
  },
  {
    id: 'd2',
    title: 'Arquitetura Digital & Roteiro do Lançamento',
    category: 'Estratégia',
    detail: 'Documento master com toda a jornada do lead, cronograma de disparos e roteiro estruturado do webinar.',
    timeline: 'Semana 1-2'
  },
  {
    id: 'd3',
    title: 'Páginas de Captura & Confirmação',
    category: 'Tracking & Tech',
    detail: 'Desenvolvimento e otimização de Landing Pages responsivas, de altíssimo carregamento e foco em conversão.',
    timeline: 'Semana 2'
  },
  {
    id: 'd4',
    title: 'Tracking Avançado (Meta CAPI + GA4 + GTM)',
    category: 'Tracking & Tech',
    detail: 'Instalação de rastreamento server-side para contornar bloqueios de cookies e garantir 100% de precisão de atribuição.',
    timeline: 'Semana 2-3'
  },
  {
    id: 'd5',
    title: 'Automação de WhatsApp & Régua de E-mails',
    category: 'Conversão',
    detail: 'Fluxos automáticos de boas-vindas, lembretes de aula, envio de materiais e sequência pós-evento.',
    timeline: 'Semana 3'
  },
  {
    id: 'd6',
    title: 'Briefing & Roteirização de Criativos',
    category: 'Mídia & Anúncios',
    detail: 'Direcionamento de ganchos visuais e roteiros para vídeos e estáticos de alta tração para Meta e LinkedIn.',
    timeline: 'Semana 2-4'
  },
  {
    id: 'd7',
    title: 'Gestão de Campanhas de Aquecimento',
    category: 'Mídia & Anúncios',
    detail: 'Compra de mídia diária focada em captação qualificada com distribuição inteligente de budget.',
    timeline: 'Mês 2'
  },
  {
    id: 'd8',
    title: 'Campanhas de Lançamento & Retargeting de Urgência',
    category: 'Mídia & Anúncios',
    detail: 'Ativação de campanhas de alta frequência nos dias que antecedem a live e pós-evento para faltantes.',
    timeline: 'Mês 3'
  },
  {
    id: 'd10',
    title: 'Reuniões Semanais de Sprint & Dashboard de Métricas',
    category: 'Estratégia',
    detail: 'Alinhamentos executivos de 30 min toda semana com relatório transparente de KPIs e próximos passos.',
    timeline: 'Recorrente (90 dias)'
  }
];

export const PRICING_OPTIONS: PricingOption[] = [
  {
    type: 'monthly',
    label: 'Plano Recorrente',
    amount: 'US$ 1.200',
    period: '/mês',
    description: 'Cobrança mensal previsível dividida ao longo dos 3 meses de contrato.',
    benefits: [
      'Acompanhamento completo por 90 dias',
      'Todas as fases inclusas (Estruturação, Aquecimento e Lançamento)',
      'Sprints semanais e canal direto com Renato & Allan'
    ],
    isHighlighted: false
  },
  {
    type: 'onetime',
    label: 'Pagamento À Vista',
    amount: 'US$ 3.300',
    period: 'total',
    badge: 'Economia de US$ 300',
    description: 'Pagamento único integral na aprovação da proposta para os 3 meses.',
    benefits: [
      'Economia imediata de US$ 300 em relação ao parcelado',
      'Acesso prioritário e início imediato no dia 15 de setembro',
      'Escopo integral coberto com garantia de entrega',
      'Condição especial para aceleração de infraestrutura'
    ],
    isHighlighted: true
  }
];

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectMedia = {
  label: string;
  image: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  details: string;
  stack: string[];
  features: string[];
  image: string;
  gallery?: ProjectMedia[];
  links: ProjectLink[];
};

export const navLinks = [
  { id: "about", title: "Sobre" },
  { id: "work", title: "Experiência" },
  { id: "contact", title: "Contato" },
];

export const services = [
  { title: "Desenvolvedor Front-end", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_portfolio/main/src/assets/web.png" },
  { title: "Especialista Microsoft 365", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_portfolio/main/src/assets/mobile.png" },
  { title: "SharePoint Framework (SPFx)", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_portfolio/main/src/assets/backend.png" },
  { title: "Automação de Processos", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_portfolio/main/src/assets/creator.png" },
];

export const technologies = [
  {
    group: "Front-end corporativo",
    items: ["React.js", "TypeScript", "SPFx", "SCSS", "Context API", "UI responsiva"],
  },
  {
    group: "Microsoft 365",
    items: ["SharePoint Online", "PnPJS", "Microsoft Graph", "Power Automate", "Digital Workplace"],
  },
  {
    group: "Integrações e dados",
    items: ["Node.js", "Express", "APIs REST", "MySQL", "Sustentação de aplicações"],
  },
  {
    group: "Entrega",
    items: ["Requisitos", "Documentação técnica", "Troubleshooting", "Performance", "Acessibilidade"],
  },
];

export const experiences = [
  {
    title: "Desenvolvedor Pleno",
    company_name: "Ímpar",
    icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_portfolio/main/src/assets/company/starbucks.png",
    iconBg: "#383E56",
    date: "Junho 2022 - Atual",
    points: [
      "Desenvolvimento de WebParts customizadas com SPFx e React.js para SharePoint Online, com foco em intranets, portais corporativos e soluções de Digital Workplace.",
      "Construção de interfaces corporativas com React.js, TypeScript, JavaScript, SCSS e componentes reutilizáveis, priorizando usabilidade, performance e manutenção.",
      "Integração de aplicações front-end com APIs REST, listas do SharePoint, Microsoft Graph e serviços do ecossistema Microsoft 365.",
      "Criação e melhoria de fluxos automatizados com Power Automate para otimização de rotinas internas, aprovações, notificações e processos críticos.",
      "Levantamento de requisitos, análise funcional, apoio à implantação, produção de documentação técnica e sustentação contínua junto às equipes de negócio e TI.",
      "Atuação em projetos para clientes de grande porte, incluindo Vale, Banco Safra, Grupo Fleury, Prudential do Brasil e MAG Seguros.",
      "Entregas voltadas à experiência do usuário, confiabilidade, aderência a processos corporativos e alinhamento com objetivos estratégicos dos clientes.",
    ],
  },
  {
    title: "Analista de Suporte Técnico em Software",
    company_name: "Informarca Comércio e Serviços LTDA",
    icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_portfolio/main/src/assets/company/tesla.png",
    iconBg: "#E6DEDD",
    date: "Janeiro 2019 - Maio 2022",
    points: [
      "Suporte a usuários de software de gestão desenvolvido internamente, com análise de incidentes, orientação técnica e acompanhamento de resolução.",
      "Execução de testes de versão, validação funcional, apoio à análise de sistemas e comunicação de ajustes necessários ao time responsável.",
      "Utilização de banco de dados MySQL para consultas, validações e apoio à sustentação do sistema.",
      "Atendimento técnico com foco em estabilidade, clareza para o usuário e continuidade operacional.",
    ],
  },
  {
    title: "Analista de Infraestrutura de TI",
    company_name: "Informarca Comércio e Serviços LTDA",
    icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_portfolio/main/src/assets/company/shopify.png",
    iconBg: "#383E56",
    date: "Dezembro 2010 - Janeiro 2019",
    points: [
      "Administração e suporte de redes, servidores, estações de trabalho, sistemas operacionais e ambiente de infraestrutura corporativa.",
      "Criação e manutenção de políticas de segurança, backup, controle de acessos e suporte técnico aos usuários.",
      "Atuação em troubleshooting, sustentação de ambientes, melhoria de processos internos e suporte à continuidade dos serviços de TI.",
      "Base técnica consolidada em confiabilidade de software, integração de sistemas, atendimento ao usuário, segurança e operação.",
    ],
  },
];

export const education = [
  {
    title: "Pós-graduação em Engenharia de Software",
    institution: "Descomplica Faculdade Digital",
    date: "Junho 2024 - Abril 2025",
  },
  {
    title: "Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
    institution: "UNOPAR",
    date: "Fevereiro 2015 - Dezembro 2018",
  },
  {
    title: "Bacharelado em Psicologia",
    institution: "Universidade Católica de Petrópolis",
    date: "2009 - 2013",
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Profissional" },
];

export const projects: Project[] = [
  {
    title: "RequestFlow",
    description: "Aplicação web fullstack para gerenciamento de solicitações internas, simulando um fluxo corporativo de aprovação.",
    details: "O sistema possui autenticação, perfis de acesso, cadastro de solicitações, acompanhamento de status, aprovação, reprovação com comentário obrigatório, histórico de movimentações e dashboard com indicadores.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT"],
    features: [
      "Autenticação e controle de permissões (RBAC)",
      "Fluxo de aprovação com histórico detalhado",
      "Dashboard com indicadores de performance",
      "Consumo de APIs REST e persistência em banco",
    ],
    image: "/projects/requestflow.png",
    gallery: [
      {
        label: "Preview",
        image: "/projects/requestflow.png",
        url: "https://requestflow-282z.onrender.com",
      },
    ],
    links: [
      { label: "Live Preview", url: "https://requestflow-282z.onrender.com" },
      { label: "Código", url: "https://github.com/cristianolimaribeiro/RequestFlow" },
    ],
  },
  {
    title: "App Pulse",
    description:
      "Aplicação web fullstack para monitoramento da disponibilidade e saúde operacional de aplicações e APIs.",
    details:
      "Permite cadastrar serviços, executar verificações periódicas, registrar tempo de resposta, código HTTP, falhas, incidentes e histórico de status. Também conta com dashboard de indicadores, filtros por ambiente, criticidade e status, além de controle de acesso por perfil.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "REST"],
    features: [
      "Monitoramento operacional com histórico de status e incidentes",
      "Dashboard com indicadores e filtros por ambiente e criticidade",
      "Integração com APIs REST e persistência em PostgreSQL",
      "Arquitetura fullstack com jobs agendados e tratamento de falhas",
    ],
    image: "/projects/apppulse.png",
    gallery: [
      {
        label: "Preview",
        image: "/projects/apppulse.png",
        url: "https://apppulse-frontend.onrender.com/",
      },
    ],
    links: [
      { label: "Live Preview", url: "https://apppulse-frontend.onrender.com/" },
      { label: "Código", url: "https://github.com/cristianolimaribeiro/AppPulse" },
    ],
  },
  {
    title: "Corporate UI Kit",
    description:
      "Biblioteca de componentes React reutilizáveis para acelerar o desenvolvimento de aplicações corporativas com consistência visual, acessibilidade e tipagem forte.",
    details:
      "Reúne botões, campos de formulário, alertas, tabelas, modais, paginação e estados de carregamento, com documentação no Storybook e testes automatizados.",
    stack: ["React", "TypeScript", "Vite", "Storybook", "Vitest", "CSS Modules"],
    features: [
      "Componentes reutilizáveis com foco em consistência visual",
      "Documentação técnica e demonstração via Storybook",
      "Validação com testes automatizados e React Testing Library",
      "Arquitetura preparada para consumo em aplicações corporativas",
    ],
    image: "/projects/corporate-ui-demo.png",
    gallery: [
      {
        label: "Demo",
        image: "/projects/corporate-ui-demo.png",
        url: "https://corporate-ui-kit.vercel.app/",
      },
      {
        label: "Storybook",
        image: "/projects/corporate-ui-storybook.png",
        url: "https://corporate-ui-kit-storybook.vercel.app/",
      },
    ],
    links: [
      { label: "Demo", url: "https://corporate-ui-kit.vercel.app/" },
      { label: "Storybook", url: "https://corporate-ui-kit-storybook.vercel.app/" },
      { label: "Código", url: "https://github.com/cristianolimaribeiro/Corporate-UI-Kit" },
    ],
  },
];

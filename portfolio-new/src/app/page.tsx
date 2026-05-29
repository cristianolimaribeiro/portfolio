"use client";

import { motion } from "motion/react";
import { BentoCard } from "@/components/BentoCard";
import { 
  Atom, 
  Code2, 
  Layers, 
  Server, 
  Terminal, 
  User, 
  Mail,
  ExternalLink,
  Briefcase,
  MapPin,
  MessageSquare,
  Phone,
  ArrowUpRight,
  FolderKanban,
  MapPinHouse
} from "lucide-react";

// Manually defining brand icons since they were removed in lucide-react 1.0+
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const timelineItems = [
    {
      company: "Ímpar",
      role: "Desenvolvedor Front-end Pleno",
      period: "2022 - Atual",
      desc: "Especialista em SPFx e React. Projetos de Digital Workplace para grandes empresas.",
      icon: Code2,
      color: "text-accent"
    },
    {
      company: "Informarca",
      role: "Analista de Suporte",
      period: "2019 - 2022",
      desc: "Suporte técnico especializado e análise de sistemas de gestão internos.",
      icon: MessageSquare,
      color: "text-blue-400"
    },
    {
      company: "Informarca",
      role: "Analista de Infra",
      period: "2010 - 2019",
      desc: "Gestão de infraestrutura crítica, redes e segurança corporativa.",
      icon: Server,
      color: "text-purple-400"
    }
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden px-4 py-20 md:px-8 lg:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-4"
      >
        {/* Hero Card (2x2) */}
        <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
          <BentoCard className="flex h-full flex-col justify-between p-8 md:p-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm"
              >
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Disponível para Novos Desafios
              </motion.div>
              
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                Cristiano <br />
                <span className="text-foreground/30">Lima Ribeiro</span>
              </h1>
              
              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-foreground/60 md:text-xl">
                Desenvolvedor Front-end Pleno especializado em criar interfaces performáticas e experiências digitais memoráveis.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="https://github.com/cristianolimaribeiro" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/10 hover:border-white/20"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/cristiano-lima-ribeiro/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/10 hover:border-white/20"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a 
                href="mailto:cristiano.lima.ribeiro@gmail.com"
                className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-5 py-2.5 text-sm font-medium transition-all hover:bg-white/10 hover:border-white/20"
              >
                <Mail className="h-4 w-4" />
                E-mail
              </a>
            </div>
          </BentoCard>
        </motion.div>

        {/* Tech Stack Card (1x2) */}
        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
          <BentoCard className="flex h-full flex-col p-8">
            <h3 className="mb-8 flex items-center gap-2 text-xl font-semibold tracking-tight">
              <Terminal className="h-5 w-5 text-accent" />
              Core Tech
            </h3>
            
            <div className="flex flex-col gap-4">
              {[
                { name: "React", desc: "Next.js & Native", icon: Atom, color: "text-blue-400", bg: "bg-blue-400/10" },
                { name: "TypeScript", desc: "Clean & Scalable", icon: Code2, color: "text-blue-500", bg: "bg-blue-500/10" },
                { name: "SPFx", desc: "SharePoint Dev", icon: Layers, color: "text-teal-400", bg: "bg-teal-400/10" },
                { name: "Node.js", desc: "API & Tooling", icon: Server, color: "text-green-400", bg: "bg-green-400/10" },
              ].map((tech) => (
                <div 
                  key={tech.name}
                  className="group flex items-center gap-4 rounded-2xl border border-transparent bg-white/5 p-4 transition-all hover:border-white/10 hover:bg-white/[0.08]"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tech.bg} ${tech.color}`}>
                    <tech.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{tech.name}</p>
                    <p className="text-xs text-foreground/40">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-8">
              <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-accent/5 to-transparent p-4">
                <p className="text-xs font-medium uppercase tracking-widest text-accent/50">Current Focus</p>
                <p className="mt-1 text-sm font-medium">Arquitetura de Micro-Frontends</p>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Experience Card (2x2) */}
        <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
          <BentoCard className="flex h-full flex-col p-8 md:p-10">
            <h3 className="mb-8 flex items-center gap-2 text-xl font-semibold tracking-tight">
              <Briefcase className="h-5 w-5 text-accent" />
              Experiência Profissional
            </h3>
            
            <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-white/10">
              {timelineItems.map((item, idx) => (
                <motion.div 
                  key={item.company}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex gap-6 pl-12"
                >
                  <div className={`absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-white/5 ${item.color} z-10`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h4 className="font-semibold">{item.company}</h4>
                      <span className="text-xs font-medium text-accent/60">• {item.period}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80">{item.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </BentoCard>
        </motion.div>

        {/* Profile Summary Card (1x2) moved down or integrated */}
        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
          <BentoCard className="flex h-full flex-col p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <User className="h-6 w-6" />
            </div>
            
            <h3 className="mb-4 text-2xl font-semibold tracking-tight">Sobre Mim</h3>
            
            <div className="space-y-4 text-sm leading-relaxed text-foreground/60">
              <p>
                Profissional com mais de <span className="text-foreground">10 anos de experiência</span> e sólido background em infraestrutura de TI.
              </p>
              <p>
                Minha transição para o desenvolvimento foi movida pela paixão em construir. Hoje, foco em <span className="text-foreground font-medium text-accent/90">entregar soluções excepcionais</span>.
              </p>
              <p>
                Acredito que a tecnologia deve ser invisível e a experiência, inesquecível.
              </p>
            </div>
            
            <div className="mt-auto pt-10">
              <a 
                href="#" 
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-sm font-medium transition-all hover:bg-white/10"
              >
                <span>Download CV</span>
                <ExternalLink className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </BentoCard>
        </motion.div>

        {/* Contact Card (1x1) */}
        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
          <BentoCard className="flex h-full flex-col justify-between bg-gradient-to-br from-accent/10 to-transparent p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-background">
                <Phone className="h-4 w-4" />
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <MapPinHouse className="h-4 w-4 text-accent/60" />
                <span>Petrópolis, RJ</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Mail className="h-4 w-4 text-accent/60" />
                <span className="truncate">cristiano.lima.ribeiro@gmail.com</span>
              </div>
            </div>
            
            <a 
              href="https://wa.me/5524981481103"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-background transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </BentoCard>
        </motion.div>

        {/* Legacy Projects Card (1x1) */}
        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
          <BentoCard className="group flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <FolderKanban className="h-5 w-5 text-accent" />
              <div className="h-2 w-2 rounded-full bg-accent/20" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Projetos Antigos</h3>
              <p className="mt-1 text-xs text-foreground/40 line-clamp-2">Explorar legado de soluções em HTML/JS.</p>
            </div>
            
            <div className="mt-4 flex gap-1">
              {['/spotify', '/weather', '/clock'].map((p) => (
                <div key={p} className="h-1.5 flex-1 rounded-full bg-white/5 group-hover:bg-accent/20 transition-colors" />
              ))}
            </div>
            
            <a 
              href="/privacy.html" 
              className="mt-4 flex items-center justify-between text-xs font-medium text-accent hover:underline"
            >
              Acessar Portfolio Antigo
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </BentoCard>
        </motion.div>
      </motion.div>
    </main>
  );
}

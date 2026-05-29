# Cyber-Bento Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reformular o portfólio usando Next.js, TypeScript e Framer Motion com estética Cyber-Bento.

**Architecture:** Next.js App Router com Tailwind CSS para estilização e Framer Motion para animações. Estrutura de grid responsiva (Bento) com Mesh Gradient de fundo.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide React (ícones).

---

### Task 1: Setup do Projeto Next.js

**Files:**
- Create: `portfolio-new/package.json`
- Create: `portfolio-new/tsconfig.json`
- Create: `portfolio-new/tailwind.config.ts`

- [ ] **Step 1: Inicializar projeto Next.js**
Run: `npx create-next-app@latest portfolio-new --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
Expected: Projeto criado na pasta `portfolio-new`.

- [ ] **Step 2: Instalar dependências adicionais**
Run: `cd portfolio-new && npm install motion lucide-react clsx tailwind-merge`
Expected: Dependências instaladas com sucesso.

- [ ] **Step 3: Configurar cores globais no Tailwind**
Modify: `portfolio-new/tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "rgba(255, 255, 255, 0.05)",
        accent: "#22C55E",
        border: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Commit inicial**
Run: `git add portfolio-new && git commit -m "chore: initial nextjs setup for new portfolio"`

---

### Task 2: Fundo Mesh Gradient Futurista

**Files:**
- Create: `portfolio-new/src/components/MeshGradient.tsx`
- Modify: `portfolio-new/src/app/layout.tsx`

- [ ] **Step 1: Criar componente de fundo animado**
Create: `portfolio-new/src/components/MeshGradient.tsx`
```tsx
"use client";
import { motion } from "motion/react";

export const MeshGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[120px]"
      />
    </div>
  );
};
```

- [ ] **Step 2: Adicionar ao layout global**
Modify: `portfolio-new/src/app/layout.tsx` para incluir `<MeshGradient />`.

- [ ] **Step 3: Commit**
Run: `git add . && git commit -m "feat: add animated mesh gradient background"`

---

### Task 3: Componente BentoCard (Glassmorphism)

**Files:**
- Create: `portfolio-new/src/components/BentoCard.tsx`

- [x] **Step 1: Implementar card com efeitos de vidro e hover**
Create: `portfolio-new/src/components/BentoCard.tsx`
```tsx
"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      className={`relative overflow-hidden rounded-3xl border border-border bg-surface p-6 backdrop-blur-xl transition-colors hover:border-white/20 ${className}`}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity hover:opacity-100" />
    </motion.div>
  );
};
```

- [x] **Step 2: Commit**
Run: `git add . && git commit -m "feat: add reusable glassmorphic BentoCard component"`

---

### Task 4: Layout Principal (Bento Grid)

**Files:**
- Modify: `portfolio-new/src/app/page.tsx`

- [ ] **Step 1: Definir a estrutura de grid responsiva**
Modify: `portfolio-new/src/app/page.tsx` para usar CSS Grid (`grid-cols-1 md:grid-cols-4`) e preencher com o conteúdo do CV.

- [ ] **Step 2: Implementar Hero Box e Tech Stack**
Showcase do nome "Cristiano Lima" e ícones animados usando `motion/react`.

- [ ] **Step 3: Commit**
Run: `git add . && git commit -m "feat: implement main bento grid layout with hero and tech stack"`

---

### Task 5: Seção de Experiência e Contato

**Files:**
- Modify: `portfolio-new/src/app/page.tsx`

- [ ] **Step 1: Adicionar timeline de experiência**
Usar dados do CV para criar uma lista estilizada dentro de um card `col-span-2`.

- [ ] **Step 2: Adicionar links de contato e redes sociais**
Ícones da `lucide-react` com animação de hover.

- [ ] **Step 3: Commit**
Run: `git add . && git commit -m "feat: add experience timeline and contact links to bento grid"`

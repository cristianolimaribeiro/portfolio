# Spec Design: Portfólio Cristiano Lima - Cyber-Bento Next.js

## 1. Visão Geral
Refazer o portfólio pessoal usando Next.js (App Router), TypeScript e Framer Motion. O design deve ser "inovador", misturando a organização de um Bento Grid com a estética futurista de gradientes mesh e glassmorphism.

## 2. Design System (UI/UX Pro Max)
- **Base Style:** Modern Dark (Cinema Mobile) - Foco em OLED, pretos profundos e iluminação ambiente.
- **Background:** Aurora Evolved (Mesh Gradient). Malha fluida de cores (#5E6AD2, #1E293B, #0F172A) com animação lenta.
- **Components:** Glassmorphism. Cards com `backdrop-blur(15px)`, bordas semi-transparentes `rgba(255,255,255,0.1)` e efeitos de hover brilhantes.
- **Typography:** Inter (Google Fonts). Técnica, limpa e premium.
- **Colors:**
  - Background: `#050505` (Deep Dark)
  - Surface: `rgba(255, 255, 255, 0.05)`
  - Accent: `#22C55E` (Success/Run Green) para botões e estados ativos.
  - Border: `rgba(255, 255, 255, 0.08)`

## 3. Arquitetura de Componentes (Bento Grid)
- **Grid Layout:** CSS Grid com áreas nomeadas para responsividade (Bento Box).
- **Seções Principais:**
  1. **Hero Box (2x2):** Título dinâmico, breve introdução e CTA "Contrate-me".
  2. **Tech Stack Box (1x2):** Ícones animados das principais tecnologias (React, TS, M365).
  3. **M365 Badge (1x1):** Destaque visual para SPFx e Power Automate.
  4. **Experience Box (2x2):** Timeline interativa das experiências listadas no CV.
  5. **Education/Certifications (1x2):** Lista de formação e cursos.
  6. **Contact/Socials (1x1):** Links rápidos para LinkedIn, GitHub e Instagram.

## 4. Animações (Framer Motion / Motion)
- **Entrada:** `staggerChildren` para os cards surgirem um a um.
- **Interação:** `whileHover={{ scale: 1.02, y: -5 }}` com brilho na borda.
- **Scroll:** `useScroll` e `useTransform` para o Mesh Gradient de fundo reagir ao movimento da página.

## 5. Estratégia de Conteúdo (Baseado no CV)
- Focar no perfil **Front-end Pleno** e especialista em **Microsoft 365**.
- Manter links para as pastas de projetos atuais (clínica, spotify, etc) em um card específico de "Showcase Legado" ou "Experimental".

## 6. Verificação Técnica
- [ ] Responsividade testada em 375px a 1440px.
- [ ] Contraste de texto mínimo 4.5:1.
- [ ] Performance: Uso de `next/image` e `next/font`.
- [ ] Acessibilidade: `aria-labels` nos ícones e navegação por teclado.

# 🏍️ Coopstar Express — Site Institucional

Landing page profissional da **Coopstar Express**, empresa de motoboys especializada em entregas rápidas e logística urbana corporativa em São Paulo e Grande SP.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-E91E63?logo=framer)

---

## 📌 Objetivo

Este projeto faz parte do meu **portfólio de desenvolvimento Front-end**. O objetivo foi refatorar completamente um site institucional antigo (HTML/jQuery) para uma stack moderna, demonstrando habilidades em:

- **Componentização** com React/Next.js
- **Design responsivo** e profissional com Tailwind CSS
- **Animações suaves** com Framer Motion
- **SEO** e boas práticas de performance
- **UI/UX focado em conversão** (CTAs estratégicos)

---

## 📋 Sobre o Projeto

Site "one page" de **alta conversão** focado em gerar contatos via WhatsApp para uma empresa de motoboys. O design transmite **agilidade**, **confiança** e **profissionalismo**, com identidade visual baseada em vermelho corporativo e estética de logística B2B — sem remeter a aplicativos de delivery de comida.

### Seções da Página

| Seção | Descrição |
|---|---|
| **Hero** | Imagem full-screen com overlay vermelho, headline impactante e CTA WhatsApp |
| **Sobre Nós** | História da empresa, +9 anos de mercado, diferenciais |
| **Serviços** | Moto Frete, Delivery Corporativo, Fora da Capital |
| **Como Funciona** | Fluxo visual em 3 passos: Contato → Coleta → Entrega |
| **Galeria** | Frota, equipe e operação em ação |
| **Contato / Footer** | Banner CTA vermelho, telefones, e-mail, endereço e horário |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework React com SSG e otimização automática |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização utility-first |
| [Framer Motion](https://www.framer.com/motion/) | Animações suaves no scroll e transições |
| [Lucide React](https://lucide.dev/) | Ícones SVG leves e consistentes |
| [React Icons](https://react-icons.github.io/react-icons/) | Ícone do WhatsApp (Font Awesome) |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para código seguro |

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (incluído com o Node.js)

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/TFS-Data/projeto-coopstar-express.git

# 2. Entrar na pasta do projeto
cd projeto-coopstar-express

# 3. Instalar as dependências
npm install

# 4. Rodar em modo de desenvolvimento
npm run dev
```



### Build de produção

```bash
# Gerar build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

---

## 📁 Estrutura do Projeto

```
projeto-coopstar-express/
├── public/                  # Imagens e assets estáticos
│   ├── hero_bg.png          # Imagem de fundo do Hero
│   ├── logistics_op.png     # Imagem de operação logística
│   ├── team_riders.png      # Imagem da equipe/frota
│   └── delivery_action.png  # Imagem de rastreio/ação
├── src/
│   ├── app/
│   │   ├── globals.css      # Paleta de cores e estilos globais
│   │   ├── layout.tsx       # Layout raiz (SEO, fontes, metadata)
│   │   └── page.tsx         # Página principal (composição)
│   └── components/
│       ├── Navbar.tsx        # Navegação sticky com blur
│       ├── Hero.tsx          # Seção hero de alto impacto
│       ├── About.tsx         # Sobre a empresa
│       ├── Services.tsx      # Cards de serviços + diferenciais
│       ├── HowItWorks.tsx    # Fluxo "Como funciona" em 3 passos
│       ├── Gallery.tsx       # Galeria de imagens interativa
│       └── Footer.tsx        # Rodapé com CTA e contatos
├── next.config.ts           # Configuração Next.js
├── tsconfig.json            # Configuração TypeScript
├── package.json             # Dependências e scripts
└── README.md                # Este arquivo
```

---

## ⚡ Destaques Técnicos

- **SSG** (Static Site Generation) — páginas pré-renderizadas para máxima performance
- **Otimização de imagens** automática via `next/image` (AVIF/WebP)
- **Font swap** para evitar bloqueio visual no carregamento
- **Componentes client** isolados com `"use client"` — apenas o necessário no client-side
- **Output standalone** preparado para deploy em containers (Docker, Vercel, etc.)
- **SEO completo** — Open Graph, meta tags, hierarquia de headings, robots

---

## 📄 Licença

Projeto desenvolvido para fins de estudo e portfólio.

Desenvolvido por [TFS Data](https://github.com/TFS-Data).

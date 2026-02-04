# Empty AI Agency Portfolio Website

Modern portfolio website showcasing Empty AI Agency's projects, capabilities, and technology stack.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Deployment**: Vercel
- **Version Control**: Git/GitHub

## 🏗️ Project Structure

```
website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects showcase
│   ├── about/             # About us
│   ├── contact/           # Contact page
│   ├── case-studies/      # Case study pages
│   ├── layout.tsx         # Root layout with nav & footer
│   └── globals.css        # Global styles
├── public/                # Static assets
├── .env.example           # Environment variables template
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vazio/empty-ai-agency.git
cd empty-ai-agency/website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel

#### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push to main branch

#### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## 🎨 Design System

### Brand Colors

- **Primary (Orange/Amber)**: `#f97316` (orange-500)
- **Accent Dark**: `#ea580c` (orange-600)
- **Accent Light**: `#fb923c` (orange-400)

### Typography

- System font stack for optimal performance
- Clean, modern sans-serif hierarchy

### Components

- Fully responsive (mobile-first)
- Dark mode support via CSS variables
- Accessible and semantic HTML

## 📄 Pages

- **Home** (`/`): Hero, services, featured project, tech stack
- **Projects** (`/projects`): Portfolio showcase
- **About** (`/about`): Team, mission, tech stack, approach
- **Contact** (`/contact`): Contact information and form
- **Case Studies** (`/case-studies`): Detailed project breakdowns
  - Dashboard Financeiro Angola (`/case-studies/dashboard-financeiro`)

## 🔧 Configuration

### Environment Variables

See `.env.example` for required environment variables.

### Vercel Configuration

`vercel.json` includes:
- Security headers (X-Frame-Options, CSP, etc.)
- Region configuration
- Build settings

## 📈 Performance

- Server Components for optimal performance
- Image optimization via Next.js Image
- TailwindCSS for minimal CSS bundle
- Target: Lighthouse score 90+

## 🤖 Built By

**EmptyBot** and autonomous sub-agents
- Automated code generation
- Continuous testing & deployment
- Intelligent workflow orchestration

## 📝 License

© 2024-2026 Empty AI Agency. All rights reserved.

## 🔗 Links

- **Repository**: https://github.com/Vazio/empty-ai-agency
- **GitHub**: https://github.com/empty-VL
- **Email**: empty.vl.angola@gmail.com

---

Built with ❤️ and 🤖 by Empty AI Agency

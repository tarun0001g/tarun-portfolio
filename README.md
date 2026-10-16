# Tarun Makavana — Developer Portfolio

## 🌐 Live Portfolio

Visit the deployed website: [https://tarun-portfolio-beta-three.vercel.app/](https://tarun-portfolio-beta-three.vercel.app/)

A responsive, dark-themed personal portfolio built to present my journey as a **backend-first Full Stack Developer**. It brings together my technical skills, selected projects, internship experience, education, and contact information in one place.

While building this project, I focused on understanding the technologies I used—not just connecting libraries—so I could learn how the components, animations, styling, and build process work together.

## ✨ Features

- **Hero section** with an animated role/typewriter effect.
- **About section** describing my development approach and background.
- **Skills section** organized by languages, frontend, backend, databases, tools, and computer science fundamentals.
- **Project showcase** with project summaries, technology stacks, GitHub links, and live-demo links where available.
- **Experience and education sections** for internships, academic details, and certifications.
- **Responsive navigation** with active-section behavior.
- **Motion and interaction effects**, including reveal animations, tilt cards, cursor glow, and scroll progress.
- **Project content managed centrally** in `src/data/content.ts`, making it easier to update portfolio details without rewriting section components.
- **Contact form fallback** that opens the visitor's email application when a Formspree form ID is not configured.
- **SEO and social sharing metadata**, including Open Graph/Twitter metadata and structured data.
- **Accessibility considerations**, including semantic landmarks, a skip link, visible focus states, keyboard-operable interactions, and reduced-motion support.
- **Lazy-loaded lower-page sections** to help keep the initial page load lightweight.

## 🛠️ Tech Stack

### Frontend
- **React 18** — component-based UI
- **TypeScript** — typed components and data
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion** — animations and interaction effects
- **Lucide React** and **React Icons** — interface and technology icons

### Development and Build Tools
- **Vite** — development server and production bundler
- **PostCSS** and **Autoprefixer** — CSS processing
- **TypeScript compiler** — type checking and build validation
- **npm** — package management

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── Tarun-Makavana-Resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Background.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── Intro.tsx
│   │   ├── Navbar.tsx
│   │   ├── Reveal.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── TechIcon.tsx
│   │   └── TiltCard.tsx
│   ├── data/
│   │   └── content.ts
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   ├── useFinePointer.ts
│   │   └── useTyping.ts
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Strengths.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Run Locally

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/tarun0001g/portfolio.git
   cd portfolio
   ```

   Replace the repository URL above if your GitHub repository uses a different name.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal (Vite normally uses `http://localhost:5173`).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Type-checks the project and creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally for preview |
| `npm run typecheck` | Runs TypeScript project checks without emitting build output |

## 📝 Customize the Portfolio

Most portfolio content is maintained in **`src/data/content.ts`**.

| Content to update | Location |
| --- | --- |
| Name, role, tagline, contact details, social links, resume path | `site` |
| About text, principles, and stats | `about` |
| Skill categories and technologies | `skillGroups` |
| Project descriptions, stacks, and links | `projects` |
| Internship details | `experience` |
| Degree, certifications, and education details | `education` |
| Strength cards | `strengths` |
| Contact-section text | `contact` |

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and configure the variables when needed:

```env
VITE_SITE_URL=https://tarun-portfolio-beta-three.vercel.app
VITE_FORMSPREE_ID=your_formspree_form_id
```

- **`VITE_SITE_URL`** — The public website URL used for canonical URLs, social metadata, and SEO files. Update it if your deployment URL changes.
- **`VITE_FORMSPREE_ID`** — An optional Formspree form ID used to submit contact-form messages. If it is not configured, the form falls back to opening the visitor's email application with a pre-filled message.

**Security note:** Do not put private API keys or secrets in frontend environment variables. Variables prefixed with `VITE_` are exposed to client-side code.

## 🌐 Deployment

This portfolio is built with React, TypeScript, and Vite and is deployed on **Vercel**.

- **Live Portfolio:** https://tarun-portfolio-beta-three.vercel.app/
- **Build command:** `npm run build`
- **Output directory:** `dist`

To deploy updates, connect the GitHub repository to Vercel or push changes to the connected repository. Configure environment variables in the Vercel project settings if required, and set `VITE_SITE_URL` to the deployed website URL.

## 📚 What I Practiced and Learned

Building this portfolio gave me practical experience with:

- Breaking a page into reusable React components and section-based layouts.
- Using TypeScript to describe data and improve development feedback.
- Styling responsive interfaces with Tailwind CSS and custom CSS design tokens.
- Adding animations and interaction effects with Framer Motion.
- Organizing repeated content as data rather than hard-coding it into every component.
- Managing dependencies and scripts with npm.
- Running type checks and producing a production build with Vite.
- Improving accessibility with semantic structure, keyboard focus, and reduced-motion preferences.
- Preparing metadata for search engines and social link previews.
- Configuring environment variables for deployment-specific behavior.

I aim to keep improving the portfolio as I build more projects and deepen my understanding of frontend engineering.

## 👨‍💻 About Me

I'm a B.E. Information Technology final year student and a backend-first Full Stack Developer based in Gujarat, India. I enjoy learning how systems work and applying that knowledge by building practical projects.

- **GitHub:** [tarun0001g](https://github.com/tarun0001g)
- **LinkedIn:** [Tarun Makavana](https://www.linkedin.com/in/tarun-makavana-52601427a)
- **Email:** [tarun0006g@gmail.com](mailto:tarun0006g@gmail.com)

---

If you have feedback or suggestions, feel free to connect with me.

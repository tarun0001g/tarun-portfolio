# Tarun Makavana — Portfolio

A dark-mode-first, single-page portfolio built with **React 18 + Vite + TypeScript**, **Tailwind CSS v3** and **Framer Motion**.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to /dist
npm run preview    # serve the production build locally
```

Requires Node 18+.

## Edit your content (no component changes needed)

Everything you see on the page lives in **`src/data/content.ts`**:

| Want to change…                         | Edit this export |
| --------------------------------------- | ---------------- |
| Name, tagline, links, email, phone      | `site`           |
| About text, principles, animated counters | `about`        |
| Skill groups and chips                  | `skillGroups`    |
| Projects (description, stack, links)    | `projects`       |
| Internships                             | `experience`     |
| Degree, certifications                  | `education`      |
| "Why work with me" cards                | `strengths`      |
| Contact heading and text                | `contact`        |

Fields marked `// TODO` are waiting on you:

- **SecureAuthentication live demo** — add a `live:` URL on that project and a "Live Demo" button appears automatically.
- **CPI vs CGPA** — your latest CV shows CPI 8.16 (through Sem 6); an older resume shows CGPA 8.43. The site uses 8.16. Change `education.score` and the last counter in `about.stats` if you prefer the other.

Your resume lives at `public/Tarun-Makavana-Resume.pdf`. Replace that file (keep the name) whenever you update it.

New skill icons: add the skill name to a group in `content.ts`. To give it a logo, map it in `src/components/TechIcon.tsx` (brand icons come from `react-icons/si`; otherwise a generic icon is used).

## Change the accent color

Open **`src/index.css`** and edit the three accent variables in `:root` (space-separated RGB):

```css
--accent-1: 99 102 241;  /* indigo */
--accent-2: 139 92 246;  /* violet */
--accent-3: 34 211 238;  /* cyan   */
```

Every gradient, glow, button and highlight follows. Background shade is `--bg`, text is `--fg` / `--muted`.

## Make the contact form send you emails

1. Create a free form at [formspree.io](https://formspree.io) and copy the form ID (the part after `/f/`).
2. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID=yourFormId`.
3. On Vercel/Netlify, add the same variable in the project's environment settings.

Until you do this, the form opens the visitor's email app with the message pre-filled (so it still works).

## Set your real domain (SEO)

Set `VITE_SITE_URL` (for example `https://tarun-makavana.vercel.app`) in `.env` and in your host's environment settings. The build uses it for the canonical URL, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt`.

`public/og-image.png` (1200×630) is the link-preview image shown on LinkedIn/WhatsApp. Replace it with a custom one any time.

## Deploy (zero config)

**Vercel:** push to GitHub → *Add New Project* → import the repo → Deploy. Framework preset "Vite" is detected automatically.

**Netlify:** push to GitHub → *Add new site* → import the repo. Build command `npm run build`, publish directory `dist`.

## Project structure

```
src/
  data/content.ts      all site content
  sections/            Hero, About, Skills, Projects, Experience, Education, Strengths, Contact, Footer
  components/          Navbar, Reveal, TiltCard, TechIcon, Background, CursorGlow, Intro, ScrollProgress...
  hooks/               useActiveSection, useTyping, useFinePointer
  index.css            design tokens, glass/utility classes
```

## Accessibility and performance notes

- Honors `prefers-reduced-motion` (animations, typing, marquee, cursor glow and intro are all disabled or simplified).
- Semantic landmarks, one `h1`, ordered headings, skip link, visible focus rings, keyboard-operable menu and project dialog (Esc closes).
- Below-the-fold sections are code-split; fonts use `display=swap`.
- Cursor glow is desktop-only (hover-capable pointers).

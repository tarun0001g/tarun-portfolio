import type { IconType } from 'react-icons'
import { FaJava } from 'react-icons/fa6'
import {
  SiAxios,
  SiC,
  SiCloudinary,
  SiCss,
  SiEjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPhp,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import {
  Binary,
  Blocks,
  BrainCircuit,
  Cable,
  Cpu,
  Database,
  Network,
  Sparkles,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

/** Maps a skill name (as written in content.ts) to its brand/concept icon. */
const icons: Record<string, IconType> = {
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  Python: SiPython,
  C: SiC,
  'React.js': SiReact,
  'Redux Toolkit': SiRedux,
  Axios: SiAxios,
  'Tailwind CSS': SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss,
  EJS: SiEjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'JWT Authentication': SiJsonwebtokens,
  PostgreSQL: SiPostgresql,
  'Prisma ORM': SiPrisma,
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Render: SiRender,
  Cloudinary: SiCloudinary,
}

// Concept skills with no brand logo get a generic lucide icon.
const concepts: Record<string, LucideIcon> = {
  SQL: Database,
  'REST APIs': Cable,
  'MVC Architecture': Blocks,
  'Thunder Client': Terminal,
  'Prompt Engineering': Sparkles,
  DSA: Binary,
  OOP: Workflow,
  DBMS: Database,
  'Operating Systems': Cpu,
  'Computer Networks': Network,
  'Software Engineering': BrainCircuit,
}

const brandColors: Record<string, string> = {
  Java: '#ED8B00',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  PHP: '#777BB4',
  Python: '#3776AB',
  C: '#A8B9CC',
  'React.js': '#61DAFB',
  'Redux Toolkit': '#764ABC',
  Axios: '#5A29E4',
  'Tailwind CSS': '#06B6D4',
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  EJS: '#B4CA65',
  'Node.js': '#5FA04E',
  'Express.js': '#F4F4F5',
  'JWT Authentication': '#D63AFF',
  PostgreSQL: '#4169E1',
  'Prisma ORM': '#F4F4F5',
  MongoDB: '#47A248',
  Mongoose: '#880000',
  MySQL: '#4479A1',
  Git: '#F05032',
  GitHub: '#F4F4F5',
  Vercel: '#F4F4F5',
  Render: '#46E3B7',
  Cloudinary: '#3448C5',
}

export function TechIcon({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  const Brand = icons[name]
  if (Brand) return <Brand className={className} style={{ color: brandColors[name] }} aria-hidden="true" />
  const Concept = concepts[name] ?? Terminal
  return <Concept className={className} aria-hidden="true" />
}

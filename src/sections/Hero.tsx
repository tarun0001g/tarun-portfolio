import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaJava, FaLinkedin } from 'react-icons/fa6'
import { SiNodedotjs, SiPostgresql, SiReact } from 'react-icons/si'
import { site } from '../data/content'
import { useTyping } from '../hooks/useTyping'

const socials = [
  { href: site.github, label: 'GitHub', Icon: FaGithub },
  { href: site.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
]

const floaters = [
  { Icon: SiReact, className: '-left-5 -top-6 text-[#61DAFB]', delay: 0 },
  { Icon: SiNodedotjs, className: '-right-4 -top-4 text-emerald-400', delay: 1.2 },
  { Icon: SiPostgresql, className: 'left-6 -bottom-5 text-sky-400', delay: 0.6 },
  { Icon: FaJava, className: 'right-8 -bottom-6 text-orange-400', delay: 1.8 },
]

/** Code-themed hero visual built from real facts about me. */
function CodeCard() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-md">
      {/* glowing orb behind the card */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-accent/[0.08] blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="glass relative overflow-hidden rounded-3xl"
      >
        <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-zinc-600" />
          <span className="h-3 w-3 rounded-full bg-zinc-500" />
          <span className="h-3 w-3 rounded-full bg-zinc-400" />
          <span className="ml-3 font-mono text-xs text-muted">tarun.ts</span>
        </div>
        <pre
          className="overflow-x-auto px-5 py-5 font-mono text-[0.8rem] leading-7 text-muted sm:text-sm"
          aria-label="A code snippet summarizing Tarun: full stack developer, stack React, Node.js, PostgreSQL, Java, open to work"
        >
          <code>
            <span className="text-coral">const</span> <span className="text-accent">tarun</span> = {'{'}
            {'\n  '}role: <span className="text-accent">"Full Stack Developer"</span>,
            {'\n  '}stack: [<span className="text-accent">"React"</span>,{' '}
            <span className="text-accent">"Node.js"</span>,
            {'\n    '}
            <span className="text-accent">"PostgreSQL"</span>, <span className="text-accent">"Java"</span>],
            {'\n  '}approach: <span className="text-accent">"learn it, then build it"</span>,
            {'\n  '}learning: <span className="text-fg">true</span>,
            {'\n  '}openToWork: <span className="text-fg">true</span>,
            {'\n'}
            {'}'};
          </code>
        </pre>
      </motion.div>

      {floaters.map(({ Icon, className, delay }) => (
        <motion.span
          key={className}
          aria-hidden="true"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
          className={`glass absolute flex h-14 w-14 items-center justify-center rounded-2xl ${className}`}
        >
          <Icon className="h-7 w-7" />
        </motion.span>
      ))}
    </div>
  )
}

export function Hero() {
  const role = useTyping(site.roles)

  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center overflow-x-clip pb-16 pt-32 lg:pt-28">
      <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.5 }}
            className="glass mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-accent" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            {site.availability}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-hero font-bold"
          >
            Hi, I'm <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-5 flex min-h-[2.25rem] items-center font-display text-xl font-medium text-fg sm:text-2xl md:text-3xl"
            aria-label={site.roles.join(', ')}
          >
            <span aria-hidden="true">{role}</span>
            <span aria-hidden="true" className="ml-1 inline-block h-7 w-[3px] animate-blink bg-accent-3" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.95, duration: 0.6 }}
            className="mt-6 max-w-xl text-lead text-muted"
          >
            <strong className="font-semibold text-fg">{site.tagline}</strong> {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={site.resume} download className="btn-ghost">
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.25, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <ul className="flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {site.location}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  )
}

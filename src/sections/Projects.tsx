import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Expand, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { RevealGroup, RevealItem } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { TiltCard } from '../components/TiltCard'
import { projects, type Project } from '../data/content'

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-2.5">
        <FaGithub className="h-4 w-4" aria-hidden="true" /> GitHub
        <span className="sr-only"> repository for {project.title} (opens in a new tab)</span>
      </a>
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5">
          Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> of {project.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  )
}

/** Accessible case-study dialog: Esc to close, focus moves in and returns on close. */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-bg/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-surface p-6 sm:rounded-3xl sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface hover:bg-accent/[0.08]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="eyebrow mb-3">{project.kicker}</p>
        <h3 id="project-modal-title" className="pr-12 font-display text-3xl font-bold">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
        <p className="mt-5 text-lead text-muted">{project.summary}</p>

        <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-fg">What I built</h4>
        <ul className="space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-muted">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent-3" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-fg">Tech stack</h4>
        <ul className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <ProjectLinks project={project} />
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          eyebrow="03 / Featured projects"
          title="Things I've built to really understand how they work."
          text="Each project started with learning the concept first, then building it properly: auth, data modeling, state, deployment."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <RevealItem key={project.slug} className={i === 0 ? 'lg:col-span-2' : ''}>
              <TiltCard className="h-full">
                <article
                  className={`glass flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:border-accent-2/40 sm:p-8 ${
                    i === 0 ? 'lg:flex-row lg:gap-10' : ''
                  }`}
                >
                  <div className="flex-1">
                    <p className="eyebrow mb-3">{project.kicker}</p>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 text-muted">{project.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 6).map((t) => (
                        <li key={t} className="tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-8 flex flex-col justify-end gap-4 ${i === 0 ? 'lg:mt-0 lg:w-64' : ''}`}>
                    <ProjectLinks project={project} />
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex min-h-[44px] items-center gap-2 self-start text-sm font-medium text-accent hover:text-accent-hover"
                    >
                      <Expand className="h-4 w-4" aria-hidden="true" /> Read the case study
                      <span className="sr-only"> for {project.title}</span>
                    </button>
                  </div>
                </article>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.slug} project={selected} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  )
}

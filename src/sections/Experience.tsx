import { Briefcase } from 'lucide-react'
import { RevealGroup, RevealItem } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/content'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          id="experience-title"
          eyebrow="04 / Experience"
          title="Real teams, real workflows, real code."
        />

        <RevealGroup className="relative ml-3 space-y-10 border-l border-border pl-8 md:ml-6 md:pl-12">
          {experience.map((job) => (
            <RevealItem key={job.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[3.2rem] top-1 flex h-9 w-9 items-center justify-center rounded-full border border-accent-2/50 bg-bg text-accent-3 md:-left-[4.2rem]"
              >
                <Briefcase className="h-4 w-4" />
              </span>

              <article className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{job.role}</h3>
                    <p className="mt-1 text-accent-3">
                      {job.company} <span className="text-muted">· {job.mode}</span>
                    </p>
                  </div>
                  <p className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
                    {job.period}
                  </p>
                </div>

                <ul className="mt-5 list-disc space-y-3 pl-5 text-muted marker:text-accent-2">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

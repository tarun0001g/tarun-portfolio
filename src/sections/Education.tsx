import { Award, GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data/content'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading id="education-title" eyebrow="05 / Education" title="A strong foundation, verified." />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="glass h-full rounded-3xl p-6 sm:p-8">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-2/40 bg-accent-2/10 text-accent-3">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-2xl font-bold">{education.degree}</h3>
              <p className="mt-2 text-lead text-muted">{education.school}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="tag !text-sm">{education.period}</span>
                <span className="tag !text-sm !text-accent-3">{education.score}</span>
              </div>
              <p className="mt-6 text-muted">{education.practice}</p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="glass h-full rounded-3xl p-6 sm:p-8">
              <h3 className="mb-5 flex items-center gap-3 font-display text-xl font-bold">
                <Award className="h-5 w-5 text-accent-3" aria-hidden="true" /> Certifications
              </h3>
              <ul className="space-y-4">
                {education.certifications.map((c) => (
                  <li key={c.title} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-muted">
                      {c.issuer} · {c.year}
                    </p>
                    <p className="mt-2 font-mono text-xs text-accent-3">{c.score}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

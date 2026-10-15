import { Flame, Layers, Puzzle, Rocket, Sparkles, Zap, type LucideIcon } from 'lucide-react'
import { RevealGroup, RevealItem } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { TiltCard } from '../components/TiltCard'
import { strengths } from '../data/content'

const icons: Record<string, LucideIcon> = {
  zap: Zap,
  sparkles: Sparkles,
  puzzle: Puzzle,
  layers: Layers,
  rocket: Rocket,
  flame: Flame,
}

export function Strengths() {
  return (
    <section id="strengths" aria-labelledby="strengths-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          id="strengths-title"
          eyebrow="06 / Why work with me"
          title="What you get when I join your team."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => {
            const Icon = icons[s.icon] ?? Zap
            return (
              <RevealItem key={s.title}>
                <TiltCard className="h-full" max={4}>
                  <article className="glass h-full rounded-3xl p-6 transition duration-300 hover:border-accent-2/40">
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-1/25 to-accent-3/20 text-accent-3">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 text-muted">{s.text}</p>
                  </article>
                </TiltCard>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}

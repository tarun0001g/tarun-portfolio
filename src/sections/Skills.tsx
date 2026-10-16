import { RevealGroup, RevealItem } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { TechIcon } from '../components/TechIcon'
import { skillGroups } from '../data/content'

// Marquee shows the most recognisable tools (the full list is in the cards below).
const marqueeItems = [
  'React.js',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Prisma ORM',
  'MongoDB',
  'Java',
  'JavaScript',
  'TypeScript',
  'PHP',
  'Axios',
  'Redux Toolkit',
  'Tailwind CSS',
  'JWT Authentication',
  'Git',
  'GitHub',
  'Vercel',
  'Python',
]

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 items-center gap-4 pr-4 ${hidden ? 'marquee-dup' : ''}`}
      aria-hidden={hidden || undefined}
    >
      {marqueeItems.map((name) => (
        <li key={name} className="glass flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium">
          <TechIcon name={name} className="h-5 w-5 text-accent-3" />
          {name}
        </li>
      ))}
    </ul>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          id="skills-title"
          eyebrow="02 / Tech stack"
          title="Tools I build with, fundamentals I think with."
          text="No progress bars, just the stack I've actually used to ship projects and internship work."
        />
      </div>

      {/* Animated marquee */}
      <div className="marquee-mask mb-14 overflow-hidden" role="presentation">
        <div className="marquee-track flex w-max animate-marquee">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>

      <div className="container-x">
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <RevealItem key={group.category}>
              <article className="glass h-full rounded-3xl p-6 transition duration-300 hover:border-accent-2/40">
                <h3 className="text-xl font-semibold">{group.category}</h3>
                <p className="mb-5 mt-1 text-sm text-muted">{group.blurb}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      <TechIcon name={item} className="h-4 w-4 text-accent-3" />
                      {item}
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

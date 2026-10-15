import { Reveal } from './Reveal'

type Props = { eyebrow: string; title: string; text?: string; id?: string }

export function SectionHeading({ eyebrow, title, text, id }: Props) {
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="text-h2 font-bold text-fg">
        {title}
      </h2>
      {text && <p className="mt-5 text-lead text-muted">{text}</p>}
    </Reveal>
  )
}

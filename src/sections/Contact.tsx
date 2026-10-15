import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { contact, site } from '../data/content'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'fallback'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

const fieldClass =
  'w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-fg placeholder:text-muted/70 transition focus:border-accent/70 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }
  return (
    <button type="button" onClick={copy} className="btn-ghost !px-4 !py-2 text-xs">
      {copied ? <Check className="h-4 w-4 text-accent" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? 'Copied!' : 'Copy email'}
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: real visitors never fill this hidden field
    if (data.get('company')) return

    // No form service configured yet: open the visitor's email app with the message prefilled
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('fallback')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8" noValidate={false}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the role or project…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot (hidden from people and assistive tech) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send message'} <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === 'sent' && <span className="text-accent">Thanks! Your message is on its way. I'll reply soon.</span>}
          {status === 'fallback' && <span className="text-muted">Opening your email app with the message ready to send…</span>}
          {status === 'error' && (
            <span className="text-coral">
              Something went wrong. Please email me directly at{' '}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  )
}

const links = [
  { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
  { Icon: FaLinkedin, label: 'LinkedIn', value: 'tarun-makavana', href: site.linkedin },
  { Icon: FaGithub, label: 'GitHub', value: 'tarun0001g', href: site.github },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading id="contact-title" eyebrow="07 / Contact" title={contact.heading} text={contact.text} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-4">
              {links.map(({ Icon, label, value, href }) => {
                const external = href.startsWith('http')
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="glass flex items-center gap-4 rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-2/10 text-accent-3">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-muted">{label}</span>
                        <span className="block truncate font-medium">{value}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
              <li className="flex flex-wrap items-center justify-between gap-3 px-1 pt-2">
                <p className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.location}
                </p>
                <CopyEmail />
              </li>
              <li className="px-1 text-sm text-muted">Open to relocation: {site.openTo}</li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Designed and built by me with React, Tailwind and Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition hover:text-accent"
          >
            <FaGithub className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition hover:text-accent"
          >
            <FaLinkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="#top" className="btn-ghost !px-4 !py-2 text-xs">
            Back to top <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

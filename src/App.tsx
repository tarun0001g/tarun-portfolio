import { MotionConfig } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Background } from './components/Background'
import { CursorGlow } from './components/CursorGlow'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'

// Below-the-fold sections are code-split so the first paint stays fast.
const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })))
const Experience = lazy(() => import('./sections/Experience').then((m) => ({ default: m.Experience })))
const Education = lazy(() => import('./sections/Education').then((m) => ({ default: m.Education })))
const Strengths = lazy(() => import('./sections/Strengths').then((m) => ({ default: m.Strengths })))
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })))
const Footer = lazy(() => import('./sections/Footer').then((m) => ({ default: m.Footer })))

export default function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation respect prefers-reduced-motion
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only z-[110] rounded-full bg-fg px-4 py-2 font-medium text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Intro />
      <ScrollProgress />
      <Background />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Projects />
          <Experience />
          <Education />
          <Strengths />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </MotionConfig>
  )
}

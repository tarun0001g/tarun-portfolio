import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { site } from '../data/content'

const SEEN_KEY = 'tm-intro-seen'

/** Brief page-load intro. Shown once per browser session and skipped for reduced motion. */
export function Intro() {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem(SEEN_KEY)
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!show) return
    if (reduced) {
      setShow(false)
      return
    }
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => {
      setShow(false)
      try {
        sessionStorage.setItem(SEEN_KEY, '1')
      } catch {
        /* storage unavailable: intro just plays again next visit */
      }
    }, 1500)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [show, reduced])

  return (
    <AnimatePresence>
      {show && !reduced && (
        <motion.div
          key="intro"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent-2/50 font-display text-3xl font-bold text-gradient shadow-glow"
          >
            {site.initials}
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.2 }}
            className="mt-8 h-[2px] w-40 origin-left rounded bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

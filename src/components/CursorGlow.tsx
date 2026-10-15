import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { useFinePointer } from '../hooks/useFinePointer'

/** Soft glow that trails the mouse. Desktop (hover-capable pointers) only, and off for reduced motion. */
export function CursorGlow() {
  const fine = useFinePointer()
  const reduced = useReducedMotion()
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 150, damping: 24, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 150, damping: 24, mass: 0.6 })

  useEffect(() => {
    if (!fine || reduced) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 200)
      y.set(e.clientY - 200)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [fine, reduced, x, y])

  if (!fine || reduced) return null
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[90px]"
    />
  )
}

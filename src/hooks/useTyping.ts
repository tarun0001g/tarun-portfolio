import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/** Types and deletes through `words` in a loop. Shows the first word statically if reduced motion is on. */
export function useTyping(words: string[], typeMs = 70, deleteMs = 35, holdMs = 1600): string {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return
    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs

    if (!deleting && text === word) delay = holdMs
    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => window.clearTimeout(timer)
  }, [text, deleting, index, words, reduced, typeMs, deleteMs, holdMs])

  return reduced ? words[0] : text
}

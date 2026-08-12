import { AnimatePresence, motion } from 'framer-motion'
import { Search, Terminal } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const commands = [
  { label: 'Explore Java Full Stack', target: 'stack' },
  { label: 'View Flutter & Mobile Work', target: 'stack' },
  { label: 'Open Project Systems', target: 'projects' },
  { label: 'View OpenShift Certification', target: 'openshift' },
  { label: 'Contact Monika', target: 'contact' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handler = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault()
        setOpen((value) => !value)
      }

      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const filteredCommands = useMemo(() => {
    return commands.filter((command) =>
      command.label.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  const goToSection = (target) => {
    setOpen(false)
    setQuery('')

    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <button
        className="command-trigger"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Terminal size={16} />
        <span>CTRL K</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="palette-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="palette"
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="palette-input">
                <Search size={18} />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search Monika's portfolio..."
                />
              </div>

              <div className="palette-results">
                {filteredCommands.map((command, index) => (
                  <button
                    key={command.label}
                    onClick={() => goToSection(command.target)}
                    type="button"
                  >
                    <span className="command-index">
                      0{index + 1}
                    </span>
                    {command.label}
                    <span>↵</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

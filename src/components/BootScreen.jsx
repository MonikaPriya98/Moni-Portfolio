import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = [
  'loading java.fullstack',
  'connecting flutter.mobile',
  'mounting aws.cloud',
  'initializing azure.devops',
  'verifying openshift.credentials',
]

export default function BootScreen() {
  const [visible, setVisible] = useState(
    () => sessionStorage.getItem('portfolioBooted') !== '1'
  )
  const [lineCount, setLineCount] = useState(0)

  useEffect(() => {
    if (!visible) return

    const lineTimer = window.setInterval(() => {
      setLineCount((count) => Math.min(count + 1, lines.length))
    }, 220)

    const finishTimer = window.setTimeout(() => {
      sessionStorage.setItem('portfolioBooted', '1')
      setVisible(false)
    }, 1800)

    return () => {
      window.clearInterval(lineTimer)
      window.clearTimeout(finishTimer)
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
        >
          <div className="boot-terminal">
            <div className="boot-dot-row">
              <span />
              <span />
              <span />
            </div>

            <div className="boot-title">MPMK // PORTFOLIO SYSTEM</div>

            <div className="boot-lines">
              {lines.slice(0, lineCount).map((line) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="prompt">&gt;</span> {line}
                  <span className="ok"> OK</span>
                </motion.div>
              ))}

              <motion.div
                className="system-ready"
                animate={{
                  opacity: lineCount === lines.length ? 1 : 0,
                }}
              >
                SYSTEM READY
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

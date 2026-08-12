import { useRef } from 'react'

export default function MagneticButton({
  children,
  href,
  secondary = false,
}) {
  const ref = useRef(null)

  const handleMouseMove = (event) => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2

    element.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)'
    }
  }

  return (
    <a
      ref={ref}
      className={`magnetic-btn ${secondary ? 'secondary' : ''}`}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  )
}

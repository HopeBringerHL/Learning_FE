import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  target: number
  suffix?: string
  decimals?: number
  duration?: number
}

export function CountUp({ target, suffix = '', decimals = 0, duration = 1200 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number | null>(null)
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [value, setValue] = useState(reducedMotion ? target : 0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const startedAt = performance.now()

        const animate = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setValue(target * eased)

          if (progress < 1) {
            frameRef.current = requestAnimationFrame(animate)
          }
        }

        frameRef.current = requestAnimationFrame(animate)
        observer.unobserve(entry.target)
      },
      { threshold: 0.5 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [duration, reducedMotion, target])

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

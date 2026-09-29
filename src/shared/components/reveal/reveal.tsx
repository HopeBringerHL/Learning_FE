import { type CSSProperties, type PropsWithChildren, useEffect, useRef, useState } from 'react'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

interface RevealProps extends PropsWithChildren {
  delay?: number
  direction?: RevealDirection
  className?: string
  threshold?: number
  once?: boolean
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [isVisible, setIsVisible] = useState(reducedMotion)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, reducedMotion, threshold])

  const style = {
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties

  return (
    <div
      ref={elementRef}
      style={style}
      className={['reveal', `reveal--${direction}`, isVisible ? 'is-visible' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

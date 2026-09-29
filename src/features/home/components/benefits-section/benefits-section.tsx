import type { HomeContent } from '../../types/home-content'
import { Reveal } from '@/shared/components/reveal/reveal'

interface BenefitsSectionProps {
  items: HomeContent[]
}

function BenefitIcon({ index }: { index: number }) {
  const baseClass = 'size-6 stroke-[#291f1e]'

  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
        <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" strokeWidth="1.8" />
        <path
          d="M8 6H5v1a4 4 0 0 0 4 4M16 6h3v1a4 4 0 0 1-4 4M12 12v4M9 20h6M10 16h4v4h-4z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
        <path
          d="M12 3 19 6v5c0 4.6-2.8 8.2-7 10-4.2-1.8-7-5.4-7-10V6l7-3Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
        <path d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="2" strokeWidth="1.8" />
        <circle cx="18" cy="18" r="2" strokeWidth="1.8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Zm16 0a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2ZM17 17c0 2-1.5 3-4 3h-1"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BenefitsSection({ items }: BenefitsSectionProps) {
  return (
    <section className="bg-[linear-gradient(90deg,#f0f4e8_0%,#f7efe6_100%)] px-6 py-16 lg:px-0 lg:py-20">
      <div className="mx-auto grid max-w-[1080px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={index * 80}>
            <article className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden border border-[#ece6dc] bg-white px-5 py-5 text-[#291f1e] shadow-[0_6px_18px_rgba(41,31,30,0.04)] transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(41,31,30,0.1)]">
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#8fa969] transition-transform duration-300 group-hover:scale-x-100" />

              <div>
                <h3 className="font-['Playfair_Display'] text-[19px] font-bold leading-[1.2] lg:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-2.5 font-['Outfit'] text-[12px] leading-[1.5] text-[#291f1e]/60 lg:text-[13px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#f7f3ec] ring-1 ring-[#dfd7ca] transition duration-300 group-hover:bg-[#eef3e5] group-hover:ring-[#8fa969]/40">
                  <BenefitIcon index={index} />
                </div>

                <span className="font-['Outfit'] text-[10px] uppercase tracking-[0.18em] text-[#291f1e]/30">
                  0{item.sortOrder}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

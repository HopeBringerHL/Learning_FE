import servicesArrow from '@/assets/icons/home/services/services-arrow.svg'
import { Reveal } from '@/shared/components/reveal/reveal'

import type { HomeContent } from '../../types/home-content'

interface ServicesSectionProps {
  items: HomeContent[]
}

export function ServicesSection({ items }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-[#fffcf0] px-6 py-24 lg:px-0 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_370px_60px] md:items-center">
          <Reveal direction="up">
            <h2 className="font-['Playfair_Display'] text-5xl font-bold leading-[1.05] text-[#291f1e] md:text-6xl lg:text-[70px]">
              Elevate Your Interiors
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="font-['Outfit'] text-xl leading-[1.35] text-[#291f1e] md:text-2xl">
              Designing interiors that leave a lasting impression.
            </p>
          </Reveal>
          <Reveal direction="scale" delay={220} className="hidden md:block">
            <div className="flex size-[60px] items-center justify-center border border-[#291f1e]">
              <img src={servicesArrow} alt="" className="size-8" />
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.id} direction="up" delay={index * 110}>
              <article className="group hover-lift-deep overflow-hidden bg-white">
                <div className="cinematic-image luxury-sweep overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-[340px] w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.065] lg:h-[380px]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold leading-tight text-[#291f1e] transition-colors duration-300 group-hover:text-[#6f8550]">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-['Outfit'] text-base leading-6 text-[#291f1e]/70">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

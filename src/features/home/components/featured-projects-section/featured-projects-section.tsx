import type { HomeContent } from '../../types/home-content'
import { Reveal } from '@/shared/components/reveal/reveal'

interface FeaturedProjectsSectionProps {
  items: HomeContent[]
}

export function FeaturedProjectsSection({ items }: FeaturedProjectsSectionProps) {
  const projects = items.slice(0, 3)

  return (
    <section id="projects" className="bg-[#fffcf0] px-6 py-20 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-[1060px]">
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((item, index) => (
            <Reveal key={item.id} direction="scale" delay={index * 130}>
              <article className="group hover-lift-deep relative h-[430px] overflow-hidden bg-[#eee7dc]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute bottom-4 left-4 right-4 flex items-end transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <div className="min-w-0 flex-1 bg-[#fffdf4] px-4 py-3 shadow-[0_10px_30px_rgba(41,31,30,0.1)]">
                    <h3 className="font-['Playfair_Display'] text-base font-bold leading-tight text-[#291f1e]">
                      {item.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 font-['Outfit'] text-[11px] leading-4 text-[#291f1e]/70">
                      {item.description ||
                        'The process begins with a thoughtful approach to proportion, texture and atmosphere.'}
                    </p>
                  </div>

                  <a
                    href="#gallery"
                    aria-label={`View ${item.title}`}
                    className="flex size-9 shrink-0 items-center justify-center bg-[#8fa969] text-sm text-[#291f1e] transition hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-[#7d965a] hover:text-[#291f1e]"
                  >
                    ↗
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

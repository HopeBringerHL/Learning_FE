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
            <Reveal key={item.id} direction="scale" delay={index * 130} className="min-w-0">
              <article className="group hover-lift-deep relative h-[430px] w-full overflow-hidden bg-[#eee7dc]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 block h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute bottom-4 left-4 right-4 z-10 grid min-h-[76px] max-w-full grid-cols-[minmax(0,1fr)_36px] overflow-hidden bg-[#fffdf4] shadow-[0_10px_30px_rgba(41,31,30,0.1)] transition-transform duration-700 ease-out md:group-hover:-translate-y-2">
                  <div className="min-w-0 px-4 py-3">
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
                    className="flex h-full items-center justify-center bg-[#8fa969] text-sm text-[#291f1e] transition-colors hover:bg-[#7d965a] hover:text-[#291f1e]"
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

import type { HomeContent } from '../../types/home-content'

interface BenefitsSectionProps {
  items: HomeContent[]
}

export function BenefitsSection({ items }: BenefitsSectionProps) {
  return (
    <section className="bg-[linear-gradient(90deg,#f1f4e7_0%,#f7eee4_100%)] px-6 py-14 lg:px-0 lg:py-16">
      <div className="mx-auto grid max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex min-h-[150px] flex-col justify-between bg-white px-4 py-4 text-[#291f1e] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(41,31,30,0.08)]"
          >
            <div>
              <h3 className="font-['Playfair_Display'] text-[16px] font-bold leading-[1.2] lg:text-[17px]">
                {item.title}
              </h3>
              <p className="mt-2 font-['Outfit'] text-[11px] leading-[1.35] text-[#291f1e]/65 lg:text-[12px]">
                {item.description}
              </p>
            </div>

            <div className="mt-4 flex items-center">
              <div className="relative h-6 w-10">
                <span className="absolute left-0 top-0 flex size-6 items-center justify-center rounded-full border-2 border-white bg-[#8fa969]">
                  <span className="size-1.5 rounded-full bg-white/90" />
                </span>
                <span className="absolute left-4 top-0 flex size-6 items-center justify-center rounded-full border-2 border-white bg-[#f4ece0]">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="size-3.5 object-contain transition duration-300 group-hover:scale-110"
                  />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

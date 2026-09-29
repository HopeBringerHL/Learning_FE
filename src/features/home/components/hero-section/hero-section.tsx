import type { HomeContent } from '../../types/home-content'

interface HeroSectionProps {
  data?: HomeContent
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#291f1e] text-white">
      <img
        src={data.imageUrl}
        alt={data.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto flex min-h-[620px] max-w-[1200px] items-end px-6 pb-12 pt-32 lg:px-0 lg:pb-14">
        <div className="grid w-full gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-14">
          <h1 className="max-w-[720px] font-['Playfair_Display'] text-5xl font-bold leading-[1.02] md:text-6xl lg:text-[74px]">
            {data.title}
          </h1>

          <div className="md:pb-1">
            <p className="max-w-[390px] font-['Outfit'] text-base leading-6 text-white/90 md:text-lg md:leading-7">
              {data.description}
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex h-[40px] min-w-[136px] items-center justify-center gap-4 border border-[#e7e0d2] bg-[#fffdf4] px-6 font-['Outfit'] text-[13px] font-semibold !text-[#291f1e] shadow-sm transition-colors hover:bg-[#f3efe3] hover:!text-[#291f1e]"
            >
              Contact Us
              <span aria-hidden="true" className="text-base leading-none !text-[#291f1e]">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

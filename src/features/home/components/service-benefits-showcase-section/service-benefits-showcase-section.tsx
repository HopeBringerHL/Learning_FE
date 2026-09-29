import statIcon01 from '@/assets/icons/home/services/services-icon-01.svg'
import statIcon02 from '@/assets/icons/home/services/services-icon-02.svg'
import statIcon03 from '@/assets/icons/home/services/services-icon-03.svg'
import statIcon04 from '@/assets/icons/home/services/services-icon-04.svg'
import benefitsImage from '@/assets/images/home/gallery/gallery-10.png'
import statsImage from '@/assets/images/home/gallery/gallery-11.png'
import { CountUp } from '@/shared/components/count-up/count-up'
import { Reveal } from '@/shared/components/reveal/reveal'

const benefitItems = [
  {
    title: 'Best Quality',
    description: 'We always provide high quality materials.',
  },
  {
    title: 'Free Shipping',
    description: 'Every single order ships for free. No extra credit need.',
  },
  {
    title: '30 Days Returns',
    description: 'Product returns are accepted within 30 days.',
  },
] as const

const stats = [
  { target: 250, suffix: '+', decimals: 0, label: 'Happy customer', icon: statIcon01 },
  { target: 600, suffix: '+', decimals: 0, label: 'Completed projects', icon: statIcon02 },
  { target: 1.8, suffix: 'K+', decimals: 1, label: 'Available Resources', icon: statIcon03 },
  { target: 11, suffix: 'K+', decimals: 0, label: 'Subscribers', icon: statIcon04 },
] as const

export function ServiceBenefitsShowcaseSection() {
  return (
    <section id="team" className="bg-[#fffcf0]">
      <div className="bg-[linear-gradient(90deg,#eef5e7_0%,#f6eee5_100%)] px-6 py-16 lg:px-0 lg:py-20">
        <div className="relative mx-auto grid max-w-[1060px] gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
          <Reveal direction="left" className="order-2 md:order-1">
            <div className="cinematic-image luxury-sweep overflow-hidden">
              <img
                src={benefitsImage}
                alt="Interior project with natural materials"
                className="h-[280px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[340px] md:h-[480px]"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={140} className="order-1 md:order-2">
            <div className="relative z-10 md:pl-4">
              <h2 className="max-w-[520px] font-['Playfair_Display'] text-[42px] font-bold leading-[0.98] text-[#291f1e] sm:text-5xl md:text-6xl">
                Benefits you get when our services.
              </h2>

              <div className="mt-7 space-y-5 sm:mt-8">
                {benefitItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-['Playfair_Display'] text-[17px] font-bold text-[#291f1e] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 max-w-none font-['Outfit'] text-[13px] leading-5 text-[#291f1e]/75 sm:max-w-[360px] sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-14 sm:py-16 lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-[1060px] gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((item, index) => (
              <Reveal key={item.label} direction="scale" delay={index * 100}>
                <article className="hover-lift-deep flex min-h-[150px] flex-col items-center justify-center border border-[#e8e0d4] bg-white px-4 text-center">
                  <img src={item.icon} alt="" className="size-7 object-contain" />
                  <strong className="mt-3 font-['Playfair_Display'] text-3xl font-bold text-[#291f1e]">
                    <CountUp target={item.target} suffix={item.suffix} decimals={item.decimals} />
                  </strong>
                  <span className="mt-1 font-['Outfit'] text-xs text-[#291f1e]/65">
                    {item.label}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="scale" delay={160}>
            <div className="cinematic-image luxury-sweep h-full overflow-hidden">
              <img
                src={statsImage}
                alt="Completed interior project"
                className="h-full min-h-[316px] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

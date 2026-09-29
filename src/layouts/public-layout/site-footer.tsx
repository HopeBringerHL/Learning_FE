import footerLogo from '@/assets/icons/home/footer/footer-logo.svg'
import footerSend from '@/assets/icons/home/footer/footer-send.svg'
import social01 from '@/assets/images/home/footer/footer-social-01.png'
import social02 from '@/assets/images/home/footer/footer-social-02.png'
import social03 from '@/assets/images/home/footer/footer-social-03.png'
import social04 from '@/assets/images/home/footer/footer-social-04.png'

const footerBenefits = [
  {
    title: 'High Quality',
    description: 'Crafted From Top Materials',
  },
  {
    title: 'Warranty Protection',
    description: 'Over 2 Years',
  },
  {
    title: 'Free Shipping',
    description: 'Order Over 150 $',
  },
  {
    title: '24 / 7 Support',
    description: 'Dedicated Support',
  },
] as const

const socials = [social01, social02, social03, social04] as const

function FooterBenefitIcon({ index }: { index: number }) {
  const baseClass = 'size-9 stroke-[#291f1e]'

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

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-white text-[#291f1e]">
      <section className="bg-[linear-gradient(90deg,#eef5e7_0%,#f7eee4_100%)] px-6 py-10 lg:px-0 lg:py-12">
        <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {footerBenefits.map((item, index) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center">
                <FooterBenefitIcon index={index} />
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] text-base font-bold leading-tight lg:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 font-['Outfit'] text-[11px] leading-4 text-[#291f1e]/65 lg:text-xs">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 lg:px-0 lg:py-14">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr_0.75fr_1.35fr] lg:gap-14">
            <div>
              <img src={footerLogo} alt="Luxury Interior" className="h-10 w-auto object-contain" />
              <p className="mt-7 max-w-[220px] font-['Outfit'] text-sm leading-6 text-[#291f1e]/70">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>

              <div className="mt-7 flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`Social link ${index + 1}`}
                    className="flex size-8 items-center justify-center border border-[#d8d2c8] transition hover:bg-[#f4efe6]"
                  >
                    <img src={social} alt="" className="size-4 object-contain" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold">Links</h3>
              <nav className="mt-7 flex flex-col gap-4 font-['Outfit'] text-sm">
                <a href="/" className="transition hover:opacity-60">
                  Home
                </a>
                <a href="#services" className="transition hover:opacity-60">
                  Shop
                </a>
                <a href="#about" className="transition hover:opacity-60">
                  About
                </a>
                <a href="#contact" className="transition hover:opacity-60">
                  Contact
                </a>
              </nav>
            </div>

            <div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold">Help</h3>
              <nav className="mt-7 flex flex-col gap-4 font-['Outfit'] text-sm">
                <a href="#contact" className="transition hover:opacity-60">
                  Payment Options
                </a>
                <a href="#contact" className="transition hover:opacity-60">
                  Returns
                </a>
                <a href="#contact" className="transition hover:opacity-60">
                  Privacy Policies
                </a>
              </nav>
            </div>

            <div>
              <h3 className="font-['Playfair_Display'] text-lg font-bold">Newsletter</h3>
              <form
                className="mt-7 flex items-end gap-3"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="min-w-0 flex-1">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full border-0 border-b border-[#bdb5aa] bg-transparent px-0 py-3 font-['Outfit'] text-xs outline-none placeholder:text-[#291f1e]/45"
                  />
                </label>
                <button
                  type="submit"
                  className="group luxury-sweep relative inline-flex h-10 items-center gap-3 overflow-hidden border border-[#8e877d] bg-transparent px-4 font-['Outfit'] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#291f1e] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#291f1e] hover:bg-[#291f1e] hover:text-white hover:shadow-[0_10px_24px_rgba(41,31,30,0.16)] active:translate-y-0 active:scale-[0.98]"
                >
                  <span className="relative z-10">Subscribe</span>
                  <img
                    src={footerSend}
                    alt=""
                    className="relative z-10 size-3.5 object-contain transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-[#e5dfd6] pt-5 font-['Outfit'] text-[11px] text-[#291f1e]/65 md:flex md:items-center md:justify-between">
            <p>Copyright © 2026 All rights reserved. Luxury Interior.</p>
            <p className="mt-3 md:mt-0">
              Terms &amp; Conditions&nbsp;&nbsp; | &nbsp;&nbsp;Privacy Policies
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

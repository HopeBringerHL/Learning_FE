import footerLogo from '@/assets/icons/home/footer/footer-logo.svg'

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#291f1e] px-6 py-16 text-white lg:px-0 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-12 border-b border-white/20 bg-white/5 pb-12 backdrop-blur-md md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={footerLogo}
            alt="Hope Bringer"
            className="max-h-16 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-[420px] font-['Outfit'] leading-7 text-white/65">
            Timeless interiors created with care, clarity and a deep respect for how each space is
            lived in.
          </p>
        </div>
        <div className="font-['Outfit']">
          <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">Explore</h3>
          <div className="flex flex-col gap-3">
            <a href="#services">Services</a>
            <a href="#gallery">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="font-['Outfit']">
          <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">Contact</h3>
          <p className="leading-7 text-white/75">hello@hopebringer.studio</p>
          <p className="leading-7 text-white/75">Ho Chi Minh City, Vietnam</p>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1200px] flex-col gap-3 font-['Outfit'] text-sm text-white/45 md:flex-row md:justify-between">
        <span>© 2026 Hope Bringer. All rights reserved.</span>
        <span>Interior design studio</span>
      </div>
    </footer>
  )
}

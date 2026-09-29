export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-5 z-30 px-5 lg:px-0">
      <div className="mx-auto flex min-h-[60px] w-full max-w-[1296px] items-center justify-between bg-[#fffdf4] px-5 text-[#291f1e] shadow-sm lg:w-[90%] lg:px-8">
        <a
          href="/"
          className="font-['Playfair_Display'] text-lg font-bold leading-[0.9] tracking-wide md:text-xl"
        >
          HOPE
          <br />
          BRINGER
        </a>

        <nav className="hidden items-center gap-7 font-['Outfit'] text-sm md:flex lg:gap-9">
          <a href="/" className="transition hover:opacity-60">
            Home
          </a>
          <a href="#about" className="transition hover:opacity-60">
            About Us
          </a>
          <a href="#services" className="transition hover:opacity-60">
            Services
          </a>
          <a href="#gallery" className="transition hover:opacity-60">
            Projects
          </a>
          <a href="#team" className="transition hover:opacity-60">
            Team
          </a>
          <a href="#career" className="transition hover:opacity-60">
            Career
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex h-[34px] w-[92px] items-center justify-center border border-[#c8c4b8] bg-transparent font-['Outfit'] text-xs font-semibold text-[#291f1e] transition-colors hover:bg-[#f3efe3] hover:text-[#291f1e]"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}

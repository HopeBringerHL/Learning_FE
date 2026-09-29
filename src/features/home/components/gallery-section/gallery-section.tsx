import type { HomeContent } from '../../types/home-content'

interface GallerySectionProps {
  items: HomeContent[]
}

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section id="gallery" className="bg-[#291f1e] px-6 py-24 text-white lg:px-0 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[760px] font-['Playfair_Display'] text-5xl font-bold leading-[1.05] md:text-7xl">
            Spaces Made to Be Lived In
          </h2>
          <p className="max-w-[360px] font-['Outfit'] text-lg leading-7 text-white/70">
            A collection of calm, tactile and timeless interiors shaped around everyday life.
          </p>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <figure
              key={item.id}
              className={
                index === 0 || index === 3
                  ? 'group relative overflow-hidden lg:col-span-2'
                  : 'group relative overflow-hidden'
              }
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 font-['Outfit'] text-sm uppercase tracking-[0.18em]">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

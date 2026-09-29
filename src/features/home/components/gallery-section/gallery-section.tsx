import gallery05 from '@/assets/images/home/gallery/gallery-05.png'
import gallery06 from '@/assets/images/home/gallery/gallery-06.png'
import gallery07 from '@/assets/images/home/gallery/gallery-07.png'
import gallery08 from '@/assets/images/home/gallery/gallery-08.png'
import gallery09 from '@/assets/images/home/gallery/gallery-09.png'
import gallery10 from '@/assets/images/home/gallery/gallery-10.png'
import { Reveal } from '@/shared/components/reveal/reveal'

import type { HomeContent } from '../../types/home-content'

interface GallerySectionProps {
  items: HomeContent[]
}

export function GallerySection({ items }: GallerySectionProps) {
  const fallbackImages = [gallery05, gallery06, gallery07, gallery08, gallery09, gallery10]
  const galleryImages = [
    ...items.map((item) => ({ src: item.imageUrl, alt: item.title })),
    ...fallbackImages.map((src, index) => ({
      src,
      alt: `Luxury interior gallery ${items.length + index + 1}`,
    })),
  ].slice(0, 10)

  return (
    <section id="gallery" className="overflow-hidden bg-[#fffcf0] py-24 lg:py-28">
      <div className="mx-auto px-6 text-center lg:px-0">
        <Reveal direction="up">
          <div className="mx-auto max-w-[840px]">
            <h2 className="font-['Playfair_Display'] text-5xl font-bold leading-[1.05] text-[#291f1e] md:text-6xl lg:text-[70px]">
              Gallery of Luxury Interior
            </h2>
            <p className="mx-auto mt-7 max-w-[760px] font-['Outfit'] text-lg leading-7 text-[#291f1e]/75 md:text-2xl md:leading-[1.4]">
              Interior design is the art and science of enhancing the interior spaces of buildings
              to achieve a more functional.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 px-4 md:px-6 lg:mt-14 lg:px-0">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 md:grid-cols-4 lg:w-[calc(100%+200px)] lg:max-w-none lg:-translate-x-[100px] lg:grid-cols-12 lg:auto-rows-[120px] lg:gap-4">
          {galleryImages.map((image, index) => {
            const desktopLayout = [
              'lg:col-span-2 lg:row-span-3',
              'lg:col-span-3 lg:row-span-2',
              'lg:col-span-2 lg:row-span-2',
              'lg:col-span-2 lg:row-span-3',
              'lg:col-span-3 lg:row-span-4',
              'lg:col-span-2 lg:row-span-3',
              'lg:col-span-3 lg:row-span-2',
              'lg:col-span-2 lg:row-span-2',
              'lg:col-span-3 lg:row-span-3',
              'lg:col-span-2 lg:row-span-3',
            ][index]

            return (
              <Reveal
                key={`${image.src}-${index}`}
                direction="scale"
                delay={(index % 5) * 90}
                className={desktopLayout}
              >
                <figure className="cinematic-image luxury-sweep group relative min-h-[220px] h-full overflow-hidden bg-[#e7e0d5]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.065]"
                  />
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

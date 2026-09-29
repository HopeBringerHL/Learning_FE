import materialLeather from '@/assets/images/home/gallery/gallery-06.png'
import materialMetal from '@/assets/images/home/gallery/gallery-08.png'
import materialPlywood from '@/assets/images/home/gallery/gallery-07.png'
import materialWood from '@/assets/images/home/gallery/gallery-05.png'
import materialShowcase from '@/assets/images/home/gallery/gallery-09.png'
import { Reveal } from '@/shared/components/reveal/reveal'

const materials = [
  { name: 'Natural wood', imageUrl: materialWood },
  { name: 'Leather', imageUrl: materialLeather },
  { name: 'Ply wood', imageUrl: materialPlywood },
  { name: 'Metal', imageUrl: materialMetal },
] as const

export function MaterialsSection() {
  return (
    <section id="about" className="bg-[#fffcf0] px-6 pb-24 lg:px-0 lg:pb-32">
      <div className="mx-auto max-w-[1060px]">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_1fr]">
          <Reveal direction="up">
            <h2 className="max-w-[430px] font-['Playfair_Display'] text-5xl font-bold leading-[0.98] text-[#291f1e] md:text-6xl">
              We use quality and simple materials
            </h2>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="h-[150px] overflow-hidden md:h-[170px]">
              <img
                src={materialShowcase}
                alt="Interior material showcase"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {materials.map((material, index) => (
            <Reveal key={material.name} direction="up" delay={index * 100}>
              <figure className={index % 2 === 1 ? 'lg:pt-16' : ''}>
                <div className="cinematic-image luxury-sweep aspect-square overflow-hidden bg-[#eee7dc]">
                  <img
                    src={material.imageUrl}
                    alt={material.name}
                    className="h-full w-full object-cover transition duration-900 ease-out hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="mt-3 font-['Playfair_Display'] text-lg font-bold text-[#291f1e]">
                  {material.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

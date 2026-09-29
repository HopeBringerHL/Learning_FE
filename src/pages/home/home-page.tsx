import { BenefitsSection } from '@/features/home/components/benefits-section/benefits-section'
import { FeaturedProjectsSection } from '@/features/home/components/featured-projects-section/featured-projects-section'
import { GallerySection } from '@/features/home/components/gallery-section/gallery-section'
import { HeroSection } from '@/features/home/components/hero-section/hero-section'
import { MaterialsSection } from '@/features/home/components/materials-section/materials-section'
import { ServicesSection } from '@/features/home/components/services-section/services-section'
import { useHomeContents } from '@/features/home/hooks/use-home-contents'

export function HomePage() {
  const { data = [] } = useHomeContents()

  const activeItems = data.filter((item) => item.isActive)
  const byOrder = (a: (typeof activeItems)[number], b: (typeof activeItems)[number]) =>
    a.sortOrder - b.sortOrder

  const hero = activeItems.find((item) => item.sectionType === 'hero')
  const services = activeItems.filter((item) => item.sectionType === 'service').sort(byOrder)
  const gallery = activeItems.filter((item) => item.sectionType === 'gallery').sort(byOrder)
  const benefits = activeItems.filter((item) => item.sectionType === 'benefit').sort(byOrder)

  return (
    <main className="min-h-screen bg-[#fffcf0]">
      <HeroSection data={hero} />
      <ServicesSection items={services} />
      <BenefitsSection items={benefits} />
      <FeaturedProjectsSection items={gallery} />
      <MaterialsSection />
      <GallerySection items={gallery} />
    </main>
  )
}

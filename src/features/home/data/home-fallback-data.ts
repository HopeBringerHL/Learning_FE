import benefitShipping from '@/assets/icons/home/benefits/benefit-shipping.svg'
import benefitSupport from '@/assets/icons/home/benefits/benefit-support.svg'
import benefitTrophy from '@/assets/icons/home/benefits/benefit-trophy.svg'
import benefitWarranty from '@/assets/icons/home/benefits/benefit-warranty.svg'
import gallery01 from '@/assets/images/home/gallery/gallery-01.png'
import gallery02 from '@/assets/images/home/gallery/gallery-02.png'
import gallery03 from '@/assets/images/home/gallery/gallery-03.png'
import gallery04 from '@/assets/images/home/gallery/gallery-04.png'
import heroImage from '@/assets/images/home/hero/hero-background-01.jpeg'
import service01 from '@/assets/images/home/services/service-01.png'
import service02 from '@/assets/images/home/services/service-02.png'
import service03 from '@/assets/images/home/services/service-03.png'
import service04 from '@/assets/images/home/services/service-04.png'

import type { HomeContent } from '../types/home-content'

export const homeFallbackData: HomeContent[] = [
  {
    id: 'hero-1',
    sectionType: 'hero',
    title: 'Creating Harmony Through Design',
    description:
      'Thoughtful interiors shaped around the way you live, combining timeless character with modern comfort.',
    imageUrl: heroImage,
    sortOrder: 1,
    isActive: true,
  },
  ...[
    [
      'service-1',
      'Design Development',
      'We turn the first idea into a clear interior direction with proportion, material and mood in balance.',
      service01,
    ],
    [
      'service-2',
      'Interior Planning',
      'Every room is planned to feel effortless, functional and naturally connected to the next.',
      service02,
    ],
    [
      'service-3',
      'Furniture Selection',
      'We curate furniture, finishes and details that create a cohesive and lasting visual language.',
      service03,
    ],
    [
      'service-4',
      'Project Styling',
      'The final layer brings personality to the space through considered objects, textiles and artwork.',
      service04,
    ],
  ].map(([id, title, description, imageUrl], index) => ({
    id: id as string,
    sectionType: 'service' as const,
    title: title as string,
    description: description as string,
    imageUrl: imageUrl as string,
    sortOrder: index + 1,
    isActive: true,
  })),
  ...[
    ['gallery-1', 'Warm Modern Living', gallery01],
    ['gallery-2', 'Quiet Luxury', gallery02],
    ['gallery-3', 'Natural Materials', gallery03],
    ['gallery-4', 'Refined Details', gallery04],
  ].map(([id, title, imageUrl], index) => ({
    id: id as string,
    sectionType: 'gallery' as const,
    title: title as string,
    description: '',
    imageUrl: imageUrl as string,
    sortOrder: index + 1,
    isActive: true,
  })),
  ...[
    ['benefit-1', 'High Quality', 'Crafted from top materials', benefitTrophy],
    ['benefit-2', 'Warranty Protection', 'Built for lasting confidence', benefitWarranty],
    ['benefit-3', 'Free Shipping', 'Carefully delivered to you', benefitShipping],
    ['benefit-4', '24 / 7 Support', 'Dedicated support when needed', benefitSupport],
  ].map(([id, title, description, imageUrl], index) => ({
    id: id as string,
    sectionType: 'benefit' as const,
    title: title as string,
    description: description as string,
    imageUrl: imageUrl as string,
    sortOrder: index + 1,
    isActive: true,
  })),
]

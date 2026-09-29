export type HomeSectionType = 'hero' | 'service' | 'gallery' | 'benefit'

export interface HomeContent {
  id: string
  sectionType: HomeSectionType
  title: string
  description: string
  imageUrl: string
  sortOrder: number
  isActive: boolean
}

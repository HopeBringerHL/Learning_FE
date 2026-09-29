import { apiClient } from '@/shared/api/axios-instance'

import type { HomeContent } from '../types/home-content'

export async function getHomeContents() {
  const response = await apiClient.get<HomeContent[]>('/home-contents')
  return response.data
}

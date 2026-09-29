import { useQuery } from '@tanstack/react-query'

import { env } from '@/shared/config/env'

import { getHomeContents } from '../api/get-home-contents'
import { homeFallbackData } from '../data/home-fallback-data'

export function useHomeContents() {
  return useQuery({
    queryKey: ['home-contents'],
    queryFn: getHomeContents,
    enabled: Boolean(env.apiUrl),
    initialData: homeFallbackData,
    retry: 1,
  })
}

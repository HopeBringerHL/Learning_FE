import axios from 'axios'

import { env } from '@/shared/config/env'

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 30_000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

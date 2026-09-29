export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'Hope Bringer',
  apiUrl: import.meta.env.VITE_API_URL ?? '',
  environment: import.meta.env.VITE_ENVIRONMENT ?? import.meta.env.MODE,
} as const

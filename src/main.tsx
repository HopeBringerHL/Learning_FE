import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppProvider } from '@/app/providers/app-provider'
import { AppRouter } from '@/app/router'
import '@/app/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </StrictMode>,
)

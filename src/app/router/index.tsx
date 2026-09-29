import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PublicLayout } from '@/layouts/public-layout'
import { HomePage } from '@/pages/home'

import { routes } from './routes'

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}

# Hope Bringer Frontend — Setup & Code Flow Guide

> Tài liệu chuẩn hóa cách khởi tạo, tổ chức và phát triển Frontend cho dự án **Hope Bringer**.
>
> Mục tiêu: một developer mới có thể đọc tài liệu này và hiểu được:
>
> - Cần cài gì để chạy project.
> - Source FE nên tổ chức folder như thế nào.
> - Khi nào dùng `.ts`, khi nào dùng `.tsx`.
> - Flow code từ UI đến Backend đi qua các tầng nào.
> - Cách viết GET / POST / PUT / DELETE.
> - Cách tổ chức Query, Mutation, Form, Validation, Router và State.
> - Quy tắc naming, dependency và workflow trước khi commit.

---

# 1. Tech Stack đề xuất

Source Frontend của Hope Bringer được tổ chức theo stack sau:

```text
React
TypeScript
Vite
React Router
Axios
TanStack Query
Zustand
React Hook Form
Zod
Tailwind CSS
ESLint
Prettier
Husky
lint-staged
```

Vai trò của từng package:

| Package | Vai trò |
|---|---|
| React | Xây dựng UI |
| TypeScript | Type safety |
| Vite | Dev server + bundler |
| React Router | Routing |
| Axios | HTTP client |
| TanStack Query | Server state, cache, query, mutation |
| Zustand | Client/global state |
| React Hook Form | Form state |
| Zod | Form/schema validation |
| Tailwind CSS | Styling |
| ESLint | Kiểm tra code |
| Prettier | Format code |
| Husky | Git hook |
| lint-staged | Lint/format file thay đổi trước commit |

---

# 2. Tổng quan kiến trúc

Flow tổng thể:

```text
Browser
   ↓
Router
   ↓
Page
   ↓
Feature Component
   ↓
Custom Hook
   ↓
TanStack Query / Mutation
   ↓
Feature API Function
   ↓
Axios Instance
   ↓
Backend API
```

Response đi ngược lại:

```text
Backend API
    ↓
Axios
    ↓
API Function
    ↓
TanStack Query Cache
    ↓
Custom Hook
    ↓
Component
    ↓
UI
```

Nguyên tắc quan trọng:

```text
Component không biết URL backend.

Hook không biết Axios config.

Axios instance không chứa business logic.

Page chủ yếu compose feature.

Feature sở hữu business logic của chính feature đó.

Shared chỉ chứa code thật sự generic.
```

---

# 3. Khởi tạo project

## 3.1 Yêu cầu môi trường

Khuyến nghị:

```text
Node.js >= 20
npm >= 10
```

Kiểm tra:

```bash
node -v
npm -v
```

---

## 3.2 Khởi tạo React + TypeScript + Vite

```bash
npm create vite@latest hope-bringer-fe -- --template react-ts
```

Sau đó:

```bash
cd hope-bringer-fe
npm install
```

Chạy project:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 4. Cài dependency

## Router

```bash
npm install react-router-dom
```

## Axios

```bash
npm install axios
```

## TanStack Query

```bash
npm install @tanstack/react-query
npm install @tanstack/react-query-devtools
```

## Zustand

```bash
npm install zustand
```

## React Hook Form + Zod

```bash
npm install react-hook-form
npm install zod
npm install @hookform/resolvers
```

## Utility cho className

```bash
npm install clsx tailwind-merge
```

## Dev tools

```bash
npm install -D prettier
npm install -D eslint
npm install -D @types/node
npm install -D husky
npm install -D lint-staged
```

---

# 5. Folder structure

Cấu trúc đề xuất:

```text
src/
│
├── app/
│   ├── providers/
│   │   ├── app-provider.tsx
│   │   └── query-provider.tsx
│   │
│   ├── router/
│   │   ├── index.tsx
│   │   ├── routes.ts
│   │   └── guards/
│   │       ├── auth-guard.tsx
│   │       └── guest-guard.tsx
│   │
│   └── styles/
│       └── global.css
│
├── pages/
│   ├── home/
│   ├── login/
│   ├── products/
│   ├── projects/
│   └── not-found/
│
├── features/
│   ├── auth/
│   ├── products/
│   ├── projects/
│   ├── services/
│   ├── recruitment/
│   ├── quotations/
│   └── contacts/
│
├── entities/
│   ├── user/
│   ├── product/
│   ├── project/
│   └── service/
│
├── layouts/
│   ├── admin-layout/
│   ├── public-layout/
│   └── auth-layout/
│
├── shared/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── utils/
│
├── store/
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
│
└── main.tsx
```

---

# 6. Ý nghĩa từng layer

## 6.1 app

Chứa bootstrap của application:

```text
Provider
Router
Global style
App-level configuration
```

Không chứa business logic cụ thể của Product, Project, User...

---

## 6.2 pages

Một page tương ứng với một route hoàn chỉnh.

Ví dụ:

```text
/pages/products/product-list-page.tsx
```

Page nên chủ yếu compose feature:

```tsx
export function ProductListPage() {
  return (
    <MainLayout>
      <ProductFilter />
      <ProductList />
    </MainLayout>
  )
}
```

Không nên để Page chứa:

```text
API call
500 dòng JSX
Validation
Mutation
Mapper
Business logic
```

---

## 6.3 features

Feature đại diện cho capability của người dùng.

Ví dụ:

```text
features/products/
features/projects/
features/auth/
features/quotations/
```

Một feature:

```text
features/products/
├── api/
├── components/
├── hooks/
├── schemas/
├── types/
├── utils/
└── index.ts
```

---

## 6.4 entities

Chứa domain model dùng ở nhiều nơi.

Ví dụ:

```ts
export interface Product {
  id: string
  name: string
  price: number
  imageUrl?: string
  isActive: boolean
}
```

---

## 6.5 shared

Chỉ chứa code generic.

Ví dụ hợp lý:

```text
Button
Input
Modal
Table
Pagination
Spinner
useDebounce
formatCurrency
Axios instance
ApiError
```

Không nên đưa vào shared:

```text
ProductCard
CreateProjectForm
OrderItem
QuotationForm
```

vì đó là domain-specific code.

---

# 7. Khi nào dùng .ts và khi nào dùng .tsx

Rule:

```text
Có JSX
  ↓
.tsx

Không có JSX
  ↓
.ts
```

Ví dụ dùng `.ts`:

```text
api-client.ts
product.types.ts
product.schema.ts
use-products.ts
get-products.ts
currency.ts
constants.ts
```

Ví dụ dùng `.tsx`:

```text
product-card.tsx
product-table.tsx
product-page.tsx
query-provider.tsx
main.tsx
```

Một React hook không có JSX vẫn dùng `.ts`:

```ts
export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })
}
```

Provider trả JSX phải dùng `.tsx`:

```tsx
export function QueryProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

---

# 8. Environment

Tạo:

```text
.env
.env.example
```

Ví dụ:

```env
VITE_APP_NAME=Hope Bringer
VITE_API_URL=http://localhost:5108
VITE_ENVIRONMENT=development
```

Code chỉ đọc environment ở một nơi nếu có thể.

Ví dụ:

```ts
export const env = {
  appName: import.meta.env.VITE_APP_NAME,
  apiUrl: import.meta.env.VITE_API_URL,
  environment: import.meta.env.VITE_ENVIRONMENT,
}
```

Không commit `.env`.

Commit `.env.example`.

---

# 9. Axios instance

Tạo:

```text
src/shared/api/axios-instance.ts
```

```ts
import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30_000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
```

Nếu Backend dùng HttpOnly Cookie thì:

```ts
withCredentials: true
```

rất quan trọng.

---

# 10. Error interceptor

Có thể xử lý concern chung:

```ts
apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response?.status === 401) {
      // clear auth / refresh flow / redirect login
    }

    return Promise.reject(error)
  },
)
```

Interceptor chỉ nên xử lý:

```text
Authentication
Refresh token
Common error normalization
Logging
Request ID
```

Không đưa business logic Product/Project vào interceptor.

---

# 11. Flow GET API

Giả sử Backend có:

```http
GET /api/v1/products
```

## Bước 1 — Type

```text
features/products/types/product.ts
```

```ts
export interface Product {
  id: string
  name: string
  price: number
  imageUrl?: string
  isActive: boolean
}

export interface ProductListResponse {
  items: Product[]
  pageIndex: number
  pageSize: number
  totalItems: number
  totalPages: number
}
```

---

## Bước 2 — API function

```text
features/products/api/get-products.ts
```

```ts
import { apiClient } from '@/shared/api/axios-instance'

import type {
  ProductListResponse,
} from '../types/product'

export interface GetProductsParams {
  pageIndex?: number
  pageSize?: number
  search?: string
}

export async function getProducts(
  params: GetProductsParams,
) {
  const response =
    await apiClient.get<ProductListResponse>(
      '/api/v1/products',
      {
        params,
      },
    )

  return response.data
}
```

---

## Bước 3 — Query hook

```text
features/products/hooks/use-products.ts
```

```ts
import {
  useQuery,
} from '@tanstack/react-query'

import {
  getProducts,
  type GetProductsParams,
} from '../api/get-products'

export const productKeys = {
  all: ['products'] as const,

  lists: () =>
    [...productKeys.all, 'list'] as const,

  list: (params: GetProductsParams) =>
    [...productKeys.lists(), params] as const,
}

export function useProducts(
  params: GetProductsParams,
) {
  return useQuery({
    queryKey: productKeys.list(params),

    queryFn: () =>
      getProducts(params),
  })
}
```

---

## Bước 4 — UI

```tsx
export function ProductList() {
  const {
    data,
    isLoading,
    isError,
  } = useProducts({
    pageIndex: 1,
    pageSize: 10,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Load products failed</div>
  }

  if (!data?.items.length) {
    return <div>No products found</div>
  }

  return (
    <div>
      {data.items.map((product) => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
    </div>
  )
}
```

Flow:

```text
ProductList.tsx
      ↓
useProducts()
      ↓
useQuery()
      ↓
getProducts()
      ↓
apiClient.get()
      ↓
GET /api/v1/products
      ↓
Backend
      ↓
response.data
      ↓
TanStack Query Cache
      ↓
Component render
```

---

# 12. Flow POST API

Backend:

```http
POST /api/v1/products
```

Request:

```json
{
  "name": "Hoa hồng",
  "price": 100000
}
```

## Request type

```ts
export interface CreateProductRequest {
  name: string
  price: number
}
```

## API

```ts
export async function createProduct(
  request: CreateProductRequest,
) {
  const response =
    await apiClient.post(
      '/api/v1/products',
      request,
    )

  return response.data
}
```

## Mutation

```ts
export function useCreateProduct() {
  const queryClient =
    useQueryClient()

  return useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.all,
      })
    },
  })
}
```

UI:

```tsx
const createProduct =
  useCreateProduct()

const handleCreate = () => {
  createProduct.mutate({
    name: 'Hoa hồng',
    price: 100000,
  })
}
```

Flow:

```text
Form / Button
      ↓
mutation.mutate()
      ↓
useCreateProduct()
      ↓
createProduct()
      ↓
apiClient.post()
      ↓
Backend
      ↓
Success
      ↓
invalidate products query
      ↓
GET products lại
      ↓
UI mới
```

---

# 13. Flow PUT API

Backend:

```http
PUT /api/v1/products/{id}
```

API:

```ts
export interface UpdateProductRequest {
  name: string
  price: number
}

export async function updateProduct(
  id: string,
  request: UpdateProductRequest,
) {
  const response =
    await apiClient.put(
      `/api/v1/products/${id}`,
      request,
    )

  return response.data
}
```

Mutation:

```ts
export function useUpdateProduct() {
  const queryClient =
    useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      request,
    }: {
      id: string
      request: UpdateProductRequest
    }) =>
      updateProduct(id, request),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.all,
      })
    },
  })
}
```

---

# 14. Flow DELETE API

```ts
export async function deleteProduct(
  id: string,
) {
  await apiClient.delete(
    `/api/v1/products/${id}`,
  )
}
```

Hook:

```ts
export function useDeleteProduct() {
  const queryClient =
    useQueryClient()

  return useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.all,
      })
    },
  })
}
```

UI:

```tsx
<button
  onClick={() =>
    deleteProduct.mutate(product.id)
  }
>
  Delete
</button>
```

---

# 15. Detail API

Backend:

```http
GET /api/v1/products/{id}
```

API:

```ts
export async function getProductDetail(
  id: string,
) {
  const response =
    await apiClient.get<Product>(
      `/api/v1/products/${id}`,
    )

  return response.data
}
```

Hook:

```ts
export function useProductDetail(
  id: string,
) {
  return useQuery({
    queryKey: [
      'products',
      'detail',
      id,
    ],

    queryFn: () =>
      getProductDetail(id),

    enabled: !!id,
  })
}
```

---

# 16. Query key convention

Không viết query key tùy ý:

```ts
['product']
['products']
['product-list']
['list-product']
```

Nên centralize:

```ts
export const productKeys = {
  all: ['products'] as const,

  lists: () =>
    [...productKeys.all, 'list'] as const,

  list: (params: ProductQuery) =>
    [...productKeys.lists(), params] as const,

  details: () =>
    [...productKeys.all, 'detail'] as const,

  detail: (id: string) =>
    [...productKeys.details(), id] as const,
}
```

---

# 17. Query Client

Tạo:

```text
shared/lib/query-client.ts
```

```ts
import {
  QueryClient,
} from '@tanstack/react-query'

export const queryClient =
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 30_000,
        refetchOnWindowFocus: false,
      },
    },
  })
```

---

# 18. Query Provider

```tsx
import {
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  queryClient,
} from '@/shared/lib/query-client'

export function QueryProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

---

# 19. Server state vs Client state

Server state:

```text
Products
Projects
Users
Orders
Services
Recruitment
Quotation
Profile
```

Dùng:

```text
TanStack Query
```

Client state:

```text
Sidebar open/close
Theme
Current tab
Temporary selection
Wizard step
```

Dùng:

```text
useState
hoặc
Zustand
```

Không nên lấy data backend rồi copy toàn bộ vào Zustand để tự quản lý cache.

---

# 20. Zustand example

```ts
import {
  create,
} from 'zustand'

interface AppState {
  sidebarOpen: boolean

  setSidebarOpen: (
    value: boolean,
  ) => void
}

export const useAppStore =
  create<AppState>((set) => ({
    sidebarOpen: true,

    setSidebarOpen:
      (sidebarOpen) =>
        set({
          sidebarOpen,
        }),
  }))
```

---

# 21. Form Flow

Flow chuẩn:

```text
User nhập dữ liệu
      ↓
React Hook Form
      ↓
Zod Validation
      ↓
onSubmit
      ↓
mutation.mutate()
      ↓
API
      ↓
Backend
      ↓
Success / Error
      ↓
Toast
      ↓
Invalidate Query
```

Schema:

```ts
import {
  z,
} from 'zod'

export const productSchema =
  z.object({
    name:
      z.string().min(1),

    price:
      z.number().min(0),
  })

export type ProductFormData =
  z.infer<typeof productSchema>
```

Form:

```tsx
const form =
  useForm<ProductFormData>({
    resolver:
      zodResolver(productSchema),
  })
```

Submit:

```ts
const createProduct =
  useCreateProduct()

const onSubmit = (
  values: ProductFormData,
) => {
  createProduct.mutate(values)
}
```

---

# 22. Router

Ví dụ:

```tsx
import {
  createBrowserRouter,
} from 'react-router-dom'

export const router =
  createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },

    {
      path: '/products',
      element: <ProductListPage />,
    },

    {
      path: '/products/:productId',
      element: <ProductDetailPage />,
    },
  ])
```

---

# 23. Route Guard

```tsx
import {
  Navigate,
  Outlet,
} from 'react-router-dom'

export function AuthGuard() {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }

  return <Outlet />
}
```

---

# 24. URL state

Ưu tiên route:

```text
/products/:productId
```

thay vì chỉ:

```ts
navigate('/product-detail', {
  state: product,
})
```

Vì browser refresh có thể làm mất navigation state.

---

# 25. Search + Pagination

Query params:

```ts
useProducts({
  pageIndex,
  pageSize,
  search,
})
```

URL:

```text
/products?pageIndex=1&pageSize=10&search=rose
```

Nếu search input gọi API:

```text
Input
 ↓
Debounce 300ms
 ↓
Query params đổi
 ↓
queryKey đổi
 ↓
TanStack Query gọi API
```

---

# 26. Loading / Error / Empty / Success

Một màn hình data nên xử lý đủ 4 trạng thái:

```text
Loading
Error
Empty
Success
```

Ví dụ:

```tsx
if (isLoading) {
  return <PageLoading />
}

if (isError) {
  return <ErrorState />
}

if (!data?.items.length) {
  return <EmptyState />
}

return <ProductTable data={data.items} />
```

---

# 27. Naming convention

## Folder / file

Dùng:

```text
kebab-case
```

Ví dụ:

```text
product-card.tsx
use-products.ts
create-product.ts
product.schema.ts
```

## Component

Dùng:

```text
PascalCase
```

Ví dụ:

```tsx
ProductCard
ProductTable
CreateProductModal
```

## Hook

Luôn bắt đầu bằng:

```text
use
```

Ví dụ:

```text
use-products.ts
use-create-product.ts
use-update-product.ts
```

## Boolean

Ưu tiên:

```text
is
has
can
should
```

Ví dụ:

```ts
isLoading
isActive
hasPermission
canDelete
shouldRedirect
```

---

# 28. Path Alias

`tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

`vite.config.ts`:

```ts
import path from 'node:path'

import {
  defineConfig,
} from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      '@':
        path.resolve(
          __dirname,
          './src',
        ),
    },
  },
})
```

Import:

```ts
import {
  apiClient,
} from '@/shared/api/axios-instance'
```

thay vì:

```ts
import {
  apiClient,
} from '../../../../shared/api/axios-instance'
```

---

# 29. Feature structure hoàn chỉnh

Ví dụ:

```text
features/products/
│
├── api/
│   ├── create-product.ts
│   ├── delete-product.ts
│   ├── get-product-detail.ts
│   ├── get-products.ts
│   └── update-product.ts
│
├── components/
│   ├── create-product-form.tsx
│   ├── product-card.tsx
│   ├── product-filter.tsx
│   └── product-table.tsx
│
├── hooks/
│   ├── use-create-product.ts
│   ├── use-delete-product.ts
│   ├── use-product-detail.ts
│   ├── use-products.ts
│   └── use-update-product.ts
│
├── schemas/
│   └── product.schema.ts
│
├── types/
│   ├── product.ts
│   ├── product-query.ts
│   └── product-request.ts
│
├── utils/
│   └── product-mapper.ts
│
└── index.ts
```

---

# 30. Public API của feature

`index.ts`:

```ts
export {
  ProductList,
} from './components/product-list'

export {
  useProducts,
} from './hooks/use-products'

export type {
  Product,
} from './types/product'
```

Bên ngoài feature:

```ts
import {
  ProductList,
} from '@/features/products'
```

---

# 31. Dependency Direction

Giữ dependency theo hướng:

```text
app
 ↓
pages
 ↓
features
 ↓
entities
 ↓
shared
```

Không để:

```text
shared → features
shared → pages
entities → pages
entities → features
```

Điều này giúp giảm circular dependency.

---

# 32. Cách quyết định đặt file ở đâu

Hỏi theo thứ tự:

```text
Đây là một route hoàn chỉnh?
→ pages

Đây là business capability?
→ features

Đây là domain model?
→ entities

Đây là layout?
→ layouts

Đây là generic component/helper?
→ shared

Đây là app bootstrap/provider/router?
→ app

Đây là global client state?
→ store
```

---

# 33. Component placement

Ví dụ:

```text
Button
Input
Modal
Pagination
Table
Spinner
```

→ `shared/components`

Nhưng:

```text
ProductCard
ProjectForm
QuotationTable
RecruitmentForm
```

→ feature tương ứng.

---

# 34. Không gọi API trực tiếp trong component

Không nên:

```tsx
useEffect(() => {
  axios
    .get(
      'http://localhost:5108/api/v1/products',
    )
    .then(...)
}, [])
```

Nên:

```text
Component
   ↓
useProducts
   ↓
getProducts
   ↓
apiClient
   ↓
Backend
```

Lợi ích:

```text
Dễ test
Dễ cache
Dễ thay URL
Dễ đổi auth
Dễ refactor
Dễ xử lý loading/error
```

---

# 35. API error model

Nếu Backend trả:

```json
{
  "title": "Bad Request",
  "status": 400,
  "detail": "Invalid product",
  "messageCode": "INVALID_PRODUCT"
}
```

FE có thể định nghĩa:

```ts
export interface ApiError {
  status: number
  detail?: string
  messageCode?: string
}
```

UI nên ưu tiên business code:

```text
messageCode
```

thay vì parse nội dung `detail`.

---

# 36. ESLint + Prettier

`.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

Scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

# 37. Husky + lint-staged

Init:

```bash
npx husky init
```

`package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
```

`.husky/pre-commit`:

```bash
npx lint-staged
```

Flow:

```text
git commit
   ↓
Husky
   ↓
lint-staged
   ↓
ESLint
   ↓
Prettier
   ↓
Commit
```

---

# 38. Workflow tạo feature mới

Ví dụ tạo feature Project Management.

## Bước 1

Tạo:

```text
features/projects/
```

## Bước 2

Tạo API:

```text
api/
├── get-projects.ts
├── get-project-detail.ts
├── create-project.ts
├── update-project.ts
└── delete-project.ts
```

## Bước 3

Tạo hooks:

```text
hooks/
├── use-projects.ts
├── use-project-detail.ts
├── use-create-project.ts
├── use-update-project.ts
└── use-delete-project.ts
```

## Bước 4

Tạo component:

```text
components/
├── project-table.tsx
├── project-filter.tsx
├── project-form.tsx
├── create-project-modal.tsx
└── update-project-modal.tsx
```

## Bước 5

Tạo schema:

```text
schemas/project.schema.ts
```

## Bước 6

Tạo types:

```text
types/
├── project.ts
├── project-query.ts
└── project-request.ts
```

## Bước 7

Tạo page:

```text
pages/projects/project-list-page.tsx
```

## Bước 8

Add route:

```text
/admin/projects
```

---

# 39. Developer flow hằng ngày

```text
Pull code
   ↓
Create branch
   ↓
Implement feature
   ↓
Lint
   ↓
Typecheck
   ↓
Build
   ↓
Commit
   ↓
Push
   ↓
Pull Request
```

Commands:

```bash
git checkout main
git pull
git checkout -b feat/project-management
```

Sau khi code:

```bash
npm run lint
npm run typecheck
npm run build
```

Commit:

```bash
git add .
git commit -m "feat: add project management"
git push -u origin feat/project-management
```

---

# 40. Branch naming

Ví dụ:

```text
feat/project-management
feat/service-management
fix/product-filter
fix/login-cookie
refactor/api-client
chore/setup-eslint
docs/frontend-guide
```

---

# 41. Commit convention

Khuyến nghị Conventional Commits:

```text
feat: add project management
fix: handle product pagination
refactor: extract product query hooks
chore: configure eslint
docs: add frontend architecture guide
```

---

# 42. Clone source trên máy mới

```bash
git clone <repository-url>
cd <repository>
npm ci
```

Copy env:

Windows CMD:

```cmd
copy .env.example .env
```

PowerShell:

```powershell
Copy-Item .env.example .env
```

Linux/macOS:

```bash
cp .env.example .env
```

Sau đó:

```bash
npm run dev
```

---

# 43. Validation trước Pull Request

Trước khi push:

```bash
npm run lint
npm run typecheck
npm run build
```

Nếu có test:

```bash
npm run test
```

---

# 44. Build / Deployment Flow

```text
Push branch
    ↓
CI
    ↓
npm ci
    ↓
Lint
    ↓
Typecheck
    ↓
Test
    ↓
Build
    ↓
dist/
    ↓
Deployment
```

CI cơ bản:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

---

# 45. Checklist khi tạo API mới

Khi Backend có API mới, không viết thẳng vào UI.

Checklist:

```text
[ ] Xác định request type
[ ] Xác định response type
[ ] Tạo API function
[ ] Xác định Query hay Mutation
[ ] Tạo query key
[ ] Tạo custom hook
[ ] Xử lý loading
[ ] Xử lý error
[ ] Xử lý empty
[ ] Invalidate cache sau mutation nếu cần
[ ] Gắn hook vào component
[ ] Không hard-code backend URL trong component
```

---

# 46. Checklist khi tạo Feature mới

```text
[ ] Tạo feature folder
[ ] Tạo api/
[ ] Tạo hooks/
[ ] Tạo components/
[ ] Tạo types/
[ ] Tạo schemas/ nếu có form
[ ] Tạo utils/ nếu có mapper/helper riêng feature
[ ] Export public API qua index.ts
[ ] Tạo page
[ ] Add router
[ ] Add permission nếu cần
[ ] Test loading/error/empty/success
[ ] Lint
[ ] Typecheck
[ ] Build
```

---

# 47. Checklist architecture

Một feature tốt phải trả lời rõ:

```text
API nằm ở đâu?

Request/Response type nằm ở đâu?

Query key nằm ở đâu?

Query hook nằm ở đâu?

Mutation nằm ở đâu?

Validation nằm ở đâu?

UI nằm ở đâu?

Page nằm ở đâu?

Shared component nào được reuse?

Business logic thuộc feature nào?
```

Nếu developer phải search toàn repo mới biết những thứ này thì structure chưa đủ rõ.

---

# 48. Rule quan trọng nhất

Nhớ flow:

```text
Page
 ↓
Feature Component
 ↓
Custom Hook
 ↓
Query / Mutation
 ↓
API Function
 ↓
Axios Instance
 ↓
Backend
```

Và nhớ:

```text
.ts  = TypeScript không JSX

.tsx = TypeScript có JSX
```

Cuối cùng:

```text
Backend data → TanStack Query

Client/UI state → useState / Zustand

Validation → Zod

Form → React Hook Form

HTTP → Axios

Routing → React Router

Reusable UI → shared/components

Business capability → features

Route screen → pages
```

Đây là convention nền tảng của FE Hope Bringer.

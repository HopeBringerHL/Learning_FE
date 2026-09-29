---
name: frontend-api-server-state
description: Adaptive API integration and server-state patterns. Use when adding backend calls, API clients, services, queries, mutations, pagination, cache invalidation, retries, or transport-level error handling.
metadata:
  origin: portable
---

# Frontend API and Server State

## First: Discover the Existing Data Layer

Inspect:
- package.json for axios/fetch wrappers/TanStack Query/SWR/RTK Query/Apollo
- existing API client files
- one nearby service/repository
- one nearby data-fetching hook
- response envelope types
- error handling conventions

Do not assume Axios or React Query unless present.

## Preferred Separation

Adapt to the project's naming, but preserve this separation:

```text
UI
 -> data hook/controller
 -> service/repository/API function
 -> shared HTTP/client layer
 -> backend
```

Do not place raw endpoint URLs and transport configuration throughout UI files.

## HTTP Client

Reuse the existing client.

Centralize cross-cutting concerns such as:
- base URL
- authentication headers
- refresh token behavior
- default headers
- request IDs
- common error normalization

Do not create a second client for normal endpoints unless there is a clear separate backend/integration.

## Server State

If TanStack Query, SWR, RTK Query, Apollo, or similar is installed, use the established server-state library.

If none exists, follow the repository's existing fetch pattern instead of installing one without request.

## Query Keys / Cache Identity

For cache-based libraries:
- include every input that changes the response
- keep key conventions stable
- avoid multiple names for the same resource family
- preserve existing factories/helpers if present

## Writes

After create/update/delete:
- invalidate only affected data
- or update cache intentionally when immediate consistency is needed
- preserve pagination/infinite-query shape

## Pagination

Follow backend metadata and existing UI conventions.
Do not invent a next page after the server says there is none.

## Error Handling

Use the project's existing error envelope and user-facing error mapping.

Do not display raw internal exception objects.

## Checklist

1. Reuse existing client.
2. Type request/response shapes.
3. Put endpoint logic in the established API/service layer.
4. Add the project's established data hook/query abstraction.
5. Handle loading/error/empty states.
6. Keep cache coherent after writes.
7. Run lint/typecheck/tests available in the project.

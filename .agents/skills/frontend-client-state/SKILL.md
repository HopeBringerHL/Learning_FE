---
name: frontend-client-state
description: Adaptive frontend client-state ownership rules. Use when adding global state, stores, slices, contexts, selectors, or deciding between server-state cache, global client state, context, URL state, and local component state.
metadata:
  origin: portable
---

# Frontend Client State

## First: Discover Existing State Tools

Inspect package.json and source for:
- Redux Toolkit
- Zustand
- Jotai
- MobX
- React Context
- TanStack Query / SWR / RTK Query
- URL/search-param state
- local persistence

Do not introduce a new state library without a clear need.

## Ownership Decision

Use the existing server-state tool for backend-owned data.

Use local component state for UI-local transient state.

Use URL/search params for shareable/navigation-relevant state when the project already follows that pattern.

Use Context for cross-tree runtime concerns when suitable.

Use the existing global client-state library for truly app-wide client/session state.

## Avoid Duplicating Server State

Do not copy fetched server data into Redux/Zustand/etc. merely to access it elsewhere if the server-state cache already solves that problem.

Duplicate ownership causes stale copies and manual synchronization.

## Store Rules

Global stores should:
- keep state serializable where the library expects it
- keep reducers/setters deterministic
- keep transport/navigation/storage side effects outside reducers
- expose typed selectors/hooks when supported

## Persistence

Persist only what must survive restarts.

Use the project's existing persistence/security mechanism and avoid persisting sensitive data into insecure storage.

## Decision Checklist

1. Backend-owned? -> server-state cache.
2. Only one component/screen? -> local state.
3. Shareable URL concern? -> route/search params.
4. Runtime cross-tree dependency? -> Context/provider may fit.
5. Truly global client/session concern? -> existing global store.

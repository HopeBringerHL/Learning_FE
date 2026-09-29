---
name: frontend-project-architecture
description: Adaptive frontend architecture and file-placement rules for React, React Native, Expo, Vite, Next.js, and similar TypeScript projects. Use when adding or moving screens, features, components, hooks, services, types, providers, utilities, or deciding where code belongs.
metadata:
  origin: portable
---

# Frontend Project Architecture

## First: Discover the Project

Before applying any rule, inspect:
1. package.json
2. tsconfig.json / jsconfig.json
3. top-level source folders
4. routing entrypoints
5. one nearby feature with similar behavior
6. lint/format config

Do not assume a framework, alias, folder layout, or state library until verified.

## Adapt to Existing Structure

Common patterns include:

```text
src/
  app/
  pages/
  features/
  components/
  hooks/
  services/
  lib/
  types/
```

or framework-specific layouts such as Expo Router `app/`, Next.js `app/` / `pages/`, or a Vite `src/` tree.

Preserve the repository's established structure unless the user explicitly asks for an architecture migration.

## Placement Heuristics

- Route/screen/page -> existing route/page area
- Business-specific UI/logic -> feature/domain area
- Reusable UI -> shared/components area
- Cross-feature hook -> shared hooks area
- Backend transport -> existing API/service/client area
- Global infrastructure/config -> lib/core/app infrastructure area
- Broadly shared types -> shared types area
- Feature-only types -> keep close to the feature

## .ts vs .tsx

Use `.ts` when there is no JSX.
Use `.tsx` when JSX is present.

Do not use `.tsx` merely because a file imports React or uses hooks.

## Dependency Direction

Prefer a clear flow such as:

```text
route/page
  -> feature UI
  -> feature hook/controller
  -> service/API layer
  -> HTTP/client infrastructure
  -> backend
```

Adapt names to the project.

## Rules

- Inspect before creating new folders.
- Reuse existing abstractions before introducing new ones.
- Avoid circular feature dependencies.
- Keep business logic out of low-level UI primitives.
- Keep HTTP/config details out of presentation components.
- Match existing naming, import aliases, and barrel-export style.
- Do not introduce a second architecture into the same repository.

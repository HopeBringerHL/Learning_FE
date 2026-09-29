---
name: frontend-feature-workflow
description: Portable end-to-end frontend feature implementation workflow. Use when implementing a new user story or feature spanning routes, UI, API, server state, forms, validation, auth, state, or native concerns.
metadata:
  origin: portable
---

# Frontend Feature Implementation Workflow

## Step 0 — Discover Before Coding

Inspect:
- package.json
- tsconfig/jsconfig
- source tree
- router setup
- one analogous feature
- API/data layer
- state tools
- UI primitives
- lint/format scripts

Do not assume the architecture from another project.

## Step 1 — Find the Nearest Analogue

Identify a feature with similar behavior and copy its structural pattern, not its domain-specific names.

Match:
- file placement
- naming
- imports
- data hooks
- loading/error states
- form handling
- navigation style

## Step 2 — Define Route/Entry Point

If the feature needs a page/screen, add it using the detected router conventions.

Keep route files thin.

## Step 3 — Define Types

Reuse existing domain types where possible.

Keep feature-local types close to the feature; promote them to shared types only when multiple areas truly need them.

## Step 4 — Add Backend Integration

Use the existing API/service/client layer.

Do not call raw endpoints directly from presentation code when the project already has a transport abstraction.

## Step 5 — Add Server-State Logic

Use the project's existing server-state approach:
- TanStack Query
- SWR
- RTK Query
- Apollo
- loader/action pattern
- existing custom hooks

Do not add another library without request.

## Step 6 — Add Form/Validation if Needed

Use the project's form and schema stack.

Preserve shared field components and error handling.

## Step 7 — Build Feature UI

Compose existing shared primitives and theme tokens.

Keep domain-specific UI inside the feature/domain area.

## Step 8 — Compose the Page/Screen

The page/screen should coordinate:
- params/navigation
- feature hooks
- feature components
- screen-level states

Avoid low-level transport/config logic here.

## Step 9 — Cover States

Verify relevant states:
- loading
- error
- empty
- success
- mutation pending
- mutation failure
- unauthorized/unauthenticated
- offline/retry if the project supports it

## Step 10 — Keep State Coherent

After writes, update/invalidate only affected server state.

Avoid duplicating server data into client stores.

## Step 11 — Handle Platform-Specific Concerns

Only apply native, web, realtime, or framework-specific behavior when the project actually uses it.

## Step 12 — Verify

Run the repository's own available scripts, such as:
- format
- lint
- typecheck
- test
- build

Never invent a script name without checking package.json first.

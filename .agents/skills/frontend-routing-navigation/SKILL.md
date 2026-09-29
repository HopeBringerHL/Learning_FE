---
name: frontend-routing-navigation
description: Adaptive routing and navigation patterns for frontend projects. Use when adding routes, pages, layouts, nested navigation, tabs, dynamic params, redirects, guards, or back-navigation behavior.
metadata:
  origin: portable
---

# Frontend Routing and Navigation

## First: Detect the Router

Inspect package.json and existing route files.

Possible routers include:
- Expo Router
- React Router
- Next.js App Router / Pages Router
- React Navigation
- another project-specific router

Do not use router-specific APIs until the installed router is confirmed.

## Follow Existing Route Conventions

Inspect nearby routes for:
- folder/file naming
- dynamic params
- layouts
- route groups
- loaders/actions
- guards
- tabs/stacks
- navigation helpers

## Generic Rules

- Keep route files thin.
- Route files should compose feature code, not own HTTP transport.
- Prefer stable route params/URL state for identifiers that must survive refresh/deep-linking.
- Validate required params before issuing queries.
- Keep app-wide navigation configuration near the router root.
- Keep nested navigation configuration close to the routes it controls.

## Back Navigation

Use the router's safe back-navigation pattern and provide a fallback when the project already does so.

## Auth-Gated Navigation

Reuse the existing auth/session abstraction.

Do not duplicate auth bootstrap or token checks inside individual screens.

## Framework Examples

If Expo Router is detected, follow its file-based routing and `_layout.tsx` conventions.

If React Router is detected, follow the existing route-object or JSX route configuration.

If Next.js is detected, follow the project's App Router or Pages Router conventions rather than mixing both.

## Review Checklist

- route exists at the expected path
- params are typed when possible
- navigation survives direct entry/deep links where relevant
- auth behavior matches existing project conventions
- back navigation behaves correctly
- route file contains no raw transport logic

---
name: frontend-ui-styling
description: Adaptive frontend UI and styling patterns for React web and React Native projects. Use when building components/screens, styling, extending a design system, handling theme tokens, typography, icons, layout, safe areas, or reusable UI primitives.
metadata:
  origin: portable
---

# Frontend UI and Styling

## First: Detect the UI Stack

Inspect package.json and nearby components for:
- Tailwind CSS / NativeWind
- CSS Modules / Sass
- styled-components / Emotion
- component libraries
- design tokens/theme files
- icon libraries
- React Native vs web

Do not assume NativeWind, Tailwind, or a specific component library.

## Reuse Before Creating

Inspect the existing shared/base UI layer before adding new primitives.

Reuse existing:
- Button
- Input
- Text/Typography
- Icon
- Modal/Dialog
- Select
- Table/List
- Loading/Error/Empty states

Do not create a second visual system for one feature.

## Styling Rules

Follow the project's current styling mechanism.

If Tailwind/NativeWind is present:
- prefer existing semantic tokens
- use the repository's class-merging helper when available
- avoid arbitrary values when a token already exists

If CSS Modules/styled-components/etc. are present, follow nearby component conventions instead.

## Theme and Tokens

Prefer semantic intent over literal colors:
- background
- foreground/text
- primary
- secondary
- muted
- destructive/error
- success/warning if defined
- border/input/card

Do not hard-code brand values repeatedly.

## Typography and Icons

Reuse configured fonts/type scales and the established icon library.

Do not import multiple icon systems into one feature unless the project already does so.

## Platform Concerns

For React Native:
- account for safe areas
- keyboard behavior
- touch target sizing
- native pressables
- platform differences

For web:
- account for semantic HTML
- keyboard navigation
- focus states
- responsive layout

## Placement

Generic/reusable UI belongs in the project's shared UI area.

Domain-specific UI belongs close to its feature/domain.

## Review Checklist

- reuses existing primitives
- uses existing theme tokens
- handles loading/error/empty where relevant
- supports accessibility expected by the platform
- does not introduce unnecessary UI dependencies

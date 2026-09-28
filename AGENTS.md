# Repository Guidelines

## Project Structure & Module Organization

This is a Vite, React 19, and TypeScript frontend. Application code lives in
`src/`: `main.tsx` mounts the app, `App.tsx` is the root component, and
`index.css`/`App.css` hold global and component styling. Put imported images in
`src/assets/`; use `public/` only for files served unchanged at the site root.
Configuration is at the repository root: `vite.config.ts`, `tsconfig*.json`,
and `eslint.config.js`. `docs/` contains project documentation. Build output
is generated in `dist/` and must not be committed.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm run dev` starts the Vite development server with hot reload.
- `npm run build` type-checks with `tsc -b` and creates the production build
  in `dist/`.
- `npm run lint` runs ESLint across the project.
- `npm run preview` serves the built application locally for a final check.

Run `npm run lint` and `npm run build` before opening a pull request.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing two-space
indentation, single quotes, and no-semicolon style. Name components and their
files in PascalCase (for example, `UserCard.tsx`); use camelCase for functions,
props, and variables. Keep component-specific CSS beside its component when it
is introduced; reserve `index.css` for global styles. Respect ESLint and
TypeScript errors—unused locals and parameters fail the TypeScript build.

## Testing Guidelines

No test framework or test command is configured yet. For UI changes, run lint,
build, and verify the affected flow with `npm run dev`. Add a focused test
alongside a component only when the project adopts a test runner; use a
descriptive name such as `UserCard.test.tsx`.

## Commit & Pull Request Guidelines

This checkout has no accessible Git history, so no repository-specific commit
pattern can be inferred. Use short, imperative subjects such as `Add donation
summary card`. Keep commits scoped to one change. Pull requests should explain
the user-visible change, link the relevant issue when available, note checks
run, and include screenshots for visual changes.

## Configuration & Security

Do not commit secrets. Put browser-safe configuration in Vite environment files
only when needed, prefix exposed values with `VITE_`, and document required
variables in the PR or README.

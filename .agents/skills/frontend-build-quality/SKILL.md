---
name: frontend-build-quality
description: Adaptive frontend setup, formatting, linting, typechecking, testing, build, native rebuild, CI, and release workflow. Use when setting up a repository, validating changes, troubleshooting builds, or preparing a PR/release.
metadata:
  origin: portable
---

# Frontend Build and Quality

## First: Inspect Project Tooling

Read:
- package.json scripts
- lockfiles
- Node/package-manager config
- eslint config
- prettier/formatter config
- tsconfig
- build config
- CI workflow
- framework config

Do not assume npm, Vite, Expo, Next.js, EAS, or a specific Node version.

## Package Manager

Detect from lockfile and packageManager field when available:
- package-lock.json -> npm
- pnpm-lock.yaml -> pnpm
- yarn.lock -> yarn
- bun.lock/bun.lockb -> bun

Use the project's existing package manager.

## Install

Prefer the repository's documented install command.

For CI/reproducible installs, use the package manager's frozen/clean install mode when appropriate.

## Scripts

Only run scripts that exist in package.json.

Typical checks may include:
- format
- lint
- typecheck
- test
- build

If a dedicated typecheck script does not exist, inspect tsconfig before deciding whether direct `tsc --noEmit` is appropriate.

## Formatting

Follow repository formatter configuration exactly.

Do not impose formatting rules copied from another project.

## Type Safety

Respect the project's configured strictness.

Avoid adding unnecessary `any`, unsafe casts, or duplicate incompatible types.

## Build

Use the detected framework's build workflow.

Examples:
- Vite: existing `build` script
- Next.js: existing `build` script
- Expo/React Native: detected platform/dev-build scripts

Do not apply native rebuild steps to web projects.

## Native Rebuilds

Only for native projects: rebuild when native dependencies/config change.

Verify framework-specific commands from package.json/config before running them.

## Environment

Inspect example env files and framework conventions.

Never commit secrets or invent missing credentials.

Client-exposed env variables must never contain secrets.

## Pre-PR Checklist

Run all available relevant checks and verify:
- changed flow works
- no accidental secrets
- no unrelated generated files
- no broken imports/types
- navigation/state/cache remain coherent
- diff is scoped to the task

## CI

Prefer matching local verification to existing CI rather than creating a second validation workflow.

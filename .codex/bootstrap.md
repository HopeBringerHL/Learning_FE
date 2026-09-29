# Portable Codex Bootstrap

Use this file when this `.codex/` folder is copied into a new repository.

## Goal

Make Codex discover the repository from the repository itself instead of relying on project names, machine-specific absolute paths, or assumptions copied from another codebase.

## Bootstrap order

1. Resolve the real repository root with Git when available.
2. Read repository-level guidance first: `AGENTS.md`, `README.md`, contribution docs, and existing AI-agent instructions.
3. Read `.codex/context.md`, `.codex/workflow.md`, `.codex/lessons.md`, and `.codex/skills-inventory.md`.
4. Discover the actual stack from source-of-truth files such as package manifests, solution/project files, lockfiles, build configs, lint configs, Docker files, CI files, and environment examples.
5. Inspect the source tree before proposing architecture or edits.
6. Prefer existing project conventions over generic conventions in this folder.
7. Create `.codex/local/handoff.md` and `.codex/local/lessons.md` only when useful and only if `.codex/local/` is ignored by Git.

## Portability rules

- Never hard-code a repository name, organization name, username, drive letter, or absolute local path.
- Never assume the project is frontend, backend, mobile, monorepo, or a specific framework before inspecting it.
- Never assume commands such as `npm test`, `dotnet test`, or `pnpm lint` exist. Read the repository configuration first.
- Never copy architecture facts from the previous repository into the new one.
- Relative paths in shared notes must be relative to the current repository root.
- If a referenced file does not exist, discover the equivalent instead of creating a fake reference.
- Do not overwrite existing project guidance merely because this portable template was copied in.
- Treat generated folders, credentials, local environment files, caches, and build outputs according to the repository's own ignore/config rules.

## Discovery checklist

Identify, when present:

- package manager and lockfile;
- runtime/framework/language versions;
- entry points;
- source/module layout;
- routing/navigation;
- state management and data fetching;
- API/client layer;
- UI/styling system;
- validation/forms;
- authentication/authorization boundaries;
- tests and test runner;
- lint/format/type-check commands;
- build and preview/run commands;
- environment-variable conventions;
- CI/CD and deployment files;
- generated code and directories that should not be edited manually.

Record only stable, verified facts in `context.md`. Do not turn temporary task details into permanent architecture documentation.

## Local notes

Before creating local notes:

```bash
git check-ignore .codex/local/
git ls-files -- .codex/local/
```

Expected behavior:

- `.codex/local/` is ignored;
- no local note is tracked.

Suggested local files:

- `.codex/local/handoff.md`: current task, branch/HEAD observed, completed work, remaining work, verification, blockers, next step.
- `.codex/local/lessons.md`: machine/session-specific lessons that are not ready to become shared project guidance.

Never store secrets, tokens, credentials, personal data, or production data in Codex notes.

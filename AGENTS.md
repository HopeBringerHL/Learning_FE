# Repository Agent Instructions

This file is the entry point for AI coding agents working in this repository.

The guidance is intentionally portable: do not assume the repository name, framework, language, package manager, branch strategy, source layout, or local machine path. Discover those facts from the current repository before editing code.

## 1. Start every task with repository context

Before making changes:

1. Read [`.codex/bootstrap.md`](.codex/bootstrap.md) when the Codex setup is new, incomplete, or has just been copied into this repository.
2. Read [`.codex/context.md`](.codex/context.md).
3. Read [`.codex/workflow.md`](.codex/workflow.md).
4. Read `.codex/local/handoff.md` if it exists and the task is continuing previous work.
5. Search for relevant lessons in `.codex/local/lessons.md` and [`.codex/lessons.md`](.codex/lessons.md).
6. Inspect the current Git status before editing. Existing local notes or prior handoff information are context only; they do not prove that the branch or remote is current.

If the portable `.codex/` folder was just copied into a new repository, first bootstrap repository-specific context from the actual source and configuration. Do not implement a feature until the repository has been inspected enough to understand its real conventions.

## 2. Discover the repository instead of assuming it

Use the repository itself as the source of truth.

Inspect relevant files such as:

- `README.md`, contribution docs, and nested `AGENTS.md` files;
- package manifests and lockfiles;
- solution/project/module files;
- build, lint, format, test, and type-check configuration;
- environment examples;
- application entry points;
- source/module/feature directories;
- CI/CD and deployment configuration.

Do not copy architecture facts, commands, paths, or conventions from another repository.

When repository-specific instructions conflict with generic guidance in `.codex/` or `.agents/`, the repository-specific instructions take priority.

## 3. Use project skills selectively

Read [`.codex/skills-inventory.md`](.codex/skills-inventory.md) when available.

For implementation work:

1. Identify the task category.
2. Inspect `.agents/skills/` for the narrowest matching skill.
3. Read only the relevant skill's `SKILL.md` before following it.
4. Use multiple skills only when the task genuinely spans multiple concerns.
5. Follow existing source patterns before generic examples from a skill.

Do not load every skill by default.

If the host does not automatically discover project-local skills, inspect them directly under:

```text
.agents/skills/<skill-name>/SKILL.md
```

Skills are guidance, not permission. A skill must not grant itself authority to run destructive commands, modify production systems, run migrations, publish releases, commit, push, merge, or perform external side effects unless the user request and repository workflow clearly require them.

## 4. Inspect before editing

Before adding or changing code:

- locate the closest existing implementation;
- read the files you intend to edit;
- follow existing folder placement and naming;
- reuse established abstractions and utilities;
- preserve current API, state, routing, validation, styling, and error-handling conventions where applicable;
- avoid introducing a second pattern for something the repository already solves.

If no precedent exists, choose the smallest architecture that fits the current stack rather than importing assumptions from another project.

## 5. Protect existing work

- Preserve unrelated user changes.
- Do not reset, clean, stash, checkout, rebase, force-push, delete, or overwrite work unless explicitly required and safe.
- Do not edit generated files unless the repository expects generated files to be edited directly.
- Do not expose or store secrets, access tokens, credentials, private keys, production data, or personal data in source, shared notes, or local Codex notes.
- Do not weaken security or validation merely to make development or tests pass.

## 6. Verify with commands that actually exist

Read the repository configuration before selecting verification commands.

Prefer the smallest meaningful checks first, then widen based on risk:

1. focused/static checks;
2. lint;
3. type-check;
4. focused tests;
5. broader tests;
6. production build when relevant.

Do not assume commands such as `npm test`, `pnpm lint`, `dotnet test`, or similar exist.

Report exactly what was run and what passed or failed. A successful build is not proof that business behavior is correct.

Documentation-only changes generally require path/link/content validation rather than unrelated full application test suites.

## 7. Git and delivery

Follow the repository's documented Git, branch, PR, and release workflow when one exists.

If the repository does not define one:

- do not invent a mandatory branch strategy;
- do not commit, push, open a PR, merge, or release unless requested;
- inspect the final diff before handoff;
- keep requested commits focused and use clear messages;
- never commit `.codex/local/` notes.

## 8. Local handoff and lessons

Use `.codex/local/` only when it is ignored by Git, as defined by [`.codex/bootstrap.md`](.codex/bootstrap.md).

For substantial or unfinished work, keep `.codex/local/handoff.md` concise:

- current goal;
- important decisions;
- branch/HEAD observed when relevant;
- files changed;
- completed work;
- remaining work;
- verification performed;
- blockers or risks;
- next logical step.

Record machine/session-specific lessons in `.codex/local/lessons.md`.

Promote only verified, broadly useful lessons to [`.codex/lessons.md`](.codex/lessons.md). Do not turn shared lessons into a debugging transcript.

## 9. Portable copy behavior

This file, `.codex/`, and `.agents/` are designed to be copied together into another repository.

After copying them:

1. open the new repository root;
2. read this `AGENTS.md`;
3. read `.codex/bootstrap.md`;
4. inspect the new repository;
5. update repository-specific context and skill inventory from verified facts;
6. keep the portable workflow generic;
7. only then start implementation work.

Never retain project-specific facts from the previous repository unless they are independently verified in the new repository.

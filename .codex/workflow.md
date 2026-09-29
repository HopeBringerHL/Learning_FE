# Portable Codex Workflow

## 1. Start with discovery

Before editing:

- read `AGENTS.md` and repository documentation;
- inspect Git status without modifying it;
- inspect the smallest relevant part of the source tree;
- read manifests/configs that define the toolchain;
- search for an existing pattern before creating a new abstraction.

Do not rely on conventions remembered from another repository.

## 2. Respect existing work

- Preserve unrelated user changes.
- Do not reset, clean, stash, checkout, rebase, force-push, commit, push, open PRs, or merge unless the task requires it and permission is clear.
- Prefer small, targeted edits over broad rewrites.
- Avoid modifying generated files unless the repository explicitly expects that workflow.
- Never replace working project conventions solely to match this template.

## 3. Implement by local precedent

For new code, find the closest existing example and follow its:

- folder placement;
- naming;
- imports/aliases;
- component/function style;
- types/contracts;
- error handling;
- data-fetching/state pattern;
- styling pattern;
- test placement.

When no precedent exists, choose the simplest structure that fits the current stack and explain major architectural additions.

## 4. Dependency policy

Before adding a dependency:

1. confirm the capability is not already present;
2. prefer the repository's current libraries and platform APIs;
3. check package-manager conventions;
4. avoid adding a package for trivial functionality;
5. state why a new dependency is needed.

Never silently change framework/toolchain versions.

## 5. Verification

Use commands that actually exist in the current repository.

Recommended order:

1. narrow/static check for touched files when available;
2. lint;
3. type-check;
4. focused tests;
5. broader tests when risk warrants it;
6. production build for build-affecting changes.

For documentation-only changes, validate links/paths/content rather than running expensive unrelated suites.

Report exactly what ran and what did not run. A successful build is not equivalent to passing business tests.

## 6. Git workflow

Follow repository-specific branch and PR guidance when it exists.

If no project-specific Git workflow is documented:

- do not invent mandatory branch names;
- keep commits scoped when asked to commit;
- use clear imperative commit messages;
- inspect the diff before handing off;
- never commit secrets or local-only Codex notes.

## 7. Handoff

For substantial work, keep `.codex/local/handoff.md` concise:

- current goal;
- important decisions;
- files changed;
- verification performed;
- blockers/risks;
- next logical step.

Keep `.codex/local/lessons.md` for reusable local lessons. Promote only verified, broadly useful lessons into shared `.codex/lessons.md`.

## 8. Security

- Do not expose secrets from `.env`, credential stores, CI secrets, cloud configs, or logs.
- Do not weaken auth, validation, CORS, TLS, permissions, or security checks merely to make local development pass.
- Treat production access, migrations, destructive commands, and paid external services as explicit-risk operations.

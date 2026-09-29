# Repository Context

This file is intentionally portable. Populate or update it only from facts verified in the current repository.

## Repository identity

- Repository name: discover from Git metadata or project manifests.
- Repository type: discover from the source tree; do not assume.
- Primary language/framework: discover from manifests and source.
- Package/build tool: discover from lockfiles and config.
- Runtime/toolchain version: use pinned/configured versions when present.

## Source map

When working in a repository, document only directories that actually exist.

Suggested categories:

- application entry points;
- feature/domain modules;
- shared UI/components;
- services/API clients;
- state/store/query layer;
- utilities/helpers;
- types/models/contracts;
- tests;
- static assets;
- configuration;
- generated output.

Do not force a repository into these categories if its architecture differs.

## Architecture facts

Capture stable facts such as:

- module boundaries and dependency direction;
- routing/navigation conventions;
- server-state and client-state ownership;
- API request/response conventions;
- error handling;
- authentication/authorization boundaries;
- environment/config loading;
- styling/design-system conventions;
- persistence/cache boundaries when relevant.

Every architecture statement should be traceable to current source or project documentation.

## Commands

Read the repository configuration before filling this section.

Typical categories:

- install;
- development/run;
- lint;
- format;
- type-check;
- unit tests;
- integration/e2e tests;
- production build;
- preview/start production build.

Do not invent commands that are absent from the repository.

## Constraints and invariants

Record rules that must remain true across tasks, for example:

- public interfaces that must stay backward compatible;
- source-of-truth locations;
- generated files that must not be hand-edited;
- security boundaries;
- required validation;
- naming conventions;
- framework-specific restrictions.

Keep task-specific implementation notes in local handoff rather than here.

## Verification status

This shared context describes the repository; it is not proof that the current branch builds or tests pass.

For each task, record actual commands and results in the task response or local handoff.

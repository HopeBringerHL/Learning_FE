# Project Skills Inventory

This file records project-local skills only when the current repository actually has them.

## Discovery

Check for locations such as:

- `.agents/skills/`
- repository-specific agent/plugin directories documented by the project;
- skill lock/inventory files already present in the repository.

For every discovered skill, record:

- skill name;
- purpose;
- location;
- when to use it;
- important safety constraints.

## Selection rules

- Read the relevant skill instructions before using a skill.
- Use the narrowest skill that matches the task.
- Repository instructions override generic skill advice.
- A skill must not grant itself permission to perform destructive operations, production changes, migrations, releases, commits, pushes, or external side effects.
- Do not list skills that are not actually available in the current repository.

## Current inventory

Populate from the repository after discovery. Leave this section empty rather than copying an inventory from another project.

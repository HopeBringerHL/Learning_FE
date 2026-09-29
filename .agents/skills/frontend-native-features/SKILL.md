---
name: frontend-native-features
description: Adaptive native/device integration patterns for React Native and Expo projects. Use when working with notifications, image picking, camera, location, secure storage, permissions, native modules, app config, or platform-specific behavior.
metadata:
  origin: portable
---

# Frontend Native Features

## First: Confirm This Is a Native Project

Inspect package.json and project structure.

Activate this skill only when React Native, Expo, or another native-capable frontend stack is actually present.

Do not apply native-specific rules to a web-only project.

## Discover Existing Integrations

Inspect:
- app.json / app.config.* / native config
- existing permission helpers
- notification provider/hooks
- image/camera hooks
- location/maps services
- secure-storage abstraction
- platform-specific files
- native build scripts

Reuse those abstractions before adding new ones.

## Permissions

For camera, gallery, location, notifications, microphone, etc.:
1. Check/request permission before use.
2. Handle denial explicitly.
3. Show actionable feedback.
4. Avoid repeated unnecessary prompts.
5. Respect platform differences.

## Sensitive Storage

Use the project's secure storage solution for sensitive session/auth data.

Do not downgrade secure storage to plain AsyncStorage or equivalent.

## Images / Files

Keep device selection logic separate from upload transport when the project already separates them.

Validate file size/type/dimensions according to existing constraints before upload.

## Notifications

Prefer one application-level registration/listener layer rather than duplicate listeners across screens.

Always clean up listeners/subscriptions.

## Native Module Changes

When adding/removing native dependencies or changing native config, follow the project's rebuild workflow.

For Expo development-build projects this often includes `expo prebuild` and platform rebuilds, but verify scripts/config first.

## Environment Variables

Respect the framework's public/private environment semantics.

Never place secrets into client-exposed environment variables.

## Platform Safety

Use platform checks only where behavior truly differs.

Keep platform-specific implementation close to the integration layer instead of scattering checks across unrelated feature components.

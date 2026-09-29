---
name: frontend-auth-session
description: Adaptive authentication/session patterns for frontend applications. Use when changing login, logout, OAuth, JWT/cookie sessions, token refresh, secure storage, authorization-aware UI, or authenticated API requests.
metadata:
  origin: portable
---

# Frontend Authentication and Session

## First: Discover the Auth Model

Inspect:
- auth dependencies in package.json
- API client/interceptors
- auth hooks/providers/stores
- storage usage
- login/logout flows
- refresh-token logic
- route guards
- backend contract

Do not assume JWT, cookies, SecureStore, localStorage, Redux, or OAuth until verified.

## Determine Session Type

Common patterns:
- HttpOnly cookie session
- bearer access token + refresh token
- OAuth provider session
- Firebase/Supabase/auth SDK session
- platform secure storage for mobile

Preserve the existing security model.

## Storage Rules

- Never move sensitive tokens into less secure storage just for convenience.
- On React Native/Expo, prefer the project's secure storage abstraction when present.
- On web, do not replace HttpOnly cookies with JavaScript-readable token storage.
- Do not hard-code credentials or secrets.

## Authenticated Requests

Centralize auth attachment/refresh behavior in the existing HTTP/auth infrastructure.

Do not manually add Authorization headers in every service.

## Refresh Concurrency

If refresh tokens are used, preserve or implement a single refresh pipeline so concurrent expired requests do not trigger refresh races.

Queued requests should resolve with the new session or fail consistently.

## Auth Bootstrap

Use the project-wide session/auth abstraction for initial session restoration.

Do not re-read/decode session storage independently in every screen.

## Logout

Logout should clear all relevant session-owned resources:
- persistent auth storage
- in-memory/global auth state
- sensitive caches where appropriate
- realtime connections/subscriptions
- provider/SDK sessions when required

Follow the project's existing navigation behavior after logout.

## Authorization

Client-side role/permission checks only control UX.

Backend authorization remains authoritative.

## OAuth / Social Login

Reuse the project's configured provider and callback flow. Do not initialize duplicate provider configurations inside individual screens.

---
name: frontend-realtime
description: Adaptive realtime frontend patterns for SignalR, WebSocket, Socket.IO, SSE, subscriptions, and realtime cache synchronization. Use when adding or changing live chat, notifications, event subscriptions, connection lifecycle, reconnection, or cached realtime updates.
metadata:
  origin: portable
---

# Frontend Realtime

## First: Detect the Realtime Stack

Inspect package.json and source for:
- SignalR
- WebSocket
- Socket.IO
- Server-Sent Events
- GraphQL subscriptions
- Firebase realtime listeners
- another project-specific abstraction

Do not assume SignalR.

## Connection Ownership

Find where application-wide connections are currently initialized.

Prefer a centralized service/provider/hook over opening duplicate connections from arbitrary screens.

A connection layer commonly owns:
- connection construction
- authentication
- start/reconnect
- event registration
- event cleanup
- send/invoke methods
- destroy/disconnect

## Feature Integration

Feature hooks/components should consume the existing realtime abstraction rather than construct transport connections themselves.

## Cache Synchronization

If the project uses a server-state cache:
- update the exact existing cache key
- preserve pagination/infinite-query structure
- handle missing cached data
- update immutably
- avoid overwriting unrelated data

If no cache library exists, follow the existing state ownership pattern.

## Optimistic / Temporary Events

When inserting temporary client events:
- use identifiable temporary IDs
- preserve required shape
- define how server echoes/reconciliation work
- provide rollback when true optimistic writes can fail

## Lifecycle

Connections/subscriptions must be cleaned up when:
- component/provider unmounts
- user logs out if auth-bound
- session changes
- target room/channel changes

Avoid duplicate event handlers after reconnect/render cycles.

## Failure Handling

A network/realtime failure must not corrupt stable cached state.

Do not silently swallow failures that the UI needs to surface.

## Security

Do not trust client-only room/user identifiers as authorization.
Backend/hub authorization remains authoritative.

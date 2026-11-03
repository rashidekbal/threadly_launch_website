# Realtime Protocol Analysis

## Architecture Rationale: Zero Realtime Runtime

The Threadly Launch Website is intentionally designed with **zero persistent WebSocket connections** or realtime subscriptions.

### Architectural Decisions
1. **Peak Availability**: As a public marketing and distribution gateway, the site must maintain 100% uptime even if backend server clusters are undergoing maintenance or scaling.
2. **Instant First Contentful Paint (FCP)**: Eliminating realtime socket handshakes avoids blocking the browser main thread and ensures sub-second Lighthouse performance scores.
3. **Bandwidth Economy**: Visitors on metered mobile networks incur minimal data transfer overhead when downloading APK installation files.

# ADR-001: Vite 7 + React 19 Client SPA vs Next.js SSG

## Status
Accepted (Production Architecture)

## Context
The Threadly Launch Website requires an ultra-lightweight, rapid-loading marketing and APK distribution portal with dark/light theming and interactive FAQ accordions.

## Decision
Adopt **Vite 7** with **React 19** as a static Single Page Application (SPA), rather than Next.js or a complex Node server SSR framework.

## Consequences
### Positive
- Zero runtime server costs: statically hostable on GitHub Pages, Cloudflare Pages, or S3.
- Sub-second local development startup and HMR.
- Minimal dependency footprint with zero server maintenance overhead.

### Negative / Trade-offs
- Static meta tags require pre-rendering or edge functions if per-route dynamic OpenGraph unfurling is needed.

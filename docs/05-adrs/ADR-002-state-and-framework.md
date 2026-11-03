# ADR-002: CSS Custom Properties & Semantic Utilities vs Runtime CSS-in-JS

## Status
Accepted (Production Architecture)

## Context
Smooth, zero-flash theme switching between Light and Dark mode is essential for user experience. Runtime CSS-in-JS libraries (such as styled-components) introduce JavaScript parsing overhead and runtime styling recalculations.

## Decision
Implement a pure **CSS Custom Property** token architecture declared in `src/index.css` and mutated via a top-level `data-theme` attribute on `document.documentElement`.

## Consequences
### Positive
- Zero JavaScript overhead during theme mutations: the browser re-evaluates CSS variables natively at 60+ FPS.
- Eliminates flash of unstyled theme (FOUST).
- Clean semantic classes across all React components.

### Negative / Trade-offs
- Global class names must be disciplined to prevent style clashes across components.

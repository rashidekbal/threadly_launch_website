# Component Architecture

## Component Tree & Composition

```mermaid
graph TD
    App[App.jsx] --> Nav[Navbar.jsx]
    App --> Main[main Routes Container]
    App --> Foot[Footer.jsx]

    Nav --> Brand[Brand Logo & Name]
    Nav --> NavLinks[Section Jump Links]
    Nav --> ThemeToggle[ThemeToggle.jsx]

    Main -->|Route: /| Home[Home.jsx]
    Main -->|Route: /privacy| Privacy[Privacy.jsx]
    Main -->|Route: /terms| Terms[Terms.jsx]

    Home --> Hero[Hero.jsx]
    Home --> Features[Features.jsx]
    Home --> TechStack[TechStack.jsx]
    Home --> OpenSource[OpenSource.jsx]
    Home --> FAQ[FAQ.jsx]
    Home --> Developer[Developer.jsx]
    Home --> Donation[Donation.jsx]
```

## Theme Switching Architecture
Theme switching is managed in `src/components/ThemeToggle.jsx`:
- Queries the root document element (`document.documentElement`).
- Toggles the `data-theme` attribute between `"light"` and `"dark"`.
- Syncs the active preference with browser `localStorage.getItem("theme")`.
- CSS custom variables defined in `src/index.css` automatically adapt colors, shadows, and borders across all components.

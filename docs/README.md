# Threadly Launch Website (`threadly_launch_website`) Documentation Suite

Welcome to the engineering documentation hub for the **Threadly Launch Website** (`threadly_launch_website`). This web application, built with React 19, Vite 7, and React Router 7, serves as the primary public landing page, product showcase, APK distribution hub, and open-source documentation gateway for the Threadly ecosystem.

---

## 🗺️ Documentation Directory

| Section | Description | Target Audience |
| :--- | :--- | :--- |
| [**Codebase Index**](CODEBASE_INDEX.md) | Exhaustive file-by-file inventory of all components, pages, styles, and marketing assets. | All Developers & Contributors |
| [**01. Architecture Overview**](01-architecture/overview.md) | High-level system topology, showcase goals, client-side routing, and tech stack. | Architects, Designers |
| [**01. Component Architecture**](01-architecture/component-architecture.md) | Component hierarchy, sections, theme switching state, and responsive design systems. | Frontend Engineers |
| [**01. Process Isolation & Security**](01-architecture/process-isolation.md) | Static asset security, zero-storage privacy model, external link hardening (`noopener, noreferrer`). | Security Engineers |
| [**01. Data Flows & Sequences**](01-architecture/data-flows.md) | User journeys for theme toggling, APK download routing, and legal navigation. | Frontend Engineers |
| [**02. API Contracts & External Links**](02-contracts-and-apis/api-contracts.md) | External link bindings (GitHub releases, open-source repositories, donation endpoints). | Frontend Engineers |
| [**02. Realtime Protocol**](02-contracts-and-apis/realtime-protocol.md) | Realtime analysis (pure static SPA; rationale for zero WebSocket runtime). | Frontend Engineers |
| [**02. Persistence & Storage**](02-contracts-and-apis/persistence-and-storage.md) | Theme persistence in LocalStorage (`data-theme`), caching, and static asset distribution. | Frontend Engineers |
| [**03. Local Setup Guide**](03-developer-playbook/local-setup.md) | Step-by-step instructions for running Vite dev server, testing responsive viewports, and asset optimization. | New Developers |
| [**03. Debugging & Inspection**](03-developer-playbook/debugging-and-inspection.md) | CSS variable auditing, theme toggle inspection, and mobile viewport emulation. | QA & UI Engineers |
| [**03. Build & Packaging**](03-developer-playbook/build-and-packaging.md) | Vite production bundling, Rollup chunk hashing, and edge static hosting. | DevOps & Frontend Devs |
| [**04. How to Add a Feature**](04-change-playbooks/how-to-add-a-feature.md) | Step-by-step guide for adding new showcase sections, landing pages, or APK download banners. | Contributors |
| [**04. Troubleshooting & Runbooks**](04-change-playbooks/troubleshooting.md) | Common UI glitches, broken asset paths, hydration-like CSS flashes, and resolution steps. | Support & Maintainers |
| [**05. ADR-001: Core Engine Choice**](05-adrs/ADR-001-core-engine-choice.md) | Architecture Decision Record: Vite 7 + React 19 Client SPA vs Static Site Generators (SSG). | Architects |
| [**05. ADR-002: Styling Strategy**](05-adrs/ADR-002-state-and-framework.md) | Architecture Decision Record: CSS Custom Properties & Semantic Utility Classes vs Runtime CSS-in-JS. | Architects |

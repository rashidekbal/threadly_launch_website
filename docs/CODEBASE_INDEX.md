# Codebase Index: Threadly Launch & Showcase Website

This document provides an exhaustive inventory of all source code and static assets in the Threadly Launch Website repository (`threadly_launch_website`), detailing file paths, line counts, module purposes, exports, and dependency chains.

**Total Tracked Repository Files**: 40

---

## Project Config & Setup (7 files)

| File Path | Lines | Key Exports / Role | Primary Imports & Dependencies |
| :--- | :--- | :--- | :--- |
| [`.gitignore`](../.gitignore) | 24 | Marketing / Static Asset | None |
| [`README.md`](../README.md) | 16 | Marketing / Static Asset | None |
| [`eslint.config.js`](../eslint.config.js) | 29 | defineConfig | js, eslint-plugin-react-hooks, eslint-plugin-react-refresh |
| [`index.html`](../index.html) | 13 | Marketing / Static Asset | None |
| [`package-lock.json`](../package-lock.json) | 2975 | Marketing / Static Asset | None |
| [`package.json`](../package.json) | 28 | Marketing / Static Asset | None |
| [`vite.config.js`](../vite.config.js) | 7 | defineConfig | plugin-react, vite |

## Core Application & Routing (2 files)

| File Path | Lines | Key Exports / Role | Primary Imports & Dependencies |
| :--- | :--- | :--- | :--- |
| [`src/App.jsx`](../src/App.jsx) | 27 | App | Footer, Navbar, Home |
| [`src/main.jsx`](../src/main.jsx) | 10 | Marketing / Static Asset | App.jsx, index.css, react |

## Landing Page Sections (10 files)

| File Path | Lines | Key Exports / Role | Primary Imports & Dependencies |
| :--- | :--- | :--- | :--- |
| [`src/components/Developer.jsx`](../src/components/Developer.jsx) | 73 | Developer | react |
| [`src/components/Donation.jsx`](../src/components/Donation.jsx) | 45 | Donation | Qr.jpeg, react |
| [`src/components/FAQ.jsx`](../src/components/FAQ.jsx) | 85 | FAQ | None |
| [`src/components/Features.jsx`](../src/components/Features.jsx) | 96 | Features | react |
| [`src/components/Footer.jsx`](../src/components/Footer.jsx) | 52 | Footer | react-router-dom |
| [`src/components/Hero.jsx`](../src/components/Hero.jsx) | 73 | Hero | react |
| [`src/components/Navbar.jsx`](../src/components/Navbar.jsx) | 170 | Navbar | ThemeToggle, react-router-dom |
| [`src/components/OpenSource.jsx`](../src/components/OpenSource.jsx) | 50 | OpenSource | react |
| [`src/components/TechStack.jsx`](../src/components/TechStack.jsx) | 86 | TechStack | react |
| [`src/components/ThemeToggle.jsx`](../src/components/ThemeToggle.jsx) | 43 | ThemeToggle | None |

## Legal & Static Pages (3 files)

| File Path | Lines | Key Exports / Role | Primary Imports & Dependencies |
| :--- | :--- | :--- | :--- |
| [`src/pages/Home.jsx`](../src/pages/Home.jsx) | 24 | Home | Developer, Donation, FAQ |
| [`src/pages/Privacy.jsx`](../src/pages/Privacy.jsx) | 137 | Privacy | None |
| [`src/pages/Terms.jsx`](../src/pages/Terms.jsx) | 154 | Terms | None |

## Global Styles (2 files)

| File Path | Lines | Key Exports / Role | Primary Imports & Dependencies |
| :--- | :--- | :--- | :--- |
| [`src/App.css`](../src/App.css) | 42 | Marketing / Static Asset | None |
| [`src/index.css`](../src/index.css) | 337 | Marketing / Static Asset | None |

## Public Marketing & Image Assets (16 files)

| File Path | Lines | Key Exports / Role | Primary Imports & Dependencies |
| :--- | :--- | :--- | :--- |
| [`public/assets/Qr.jpeg`](../public/assets/Qr.jpeg) | 552 | Marketing / Static Asset | None |
| [`public/assets/reels_icon.png`](../public/assets/reels_icon.png) | 30 | Marketing / Static Asset | None |
| [`public/assets/sample_post.png`](../public/assets/sample_post.png) | 11853 | Marketing / Static Asset | None |
| [`public/assets/splash.png`](../public/assets/splash.png) | 585 | Marketing / Static Asset | None |
| [`public/assets/screenshots/1.jpg`](../public/assets/screenshots/1.jpg) | 1109 | Marketing / Static Asset | None |
| [`public/assets/screenshots/10.jpg`](../public/assets/screenshots/10.jpg) | 4675 | Marketing / Static Asset | None |
| [`public/assets/screenshots/11.jpg`](../public/assets/screenshots/11.jpg) | 1378 | Marketing / Static Asset | None |
| [`public/assets/screenshots/12.jpg`](../public/assets/screenshots/12.jpg) | 824 | Marketing / Static Asset | None |
| [`public/assets/screenshots/2.jpg`](../public/assets/screenshots/2.jpg) | 674 | Marketing / Static Asset | None |
| [`public/assets/screenshots/3.jpg`](../public/assets/screenshots/3.jpg) | 6743 | Marketing / Static Asset | None |
| [`public/assets/screenshots/4.jpg`](../public/assets/screenshots/4.jpg) | 4896 | Marketing / Static Asset | None |
| [`public/assets/screenshots/5.jpg`](../public/assets/screenshots/5.jpg) | 4880 | Marketing / Static Asset | None |
| [`public/assets/screenshots/6.jpg`](../public/assets/screenshots/6.jpg) | 2359 | Marketing / Static Asset | None |
| [`public/assets/screenshots/7.jpg`](../public/assets/screenshots/7.jpg) | 8758 | Marketing / Static Asset | None |
| [`public/assets/screenshots/8.jpg`](../public/assets/screenshots/8.jpg) | 9385 | Marketing / Static Asset | None |
| [`public/assets/screenshots/9.jpg`](../public/assets/screenshots/9.jpg) | 6707 | Marketing / Static Asset | None |

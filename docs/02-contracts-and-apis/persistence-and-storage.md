# Persistence, LocalStorage & Asset Caching

## 1. LocalStorage Key Schema

| Key Name | Allowed Values | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `theme` | `"light"` \| `"dark"` | System preference | Persists user appearance choice across browser sessions. |

---

## 2. Browser Cache Headers & Static CDN Distribution
When deployed to static edge hosting (Vercel, Cloudflare, Netlify, or GitHub Pages):
- **HTML (`index.html`)**: `Cache-Control: public, max-age=0, must-revalidate`
- **Hashed Assets (`/assets/*.js`, `/assets/*.css`)**: `Cache-Control: public, max-age=31536000, immutable`
- **Images (`/assets/screenshots/*`)**: `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`

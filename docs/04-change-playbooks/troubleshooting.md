# Troubleshooting & Operational Runbooks

## 1. Direct Page Refresh Returns 404 (e.g. `/privacy` or `/terms`)
- **Symptoms**: Navigating to `/privacy` from Navbar works, but refreshing the browser shows a web server 404 error.
- **Root Cause**: The static web server does not rewrite missing paths to `index.html`.
- **Resolution**:
  - For Vercel: Add a `vercel.json` with rewrite to `/index.html`.
  - For NGINX: Ensure `try_files $uri $uri/ /index.html;` is present in server block.

---

## 2. Screenshot Images Missing or Broken
- **Symptoms**: Image elements show broken image icons.
- **Root Cause**: Relative path discrepancy. Assets in `public/assets/` must be referenced as `/assets/...`, not `../../public/assets/...`.
- **Resolution**: Use absolute leading slash paths (`src="/assets/screenshots/1.jpg"`).

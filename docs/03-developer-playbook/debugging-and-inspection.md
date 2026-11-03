# Debugging & Inspection Playbook

## 1. Inspecting Responsive Viewports
1. Open Chrome DevTools (`Ctrl + Shift + I` or `F12`).
2. Toggle Device Toolbar (`Ctrl + Shift + M`).
3. Test against common device presets:
   - Pixel 7 / Galaxy S20 (360px - 412px width)
   - iPad / Tablet (768px - 1024px width)
   - Desktop (1280px+ width)

---

## 2. Auditing Theme Variable Propagation
Inspect elements in the DevTools Elements tab to verify CSS variable resolution:
```css
:root[data-theme="dark"] {
  --primary-color: #6366f1;
  --bg-primary: #0f172a;
  --card-bg: #1e293b;
  --text-primary: #f8fafc;
}
```

---

## 3. Verifying Broken Links & Assets
Run an audit script or inspect Network tab for 404 responses on screenshots:
- Verify that all `/assets/screenshots/*.jpg` paths map directly to files existing in `public/assets/screenshots/`.

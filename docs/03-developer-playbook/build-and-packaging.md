# Build, Packaging & Production Deployment

## 1. Production Compilation

```powershell
npm run build
```

The output directory `dist/` contains:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── assets/ (Static images copied from public/)
```

---

## 2. Deployment Configurations

### GitHub Pages / Static Server
The site can be deployed directly to GitHub Pages via GitHub Actions:
```yaml
name: Deploy Launch Website
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

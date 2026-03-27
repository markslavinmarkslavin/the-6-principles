# 🚀 GitHub Pages Setup

## Schritt-für-Schritt Anleitung

### 1. Gehe zum Repository
Öffne: https://github.com/markslavinmarkslavin/the-6-principles/settings/pages

### 2. GitHub Pages aktivieren
```
Build and deployment
Source: Deploy from a branch

Branch: main
Folder: / (root)
```

### 3. Save klicken

### 4. Warten (1-2 Minuten)
Dann erscheint die URL unten auf der Seite.

---

## Alternative: index.html ins Root

Wenn das nicht funktioniert:

1. README.md löschen oder umbenennen
2. index.html muss im Root sein (nicht im Unterordner)

---

## Oder: Actions Workflow erstellen

File: `.github/workflows/pages.yml`
```yaml
name: GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/deploy-pages@v4
```

---

Nach dem Aktivieren:
**URL wird sein:** https://markslavinmarkslavin.github.io/the-6-principles/

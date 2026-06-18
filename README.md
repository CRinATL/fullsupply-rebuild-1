# fullsupply-rebuild-1

A clean rebuild of the Full Supply website using **Eleventy (11ty)** and **vanilla CSS**,
replacing the original WordPress / Avada / Elementor stack. Deployed to GitHub Pages.

See [`PLAN.md`](./PLAN.md) for the full plan, scope, and build phases.

## Develop

```bash
npm install
npm start      # http://localhost:8080 with live reload
npm run build  # build static site into _site/
```

Requires Node.js (LTS) and npm.

## Structure

```
src/
  _includes/      layouts, partials, components (Nunjucks)
  _data/          global data (site.json: nav, brand, contact)
  assets/         css / js / img
  *.njk | *.md    pages
_site/            build output (published to GitHub Pages)
```

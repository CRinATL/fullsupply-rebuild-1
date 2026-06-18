# Full Supply — Rebuild Plan (`fullsupply-rebuild-1`)

A clean, functional fork of the Full Supply website. Rebuilt from scratch in
**Eleventy (11ty) + vanilla CSS**, visually faithful to the current site, deployed on
**GitHub Pages**. Replaces the WordPress / Avada / Fusion Builder / Elementor stack and its
~14 × 1.2 MB per-page CSS blobs with one small hand-written stylesheet and shared templates.

Source of truth for content/design: the static mirror in the sibling repo
`fullsupply-web-mirror` (a `wget` snapshot of fullsupply.org, captured 2026-06-11).

## Decisions (locked)

| Area | Decision |
|------|----------|
| Generator | Eleventy (11ty), Nunjucks templates + Markdown content |
| Styling | Vanilla CSS with custom-property design tokens (no Tailwind/PostCSS) |
| Dynamic features | Third-party hosted services (forms, donations, vlog, events) |
| Design fidelity | Visually similar, cleaned up (not a pixel-perfect clone) |
| Scope | Core content pages only |
| Hosting | GitHub Pages via GitHub Actions |
| Repo | This fresh repo, `fullsupply-rebuild-1` |

## Design system (extracted from the mirror)

- **Palette:** purple `#7c2c83`, green `#65bc7b`, ink `#212934` / `#180016`,
  off-white `#f6f6f6`, tan `#c1b299`
- **Type:** Montserrat (Google Fonts)
- **Icons:** inline SVG (dropping Font Awesome)

## Scope — core content pages

Home, About, NOWA, NOWA 5K Walk/Run, Global Missions, One Minute Mentoring,
Ways to Give, Partner With Us, VLOG, Team, Salvation Secured, Christ's Imminent Return.

**Excluded** (WordPress auto-generated cruft): author archives, portfolio taxonomies,
iCal exports, `5283-2`, category/month event archive views.

## Dynamic features → hosted services

| Feature | Source (broken in mirror) | Rebuild approach |
|---------|---------------------------|------------------|
| Signup / contact / partner forms | Gravity Forms | Formspree (or Google Forms embed), styled to match |
| Donations | PayPal / 10to8 | PayPal hosted donate buttons |
| VLOG | YouTube Feed Pro | Static grid of YouTube embeds / channel link |
| Events | The Events Calendar | Static list (data in `_data`); optional Google Calendar embed |

**Inputs still needed from the site owner:** form service endpoint, PayPal donate
button/account, YouTube channel URL, real upcoming-event data.

## Build phases (sub-agent strategy)

- **Phase 0 — Scaffold (main session):** repo, Eleventy config, base layout, deploy
  workflow. Empty site builds and publishes. ← *current phase*
- **Phase 1 — Design system + content extraction (2 agents, parallel):**
  design-system agent builds tokens/base/component CSS + a `/styleguide`; extraction
  agent pulls text/images/nav from the mirror into Markdown + `_data`.
- **Phase 2 — Home page vertical slice (1 agent):** full home page from the component
  kit. Visual-approval checkpoint with the owner.
- **Phase 3 — Page fan-out (3–4 parallel agents, git worktrees):** batches of content
  pages assembled from shared components; wire hosted-service embeds.
- **Phase 4 — Integration & QA:** link-check, responsive pass, image optimization,
  visual diff vs mirror, a11y + Lighthouse.

## Local development

```bash
npm install
npm start      # serve with live reload at http://localhost:8080
npm run build  # output static site to _site/
```

> Requires Node.js (LTS) + npm, which are not yet installed on this machine.

# MTX Enterprise AI Strategy \& Activation

An interactive, static website prototype presenting MTX Enterprise AI Strategy \& Activation as a strategy\-to\-implementation service for government agencies.

Live site: [https://g4gaurang.github.io/AIStrategy/](https://g4gaurang.github.io/AIStrategy/)

## Purpose

This prototype explains, at an executive level, how MTX helps agencies move from fragmented AI activity to an enterprise strategy, investment roadmap, and governed path to implementation. It is a public product\-positioning site, not a solution blueprint.

## Local setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints the local URL after startup.

## Production build

```bash
npm run build
npm run preview -- --base /AIStrategy/
```

The production output is written to `dist`. Vite uses the `/AIStrategy/` base path so built assets resolve from the GitHub Pages repository subdirectory.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys `dist` on pushes to `main` and supports manual runs.

In the repository settings:

* Open **Settings → Pages**.
* Under **Build and deployment**, select **GitHub Actions** as the source.
* Push to `main` or run the workflow manually.

Expected live URL: `https://g4gaurang.github.io/AIStrategy/`

## Contact link placeholder

The workshop call to action uses the placeholder anchor `#contact`. Update `contactLink` in `src/App.tsx` when an approved MTX contact destination is available.

## Content confidentiality

This public repository must not contain agency\-specific opportunity catalogs, named workflow candidates, proprietary scoring formulas, sample opportunity scores, detailed implementation patterns, client names, or other competitive implementation detail.

Agency\-specific opportunity content must not be committed to this public repository. Keep that material inside the applicable engagement and information\-sharing environment.

## Source layout

* `src/data/content.ts` — public, high\-level content objects
* `src/types/index.ts` — shared TypeScript models
* `src/App.tsx` — page composition and interactive modules
* `src/components/PortfolioChart.tsx` — lazy\-loaded abstract visualization
* `src/styles/app.css` — design tokens and responsive styles

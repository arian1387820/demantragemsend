# DEMANTRAGEMS

Editorial website for DEMANTRAGEMS — Iranian natural Demantoid Garnet, exceptional rough
gemstones and precision gemstone cutting.

## Stack

- **Frontend:** React 18 + TypeScript + React Router, bundled by Vite.
- **Server:** Express (`server/index.js`) serving the JSON API and mounting Vite in
  middleware mode in development, so the site runs on a single origin at port `3000`.
- **Forms:** `POST /api/newsletter` and `POST /api/contact` validate input and append records
  to JSONL files in `data/` (git-ignored, mounted as a volume in the container setup).
- **Styling:** two hand-written stylesheets (`src/styles/global.css`, `home.css`, `pages.css`)
  built on a two-colour system — Deep Emerald `#173D32` and Stone Cream `#E9E4D7`.
- **Fonts:** self-hosted via `@fontsource` (Cormorant Garamond, Inter).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts: `npm run build` (production bundle), `npm start` (serve the bundle),
`npm run typecheck`.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, editorial strip, featured collection, featured gemstone, approach, banner, journal |
| `/collections` | Collection index |
| `/collections/:slug` | Collection detail (`faceted-demantoids`, `rough-gemstones`, `exceptional-inclusions`) |
| `/about` | About Us |
| `/journal` | Journal index |
| `/journal/:slug` | Article |
| `/contact` | Contact + enquiry form |
| `/privacy`, `/terms`, `/credits` | Legal pages and image credits |

## Content

All copy, collections and articles live in `src/data/site.ts`. Photographs are in
`public/images/`; editorial photographs sourced from third parties are credited on the
`/credits` page.

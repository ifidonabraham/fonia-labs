# Company Screenshots

Drop real product screenshots here and they appear automatically on each
company page — no code changes needed.

## How it works

Create a folder named after the company **slug** and add image files:

```
public/screenshots/<slug>/01-home.png
public/screenshots/<slug>/02-dashboard.png
```

- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.gif`, `.svg`
- Images are shown sorted by file name (use `01-`, `02-`, … to control order)
- If a folder has no images, the page falls back to labeled placeholders
- Recommended ratio: 16:10, ~1600×1000px

## Slugs

`fontech`, `omegaestate`, `smaid`, `dokito`, `seek`, `contractfeed`,
`stormbridge`, `complyiq`, `unilagfoodspots`, `deadline-dungeon`,
`systemguardian`

Example:

```
public/screenshots/dokito/01-home.png
public/screenshots/dokito/02-records.png
public/screenshots/dokito/03-facility-finder.png
```

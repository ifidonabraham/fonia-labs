# Fonia Labs

**Where Ideas Become Companies.**

Fonia Labs is a global innovation group building companies, platforms, and products
that solve real-world problems. It is a parent innovation group and startup factory
that creates, builds, organizes, and grows ideas into products, platforms, and companies.

Founded and built by **Ifidon Abraham**.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript + React
- Plain CSS design system (`app/globals.css`)
- Static data files for the company ecosystem (`data/`)
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```txt
fonia-labs/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, nav + footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system
│   ├── not-found.tsx           # 404
│   ├── about/page.tsx
│   ├── collaborate/page.tsx
│   ├── contact/page.tsx
│   ├── updates/page.tsx
│   └── companies/
│       ├── page.tsx            # Ecosystem listing
│       └── [slug]/page.tsx     # Dynamic company pages
├── components/                 # Navbar, Footer, Logo, OCore, cards, forms, CTA…
├── data/
│   ├── companies.ts            # Company ecosystem data
│   └── updates.ts              # Updates feed
└── public/
    ├── favicon.svg
    ├── logos/
    └── screenshots/
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/companies` | Companies & ventures ecosystem |
| `/companies/[slug]` | Individual company pages |
| `/about` | About Fonia Labs |
| `/collaborate` | Collaborate / partner |
| `/updates` | Updates feed |
| `/contact` | Contact |

> `/brands` was a temporary legacy route and now redirects to `/companies`.

## Brand

- **Tagline:** Where Ideas Become Companies.
- **Palette:** `#0B1120` · `#2563EB` · `#38BDF8` · `#F8FAFC` · `#6B7280`
- **Typography:** Poppins
- **Logo:** "Fonia" wordmark with an origin **O-core** symbol.

## Ecosystem

**Core Company:** FonTech ·
**Featured Companies:** OmegaEstate, SMaid, Dokito, Seek ·
**Growth Companies:** ContractFeed, StormBridge, ComplyIQ ·
**Community & Labs Products:** UnilagFoodSpots, Deadline Dungeon, SystemGuardian

## Deployment

Deployed on Vercel. Import the repository, keep the auto-detected Next.js settings
(`npm run build`), and deploy.

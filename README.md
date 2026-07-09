# Evergreen Transport 123

A premium, modern, responsive marketing website for a New Zealand transport &
logistics company. Built to feel trustworthy, spacious and fast — the work of a
professional design agency, not a flashy portfolio.

## Tech stack

- **Next.js (App Router)** — React framework, server components
- **TypeScript** — end-to-end type safety
- **Tailwind CSS v4** — CSS-first design tokens (see `src/app/globals.css`)
- **shadcn/ui conventions** — `cn` util + cva `Button` primitive (`src/components/ui`)
- **Lucide React** — icon set
- **Framer Motion** — subtle fade / reveal / slide animations only

> Scaffolded on the current stable Next.js (16.x). The App Router API used here
> is identical to Next.js 15 — no v16 breaking change (async request APIs,
> `proxy`, Turbopack config) is exercised by this codebase.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
src/
  app/                 # App Router entry: layout, page, globals, sitemap, robots
  components/
    layout/            # Header, MobileNav, Footer
    sections/          # Hero, Services, About, Fleet, CTA, Contact
    ui/                # Reusable primitives (Button, Container, Reveal, …)
  data/
    company.ts         # ⭐ Single source of truth for ALL content & contact info
  lib/                 # cn() helper, icon registry
  types/               # Shared TypeScript types
public/
  images/              # Drop real photography here
```

## Editing content

**All copy, contact details, services, fleet and links live in
[`src/data/company.ts`](src/data/company.ts).** No content is hard-coded inside
components — update that one file and the whole site follows.

## Design system

Defined once as CSS variables in [`src/app/globals.css`](src/app/globals.css):

| Token        | Value             | Use                          |
| ------------ | ----------------- | ---------------------------- |
| `primary`    | Deep forest green | Buttons, footer, emphasis    |
| `accent`     | Soft green        | Highlights, eyebrows, checks |
| `background` | White             | Page background              |
| `surface`    | Very light gray   | Alternating sections         |
| `foreground` | Almost black      | Body text                    |

No gradients, glassmorphism, neumorphism or heavy shadows — the premium feel
comes from spacing, typography (Plus Jakarta Sans) and restraint.

## Going live — TODO

- Replace `<ImagePlaceholder />` instances with `next/image` + real photography.
- Replace the placeholder `LOGO` block in `src/components/ui/logo.tsx`.
- Fill real values in `src/data/company.ts`.
- Wire the contact form (`src/components/sections/contact.tsx`) to an API route
  or form service (Resend, Formspree, etc.).
- Update `siteUrl` in `layout.tsx`, `sitemap.ts` and `robots.ts`.

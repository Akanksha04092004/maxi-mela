# MAXI Mela

Next.js 14 (App Router) + TypeScript + Tailwind site for MAXI Mela — Marketing
Association of XLRI Delhi-NCR.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` produces a production build
(this needs network access to Google Fonts — the sandbox this was built in
doesn't have that, but `npx tsc --noEmit` passes clean, so the code itself is
sound; it'll build normally on Vercel or your own machine).

## Design system

Pulled straight from the Mela artwork rather than a generic default:

| Token | Hex | Source |
|---|---|---|
| `maroon` | `#B31E42` | lotus petals |
| `gold` | `#E3A233` | "MAXI" wordmark |
| `navy` | `#131B34` | "Mela" panel — also the header/footer shell |
| `leaf` | `#4C6B3A` | leaf sprigs |
| `cream` | `#F7F0E1` | artwork base |

Type: **Fraunces** (display, high-contrast serif for the "mela" feel) +
**Work Sans** (body) + **JetBrains Mono** (eyebrows/labels).

Signature element: `ArchMotif` — a dotted arch component that traces the same
arc as the marigold-and-leaf border in the logo. It's reused as the recurring
section divider instead of a plain `<hr>`, and the event timeline is built as
a horizontal "garland thread" rather than a generic numbered list, so the
traditional artwork's own geometry runs through the modern layout.

## Structure

```
app/
  layout.tsx      root layout, font loading
  page.tsx         composes all sections
  globals.css      tokens, the garland-rule motif, focus states
components/
  Navbar.tsx        dark shell — MAXI wordmark + Mela emblem
  Hero.tsx
  About.tsx
  Timeline.tsx       the "Critical Requirement" interactive schedule
  ResourceCard.tsx   single PDF card
  ResourcesSection.tsx  the "Critical Requirement" resource repository
  Footer.tsx
  ArchMotif.tsx      recurring SVG divider
data/
  timeline.ts        schedule entries
  resources.ts        PDF card entries
```

## Two things to follow up on

1. **Image 1 (the official MAXI Association logo)** was referenced in the
   brief but never actually uploaded — only the Mela emblem (Image 0) came
   through. The navbar/footer currently carry a text-based "M" wordmark
   styled to match the brief's description (white on black, geometric,
   minimalist). Swap `components/Navbar.tsx` and `components/Footer.tsx` for
   an `<Image>` once you have the real file.
2. **PDF resources** (`data/resources.ts`) point at
   `/resources/*.pdf`, which don't exist yet — drop the real files in
   `public/resources/` with matching filenames and the download cards work
   as-is.

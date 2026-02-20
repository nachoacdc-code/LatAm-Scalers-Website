# LatAm Scalers — Light Theme Branding Reference

> **Purpose:** This file preserves the Phase 1 light-theme visual identity that was live at
> `https://latam-scalers-website.vercel.app/` before reverting to the original dark theme.
> Saved here for future reference if we decide to switch back.

---

## Typography

- **Primary Font:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700
- **Loading:** Preconnect + `display=swap` (no FOIT)
- **CSS:** `font-family: 'Inter', system-ui, -apple-system, sans-serif`

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

## Color Palette (CSS Custom Properties via Tailwind @theme)

```css
@theme {
  --color-primary: #1B2B4B;     /* Deep Navy — header, hero, CTAs */
  --color-accent: #2563EB;      /* Confident Blue — buttons, links, focus rings */
  --color-amber: #F59E0B;       /* Warm Amber — hourly/flexibility accents */
  --color-success: #059669;     /* Success Green — guarantees, positive indicators */

  --color-bg-light: #F8FAFC;    /* Off-White — primary background */
  --color-bg-alt: #F1F5F9;      /* Light Gray — alternating sections */
  --color-bg-dark: #0F172A;     /* Dark — dark sections, footer */

  --color-text-primary: #1E293B;  /* Dark Slate — headings, body text */
  --color-text-secondary: #64748B; /* Medium Gray — secondary text, descriptions */
  --color-border: #E2E8F0;       /* Light Border — cards, dividers */

  --color-aec: #3B82F6;         /* Blue — AEC category accent */
  --color-design: #8B5CF6;      /* Violet — Design category accent */
  --color-marketing: #10B981;   /* Emerald — Marketing category accent */

  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}
```

---

## Theme Configuration

- **Color Scheme:** `light`
- **Body Classes:** `min-h-screen bg-bg-light text-text-primary antialiased font-sans`
- **Theme Color (meta):** `#1B2B4B`
- **Selection:** `background-color: var(--color-accent); color: white;`

---

## Navigation (Header)

- **Background:** `bg-primary` (Deep Navy #1B2B4B) — solid, with `shadow-sm`
- **Logo:** "LatAm Scalers" — `text-sm font-bold tracking-tight text-white`
- **Nav Text:** `text-white/80`
- **CTA Button:** `bg-accent text-white hover:bg-accent/90` — rounded, semibold
- **CTA Label:** "Get Started"
- **Dropdown Panels:** `bg-white border-border shadow-xl rounded-2xl`
- **Dropdown Links:** `text-text-primary hover:bg-bg-alt hover:text-accent`
- **Focus Rings:** `focus-visible:ring-accent focus-visible:ring-offset-primary`

---

## Footer

- **Background:** `bg-bg-dark text-white` (#0F172A)
- **CTA Button:** `bg-accent text-white hover:bg-accent/90`
- **CTA Label:** "Get Started"
- **Includes:** Legal disclaimer in bordered card

---

## Homepage Sections (light/dark alternating)

1. **Hero:** `bg-primary` (Deep Navy) — white text, accent CTA
2. **Solutions:** `bg-bg-light` (Off-White) — CategoryCards with white bg, colored left borders
3. **How It Works:** `bg-bg-alt` (Light Gray) — numbered steps in white cards
4. **Flexible Options:** `bg-bg-light` — icon cards in white
5. **Testimonials:** `bg-bg-alt` — quote cards in white
6. **Popular Roles:** `bg-bg-light` — role cards in white
7. **Final CTA:** `bg-primary` (Deep Navy)
8. **Contact:** `bg-bg-alt` — form in white card

---

## Component Library (src/components/ui/)

### Button.astro
- **Primary:** `bg-accent text-white hover:bg-accent/90 shadow-sm`
- **Secondary:** `border-border bg-white text-text-primary hover:bg-bg-alt`
- **Ghost:** `text-accent hover:bg-bg-alt`

### Card.astro
- **Default:** `border-border bg-white p-6 rounded-2xl`
- **Elevated:** Same + `shadow-md hover:shadow-lg`

### Badge.astro
- Category variants: `bg-[category]/10 text-[category] border-[category]/20`

### CategoryCard.astro
- `bg-white border-border border-l-4 border-l-[category] shadow-sm`
- Hover: `shadow-md -translate-y-0.5`

### Section.astro
- Light: `bg-bg-light text-text-primary`
- Alt: `bg-bg-alt text-text-primary`
- Dark: `bg-bg-dark text-white`

### TrustBadge.astro
- Icon container: `bg-bg-alt [color]`
- Label: `text-text-primary`
- Sublabel: `text-text-secondary`

---

## Favicon & Manifest

- `favicon.svg` + `favicon.ico`
- `apple-touch-icon.png` (180x180)
- `manifest.json` with theme color `#1B2B4B`

---

*Last updated: February 2026*
*To restore: Revert globals.css, Layout.astro, and component files to use these values.*

---
name: Website Transformation Plan
overview: "MVP-first plan: Transform TalentCompany MVP (~20 pages, dark theme, broken forms) into LatAm Scalers world-class B2B lead-generation machine. Part A delivers a polished MVP (~32 pages) with trust infrastructure, working forms with filtering (incl. budget range, attribution), full SEO, Google Business Profile, Facebook Pixel (data accumulation), and Cloudflare domain setup. Parts B and C expand to 80+ pages targeting 500-1,000 leads/month."
todos:
  - id: step-0
    content: "Step 0 — Project Setup: Duplicate project, GitHub repo, Vercel project, upgrade Astro 5.17.2 + Tailwind 4.2.0, deploy, verify, save plan as IMPLEMENTATION_PLAN.md, baseline audit (save BASELINE_AUDIT.md)"
    status: pending
  - id: mvp-phase-1
    content: "MVP Phase 1 — Foundation & Visual Identity: Rebrand, Inter font, color palette, light theme, Section/TrustBadge/CategoryCard components, Nav + Footer updates, favicon set, UI library structure, visual assets directive (clean/no photography)"
    status: pending
  - id: content-audit-gate
    content: "Content Audit & Migration Gate (between Phase 1 and Phase 2): Review every existing page, tag as Keep/Polish/Rewrite, save CONTENT_AUDIT.md — approval gate before rewrites begin"
    status: pending
  - id: mvp-phase-2
    content: "MVP Phase 2 — Navigation, Header & Footer: MVP nav, mega menu, mobile nav, full footer with legal disclaimer, micro-clarifier banner"
    status: pending
  - id: mvp-phase-3
    content: "MVP Phase 3 — Homepage Redesign: 12 sections (hero, trust bar w/ vetting link, problem, solutions, how-it-works, why LATAM, options, proof, roles, tiers, CTA, contact + Calendly), micro-interactions (fade-ins, hover lift, counter animation), mobile touch-target audit (48px min)"
    status: pending
  - id: mvp-phase-4
    content: "MVP Phase 4 — Category Hub Pages: configure 301 redirects in vercel.json (/solutions/aec-talent/* -> /aec/*, /solutions/creatives-design/* -> /design/*, /solutions/marketing-talent/* -> /marketing/*), migrate sub-pages, build /aec/ + /design/ + /marketing/ hubs with full 12-section template (vetting badge links to /about/how-we-vet/)"
    status: pending
  - id: mvp-phase-5
    content: "MVP Phase 5 — Priority Service Spokes: /aec/bim-coordination-services/, /aec/cad-drafting-services/, /aec/mep-engineering-services/, /design/managed-creative-teams/, /marketing/marops-revops/, /design/hire-ux-designer/"
    status: pending
  - id: mvp-phase-6
    content: "MVP Phase 6 — Roles Directory & Role Pages: Enhanced directory (filter tabs, enriched cards), create RoleTemplate.astro component (11-section reusable), complete BIM Coordinator stub, complete remaining 7 role pages in 2 batches"
    status: completed
  - id: mvp-phase-7
    content: "MVP Phase 7 — Trust & Conversion Pages: /about/our-guarantee/, /about/how-we-vet/, /how-pricing-works/, /get-started/, /compare/vs-superside/, /resources/engineering-staffing-alternative/, /resources/remote-staffing-agency/ (routing hub), How It Works update, proof asset outreach (business process)"
    status: pending
  - id: mvp-phase-8
    content: "MVP Phase 8 — Forms, Lead Capture & Traffic Filtering: Fix Formspree, qualifying fields (incl. Budget Range, How did you hear), work-email validation, honeypot, reCAPTCHA v3, category CTAs, lazy Calendly embed, sticky mobile CTA, remove Staff Augmentation language"
    status: pending
  - id: mvp-phase-9
    content: "MVP Phase 9 — SEO, Schema & Structured Data: Organization/WebSite/Service/FAQPage/BreadcrumbList schema, meta tags (with 'for US companies' guideline), OG/Twitter, canonicals, sitemap, robots.txt, custom 404, hreflang (en-US + x-default), Vercel Speed Insights"
    status: pending
  - id: mvp-phase-10
    content: "MVP Phase 10 — Analytics, Testing & Domain: GA4, GTM, Clarity, Google Business Profile, Facebook Pixel (data accumulation), cross-browser testing, performance audit, content audit (forbidden language check), GSC, Cloudflare DNS + SSL (Full Strict) + Bot Fight Mode + security headers + email routing, domain connection, 72h monitoring"
    status: pending
  - id: growth-phase-11
    content: "GROWTH Phase 11 — AEC Spokes Expansion: architectural-drafting, structural-engineering, responsibility-matrix page, revit-specialists, civil-3d-specialists"
    status: pending
  - id: growth-phase-12
    content: "GROWTH Phase 12 — Design & Marketing Spokes + Role Pages: Design spokes (hire-brand-designer, performance-creative-pod, white-label-production, hourly-packages), Marketing spokes (hubspot-specialist, klaviyo-expert, hire-seo-specialist, hire-paid-media-specialist, lifecycle-email-sms), 7 new role pages (Revit MEP Modeler, Civil 3D Specialist, Growth Product Designer, Performance Creative Strategist, HubSpot/MarOps Specialist, Lifecycle Email Specialist, Paid Media Specialist) — hire-ux-designer already in MVP"
    status: pending
  - id: growth-phase-13
    content: "GROWTH Phase 13 — Comparison & Bridge Pages: vs-toptal, vs-design-pickle, agency-vs-dedicated, in-house-vs-contractor, outsource-graphic-design, design-subscription-alternative, marketing-staffing-alternative, creative-staffing-alternative (remote-staffing-agency already in MVP)"
    status: pending
  - id: growth-phase-14
    content: "GROWTH Phase 14 — Industry Hub Pages: /industries/saas/, mep-engineering-firms, dtc-ecommerce, agencies, architecture-firms + update main nav to add Industries dropdown (transition from MVP nav to full nav)"
    status: pending
  - id: growth-phase-15
    content: "GROWTH Phase 15 — Advanced Conversion, Intelligence & Dark Mode: Exit-intent popup, progressive profiling, mid-page CTA, lead scoring, GeoIP detection, ASAP priority routing, LinkedIn Insight Tag, LLM/AI optimization pass, roles search bar, dark-mode toggle"
    status: pending
  - id: scale-phase-16
    content: "SCALE Phase 16 — Blog & Content Hub: Blog infrastructure (content collection, index, category filtering, RSS feed), add Resources dropdown to main nav, write first 12 posts (1/week, 1,500+ words, FAQ schema, internal links)"
    status: pending
  - id: scale-phase-17
    content: "SCALE Phase 17 — Enterprise & ABM: /enterprise/ hub with vendor pack PDF, ABM vertical pages (/aec/for-data-centers/, /aec/for-healthcare/, /aec/for-multifamily/, /aec/for-mep-firms/), /about/our-story/ page"
    status: pending
  - id: scale-phase-18
    content: "SCALE Phase 18 — Interactive Tools & Optimization: /resources/tools/cost-savings-calculator/, /resources/salary-insights/ (PDF lead magnets), expand role pages to 25+ (programmatic), A/B testing program (headlines, CTAs, form lengths), referral program page"
    status: pending
isProject: false
---

# LatAm Scalers Website — MVP-First Implementation Plan

---

## Executive Summary

This plan is organized into three sequential parts:

- **Part A (MVP Launch, Weeks 1-6):** Delivers a polished, fully functional LatAm Scalers website with ~30 pages, complete trust infrastructure, working forms with intelligent filtering, full SEO/schema markup, and Cloudflare domain connection. Target: 80-200 qualified leads/month.
- **Part B (Growth, Weeks 7-14):** Expands to ~55 pages with additional service spokes, comparison/bridge pages, industry hubs, and advanced conversion elements. Target: 200-500 qualified leads/month.
- **Part C (Scale, Months 4-9):** Scales to 80+ pages with blog/content hub, enterprise features, interactive tools, and continuous optimization. Target: 500-1,000 qualified leads/month.

**Key technical decisions (confirmed):**

- Astro 5.17.2 (upgraded from 5.16.15; staying on stable, not Astro 6 beta)
- Tailwind CSS 4.2.0 (upgraded from 4.1.18)
- Microsoft Clarity for heatmaps/recordings (free, minimal performance impact)
- Lazy-loaded inline Calendly embed via Intersection Observer (zero initial page load impact)
- reCAPTCHA v3 + honeypot + work-email validation (all invisible/behind-the-scenes)
- Cloudflare DNS + SSL (Full Strict mode) with free plan (upgrade recommendation included)
- Facebook Pixel installed for data accumulation (no paid ads planned; building retargeting audience passively)
- Clean, text-first visual aesthetic — no hero photography, no stock images; custom line icons + data visualizations only; profile photos only for sample specialist profiles

**Current state:** ~20 pages at `talentcompany-site.vercel.app`, dark-only theme, "TalentCompany" branding, broken Formspree forms, TODO placeholder testimonials, no trust pages, no schema markup.

**MVP target state:** ~32 pages at `latamscalers.com`, light/dark alternating theme, "LatAm Scalers" branding, working forms with qualification filtering (incl. budget range, attribution), 3 trust pages, full SEO, Google Business Profile, Facebook Pixel (data accumulation), Cloudflare-optimized domain.

---

# PART A — MVP LAUNCH

---

## Step 0: Project Setup and Duplication

### 0.1 — Duplicate the project folder

- **Action:** Copy the contents of `node-project/talentcompany-site/` to `Website development project/` in the workspace root (excluding `node_modules/`, `.git/`, `dist/`)
- **Expected outcome:** Clean duplicate at `c:\Users\Usuario\LatAm Scalers\Website development project\`

### 0.2 — Upgrade dependencies

- **Action:** Update `package.json` in the new project:
  - `astro`: `^5.17.2` (from `^5.16.15`)
  - `tailwindcss`: `^4.2.0` (from `^4.1.18`)
  - `@tailwindcss/vite`: `^4.2.0` (from `^4.1.18`)
- **Run:** `npm install` to update `node_modules` and `package-lock.json`
- **Run:** `npm run build` to verify no breaking changes
- **Expected outcome:** Project builds cleanly on updated dependencies

### 0.3 — Initialize Git and create GitHub repository

- **Action:** `git init`, create `.gitignore`, initial commit
- **Create repo:** `gh repo create nachoacdc-code/LatAm-Scalers-Website --public --source=. --remote=origin --push`
- **Expected outcome:** Code at `https://github.com/nachoacdc-code/LatAm-Scalers-Website`

### 0.4 — Create Vercel project and deploy

- **Action:** Link the GitHub repo to a new Vercel project named "LatAm Scalers Website" under Nacho's Projects
- **Set env vars:** `SITE` = new Vercel URL
- **Expected outcome:** Live preview at `latam-scalers-website.vercel.app` (or similar)

### 0.5 — Save this plan to the project folder

- **Action:** Copy this plan document as `IMPLEMENTATION_PLAN.md` into the project root
- **Expected outcome:** Plan accessible at `Website development project/IMPLEMENTATION_PLAN.md`

### 0.6 — Verify live preview

- **Action:** Confirm the duplicate site is live, all existing pages render, shareable on mobile/desktop
- **Test:** Open on phone browser to verify external access
- **Expected outcome:** Working duplicate confirmed

### 0.7 — Baseline audit

- **Action:** Run Lighthouse audit (Performance, Accessibility, Best Practices, SEO) on the duplicate homepage + 2 other pages
- **Save scores** as the baseline benchmark (e.g., in a `BASELINE_AUDIT.md` file in the project root)
- **Purpose:** Measurable progress tracking — every phase should maintain or improve these scores
- **Expected outcome:** Documented baseline scores to compare against after each phase

> **STOP — Human approval required.** Confirm the duplicated project is live at the new Vercel URL, dependencies are upgraded, and baseline audit is saved. Say: "Approved — proceed to Phase 1."

---

## Git Branching Rule (applies to all phases)

Every phase gets its own feature branch:

- `feature/phase-1-visual-identity`, `feature/phase-2-navigation`, `feature/phase-3-homepage`, etc.
- Work is done on the feature branch, then a **Pull Request** is created on GitHub.
- Every PR auto-generates a **Vercel preview deployment URL** — share this URL at each approval gate for review.
- **Only merge to `main` after explicit human approval.**
- This makes reviews frictionless: reviewer clicks the preview link, checks on desktop + mobile, then approves.

---

## MVP Phase 1: Foundation and Visual Identity

*Implements: Strategy S4 (Visual Identity), S3.5 (Micro-clarifier), S3.6 (Disclaimers), S14 Phase 0 (brand rename)*

### 1.1 — Rebrand: Replace "TalentCompany" with "LatAm Scalers" globally

- **Files to modify:** Every file containing "TalentCompany" — Nav.astro (logo, line 59), index.astro (meta title, org schema), ContactForm.astro (subject line), all page meta titles, package.json (project name), astro.config.mjs (site URL comment)
- **Search pattern:** Case-insensitive search for "TalentCompany", "talentcompany", "Talent Company"
- **Expected outcome:** Zero instances of old brand remain

### 1.2 — Install Inter font with optimal loading

- **File:** `src/layouts/Layout.astro` `<head>` section
- **Add:** Preconnect + Google Fonts link for Inter (400, 500, 600, 700 weights) with `display=swap`
- **File:** `src/styles/globals.css` — set `font-family: 'Inter', system-ui, sans-serif`
- **Expected outcome:** Inter font loads on all pages, falls back gracefully, uses `font-display: swap` to prevent FOIT

### 1.3 — Define complete color palette as CSS custom properties

- **File:** `src/styles/globals.css`
- **Define all colors from Strategy S4.2:**
  - Primary Deep Navy `#1B2B4B`, Accent Blue `#2563EB`, Warm Amber `#F59E0B`, Success Green `#059669`
  - Backgrounds: Off-White `#F8FAFC`, Alt `#F1F5F9`, Dark `#0F172A`
  - Text: Primary `#1E293B`, Secondary `#64748B`, Border `#E2E8F0`
  - Category accents: AEC `#3B82F6`, Design `#8B5CF6`, Marketing `#10B981`
- **Also define:** Tailwind CSS `@theme` extensions if using Tailwind's theming system

### 1.4 — Switch base theme from dark-only to light-primary

- **File:** `src/layouts/Layout.astro` — change `<body class="min-h-screen bg-slate-950 text-slate-100 antialiased">` to light base: `<body class="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased">`
- **File:** `src/styles/globals.css` — remove `color-scheme: dark`
- **Note:** This intentionally breaks the dark UI. Subsequent steps fix each component.

### 1.5 — Create reusable Section wrapper component

- **New file:** `src/components/Section.astro`
- **Props:** `variant: "light" | "alt" | "dark"`, `id`, `class`
- **Light:** `bg-[#F8FAFC]` text dark | **Alt:** `bg-[#F1F5F9]` text dark | **Dark:** `bg-[#0F172A]` text white
- **Purpose:** Enforce the light/dark alternation pattern (Strategy S4.4)

### 1.6 — Create TrustBadge component

- **New file:** `src/components/TrustBadge.astro`
- **Props:** `icon` (SVG), `label`, `sublabel`, `color`
- **Design:** Custom 2px-stroke line icons per Strategy S4.3 (clock, shield, arrow-down, checkmark)

### 1.7 — Create CategoryCard component with accent borders

- **New file:** `src/components/CategoryCard.astro`
- **Props:** `category: "aec" | "design" | "marketing"`, `title`, `description`, `href`, `pricing`
- **Design:** 12px border-radius, subtle shadow (`0 1px 3px rgba(0,0,0,0.1)`), left-border stripe in category color, hover elevation

### 1.8 — Update Nav for new brand and theme

- **File:** `src/components/Nav.astro`
- **Changes:** "LatAm Scalers" logo text, keep dark navy header (`bg-[#1B2B4B]`) for authority, update CTA button to Confident Blue (`bg-[#2563EB]`), rename "Book a Call" to "Get Started"

### 1.9 — Update Footer with legal disclaimer and new structure

- **File:** `src/components/Footer.astro`
- **Add:** Mandatory legal disclaimer from Strategy S3.6
- **Add:** Footer tagline: "Dedicated LATAM talent for US teams — AEC, creative and design, and marketing."
- **Update:** Colors, links, structure for new brand

### 1.10 — Generate full favicon set and web manifest

- **Action:** From the LatAm Scalers logo/brand mark, generate:
  - `favicon.ico` (16x16, 32x32 multi-size)
  - `apple-touch-icon.png` (180x180)
  - `icon-192.png` and `icon-512.png` (maskable, for PWA)
  - `public/manifest.json` (web app manifest with name, colors, icons)
- **Update:** `src/layouts/Layout.astro` `<head>` with all favicon links + manifest link
- **Expected outcome:** Professional favicon on all browsers/devices + PWA-ready metadata

### 1.11 — Create UI component library structure

- **Action:** Create `src/components/ui/` folder with base reusable components:
  - `Button.astro` — primary, secondary, ghost variants; size props; consistent across all pages
  - `Card.astro` — base card with elevation, border-radius, hover state
  - `Badge.astro` — category badges, status badges, pricing badges
  - `Container.astro` — max-width wrapper with consistent padding
- **Purpose:** Prevents style duplication across 30+ pages; ensures pixel-perfect consistency
- **Expected outcome:** Every component in the site uses these base primitives

### 1.12 — Visual assets: custom icons only (no photography)

- **Direction:** The site uses a **clean, text-first aesthetic**. No hero images of people, no stock photography of blueprints/desks/offices.
- **What to create:** Custom 2px-stroke line icons (Strategy §4.3) for: trust badges (clock, shield, arrow-down, checkmark), process steps, engagement options, tool logos, category icons.
- **What NOT to create:** Hero photography, team photos, office shots, decorative imagery.
- **Exception:** Profile pictures are used ONLY in sample profile previews (when showcasing anonymized specialist profiles).
- **Data visualizations:** Animated metric counters, vetting funnel infographic, comparison charts — these use styled HTML/CSS/SVG, not images.
- **Expected outcome:** A visually rich site through typography, color, icons, and data visualization — not photography.

> **STOP — Human approval required.** Deploy and review the new visual identity: colors, typography, light theme, Nav rebrand, footer, favicon, UI components. Check desktop + mobile. Say: "Approved — proceed to Content Audit."

---

## Content Audit and Migration Gate (between Phase 1 and Phase 2)

Before rewriting any existing pages, systematically review every current page and tag it:


| Page                           | Decision                     | Notes                                    |
| ------------------------------ | ---------------------------- | ---------------------------------------- |
| Homepage                       | Full rewrite per Strategy S7 | Hero, sections, CTAs all change          |
| /solutions/aec-talent/         | Full rewrite -> /aec/        | New URL, new 12-section template         |
| /solutions/creatives-design/   | Full rewrite -> /design/     | New URL, comparison table added          |
| /solutions/marketing-talent/   | Full rewrite -> /marketing/  | New URL, ops-first wedge added           |
| /how-it-works/                 | Light polish                 | Good structure, update wording + styling |
| /roles/ (directory)            | Moderate rewrite             | Add filters, enriched cards, new H1      |
| /roles/architectural-designer/ | Light polish                 | Good content, update template + styling  |
| /roles/seo-specialist/         | Light polish                 | Good content, update template + styling  |
| /roles/bim-coordinator/        | Full rewrite                 | Currently a TODO stub                    |
| Other role pages               | Review individually          | Some may have good content to retain     |
| /terms/, /privacy/, /cookies/  | Light polish                 | Update branding, keep legal content      |


**Action:** Review each existing page and note any specific wording, data, or sections worth preserving before the rewrite phases begin. Save notes as `CONTENT_AUDIT.md` in the project root.

> **STOP — Human approval required.** Review the content audit decisions. Flag any pages where you want to preserve specific wording. Say: "Approved — proceed to Phase 2."

---

## MVP Phase 2: Navigation, Header, and Footer Overhaul

*Implements: Strategy S6 (Navigation and Footer)*

### 2.1 — Restructure Nav to MVP layout

- **Target structure (Strategy S6.1 MVP):**

```
  [LatAm Scalers]  Solutions v  Roles  How It Works  [Get Started]
  

```

- **File:** `src/components/Nav.astro`
- **Changes:** Remove "Home" link (logo = home), Roles becomes direct link to `/roles/`, keep How It Works top-level (MVP), CTA = "Get Started" -> `/get-started/`

### 2.2 — Enhance Solutions mega menu

- **Content:**
  - AEC Talent — BIM, CAD, engineering support -> `/aec/`
  - Creative & Design — Dedicated designers, Managed Creative Teams -> `/design/`
  - Marketing Talent — SEO, paid media, lifecycle, ops -> `/marketing/`
  - *(divider)*
  - How It Works -> `/how-it-works/`
  - How Pricing Works -> `/how-pricing-works/`
- **Design:** Rich descriptions, category accent colors on each item

### 2.3 — Implement mobile navigation

- **"Get Started" button always visible** in mobile header (does NOT collapse)
- **Hamburger opens full-screen overlay** with category cards
- **Touch targets:** Minimum 48px on all interactive elements

### 2.4 — Build comprehensive Footer (Strategy S6.3)

- **4-column layout:** Solutions + Industries | Roles + Compare | Company + Resources | Get Started
- **Bottom bar:** Legal disclaimer + copyright 2026 + Terms / Privacy / Cookies
- **Trust pages linked:** How We Vet, Our Guarantee, How Pricing Works

### 2.5 — Add micro-clarifier banner

- **New file:** `src/components/MicroClarifier.astro`
- **Content (Strategy S3.5):** "Pre-vetted LATAM independent contractors — dedicated monthly engagements, not payroll staffing."
- **Add to:** `src/layouts/Layout.astro` after `<Nav />`
- **Design:** Small text, subtle background strip

> **STOP — Human approval required.** Review navigation (desktop + mobile), footer, micro-clarifier. Say: "Approved — proceed to Phase 3."

---

## MVP Phase 3: Homepage Redesign

*Implements: Strategy S7 (Homepage Redesign) — all 12 sections*

### 3.1 — Hero section (Section 1)

- **H1:** "Scale Your US Team with Dedicated LATAM Specialists — Matched in Under One Week"
- **Subheading:** "Pre-vetted AEC, Design, and Marketing professionals. 50-70% cost savings. Month-to-month flexibility. Free replacement guarantee."
- **Primary CTA:** "Book a 15-Minute Scoping Call"
- **Secondary CTA:** "Tell Us What You Need"
- **Layout:** Left text (60%) + right value prop card (40%), light background
- **File:** `src/pages/index.astro` — complete rewrite of hero section

### 3.2 — Trust Bar (Section 2)

- **Dark strip** with 4 TrustBadge components: Speed, Quality, Savings, Guarantee
- **Vetting badge** ("5-Stage Vetted" or "Top 1% Talent") must hyperlink to `/about/how-we-vet/` — drives traffic to trust page, not just decorative
- **Client logo placeholder:** "Trusted by US firms across AEC, design, and marketing"

### 3.3 — Problem Statement (Section 3)

- **H2:** "US Companies Face a Structural Talent Crisis"
- **Three columns:** AEC (94% stat), Design (45% longer hiring), Marketing (3.8% unemployment)
- **Light background**

### 3.4 — Solution Cards (Section 4)

- **Three enhanced CategoryCards** with pricing anchors:
  - AEC: "Starting at ~$3,500/mo" | Design: "Managed teams from $2,800/mo" | Marketing: "Starting at ~$2,500/mo"
- **Links updated** to new URL structure (`/aec/`, `/design/`, `/marketing/`)

### 3.5 — How It Works (Section 5)

- **Refined 5-step** with updated wording per Strategy S7.2

### 3.6 — Why LATAM section (Section 6) — NEW

- **Dark background** section with three metric columns: Cost (50-70%), Timezone (0-3 hrs), Placement (<1 week)

### 3.7 — Flexible Options (Section 7)

- **Add** "Starting at" pricing hints + link to `/how-pricing-works/`

### 3.8 — Social Proof (Section 8)

- **Replace** TODO placeholders with vetting funnel infographic
- **Design:** Dark background, "500 applicants -> Screened -> Tested -> Vetted -> 1% placed"

### 3.9 — Popular Roles (Section 9)

- **Expand** from 3 to 6 role cards (2 per category) with links to role pages

### 3.10 — Tier Pathways (Section 10) — NEW

- **Three cards:** "Start Fast" (Founders), "Scale Smart" (Growing), "Enterprise Ready" (200+)

### 3.11 — Final CTA (Section 11)

- **Dark background**, "Ready to Add Reliable Capacity?", dual CTAs

### 3.12 — Contact + Calendly (Section 12)

- **Enhance form** with qualifying fields (company size, timeline, category need, employer checkbox)
- **Lazy-loaded Calendly inline embed** using Intersection Observer (zero initial load impact)

### 3.13 — Update homepage meta tags

- **Title:** "LatAm Scalers | Dedicated LATAM Talent for US Teams — AEC, Design, Marketing"
- **Description:** Per Strategy S15.4

### 3.14 — Implement subtle micro-interactions

- **Scroll-triggered fade-ins:** Use Intersection Observer to animate sections entering the viewport (opacity 0->1, translateY 20px->0, ~300ms ease-out). Apply to: trust bar, solution cards, how-it-works steps, tier pathways, role cards.
- **Card hover lift:** Tailwind `hover:-translate-y-1 hover:shadow-lg transition-all duration-200` on all clickable cards.
- **Metric counter animation:** Animate the "50-70%", "0-3 hrs", "<1 week" numbers counting up on scroll entry (Why LATAM section).
- **Performance:** Pure CSS transitions + tiny Intersection Observer (~15 lines JS, runs once per element). Zero impact on LCP/CLS.

### 3.15 — Mobile-first touch-target audit

- **Action:** Audit every interactive element on the homepage (mobile viewport):
  - All CTAs: minimum 48px x 48px touch target
  - All links: minimum 44px touch height with adequate spacing (no overlapping tap zones)
  - Form inputs: minimum 44px height with appropriate `inputmode` attributes
  - Cards: full-width on mobile with adequate spacing between cards
- **Fix** any elements that don't meet the 48px threshold
- **Expected outcome:** Zero touch-target issues on mobile

> **STOP — Human approval required.** Review complete redesigned homepage (all 12 sections + micro-interactions) on desktop + mobile. Verify touch targets on phone. Say: "Approved — proceed to Phase 4."

---

## MVP Phase 4: Category Hub Pages

*Implements: Strategy S8 (Category Solutions Pages) — three hubs at MVP depth*

### 4.1 — Create new URL structure with redirects

- **Create pages:**
  - `src/pages/aec/index.astro` (new `/aec/`)
  - `src/pages/design/index.astro` (new `/design/`)
  - `src/pages/marketing/index.astro` (new `/marketing/`)
- **Configure 301 redirects** in `vercel.json`:
  - `/solutions/aec-talent/*` -> `/aec/*`
  - `/solutions/creatives-design/*` -> `/design/*`
  - `/solutions/marketing-talent/*` -> `/marketing/*`

### 4.2 — Build AEC hub (`/aec/`)

- **Full 12-section template** per Strategy S8.1:
  1. **Hero:** H1: "Accept More Projects Without Adding Overhead" (Strategy §15.1 — aspirational, outcome-focused)
  2. **AEC micro-clarifier:** Stamping/code-review disclaimer ("Our specialists produce work under the direction of your licensed professionals")
  3. **Problem section:** 94% workforce shortage, 51% project delays, 62% increased costs — sourced statistics
  4. **Solution overview:** What we provide — dedicated AEC specialists, not a staffing agency, not a freelancer marketplace
  5. **Engagement options:** Dedicated Individuals + Production Pods with pricing anchors
  6. **Role showcase:** 8 AEC priority roles (BIM Coordinator, Revit Drafter, CAD Technician, MEP Modeler, etc.) with links to role pages
  7. **Tools and deliverables:** Revit, Navisworks, AutoCAD, ACC, BIM 360 — with output samples/descriptions
  8. **Responsibility Matrix:** "What You Keep vs. What We Handle" — critical trust element differentiating from full outsourcing
  9. **Why LATAM for AEC:** Time-zone overlap (real-time collaboration), cost structure (50-70% savings), English proficiency, cultural alignment
  10. **Pricing guidance:** "Starting at ~$3,500/mo" with link to `/how-pricing-works/`
  11. **AEC-specific FAQ** (5 questions with FAQPage schema)
  12. **CTA:** "Book an AEC Scoping Call"
- **Vetting badge** in hero or trust bar must hyperlink to `/about/how-we-vet/` (drives traffic to trust page)
- **Migrate sub-pages:** `/aec/individuals/` and `/aec/teams/` (from `/solutions/aec-talent/individuals|teams/`)

### 4.3 — Build Design hub (`/design/`)

- **Full 12-section template** per Strategy S8.1 (adapted for Design):
  1. **Hero:** H1: "Predictable Design Output Without the Agency Markup" (Strategy §15.1 — outcome-focused)
  2. **Design micro-clarifier:** "Dedicated designers working exclusively on your brand — not a marketplace, not a subscription box"
  3. **Problem section:** 45% longer hiring cycles, design talent shortage statistics, agency cost benchmarks
  4. **Solution overview:** What we provide — dedicated designers, managed creative teams, not a design subscription
  5. **Engagement options:** Dedicated Individual Designers + PM-Led Managed Creative Teams with pricing anchors
  6. **Managed Creative Team comparison table:** Design Pickle vs Superside vs LatAm Scalers (7 dimensions) — key differentiator
  7. **Role showcase:** Priority design roles (UI/UX Designer, Brand/Visual Designer, Motion Designer, etc.) with links
  8. **Tools and deliverables:** Figma, Adobe CC, After Effects, Webflow — with output samples/descriptions
  9. **ICP sections:** SaaS (product + marketing design), DTC (performance creative + brand), Agencies (white-label production)
  10. **Pricing guidance:** "Managed teams from $2,800/mo" with link to `/how-pricing-works/`
  11. **Design FAQ** (5 questions with FAQPage schema)
  12. **CTA:** "Book a Design Team Scoping Call"
- **Vetting badge** must hyperlink to `/about/how-we-vet/`
- **Migrate sub-pages:** `/design/dedicated-designers/` (from `/solutions/creatives-design/dedicated/`)

### 4.4 — Build Marketing hub (`/marketing/`)

- **Full 12-section template** per Strategy S8.1 (adapted for Marketing):
  1. **Hero:** H1: "Dedicated Marketing Specialists Who Own Your Channels" (Strategy §15.1)
  2. **Marketing micro-clarifier:** "Revenue-focused marketing operators, not a fractional CMO service"
  3. **Problem section:** 3.8% unemployment, skills gap in MarTech, agency cost benchmarks vs dedicated talent
  4. **Solution overview:** What we provide — full-time dedicated marketing specialists embedded in your team
  5. **Ops-First Wedge section:** MarOps/RevOps as the entry point — HubSpot, Salesforce, Klaviyo certified operators
  6. **Engagement options:** Dedicated Individual Specialists + Marketing Pods with pricing anchors
  7. **Role showcase:** Priority marketing roles (SEO Specialist, PPC Manager, HubSpot Specialist, Content Marketer, etc.) with links
  8. **Tool-Stack Proof grid:** HubSpot, Salesforce, Klaviyo, GA4, Marketo, Pardot, Meta Ads, Google Ads — tool logos demonstrating platform expertise
  9. **ICP sections:** SaaS (growth + lifecycle), DTC (performance + lifecycle), Agencies (white-label execution)
  10. **Pricing guidance:** "Starting at ~$2,500/mo" with link to `/how-pricing-works/`
  11. **Marketing FAQ** (5 questions with FAQPage schema)
  12. **CTA:** "Book a Marketing Scoping Call"
- **Vetting badge** must hyperlink to `/about/how-we-vet/`
- **Migrate sub-pages:** `/marketing/individuals/` and `/marketing/teams/`

> **STOP — Human approval required.** Review all three category hubs (AEC, Design, Marketing) including redirects from old URLs. Say: "Approved — proceed to Phase 5."

---

## MVP Phase 5: Priority Service Spokes

*Implements: Strategy S8.2 AEC Spokes, S10.1 Tier 1 pages*

### 5.1 — Build `/aec/bim-coordination-services/`

- **Target keyword:** "bim coordination services" (140/mo, $20.48 CPC)
- **Content:** 1,000-1,500 words — scope, tools (Navisworks, ACC), deliverables, responsibility matrix, pricing guidance, FAQ
- **H1:** "BIM Coordination Services — Dedicated LATAM Specialists for US Firms"

### 5.2 — Build `/aec/cad-drafting-services/`

- **Target keyword:** "cad drafting services" (720/mo, $8.73 CPC)
- **Dual-intent** capturing both "services" and "outsourcing" searchers
- **H1:** "CAD Drafting Services — Dedicated Drafters for US Architecture & Engineering Firms"

### 5.3 — Build `/aec/mep-engineering-services/`

- **Target keyword:** "mep engineering services" (480/mo, $14.00 CPC)
- **Content:** HVAC, electrical, plumbing specializations; tools; deliverables
- **H1:** "MEP Engineering Support — Dedicated Revit MEP Modelers for US Firms"

### 5.4 — Build `/design/managed-creative-teams/`

- **Flagship offer** — redirect from old `/solutions/creatives-design/pm-led/`
- **Comparison table:** Design Pickle vs Superside vs LatAm Scalers (7 dimensions)
- **Content:** PM role definition, capacity comparison, pricing

### 5.5 — Build `/marketing/marops-revops/`

- **Target keyword:** "hubspot consultant" (720/mo, $89.21 CPC)
- **Content:** Revenue backbone positioning, platform-specific proof, RevOps growth data
- **H1:** "MarOps & RevOps Specialists — HubSpot-Certified, Revenue-Focused"

### 5.6 — Build `/design/hire-ux-designer/`

- **Target keyword:** "hire ux designer" — Tier 1 priority page per Strategy S10.1
- **Content:** 1,000-1,500 words — UX design scope (research, wireframing, prototyping, testing), tools (Figma, Maze, Hotjar), deliverables, SaaS vs DTC vs Agency use cases, pricing guidance, FAQ
- **H1:** "Hire a Dedicated UX Designer — Pre-Vetted LATAM Talent for US Teams"
- **Note:** This is a high-demand spoke serving both the Design hub and the SaaS ICP

> **STOP — Human approval required.** Review all 6 service spoke pages. Say: "Approved — proceed to Phase 6."

---

## MVP Phase 6: Roles Directory and Role Pages

*Implements: Strategy S9 (Roles Directory & Role Template Pages)*

### 6.1 — Enhance Roles directory (`/roles/`)

- **Add:** Category filter tabs (AEC / Design / Marketing)
- **Add:** Role count badge, enriched cards (category badge, description, pricing, link)
- **Add:** "Don't see your role?" CTA
- **Update H1:** "Browse Vetted Remote Roles — AEC, Design, Marketing"

### 6.2 — Create reusable RoleTemplate component

- **New file:** `src/components/RoleTemplate.astro`
- **11-section structure** per Strategy S9.2: Hero, At a Glance, Overview, Why Remote, Engagement Options, Sample Outputs, Proof, Pricing, Related Roles, FAQ (schema-marked), CTA

### 6.3 — Complete BIM Coordinator role page (currently a TODO stub)

- **Priority #1** — 800-1,200 words per template

### 6.4 — Complete remaining 7 role pages

- **Batch 1 (3 pages):** Architectural Designer (refine existing), Revit Drafter (complete), Brand/Visual Designer (complete)
- **Batch 2 (4 pages):** UI/UX Designer, SEO Specialist (refine existing), Content Marketer, PPC Manager

> **STOP — Human approval required.** Review roles directory and all 8 completed role pages. Say: "Approved — proceed to Phase 7."

---

## MVP Phase 7: Trust Pages and Conversion Pages

*Implements: Strategy S5.2 Trust Pages, S10.1 Tier 1 pages, S10.2 Comparison Pages*

### 7.1 — Build `/about/our-guarantee/`

- **Content per Strategy S15.5:** Dual-model guarantee (90-day direct hire + anytime month-to-month)
- **Includes:** Competitor comparison table (HireLATAM, South, Near, Somewhere), 3-step replacement process

### 7.2 — Build `/about/how-we-vet/`

- **Content per Strategy S15.6:** 5-stage vetting funnel with visual infographic
- **Stages:** Application -> Language/Culture -> Technical Assessment -> Portfolio -> Final Interview

### 7.3 — Build `/how-pricing-works/`

- **Content:** Format explanations (FT/PT/hours/PM-led), "Starting at" ranges by category
- **NOT a rate card** — mechanics and transparency without exact prices

### 7.4 — Build `/get-started/` (primary conversion page)

- **Combined:** Calendly inline embed (lazy-loaded) + enhanced contact form
- **Calendly loaded via Intersection Observer** — zero impact on initial page load
- **Form includes** all qualifying fields from Phase 8

### 7.5 — Build `/compare/vs-superside/`

- **Template per Strategy S10.2:** Honest comparison, quick table (7 dimensions), where Superside excels, where LatAm Scalers differs, pricing comparison, FAQ (schema-marked)

### 7.6 — Build `/resources/engineering-staffing-alternative/`

- **Bridge page per Strategy S10.3:** Acknowledge search -> explain limitations -> introduce alternative -> route to `/aec/`
- **Target:** "engineering staffing agency" (2,400/mo, $9.41 CPC)

### 7.7 — Update How It Works page

- **File:** `src/pages/how-it-works.astro` — update styling, branding, trust badges

### 7.8 — Build `/resources/remote-staffing-agency/` (routing hub)

- **Target keyword:** "remote staffing agency" (5,400/mo, $12.00+ CPC) — highest-volume bridge keyword
- **Strategy S10.3 explicitly puts this in the MVP sitemap**
- **Content:** This is a **routing hub**, not a long-form page. It acknowledges the search intent ("looking for a remote staffing agency"), briefly explains why LatAm Scalers is not a traditional staffing agency but a better alternative, then routes visitors to the correct category:
  - AEC talent -> `/aec/`
  - Design talent -> `/design/`
  - Marketing talent -> `/marketing/`
- **H1:** "Remote Staffing Agency Alternative — Dedicated LATAM Specialists for US Teams"
- **Design:** Clean, short page with 3 category cards + brief positioning text (why dedicated > staffing)

### 7.9 — Proof asset outreach (business process note)

- **Action (non-code):** Before launch, reach out to 3-5 current or past clients for:
  - Written testimonial quotes (even 1-2 sentences) with name, title, company
  - Permission to use company logo in the Trust Bar
  - Any measurable results to cite (e.g., "reduced hiring time by 60%")
- **Purpose:** Replace the vetting funnel infographic placeholder (Section 8) with real social proof if available. Even one real quote dramatically increases trust.
- **If no testimonials available at launch:** Keep the vetting funnel infographic — it still demonstrates rigor. Add real testimonials in Phase 11+ as they become available.

> **STOP — Human approval required.** Review all trust pages (guarantee, vetting, pricing), get-started page, comparison page, bridge page, and routing hub. Say: "Approved — proceed to Phase 8."

---

## MVP Phase 8: Forms, Lead Capture, and Traffic Filtering

*Implements: Strategy S11 (Lead-Capture), S12 (Traffic Filtering)*

### 8.1 — Fix Formspree integration (CRITICAL)

- **Action:** Configure `PUBLIC_FORMSPREE_ACTION` env var in Vercel with a valid Formspree endpoint
- **Test:** Verify form submissions work end-to-end
- **Also set up:** Local storage fallback (already exists in codebase) as backup

### 8.2 — Enhance contact form with qualifying fields

- **File:** `src/components/ContactForm.astro` — add:
  - Work Email (required, validated)
  - Company (required)
  - Company Size dropdown: 1-25 / 25-200 / 200+
  - What do you need? AEC / Design / Marketing / Multiple / Not Sure
  - Timeline: ASAP / 1-2 weeks / 2-4 weeks / Flexible
  - **Budget Range** dropdown: Under $2,500/mo / $2,500-$5,000/mo / $5,000-$10,000/mo / $10,000+/mo / Not sure yet (Strategy S11.1)
  - "I'm a US-based company looking to hire" checkbox
  - **"How did you hear about us?"** optional dropdown: Google Search / LinkedIn / Referral / Industry Event / Other (Strategy S11.1 — enables attribution from day one)
- **All validation is client-side + Formspree server-side** — no performance impact

### 8.3 — Implement work-email validation (invisible)

- **Action:** Client-side JavaScript that blocks free email domains (gmail.com, yahoo.com, hotmail.com, outlook.com, etc.)
- **UX:** Inline error message "Please use your work email" — appears only when user enters a blocked domain
- **Performance:** Zero impact — runs on input blur event only, ~20 lines of JS

### 8.4 — Implement honeypot field (invisible)

- **Action:** Add a hidden form field (e.g., `<input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">`)
- **Logic:** If the hidden field has any value, the submission is silently discarded (bots fill all fields)
- **Performance:** Zero impact — one hidden HTML element, no JS required
- **UX:** Completely invisible to humans

### 8.5 — Implement reCAPTCHA v3 (invisible)

- **Action:** Add Google reCAPTCHA v3 to all forms
- **How it works:** Score-based bot detection (0.0 = bot, 1.0 = human). No user interaction required — no checkboxes, no puzzles
- **Loading:** Script loaded `async defer` — non-render-blocking
- **Integration:** On form submit, get reCAPTCHA token, send with form data, Formspree validates server-side
- **Performance:** The reCAPTCHA v3 script is ~150KB but loaded asynchronously after page render — zero impact on LCP/FCP/CLS
- **UX:** Completely invisible. Users never see or interact with CAPTCHA

### 8.6 — Implement category-specific CTAs across all pages

- **Update `src/lib/cta.ts`** with CTA text helper functions
- **AEC pages:** "Book an AEC Talent Call"
- **Design pages:** "Book a Design Team Call"
- **Marketing pages:** "Book a Marketing Scoping Call"
- **Role pages:** "Hire a [Role] — Book a Call"
- **General:** "Book a 15-Minute Scoping Call"

### 8.7 — Build lazy-loaded Calendly inline embed component

- **New file:** `src/components/CalendlyInline.astro`
- **Implementation:**
  1. Render a styled placeholder/skeleton matching our design system
  2. Use Intersection Observer to detect when section enters viewport
  3. When visible: dynamically create the Calendly inline widget `<script>` and `<div>`
  4. Smooth transition from skeleton to live widget
- **Performance:** Zero bytes loaded on initial page render. Calendly JS (~200KB) loads only when user scrolls to scheduling section.
- **Replace:** Current `CalendlyEmbed.astro` with this new lazy version on all pages

### 8.8 — Build sticky mobile CTA bar

- **New file:** `src/components/StickyCTA.astro`
- **Behavior:** Full-width "Book a 15-Minute Scoping Call" button fixed to bottom of viewport, appears after 25% scroll (mobile only, hidden on desktop via `md:hidden`)
- **Performance:** Pure CSS positioning + tiny scroll listener (<10 lines JS)

### 8.9 — Enhance "Tell Us Your Needs" modal

- **File:** `src/components/TellUsNeedsModal.astro`
- **Add:** Company size dropdown, Budget Range dropdown, "I'm looking to hire" qualifier text at top
- **Remove:** Formspree error messages, "Download CSV" references
- **Remove/rename "Staff Augmentation"** from the interest/service dropdown — this is forbidden language per Strategy S3.4 ("never say staff augmentation"). Replace with "Dedicated Specialists" or "Team Extension" or remove entirely if redundant with the "What do you need?" field

> **STOP — Human approval required.** Test ALL forms, Calendly embed, sticky CTA, reCAPTCHA, honeypot, email validation on desktop + mobile. Verify Formspree receives submissions correctly. Say: "Approved — proceed to Phase 9."

---

## MVP Phase 9: SEO, Schema, and Structured Data

*Implements: Strategy S13 (Technical Recommendations)*

### 9.1 — Implement Organization + WebSite schema on homepage

- **File:** `src/pages/index.astro` — update JSON-LD
- **Schema:** `Organization` (name, url, logo, description, contactPoint) + `WebSite` (SearchAction)

### 9.2 — Create Breadcrumbs component with schema

- **New file:** `src/components/Breadcrumbs.astro`
- **Renders:** Visible breadcrumb trail + `BreadcrumbList` JSON-LD
- **Add to:** All sub-pages (hubs, spokes, roles, trust pages)

### 9.3 — Add Service schema to category hubs and service spokes

- **JSON-LD on each:** Service name, description, provider (Organization), areaServed (US)

### 9.4 — Add FAQPage schema to all pages with FAQ sections

- **Covers:** Category hubs (3), service spokes (5), role pages (8), comparison page, bridge page
- **Expected outcome:** Featured snippet eligibility

### 9.5 — Update all page meta titles and descriptions

- **Per Strategy S15.4 templates:**
  - Homepage: "LatAm Scalers | Dedicated LATAM Talent for US Teams — AEC, Design, Marketing"
  - AEC hub: "AEC Talent Solutions | Dedicated BIM, Revit, CAD Specialists | LatAm Scalers"
  - Role pages: "Hire a Dedicated [Role] | Pre-Vetted, Remote, LATAM | LatAm Scalers"
  - (etc. for every page)
- **Critical guideline for meta descriptions:** Always include "for US companies" or "for US teams" language in descriptions. This filters out non-ICP clicks at the SERP level (Strategy §13.3). Example: "Dedicated BIM coordinators for US architecture and engineering firms — pre-vetted, LATAM-based, matched in under one week."

### 9.6 — Implement Open Graph and Twitter Card tags

- **File:** `src/components/MetaHead.astro`
- **Add:** og:title, og:description, og:image, og:url, og:type, twitter:card, twitter:title, twitter:description, twitter:image
- **Create default OG image** (branded, reusable)

### 9.7 — Add self-referencing canonical tags to all pages

- **Verify** MetaHead.astro canonical prop is set correctly everywhere

### 9.8 — Verify XML sitemap generation

- **Confirm:** `@astrojs/sitemap` generates entries for all new pages
- **Update** `astro.config.mjs` site URL

### 9.9 — Update robots.txt

- **File:** `public/robots.txt` — update sitemap URL for new domain

### 9.10 — Create custom 404 page

- **New file:** `src/pages/404.astro`
- **Design:** Branded, helpful — category links + search prompt + "Book a Call" CTA

### 9.11 — Prepare hreflang tags (future-proofing)

- **Action:** Add `<link rel="alternate" hreflang="en-US" href="https://latamscalers.com{path}" />` to all pages via Layout.astro
- **Also add:** `<link rel="alternate" hreflang="x-default" href="https://latamscalers.com{path}" />`
- **Purpose:** Future-proofs for a Spanish version (`es` or `es-419`). When the Spanish site is added, only one new tag per page is needed.
- **Performance:** Two `<link>` tags — zero rendering cost
- **SEO impact:** Signals to Google that this is the canonical English version, improving regional targeting

### 9.12 — Set up Vercel Speed Insights and Web Vitals monitoring

- **Action:** Enable Vercel Speed Insights in the Vercel project dashboard (free on Hobby plan)
- **Add:** `@vercel/speed-insights` package to the project
- **Integrate:** Add the Speed Insights component to Layout.astro (loads async, ~2KB)
- **Also enable:** Vercel Web Analytics if desired (real-user page view data)
- **Purpose:** Real-user Core Web Vitals monitoring (LCP, FID, CLS, INP, TTFB) — different from Lighthouse lab data. Alerts when real visitors experience slowness.
- **Expected outcome:** Live dashboard showing field performance metrics across devices and geographies

> **STOP — Human approval required.** Validate all schema markup using Google Rich Results Test on 5+ pages. Check meta tags, OG tags, canonical URLs, sitemap, 404, hreflang, and Speed Insights. Say: "Approved — proceed to Phase 10."

---

## MVP Phase 10: Analytics, Testing, and Domain Connection

*Implements: Strategy S13.5 (Analytics), Cloudflare setup*

### 10.1 — Set up Google Analytics 4

- **Action:** Create GA4 property, get Measurement ID, set `PUBLIC_GA_MEASUREMENT_ID` env var
- **Loading:** `async` script in `<head>` — non-render-blocking
- **Configure events:** cta_click, form_submit, calendly_open, calendly_booked, scroll_depth_50, scroll_depth_90

### 10.2 — Set up Google Tag Manager

- **Action:** Create GTM container, add to Layout.astro
- **Loading:** Deferred snippet per GTM best practices (non-render-blocking)
- **Configure:** CTA click tracking, form submission events, scroll depth triggers

### 10.3 — Set up Microsoft Clarity

- **Action:** Create Clarity project, add tracking script
- **Loading:** `async defer` — Clarity explicitly designed for zero performance impact
- **Expected:** Session recordings, heatmaps, rage click detection, scroll depth — all free

### 10.4 — Set up Google Business Profile

- **Action:** Create or claim a Google Business Profile for "LatAm Scalers"
- **Category:** "Staffing Agency" or "Employment Agency" (closest available; add "Consulting" as secondary)
- **Website URL:** `https://latamscalers.com`
- **Service area:** United States (entire country, since remote)
- **Description:** Short description aligned with meta description — "Dedicated LATAM talent for US teams — AEC, Design, and Marketing specialists"
- **Why MVP:** Strategy S13.3 says "Immediate" priority — "Local Pack delivers 126% more traffic than traditional results." Even as a remote service, GBP increases brand visibility in Google results (knowledge panel, brand searches, map pack for "remote staffing" queries)
- **Time required:** ~15 minutes to set up, verification may take a few days (postcard or phone)

### 10.5 — Set up Facebook Pixel (data accumulation only)

- **Action:** Create a Facebook/Meta Pixel in Meta Business Suite, add to `Layout.astro`
- **Loading:** `async defer` script — non-render-blocking, zero performance impact (~3KB)
- **Configure:** Standard `PageView` event only (no custom events needed for now)
- **Why include without running ads:** The pixel starts building a retargeting audience from day one. When you eventually run paid campaigns (even months later), you will have a warm audience of site visitors already segmented by page visited (AEC visitors, Design visitors, etc.). Starting the pixel from launch vs. later could mean the difference between 5,000 and 0 visitors in your retargeting pool on day one of your first campaign.
- **Privacy:** Add Facebook Pixel to your cookie/privacy policy disclosure
- **Note:** LinkedIn Insight Tag deferred to Growth Phase 15 — less critical since LinkedIn ads are not planned short-term

### 10.6 — Cross-browser and device testing

- **Test on:** Chrome, Firefox, Safari, Edge (desktop) + iOS Safari, Android Chrome (mobile)
- **Verify:** No layout breaks, all CTAs work, forms submit, Calendly loads, no horizontal overflow
- **Verify:** All 301 redirects from old URLs work

### 10.7 — Performance audit

- **Run Lighthouse** on homepage + 3 key pages (AEC hub, a role page, get-started)
- **Targets:** Performance > 90, Accessibility > 90, Best Practices > 90, SEO > 95
- **Fix** any issues found (images, fonts, script loading order)

### 10.8 — Content audit

- **Verify:** Zero "TalentCompany" references, zero "TODO" placeholders, no forbidden language (Strategy S3.4 — never say "staff augmentation", "staffing agency", "outsourcing" in self-describing copy)
- **Verify:** AEC disclaimer on all AEC pages, footer disclaimer on all pages, micro-clarifier on all pages
- **Verify:** No orphan pages, no broken internal links

### 10.9 — Set up Google Search Console

- **Action:** Verify domain ownership (DNS TXT record via Cloudflare)
- **Submit:** XML sitemap
- **Monitor:** Indexing status, schema validation errors

### 10.10 — Cloudflare DNS and SSL setup

This is the critical domain connection step. Since the domain `latamscalers.com` is registered via Cloudflare Registrar, DNS is already managed in Cloudflare.

#### 10.10.1 — Configure DNS records for Vercel

- **Add CNAME record:** `latamscalers.com` -> `cname.vercel-dns.com` (proxied through Cloudflare)
- **Add CNAME record:** `www.latamscalers.com` -> `cname.vercel-dns.com` (proxied)
- **In Vercel:** Add `latamscalers.com` and `www.latamscalers.com` as custom domains in project settings

#### 10.10.2 — Configure SSL (Full Strict mode)

- **Cloudflare SSL/TLS settings:** Set encryption mode to **Full (Strict)**
  - This is critical — "Flexible" or "Full" (non-strict) causes redirect loops with Vercel
  - Full (Strict) means Cloudflare validates Vercel's SSL certificate end-to-end
- **Enable:** "Always Use HTTPS" (forces HTTP -> HTTPS redirect)
- **Enable:** "Automatic HTTPS Rewrites" (fixes mixed content)

#### 10.10.3 — Configure Cloudflare security and performance (free plan)

- **Enable HSTS** (HTTP Strict Transport Security): `max-age=31536000; includeSubDomains`
- **Enable:** Auto Minify (HTML, CSS, JS) — free, reduces payload
- **Enable:** Brotli compression — free, better than gzip
- **Enable:** "Browser Cache TTL" -> set to "Respect Existing Headers" (lets Vercel control caching)
- **Enable:** Early Hints (free) — sends preload hints before full response
- **Enable:** HTTP/2 and HTTP/3 (QUIC) — free, faster connections
- **Configure Page Rules (3 free):**
  1. `*latamscalers.com/` -> Cache Level: Standard, Edge Cache TTL: 1 month (static pages)
  2. `www.latamscalers.com/`* -> Forwarding URL 301 to `https://latamscalers.com/$1` (canonical non-www)
  3. Reserve the third rule for future use

#### 10.10.4 — Configure Cloudflare email routing (optional but recommended)

- **Set up email routing** for `hello@latamscalers.com` or `info@latamscalers.com` -> forwards to your actual email
- **Free on all Cloudflare plans** — professional email addresses at zero cost
- **Add SPF/DKIM/DMARC records** for email deliverability

#### 10.10.5 — Cloudflare free plan assessment and Pro recommendation

**The free Cloudflare plan gives you:**

- Global CDN and caching (216+ data centers)
- Universal SSL certificates
- DDoS protection (basic)
- DNS analytics
- 3 page rules
- Web analytics
- Email routing
- HTTP/2, HTTP/3, Brotli, Early Hints

**Cloudflare Pro ($20/month) would add:**

- **Image optimization (Polish + Mirage)** — automatic WebP conversion, lazy loading, responsive images
- **WAF (Web Application Firewall)** — OWASP managed rules, bot protection
- **20 page rules** (vs. 3)
- **Enhanced analytics** — cache analytics, Web Analytics
- **Mobile redirect** optimizations
- **Rocket Loader** — async JS loading optimization

**My recommendation: Stay on the free plan for MVP launch.** The Vercel stack already handles image optimization (Sharp), edge caching, and security. Cloudflare free adds meaningful DNS performance, SSL, and CDN on top. **Consider upgrading to Pro ($20/mo) after launch** if: (a) you see significant bot traffic that Vercel doesn't catch, (b) you want Cloudflare's image optimization instead of managing it in code, or (c) you need more than 3 page rules. The Pro plan is good value at $20/mo but not essential for MVP.

### 10.11 — Update site configuration for custom domain

- **Update Vercel env var:** `SITE` = `https://latamscalers.com`
- **Update** `astro.config.mjs` site default
- **Rebuild and deploy** — all canonical URLs, sitemap, and OG tags now point to production domain
- **Verify:** sitemap.xml accessible at `https://latamscalers.com/sitemap.xml`

### 10.12 — Post-domain verification

- **Wait:** DNS propagation (typically 1-30 minutes with Cloudflare, rarely up to 48 hours)
- **Verify:** `https://latamscalers.com` renders correctly
- **Verify:** `https://www.latamscalers.com` redirects to non-www
- **Verify:** `http://latamscalers.com` redirects to HTTPS
- **Verify:** SSL certificate is valid (lock icon in browser)
- **Verify:** All pages render, forms submit, Calendly loads
- **Submit** updated sitemap to Google Search Console

### 10.13 — Post-launch monitoring (72 hours)

- **Monitor:** GA4 data flowing, GSC indexing, form submissions working
- **Monitor:** Cloudflare analytics for traffic and caching stats
- **Monitor:** No 404 errors, no redirect loops
- **Monitor:** Page speed scores remain stable

### 10.14 — Enable Cloudflare Bot Fight Mode and security headers

#### Bot Fight Mode (Cloudflare free feature)

- **Action:** In Cloudflare dashboard: Security -> Bots -> Toggle **"Bot Fight Mode"** ON
- **What it does:** Automatically challenges known bot IPs and bot-like behavior before they reach your site. Works alongside reCAPTCHA v3 for defense-in-depth.
- **Performance:** Zero impact — runs at the Cloudflare edge before requests even reach Vercel

#### Security headers via Astro middleware

- **New file:** `src/middleware.ts` (Astro middleware)
- **Add response headers:**
  - `X-Content-Type-Options: nosniff` — prevents MIME type sniffing attacks
  - `X-Frame-Options: SAMEORIGIN` — prevents clickjacking (your site in someone else's iframe)
  - `Referrer-Policy: strict-origin-when-cross-origin` — limits referrer data leakage
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()` — disables unused browser APIs
  - `X-XSS-Protection: 1; mode=block` — legacy XSS protection for older browsers
- **Note:** Content-Security-Policy (CSP) can be added later once all third-party scripts (GA4, GTM, Clarity, Calendly, reCAPTCHA) are catalogued — too restrictive a CSP during MVP may break integrations
- **Performance:** Zero impact — headers are added to HTTP responses, not to page rendering

> **STOP — Human approval required.** Full review of the live site on the custom domain by you and your partners. Test on multiple devices (desktop, mobile, tablet). Verify HTTPS, analytics, forms, bot protection, and security headers. Say: "Approved — MVP is complete. Proceed to Part B when ready."

---

# PART B — GROWTH PHASE (Post-MVP)

*Execute these phases sequentially after the MVP is live and stable. Each phase can be started with "Approved — proceed to Phase [N]."*

---

## Growth Phase 11: AEC Spokes Expansion

*Implements: Strategy S10.1 Tier 2 pages, S8.2 remaining AEC spokes*

- **Build:** `/aec/architectural-drafting-services/` (590/mo, $12.48 CPC)
- **Build:** `/aec/structural-engineering-support/`
- **Build:** `/aec/revit-specialists/`
- **Build:** `/aec/civil-3d-specialists/`
- **Build:** `/aec/responsibility-matrix/` (standalone trust page for AEC delegation)
- **Expected outcome:** Complete AEC topical authority with 8+ AEC pages

---

## Growth Phase 12: Design and Marketing Spokes Expansion

*Implements: Strategy S10.1 Tier 2 pages*

- **Build Design spokes:** `/design/hire-brand-designer/`, `/design/performance-creative-pod/`, `/design/white-label-production/`, `/design/hourly-packages/`
- **Note:** `/design/hire-ux-designer/` was already built in MVP Phase 5.6
- **Build Marketing spokes:** `/marketing/hubspot-specialist/`, `/marketing/klaviyo-expert/`, `/marketing/hire-seo-specialist/`, `/marketing/hire-paid-media-specialist/`, `/marketing/lifecycle-email-sms/`
- **Build new role pages:** Revit MEP Modeler, Civil 3D Specialist, Growth Product Designer, Performance Creative Strategist, HubSpot/MarOps Specialist, Lifecycle Email Specialist, Paid Media Specialist
- **Expected outcome:** 15+ new pages across both verticals

---

## Growth Phase 13: Comparison and Bridge Pages

*Implements: Strategy S10.2 and S10.3*

- **Comparison pages:** `/compare/vs-toptal/`, `/compare/vs-design-pickle/`, `/compare/agency-vs-dedicated-talent/`, `/compare/in-house-vs-contractor/`
- **Bridge pages:** `/resources/outsource-graphic-design/` (320/mo, $68.82 CPC), `/resources/design-subscription-alternative/` (170/mo), `/resources/marketing-staffing-alternative/` (2,900/mo), `/resources/creative-staffing-alternative/` (1,300/mo)
- **Note:** `/resources/remote-staffing-agency/` (5,400/mo routing hub) was already built in MVP Phase 7.8
- **Expected outcome:** Decision-stage and bridge content capturing 10,000+ monthly searches

---

## Growth Phase 14: Industry Hub Pages

*Implements: Strategy S10.4*

- **Build:** `/industries/saas/`, `/industries/mep-engineering-firms/`, `/industries/dtc-ecommerce/`, `/industries/agencies/`, `/industries/architecture-firms/`
- **Template:** Hero -> Pain points -> Role recommendations -> Case study placeholder -> FAQ -> Industry-specific CTA
- **Update Navigation:** Add "Industries" dropdown to main nav (transition from MVP nav to full nav)
- **Expected outcome:** ICP-specific entry points converting 37% higher than generic

---

## Growth Phase 15: Advanced Conversion, Intelligence, and Dark Mode

*Implements: Strategy S11.2 (Progressive Profiling), S11.3 (Exit Intent), S12.3 (GeoIP), S12.5 (LLM Optimization)*

- **Build exit-intent popup:** Mouse-leave trigger (desktop), 30s inactivity (mobile), lead magnet offer + Name/Email form
- **Build progressive profiling:** Cookie-based returning visitor detection, pre-filled forms, deeper qualifying questions
- **Build mid-page desktop sticky CTA:** Sidebar CTA appearing after 50% scroll on long pages
- **Implement lead scoring logic** per Strategy S12.4: Work email +20, company size +15-30, timeline +20-30, budget +25-30, US IP +20
- **Implement GeoIP detection** per Strategy S12.3: Use Formspree or Vercel Edge Functions to capture visitor country/region. Flag non-US leads in the Formspree dashboard for review. Auto-tag US-based leads as higher priority. Useful for future lead routing and ICP analysis.
- **Implement ASAP priority routing:** When "ASAP" is selected as timeline, trigger a priority notification (via Formspree webhook -> Zapier -> Slack/email). Requires Formspree Pro or a Zapier integration.
- **Add LinkedIn Insight Tag:** Similar to Facebook Pixel — `async defer` script, accumulates B2B visitor data for future LinkedIn campaign targeting
- **LLM/AI search optimization pass:** Review all page content against Strategy S12.5 guidelines — definitive language ("LatAm Scalers provides..." not "may provide"), specific data points, comparison tables, authoritative tone, entity markup. Run this as a content audit across all pages to improve visibility in AI-generated search results (Perplexity, ChatGPT, Google SGE).
- **Add roles directory search bar:** Once role pages exceed 15+, add a search/filter bar to `/roles/` for faster navigation. Not needed at MVP's 8 roles.
- **Add optional dark-mode toggle:** Navbar toggle (sun/moon icon), respects `localStorage` for persistence and `prefers-color-scheme` for first visit. Requires creating a dark variant of the full color palette and auditing all 30+ pages for contrast compliance. Senior B2B users appreciate the option — boosts dwell time.
- **Expected outcome:** +15-30% conversion lift from advanced capture elements + improved intelligence + user preference support

---

# PART C — SCALE PHASE (Post-Growth)

*Execute these phases after Growth phases are complete and traffic is building.*

---

## Scale Phase 16: Blog and Content Hub

- **Build blog infrastructure:** Content collection for posts, blog index page, category filtering, RSS feed
- **Add "Resources" dropdown** to main nav
- **Write first 12 blog posts** per Strategy S10.5 content calendar (1/week for 12 weeks)
- **Each post:** 1,500+ words, links to 1 category spoke + 1 trust page, FAQ schema
- **Expected outcome:** TOFU content building topical authority

---

## Scale Phase 17: Enterprise and ABM

- **Build:** `/enterprise/` hub with vendor pack download (PDF)
- **Build ABM vertical pages:** `/aec/for-data-centers/`, `/aec/for-healthcare/`, `/aec/for-multifamily/`, `/aec/for-mep-firms/`
- **Build:** `/about/our-story/` page
- **Expected outcome:** Tier 3 enterprise readiness + highest-value account targeting

---

## Scale Phase 18: Interactive Tools and Optimization

- **Build:** `/resources/tools/cost-savings-calculator/` (interactive React/Astro island)
- **Build:** `/resources/salary-insights/` with downloadable PDF lead magnets
- **Expand role pages** to 25+ via programmatic content collection
- **Launch A/B testing** program (headlines, CTAs, form lengths)
- **Build referral program page** (40-50% of AEC discovery is peer networks)
- **Expected outcome:** 10-20x engagement from interactive tools, continuous optimization

---

# Risk Mitigation and Rollback Strategy

### Git Branching Strategy

- **Defined in the "Git Branching Rule" section above (after Step 0).**
- Every phase = its own `feature/` branch. PRs created with Vercel preview links for frictionless review.
- Merge to `main` only after explicit human approval at each gate.
- **The original site** at `talentcompany-site.vercel.app` remains untouched throughout.

### Rollback Procedures

- **Any phase:** `git revert` or branch reset + Vercel auto-redeploys from `main`
- **URL redirects:** `vercel.json` changes are instant on next deploy
- **Forms:** Formspree toggled via env var without code changes
- **Schema/SEO:** JSON-LD in `<script>` tags — removable without affecting page content
- **Cloudflare:** DNS changes propagate in minutes; SSL settings are instant

### Performance Safeguards

- **All analytics scripts** (GA4, GTM, Clarity, Facebook Pixel): loaded `async`/`defer`, never render-blocking
- **Vercel Speed Insights:** ~2KB async component, real-user Web Vitals monitoring
- **reCAPTCHA v3:** loaded `async defer` (~150KB but after page render)
- **Honeypot:** Zero JavaScript, zero network requests — just a hidden HTML field
- **Work-email validation:** ~20 lines of JS running on input blur only
- **Calendly:** Zero bytes until user scrolls to section (Intersection Observer)
- **Fonts:** `font-display: swap` + preconnect — no FOIT
- **Micro-interactions:** Pure CSS transitions + Intersection Observer (~15 lines JS) — no libraries
- **Security headers:** Added to HTTP response only — zero rendering cost
- **Bot Fight Mode:** Runs at Cloudflare edge — zero impact on your site
- **Baseline audit:** Documented at Step 0.7 — regressions caught immediately
- **Target:** Lighthouse Performance > 90 on every page


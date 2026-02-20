# LatAm Scalers — Content Audit & Migration Gate

**Date:** February 20, 2026
**Audited by:** AI assistant (full file-level review of all 26 pages + 19 components)
**Current state:** ~20 unique pages at `latam-scalers-website.vercel.app`, dark theme, "LatAm Scalers" branding applied (Phase 1 complete)

---

## Executive Summary

- **26 page files** across 4 route groups: homepage, solutions (9), roles (9), services (3), legal (3), how-it-works (1)
- **19 component files** including Nav, Footer, ContactForm, CalendlyEmbed, TellUsNeedsModal, UI library
- **Global issues found across all files:**
  - All pages reference `talentcompany-site.vercel.app` as fallback base URL (needs update to production URL)
  - All components and pages still use old dark theme colors (slate-950/sky-600) — Phase 1 color palette defined in CSS but NOT yet applied to page content
  - TODO/placeholder testimonials on 10+ pages
  - Legal pages (terms, privacy, cookies) are entirely placeholder stubs
- **No remaining "TalentCompany" brand references found** — rebrand is complete

---

## Page-by-Page Audit

### Legend

| Decision | Meaning |
|----------|---------|
| **Full Rewrite** | Content and structure will be replaced entirely per the implementation plan |
| **Moderate Rewrite** | Good bones — preserve structure but rewrite significant sections |
| **Light Polish** | Good content — update styling, branding, fix TODOs, update URLs |
| **Migrate & Redirect** | Move to new URL path, update content |
| **Remove** | Page is redundant or will be superseded by new page |
| **Stub → Build** | Currently a placeholder — needs full content creation |

---

### 1. Homepage (`/`) — `src/pages/index.astro`

| Field | Value |
|-------|-------|
| **Decision** | **Full Rewrite** |
| **Current sections** | Hero, Choose Your Solution (3 cards), How It Works (5 steps), Flexible Options, Proof (3 TODO testimonials), Popular Roles (3 + "view all"), Final CTA, Contact + Calendly |
| **Target** | 12-section homepage per Phase 3 (hero, trust bar, problem statement, solution cards, how-it-works, why LATAM, flexible options, social proof, popular roles, tier pathways, final CTA, contact + Calendly) |
| **TODO count** | 3 placeholder testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` fallback, links to `/solutions/aec-talent/`, `/solutions/creatives-design/`, `/solutions/marketing-talent/` |

**Preserve:**
- The 5-step "How it works" flow wording is solid — adapt for the Phase 3 version
- Hero value proposition structure (speed, alignment, flexibility, guarantee) — retain as trust bar content
- "Ready to Add Reliable Capacity?" CTA headline is strong — keep

**Notes:**
- Currently 6 sections; target is 12 sections with micro-interactions
- Missing: trust bar, problem statement, why LATAM, tier pathways
- Popular roles section only shows 3 roles; Phase 3 target is 6

---

### 2. How It Works (`/how-it-works/`) — `src/pages/how-it-works.astro`

| Field | Value |
|-------|-------|
| **Decision** | **Light Polish** |
| **Current sections** | Hero, 5-step Process with branching notes (Individuals/Teams/PM-led), Why Choose Our Approach, Proof (TODO), FAQ (3 questions with schema), Final CTA with quick links |
| **TODO count** | 3 placeholder testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` fallback; links to `/solutions/aec-talent/`, `/solutions/creatives-design/`, `/solutions/marketing-talent/` |

**Preserve (high-value content):**
- Branching notes per engagement type (Individuals/Teams/PM-led) for each step — this is unique, well-structured content
- FAQ answers are specific and useful
- "Why Choose Our Approach" bullet list is concise and accurate
- FAQPage schema is correctly implemented

**Changes needed:**
- Update links from `/solutions/*` to `/aec/`, `/design/`, `/marketing/`
- Replace placeholder testimonials with vetting funnel infographic or real proof
- Apply new light theme styling
- Update meta title to match Strategy S15.4 template

---

### 3. Roles Directory (`/roles/`) — `src/pages/roles/index.astro`

| Field | Value |
|-------|-------|
| **Decision** | **Moderate Rewrite** |
| **Current sections** | Hero, Role cards grid (8 roles), "Not seeing your role?" CTA |
| **TODO count** | 0 |
| **Stale URLs** | `talentcompany-site.vercel.app` fallback |

**Preserve:**
- Role card list structure (label, category, href) is clean and extensible
- "Not seeing your role?" CTA is a good pattern

**Changes needed (Phase 6):**
- Add category filter tabs (AEC / Design / Marketing)
- Add role count badge and enriched cards (description, pricing, link)
- Update H1 to "Browse Vetted Remote Roles — AEC, Design, Marketing"
- Apply new light theme styling

---

### 4. AEC Solution Hub (`/solutions/aec-talent/`) — `src/pages/solutions/aec-talent/index.astro`

| Field | Value |
|-------|-------|
| **Decision** | **Full Rewrite → `/aec/`** |
| **Current sections** | Hero, Options (Individuals + Teams), Key Benefits, Disciplines/Roles grid (8 items), Proof (TODO), Mid-CTA, FAQ (5 questions with schema), Final CTA |
| **TODO count** | 3 placeholder testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` fallback; discipline links mostly point to `/roles/` generic |

**Preserve:**
- FAQ content is AEC-specific and valuable (BEP/templates, 48h matching, tool support, revision process, replacement guarantee)
- Disciplines list (8 items) is a useful starting point for the role showcase section
- Hero subheadline is specific and good: "Revit, BIM, drafting, and production support..."

**Changes needed (Phase 4):**
- Move from `/solutions/aec-talent/` to `/aec/` with 301 redirect
- Expand from ~8 sections to 12-section template per Strategy S8.1
- Add: problem section (94% workforce shortage stats), responsibility matrix, why LATAM for AEC, pricing guidance, AEC micro-clarifier disclaimer
- Vetting badge linking to `/about/how-we-vet/`

---

### 5. Creative & Design Hub (`/solutions/creatives-design/`) — `src/pages/solutions/creatives-design/index.astro`

| Field | Value |
|-------|-------|
| **Decision** | **Full Rewrite → `/design/`** |
| **Current sections** | Hero, Options (Dedicated + PM-led), Outcome Grid (4 items), Proof (TODO), FAQ (3 questions), Final CTA |
| **TODO count** | 3 placeholder testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` fallback |

**Preserve:**
- FAQ content on dedicated vs PM-led decision is useful
- Outcome snapshots (faster throughput, quality bar, flexible engagement, clear workflow) are concise
- "Predictable output" messaging aligns well with strategy

**Changes needed (Phase 4):**
- Move from `/solutions/creatives-design/` to `/design/` with 301 redirect
- Expand to 12-section template
- Add: managed creative team comparison table (Design Pickle vs Superside vs LatAm Scalers), ICP sections (SaaS, DTC, Agencies), problem section, pricing guidance
- Missing role showcase section

---

### 6. Marketing Hub (`/solutions/marketing-talent/`) — `src/pages/solutions/marketing-talent/index.astro`

| Field | Value |
|-------|-------|
| **Decision** | **Full Rewrite → `/marketing/`** |
| **Current sections** | Hero, Options (Individuals + Teams), Roles Grid (8 items), Proof (TODO), FAQ (4 questions), Final CTA |
| **TODO count** | 3 placeholder testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` fallback; role cards all link to generic `/roles/` |

**Preserve:**
- Roles list is comprehensive: SEO, PPC, Paid Social, Lifecycle/Email, Content, Analytics/GA4, CRO, Marketing Ops
- FAQ content on individuals vs pods, FT/PT/hourly, and replacement guarantee
- Hero subheadline: "Scale pipeline, performance, and content with vetted specialists"

**Changes needed (Phase 4):**
- Move from `/solutions/marketing-talent/` to `/marketing/` with 301 redirect
- Expand to 12-section template
- Add: ops-first wedge section (MarOps/RevOps), tool-stack proof grid, ICP sections, problem section (3.8% unemployment), pricing guidance

---

### 7–12. Solution Sub-Pages

#### 7. AEC Individuals (`/solutions/aec-talent/individuals/`)

| Field | Value |
|-------|-------|
| **Decision** | **Migrate & Redirect → `/aec/individuals/`** |
| **Content quality** | Moderate — has formats (20h/40h), matching process, proof (TODO), FAQ, CTA |
| **TODO count** | 3 placeholder testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` |

#### 8. AEC Teams (`/solutions/aec-talent/teams/`)

| Field | Value |
|-------|-------|
| **Decision** | **Migrate & Redirect → `/aec/teams/`** |
| **Content quality** | Moderate — ROI teaser (placeholder), team examples, process, proof (TODO), FAQ, CTA |
| **TODO count** | ROI placeholder + 3 testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` |

#### 9. Design Dedicated (`/solutions/creatives-design/dedicated/`)

| Field | Value |
|-------|-------|
| **Decision** | **Migrate & Redirect → `/design/dedicated-designers/`** |
| **Content quality** | Moderate — weekly output examples, roles (some placeholder), matching process, brief kit (TODO) |
| **TODO count** | Brief kit placeholder + role description placeholders |
| **Stale URLs** | `talentcompany-site.vercel.app` |

#### 10. Design PM-Led (`/solutions/creatives-design/pm-led/`)

| Field | Value |
|-------|-------|
| **Decision** | **Migrate & Redirect → `/design/managed-creative-teams/`** (Phase 5.4) |
| **Content quality** | Moderate — request flow, turnaround table, staffing/revisions, proof (TODO), brief kit (TODO) |
| **TODO count** | 3 testimonials + brief kit placeholder |
| **Stale URLs** | `talentcompany-site.vercel.app` |

**Preserve:** Turnaround table and request flow structure — useful for the Phase 5 managed creative teams spoke page

#### 11. Marketing Individuals (`/solutions/marketing-talent/individuals/`)

| Field | Value |
|-------|-------|
| **Decision** | **Migrate & Redirect → `/marketing/individuals/`** |
| **Content quality** | Moderate — FT/PT offerings, hourly blocks, onboarding, proof (TODO), FAQ |
| **TODO count** | 3 placeholder testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` |

#### 12. Marketing Teams (`/solutions/marketing-talent/teams/`)

| Field | Value |
|-------|-------|
| **Decision** | **Migrate & Redirect → `/marketing/teams/`** |
| **Content quality** | Moderate — pod examples, process, proof (TODO), FAQ |
| **TODO count** | ROI examples placeholder + 3 testimonials |
| **Stale URLs** | `talentcompany-site.vercel.app` |

---

### 13–15. Services Pages (Duplicate/Alternate Route)

These pages exist at `/services/aec/`, `/services/design/`, and `/services/marketing/` and appear to be **full-content alternate versions** of the solution hub pages with different structures.

#### 13. Services AEC (`/services/aec/`)

| Field | Value |
|-------|-------|
| **Decision** | **Remove (redirect to `/aec/`)** |
| **Content quality** | Full — has "who this is for", how it works, capabilities, roles, tools, why us, related services, FAQ |
| **TODO count** | 0 |
| **Stale URLs** | `talentcompany-site.vercel.app`; links to `/solutions/creatives-design/` and `/solutions/marketing-talent/` |

**Preserve:** This page has the richest content of any AEC page. Harvest these sections for the new `/aec/` hub:
- "Who this is for" section
- Capabilities list
- Tools list
- FAQ content

#### 14. Services Design (`/services/design/`)

| Field | Value |
|-------|-------|
| **Decision** | **Remove (redirect to `/design/`)** |
| **Content quality** | Full — has engagement models, subscription plans, capabilities, roles, onboarding, why us, FAQ |
| **TODO count** | 0 |
| **Stale URLs** | `talentcompany-site.vercel.app`; links to `/solutions/aec-talent/` and `/solutions/marketing-talent/` |

**Preserve:** Harvest for new `/design/` hub:
- Engagement models section
- Subscription plans content (if applicable to new pricing model)
- Capabilities list

#### 15. Services Marketing (`/services/marketing/`)

| Field | Value |
|-------|-------|
| **Decision** | **Remove (redirect to `/marketing/`)** |
| **Content quality** | Full — has engagement models, roles, expectations, why us, related services, FAQ |
| **TODO count** | 0 |
| **Stale URLs** | `talentcompany-site.vercel.app`; links to `/solutions/creatives-design/` and `/solutions/aec-talent/` |

**Preserve:** Harvest for new `/marketing/` hub:
- Roles list and descriptions
- Expectations section
- FAQ content

---

### 16–23. Role Pages

#### 16. Architectural Designer (`/roles/architectural-designer/`)

| Field | Value |
|-------|-------|
| **Decision** | **Light Polish** |
| **Content quality** | Moderate-to-full — Hero with "at a glance" card, Role overview, Why remote works, Options (individuals/teams), Sample outputs (TODO placeholders), Proof (anonymized quote), CTA |
| **TODO count** | 3 sample output placeholders, 1 proof placeholder text |
| **Stale URLs** | `talentcompany-site.vercel.app`; links to `/solutions/aec-talent/individuals/` and `/solutions/aec-talent/teams/` |

**Preserve (high-value):**
- "At a glance" card structure (Tools, Standards, Delivery, Flex) — good template for other role pages
- Role overview content: schematic/design development, 3D modeling, construction docs, code compliance, coordination
- Why remote excels bullets
- Anonymized testimonial quote: "Added two architectural designers — cut concept phase time by 40%"

**Changes needed:**
- Replace sample output TODOs with real anonymized deliverable descriptions (not images)
- Update links to new URL structure (`/aec/individuals/`, `/aec/teams/`)
- Apply to RoleTemplate.astro pattern (Phase 6.2)
- Add FAQ section with schema

#### 17. SEO Specialist (`/roles/seo-specialist/`)

| Field | Value |
|-------|-------|
| **Decision** | **Light Polish** |
| **Content quality** | Moderate — Hero, Overview, Why Remote, Options, Sample Outputs (TODO), Proof (TODO), CTA |
| **TODO count** | 4 (3 sample outputs + 1 proof) |
| **Stale URLs** | `talentcompany-site.vercel.app`; links to `/solutions/marketing-talent/individuals/` and `/solutions/marketing-talent/teams/` |

**Preserve:**
- Role overview content (channel ownership, reporting, tool-specific mentions)
- Why remote works content

#### 18. Brand/Visual Designer (`/roles/brand-visual-designer/`)

| Field | Value |
|-------|-------|
| **Decision** | **Light Polish** |
| **Content quality** | Moderate — Hero, Overview, Why Remote, Options, Sample Outputs (TODO), Proof (TODO), CTA |
| **TODO count** | 4 (3 sample outputs + 1 proof) |
| **Stale URLs** | `talentcompany-site.vercel.app`; links to `/solutions/creatives-design/dedicated/` and `/solutions/creatives-design/pm-led/` |

**Preserve:**
- Role overview content
- Why remote works content

#### 19. BIM Coordinator (`/roles/bim-coordinator/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build (Full Rewrite)** |
| **Content quality** | Stub — Hero only with TODO placeholder for all content |
| **TODO count** | 2 (meta description + entire body content) |
| **Stale URLs** | `talentcompany-site.vercel.app` |

**Notes:** Priority #1 role page to complete (Phase 6.3). Needs full content: tools (Navisworks, ACC, BIM 360), deliverables, clash detection workflows, coordination scope.

#### 20. Revit Drafter (`/roles/revit-drafter/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build** |
| **Content quality** | Stub — Hero only + overview placeholder |
| **TODO count** | 1 major (overview body) |
| **Stale URLs** | `talentcompany-site.vercel.app`; link to `/solutions/aec-talent/` |

#### 21. UI/UX Designer (`/roles/ui-ux-designer/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build** |
| **Content quality** | Stub — Hero only with TODO placeholders |
| **TODO count** | 2 (meta description + hero subheadline) |
| **Stale URLs** | `talentcompany-site.vercel.app`; link to `/solutions/creatives-design/` |

#### 22. PPC Manager (`/roles/ppc-manager/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build** |
| **Content quality** | Stub — Hero only with TODO placeholders |
| **TODO count** | 2 (meta description + hero subheadline) |
| **Stale URLs** | `talentcompany-site.vercel.app`; link to `/solutions/marketing-talent/` |

#### 23. Content Marketer (`/roles/content-marketer/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build** |
| **Content quality** | Stub — Hero only with TODO placeholders |
| **TODO count** | 2 (meta description + hero subheadline) |
| **Stale URLs** | `talentcompany-site.vercel.app`; link to `/solutions/marketing-talent/` |

---

### 24–26. Legal Pages

#### 24. Terms of Service (`/terms/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build (Light Polish)** |
| **Content quality** | Stub — Header structure with 8 TODO placeholder sections |
| **Sections (all TODO):** | Overview, Services, Payments, Confidentiality, Acceptable Use, Disclaimers, Termination, Governing Law |
| **Stale URLs** | `talentcompany-site.vercel.app` |

#### 25. Privacy Policy (`/privacy/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build (Light Polish)** |
| **Content quality** | Stub — Header structure with 8 TODO placeholder sections |
| **Sections (all TODO):** | Information We Collect, How We Use, Legal Bases, Sharing, Retention, Security, Your Rights, Contact |
| **Stale URLs** | `talentcompany-site.vercel.app` |

#### 26. Cookie Policy (`/cookies/`)

| Field | Value |
|-------|-------|
| **Decision** | **Stub → Build (Light Polish)** |
| **Content quality** | Stub — Header structure with 4 TODO placeholder sections |
| **Sections (all TODO):** | What Cookies Are, How We Use Cookies, Managing Preferences, Cookie List |
| **Stale URLs** | `talentcompany-site.vercel.app` |

**Note on legal pages:** These need real legal content before launch. Consider using a legal template generator or legal counsel to draft proper terms. The section structure is already defined — just needs content fill.

---

## Component Audit

| Component | State | Key Issues |
|-----------|-------|------------|
| `Nav.astro` | Working, brand correct | Old dark theme colors; needs Phase 2 restructure |
| `Footer.astro` | Working, brand correct | Old dark theme colors; needs Phase 2 overhaul |
| `ContactForm.astro` | Working | Formspree placeholder URL as fallback; needs qualifying fields (Phase 8) |
| `CalendlyEmbed.astro` | Working (lazy load) | Placeholder Calendly URL as fallback; needs Intersection Observer upgrade (Phase 8) |
| `TellUsNeedsModal.astro` | Working | Has budget range + start date; needs work-email validation, attribution field (Phase 8) |
| `ContactSection.astro` | Working | Wrapper for ContactForm + CalendlyEmbed; placeholder URLs |
| `Layout.astro` | Working | `bg-slate-950 text-slate-100` (old dark base); needs light theme switch |
| `globals.css` | Defines color palette | Has new LatAm Scalers colors in CSS vars but page content doesn't use them yet |
| `Section.astro` | Created (Phase 1) | Light/Alt/Dark variants defined — ready for use |
| `TrustBadge.astro` | Created (Phase 1) | Ready for use |
| `CategoryCard.astro` | Created (Phase 1) | Ready for use |
| UI library (`Button`, `Card`, `Badge`, `Container`) | Created (Phase 1) | Ready for use |
| `Hero.astro`, `HeroA.astro`, `HeroB.astro` | Legacy | Three hero variants — consolidate during rewrites |
| `SubscriptionTable.astro` | Legacy | Used by `/services/design/`; may not be needed in new design |
| `FeatureGrid.astro` | Legacy | May not be needed in new design |

---

## Global Issues (Fix Across All Files)

### 1. Stale Base URL Fallback
**Every page** has: `const baseUrl = Astro.site ?? 'https://talentcompany-site.vercel.app';`
**Fix:** Update fallback to `'https://latam-scalers-website.vercel.app'` (or final production URL once domain is connected)

### 2. Old Dark Theme Not Yet Replaced
Phase 1 defined the new color palette in `globals.css` but page content still uses hardcoded `slate-950`, `slate-900`, `bg-slate-900/40`, `text-white`, `text-slate-300` etc. The new CSS custom properties (`--color-primary`, `--color-accent`, etc.) and Phase 1 components (`Section.astro`, `TrustBadge.astro`, etc.) are ready but not yet integrated into the page templates. This is expected — the full theme migration happens as each page is rewritten in subsequent phases.

### 3. TODO Testimonials (10+ pages)
All solution hubs, sub-pages, and role pages have 3x placeholder testimonials. Plan calls for replacing with vetting funnel infographic (Phase 3.8) and real testimonials when available (Phase 7.9 outreach).

### 4. Old URL Structure in Internal Links
Many pages link to `/solutions/aec-talent/`, `/solutions/creatives-design/`, `/solutions/marketing-talent/`. These will be replaced by `/aec/`, `/design/`, `/marketing/` in Phase 4 with 301 redirects.

---

## Decision Summary Table

| # | Page / Route | Decision | Phase | Priority Notes |
|---|-------------|----------|-------|---------------|
| 1 | `/` (Homepage) | Full Rewrite | Phase 3 | 12-section redesign |
| 2 | `/how-it-works/` | Light Polish | Phase 7.7 | Strong content; update styling + links |
| 3 | `/roles/` (Directory) | Moderate Rewrite | Phase 6.1 | Add filters, enriched cards |
| 4 | `/solutions/aec-talent/` | Full Rewrite → `/aec/` | Phase 4.2 | 12-section hub template |
| 5 | `/solutions/creatives-design/` | Full Rewrite → `/design/` | Phase 4.3 | 12-section hub template |
| 6 | `/solutions/marketing-talent/` | Full Rewrite → `/marketing/` | Phase 4.4 | 12-section hub template |
| 7 | `/solutions/aec-talent/individuals/` | Migrate → `/aec/individuals/` | Phase 4.2 | Polish during hub migration |
| 8 | `/solutions/aec-talent/teams/` | Migrate → `/aec/teams/` | Phase 4.2 | Polish during hub migration |
| 9 | `/solutions/creatives-design/dedicated/` | Migrate → `/design/dedicated-designers/` | Phase 4.3 | Polish during hub migration |
| 10 | `/solutions/creatives-design/pm-led/` | Migrate → `/design/managed-creative-teams/` | Phase 5.4 | Becomes flagship spoke page |
| 11 | `/solutions/marketing-talent/individuals/` | Migrate → `/marketing/individuals/` | Phase 4.4 | Polish during hub migration |
| 12 | `/solutions/marketing-talent/teams/` | Migrate → `/marketing/teams/` | Phase 4.4 | Polish during hub migration |
| 13 | `/services/aec/` | Remove → redirect to `/aec/` | Phase 4 | Harvest content first |
| 14 | `/services/design/` | Remove → redirect to `/design/` | Phase 4 | Harvest content first |
| 15 | `/services/marketing/` | Remove → redirect to `/marketing/` | Phase 4 | Harvest content first |
| 16 | `/roles/architectural-designer/` | Light Polish | Phase 6.4 | Best role page template — use as reference |
| 17 | `/roles/seo-specialist/` | Light Polish | Phase 6.4 | Good content, needs sample outputs |
| 18 | `/roles/brand-visual-designer/` | Light Polish | Phase 6.4 | Good content, needs sample outputs |
| 19 | `/roles/bim-coordinator/` | Stub → Build | Phase 6.3 | Priority #1 role page |
| 20 | `/roles/revit-drafter/` | Stub → Build | Phase 6.4 | Batch 1 |
| 21 | `/roles/ui-ux-designer/` | Stub → Build | Phase 6.4 | Batch 2 |
| 22 | `/roles/ppc-manager/` | Stub → Build | Phase 6.4 | Batch 2 |
| 23 | `/roles/content-marketer/` | Stub → Build | Phase 6.4 | Batch 2 |
| 24 | `/terms/` | Stub → Build | Pre-launch | Needs real legal content |
| 25 | `/privacy/` | Stub → Build | Pre-launch | Needs real legal content |
| 26 | `/cookies/` | Stub → Build | Pre-launch | Needs real legal content |

---

## Content to Preserve (Harvest List)

These specific content blocks should be preserved or adapted during rewrites:

### From Homepage (`index.astro`)
- Hero value prop cards: Speed, Alignment, Flexibility, Guarantee
- "How it works" 5-step wording
- CTA headline: "Ready to Add Reliable Capacity?"

### From How It Works (`how-it-works.astro`)
- Full branching notes structure (Individuals/Teams/PM-led per step)
- FAQ answers (3 questions)
- "Why Choose Our Approach" 6-bullet list

### From AEC Solution Hub
- FAQ content (5 AEC-specific questions about BEP, 48h matching, tools, revisions, replacement)
- Disciplines list (8 items)
- Hero subheadline about Revit, BIM, drafting

### From Creative & Design Hub
- FAQ on dedicated vs PM-led decision
- Outcome snapshots (4 items)

### From Marketing Hub
- Roles list (8 marketing specializations)
- FAQ content (4 questions about individuals vs pods, FT/PT/hourly, speed, fit)

### From Services Pages (richest content — harvest before removal)
- `/services/aec/`: "Who this is for" section, capabilities list, tools list, full FAQ
- `/services/design/`: Engagement models, subscription plans, capabilities, onboarding flow
- `/services/marketing/`: Engagement models, roles with descriptions, expectations section

### From Architectural Designer Role Page
- "At a glance" card structure (Tools, Standards, Delivery, Flex)
- Role overview: 5-item capability list
- Anonymized testimonial: "Added two architectural designers — cut concept phase time by 40%"

### From PM-Led Design Page
- Turnaround table structure
- Request flow process

---

## Redirect Map (Phase 4)

| Old URL | New URL | Type |
|---------|---------|------|
| `/solutions/aec-talent/*` | `/aec/*` | 301 |
| `/solutions/creatives-design/*` | `/design/*` | 301 |
| `/solutions/marketing-talent/*` | `/marketing/*` | 301 |
| `/services/aec/` | `/aec/` | 301 |
| `/services/design/` | `/design/` | 301 |
| `/services/marketing/` | `/marketing/` | 301 |

---

## Approval Gate

> **STOP — Human approval required.**
>
> Review the decisions above. Flag any pages where you want to:
> - Preserve specific wording that should NOT be changed
> - Change the decision (e.g., keep a page instead of removing it)
> - Add additional content to harvest before rewrites begin
>
> Say: **"Approved — proceed to Phase 2."**

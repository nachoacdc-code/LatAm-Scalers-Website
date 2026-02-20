# Content Audit — LatAm Scalers Website

This audit documents the current state of all page files in the LatAm Scalers website as part of the transformation from "TalentCompany" to "LatAm Scalers" — a B2B lead-generation site for pre-vetted LATAM talent (AEC, Design, Marketing) serving US companies.

---

| File Path | Current Page Title / H1 | Content Summary | Decision | Notes |
|-----------|-------------------------|-----------------|----------|-------|
| `src/pages/index.astro` | "Scale Your US Team with Dedicated LATAM Specialists — Matched in Under One Week" | Hero, trust bar (48hr match, 5-stage vetted, 50–70% savings, free replacement), problem statement (94% AEC shortage, 45% design hiring cycles, 3.8% marketing unemployment), solution cards (AEC/Design/Marketing), 5-step How It Works, Why LATAM (counters), flexible options (individual/team/hourly), vetting funnel (500→5), popular roles grid, tier pathways (Start Fast/Scale Smart/Enterprise), final CTA, contact + Calendly | **Full rewrite** | Strategy S7: 12 sections required. Current structure is solid but content/flow may need alignment with new strategy. Preserve: value props, vetting funnel, tier pathways, CTAs. |
| `src/pages/how-it-works.astro` | "Our Flexible Process — Tailored to Your Needs" | Hero, 5-step process with branching (Individuals/Teams/PM-led), Why choose our approach (6 bullets), Proof (TODO testimonials), FAQ (3 items), final CTA | **Light polish** | Good branching flow. Replace TODO testimonials or remove section. Update internal links to new URL structure (/aec/, /design/, /marketing/) when ready. |
| `src/pages/solutions/aec-talent/index.astro` | "Dedicated Remote AEC Talent for US Firms of All Sizes" | Hero, engagement options (individuals/teams), key benefits, disciplines grid (8 roles), FAQ (5), Proof (TODO), CTAs | **Full rewrite** | New URL: `/aec/`. Preserve: disciplines list, FAQ content, engagement options. Align to new category hub structure. |
| `src/pages/solutions/aec-talent/individuals.astro` | "Hire Individual AEC Specialists — Fast and Flexible" | Hero, 20h vs 40h formats, 4-step matching process, Proof (TODO), FAQ (4), CTAs | **Full rewrite** | Move under `/aec/` or equivalent. Preserve: formats, matching steps, FAQ. |
| `src/pages/solutions/aec-talent/teams.astro` | "Build Dedicated AEC Teams for Scaling" | Hero, ROI teaser (placeholder), example pods (CD/BIM/Visualization), 4-step process, Proof (TODO), FAQ (4), CTAs | **Full rewrite** | Preserve: pod examples, process, FAQ. Replace ROI placeholder. |
| `src/pages/solutions/creatives-design/index.astro` | "Reliable Remote Creative & Design Talent" | Hero, engagement (Dedicated/PM-led), outcome grid, Proof (TODO), FAQ (3), CTAs | **Full rewrite** | New URL: `/design/`. Preserve: outcomes, FAQ. |
| `src/pages/solutions/creatives-design/dedicated.astro` | "Dedicated Remote Designer Seat" | Hero, weekly output examples (Marketing/Brand/Product), roles grid, 4-step matching, Design Brief Kit (TODO), CTAs | **Full rewrite** | Preserve: weekly output examples, matching process. Add brief kit or remove placeholder. |
| `src/pages/solutions/creatives-design/pm-led.astro` | "PM-Led Dedicated Design Team" | Hero, 4-step request flow, turnaround table, staffing/revisions, Proof (TODO), Design Brief Kit (TODO), CTAs | **Full rewrite** | Strong turnaround table — preserve. Add brief kit or remove placeholder. |
| `src/pages/solutions/marketing-talent/index.astro` | "Dedicated Remote Marketing Talent for US Teams" | Hero, engagement (Individuals/Teams), roles grid (8), Proof (TODO), FAQ (4), CTAs | **Full rewrite** | New URL: `/marketing/`. Preserve: roles list, FAQ. |
| `src/pages/solutions/marketing-talent/individuals.astro` | "Hire Dedicated Marketing Specialists" | Hero, FT/PT offerings, hourly blocks (audit/setup/optimize), 4-step onboarding, Proof (TODO), FAQ (3), CTAs | **Full rewrite** | Preserve: FT/PT vs hourly structure, FAQ. |
| `src/pages/solutions/marketing-talent/teams.astro` | "Dedicated Marketing Pods" | Hero, ROI examples (placeholder), pod examples (Demand Gen/SEO+Content/Lifecycle), 4-step process, Proof (TODO), FAQ (4), CTAs | **Full rewrite** | Preserve: pod examples. Replace ROI placeholder. |
| `src/pages/roles/index.astro` | "Roles directory" | Hero, grid of 8 role cards (no filters), "Not seeing your role?" CTA | **Moderate rewrite** | Add category filters (AEC/Design/Marketing), enrich cards with role metadata. Preserve: role list, CTA. |
| `src/pages/roles/architectural-designer/index.astro` | "Dedicated Remote Architectural Designer" | Full template: hero + at-a-glance, role overview, why remote works, options (individual/team), sample outputs (TODO placeholders), proof, CTAs | **Light polish** | Good content. Update template if unified. Replace sample output placeholders or remove. |
| `src/pages/roles/bim-coordinator/index.astro` | "Dedicated Remote BIM Coordinator" | Hero only — subheadline and all sections are TODO | **Full rewrite** | Currently stub. Build out using architectural-designer template: overview, why remote works, tools, options, sample outputs, proof. |
| `src/pages/roles/brand-visual-designer/index.astro` | "Dedicated Remote Brand / Visual Designer" | Full template: hero, at-a-glance, overview, why remote works, options (Dedicated/PM-led), sample outputs (TODO), proof, CTAs | **Light polish** | Good content. Update template, fix sample output placeholders. |
| `src/pages/roles/content-marketer/index.astro` | "Dedicated Remote Content Marketer" | Hero only — subheadline and sections are TODO | **Full rewrite** | Stub. Build out per architectural-designer template. Meta description TODO. |
| `src/pages/roles/ppc-manager/index.astro` | "Dedicated Remote PPC Manager" | Hero only — subheadline and sections are TODO | **Full rewrite** | Stub. Build out per architectural-designer template. Meta description TODO. |
| `src/pages/roles/revit-drafter/index.astro` | "Dedicated Remote Revit Drafter" | Hero + at-a-glance complete; role overview has TODO for expansion | **Light polish** | Complete role overview, add why remote works, options, sample outputs per template. |
| `src/pages/roles/seo-specialist/index.astro` | "Dedicated Remote SEO Specialist" | Full template: hero, at-a-glance, overview, why remote works, options, sample outputs (TODO), proof, CTAs | **Light polish** | Good content. Fix sample output placeholders. |
| `src/pages/roles/ui-ux-designer/index.astro` | "Dedicated Remote UI/UX Designer" | Hero only — subheadline and sections are TODO | **Full rewrite** | Stub. Build out per architectural-designer template. Meta description TODO. |
| `src/pages/services/aec.astro` | "BIM & Technical Design Capacity that Fits Your Team" | Hero, who it’s for, how engagements work, capabilities, typical roles, tools/workflows, Why LatAm Scalers, related services, FAQ | **Replace** | Will be superseded by new `/aec/` category hub. Redirect or deprecate when new structure launches. |
| `src/pages/services/design.astro` | "Design Capacity, Without the Overhead" | Hero, who it’s for, staff aug vs managed subscription, example plans, capabilities, typical roles, onboarding steps, Why LatAm Scalers, related services, FAQ | **Replace** | Will be superseded by new `/design/` hub. Note: design service uses "credit packs" language — align with new solution messaging. |
| `src/pages/services/marketing.astro` | "Top-tier Marketing Talent, on your team." | Hero, who it’s for, FT/PT vs hourly blocks, typical roles, what to expect, Why LatAm Scalers, related services, FAQ | **Replace** | Will be superseded by new `/marketing/` hub. |
| `src/pages/terms/index.astro` | "Terms & Conditions" | Section structure with TODO placeholders (Overview, Services, Payments, Confidentiality, Acceptable use, Disclaimers, Termination, Governing law) | **Light polish** | Replace TODOs with counsel-approved content. Update branding. |
| `src/pages/privacy/index.astro` | "Privacy Policy" | Section structure with TODO placeholders (Information, Use, Legal bases, Sharing, Retention, Security, Rights, Contact) | **Light polish** | Replace TODOs with counsel-approved content. Update branding. |
| `src/pages/cookies/index.astro` | "Cookie Policy" | Section structure with TODO placeholders (What cookies are, How we use, Managing preferences, Cookie list) | **Light polish** | Replace TODOs with counsel-approved content. Update branding. |

---

## Key Decisions

### Overall approach

1. **Homepage** — Full rewrite per Strategy S7 (12 sections). The current page already has the right section count and structure; the rewrite should align messaging, ordering, and CTAs to the new strategy while preserving strong elements (vetting funnel, tier pathways, problem stats).

2. **Solution pages** — Full rewrite with new URL structure: `/aec/`, `/design/`, `/marketing/`. All current solution content under `/solutions/aec-talent/`, `/solutions/creatives-design/`, `/solutions/marketing-talent/` will be migrated or replaced. Update all internal links site-wide when the new structure is live.

3. **How It Works** — Light polish only. The branching process (Individuals / Teams / PM-led) is strong. Replace TODO testimonials or remove the Proof section; fix links to solution URLs when the new structure is in place.

4. **Roles directory** — Moderate rewrite. Add category filters and richer role cards. The current 8-role grid is usable but minimal; enrichment will improve UX and lead capture.

5. **Role pages** — Template-driven approach: role pages with full content (Architectural Designer, Brand Visual Designer, SEO Specialist, Revit Drafter) get Light polish and template updates. Stub pages (BIM Coordinator, Content Marketer, PPC Manager, UI/UX Designer) need Full rewrites using the same template and role-specific content.

6. **BIM Coordinator** — Explicitly flagged for Full rewrite; it is currently the most minimal role page.

7. **Legal pages** — Light polish: replace TODO placeholders with final, counsel-approved text and ensure LatAm Scalers branding.

8. **Services pages** — Deprecate or replace. `/services/aec`, `/services/design`, `/services/marketing` will be superseded by the new category hubs. Plan redirects from old `/services/*` URLs to the new `/aec/`, `/design/`, `/marketing/` paths.

### Cross-cutting issues

- **TODO placeholders** — Many pages have "TODO testimonial" or "TODO: Add…" blocks. Prioritize: Proof/testimonials, sample outputs on role pages, Design Brief Kit, ROI/savings sections.
- **Broken discipline links** — AEC index links several disciplines to `/roles/` instead of specific role pages; fix when role pages are complete.
- **Character encoding** — Services pages contain mojibake (`â€"` instead of `—`); fix during replacement.

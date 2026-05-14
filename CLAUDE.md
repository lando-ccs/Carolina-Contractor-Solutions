# Carolina Contractor Solutions — Website Repo

The marketing website for carolinacontractorsolutions.com. Multi-page Next.js application deployed to Vercel via GitHub.

## Stack (as of May 13, 2026)
- **Framework:** Next.js 14.2.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.3 + custom CSS in `src/app/globals.css` (semantic class names like `hero`, `btn`, `service-card`)
- **Forms:** Server-side email via `nodemailer` (`src/app/api/contact/route.ts`)
- **Hosting:** Vercel, auto-deployed from GitHub main branch

## Source of Truth for Offers, Pricing, and Brand
Always reference these Obsidian docs before changing anything customer-facing:
- `/Users/jilmermonzonsolarez/Downloads/CCS/Obsidian Vault/CCS Brain/Business/Offers/CCS Service Offerings — Final.md` — offers, pricing, deliverables (authoritative)
- `/Users/jilmermonzonsolarez/Downloads/CCS/Obsidian Vault/CCS Brain/Business/Website/Website Update Plan.md` — the task-by-task plan for site updates
- `/Users/jilmermonzonsolarez/Downloads/CCS/Obsidian Vault/CCS Brain/Business/Website/Mobile Spacing Rules.md` — spacing guidelines

## Current Offer Structure (as of May 13, 2026)
- **Build Only** — $500–$2,000 one-time (needs new page at `/services/build-only`)
- **Web Care Plan** — $500/mo + build fee (`/services/web-care-plan`)
- **Market Domination** — $5,000/mo + ad spend (`/services/market-domination`)

The **Booked Solid System** tier has been scrapped. All references should be removed from the codebase and `/services/booked-solid` should 301 to `/services/market-domination`.

## File Structure
```
src/
├── app/
│   ├── layout.tsx                          Root layout + metadata
│   ├── page.tsx                            Homepage
│   ├── globals.css                         All shared styles (~791 lines)
│   ├── api/
│   │   └── contact/route.ts                Email handler (nodemailer + SMTP)
│   ├── contact/page.tsx                    Contact form + "What to Expect"
│   ├── portfolio/page.tsx
│   ├── services/
│   │   ├── page.tsx                        Tier comparison landing
│   │   ├── web-care-plan/page.tsx
│   │   ├── market-domination/page.tsx
│   │   └── booked-solid/page.tsx           ← REMOVE / REDIRECT
│   └── who-we-serve/
│       ├── page.tsx
│       └── [roofers|hvac|landscapers|cleaning|plumbing|pressure-washing|general-contractors]/page.tsx
│                                            ↑ general-contractors → rename to concrete-hardscaping
└── components/
    ├── Nav.tsx
    ├── Footer.tsx
    ├── SectionLabel.tsx
    └── ScrollReveal.tsx
```

## Design Tokens (defined in `globals.css`)
```css
--navy:       #002868
--navy-dark:  #001a45
--navy-light: #003580
--red:        #E31212
--red-dark:   #b80e0e
--bg:         #F7F8FA
--bg2:        #EDEEF2
--text:       #0D1B2A
--text2:      #4A5568
--font-h:     'Anton', sans-serif  /* headings */
--font-b:     'DM Sans', sans-serif /* body */
```

Do NOT change these without permission.

## CSS Architecture
- Most styling lives in `globals.css` using semantic class names (`hero`, `btn`, `service-card`, `ticker-item`, etc.)
- Tailwind utilities ARE available but used sparingly
- When adding new sections or components, prefer extending `globals.css` with new semantic classes over piling utilities inline
- This keeps the codebase consistent with the existing pattern

## Asset Paths
- Images and video live in `public/assets/` (lowercase)
- Reference as `src="/assets/filename.ext"` (leading slash — Next.js public folder convention)
- Use `.webp` for photos, `.mp4` for video
- Do NOT use full URLs like `https://www.carolinacontractorsolutions.com/assets/...` — relative paths only

## Brand Voice
Casual, confident, locally grounded. No corporate jargon.

**Never use:** "high-quality," "top-notch," "cutting-edge," "solutions," generic agency language.

**Tone references:** Hormozi + Frisella + Daniel Dalen. Direct, outcome-focused, no fluff. Sound like a local expert, not an agency.

When picking between copy options: tight always wins. Confident framing over sympathy. Human truth over process.

## Contact Info
- Phone: (843) 742-9776
- Email: info@carolinacontractorsolutions.com (business email pending)
- Serving: NC & SC — Myrtle Beach to Charlotte to Asheville

## Hard Rules
- Do NOT embed Calendly. Contact flow is form → manual outreach → schedule call.
- Do NOT use GHL (GoHighLevel). Any "automation" language on the site should stay vendor-agnostic ("automated follow-up") — don't name GHL.
- Do NOT mention the "Booked Solid System" tier — it's been scrapped.
- Do NOT promise services CCS isn't actively delivering (e.g. don't pitch a "Free 60-Day Ad Campaign" — Lando hasn't run ad campaigns yet).
- Do NOT remove or alter the design tokens in `globals.css`.
- Do NOT add a public Stripe checkout button anywhere. Every deal goes through a discovery call first; Stripe links are sent manually after qualification.
- One contractor per trade per market exclusivity claim only applies to Market Domination — never Web Care or Build Only.

## Open TODOs (as of May 13, 2026)

### Service tier cleanup
- [ ] Delete or redirect `src/app/services/booked-solid/page.tsx`
- [ ] Create `src/app/services/build-only/page.tsx` (mirror Web Care structure, one-time pricing only)
- [ ] Remove all "Booked Solid" references from: `layout.tsx`, `page.tsx`, `services/page.tsx`, `contact/page.tsx`, `api/contact/route.ts`, `who-we-serve/*` pages, `Nav.tsx`, `Footer.tsx`
- [ ] Remove GHL/GoHighLevel mentions from: `page.tsx`, `services/market-domination/page.tsx`, `who-we-serve/cleaning/page.tsx`
- [ ] Remove "Free 60-Day Ad Campaign" promo from: `page.tsx`, `services/web-care-plan/page.tsx`, `services/page.tsx`
- [ ] Update Web Care page: "Up to 5 update requests per month" (not 3–5)
- [ ] Update Market Domination page: replace GHL with light Zapier automation, content shoot count to 3/mo, drop "quarterly hero video", add no-hostage guarantee
- [ ] Add `'build-only'` to contact form service dropdown (`contact/page.tsx`) and to `serviceLabel` in `api/contact/route.ts`
- [ ] Update `layout.tsx` metadata description (currently mentions "Booked Solid System")

### Navigation & layout cleanup
- [ ] Rename `src/app/who-we-serve/general-contractors/` → `src/app/who-we-serve/concrete-hardscaping/` + add 301 redirect
- [ ] In `Nav.tsx`, rename "Resources" link label to "Contact" (href stays `/contact`)
- [ ] In `Footer.tsx`, convert the 6 "Serving" city links to plain text (drop the anchor tags)
- [ ] In `page.tsx` (homepage inline form), add hidden `service="not-sure"` field; add "Visit our contact page →" link below the form
- [ ] In `Nav.tsx` trades dropdown, add divider + "View All Trades →" link to `/who-we-serve`
- [ ] Normalize asset paths: convert any absolute URLs (`https://www.carolinacontractorsolutions.com/assets/...`) to relative (`/assets/...`)

### Verification & deployment
- [ ] Verify `CONTACT_TO` env var on Vercel points to live email
- [ ] Test full contact form flow (fill → submit → email received)
- [ ] Test on real phone for mobile spacing
- [ ] Manual QA on staging deployment

### Backlog (when ready)
- [ ] Carolina Beach Landscaping & CourteSea portfolio cards have `href="#"` — update when sites go live
- [ ] Social media links in `Nav.tsx` / `Footer.tsx` are placeholder (`#`) — update when profiles are ready
- [ ] Build dedicated city pages (`/serving/myrtle-beach`, etc.) for local SEO — deferred until content is ready

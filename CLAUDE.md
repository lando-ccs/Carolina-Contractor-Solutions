# Carolina Contractor Solutions — Homepage

## Project Overview
CCS homepage for carolinacontractorsolutions.com. Static HTML/CSS/JS site. No framework, no build step. Deployed to Vercel via GitHub.

## Stack
- Plain HTML + CSS + JS (single file: index.html)
- Assets in /assets/ (all lowercase — critical for Vercel's Linux filesystem)
- Google Fonts: Anton (headings) + DM Sans (body)
- Deployed: GitHub → Vercel

## Design Tokens (do not change without permission)
```
--navy:       #002868
--navy-dark:  #001a45
--navy-light: #003580
--red:        #E31212
--red-dark:   #b80e0e
--bg:         #F7F8FA
--bg2:        #EDEEF2
--text:       #0D1B2A
--text2:      #4A5568
--font-h:     'Anton', sans-serif
--font-b:     'DM Sans', sans-serif
```

## Page Sections (in order)
1. Nav — fixed, transparent → solid on scroll, dropdown menus, mobile hamburger
2. Hero — headline, subtext, CTA buttons, device mockup image
3. Ticker — scrolling marquee, navy background
4. Why CCS — 4-column industry cards (Roofers, HVAC, Concrete, Landscapers)
5. Services — 3 service cards + full-service banner
6. How It Works — 3 steps left, promo card right (sticky)
7. Portfolio — browser mockup cards + photo ticker
8. Testimonials — single testimonial card, centered
9. Contact — left info + right form card, navy background
10. CTA Banner — full-width, navy-dark
11. Footer — 4-column grid

## Brand Voice
Casual, confident, locally grounded. No corporate jargon.
Never use: "high-quality", "top-notch", "cutting-edge", "solutions"
Always sound like a local expert, not an agency.

## Asset Paths
All images/video live in /assets/ (lowercase). Reference as: src="assets/filename.ext"
Do NOT use /assets/ (no leading slash) — paths are relative.

## Key Rules
- Do NOT add frameworks, npm packages, or build tools — this is intentional plain HTML
- Do NOT change design tokens without being asked
- Do NOT embed Calendly — contact flow is form → manual Calendly send
- Keep all CSS in the <style> block in index.html
- Keep all JS in the <script> block at the bottom of index.html
- Test mobile breakpoints: 600px and 900px are the key ones

## Contact Info
- Phone: (843) 742-9776
- Email: info@carolinacontractorsolutions.com (business email pending)
- Serving: NC & SC — Myrtle Beach to Charlotte

## Known TODOs
- [ ] Testimonials section label says "Our Services" — should say "Client Reviews" or similar
- [ ] Carolina Beach Landscaping & CourteSea portfolio cards have href="#" — update when sites go live
- [ ] Social media links in nav/footer are placeholder (#) — update when profiles are ready
- [ ] Form needs to connect to GHL or email (currently submit does nothing)
- [ ] heromockups.webp — confirm this is the final hero image

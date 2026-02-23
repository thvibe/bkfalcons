# Brooklyn Falcons Website Redesign — Project Brief

> **CLAUDE.md** — This file provides context for Claude Code to understand the project history, design decisions, and build requirements. All decisions documented here are research-backed and stakeholder-validated.

---

## Organization Overview

**Brooklyn Falcons** is a 501(c)(3) nonprofit youth sports organization based in Brooklyn, NY. It operates as **two entities under one brand**:

1. **BK Falcons (Nonprofit)** — Community programs: recreational baseball, recreational basketball, tutoring, clinics, summer camps, and private lessons. Serves ages 5–14+.
2. **FTB Falcons (Travel Baseball)** — Competitive travel ball with tournament play, PBR showcases, and college/HS prep placement pipeline.

The current site is on Wix: https://www.brooklynfalcons.com/

**Tagline:** "Nothing is Given!!! Compete and Earn!!!"

---

## Research Foundation

All design decisions are grounded in **primary user research** (January 2026):
- **22 respondents** across 3 segments: Parents/Guardians (13), Coaches (5), Players ages 12–16 (4)
- Full findings documented in `design/BK_Falcons_UX_Research_Findings.docx`
- User personas documented in `design/BK_Falcons_User_Personas.docx`

### Key Research Stats
| Metric | Value |
|--------|-------|
| Mobile-first users | 100% |
| Prefer team apps (TeamSnap/GameChanger) for comms | 92% |
| First-time visitors (parents) | 31% |
| Average design rating of current site | 3.2/5 |

### Critical Insight
The website's role is **NOT** day-to-day team communication (that's handled by GameChanger, TeamSnap, Heja). The site should be a **front door and credibility engine**: where prospective families discover/evaluate the program, and existing members access store, media, news, and reference info.

---

## User Personas

Five research-backed personas drive all design decisions:

| Persona | Archetype | Journey | Primary Need |
|---------|-----------|---------|--------------|
| **Maria** | The Prospective Parent | Entry point | Evaluate & register |
| **David** | The Travel Ball Parent | Travel Ball | Credibility & results |
| **Tanya** | The Active Member Parent | Both | Quick reference & store |
| **Jaylen** | The Player (12–16) | Both | Media & team identity |
| **Coach Ray** | The Coach | Both (admin) | Post updates & info |

**Maria** is the most important persona — she represents the growth pipeline. If the homepage doesn't answer her questions in 5–10 seconds, she leaves.

For players under 12, parents (Maria/Tanya) are the proxy website users.

---

## Design System

Full design system is in `design/BK_Falcons_Design_System.html` (82 CSS tokens).

### Color Palette — "Falcon Blue"

```css
:root {
  /* Falcon Blue scale */
  --falcon-50:  #EBF5FB;
  --falcon-100: #D0E9F6;
  --falcon-200: #A3D3ED;  /* PRIMARY — buttons, CTAs, active states */
  --falcon-300: #74BDE4;
  --falcon-400: #4EA0D0;
  --falcon-500: #3A8BBD;
  --falcon-600: #2E6F97;
  --falcon-700: #235472;
  --falcon-800: #193A4E;
  --falcon-900: #0F212D;

  /* Dark neutrals */
  --black: #212529;
  --d1: #343A40;  /* Card backgrounds, dark sections */
  --d2: #495057;
  --d3: #6C757D;

  /* Light neutrals */
  --l4: #E9ECEF;
  --l5: #F1F3F5;
  --l6: #F8F9FA;
}
```

**Primary brand color:** `falcon-200` (#A3D3ED) — validated for WCAG AA contrast against dark backgrounds. Changed from falcon-400 during design phase.

### Typography

| Role | Font | Usage |
|------|------|-------|
| **Headings** | Plus Jakarta Sans (700–800) | Page titles, section headers, CTAs |
| **Body** | DM Sans (400–600) | Paragraphs, descriptions, form labels |
| **Mono/Labels** | JetBrains Mono (400–600) | Wireframe annotations (dev only) |

### Component Patterns
- **Buttons:** `.btn-primary` (falcon-200 bg, falcon-900 text), `.btn-secondary` (outlined, falcon-200 border)
- **Cards:** Dark background (--d1), rounded corners (8px), subtle shadows
- **Badges/Tags:** falcon-200 bg, small rounded pills
- **Photo placeholders:** Dashed border, falcon-50 bg, icon centered

---

## Information Architecture

### Sitemap (7 pages wireframed)

```
Homepage
├── Community Programs (rec baseball, basketball, tutoring, clinics, camps, lessons)
├── Travel Ball (FTB Falcons — tryouts, teams by age group, showcases)
│   └── Team Detail Page (e.g., 10U — roster, schedule, calendar sync, video)
├── Alumni & Success (college commitments gallery, HS prep commitments, stats bar)
├── News/Newsletter (current edition + archive)
└── About / Contact
```

### Homepage Block Structure (8 blocks, in order)

| Block | Section | Purpose |
|-------|---------|---------|
| 1 | **Hero + Fork** | Value prop + two-journey split (Community Programs / Travel Ball) |
| 2 | **Alumni Spotlight** | Credibility — latest college/HS commit highlight card |
| 3 | **Tryout / Event CTA** | Seasonal action — next tryout or registration |
| 4 | **Latest News** | 2–3 recent news cards from blog |
| 5 | **Follow Us** | Prominent Instagram + Facebook branded buttons |
| 6 | **Mission** | 501(c)(3) mission statement + community impact |
| 7 | **Merch / Store** | Store banner + "Shop Now" CTA |
| 8 | **Sponsors** | Sponsor logos + "Become a Sponsor" CTA with inquiry form link |

---

## Social Media Strategy

- **Active platforms:** Instagram (@bkfalcons) and Facebook (/Bkfalcons/) ONLY
- **Removed:** YouTube and Twitter/X (removed from all 7 pages)
- Social media drives traffic TO the site, not embedded feeds FROM social
- Footer icons: 32px, FB + IG only
- Homepage Block 5: Branded "Follow Us on Instagram" / "Follow Us on Facebook" buttons

---

## Key Integrations

### TeamSnap / GameChanger
- **Approach:** Hybrid — the website links OUT to these tools, does not replicate them
- **Calendar:** Google Calendar embed + iCal "SYNC ALL" button on team detail pages
- No TeamSnap widget embed (their embed tools don't support external websites well)

### Merch Store
- External store linked via "Shop Now" CTA
- Banner image available: `assets/IMG_1610.jpeg` (Falcons Store banner, 560×332px)

---

## Alumni Page — Special Sections

### College Commitments Gallery
- Card grid layout with player photo placeholder, name, school logo, year
- Currently placeholder content

### HS Prep / Boarding School Commitments
- Added below college commitments
- 2×2 card grid matching college design pattern
- Stats bar: "50+ College Commits | 30+ HS Placements | 3 Draft Picks"

---

## Sponsor Strategy

- Sponsor logos displayed in a clean horizontal row (not scattered banner ads — research showed ads were "annoying")
- "Become a Sponsor" CTA with link to inquiry form
- Dedicated, designed section — not interruptive ad placements

---

## Technical Decisions (To Be Made)

### Platform
The current site is Wix. Options being evaluated:
- **Wix (rebuild)** — Familiar to org, no migration needed
- **Next.js / React** — Full control, performance, modern stack
- **Other** — TBD based on org's technical capacity and budget

### Build Approach
- **Mobile-first** — 100% of users are on smartphones
- **Sticky navigation** — Critical fix from current site (nav disappears on scroll)
- **Touch-friendly tap targets** — Min 44px
- **Fast load times** — Optimize for cellular connections

---

## Files in This Project

```
falcons-website/
├── CLAUDE.md                          ← You are here
├── design/
│   ├── wireframes.html                ← Themed mobile wireframes (7 pages, 78KB)
│   ├── design-system.html             ← Full design system (82 tokens, 59KB)
│   ├── BK_Falcons_UX_Research_Findings.docx
│   ├── BK_Falcons_User_Personas.docx
│   └── assets/
│       └── IMG_1610.jpeg              ← Falcons Store merch banner
├── src/                               ← Build output goes here
└── docs/
    └── competitive-analysis.docx      ← 4-org competitive analysis
```

---

## Competitive Landscape

Analyzed competitors (full report in `docs/competitive-analysis.docx`):
- **EEP Sports** — Bandits travel baseball
- **MVP Baseball** — Primary benchmark for travel ball presentation
- **Team Francisco Baseball Academy**
- **Beastmode Youth Sports**

**Key differentiators for Falcons:** 501(c)(3) nonprofit status, dual community/competitive model, academic component (tutoring), college + HS prep placement pipeline.

---

## Design Principles (from research)

1. **Clarity over complexity** — First-time visitors must understand what the org is within 5 seconds
2. **Two journeys, one brand** — Community programs and travel ball must be clearly separated but connected
3. **Mobile-first, always** — Design for phone screens first, scale up
4. **The site is a front door, not an operations hub** — Link to team apps, don't replicate them
5. **Media-rich** — Videos, photos, highlights drive engagement for players AND serve as marketing for prospects
6. **Sponsors deserve design, not disruption** — Dedicated sections, not scattered banner ads

---

## What's Next

Priority build tasks:
1. Set up project scaffold (framework TBD)
2. Build homepage with 8-block structure
3. Build community programs landing page
4. Build travel ball landing page with team detail template
5. Build alumni page with college + HS commitments
6. Implement global nav (sticky, mobile hamburger, FB/IG icons)
7. Implement footer (social icons 32px, sponsor logos, legal)
8. Content population and image integration

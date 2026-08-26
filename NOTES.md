# Project Notes

This file tracks changes made to this portfolio site, in order, so future sessions have context.

## 2026-08-25 — Added phase/challenge pages
Created 6 new pages (marketplace.html, fashion-app.html, creative-platform.html, lafayette.html, lsu.html, tulane.html) matching the voty.html template. Made the "Founder & CEO, VÔTY" and "Venture Challenges" headings plain text again (not clickable) since the individual phase/challenge list items are now the clickable links instead. Removed "[placeholder]" text from those list items.

## 2026-08-25 — Added shared dark/light theme system
Created assets/css/theme.css (CSS custom properties for dark/light palettes using `html[data-theme]`, Fraunces/Inter font assignments, and a `.theme-toggle` switch) and assets/js/theme-toggle.js (reads/writes the theme choice to localStorage, defaults to dark, injects the toggle button into the page). Wired both into every page (index.html, voty.html, marketplace.html, fashion-app.html, creative-platform.html, venture-challenges.html, lafayette.html, lsu.html, tulane.html, affair.html) via Google Fonts links + theme.css in `<head>` and theme-toggle.js before `</body>`.

## 2026-08-25 — Rebuilt voty/marketplace/fashion-app with editorial hero layout
Replaced the old `.project-container`/`.project-back-link`/`.project-gallery` markup in voty.html, marketplace.html, and fashion-app.html with a new "Project Story" layout: a full-bleed 640px hero image with gradient overlay and large italic Fraunces title, a horizontally scrollable filmstrip gallery of numbered thumbnails, and a two-column body (story text + accent-bordered key-stat callout). Head links (theme.css, Google Fonts) and the script tags before `</body>` (including theme-toggle.js) were left untouched — only the visible body content changed.

## 2026-08-25 — Added RSN Media and real estate CRM project sections
Added two new work-item articles to the Experience section (`#two`) in index.html, after "The Affair: VôTY Fashion Party": "Owner, RSN Media" (linking to rsn-media.html) and "Jimsons Real Estate Analysis CRM" (linking to real-estate-crm.html, story marked "coming soon"). Created rsn-media.html and real-estate-crm.html using the same editorial hero-layout template as voty.html (identical head, hero image/title/subtitle, filmstrip gallery, two-column body). Both pages currently reuse images/thumbs/01-04.jpg as placeholders until real project images are available.

## 2026-08-26 — Rebuilt creative-platform/venture-challenges/lafayette with editorial hero layout
Replaced the remaining old `.project-container`/`.project-back-link`/`.project-gallery` markup — in creative-platform.html, venture-challenges.html, and lafayette.html — with the same "Project Story" layout used for voty/marketplace/fashion-app/rsn-media/real-estate-crm: full-bleed 640px hero image with gradient overlay and large italic Fraunces title/subtitle, filmstrip gallery of numbered thumbnails, two-column body (story text + accent-bordered key-stat callout). Subtitles: "Founder & CEO · VÔTY · 2025–2026" (creative-platform), "Founder & CEO · VÔTY" (venture-challenges), "Venture Challenge · 2024" (lafayette). Head links and closing script tags were left untouched. All nine project pages now share the same layout.

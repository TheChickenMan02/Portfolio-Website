# Project Notes

This file tracks changes made to this portfolio site, in order, so future sessions have context.

## 2026-08-25 — Added phase/challenge pages
Created 6 new pages (marketplace.html, fashion-app.html, creative-platform.html, lafayette.html, lsu.html, tulane.html) matching the voty.html template. Made the "Founder & CEO, VÔTY" and "Venture Challenges" headings plain text again (not clickable) since the individual phase/challenge list items are now the clickable links instead. Removed "[placeholder]" text from those list items.

## 2026-08-25 — Added shared dark/light theme system
Created assets/css/theme.css (CSS custom properties for dark/light palettes using `html[data-theme]`, Fraunces/Inter font assignments, and a `.theme-toggle` switch) and assets/js/theme-toggle.js (reads/writes the theme choice to localStorage, defaults to dark, injects the toggle button into the page). Wired both into every page (index.html, voty.html, marketplace.html, fashion-app.html, creative-platform.html, venture-challenges.html, lafayette.html, lsu.html, tulane.html, affair.html) via Google Fonts links + theme.css in `<head>` and theme-toggle.js before `</body>`.

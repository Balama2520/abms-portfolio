# Changelog

All notable changes to the ABMVSC Portfolio Template are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [2.0.0] — 2026-11-02

### Added
- `config.js` — Single-file configuration system. Users now edit ONE file only.
- Dynamic chatbot brain built from `PORTFOLIO_CONFIG` — no hardcoded data in engine.
- Auto-generated chatbot responses from skills, projects, experience, research arrays.
- `LICENSE` — MIT open-source licence added.
- `SETUP.md` — Quick-start guide for first-time users.
- `CONTRIBUTING.md` — Contribution guidelines.
- `CHANGELOG.md` — This file.
- `.gitignore` — Ignores backup folders, OS files, `.env`, `node_modules`.
- Full favicon package: ICO, PNG 16/32, Apple Touch, Android Chrome 192/512, PWA manifest.
- `site.webmanifest` — PWA-ready with ABMVSC branding and theme colour.

### Changed
- `README.md` — Completely rewritten as a professional agency product page.
- `script.js` — Chatbot brain now reads from `window.PORTFOLIO_CONFIG`.
- `style.css` — Fixed orphan brace at line 1367, braces now perfectly balanced.
- Both HTML files now include `<script src="config.js">` before `script.js`.
- Removed duplicate `botInfo` intent rule from `intentRules`.

### Fixed
- Broken favicon references (apple-touch-icon.png, favicon-32x32.png, site.webmanifest) removed from both HTML files.
- CSS brace count balanced (238 open = 238 close).

---

## [1.0.0] — 2026-11-01

### Added
- Initial production release.
- Dual-page system: `index.html` (personal portfolio) + `studio.html` (ABMVSC Studio).
- AI Chatbot Engine with streaming, latency badge, telemetry, markdown rendering.
- 34 intent rules covering skills, projects, research, experience, system design, and more.
- Full SVG brand asset system: primary logo, white logo, mono logo, symbol, avatar.
- Scroll-spy navigation, smooth scrolling, scroll-reveal animations.
- Resume PDF modal with preview and download.
- SEO: Open Graph, Twitter Card, JSON-LD structured data, sitemap.xml, robots.txt.
- Google Search Console verification.
- Netlify-ready deployment (no build step required).


# ROBSSN Website

Production website for **ROBSSN — South Africa's Commercial Mobility Marketplace**.

## Architecture

- Dependency-free HTML, CSS and JavaScript
- Node.js build, validation and local preview scripts
- GitHub Pages deployment through GitHub Actions
- Multi-page SEO architecture with canonical URLs, Open Graph, X/Twitter metadata, JSON-LD, sitemap and robots directives
- Official Instagram profile linked site-wide: https://www.instagram.com/robssn.commercial?igsh=MTM2OW50b202M2p3ag%3D%3D&utm_source=qr
- Formspree-compatible lead funnel with attribution fields and POPIA-aware consent
- Clay field mapping for optional enrichment and routing

## Local development

```bash
npm ci
npm run check
npm run dev
```

Open `http://localhost:4173`.

## Build

```bash
npm run build
npm run preview
```

The deployable site is written to `dist/`.

## Formspree activation

1. Create a Formspree form and set its notification recipient to `sales@skunkworks.africa`.
2. In GitHub, create an Actions variable named `FORMSPREE_ENDPOINT` with the full value `https://formspree.io/f/<form-id>`.
3. The deployment workflow injects the endpoint into `dist/assets/js/config.js`.
4. Configure Formspree spam protection, allowed domains and autoresponse as required.

Without the variable, the site builds with a safe placeholder and shows a configuration message instead of transmitting the form.

## Pages

- `/` — lead funnel landing page
- `/marketplace.html` — buyer and sourcing overview
- `/sell.html` — seller, dealer and fleet inventory path
- `/partners.html` — partner onboarding
- `/about.html` — company positioning
- `/contact.html` — lead form and contact route
- `/privacy.html`, `/terms.html`, `/thank-you.html`, `/404.html`

## Deployment

The `deploy-pages.yml` workflow builds and deploys `dist/` to GitHub Pages. Configure the repository Pages source as **GitHub Actions** and ensure the DNS records for `robssn.com` point to GitHub Pages.

## Clay

See `docs/CLAY-INTEGRATION.md`. The connected Clay workspace currently has no custom subroutines, so the repository documents a no-code Formspree-to-Clay integration pattern rather than assuming an unavailable function.

## Publish the prepared repository

Windows PowerShell:

```powershell
./scripts/publish.ps1
```

macOS/Linux:

```bash
./scripts/publish.sh
```

Both scripts clone `robssn/www`, create `agent/production-lead-funnel`, validate the project, push the branch and open a draft pull request.

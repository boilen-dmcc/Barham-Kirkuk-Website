# Barham Kirkuk — Corporate Website

A premium, bilingual (English / Arabic) static corporate website for **Barham Kirkuk**,
an Oil & Gas / Energy / Engineering / Industrial company based in Kirkuk, Iraq.

Built as plain HTML, CSS and JavaScript — **no build step, no backend, no framework**.
Deploys directly to GitHub Pages (or any static host).

---

## 1. Project structure

```
/index.html            Homepage
/pages/                About, Services, Projects, Industries, HSE, Contact, Privacy, Terms
/assets/images/         Logo mark, favicon, OG image, hero fallback image
/assets/videos/         Hero background video (add hero.mp4 here — see below)
/assets/icons/          (reserved for any extra icon assets)
/css/styles.css         Full design system (brand colors, layout, components, RTL rules)
/js/main.js             Navigation, language switching, animations, dynamic content rendering
/data/site-data.js      ⭐ SINGLE SOURCE OF CONTENT — edit this file to update the whole site
/robots.txt, /sitemap.xml, /CNAME, /.nojekyll
```

## 2. Editing content (do this first)

Nearly everything on the site — company info, contact details, social links, services,
projects, statistics, navigation labels, and both English and Arabic copy — lives in:

```
/data/site-data.js
```

Look for the comments:

```js
// EDIT COMPANY INFORMATION HERE
// EDIT SEO INFORMATION HERE
```

and the `en: { ... }` / `ar: { ... }` blocks further down. Edit the values, save, and every
page updates automatically (services cards, project cards, industries grid, stats, footer,
contact info, etc. are all rendered from this file by `js/main.js`).

No JavaScript knowledge is required beyond replacing text between quotes.

### Placeholder content
All company facts (years of experience, project count, certifications, client names, etc.)
are **placeholders** and are clearly marked. Nothing has been invented as a real claim —
replace these with verified information before launch.

## 3. Adding real photography & video

The hero section and several backgrounds currently use CSS/SVG-generated placeholder
"industrial pattern" graphics (dark charcoal + red, grid lines) instead of stock photos —
this avoids using unlicensed or low-quality images. To swap in real photography:

- Hero video: add an optimized, muted, web-ready MP4 at `/assets/videos/hero.mp4`
  (the `<video>` tag in `index.html` already points here).
- Hero fallback image (mobile / slow connections / video failure): replace
  `/assets/images/hero-fallback.jpg` with a high-quality industrial photo (1920×1080+).
- Section backgrounds: anywhere you see `<div class="industrial-pattern"></div>` or
  `<div class="frame">`, you can replace the pattern div with an `<img>` tag pointing to
  a real photo — the surrounding layout (aspect ratio, overlay, accent line) will still work.

## 4. The logo

`/assets/images/bk-mark.svg` is a **vector recreation** of the Barham Kirkuk "BK" monogram
(red gradient "B" + red/charcoal "K" diagonal), built to match the supplied logo's colors
and composition as closely as possible from the reference image. If you have the original
master logo file (AI/EPS/PDF/high-res PNG), replace this SVG (and the generated
`favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`, `og-image.png`
in the same folder) with exports from the official master file for pixel-perfect brand
accuracy.

## 5. Bilingual / RTL

- English is the default language.
- The `EN | AR` switcher in the navigation toggles language sitewide (saved in the
  visitor's browser so it persists between pages).
- Selecting Arabic sets `dir="rtl"` on `<html>` and switches the font stack to Cairo;
  all layout components (nav, grids, cards, forms) have RTL-aware CSS via logical
  properties and `html[dir="rtl"]` overrides in `css/styles.css`.
- Arabic copy is professional placeholder translation — have it reviewed before launch.

## 6. Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `barham-kirkuk-website`) and push this entire
   folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-org>/<your-repo>.git
   git push -u origin main
   ```
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then **Save**.
5. GitHub will publish the site at `https://<your-org>.github.io/<your-repo>/` within a
   few minutes.

### Using the custom domain (barhamkirkuk.com)
This repo already includes a `CNAME` file containing `barhamkirkuk.com`, which is what
GitHub Pages needs to serve the custom domain.
1. In **Settings → Pages → Custom domain**, enter `barhamkirkuk.com` and save.
2. At your domain registrar / DNS provider, point the domain at GitHub Pages:
   - `A` records for the apex domain (`barhamkirkuk.com`) → GitHub Pages IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www.barhamkirkuk.com` → `<your-org>.github.io`
3. Wait for DNS to propagate, then enable **Enforce HTTPS** in the Pages settings.

The `.nojekyll` file is included so GitHub Pages serves the site as-is (no Jekyll
processing), which is required because folder/file names like `assets` would otherwise
be ignored by Jekyll's defaults.

No build tools, PHP, database, or server runtime are required at any point.

## 7. Contact form

The site has no backend, so the contact form (`/pages/contact.html`) currently opens the
visitor's email client via a `mailto:` link pre-filled with their message
(handled in `js/main.js`, function `initContactForm`). To use a real form backend instead
(e.g. Formspree, Getform, Web3Forms), replace that function's `mailto:` redirect with a
`fetch()` POST to your chosen form endpoint — the field names (`name`, `company`, `email`,
`phone`, `subject`, `message`) already match a typical form-service payload.

## 8. SEO

- Per-page `<title>`, meta description, canonical URL, and Open Graph / Twitter tags are
  set in the `<head>` of each HTML file — edit directly there for page-specific SEO copy,
  or edit `SEO_DEFAULTS` in `data/site-data.js` for the sitewide fallback description.
- `robots.txt` and `sitemap.xml` are included at the project root.
- Update `sitemap.xml` if you add new pages.

## 9. Accessibility & performance notes

- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `footer`) with a
  "Skip to content" link and visible focus states.
- All animations respect `prefers-reduced-motion`.
- No external JS frameworks or heavy libraries — only two small local scripts.
- Fonts are loaded from Google Fonts with `preconnect`; icons are inline SVG (no icon
  font, no extra HTTP requests).
- Replace placeholder images with properly compressed/responsive versions (WebP/AVIF +
  JPEG fallback) before launch for best Lighthouse scores.

# Balaji Travels — Static Site

This is a lightweight static website for "Balaji Travels" (बालाजी ट्रेवल्स). It includes:
- Responsive layout and accessible HTML
- Language switcher (Hindi / English) with localStorage persistence
- Separated CSS and JS
- Demo flight search and support form (client-side only — no backend)
- Map placeholder with instructions for adding Google Maps

Files:
- index.html — main page
- css/styles.css — styles
- js/main.js — logic (language switching, demo forms)

How to run locally:
1. Unzip or clone the files into a folder.
2. Open `index.html` in your browser (Chrome/Firefox/Edge).
   - For more accurate testing (and to allow fetch/API calls later), serve via a local server:
     - Python 3: `python -m http.server 8000` then open http://localhost:8000
     - Node: `npx serve` or use any static server

Next steps / options I can do for you:
- Integrate real flight search API / payment gateway / booking backend.
- Add Google Maps: get an API key and replace the `#map-placeholder` with an embedded map or use the Maps JS API.
- Improve SEO (schema.org, open graph tags), add images and logos, and compress assets.
- Deploy to GitHub Pages or Vercel — I can push and configure or provide step-by-step instructions.

Deployment (quick):
- GitHub Pages: push to a repo and enable Pages (branch: main or gh-pages).
- Netlify / Vercel: connect repo; auto-deploy on push.

What I changed (summary)
- Converted inline CSS/JS to separate files for maintainability.
- Made layout responsive (mobile nav toggle, stacked forms).
- Improved accessibility (landmarks, aria labels, live regions).
- Language switcher now persists selection in localStorage and updates document lang attribute.
- Added basic client-side validation for forms to avoid empty-submits.
- Added README with run and deploy instructions and next-step options.

If this looks good I can:
- Provide a ZIP of these files.
- Create a GitHub repo and push them, then open a PR.
- Deploy to GitHub Pages / Vercel / Netlify (tell me provider + repo or give me permission to push).

Which would you like next?

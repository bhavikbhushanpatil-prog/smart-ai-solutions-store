# Smart AI Solutions Store — GitHub Pages starter

This is a static storefront for the four Excel templates. It is designed to be deployed on GitHub Pages using GitHub Actions.

## Important: protect the paid files
Do **not** add the paid XLSX files to this public repository. Anyone could download them without paying. Upload the XLSX files to your digital checkout provider (for example, Payhip) and use that provider's product checkout URLs here.

## Before publishing
1. Create a GitHub repository named `smart-ai-solutions-store`.
2. Upload the contents of this folder to the repository root (including the hidden `.github` folder).
3. Edit `script.js`: replace the five example `https://payhip.com/` values with the actual product checkout URLs from your store.
4. In `index.html`, replace `YOUR_EMAIL@example.com` with your real business support email.
5. Review `privacy.html` and `terms.html`. They are starter placeholders, not legal advice. Update them to match your real business, data practices, refund policy and applicable requirements.
6. Commit changes to the `main` branch.
7. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
8. The workflow deploys automatically after a push to `main`. Find the published URL in the repository's **Actions** tab or **Settings → Pages**.

## Product catalogue and suggested launch prices
- Monthly Budget Planner — ₹199
- Small Business Profit & Loss — ₹299
- Invoice Tracker — ₹249
- Investment Portfolio Tracker — ₹199
- Four-template starter bundle — ₹599

These are suggested prices, not guarantees of sales or income. Review pricing, taxes, payment processing fees and local compliance before launch.

## What this package does / does not do
- Does: responsive product catalogue, product descriptions, suggested prices, checkout-link placeholders, privacy/terms starter pages, automatic GitHub Pages deployment.
- Does not: create a Payhip account, verify identity, collect payments, deliver paid files itself, create a YouTube channel, or submit affiliate applications.
- Checkout and paid file delivery should be handled by your chosen storefront provider.

## Local preview
Open `index.html` in a browser. For a closer local web-server preview, run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

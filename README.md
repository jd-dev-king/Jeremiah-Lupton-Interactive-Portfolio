# Jeremiah Lupton Interactive Portfolio — React + Vite

A production-ready React conversion of the interactive engineering portfolio, prepared for Vercel deployment and custom-domain use.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Dashboard method

1. Push this project to GitHub.
2. Sign in to Vercel.
3. Select **Add New → Project**.
4. Import the GitHub repository.
5. Vercel should detect **Vite** automatically.
6. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
7. Deploy.

### CLI method

```bash
npm install -g vercel
vercel
vercel --prod
```

## Connect `portfolio.jeremiahlupton.com`

1. In Vercel, open the project.
2. Go to **Settings → Domains**.
3. Add:

```text
portfolio.jeremiahlupton.com
```

4. Vercel will show the exact DNS record required.
5. In Wix, open **Domains → Domain Actions → Manage DNS Records**.
6. Add the CNAME record shown by Vercel for host `portfolio`.
7. Keep the existing Wix records for the root domain and `www`.
8. Wait for DNS verification and HTTPS provisioning.

## Recommended Wix integration

Do not embed the full application in an iframe. Instead:

- Keep `jeremiahlupton.com` as the Wix landing page.
- Make the main Wix portfolio button open `https://portfolio.jeremiahlupton.com`.
- Open it in the same browser tab.
- Add a **Main Website** link in this portfolio later if desired.

## Main files

```text
src/App.jsx
src/data/projects.js
src/data/timeline.js
src/data/capabilities.js
src/styles/styles.css
public/docs/Jeremiah-Lupton-Resume.pdf
vercel.json
```

## Updating projects

Edit `src/data/projects.js`. Project cards, filters, modals, live links, GitHub links, and coming-soon notices are generated from that file.

## Version

Current portfolio package: `v2.1.0`


## v2.0.1 content migration

The final static HTML revisions were incorporated into the React application:

- Updated page metadata and title.
- Preserved the revised hero and 20+ years experience badge.
- Expanded the capabilities tool cloud.
- Replaced the React timeline with the final employment, education, service, and additional-experience entries.
- Updated the contact opportunity statement.
- Kept the About navigation anchored to the top because the supplied final HTML does not contain a separate `#about` section.


## Featured Enterprise Execution Suite Releases

- **EES Global Supply Nexus v1.0.0** — enterprise supply-chain planning, procurement, inventory, logistics risk, and manufacturing handoff.
- **EES Pharma Process Twin v1.0.0** — pharmaceutical manufacturing execution, PLC/SCADA, EBR, historian analytics, and 3D digital-twin operations.

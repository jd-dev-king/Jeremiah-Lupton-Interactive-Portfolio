# Jeremiah Lupton — Engineering, Data & Automation Portfolio

A modern, interactive, responsive portfolio built for GitHub Pages and designed to be embedded into a Wix Premium website through an iframe.

## Design direction

The portfolio uses the same visual language as the interactive engineering case studies:

- Deep navy technology background
- Cyan, electric blue, lime, violet, and orange accents
- Glass-style panels
- Animated grids and ambient lighting
- Interactive project filters
- Searchable project cards
- Capability constellation
- Animated counters
- Professional education and service timeline
- Responsive desktop, tablet, and mobile layouts

## Project structure

```text
jeremiah-lupton-tech-portfolio/
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── styles.css
    ├── data/
    │   └── projects.js
    ├── images/
    └── js/
        └── app.js
```

## Test locally in VS Code

1. Extract the ZIP.
2. Open the folder in VS Code.
3. Install the **Live Server** extension if needed.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

No build process or package installation is required.

## Update project cards

Open:

```text
assets/data/projects.js
```

Each card is stored as a JavaScript object:

```javascript
{
  title: "Project title",
  category: "manufacturing",
  version: "v1.0.0",
  status: "Live Case Study",
  description: "Project summary",
  tech: ["HTML", "CSS", "JavaScript"],
  kpis: ["KPI one", "KPI two", "KPI three"],
  live: "https://live-project-url/",
  github: "https://github.com/username/repository",
  accent: "cyan",
  icon: "factory"
}
```

Supported category filters:

```text
manufacturing
data
automation
ai
software
```

Supported accent values:

```text
cyan
blue
lime
violet
orange
```

## GitHub Pages deployment

Recommended repository name:

```text
Jeremiah-Lupton-Interactive-Portfolio
```

Push the site:

```bash
git init
git add .
git commit -m "Create interactive engineering portfolio v1.0.0"
git branch -M main
git remote add origin https://github.com/jd-dev-king/Jeremiah-Lupton-Interactive-Portfolio.git
git push -u origin main
```

Enable Pages:

```text
Repository Settings
→ Pages
→ Deploy from a branch
→ main
→ / (root)
→ Save
```

Expected URL:

```text
https://jd-dev-king.github.io/Jeremiah-Lupton-Interactive-Portfolio/
```

## Embed the GitHub Pages site in Wix

After GitHub Pages is live:

1. Open the Wix editor.
2. Select **Add Elements**.
3. Choose **Embed Code**.
4. Select **Embed a Site**.
5. Enter the complete GitHub Pages URL.
6. Resize the embed element.
7. Set the iframe height high enough to display the page or use a dedicated full-page Wix section.

Example iframe:

```html
<iframe
  src="https://jd-dev-king.github.io/Jeremiah-Lupton-Interactive-Portfolio/"
  title="Jeremiah Lupton engineering portfolio"
  width="100%"
  height="6000"
  style="border:0; display:block;"
  loading="lazy"
  allowfullscreen>
</iframe>
```

### Important iframe note

A static iframe does not automatically resize to the height of a cross-domain GitHub Pages site. The simplest Wix setup is to:

- Place the iframe in a dedicated page.
- Set a generous fixed height.
- Test desktop, tablet, and mobile views.
- Increase the height if the bottom of the portfolio is clipped.

A second option is to link your Wix navigation directly to the GitHub Pages portfolio in the same browser tab.

## Content notes

The portfolio includes known project and education information. Review all project URLs before publishing and replace any `#` placeholder links in `assets/data/projects.js`.


## v1.1 revisions

- Updated Trivia Madness to v2.0 with its live web project.
- Added live interactive portfolio links for:
  - Car Parking Barrier Controller
  - Manufacturing Asset Health Analytics
  - Manufacturing Operations Intelligence
  - First-Run Parts Improvement
- Marked GitSafe Practice Lab and Pharmaceutical cGMP Database as GitHub Pages planned.
- Added a downloadable resume button.
- Added the resume PDF to `assets/docs/`.
- Replaced the hero console with an animated 20+ years of experience badge.
- Expanded the journey timeline with employment, volunteer service, and education in reverse chronological order.


## v1.1.1 adjustment

- Aligned Explore Projects, Start a Conversation, and Download Resume on the same desktop row.
- Added responsive two-column tablet and single-column mobile behavior.


## v1.1.2 adjustment

- Added an animated **GitHub Coming Soon** notification bubble inside the project-details modal for:
  - GitSafe Practice Lab
  - Pharmaceutical cGMP Database


## v1.1.3 adjustment

- Updated **Trivia Madness v2.0** as a Web + Desktop Application.
- Added web and desktop technologies to the card.
- Updated KPI chips for cross-platform, solo/multiplayer, and leaderboard functionality.
- Added a title-visibility safeguard so all project names remain visible above decorative card layers.

# heyjoe-portfolio

Senior Product Designer portfolio for Jonathan "Joe" Beltrán.
Migrated from Webflow to Astro + MDX + Tailwind CSS, deployed on Cloudflare Pages.

## Stack

- **Framework:** Astro 5+ (static output)
- **Content:** MDX via `@astrojs/mdx` (case studies use JSX components in markdown)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Deployment:** Cloudflare Pages (auto-deploy on push to `main`)
- **Package manager:** npm

## Design tokens (extracted from Webflow CSS)

### CSS custom properties (from :root)

--base-gray: #f0f0f0       (page background)
--dark: #333               (primary text color)
--purplehaze: #5b38aa      (brand accent — borders, links, active states, highlights)
--background-dark: #e2e2e2 (secondary background)

### Colors

| Usage | Hex |
|-------|-----|
| Page background | #f0f0f0 |
| Card/container bg | #ffffff |
| Primary text | #333333 |
| Body text (case studies) | #666666 |
| Brand accent (purplehaze) | #5b38aa |
| Link hover | #8e6cdb |
| Button/nav hover bg | #f4e9ff |
| Case study h3 headings | #5b38aa |
| Metadata grid bg | #f7f7f7 |
| Image captions | #7c7c7c |

### Typography

| Element | Font | Weight | Size | Extras |
|---------|------|--------|------|--------|
| Body / base | IBM Plex Mono | 400 | 16px | — |
| Headings (main-heading) | IBM Plex Mono | 600 | 1.42em | uppercase, line-height: 140% |
| Huge heading | IBM Plex Mono | 600 | 2em | uppercase, line-height: 140% |
| Case study body | Open Sans | 300 | 0.9rem | line-height: 160%, color: #666 |
| Case study h2 | Montserrat | — | 1.6rem | line-height: 140% |
| Case study h3 | Montserrat | 700 | 0.9rem | uppercase, letter-spacing: 0.8px |
| Captions | IBM Plex Mono | 400 | 0.8rem | color: #7c7c7c |

### Fonts to load

- IBM Plex Mono (400, 600)
- Open Sans (300, 400, 600, 700)
- Montserrat (700)

### Layout patterns

| Component | Key styles |
|-----------|-----------|
| Nav bar | border: 1px solid purplehaze, box-shadow: 8px 8px 0 0 purplehaze, bg: white, max-width: 1300px, width: 90% |
| Nav links | border: 1px solid purplehaze, hover bg: #f4e9ff, active: bg purplehaze + white text |
| Containers | border: 1px solid purplehaze, box-shadow: 8px 8px 0 0 purplehaze, bg: white, padding: 50px |
| Home container | width: 540px, centered |
| Case study container | width: 90%, max-width: 1300px |
| Buttons | border: 1px solid purplehaze, bg: white, hover bg: #f4e9ff |
| Metadata grid | 4-col grid, bg: #f7f7f7, border-radius: 8px, padding: 40px |
| Tags | bg: #f0f0f0, border-radius: 6px, padding: 6px |
| Case study images | margin: 40px 0, border: 1px solid purplehaze |
| Work card grid | 3 columns, gap: 50px |
| Content widths | Narrow: 700px, Wide: 1200px, Wider: 1400px |

### Signature visual patterns

- Offset box shadow: 8px 8px 0 0 purplehaze on nav and all containers
- Dot pattern SVG background on body
- Diagonal stripe pattern on highlight/callout sections
- All headings uppercase IBM Plex Mono
- 1px purplehaze border on every container and interactive element
- Brutalist-adjacent: sharp corners (border-radius: 1px), heavy borders, monospace

## Project structure

src/
  components/
    ui/           # Buttons, cards, badges, tags
    layout/       # Header, Footer, Navigation
    case-study/   # MetadataGrid, Highlight, ImageCaption
  content/
    projects/     # MDX case studies
    experiments/  # MDX experiments
  layouts/
    BaseLayout.astro
    CaseStudyLayout.astro
  pages/
    index.astro
    about.astro
    work/
      index.astro
      [...slug].astro
    experiments/
      index.astro
  styles/
    global.css
  assets/images/

## Content collections

### projects

title, description, role, company, year, team, tags[], featured, draft

### experiments

title, description, role, year, skills[], tools[], demoUrl, draft

## Conventions

- .astro components unless interactivity requires React
- Tailwind utilities; custom CSS only for dot pattern bg and diagonal stripes
- All images via Astro Image component for optimization
- Semantic HTML, proper heading hierarchy, alt text
- Mobile-first responsive
- WCAG 2.1 AA minimum
- Commit messages: type: short description
- Preserve the 8px offset box-shadow — it is the signature motif
- All headings uppercase IBM Plex Mono

## Things to avoid

- No @astrojs/tailwind (deprecated for v4)
- No client JS unless explicitly needed
- No getStaticPaths — use content collections
- Images in src/assets/ not public/
- No border-radius > 1px on nav/containers
- Do not change the font stack

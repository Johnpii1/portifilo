# Johnpaul Portfolio

A responsive personal developer portfolio built with React, Vite and Tailwind CSS.

## Tech stack
- React 18
- Vite
- Tailwind CSS 3
- PostCSS and Autoprefixer
- Lucide React icons
- Google Fonts: DM Sans and Space Grotesk

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Tailwind setup
- Tailwind configuration: `tailwind.config.js`
- PostCSS configuration: `postcss.config.js`
- Tailwind directives: `src/index.css`
- Portfolio-specific visual effects, animations and responsive component rules: `src/style.css`

You can use Tailwind utility classes directly in JSX. Existing custom styles remain for the portfolio's distinctive visual treatment and animation details.

## Project structure
```
src/
├── components/
│   ├── SectionLabel.jsx
│   ├── SiteHeader.jsx
│   └── SiteFooter.jsx
├── data/
│   └── portfolioData.js
├── sections/
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   ├── JourneySection.jsx
│   ├── BeyondCodeSection.jsx
│   └── ContactSection.jsx
├── App.jsx
├── index.css
├── main.jsx
└── style.css
assest/
└── okoli sochimaobi.pdf
image/
└── IMG_20260114_202638.jpg
index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.js
```

## Where to edit
- **Projects, skills, services, contact links, navigation and other portfolio content:** `src/data/portfolioData.js`
- **Individual page sections:** `src/sections/`
- **Header, footer and shared section label:** `src/components/`
- **Page composition and scroll reveal behavior:** `src/App.jsx`
- **Tailwind utilities and base styles:** `src/index.css` and JSX class names
- **Portfolio-specific styling, animations and responsive details:** `src/style.css`
- **Tailwind theme and content scanning:** `tailwind.config.js`
- **Profile photo:** replace the image in `image/` while keeping its filename, or update the image path in `src/sections/HeroSection.jsx`.
- **CV:** replace the PDF in `assest/` while keeping its filename, or update the link in `src/sections/HeroSection.jsx`.

The Tailwind setup is added without intentionally changing the portfolio's existing design or interactions.

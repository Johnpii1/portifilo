# Johnpaul Portfolio

A responsive personal developer portfolio built with React and Vite.

## Tech stack
- React 18
- Vite
- Lucide React icons
- Custom responsive CSS
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
├── main.jsx
└── style.css
assest/
└── okoli sochimaobi.pdf
image/
└── IMG_20260114_202638.jpg
index.html
package.json
vite.config.js
```

## Where to edit
- **Projects, skills, services, contact links, navigation and other portfolio content:** `src/data/portfolioData.js`
- **Individual page sections:** `src/sections/`
- **Header, footer and shared section label:** `src/components/`
- **Page composition and scroll reveal behavior:** `src/App.jsx`
- **All visual styling and responsive breakpoints:** `src/style.css`
- **Profile photo:** replace the image in `image/` while keeping its filename, or update the image path in `src/sections/HeroSection.jsx`.
- **CV:** replace the PDF in `assest/` while keeping its filename, or update the link in `src/sections/HeroSection.jsx`.

The refactor is intended to preserve the existing design and behavior while making each area easier to edit independently.

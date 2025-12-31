# enyamedia - Media Restoration Services Website

A modern, futuristic single-page website built with React and Tailwind CSS, featuring a dark theme, smooth animations, and a professional AI-first design. enyamedia specializes in media restoration, bringing historical content back to life through AI-powered recoloring, upscaling, and preservation.

## Tagline

**Built for Media. Powered by AI.**  
*From First Frame to Final Voice: AI-Powered Media Mastery.*

## Tech Stack

- **React** (functional components, hooks)
- **Tailwind CSS** (dark mode, utility-first)
- **Vite** (build tool)
- No external UI frameworks

## Features

- 🎬 Hero section with animated logo reveal (logo slides from left, "media" from right)
- 📱 Fully responsive, mobile-first design
- 🎨 Glassmorphism-style cards
- 🌙 Dark mode only
- ♿ Accessibility-friendly (reduced motion support)
- ⚡ Performance-optimized
- 🎯 Smooth scroll navigation
- 🎭 Before/After comparison slider for media restoration demos

## Services

enyamedia offers the following services:

1. **Media Restoration** - Restore damaged, degraded, or historical media to pristine condition
2. **Recoloring** - Transform black and white memories into vibrant, realistic color
3. **Upscaling** - Enhance resolution and quality of low-resolution media using AI
4. **Character Injection** - Seamlessly inject new people into existing scenes using AI
5. **Content/Media Curation** - Professional content and media curation services
6. **Language Subtitling** - Professional subtitle creation and translation services
7. **Dubbing Services** - High-quality dubbing services for films and videos

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
enyamedia/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── WhatWeBuild.jsx
│   │   ├── Services.jsx
│   │   ├── BeforeAfterSlider.jsx
│   │   ├── OurApproach.jsx
│   │   ├── TalentCulture.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── enya_logo.png
│   ├── hero2.jpeg
│   ├── ccB_W.gif
│   ├── ccCOLOR.gif
│   ├── charitha.gif
│   ├── resstore.png
│   ├── upscaling.png
│   ├── injection.png
│   ├── curation.png
│   ├── subtitle.png
│   └── dubbing.png
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'enyamedia': {
    primary: '#00D9FF',
    secondary: '#7C3AED',
    dark: '#0A0A0F',
    'dark-lighter': '#1A1A24',
  }
}
```

### Hero Background Image

Replace the background image in `src/components/Hero.jsx`:

```jsx
backgroundImage: `url('/hero2.jpeg')`
```

The hero section features a grayscale-to-color transition effect on scroll or after 2 seconds.

## License

© 2024 enyamedia. All rights reserved.


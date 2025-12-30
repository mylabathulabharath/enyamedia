# enyamedia - Media Restoration Services Website

A modern, futuristic single-page website built with React and Tailwind CSS, featuring a dark theme, smooth animations, and a professional AI-first design.

## Tech Stack

- **React** (functional components, hooks)
- **Tailwind CSS** (dark mode, utility-first)
- **Vite** (build tool)
- No external UI frameworks

## Features

- 🎬 Hero section with video background (grayscale → color transition)
- 📱 Fully responsive, mobile-first design
- 🎨 Glassmorphism-style cards
- 🌙 Dark mode only
- ♿ Accessibility-friendly (reduced motion support)
- ⚡ Performance-optimized
- 🎯 Smooth scroll navigation

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
│   │   ├── Products.jsx
│   │   ├── TechnologyStack.jsx
│   │   ├── OurApproach.jsx
│   │   ├── TalentCulture.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
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

### Hero Video

Replace the video source in `src/components/Hero.jsx`:

```jsx
<source
  src="YOUR_VIDEO_URL"
  type="video/mp4"
/>
```

For mobile, update the background image URL in the same component.

## License

© 2024 enyamedia. All rights reserved.


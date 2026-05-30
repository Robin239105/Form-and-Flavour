# Form & Flavour Studio

A premium, multidisciplinary craft studio website featuring a high-end, editorial-style layout. The studio is run by **Edward Marlowe** from a converted workshop in East London, specializing in four distinct disciplines: bespoke upholstered furniture, hand-painted seasonal chocolates, custom culinary recipe development, and curated food tours.

---

## 🎨 What It Is

**Form & Flavour Studio** is designed around a single aesthetic sensibility applied across four crafts. The website showcases:
*   **Portfolio 01 — Upholstered Furniture**: Refurbished classic frames, sprung and upholstered by hand.
*   **Portfolio 02 — Painted Chocolates**: Hand-painted cocoa-butter confectionery boxes designed as miniature edible paintings.
*   **Service 03 — Recipe Development**: Repeatable, costed recipe consulting for restaurants, grocers, and brands.
*   **Service 04 — Food Tours & Pub Crawls**: Slow-paced, walked tastings and Heath walks across historic London paths.

---

## 🛠️ How It Is Made

The project has been migrated from a legacy single-page Babel CDN layout into a professional, production-ready frontend architecture:

### 1. Technology Stack
*   **Core**: [React 18](https://react.dev/) — utilized for a modern modular component workflow.
*   **Build Bundler**: [Vite](https://vitejs.dev/) — provides lightning-fast Hot Module Replacement (HMR) and highly optimized asset bundling.
*   **Routing**: [React Router DOM v6](https://reactrouter.com/) — manages clean clientside hash-routing.
*   **Styling**: 
    *   **TailwindCSS** — fully integrated to enable modern utility class development.
    *   **Vanilla CSS Variables** — custom HSL tokens, grids, and typography definitions are preserved in a centralized design system.

### 2. High-Vibe Aesthetic Upgrades
*   **Floating Glassmorphic Navbar Capsule**: When scrolled, the navbar shrinks and transitions into a beautiful, dark-tinted plum glass capsule with `backdrop-filter: blur(20px)`, custom copper accents, and depth shadows.
*   **Sunlit Light Leaks**: An organic golden-hour overlay drifts gracefully across the hero panels (`animation: lightDrift 14s`) using custom color-dodge blend modes.
*   **Pulsing Ambient Glow**: A warm terracotta radial light pulses behind the hero copy (`animation: subtleFloat 14s`).
*   **Gradient Serif Typography**: Serif italic elements are elevated with an editorial ampersand gradient text clip.
*   **Smooth Hover Micro-Animations**: Card grids, navigation links, and action buttons react to hovers with organic translate offsets and scale transitions.

### 3. Production & Deployment Files
*   `vercel.json`: Tailored to preconfigure path fallbacks and handle routing seamlessly if hosted on Vercel.
*   `public/favicon.svg`: A bespoke vector icon containing a Bodoni serif ampersand wrapped in a delicate dotted copper orbit.

---

## 🚀 Getting Started

To run the project locally, follow these simple steps:

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Run the Development Server
Launch the Vite development environment:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the site.

### 3. Build for Production
Bundle and optimize all assets into the `/dist` directory:
```bash
npm run build
```
The optimized bundle compiles in under **1.1 seconds**, ready for drag-and-drop deployment or hosting on platforms like Vercel or Netlify.

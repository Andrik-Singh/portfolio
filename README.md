🎨 Adrin Ring Portfolio

A modern, responsive portfolio built with React, TypeScript, and Vite, showcasing projects, skills, and work experience. Designed for speed, accessibility, and smooth user experience, with an emphasis on clean code and advanced front-end techniques.

🖥 Features

Fully responsive mobile-first design

Smooth animations using GSAP

Section navigation with scroll-aware active tabs

Accessible: keyboard focus, ARIA labels, and screen reader friendly

Performance-optimized with Vite HMR

SEO-friendly structure

⚡ Tech Stack

Framework: React 18 + TypeScript

Bundler: Vite

Styling: Tailwind CSS + custom responsive utilities

Animations: GSAP for smooth transitions

Linting & Code Quality: ESLint with type-checked rules

Version Control & Deployment: GitHub + Netlify

🧩 Code Highlights

TypeScript-first approach: Strongly typed components for maintainable code

Responsive Navbar: Mobile-friendly, scroll-sensitive navigation

Section Observer: Tracks visible section and updates active state dynamically

Dark Mode: System preference detection with seamless toggle

GSAP Animations: Entrance animations and scroll interactions

🚀 Getting Started
Prerequisites

Node.js v18+

Yarn or npm

Installation
# Clone the repo
git clone https://github.com/Andrik-Singh/portfolio
cd portfolio

# Install dependencies
npm install
# or
yarn
Running Locally
# Start development server
npm run dev
# or
yarn dev

Visit http://localhost:5173 to see the portfolio live.

Building for Production
npm run build
# or
yarn build

The production-ready files will be in the dist folder, ready for deployment (e.g., Netlify, Vercel).

🛠 ESLint & Code Quality

This portfolio uses type-checked ESLint rules for high-quality, maintainable code:

tseslint.configs.strictTypeChecked
tseslint.configs.stylisticTypeChecked
eslint-plugin-react-x
eslint-plugin-react-dom

These ensure:

No type errors

Consistent code style

React-specific best practices

🌐 Deployment

Netlify Auto-Deploy: Connected to GitHub, auto-deploys on push

Manual Deploy: Drag-and-drop dist folder if needed

Fully optimized for production with Vite build

🔗 Live Demo

Check it out here: https://andrik-singh-portfolio.netlify.app/

📂 Project Structure
src/
├─ components/       # Reusable React components (Navbar, Tabs, Cards)
├─ pages/            # Main page content
├─ assets/           # Images, icons, and other static files
├─ styles/           # Tailwind customizations
├─ lib/              # Utilities, hooks
├─ main.tsx          # App entry point
🎯 Future Enhancements

Add contact form with email integration

Expand projects section with filters and live demos

Integrate NextAuth for authenticated sections

Add user theme preference persistence

💬 Contact

Email: andriksingh78

GitHub: [github.com/Andrik-Singh](https://github.com/Andrik-Singh)

LinkedIn: [linkedin.com/in/adrin-ring](https://www.linkedin.com/in/andrik-singh-a21116334/)
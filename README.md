# Tobams Group Frontend Assessment - Static Page Implementation

**Live Deployment URL:** https://tobams-group-assesment-git-main-erijesu0s-projects.vercel.app/
**Figma Design:** [View Design File](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Overview

This repository contains a pixel-perfect, production-ready static page implementation for the Tobams Group Frontend Intern Assessment. The project translates the provided Figma design into clean, maintainable code focusing on responsive layout, semantic HTML, and modular component architecture.

## Tech Stack

- **Framework:** Next.js (App Router, Latest Version)
- **Styling:** Tailwind CSS (Strictly native utility classes; no external UI kits or CSS frameworks like Bootstrap/MUI)
- **Optimization:** `next/image` for assets, `next/font` for typography (Nunito)

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [Insert your GitHub repo URL here]
   cd [Insert your repo folder name]
   Install dependencies:
   ```

Bash
npm install
Run the development server:

Bash
npm run dev
View the application:
Open http://localhost:3000 in your browser.

Design Decisions & Technical Assumptions
Figma Fidelity & Responsiveness: The layout strictly adheres to the provided Figma dimensions. All responsiveness is handled exclusively using standard Tailwind breakpoints (sm:, md:, lg:) to ensure proper display across mobile (425px), tablet (768px), and desktop (1280px+) screens. No custom CSS media queries were used.

Component Architecture: To prevent a monolithic codebase, the UI is modularized into dedicated, reusable components within the src/components/ directory (e.g., Header.tsx, Hero.tsx, LmsBlock.tsx, Footer.tsx).

Navigation: Since this is a single-page static implementation, navigational links and buttons that do not have a defined secondary page route are configured with safe anchor links or e.preventDefault() handlers to ensure a functional, interactive feel without generating 404 errors.

Semantic HTML & Accessibility: The markup utilizes semantic tags (<header>, <nav>, <main>, <section>, <footer>). All images contain descriptive alt attributes, and interactive elements (links, buttons) are appropriately structured for keyboard navigation and focus mapping.

AI Tool Disclosure
Usage: AI chat assistants (Gemini Ai,Claude Ai) were utilized as a collaborative tool to optimize Tailwind CSS utility class combinations, streamline boilerplate component creation, and format standard mathematical grid layouts to align strictly with the Figma layout properties. All code was manually reviewed, corrected, integrated, and verified for fidelity.

Known Issues
None at this time.

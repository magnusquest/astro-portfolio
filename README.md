# Martin Cordero — Portfolio

Personal portfolio and blog for Martin Alejandro Cordero, Software Engineer. Built with Astro 5, deployed to Vercel.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Astro 5 (SSR via Vercel adapter) |
| UI | React 19, Svelte 5, Vue 3, Preact |
| Styling | Tailwind CSS v4 |
| Content | Astro Content Collections (Markdown) |
| Language | TypeScript |
| Deploy | Vercel |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero (name, avatar), Skills, Projects |
| `/about` | Bio, identity facts, skill list |
| `/blog` | Blog post index |
| `/posts/[slug]` | Individual blog post |
| `/contact` | Contact form |
| `/tags` | All content tags |
| `/tags/[tag]` | Posts filtered by tag |

## Project Structure

```
src/
├── blog/              # Markdown blog posts
├── components/
│   ├── LetterGlitch.jsx     # Animated glitch canvas background (React)
│   ├── Skills.svelte         # Skills list (Svelte)
│   ├── Projects.svelte       # Projects list (Svelte)
│   ├── ContactForm.vue       # Contact form (Vue)
│   ├── AboutSection.jsx      # About bio (React)
│   ├── Header.astro          # Sticky glassmorphism navbar
│   ├── Footer.astro          # Fixed glassmorphism footer + social links
│   └── BlogPost.astro        # Blog list item
├── layouts/
│   ├── BaseLayout.astro      # Root layout (dark mode, header, footer, glitch bg)
│   └── MarkdownPostLayout.astro
├── pages/             # File-based routing
├── styles/global.css  # Tailwind + CSS vars (dark theme)
└── content.config.ts  # Blog collection schema
```

## Commands

```sh
npm install       # Install dependencies
npm run dev       # Dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build locally
```

## Design Notes

- Dark mode is always active (`<html class="dark">` hardcoded in BaseLayout)
- `LetterGlitch` renders a full-screen animated character matrix at `z-index: -9999` as the background
- Header and footer use glassmorphism (`backdrop-filter: blur`)
- Contact form submission is a placeholder — wire up Formspree/Netlify Forms to activate

## Social

- X: [@matrix_quest](https://x.com/matrix_quest)
- GitHub: [@magnusquest](https://github.com/magnusquest)
- LinkedIn: [martin-alejandro-cordero](https://linkedin.com/in/martin-alejandro-cordero/)

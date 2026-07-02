# Robert Tworek Portfolio

Modern bilingual portfolio website for Robert Tworek. The site presents selected academic and technical projects as compact case studies, with a recruiter-friendly profile summary, technology map, education timeline, CV download and contact section.

## Features

- Polish and English versions under `/pl` and `/en`
- responsive first-screen portfolio hero with language-specific CV, GitHub and LinkedIn actions
- GitHub public repository counter and project index refreshed after page load
- project filtering and interactive case-study details with quick context metrics
- expanded pharmacy management system case study based on the final project documentation
- interactive GitHub project index with all public repositories except the profile README repo
- technology groups, education timeline and work-strengths panel
- contact section with email copy, LinkedIn, GitHub, language-specific CV and mail composer
- SEO metadata, sitemap, robots route, OpenGraph preview image and branded favicon
- consistent violet visual system matching the CV/GitHub presentation

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Motion
- Lucide React

## Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000/pl` for the Polish version or `http://localhost:3000/en` for the English version.

## Quality Checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the production URL so metadata, sitemap and robots routes point to the deployed domain. `GITHUB_TOKEN` is optional, but recommended for production to raise GitHub API limits for the repository counter and live project index.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
GITHUB_TOKEN=github_pat_or_classic_token
```

The project is ready for a standard Next.js deployment target such as Vercel, Netlify or a Node-compatible server.

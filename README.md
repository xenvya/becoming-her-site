# Becoming Her

A responsive, accessible redesign of [becomingherhq.org](https://www.becomingherhq.org), built with React, TypeScript, and Vite. It preserves the organization's existing brand palette, content, and photography while improving navigation, trust, safety, performance, and conversion paths.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm test
npm run build
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22.12 or later
- Production branch: `main`

The repository includes a Pages configuration in `wrangler.jsonc`, plus security headers and SPA routing rules in `public/_headers` and `public/_redirects`. Connect the repository to Cloudflare Pages for automatic production deployments from `main`.

## Content and privacy notes

- The interest and contact forms open a pre-addressed email in the visitor's email app; no form submission is stored by the website.
- The initial mentorship-interest form intentionally requests only parent/guardian contact details and broad eligibility information.
- Update verified policies, program availability, and legal status as the organization formalizes them.

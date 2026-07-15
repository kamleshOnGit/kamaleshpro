# kamaleshpro.com

Portfolio & freelancing website for Kamlesh Kumar Mishra — Senior Frontend Developer.

Built with Next.js (static export), Tailwind CSS, Framer Motion, and next-themes (dark/light toggle). Deployed on Netlify with Netlify Forms handling the contact form.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Deploy (Netlify)

1. Push this repo to GitHub.
2. In Netlify, create a new site from the repo — `netlify.toml` already configures the build (`npm run build`, publish `out`).
3. Point the `kamaleshpro.com` domain at the Netlify site.
4. Contact form submissions appear under **Forms** in the Netlify dashboard (form name: `contact`). Enable email notifications in Netlify → Forms → Notifications.

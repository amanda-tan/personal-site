# Amanda Tan — Personal Site

A warm editorial personal site for a builder, educator, and curious human.

## Personalize it

All assumed biography, project, contact, and social information lives in
`app/site-content.ts`. Replace the placeholder email and LinkedIn URL before
publishing.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is written to `out/`.

## Publish on GitHub Pages

1. Create a GitHub repository named `personal-site`.
2. Push this repository to its `main` branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. The included workflow builds and publishes the site automatically.

If you choose another repository name, update `BASE_PATH` in
`.github/workflows/deploy-pages.yml`. If the repository is named
`YOUR_USERNAME.github.io`, set `BASE_PATH` to an empty value.
Also replace the fallback site URL in `app/layout.tsx` if your GitHub username
or repository name differs.

The generated artwork in `public/images` and `public/og.png` is part of the
site.

## Original art

The repository contains a bespoke hero illustration, three editorial icon
tiles, and a social-sharing card. They were generated specifically for this
project in a shared deep-teal, apricot, coral, sage, and cream palette.

# achbj.github.io

My personal portfolio: https://achbj.github.io

It's a one-page React app (Create React App). Everything shown on the page, such as profile, experience, projects and skills, is read from [`src/data/data.json`](src/data/data.json), so to change the content I only edit that file. Styling is in `src/App.css`.

Project cards only link to public repos.

## Run it locally

```bash
npm ci
npm start
```

`npm run build` makes the production build.

## Deploy

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages` branch. Pages is set to serve from `gh-pages` (root).

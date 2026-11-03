# Bijaya Acharya — Research-style portfolio

A compact, accessible, one-page React portfolio for **https://achbj.github.io/**. Replaces the old animated / multi-section theme with an understated, editorial layout inspired by academic research websites.

## Edit content in one place

**All rendered profile and project content lives in [`src/data/data.json`](src/data/data.json).**

Change the name, summary, contact links, availability, experience, education, publication, skills, languages, or selected projects in that one file; the page updates when React rebuilds. Project cards link to public GitHub repositories. Do not add private repositories or unverified achievements.

The visual layout is in `src/App.css`. The app source reads only `src/data/data.json`; no API keys, content fetching, or external UI frameworks are needed.

## Development

```bash
npm ci
npm start
npm test -- --watchAll=false
npm run build
```

At wide desktop widths, the content is arranged in three compact columns, with key information usually visible together. At narrower sizes it becomes two columns and then a single stacked page so no content is hidden or clipped. Scrolling is allowed when needed for readability.

## Deployment

The [GitHub Actions workflow](.github/workflows/deploy.yml) builds the Create React App site on pushes to `main` and publishes the static build to the existing `gh-pages` branch. GitHub Pages must be configured to publish from **Deploy from a branch → gh-pages / (root)**. You can also trigger the action manually from the Actions tab.

The existing `npm run deploy` command is still available for manual `gh-pages` publishing.

## Sources and accuracy

Profile, jobs, education, and core competencies were adapted from the current CV. Public repository READMEs were reviewed before choosing the showcased work. Some research projects are experimental; no unpublished benchmarks are presented as validated results. The agent's upstream nanobot foundation is credited in its description.

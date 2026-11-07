# Badmus Samad: portfolio

Personal portfolio of Badmus Samad, a backend engineer in Ibadan, Nigeria. It holds case studies of the AI and backend systems I build, with the decisions behind each one.

## Stack

- [Astro](https://astro.build) 5, static output
- Projects written as Markdown content collections
- Plain CSS, light and dark from the system setting, self-hosted fonts
- Edited through [Pages CMS](https://pagescms.org), which saves changes as Git commits
- Static build that deploys to Vercel with no extra configuration

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

Requires Node 20.3 or newer.

## Structure

| Path | Contents |
| --- | --- |
| `src/content/projects/` | One Markdown file per case study |
| `src/data/site.json` | Name, headline, links, photo |
| `src/pages/` | Home, projects, about, contact |
| `src/styles/global.css` | Design tokens and styles |
| `.pages.yml` | Editor configuration for Pages CMS |
| `docs/` | Setup guide and the case study template |

## Adding a project

Copy `docs/CASE_STUDY_TEMPLATE.md` into `src/content/projects/`, fill in the front matter and the four sections, and commit. The file name becomes the URL.

## More

See [docs/SETUP.md](docs/SETUP.md) for the deploy and editing guide.

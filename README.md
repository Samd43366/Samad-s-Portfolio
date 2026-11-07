# Portfolio

Astro static site. Content is Markdown, personal details live in one file, no database.

## Tonight (about 45 minutes)

1. `npm install`
2. `npm run dev` and open http://localhost:4321
3. `git init`, commit, push to a new GitHub repo
4. In Vercel: Add New > Project > import the repo. Framework preset is detected as Astro. Deploy with defaults.

You now have a live URL. Nothing else needs to be finished for this step.

## Edit from your phone (no laptop, no code)

Pages CMS gives you forms to edit your projects, settings and photo. It signs in with GitHub and saves each change as a commit to this repo. Vercel then redeploys, so a change is live in about a minute.

1. Push this repo to GitHub first.
2. Open https://app.pagescms.org and sign in with GitHub.
3. Install the Pages CMS GitHub app on **this repo only**, not on all your repos.
4. Open the repo. You get two sections, set up by `.pages.yml`:
   - **Site settings**: photo, name, headline, email, links.
   - **Projects**: add or edit a project, set its status, add links, upload a screenshot, write the case study.
5. Save. Watch the Vercel dashboard for the redeploy.

Notes:
- Upload any size photo. The build shrinks it to a small WebP, so a 5 MB phone photo is fine.
- Tick **Hide from the site** on a project to keep it as a draft.
- Edits go straight to the main branch. Run `git pull` before you work locally, or you will get conflicts.
- A broken link or a missing field fails the build, and Vercel keeps the previous version live. Check the Vercel dashboard if a change does not appear.

## Where things are

| To change | Edit |
| --- | --- |
| Name, headline, email, links, photo | `src/data/site.json` (or the CMS) |
| Navigation menu | `src/data/site.ts` |
| A project case study | `src/content/projects/*.md` |
| Add a project | copy `docs/CASE_STUDY_TEMPLATE.md` into `src/content/projects/` |
| About text | `src/pages/about.astro` |
| Colors, fonts, spacing | `src/styles/global.css` (tokens at the top) |
| Resume | put a file at `public/resume.pdf` |
| Photo and screenshots | upload through the CMS; stored in `src/assets/uploads/` |

Project status is `live`, `building` or `planned`. Show `live` only when a stranger can use it today.

## Domain

After you buy it, add it in Vercel under Project > Settings > Domains and follow the DNS instructions. Then set an environment variable `SITE_URL` (for example `https://yourname.dev`) and redeploy so canonical links are correct. Update the link on your socials once.

## Before you announce it

```
npm run check:todo
```

It fails while any `TODO` remains in `src/` or `public/resume.pdf` is missing. Then open the live site on your phone and click every link.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | local dev server |
| `npm run build` | build to `dist/` |
| `npm run preview` | serve the built site |
| `npm run check:todo` | launch checklist |

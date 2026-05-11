# AGENTS.md

## Project snapshot
- This is a Docusaurus 3 documentation site for SCNX/how-to content.
- Main content lives in `docs/` and `blog/`; site behavior lives in `src/`, `docusaurus.config.js`, and `sidebars.js`.
- Keep route names, filenames, and sidebar item paths exactly as written; many entries are case- and path-sensitive.

## Architecture to preserve
- `docusaurus.config.js` owns the site shell: navbar/footer, Algolia search, GitHub edit links, and external scripts.
- `sidebars.js` is the source of truth for docs navigation; many module sections are manual categories with `generated-index` links.
- `src/pages/index.js` is not just a landing page: it injects the SCNX compliance popup and Zammad chat scripts on load.
- `src/theme/Admonition/Types.js` adds the custom admonition keyword `my-custom-admonition` used by docs.

## Content patterns
- Docs usually start with frontmatter like `---\ntitle: ...\n---` and a single H1 that matches the topic, e.g. `docs/Modules/Advanced-logging.md`.
- Module docs commonly reference screenshots from `/img/modules/...` and link to SCNX type pages such as `https://howto.scnx-tutorials.de/type/channel`.
- Blog posts use frontmatter with `title`, `description`, `date`, `authors`, and `tags`, then end with `{/* truncate */}`.
- Preserve existing prose style and naming conventions in docs categories, such as `Modules/Automatic-Messages` and `Modules/Role-nicknames`.

## Developer workflow
- Install with `yarn`.
- Start local dev with `yarn start`.
- Build with `yarn build`; this is important because `onBrokenLinks: 'throw'` will fail on bad routes.
- Use `yarn serve` to preview the built site.
- Helpful maintenance commands: `yarn clear`, `yarn write-translations`, `yarn write-heading-ids`, `yarn deploy`.
- Node must be `>=18.0`.

## Integration points and cautions
- Do not change the Algolia config (`appId`, `indexName`, search page path) unless you intend to update search infrastructure too.
- Be careful with external URLs in the footer/navbar and with the GitHub edit links in `docusaurus.config.js`.
- If you touch the homepage scripts, keep the cleanup logic in `src/pages/index.js` aligned with the injected `<script>` tags.
- Any change to docs routes, legal pages, or sidebar slugs should be checked against `yarn build` immediately.

## Where to look first
- `README.md` for the standard Docusaurus commands.
- `package.json` for the exact scripts and supported Node version.
- `docusaurus.config.js` for site-wide behavior and external integrations.
- `sidebars.js` for the docs tree and category structure.

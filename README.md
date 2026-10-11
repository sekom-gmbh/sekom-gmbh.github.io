# SEKOM website

A lightweight Jekyll website for SEKOM, with a notebook-inspired design and an interactive element index. GitHub Pages builds and deploys `docs/` when changes reach `main`.

## Editing the site

- **Landing page:** `docs/index.html`
- **Element names, categories and notes:** `docs/_data/elements.yml`. The home and Metals pages share this data. `column` and `row` control the desktop arrangement; mobile tiles flow automatically.
- **Shared element component:** `docs/_includes/element-index.html`
- **Shared shell, navigation and footer:** `docs/_layouts/landing.html`
- **Styles:** `docs/assets/css/landing.css`
- **Element interaction:** `docs/assets/js/landing.js` (plain JavaScript, no framework)
- **Company and energy copy:** `docs/about.md` and `docs/energy.md`

The material categories follow the existing commercial portfolio; the index is a curated selection, not a full scientific periodic table. Material notes are introductory enquiry copy, not product specifications or availability guarantees.

## Local preview

Use Ruby 3.3 with Bundler 2.5.20 installed (the GitHub Pages dependencies do not support Ruby 4), then run:

```sh
./run.sh
```

Open `http://localhost:4000`. To check a production build:

```sh
cd docs
JEKYLL_ENV=production bundle exec jekyll build
```

Before publishing, check desktop and mobile layouts, select several elements with mouse and keyboard, reload an element URL, and follow the navigation and contact links. With JavaScript disabled, all material notes remain readable.

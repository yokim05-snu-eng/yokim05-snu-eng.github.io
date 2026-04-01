# CLAUDE.md

## Project Overview

Campaign website for **Kim Young-Oh (김영오)**, candidate for **33대 Dean of Seoul National University College of Engineering (서울공대)**. This is a **re-election campaign** — Thomas served as 32대 dean (2024-2026) and is running again with the slogan **'변화의 가속'** (Acceleration of Change), building on his first term's '변화의 시작'.

- **Audience:** SNU Engineering faculty (~330 professors who vote in the dean election)
- **Election date:** April 20-21, 2026
- **Site deadline:** April 2, 2026
- **Language:** Korean primary, with some English (e.g., English PDF of the development plan)
- **Tone:** Formal and institutional, befitting a university dean addressing faculty colleagues
- **Responsive:** Must work well on both desktop and mobile — faculty will likely access via phone (e.g., shared links in KakaoTalk/email)

## Tech Stack

- **Framework:** Jekyll static site generator (do not change)
- **Theme:** Jekyll Advance Pro (keep as-is, minimal modifications only)
- **CSS:** SCSS with Bootstrap 4
- **Deployment:** Netlify (configured in `netlify.toml`)
- **Branch:** `2026-draft` is the working branch; `main` is production

## Site Structure

6 pages total:

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero with campaign photo + Thomas's message + 4 nav buttons |
| 33대 학장에 출마하며 | `/statement/` | Candidacy statement letter to faculty |
| 발전계획서 | `/vision/` | Full development plan (15 subsections) + PDF downloads |
| 32대 학장단 실적 | `/achievements/` | First-term achievements with photos and metrics |
| 김영오는? | `/about/` | Full academic CV/profile |
| 2년 전의 초심 확인 | `/legacy/` | Currently commented out of nav; placeholder for first-campaign summary |

## Key Files

- `pages/home.md` — Homepage frontmatter (hero config, button config)
- `_data/menu.yml` — Navigation (header + footer)
- `_config.yml` — Jekyll config, theme settings, colors, fonts
- `_layouts/home.html` — Homepage layout (hero + optional sections)
- `_layouts/basic.html` — Layout for all content pages (includes sidebar)
- `_includes/components/hero.html` — Hero component (background image + text overlay)
- `assets/css/main.scss` — Custom CSS overrides
- `assets/2026/` — All 2026 campaign content:
  - `md/2026-vision-kor.md` — Korean development plan source
  - `md/2026-vision-eng.md` — English development plan source
  - `md/last-term-highlight.md` — First-term achievements data
  - `files/` — PDF versions of development plans
  - `images/` — Campaign photos and infographics

## Design Decisions

- **Colors:** Primary `#20509e` (SNU Blue), Secondary `#ff9c07` (Orange/Gold)
- **Fonts:** Source Sans Pro (heading + body), Fira Mono (monospace)
- **Hero:** Thomas's photo as background with dark overlay, campaign text centered
- **Navigation:** Flat (no dropdowns), header + footer show same links
- **Sidebar:** All content pages show "바로가기" sidebar with links to other pages
- **Design principles:** NYT-style infographics — big numbers as focal points, scroll-triggered animated counters, minimal text, clean data visualization over tables. Pages should feel like editorial data stories, not boring documents. Use IntersectionObserver for scroll-triggered reveals and counter animations.

## Build & Run

```bash
bundle exec jekyll serve    # Local dev server at localhost:4000
bundle exec jekyll build    # Build to _site/
```

Note: Ruby deprecation warnings about csv/base64/bigdecimal and Sass `/` division warnings are expected and harmless.

## Content Notes

- The `statement.md` content still references the first campaign — Thomas needs to provide updated text for re-election
- Collection directories (`_promises/`, `_visions/`, `_posts/`, etc.) still exist in `collections/` for reference but are not output in the build
- The "2년 전의 초심 확인" page and nav item are commented out pending content from Thomas

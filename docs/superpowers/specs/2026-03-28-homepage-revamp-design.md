# Homepage Revamp Design Spec

**Date:** 2026-03-28
**Context:** Thomas (Kim Young-Oh, 김영오) is running for his second term as Dean of SNU College of Engineering (33대). The current site was built for his first campaign. This revamp simplifies the site for re-election while keeping the existing Jekyll Advance Pro theme.

## Approach

Keep the Jekyll Advance Pro theme and its existing layout system. Restructure pages from the current multi-collection site down to a focused 6-page site (homepage + 5 content pages). Remove unused pages, collections, and navigation items.

## Pages

### 1. Homepage (`/`)

**Layout:** `home` (existing)

**Hero section:**
- Background: Thomas's campaign photo (existing `4-solo3.jpeg` or updated photo from `assets/2026/images/`)
- Background blend mode overlay (same as current)
- Full viewport height on desktop
- Text content (centered, exact text from Thomas):

```
'변화의 시작'을 제안한 학장으로서
계속 방향타를 잡고 '변화의 가속' 페달을 밟기 위해
다시 한번 학장 후보로 나섰습니다.

2026년 4월 20~21일
여러분의 한표를 호소합니다
```

**Below hero:** 5 navigation buttons (using the theme's button components):
1. 33대 학장에 출마하며 → `/statement/`
2. 발전계획서 → `/vision/`
3. 32대 학장단 실적 → `/achievements/`
4. 2년 전의 초심 확인 → `/legacy/`
5. 김영오는? → `/about/`

**Removed sections:** Promises grid, blog categories, intro tagline, all other homepage sections currently enabled or commented out.

### 2. 33대 학장에 출마하며 (`/statement/`)

**Layout:** `basic` (existing)

**Content:** The candidacy statement letter. Current content in `pages/statement.md` needs a content review/update for the re-election context (it currently reads as a first-time candidacy letter), but the page structure and styling remain the same — photo at top, letter body with section headings.

**No hero section** (matches current config: `hero.enabled: false`).

### 3. 발전계획서 (`/vision/`)

**Layout:** `basic` (existing)

**Content:** Single long-scroll page rendering all 5 sections (15 subsections) from `assets/2026/md/2026-vision-kor.md`.

**Top of page:** Two PDF download buttons:
- 발전계획서 (한국어) → `assets/2026/files/2026-vision-kor.pdf`
- Development Plan (English) → `assets/2026/files/2026-vision-eng.pdf`

**Body:** The full Korean development plan rendered as markdown with all section headings and content. The 5 major sections are:
1. 교육 (Education)
2. 창업·대정부 (Entrepreneurship & Government)
3. 재원·동문 (Funding & Alumni)
4. 행정·일터 (Administration & Workplace)
5. 국제화 (Internationalization)

### 4. 32대 학장단 실적 (`/achievements/`)

**Layout:** `basic` (existing)

**Content:** Visual storytelling approach combining photos and metrics.

**Structure:**
- Brief intro paragraph
- Photos from `assets/2026/images/last-term-pic-*` woven between content sections
- Key metrics from `assets/2026/md/last-term-highlight.md` presented as highlighted stats
- Infographic image (`assets/2026/images/last-term-highlight.jpeg`) embedded

**Key metrics to feature:**
- Budget: 220억 (highest ever)
- Facility investment: 1,000억 won
- Research support: 115 initiatives
- PR: 400+ news articles, 570+ content pieces
- Partnerships: 100+ MOUs
- Space improvements: 1,400+
- Government-industry-academia: 80+ collaborations

### 5. 2년 전의 초심 확인 (`/legacy/`)

**Layout:** `basic` (existing)

**Content:** Placeholder/dummy page for now. Will eventually contain a summary of the first election campaign content. For now, a brief message indicating this content is being prepared.

### 6. 김영오는? (`/about/`)

**Layout:** `basic` (existing)

**Content:** Keep the current full academic CV/profile as-is from `pages/about.md`:
- Academic profile and specialization
- Education (BS SNU, MS Cincinnati, PhD Washington)
- Career history
- International roles
- Awards and honors

## Navigation

### Header Menu (`_data/menu.yml`)

Simplify to 5 items (flat, no dropdowns):

| Weight | Title | URL |
|--------|-------|-----|
| 1 | 33대 학장에 출마하며 | /statement/ |
| 2 | 발전계획서 | /vision/ |
| 3 | 32대 학장단 실적 | /achievements/ |
| 4 | 2년 전의 초심 확인 | /legacy/ |
| 5 | 김영오는? | /about/ |

No "Home" item in the nav — clicking the logo returns to homepage (standard pattern already in the theme).

### Footer

- Keep minimal: copyright + email
- Update copyright year to 2026
- Remove footer primary/secondary menus or keep just the 5 page links

## What Gets Removed

### Pages to delete or disable:
- `pages/promises.md`
- `pages/visions.md`
- `pages/blog.md`
- `pages/blog_categories.md`
- `pages/projects.md`
- `pages/team.md`
- `pages/courses.md`
- `pages/contact.md`
- `pages/categories.md`
- `pages/privacy.md`
- `pages/terms.md`
- `pages/success.md`

### Collections to remove from `_config.yml` output:
- `_visions/` (no longer used)
- `_services/` (never displayed)
- `_projects/` (not needed)
- `_team/` (not needed)
- `_courses/` (not needed)
- `_blog_categories/` (not needed)
- `_posts/` (blog not included in revamp)
- `_promises/` (content folded into 발전계획서)

**Note:** Collection directories and files can remain in the repo for reference but should be removed from `_config.yml` collections output so they don't generate pages.

### Unused layouts (can be left in repo but won't be used):
- `blog.html`, `post.html`, `contact.html`, `courses.html`, `categories.html`, `blog_categories.html`, `category.html`, `service.html`, `project.html`, `visions.html`, `promises.html`, `list.html`

## New Files to Create

1. `pages/vision.md` — 발전계획서 page (content from `assets/2026/md/2026-vision-kor.md`)
2. `pages/achievements.md` — 32대 학장단 실적 page (content from `assets/2026/md/last-term-highlight.md` + photos)
3. `pages/legacy.md` — 2년 전의 초심 확인 placeholder page

## Files to Modify

1. `pages/home.md` — update hero text, remove all sections except hero, add 5 nav buttons
2. `pages/statement.md` — content review needed (may keep as-is for now, Thomas to update)
3. `_data/menu.yml` — simplify to 5 flat nav items
4. `_config.yml` — remove unused collection outputs, update footer config
5. `_layouts/home.html` — may need adjustment to support the 5-button layout below hero

## Visual Style

No changes to the theme's visual style:
- Primary color: `#20509e` (SNU Blue)
- Secondary color: `#ff9c07` (Orange/Gold accent)
- Fonts: Source Sans Pro
- Responsive: Bootstrap 4 grid
- Fixed header navigation

## Open Items

- Thomas needs to update `statement.md` content for re-election narrative
- Hero photo: confirm whether to use existing `4-solo3.jpeg` or a new photo from `assets/2026/images/`
- Legacy page content to be provided later by Thomas

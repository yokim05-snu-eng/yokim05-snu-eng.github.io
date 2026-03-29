# Homepage Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify the campaign site from a multi-collection Jekyll site to a focused 6-page site (homepage + 5 content pages) for Thomas's re-election campaign.

**Architecture:** Keep the Jekyll Advance Pro theme. Restructure `pages/home.md` to show new hero text + 5 nav buttons. Create 3 new pages (vision, achievements, legacy). Simplify navigation and config. Remove unused page files.

**Tech Stack:** Jekyll, Liquid templates, Bootstrap 4, SCSS, Markdown

---

### Task 1: Update Homepage (`pages/home.md`)

**Files:**
- Modify: `pages/home.md`

- [ ] **Step 1: Replace `pages/home.md` frontmatter and content**

Replace the entire file with the new homepage config. The hero gets Thomas's exact Korean text. All sections except hero and intro are disabled. The intro section is repurposed to hold the 5 navigation buttons.

```yaml
---
layout: home
permalink: "/"
title: "Kim, Young Oh"
description: "서울공대 33대 학장에 출마합니다."
header_transparent: true
meta_title: 서울대학교 김영오
meta_og_image: "/assets/images/home/preview.jpg"
meta_og_title: "김영오 홈페이지"
meta_og_url: "seandkim.github.io/"

hero:
  enabled: true
  heading: "'변화의 시작'을 제안한 학장으로서<br>계속 방향타를 잡고 '변화의 가속' 페달을 밟기 위해<br>다시 한번 학장 후보로 나섰습니다."
  sub_heading: "2026년 4월 20~21일<br>여러분의 한표를 호소합니다"
  text_color: "#FFFFFF"
  background_color: "#1d2830"
  background_gradient: true
  background_image: "/assets/images/home/4-solo3.jpeg"
  background_image_blend_mode: multiply
  fullscreen_mobile: true
  fullscreen_desktop: false
  height: "80vh"
  buttons:
    enabled: true
    list:
      - text: "33대 학장에 출마하며"
        url: "/statement/"
        external: false
        fa_icon: false
        size: large
        outline: false
        style: "light"
      - text: "발전계획서"
        url: "/vision/"
        external: false
        fa_icon: false
        size: large
        outline: false
        style: "light"
      - text: "32대 학장단 실적"
        url: "/achievements/"
        external: false
        fa_icon: false
        size: large
        outline: false
        style: "light"
      - text: "2년 전의 초심 확인"
        url: "/legacy/"
        external: false
        fa_icon: false
        size: large
        outline: true
        style: "light"
      - text: "김영오는?"
        url: "/about/"
        external: false
        fa_icon: false
        size: large
        outline: false
        style: "light"

intro:
  enabled: false
promises:
  enabled: false
visions:
  enabled: false
blog_categories:
  enabled: false
partners:
  enabled: false
projects:
  enabled: false
outro:
  enabled: false
posts:
  enabled: false
---
```

- [ ] **Step 2: Verify the hero buttons render correctly**

Run: `cd /Users/seandkim/projects/yokim05/yokim05-snu-eng && bundle exec jekyll serve`

Open `http://localhost:4000/` in a browser. Confirm:
- Hero shows Thomas's photo background with blue overlay
- Hero text shows the 3-line Korean message
- Sub heading shows "2026년 4월 20~21일 / 여러분의 한표를 호소합니다"
- 5 buttons appear below the text
- "2년 전의 초심 확인" has outline style (visually distinct)
- No other sections appear below the hero

- [ ] **Step 3: Commit**

```bash
git add pages/home.md
git commit -m "Revamp homepage: new hero text and 5 nav buttons"
```

---

### Task 2: Update Home Layout to Stack Buttons Vertically

**Files:**
- Modify: `_layouts/home.html`

The current `home.html` layout renders hero buttons inline (side by side). With 5 buttons, they need to stack vertically and be centered below the hero text. We'll simplify the layout to only render the hero section.

- [ ] **Step 1: Replace `_layouts/home.html`**

Replace the entire file content with a simplified version that only renders the hero:

```html
---
layout: default
body_classes: page-home
---

{% if page.hero.enabled %} {% include components/hero.html
heading=page.hero.heading sub_heading=page.hero.sub_heading
background_image=page.hero.background_image
background_image_blend_mode=page.hero.background_image_blend_mode
background_color=page.hero.background_color
background_gradient=page.hero.background_gradient
text_color=page.hero.text_color fullscreen_mobile=page.hero.fullscreen_mobile
fullscreen_desktop=page.hero.fullscreen_desktop height=page.hero.height
buttons=page.hero.buttons %} {% else %} {% include components/title.html
title=page.title description=page.description image=page.image %} {% endif %}

{% if page.intro.enabled %}
<div class="strip strip-alt">
  <div id="infoContainer" class="container">
    {% include components/info.html heading=page.intro.heading
    sub_heading=page.intro.sub_heading align=page.intro.align
    features=page.intro.features buttons=page.intro.buttons
    image=page.intro.image %}
  </div>
</div>
{% endif %}

{% if page.outro.enabled %}
<div class="strip strip-alt">
  <div class="container">
    {% include components/info.html heading=page.outro.heading
    sub_heading=page.outro.sub_heading align=page.outro.align
    features=page.outro.features buttons=page.outro.buttons
    image=page.outro.image %}
  </div>
</div>
{% endif %}
```

- [ ] **Step 2: Add CSS for vertical button stacking**

Add to `assets/css/main.scss` (append to the existing custom styles at the bottom):

```scss
// Homepage nav buttons - stack vertically
.page-home .hero-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  .btn {
    min-width: 280px;
    text-align: center;
  }
}
```

- [ ] **Step 3: Verify in browser**

Run the Jekyll server and confirm:
- Buttons stack vertically on both mobile and desktop
- Buttons are centered under the hero text
- The outline button ("2년 전의 초심 확인") is visually distinct
- No promises grid, blog categories, or other sections appear

- [ ] **Step 4: Commit**

```bash
git add _layouts/home.html assets/css/main.scss
git commit -m "Simplify home layout: remove unused sections, stack nav buttons vertically"
```

---

### Task 3: Create 발전계획서 Page (`pages/vision.md`)

**Files:**
- Create: `pages/vision.md`

- [ ] **Step 1: Create `pages/vision.md`**

Create the file with the `basic` layout, PDF download buttons at top, and the full Korean development plan content from `assets/2026/md/2026-vision-kor.md`.

The frontmatter:

```yaml
---
layout: basic
title: "발전계획서"
permalink: "/vision/"
description: "김영오 33대 발전계획서"
header_transparent: false

hero:
  enabled: false
---
```

The body content should be:

1. Two PDF download links at the top:
```markdown
<div style="text-align: center; margin-bottom: 2rem;">
  <a href="/assets/2026/files/2026-vision-kor.pdf" class="btn btn-primary btn-lg mr-1" target="_blank">발전계획서 (한국어) PDF</a>
  <a href="/assets/2026/files/2026-vision-eng.pdf" class="btn btn-outline-primary btn-lg" target="_blank">Development Plan (English) PDF</a>
</div>
```

2. Then the full content of `assets/2026/md/2026-vision-kor.md` (everything from line 1 through line 104 — the title, intro paragraphs, and all 15 subsections 1-1 through 5-3).

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:4000/vision/`. Confirm:
- Title "발전계획서" appears
- Two PDF buttons at top (Korean primary, English outline)
- Full development plan renders with all 15 subsections
- Sidebar shows links (from `basic.html` layout)

- [ ] **Step 3: Commit**

```bash
git add pages/vision.md
git commit -m "Add 발전계획서 page with full development plan content"
```

---

### Task 4: Create 32대 학장단 실적 Page (`pages/achievements.md`)

**Files:**
- Create: `pages/achievements.md`

- [ ] **Step 1: Create `pages/achievements.md`**

Frontmatter:

```yaml
---
layout: basic
title: "32대 학장단 실적"
permalink: "/achievements/"
description: "32대 학장단 주요 실적 (2024.06 ~ 2026.03)"
header_transparent: false

hero:
  enabled: false
---
```

Body content — visual storytelling approach, weaving photos between metrics:

```markdown
**기간:** 2024년 6월 1일 ~ 2026년 3월 31일

---

{% include markdown/figure.html src="/assets/2026/images/last-term-pic-0.jpeg" %}

## 핵심 성과

### 재정 & 행정 기반 업그레이드

| 항목 | 내용 |
|------|------|
| **예산안 220억 원** | 역대 가장 높은 예산안 달성 |
| **시설투자비 1,000억 원** | AI·첨단분야 포함 시설투자비 확보 |
| **115건** | PHYCE 관련 연구지원 |
| **2025 최우수기관** | 서울대학교 최우수 행정기관 선정 |

{% include markdown/figure.html src="/assets/2026/images/last-term-pic-1.jpeg" %}

### 10배의 홍보

| 항목 | 내용 |
|------|------|
| **400+** | 2024년 기사 보도 건수 |
| **570+** | 홍보 콘텐츠 제작 |
| **100+** | MOU 체결 |

{% include markdown/figure.html src="/assets/2026/images/last-term-pic-2.jpeg" %}

### 신명나는 일터

| 항목 | 내용 |
|------|------|
| **1,400+** | 공간 정비 실적 |
| **건강검진** | 교수 건강검진 추가 지원 |
| **복지 프로그램** | 콜벤 픽업, 프로야구 관람 등 신규 복지 |

{% include markdown/figure.html src="/assets/2026/images/last-term-pic-3.png" %}

### 관산학 얼라이언스

| 항목 | 내용 |
|------|------|
| **80건+** | 관산학 협력 실적 |
| **Xpert System** | 연구자 지원 시스템 구축 |
| **국방공학센터** | 2025년 신규 출범 |
| **산업AI센터** | 2025년 신규 출범 |

{% include markdown/figure.html src="/assets/2026/images/last-term-pic-4.jpeg" %}

---

## 한눈에 보는 32대 학장단 실적

{% include markdown/figure.html src="/assets/2026/images/last-term-highlight.jpeg" %}

{% include markdown/figure.html src="/assets/2026/images/last-term-pic-5.jpeg" %}
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:4000/achievements/`. Confirm:
- Title shows "32대 학장단 실적"
- Photos appear between metric sections
- Tables render correctly
- Infographic image appears at bottom

- [ ] **Step 3: Commit**

```bash
git add pages/achievements.md
git commit -m "Add 32대 학장단 실적 page with photos and metrics"
```

---

### Task 5: Create Placeholder Legacy Page (`pages/legacy.md`)

**Files:**
- Create: `pages/legacy.md`

- [ ] **Step 1: Create `pages/legacy.md`**

```yaml
---
layout: basic
title: "2년 전의 초심 확인"
permalink: "/legacy/"
description: "2년 전의 초심 확인"
header_transparent: false

hero:
  enabled: false
---
```

Body:

```markdown
이 페이지는 준비 중입니다.

2년 전 첫 출마 당시의 비전과 약속을 정리하여 곧 공유드리겠습니다.
```

- [ ] **Step 2: Commit**

```bash
git add pages/legacy.md
git commit -m "Add placeholder legacy page (2년 전의 초심 확인)"
```

---

### Task 6: Update Navigation (`_data/menu.yml`)

**Files:**
- Modify: `_data/menu.yml`

- [ ] **Step 1: Replace `_data/menu.yml`**

Replace the entire file with:

```yaml
main:
  - name: 33대 학장에 출마하며
    url: /statement/
    weight: 1
  - name: 발전계획서
    url: /vision/
    weight: 2
  - name: 32대 학장단 실적
    url: /achievements/
    weight: 3
  - name: 2년 전의 초심 확인
    url: /legacy/
    weight: 4
  - name: 김영오는?
    url: /about/
    weight: 5

footer_primary:
  - name: 33대 학장에 출마하며
    url: /statement/
    weight: 1
  - name: 발전계획서
    url: /vision/
    weight: 2
  - name: 32대 학장단 실적
    url: /achievements/
    weight: 3
  - name: 2년 전의 초심 확인
    url: /legacy/
    weight: 4
  - name: 김영오는?
    url: /about/
    weight: 5

footer_tertiary:
```

- [ ] **Step 2: Verify navigation**

Refresh the site. Confirm:
- Header nav shows 5 items (no dropdowns/children)
- No "첫페이지" (Home) in nav — logo click goes home
- Footer shows same 5 links
- All links navigate to correct pages

- [ ] **Step 3: Commit**

```bash
git add _data/menu.yml
git commit -m "Simplify navigation to 5 flat items"
```

---

### Task 7: Update `_config.yml`

**Files:**
- Modify: `_config.yml`

- [ ] **Step 1: Remove unused collections from output**

In `_config.yml`, replace the `collections:` block with only what's needed (keep posts for Jekyll but disable output):

```yaml
collections:
  posts:
    output: false
```

- [ ] **Step 2: Remove unused defaults**

Replace the `defaults:` block with:

```yaml
defaults:
  - scope:
      path: "images"
    values:
      image: true
  - scope:
      path: "pages"
    values:
      permalink: /:basename/
```

- [ ] **Step 3: Update footer config**

Change the copyright line:

```yaml
  copyright: "© 2026 김영오"
```

Disable the footer secondary menu (already disabled) and the bottom menu:

```yaml
  enable_bottom_menu: false
```

- [ ] **Step 4: Verify the site builds without errors**

Run:
```bash
cd /Users/seandkim/projects/yokim05/yokim05-snu-eng && bundle exec jekyll build 2>&1
```

Expected: Build succeeds with no errors. May show warnings about unused collection files — that's fine.

- [ ] **Step 5: Commit**

```bash
git add _config.yml
git commit -m "Simplify config: remove unused collections and defaults, update footer"
```

---

### Task 8: Update Basic Layout Sidebar

**Files:**
- Modify: `_layouts/basic.html`

The current `basic.html` layout has a hardcoded sidebar with links to "학장에 출마하며" and "김영오는?". Update it to reflect the new page structure.

- [ ] **Step 1: Update the sidebar in `_layouts/basic.html`**

Replace the sidebar `<ul>` content (lines 28-35) with:

```html
      <div class="col-12 col-lg-3">
        <div class="sidebar">
          <h5>바로가기</h5>
          <ul>
            <li>
              <a href="/statement/">33대 학장에 출마하며</a>
            </li>
            <li>
              <a href="/vision/">발전계획서</a>
            </li>
            <li>
              <a href="/achievements/">32대 학장단 실적</a>
            </li>
            <li>
              <a href="/legacy/">2년 전의 초심 확인</a>
            </li>
            <li>
              <a href="/about/">김영오는?</a>
            </li>
          </ul>
        </div>
      </div>
```

- [ ] **Step 2: Verify sidebar on content pages**

Navigate to any content page (e.g., `/statement/`). Confirm the sidebar shows all 5 links.

- [ ] **Step 3: Commit**

```bash
git add _layouts/basic.html
git commit -m "Update basic layout sidebar with new page links"
```

---

### Task 9: Remove Unused Pages

**Files:**
- Delete: `pages/promises.md`
- Delete: `pages/visions.md`
- Delete: `pages/blog.md`
- Delete: `pages/blog_categories.md`
- Delete: `pages/projects.md`
- Delete: `pages/team.md`
- Delete: `pages/courses.md`
- Delete: `pages/contact.md`
- Delete: `pages/categories.md`
- Delete: `pages/privacy.md`
- Delete: `pages/terms.md`
- Delete: `pages/success.md`

- [ ] **Step 1: Delete unused page files**

```bash
cd /Users/seandkim/projects/yokim05/yokim05-snu-eng
rm pages/promises.md pages/visions.md pages/blog.md pages/blog_categories.md pages/projects.md pages/team.md pages/courses.md pages/contact.md pages/categories.md pages/privacy.md pages/terms.md pages/success.md
```

- [ ] **Step 2: Verify site still builds**

```bash
bundle exec jekyll build 2>&1
```

Expected: Build succeeds. Only 6 pages should be generated (home, statement, vision, achievements, legacy, about).

- [ ] **Step 3: Commit**

```bash
git add -u pages/
git commit -m "Remove unused page files"
```

---

### Task 10: Final Verification

- [ ] **Step 1: Run the full site and verify all pages**

```bash
cd /Users/seandkim/projects/yokim05/yokim05-snu-eng && bundle exec jekyll serve
```

Check each page:
- `/` — Hero with Thomas's text, 5 buttons, no other sections
- `/statement/` — Candidacy letter with sidebar
- `/vision/` — PDF buttons + full development plan
- `/achievements/` — Photos + metrics visual story
- `/legacy/` — Placeholder message
- `/about/` — Full CV/bio

Check navigation:
- Header: 5 nav items, all link correctly
- Footer: 5 links + copyright "© 2026 김영오"
- Logo click → homepage

- [ ] **Step 2: Check mobile responsiveness**

Use browser dev tools to check at 375px width:
- Hero text is readable
- Buttons stack and fit
- Nav collapses to hamburger menu
- Content pages are readable

- [ ] **Step 3: Final commit if any fixes needed**

If any adjustments were needed during verification, commit them:

```bash
git add -A
git commit -m "Fix issues found during final verification"
```

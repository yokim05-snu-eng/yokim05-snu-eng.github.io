---
layout: home
permalink: "/"
title: "Kim, Young Oh"
description: "서울공대 33대 학장에 출마합니다."
header_transparent: true
meta_title: 서울대학교 김영오
meta_og_image: "https://yokim05-snu-eng.github.io/assets/2026/images/preview-2026.png"
meta_og_title: "김영오 홈페이지"
meta_og_description: "서울공대 33대 학장에 출마합니다."
meta_og_url: "https://yokim05-snu-eng.github.io/"

hero:
  enabled: false
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

<div class="home-dark">

  <!-- ── HERO ── -->
  <section class="home-hero">
    <div class="home-hero-bg" style="background-image: url('/assets/images/home/4-solo3.jpeg');"></div>
    <div class="home-hero-content">
      <span class="home-hero-badge">33대 서울공대 학장 후보</span>
      <h1 class="home-hero-name">김영오</h1>
      <p class="home-hero-slogan">변화의 가속</p>
      <p class="home-hero-quote">
        '변화의 시작'을 제안한 학장으로서<br>
        계속 방향타를 잡고 '변화의 가속' 페달을 밟기 위해<br>
        다시 한번 학장 후보로 나섰습니다.
      </p>
      <div class="home-hero-election">
        <span class="home-hero-election-date">2026. 4. 20 — 21</span>
        <span class="home-hero-election-label">투표일</span>
      </div>
    </div>
    <div class="home-hero-scroll" onclick="window.scrollBy({top: window.innerHeight * 0.8, behavior: 'smooth'})" role="button" tabindex="0" aria-label="아래로 스크롤">
      <span class="home-scroll-text">아래로 스크롤</span>
      <svg class="home-scroll-arrow" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </section>

  <!-- ── KEY NUMBERS ── -->
  <section class="home-numbers" data-reveal>
    <span class="home-section-label">32대 학장단 핵심 실적</span>
    <h2 class="home-section-title">KEY ACHIEVEMENTS</h2>
    <div class="home-numbers-grid">
      <div class="home-num-card">
        <span class="home-num counter" data-target="220">0</span>
        <span class="home-num-unit">억원</span>
        <span class="home-num-desc">발전기금 유치</span>
      </div>
      <div class="home-num-card">
        <span class="home-num counter" data-target="1000" data-comma="true">0</span>
        <span class="home-num-unit">억원</span>
        <span class="home-num-desc">시설 인프라 추진</span>
      </div>
      <div class="home-num-card">
        <span class="home-num counter" data-target="1000" data-comma="true">0</span>
        <span class="home-num-unit">여건</span>
        <span class="home-num-desc">언론 보도</span>
      </div>
      <div class="home-num-card">
        <span class="home-num counter" data-target="14" data-decimal="true">0</span>
        <span class="home-num-unit">억원</span>
        <span class="home-num-desc">복지 확대</span>
      </div>
    </div>
    <div class="home-numbers-badge">
      <span>2025 서울대학교 최우수 행정기관<br>한국이공학진흥원 최고학장상</span>
    </div>
    <div class="home-numbers-scroll" onclick="window.scrollBy({top: window.innerHeight * 0.8, behavior: 'smooth'})" role="button" tabindex="0" aria-label="아래로 스크롤">
      <span class="home-scroll-text">아래로 스크롤</span>
      <svg class="home-scroll-arrow" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </section>

  <!-- ── CLOSING ── -->
  <section class="home-closing" data-reveal>
    <blockquote class="home-closing-quote">
      지금 핸들을 잡고 있는 사람이<br>가속기어를 잘 넣을 수 있습니다.
    </blockquote>
    <p class="home-closing-sub">여러분의 지지를 부탁드립니다.</p>
  </section>

  {% include components/page-nav.html current="/" %}

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  // Scroll-triggered reveals
  var sections = document.querySelectorAll('[data-reveal]');
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(function (s) { revealObs.observe(s); });

  // Counter animations
  var counters = document.querySelectorAll('.counter');
  var counterObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (c) { counterObs.observe(c); });

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var useComma = el.getAttribute('data-comma') === 'true';
    var useDecimal = el.getAttribute('data-decimal') === 'true';
    var duration = 1800;
    var start = performance.now();
    function step(now) {
      var t = Math.min((now - start) / duration, 1);
      var ease = 1 - Math.pow(1 - t, 3);
      var val = Math.round(ease * target);
      if (useDecimal) {
        el.textContent = (val / 10).toFixed(1);
      } else {
        el.textContent = useComma ? val.toLocaleString() : val;
      }
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
});
</script>

---
layout: achievements
title: "32대 학장단 실적"
permalink: "/achievements/"
header_transparent: true
hero:
  enabled: false
---

<div class="ach-dark">

  <section class="ach-dark-hero">
    <span class="ach-dark-period">2024. 06 — 2026. 03</span>
    <h1 class="ach-dark-title">32대 학장단 실적</h1>
    <span class="ach-dark-sub">핵심 성과 &middot; KEY ACHIEVEMENTS</span>
    <div class="ach-dark-scroll-hint">
      <svg width="20" height="28" viewBox="0 0 20 28" fill="none"><rect x="1" y="1" width="18" height="26" rx="9" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><circle class="ach-scroll-dot" cx="10" cy="8" r="2" fill="rgba(255,255,255,0.5)"/></svg>
    </div>
  </section>

  <section class="ach-dark-domain" data-reveal>
    <span class="ach-dark-label">01</span>
    <h2 class="ach-dark-domain-title">재정&행정 기반 업그레이드</h2>
    <div class="ach-dark-hero-stat">
      <span class="ach-dark-big counter" data-target="220">0</span>
      <span class="ach-dark-big-unit">억 원</span>
    </div>
    <p class="ach-dark-hero-desc">역대 최고 예산안 달성</p>
    <div class="ach-dark-row">
      <div class="ach-dark-cell">
        <span class="ach-dark-cell-num counter" data-target="1000" data-comma="true">0</span>
        <span class="ach-dark-cell-unit">억 원</span>
        <span class="ach-dark-cell-desc">AI·첨단분야 시설투자비</span>
      </div>
      <div class="ach-dark-cell">
        <span class="ach-dark-cell-num counter" data-target="115">0</span>
        <span class="ach-dark-cell-unit">건</span>
        <span class="ach-dark-cell-desc">PHYCE 연구지원</span>
      </div>
      <div class="ach-dark-cell ach-dark-cell--badge">
        <span class="ach-dark-badge-text">2025 최우수<br>행정기관</span>
      </div>
    </div>
  </section>

  <section class="ach-dark-domain" data-reveal>
    <span class="ach-dark-label">02</span>
    <h2 class="ach-dark-domain-title">10배의 홍보</h2>
    <div class="ach-dark-trio">
      <div class="ach-dark-trio-item">
        <span class="ach-dark-trio-num counter" data-target="400">0</span>
        <span class="ach-dark-trio-plus">+</span>
        <span class="ach-dark-trio-desc">기사 보도</span>
      </div>
      <div class="ach-dark-trio-div"></div>
      <div class="ach-dark-trio-item">
        <span class="ach-dark-trio-num counter" data-target="570">0</span>
        <span class="ach-dark-trio-plus">+</span>
        <span class="ach-dark-trio-desc">홍보 콘텐츠</span>
      </div>
      <div class="ach-dark-trio-div"></div>
      <div class="ach-dark-trio-item">
        <span class="ach-dark-trio-num counter" data-target="100">0</span>
        <span class="ach-dark-trio-plus">+</span>
        <span class="ach-dark-trio-desc">MOU 체결</span>
      </div>
    </div>
  </section>

  <section class="ach-dark-domain" data-reveal>
    <span class="ach-dark-label">03</span>
    <h2 class="ach-dark-domain-title">신명나는 일터</h2>
    <div class="ach-dark-hero-stat">
      <span class="ach-dark-big counter" data-target="1400" data-comma="true">0</span>
      <span class="ach-dark-big-plus">+</span>
    </div>
    <p class="ach-dark-hero-desc">공간 정비 실적</p>
    <div class="ach-dark-checks">
      <div class="ach-dark-check">교수 건강검진 추가 지원</div>
      <div class="ach-dark-check">콜벤 픽업, 프로야구 관람 등 신규 복지 도입</div>
    </div>
  </section>

  <section class="ach-dark-domain" data-reveal>
    <span class="ach-dark-label">04</span>
    <h2 class="ach-dark-domain-title">관산학 얼라이언스</h2>
    <div class="ach-dark-hero-stat">
      <span class="ach-dark-big counter" data-target="80">0</span>
      <span class="ach-dark-big-unit">건</span>
      <span class="ach-dark-big-plus">+</span>
    </div>
    <p class="ach-dark-hero-desc">관산학 협력 실적</p>
    <div class="ach-dark-checks">
      <div class="ach-dark-check">연구자 지원 Xpert System 구축</div>
      <div class="ach-dark-check">연구팀 확대</div>
      <div class="ach-dark-check">학생 인프라 확충</div>
      <div class="ach-dark-check">산업체 연계 강화</div>
    </div>
  </section>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var domains = document.querySelectorAll('[data-reveal]');
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  domains.forEach(function (d) { revealObs.observe(d); });

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
    var duration = 1800;
    var start = performance.now();
    function step(now) {
      var t = Math.min((now - start) / duration, 1);
      var ease = 1 - Math.pow(1 - t, 3);
      var val = Math.round(ease * target);
      el.textContent = useComma ? val.toLocaleString() : val;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
});
</script>

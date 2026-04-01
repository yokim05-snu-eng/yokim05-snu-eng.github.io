---
layout: achievements
title: "32대 학장단 실적"
permalink: "/achievements/"
header_transparent: false
hero:
  enabled: false
---

<section class="ach-hero">
  <div class="container">
    <span class="ach-period">2024. 06 — 2026. 03</span>
    <h1 class="ach-page-title">32대 학장단 실적</h1>
  </div>
</section>

<section class="ach-section">
  <div class="container">
    <div class="ach-section-header">
      <h2 class="ach-section-title">핵심 성과</h2>
      <span class="ach-section-sub">KEY ACHIEVEMENTS</span>
      <div class="ach-section-rule"></div>
    </div>

    <div class="ach-grid">

      <div class="ach-card" data-reveal>
        <div class="ach-card-accent"></div>
        <h3 class="ach-card-title">재정&행정 기반 업그레이드</h3>
        <div class="ach-metrics">
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="220">0</span><span class="ach-unit">억 원</span>
            </div>
            <div class="ach-metric-desc">역대 최고 예산안 달성</div>
          </div>
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="1000" data-comma="true">0</span><span class="ach-unit">억 원</span>
            </div>
            <div class="ach-metric-desc">AI·첨단분야 시설투자비 확보</div>
          </div>
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="115">0</span><span class="ach-unit">건</span>
            </div>
            <div class="ach-metric-desc">PHYCE 연구지원</div>
          </div>
          <div class="ach-badge">2025 최우수 행정기관 선정</div>
        </div>
      </div>

      <div class="ach-card" data-reveal>
        <div class="ach-card-accent"></div>
        <h3 class="ach-card-title">10배의 홍보</h3>
        <div class="ach-metrics">
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="400">0</span><span class="ach-plus">+</span>
            </div>
            <div class="ach-metric-desc">기사 보도 건수</div>
          </div>
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="570">0</span><span class="ach-plus">+</span>
            </div>
            <div class="ach-metric-desc">홍보 콘텐츠 제작</div>
          </div>
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="100">0</span><span class="ach-plus">+</span>
            </div>
            <div class="ach-metric-desc">MOU 체결</div>
          </div>
        </div>
      </div>

      <div class="ach-card" data-reveal>
        <div class="ach-card-accent"></div>
        <h3 class="ach-card-title">신명나는 일터</h3>
        <div class="ach-metrics">
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="1400" data-comma="true">0</span><span class="ach-plus">+</span>
            </div>
            <div class="ach-metric-desc">공간 정비 실적</div>
          </div>
          <div class="ach-check">교수 건강검진 추가 지원</div>
          <div class="ach-check">콜벤 픽업, 프로야구 관람 등 신규 복지 도입</div>
        </div>
      </div>

      <div class="ach-card" data-reveal>
        <div class="ach-card-accent"></div>
        <h3 class="ach-card-title">관산학 얼라이언스</h3>
        <div class="ach-metrics">
          <div class="ach-metric">
            <div class="ach-metric-value">
              <span class="counter" data-target="80">0</span><span class="ach-unit">건</span><span class="ach-plus">+</span>
            </div>
            <div class="ach-metric-desc">관산학 협력 실적</div>
          </div>
          <div class="ach-check">연구자 지원 Xpert System 구축</div>
          <div class="ach-check">연구팀 확대</div>
          <div class="ach-check">학생 인프라 확충</div>
          <div class="ach-check">산업체 연계 강화</div>
        </div>
      </div>

    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
  // Card reveal on scroll
  var cards = document.querySelectorAll('[data-reveal]');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var idx = Array.from(cards).indexOf(entry.target);
        setTimeout(function () {
          entry.target.classList.add('is-visible');
        }, idx * 120);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  cards.forEach(function (c) { revealObserver.observe(c); });

  // Counter animation
  var counters = document.querySelectorAll('.counter');
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (c) { counterObserver.observe(c); });

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var useComma = el.getAttribute('data-comma') === 'true';
    var duration = 1400;
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

---
layout: resources
title: "자료실"
permalink: "/resources/"
header_transparent: true
meta_og_title: "김영오 홈페이지 — 자료실"
meta_og_description: "서울공대 33대 학장 후보 김영오의 주요 자료를 다운로드하세요."
meta_og_image: "https://yokim05-snu-eng.github.io/assets/2026/images/preview-2026.png"
meta_og_url: "https://yokim05-snu-eng.github.io/resources/"
hero:
  enabled: false
---

<div class="res-dark">

  <section class="res-dark-hero">
    <span class="res-dark-period">RESOURCES</span>
    <h1 class="res-dark-title">자료실</h1>
    <!-- <p class="res-dark-sub">발전계획서 및 주요 자료를 다운로드하실 수 있습니다.</p> -->
  </section>

  <section class="res-dark-files" data-reveal>
    <div class="res-dark-files-inner">

      <a href="/assets/2026/files/2026-vision-kor.pdf" target="_blank" class="res-card">
        <div class="res-card-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
        </div>
        <div class="res-card-body">
          <span class="res-card-title">발전계획서 (국문)</span>
          <span class="res-card-meta">PDF &middot; 한국어</span>
        </div>
        <div class="res-card-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </div>
      </a>

      <a href="/assets/2026/files/2026-vision-eng.pdf" target="_blank" class="res-card">
        <div class="res-card-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
        </div>
        <div class="res-card-body">
          <span class="res-card-title">Development Plan (English)</span>
          <span class="res-card-meta">PDF &middot; English</span>
        </div>
        <div class="res-card-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </div>
      </a>

    </div>
  </section>

  {% include components/page-nav.html current="/resources/" %}

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('[data-reveal]');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(function (el) { obs.observe(el); });
});
</script>

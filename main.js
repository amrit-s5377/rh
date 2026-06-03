/* ======================================================
   Roosevelt Hotel — Main JavaScript
   Plain vanilla JS + GSAP + ScrollTrigger
====================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ---- Helpers ---- */
function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }

/* ==============================
   LOADER — shows only once per session
============================== */
function runLoader() {
  const loader = $('#loader');
  const bar    = $('#loader-bar');
  const site   = $('#site');

  const alreadyShown = sessionStorage.getItem('rh_loader_shown');

  function revealSite() {
    loader.style.display = 'none';
    site.classList.remove('site-hidden');
    site.classList.add('site-visible');
    initHeroAnimations();
    initScrollAnimations();
    initCarousel();
  }

  if (alreadyShown) {
    /* Skip loader on subsequent visits within the same session */
    revealSite();
    return;
  }

  sessionStorage.setItem('rh_loader_shown', '1');

  const tl = gsap.timeline({ onComplete: revealSite });
  tl.to(bar,    { width: '100%', duration: 2.4, ease: 'power2.inOut' })
    .to(loader, { clipPath: 'inset(100% 0 0 0)', duration: 0.9, ease: 'power3.inOut' }, '-=0.1');
}

/* ==============================
   NAVBAR
============================== */
function initNavbar() {
  window.addEventListener('scroll', () => {
    const navbar = $('#navbar');
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

window.toggleMobile = function () {
  $('#mobile-menu').classList.toggle('open');
};

window.closeMobile = function () {
  $('#mobile-menu').classList.remove('open');
};

/* ==============================
   HERO ANIMATIONS
============================== */
function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('.hero-badge',    { opacity: 1, y: 0, duration: 0.75 }, 0.1)
    .to('.hero-title',    { opacity: 1, y: 0, duration: 0.9  }, 0.3)
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.75 }, 0.55)
    .to('.hero-ctas',     { opacity: 1, y: 0, duration: 0.7  }, 0.75)
    .to('.hero-stats',    { opacity: 1, y: 0, duration: 0.6  }, 0.9)
    .to('.scroll-hint',   { opacity: 1, duration: 0.5        }, 1.1);

  /* Parallax on hero background */
  gsap.to('#hero-bg', {
    yPercent: 22,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
}

/* ==============================
   SCROLL ANIMATIONS
============================== */
function initScrollAnimations() {

  $$('.js-reveal-up').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.85, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 82%' }
    });
  });

  $$('.js-reveal-left').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' }
    });
  });

  $$('.js-reveal-right').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 75%' }
    });
  });

  /* Stagger cards grouped by parent */
  const staggerGroups = new Map();
  $$('.js-stagger').forEach(el => {
    const p = el.parentElement;
    if (!staggerGroups.has(p)) staggerGroups.set(p, []);
    staggerGroups.get(p).push(el);
  });

  staggerGroups.forEach((group, parent) => {
    gsap.to(group, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: parent, start: 'top 78%' }
    });
  });

  /* Room cards */
  gsap.to('.room-card', {
    opacity: 1, x: 0, duration: 0.75, stagger: 0.12, ease: 'power2.out',
    scrollTrigger: { trigger: '.rooms', start: 'top 75%' }
  });

  /* Animated stat counters */
  ScrollTrigger.create({
    trigger: '.stats-grid',
    start: 'top 75%',
    once: true,
    onEnter: animateCounters
  });
}

/* ==============================
   COUNTER ANIMATION
============================== */
function animateCounters() {
  $$('.stat-number').forEach(el => {
    const target  = parseFloat(el.dataset.target);
    const suffix  = el.dataset.suffix  || '';
    const decimal = parseInt(el.dataset.decimal || '0');
    const obj     = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        const v = decimal > 0 ? obj.val.toFixed(decimal) : Math.round(obj.val);
        el.textContent = v + suffix;
      }
    });
  });
}

/* ==============================
   GALLERY LIGHTBOX
============================== */
function initGallery() {
  const photos   = window.GALLERY_PHOTOS;
  const triggers = $$('[data-gallery-open]');
  if (!photos || !photos.length || !triggers.length) return;

  // build the lightbox overlay once
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML =
    '<button class="lb-close" aria-label="Close gallery">&#10005;</button>' +
    '<button class="lb-nav lb-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure class="lb-stage"><img class="lb-img" src="" alt="" /><figcaption class="lb-cap"></figcaption></figure>' +
    '<button class="lb-nav lb-next" aria-label="Next photo">&#8250;</button>' +
    '<div class="lb-count"></div>';
  document.body.appendChild(lb);

  const img   = lb.querySelector('.lb-img');
  const cap   = lb.querySelector('.lb-cap');
  const count = lb.querySelector('.lb-count');
  let idx = 0;

  function show(i) {
    idx = (i % photos.length + photos.length) % photos.length;
    img.src = photos[idx].src;
    img.alt = photos[idx].cap || '';
    cap.textContent = photos[idx].cap || '';
    count.textContent = (idx + 1) + ' / ' + photos.length;
  }
  function open(i) { show(i); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }

  triggers.forEach(t => t.addEventListener('click', () => open(parseInt(t.dataset.galleryOpen || '0', 10))));
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'ArrowRight') show(idx + 1);
  });
}

/* ==============================
   REVIEWS CAROUSEL
============================== */
let carouselIndex = 0;
let carouselTotal = 0;
let carouselTimer = null;

function initCarousel() {
  carouselTotal = $$('.review-slide').length;
  if (!carouselTotal || !$('#carousel-dots')) return;
  buildDots();
  updateCarousel(0, false);
  startAutoplay();
}

function buildDots() {
  const container = $('#carousel-dots');
  container.innerHTML = '';
  for (let i = 0; i < carouselTotal; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Review ${i + 1}`);
    dot.addEventListener('click', () => { stopAutoplay(); updateCarousel(i); startAutoplay(); });
    container.appendChild(dot);
  }
}

function updateCarousel(index, animate = true) {
  carouselIndex = ((index % carouselTotal) + carouselTotal) % carouselTotal;
  gsap.to('#carousel-track', {
    x: `-${carouselIndex * 100}%`,
    duration: animate ? 0.6 : 0,
    ease: 'power2.inOut'
  });
  $$('.dot').forEach((dot, i) => dot.classList.toggle('active', i === carouselIndex));
}

window.carouselPrev = function () { stopAutoplay(); updateCarousel(carouselIndex - 1); startAutoplay(); };
window.carouselNext = function () { stopAutoplay(); updateCarousel(carouselIndex + 1); startAutoplay(); };

function startAutoplay() {
  carouselTimer = setInterval(() => updateCarousel(carouselIndex + 1), 5000);
}
function stopAutoplay() {
  clearInterval(carouselTimer);
}

/* ==============================
   DRAG-SCROLL ROOMS
============================== */
function initDragScroll() {
  const scroll = $('.rooms-scroll');
  if (!scroll) return;

  let isDown = false, startX, scrollLeft;
  scroll.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - scroll.offsetLeft; scrollLeft = scroll.scrollLeft; });
  scroll.addEventListener('mouseleave', () => { isDown = false; });
  scroll.addEventListener('mouseup',    () => { isDown = false; });
  scroll.addEventListener('mousemove',  e => {
    if (!isDown) return;
    e.preventDefault();
    scroll.scrollLeft = scrollLeft - (e.pageX - scroll.offsetLeft - startX) * 1.5;
  });
}

/* ==============================
   STICKY ANCHOR NAV — scroll-spy
============================== */
function initAnchorNav() {
  const nav = $('#anchorNav');
  if (!nav) return;

  const links = $$('.anchor-link', nav);
  const sections = links.map(l => {
    const id = l.getAttribute('href');
    return id && id.startsWith('#') ? $(id) : null;
  });

  const css = getComputedStyle(document.documentElement);
  const navH    = parseInt(css.getPropertyValue('--nav-h'))    || 80;
  const anchorH = parseInt(css.getPropertyValue('--anchor-h')) || 56;
  const offset  = navH + anchorH + 24;

  function update() {
    let activeIdx = 0;
    sections.forEach((s, i) => {
      if (s && s.getBoundingClientRect().top <= offset) activeIdx = i;
    });
    links.forEach((l, i) => l.classList.toggle('active', i === activeIdx));

    /* keep the active link in view within the scrollable nav bar */
    const active = links[activeIdx];
    if (active) {
      const r = active.getBoundingClientRect();
      const cr = nav.getBoundingClientRect();
      if (r.left < cr.left || r.right > cr.right) {
        active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      }
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

/* ==============================
   BACK TO TOP BUTTON
============================== */
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}

window.scrollToTop = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* ==============================
   FOOTER YEAR
============================== */
function setYear() {
  const el = $('#year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ==============================
   INIT
============================== */
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  initNavbar();
  initGallery();
  initDragScroll();
  initBackToTop();
  initAnchorNav();
  runLoader();
});

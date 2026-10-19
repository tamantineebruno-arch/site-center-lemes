/* Center Lemes — comportamento da página */
(function () {
  'use strict';

  var WHATS = 'https://wa.me/5515996913174';

  /* ---------- header com estado ao rolar ---------- */
  var header = document.querySelector('.header');
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- menu mobile ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu-mobile');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
      menu.classList.toggle('is-open', !open);
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      }
    });
  }

  /* ---------- serviços (abas) ---------- */
  var SERVICES = {
    suspensao: {
      title: 'Suspensão',
      desc: 'Manutenção preventiva e corretiva completa em sistemas de suspensão de veículos pesados — estabilidade e conforto de volta ao seu veículo.',
      img: 'assets/media/molejos.webp',
      alt: 'Mecânico ajustando o feixe de molas da suspensão de um caminhão',
      cap: 'Suspensão de pesados',
      specs: ['Feixe de molas', 'Buchas', 'Amortecedores', 'Alinhamento do conjunto'],
      cta: 'Pedir orçamento de suspensão',
      msg: 'Quero orçamento de SUSPENSÃO para meu caminhão.'
    },
    freios: {
      title: 'Freios',
      desc: 'Revisão e manutenção de freios de veículos pesados, garantindo a sua segurança e a de quem está na estrada com você.',
      img: 'assets/media/freios.webp',
      alt: 'Mecânico instalando um disco de freio novo em caminhão',
      cap: 'Sistema de freios',
      specs: ['Lonas e pastilhas', 'Discos e tambores', 'Cilindros e válvulas', 'Ajuste do conjunto'],
      cta: 'Pedir orçamento de freios',
      msg: 'Quero orçamento de FREIOS para meu caminhão.'
    },
    soldas: {
      title: 'Soldas',
      desc: 'Reparo e substituição de peças de forma ágil e segura, com técnicas avançadas de soldagem para estruturas e componentes.',
      img: 'assets/media/solda.webp',
      alt: 'Soldador trabalhando com faíscas na parte inferior de um veículo',
      cap: 'Solda e recuperação',
      specs: ['Estruturas', 'Componentes', 'Recuperação de peças', 'Reforço'],
      cta: 'Pedir orçamento de solda',
      msg: 'Quero orçamento de SOLDA para meu caminhão.'
    },
    embuchamentos: {
      title: 'Embuchamentos',
      desc: 'Reparos em embuchamentos com a substituição das peças desgastadas por novas, devolvendo o bom estado e a firmeza do conjunto.',
      img: 'assets/media/buchas.webp',
      alt: 'Mão de mecânico trabalhando em bucha de suspensão de caminhão',
      cap: 'Embuchamento de suspensão',
      specs: ['Buchas novas', 'Eixos e pinos', 'Conjunto refeito', 'Teste de folga'],
      cta: 'Pedir orçamento de embuchamento',
      msg: 'Quero orçamento de EMBUCHAMENTO para meu caminhão.'
    },
    molejos: {
      title: 'Arqueamento de molejos',
      desc: 'Arqueamento e recuperação de feixes de molas para o seu pesado voltar a suportar carga com a altura e a resistência corretas.',
      img: 'assets/media/feixe-molas.webp',
      alt: 'Feixe de molas instalado em eixo de caminhão',
      cap: 'Arqueamento de molejos',
      specs: ['Arqueamento', 'Recuperação de feixe', 'Altura de carga', 'Folhas e grampos'],
      cta: 'Pedir orçamento de molejos',
      msg: 'Quero orçamento de ARQUEAMENTO DE MOLEJOS para meu caminhão.'
    },
    pecas: {
      title: 'Peças a pronta entrega',
      desc: 'Estoque próprio de peças para a manutenção começar na hora — sem espera e sem enrolação. Traga o veículo para uma avaliação.',
      img: 'assets/media/interior.webp',
      alt: 'Interior da oficina com balcão e estoque de peças',
      cap: 'Estoque próprio',
      specs: ['Suspensão', 'Freios', 'Molas', 'Consumíveis'],
      cta: 'Consultar peças em estoque',
      msg: 'Quero consultar PEÇAS em estoque.'
    }
  };

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.svc__btn'));
  var panel = document.getElementById('panel-servicos');
  var elImg = document.getElementById('svc-img');
  var elCap = document.getElementById('svc-cap');
  var elTitle = document.getElementById('svc-title');
  var elDesc = document.getElementById('svc-desc');
  var elSpecs = document.getElementById('svc-specs');
  var elCta = document.getElementById('svc-cta');

  function selectTab(btn, focus) {
    var key = btn.getAttribute('data-svc');
    var data = SERVICES[key];
    if (!data) return;

    tabs.forEach(function (t) {
      var on = t === btn;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    if (panel) panel.setAttribute('aria-labelledby', btn.id);

    if (elImg) { elImg.style.opacity = '0'; }
    window.setTimeout(function () {
      if (elImg) { elImg.src = data.img; elImg.alt = data.alt; elImg.style.opacity = '1'; }
      if (elCap) elCap.textContent = data.cap;
      if (elTitle) elTitle.textContent = data.title;
      if (elDesc) elDesc.textContent = data.desc;
      if (elSpecs) elSpecs.innerHTML = data.specs.map(function (s) { return '<span>' + s + '</span>'; }).join('');
      if (elCta) {
        elCta.textContent = data.cta;
        elCta.href = WHATS + '?text=' + encodeURIComponent('Olá! ' + data.msg);
      }
    }, elImg && elImg.style.opacity === '0' ? 90 : 0);

    if (focus) btn.focus();
  }

  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () { selectTab(btn, false); });
    btn.addEventListener('keydown', function (e) {
      var i = tabs.indexOf(btn), next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0];
      if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); selectTab(next, true); }
    });
  });

  /* ---------- revelação ao rolar ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- vídeos dos clipes: só tocam quando visíveis ---------- */
  var clips = document.querySelectorAll('.clip video');
  if ('IntersectionObserver' in window && clips.length) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) {
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    clips.forEach(function (v) { vio.observe(v); });
  }

  /* ---------- lightbox da galeria ---------- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbCap = document.getElementById('lb-cap');
  var lbClose = document.getElementById('lb-close');
  var lastFocus = null;

  function openLB(btn) {
    if (!lb || !lbImg) return;
    lastFocus = btn;
    lbImg.src = btn.getAttribute('data-full');
    lbImg.alt = btn.getAttribute('data-cap') || '';
    if (lbCap) lbCap.textContent = btn.getAttribute('data-cap') || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (lbClose) lbClose.focus();
  }
  function closeLB() {
    if (!lb) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll('.shot').forEach(function (btn) {
    btn.addEventListener('click', function () { openLB(btn); });
  });
  if (lbClose) lbClose.addEventListener('click', closeLB);
  if (lb) lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLB(); });

  /* ---------- formulário → WhatsApp ---------- */
  var form = document.getElementById('orcamento');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = (document.getElementById('nome') || {}).value || '';
      var veiculo = (document.getElementById('veiculo') || {}).value || '';
      var servico = (document.getElementById('servico') || {}).value || '';
      var msg = (document.getElementById('msg') || {}).value || '';
      nome = nome.trim();

      if (!nome) {
        var campo = document.getElementById('nome');
        if (campo) { campo.focus(); campo.style.borderColor = '#ff6b6b'; }
        return;
      }

      var texto = 'Olá! Vim pelo site da Center Lemes.\n'
        + 'Nome: ' + nome + '\n'
        + 'Veículo: ' + veiculo + '\n'
        + 'Serviço: ' + servico
        + (msg.trim() ? '\nDetalhe: ' + msg.trim() : '');

      window.open(WHATS + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
    });
    var nomeInput = document.getElementById('nome');
    if (nomeInput) {
      nomeInput.addEventListener('input', function () { nomeInput.style.borderColor = ''; });
    }
  }

  /* ---------- ano do rodapé ---------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();

/* ==========================================================================
   CAMADA V3 — movimento
   ========================================================================== */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WHATS = 'https://wa.me/5515996913174';

  /* ---------- barra de progresso ---------- */
  var bar = document.getElementById('scroll-progress');
  var docEl = document.documentElement;
  function progress() {
    if (!bar) return;
    var max = docEl.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + '%';
  }

  /* ---------- CTA fixo + FAB ---------- */
  var stickyCta = document.getElementById('sticky-cta');
  var hero = document.querySelector('.hero');
  function stickyState() {
    if (!stickyCta || !hero) return;
    var pastHero = window.scrollY > hero.offsetHeight * 0.75;
    var nearEnd = window.scrollY + window.innerHeight > docEl.scrollHeight - 420;
    stickyCta.classList.toggle('is-visible', pastHero && !nearEnd);
  }

  /* ---------- parallax ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('.parallax-img img, .hero__media video'));
  function parallax() {
    if (reduce) return;
    var vh = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var mid = r.top + r.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (mid * -0.055).toFixed(2) + 'px,0) scale(1.06)';
    });
  }

  /* ---------- contadores ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('.count'));
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var comma = el.getAttribute('data-comma') === '1';
    var dur = 1300, t0 = null;
    function frame(ts) {
      if (!t0) t0 = ts;
      var k = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - k, 3);
      var val = target * eased;
      var txt = dec > 0 ? val.toFixed(dec) : Math.round(val).toString();
      el.textContent = comma ? txt.replace('.', ',') : txt;
      if (k < 1) window.requestAnimationFrame(frame);
    }
    if (reduce) {
      el.textContent = comma ? String(target).replace('.', ',') : String(target);
      return;
    }
    window.requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- tilt 3D + brilho seguindo o cursor ---------- */
  var tilts = Array.prototype.slice.call(document.querySelectorAll('.tilt'));
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (fine && !reduce) {
    tilts.forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        var rx = (0.5 - py) * 7;
        var ry = (px - 0.5) * 7;
        el.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
        el.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        el.style.setProperty('--my', (py * 100).toFixed(1) + '%');
      });
      el.addEventListener('pointerleave', function () {
        el.style.transform = '';
      });
    });
  }

  /* ---------- placa do hero: profundidade com o mouse ---------- */
  var plate = document.querySelector('.hero__plate');
  var heroMedia = document.querySelector('.hero__media');
  if (plate && heroMedia && fine && !reduce) {
    heroMedia.addEventListener('pointermove', function (e) {
      var r = heroMedia.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      plate.style.setProperty('--plate-x', (py * -7).toFixed(2) + 'deg');
      plate.style.setProperty('--plate-y', (py * -6).toFixed(1) + 'px');
      plate.style.transform = 'perspective(900px) rotateX(var(--plate-x)) rotateY(' + (px * 5).toFixed(2) + 'deg) translateY(var(--plate-y))';
    });
    heroMedia.addEventListener('pointerleave', function () { plate.style.transform = ''; });
  }

  /* ---------- botões magnéticos ---------- */
  if (fine && !reduce) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.08;
        var y = (e.clientY - r.top - r.height / 2) * 0.16;
        btn.style.transform = 'translate(' + x.toFixed(1) + 'px,' + (y - 2).toFixed(1) + 'px)';
      });
      btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    });
  }

  /* ---------- loop único de scroll ---------- */
  var ticking = false;
  function onScrollFrame() {
    progress();
    stickyState();
    parallax();
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScrollFrame); }
  }, { passive: true });
  window.addEventListener('resize', onScrollFrame);
  onScrollFrame();
})();

/* =============================================
   SCRIPT.JS — Página de Disculpas
   SHI y ÑO — Carta Romántica — Carta Interactiva
   ============================================= */
'use strict';

// ╔══════════════════════════════════════════════╗
// ║  ⚙️  CONFIGURACIÓN — EDITA AQUÍ              ║
// ╚══════════════════════════════════════════════╝

// ── Pantalla inicial ─────────────────────────
const TOTAL_FOTOS_CARRUSEL_AUTO = 6;
// Frases que aparecen sobre cada imagen del carrusel automático
const FRASES_CARRUSEL_AUTO = [
  'Perdóname por favor 🥺',
  'Lo siento mucho, mi amor 💗',
  'No volverá a pasar, te lo juro 🌸',
  'Eres mi todo y lo sabes 💕',
  'Dame solo una oportunidad más 🥹',
  'Sin ti no soy nada... 💝',
];

// Frases que aparecen al presionar ÑO (texto de súplica)
const FRASES_SUPLICA = [
  'Por favor, perdóname de todo mi corazón 💗',
  'Te lo ruego, mi amor... no puedo sin ti 🥺',
  'Solo dame una oportunidad más 🌸',
  'Sé que fallé, pero te amo muchísimo 💕',
  'No puedo dormir sin saber que me perdonaste 😢',
  'Eres mi vida entera, no te vayas 💝',
  'Por favor... SHI se hace más grande porque mi amor también 💗',
  'Mira qué tan grande es mi amor por ti ➡️ botón SHI 💖',
  'No presiones ÑO, presiona SHI... te lo suplico 🥹',
  '¿Yes? SHI es gigante porque mi amor es inmenso 💗💗💗',
];

// ── Sección 1 — Carrusel coffee ──────────────
const TOTAL_SLIDES_CARRUSEL = 3;
// Frases overlay de cada imagen coffee
const FRASES_DISCULPAS_CARRUSEL = [
  'Lo siento tanto, mi amor 💗',
  'Fui un tonto por quedarme dormido 🥺',
  'Prometo que no volverá a pasar nunca más 🌸',
];
// Imágenes: assets/carta_carrusel/coffee1.webp, coffee2.webp, coffee3.webp

// ── Sección 2 — Texto carta (puedes usar <b>, <i>, etc.) ──
// Usa [IMAGEN:N] para insertar la imagen adorno N (1, 2, 3...)
const CARTA_DISCULPA_TEXTO = `Mi amor hermoso...

Desde que me dormí aquella noche sin poder estar contigo, no he dejado de pensar en lo mucho que te fallé. Sé que no hay excusa que valga, y que merezco todo tu enojo.

[IMAGEN:1]

Cada BESO que no te di esa noche pesa en mi corazón. Cada ABRAZO que te debí y no pude darte me duele profundamente. Quiero que sepas que tú eres lo más importante en mi vida.

[IMAGEN:2]

PROMETO que nunca más voy a dejarte esperando. PROMETO estar presente siempre para ti, en cada momento, en cada instante. Porque ERES MI TODO y no me imagino un solo día sin ti.

[IMAGEN:3]

Te pido PERDÓN de todo corazón, con toda el alma. Eres mi razón de ser, mi paz, mi felicidad. TE AMO más de lo que las palabras pueden expresar.

Por siempre tuyo/a 💗`;

// ── Palabras clave resaltadas en la carta ──────
const PALABRAS_CLAVE_DISCULPAS = [
  { palabra:'BESO',      titulo:'Un beso para ti',          mensaje:'Cada beso tuyo es mágico y único 💋',                     imagen:'assets/palabras_disculpas/perdon1.webp' },
  { palabra:'ABRAZO',    titulo:'Un abrazo eterno',          mensaje:'Tus abrazos son mi lugar más seguro en el mundo 🤗',       imagen:'assets/palabras_disculpas/perdon2.webp' },
  { palabra:'PROMETO',   titulo:'Mi promesa',                mensaje:'Prometo no volver a fallarte jamás. Te lo juro 🙏',        imagen:'assets/palabras_disculpas/perdon3.webp' },
  { palabra:'PERDÓN',    titulo:'Mi disculpa sincera',       mensaje:'Te pido perdón de todo corazón, mi amor 💗',               imagen:'assets/palabras_disculpas/perdon4.webp' },
  { palabra:'ERES MI TODO', titulo:'Mi todo',                mensaje:'Sin ti no soy nada. Eres absolutamente mi todo 💝',        imagen:'assets/palabras_disculpas/perdon5.webp' },
  { palabra:'TE AMO',    titulo:'Te amo',                    mensaje:'Te amo más que a nada en este mundo, siempre 💞',          imagen:'assets/palabras_disculpas/perdon6.webp' },
];

// ── Imágenes adorno visibles en la carta ────────
// imagenMini: imagen que se ve decorando la carta
// imagenMax: imagen que se abre al hacer clic (puede ser la misma)
const IMAGENES_ADORNO_CARTA = [
  {
    imagenMini: 'assets/carta_imagenes/adorno1.webp',
    imagenMax:  'assets/carta_imagenes/adorno1_max.webp',
    titulo:     'Nuestro momento especial',
    frase:      'Recuerdo cada segundo contigo como el más preciado de mi vida 💗',
  },
  {
    imagenMini: 'assets/carta_imagenes/adorno2.webp',
    imagenMax:  'assets/carta_imagenes/adorno2_max.webp',
    titulo:     'Mi promesa para siempre',
    frase:      'Prometo estar siempre para ti, en las buenas y en las malas 🌸',
  },
  {
    imagenMini: 'assets/carta_imagenes/adorno3.webp',
    imagenMax:  'assets/carta_imagenes/adorno3_max.webp',
    titulo:     'Nuestro futuro juntos',
    frase:      'Quiero construir el futuro más hermoso a tu lado 💝',
  },
];

// ── Imagen final al fondo de la carta ───────────
const IMAGEN_FINAL_CARTA    = 'assets/final/reconciliacion.webp';
const MENSAJE_FINAL_CARTA   = 'Gracias por leer toda mi carta... Te amo infinitamente 💗';
const TITULO_FINAL_CARTA    = 'Con todo mi amor';

// ── Playlist (solo MP3) ─────────────────────────
const PLAYLIST_DISCULPAS = [
  { name:'Canción 1 - Perdón',   src:'assets/songs/song1.mp3' },
  { name:'Canción 2 - Amor',     src:'assets/songs/song2.mp3' },
  { name:'Canción 3 - Siempre',  src:'assets/songs/song3.mp3' },
  { name:'Canción 4 - Eterno',   src:'assets/songs/song4.mp3' },
];

// ── Menú — tarjetas ─────────────────────────────
const MENU_OPCIONES = [
  { img:'assets/menu/menu1.webp', emoji:'💌', titulo:'Carta Romántica',       seccion:1 },
  { img:'assets/menu/menu2.webp', emoji:'💝', titulo:'Carta Interactiva',     seccion:2 },
];

// ── Modal final al completar el 100% ────────────
const MENSAJE_FINAL_PERDON = '🎉 ¡ME HAS PERDONADO! 🎉\n\nEres el amor de mi vida. Gracias por darme otra oportunidad. Te amo infinitamente. 💗';
const IMAGEN_FINAL_PERDON  = 'assets/final/perdon_aceptado.webp';

// ── Palabras de partículas ──────────────────────
const PARTICLE_WORDS = [
  'Te amo 💗','Perdóname 🥺','Mi amor 💕','Lo siento 🌸','Siempre tuyo/a 💝',
  'Perdón 💗','Te necesito 🥹','Eres mi todo 💞',
];
const EMOJI_PARTICLES = ['💗','💕','💖','🌸','✨','🥺','💝','⭐','💫','🎀','💞','🌺'];

// ── Transiciones carrusel ───────────────────────
const TRANSITIONS = [
  {i:'trans-fade-in',   o:'trans-fade-out'},
  {i:'trans-sright-in', o:'trans-sright-out'},
  {i:'trans-sleft-in',  o:'trans-sleft-out'},
  {i:'trans-zoom-in',   o:'trans-zoom-out'},
  {i:'trans-blur-in',   o:'trans-blur-out'},
  {i:'trans-flip-in',   o:'trans-flip-out'},
  {i:'trans-rot-in',    o:'trans-rot-out'},
  {i:'trans-sup-in',    o:'trans-sup-out'},
  {i:'trans-glitch-in', o:'trans-glitch-out'},
];

// ╔══════════════════════════════════════════════╗
// ║  ESTADO                                      ║
// ╚══════════════════════════════════════════════╝
let noCount         = 0;       // veces que se presionó ÑO
let suplicaIdx      = 0;       // índice frase súplica actual
let shiScale        = 1;       // escala creciente del botón SHI
let particlePool    = [];
const MAX_PARTICLES = 50;

let globalSongIdx   = 0;
let globalPlaying   = false;
let gpMinimized     = false;

let sec1Slide       = 0;
let sec1TransIdx    = 0;
let sec1Transitioning = false;
let sec1SlidesViewed  = new Set();

// Progreso sin localStorage (en memoria)
let progress = { sec1: false, sec2: false };
let sec2KwClicked    = new Set();   // palabras clave clicadas
let sec2ImgClicked   = new Set();   // imágenes adorno clicadas
let sec2FinalClicked = false;       // imagen final clicada
let sec2Completed    = false;

// DOM refs
const introScreen   = document.getElementById('introScreen');
const mainApp       = document.getElementById('mainApp');
const confettiCont  = document.getElementById('confettiContainer');
const globalNotif   = document.getElementById('globalNotif');
const globalAudio   = document.getElementById('globalAudio');
const gpPanel       = document.getElementById('gpPanel');
const gpToggleBtn   = document.getElementById('gpToggleBtn');
const gpPlayBtn     = document.getElementById('gpPlayBtn');
const gpPrevBtn     = document.getElementById('gpPrevBtn');
const gpNextBtn     = document.getElementById('gpNextBtn');
const gpSongName    = document.getElementById('gpSongName');
const gpSongNum     = document.getElementById('gpSongNum');
const gpCurTime     = document.getElementById('gpCurTime');
const gpTotalTime   = document.getElementById('gpTotalTime');
const gpProgressFill  = document.getElementById('gpProgressFill');
const gpProgressThumb = document.getElementById('gpProgressThumb');
const gpProgressTrack = document.getElementById('gpProgressTrack');
const gpVolSlider   = document.getElementById('gpVolSlider');
const gpBarInner    = document.getElementById('gpBarInner');
const gpLabel       = document.getElementById('gpLabel');
const gpPct         = document.getElementById('gpPct');
const menuGrid      = document.getElementById('menuGrid');
const btnShi        = document.getElementById('btnShi');
const btnNo         = document.getElementById('btnNo');
const suplicaText   = document.getElementById('suplicaText');
const clonesNo      = document.getElementById('clonesNo');

// ╔══════════════════════════════════════════════╗
// ║  INIT                                        ║
// ╚══════════════════════════════════════════════╝
document.addEventListener('DOMContentLoaded', () => {
  buildAutoCarousel();
  startIntroHearts();

  // Partículas en fondo
  document.addEventListener('click', e => {
    if (e.target.closest('#btnShi, #btnNo, .btn-no-clone, button, input, canvas')) return;
    spawnParticles(e.clientX, e.clientY, 6, false);
  });
  document.addEventListener('touchstart', e => {
    if (e.target.closest('#btnShi, #btnNo, .btn-no-clone, button, input, canvas')) return;
    spawnParticles(e.touches[0].clientX, e.touches[0].clientY, 6, false);
  }, {passive:true});

  // Botón atrás del móvil
  history.pushState({page:'intro'}, '');
  window.addEventListener('popstate', e => {
    const openSec = document.querySelector('.sec-panel:not(.hidden)');
    if (openSec) {
      const n = parseInt(openSec.id.replace('sec',''));
      if (!isNaN(n)) { closeSection(n); history.pushState({page:'menu'}, ''); }
    }
  });

  // Música global
  globalAudio.volume = 0.7;
  if (PLAYLIST_DISCULPAS.length) loadSong(0, false);
  gpPlayBtn.addEventListener('click', e => { e.stopPropagation(); togglePlay(); });
  gpPrevBtn.addEventListener('click', e => { e.stopPropagation(); changeSong(-1); });
  gpNextBtn.addEventListener('click', e => { e.stopPropagation(); changeSong(1); });
  gpToggleBtn.addEventListener('click', e => { e.stopPropagation(); toggleGP(); });
  globalAudio.addEventListener('timeupdate', updateAudioProgress);
  globalAudio.addEventListener('ended', () => changeSong(1));
  globalAudio.addEventListener('play',  () => { globalPlaying=true;  gpPlayBtn.textContent='⏸'; });
  globalAudio.addEventListener('pause', () => { globalPlaying=false; gpPlayBtn.textContent='▶'; });
  if (gpProgressTrack) {
    const seekAudio = e => {
      e.stopPropagation();
      if (!globalAudio.duration) return;
      const r = gpProgressTrack.getBoundingClientRect();
      globalAudio.currentTime = ((e.clientX - r.left) / r.width) * globalAudio.duration;
    };
    gpProgressTrack.addEventListener('click', seekAudio);
    let dragging = false;
    gpProgressTrack.addEventListener('mousedown', () => dragging = true);
    document.addEventListener('mouseup', () => dragging = false);
    document.addEventListener('mousemove', e => { if (dragging) seekAudio(e); });
  }
  if (gpVolSlider) {
    gpVolSlider.addEventListener('input', e => {
      e.stopPropagation();
      globalAudio.volume = e.target.value;
      const pct = e.target.value * 100;
      e.target.style.background = `linear-gradient(90deg,var(--pink-main) ${pct}%,rgba(251,182,206,0.4) ${pct}%)`;
    });
  }
});

// ╔══════════════════════════════════════════════╗
// ║  PANTALLA INTRO — CARRUSEL AUTOMÁTICO        ║
// ╚══════════════════════════════════════════════╝
let autoCarouselTimer = null;
let autoCurrentSlide  = 0;

function buildAutoCarousel() {
  const container = document.getElementById('autoCarousel');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < TOTAL_FOTOS_CARRUSEL_AUTO; i++) {
    const slide = document.createElement('div');
    slide.className = 'auto-slide' + (i === 0 ? ' active-slide' : '');
    slide.innerHTML = `
      <img src="assets/disculpas_carrusel/disculpa${i+1}.webp" alt="disculpa ${i+1}"
           loading="${i===0?'eager':'lazy'}"
           onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush));this.style.minHeight=\\'160px\\'';this.removeAttribute('src')">
      <div class="auto-slide-overlay">${FRASES_CARRUSEL_AUTO[i] || ''}</div>`;
    container.appendChild(slide);
  }
  // Iniciar rotación automática
  autoCarouselTimer = setInterval(nextAutoSlide, 3000);
}

function nextAutoSlide() {
  const slides = document.querySelectorAll('.auto-slide');
  if (!slides.length) return;
  slides[autoCurrentSlide].classList.remove('active-slide');
  autoCurrentSlide = (autoCurrentSlide + 1) % slides.length;
  slides[autoCurrentSlide].classList.add('active-slide');
}

// ╔══════════════════════════════════════════════╗
// ║  BOTONES SHI y ÑO                           ║
// ╚══════════════════════════════════════════════╝
function pressShi() {
  // Confeti y partículas
  launchConfetti(120);
  spawnParticles(window.innerWidth/2, window.innerHeight/2, 30, true);
  // Parar carrusel auto
  clearInterval(autoCarouselTimer);
  // Abrir interfaz principal
  introScreen.classList.add('closing');
  setTimeout(() => {
    introScreen.style.display = 'none';
    mainApp.classList.remove('hidden');
    buildMenu();
    startMainHearts();
    initMusic();
    history.pushState({page:'menu'}, '');
  }, 900);
}

function pressNo() {
  noCount++;
  // 1) Cambiar frase de súplica
  suplicaIdx = Math.min(noCount - 1, FRASES_SUPLICA.length - 1);
  const suplica = document.getElementById('suplicaText');
  if (suplica) {
    suplica.style.animation = 'none';
    setTimeout(() => {
      suplica.textContent = FRASES_SUPLICA[suplicaIdx];
      suplica.style.animation = '';
    }, 10);
  }

  // 2) Hacer crecer el botón SHI
  shiScale = Math.min(1 + noCount * 0.18, 3.5);
  const fontSize = Math.min(1.4 + noCount * 0.12, 2.4);
  const paddingV = Math.min(14 + noCount * 4, 40);
  const paddingH = Math.min(32 + noCount * 6, 80);
  btnShi.style.fontSize   = fontSize + 'rem';
  btnShi.style.padding    = `${paddingV}px ${paddingH}px`;
  btnShi.style.borderRadius = noCount > 5 ? '50%' : '50px';
  btnShi.style.boxShadow  = `0 ${8+noCount*3}px ${24+noCount*6}px rgba(244,114,182,${Math.min(0.3+noCount*0.08,0.7)})`;

  // 3) Mover el botón ÑO a posición aleatoria dentro de la card
  const card = document.querySelector('.intro-card');
  const wrap = document.getElementById('btnsIntroWrap');
  if (btnNo && card) {
    const cardRect = card.getBoundingClientRect();
    const maxX = cardRect.width - 80;
    const maxY = cardRect.height - 50;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    btnNo.style.position = 'fixed';
    btnNo.style.left = (cardRect.left + randX) + 'px';
    btnNo.style.top  = (cardRect.top  + randY) + 'px';
    btnNo.style.transform = `rotate(${(Math.random()-0.5)*40}deg)`;
    // Cambiar forma
    const shapes = ['shape-round','shape-pill','shape-tiny','','',''];
    const newShape = shapes[Math.floor(Math.random() * shapes.length)];
    btnNo.className = 'btn-no ' + newShape;
    // Hacer más pequeño progresivamente
    const noScale = Math.max(0.5, 1 - noCount * 0.07);
    btnNo.style.transform += ` scale(${noScale})`;
    // Cambiar color temporalmente
    const colors = ['rgba(196,181,253,0.8)','rgba(251,207,232,0.8)','rgba(253,230,138,0.6)','rgba(252,165,165,0.6)'];
    btnNo.style.background = colors[Math.floor(Math.random() * colors.length)];
    setTimeout(() => btnNo.style.background = '', 500);
  }

  // 4) Crear clones falsos que desaparecen
  if (noCount > 2) {
    const numClones = Math.min(noCount - 1, 5);
    for (let i = 0; i < numClones; i++) {
      setTimeout(() => spawnNoClone(), i * 80);
    }
  }

  // 5) Vibración en móvil
  if (navigator.vibrate) navigator.vibrate([50, 30, 50]);

  // 6) Partículas pequeñas
  spawnParticles(
    btnNo.getBoundingClientRect().left + 30,
    btnNo.getBoundingClientRect().top  + 15,
    8, false
  );
}

function spawnNoClone() {
  const clone = document.createElement('div');
  clone.className = 'btn-no-clone';
  clone.textContent = 'ÑO';
  const x = Math.random() * (window.innerWidth - 80);
  const y = Math.random() * (window.innerHeight - 60);
  clone.style.left = x + 'px';
  clone.style.top  = y + 'px';
  document.body.appendChild(clone);
  setTimeout(() => clone.remove(), 900);
}

// ╔══════════════════════════════════════════════╗
// ║  INTERFAZ PRINCIPAL — MENÚ                  ║
// ╚══════════════════════════════════════════════╝
function buildMenu() {
  if (!menuGrid) return;
  menuGrid.innerHTML = '';
  MENU_OPCIONES.forEach(opt => {
    const done = progress[`sec${opt.seccion}`];
    const card = document.createElement('div');
    card.className = 'menu-card' + (done ? ' done' : '');
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${opt.img}" alt="${opt.titulo}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="menu-placeholder" style="display:none">${opt.emoji}</div>
      </div>
      <div class="menu-card-progress">
        <div class="menu-card-prog-fill" style="width:${done?'100':'0'}%"></div>
      </div>
      <div class="menu-card-title">${opt.titulo}${done?' ✓':''}</div>`;
    card.addEventListener('click', () => openSection(opt.seccion));
    menuGrid.appendChild(card);
  });
}

function openSection(sec) {
  document.querySelectorAll('.sec-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('mainMenu')?.classList.add('hidden');
  const panel = document.getElementById(`sec${sec}`);
  if (!panel) return;
  panel.classList.remove('hidden');
  panel.scrollTop = 0;
  if (sec === 1) initSec1();
  if (sec === 2) initSec2();
  history.pushState({page:`sec${sec}`, sec}, '');
}

function closeSection(sec) {
  document.getElementById(`sec${sec}`)?.classList.add('hidden');
  document.getElementById('mainMenu')?.classList.remove('hidden');
  buildMenu();
  updateProgressUI();
}

// ╔══════════════════════════════════════════════╗
// ║  PROGRESO                                    ║
// ╚══════════════════════════════════════════════╝
function completeSection(sec) {
  progress[`sec${sec}`] = true;
  updateProgressUI();
  showNotif(`🎉 ¡Sección ${sec} completada! 💗`);
  launchConfetti(60);
  // Revisar si ambas están completas
  if (progress.sec1 && progress.sec2) {
    setTimeout(() => openFinalModal(), 800);
  }
}

function updateProgressUI() {
  const done = (progress.sec1 ? 1 : 0) + (progress.sec2 ? 1 : 0);
  const pct  = Math.round(done / 2 * 100);
  if (gpBarInner) gpBarInner.style.width = pct + '%';
  if (gpLabel)    gpLabel.textContent = `Progreso: ${done}/2 secciones`;
  if (gpPct)      gpPct.textContent   = pct + '%';
}

function openFinalModal() {
  launchConfetti(200);
  spawnParticles(window.innerWidth/2, window.innerHeight/2, 40, true);
  const modal = document.getElementById('finalModal');
  const img   = document.getElementById('finalImg');
  const msg   = document.getElementById('finalMsg');
  if (img) img.src = IMAGEN_FINAL_PERDON;
  if (msg) msg.textContent = MENSAJE_FINAL_PERDON;
  modal?.classList.remove('hidden');
}

function closeFinalModal() {
  document.getElementById('finalModal')?.classList.add('hidden');
}

// ╔══════════════════════════════════════════════╗
// ║  SECCIÓN 1 — CARRUSEL COFFEE                ║
// ╚══════════════════════════════════════════════╝
function initSec1() {
  const carousel = document.getElementById('sec1Carousel');
  if (!carousel) return;
  if (carousel.children.length) { updateSec1Progress(); return; }

  for (let i = 0; i < TOTAL_SLIDES_CARRUSEL; i++) {
    const slide = document.createElement('div');
    slide.className = 'c-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div style="position:relative;width:100%;height:100%">
        <img src="assets/carta_carrusel/coffee${i+1}.webp" alt="coffee ${i+1}"
             loading="${i===0?'eager':'lazy'}"
             style="width:100%;height:100%;object-fit:contain;background:var(--cream)"
             onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))';this.removeAttribute('src')">
        <div class="c-slide-overlay">${FRASES_DISCULPAS_CARRUSEL[i] || ''}</div>
      </div>`;
    carousel.appendChild(slide);
  }

  // Swipe táctil
  let tx = 0;
  carousel.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, {passive:true});
  carousel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) { dx < 0 ? sec1Next() : sec1Prev(); }
  }, {passive:true});

  buildSec1Dots();
  sec1SlidesViewed.add(0);
  updateSec1Progress();

  const prevBtn = document.getElementById('sec1Prev');
  const nextBtn = document.getElementById('sec1Next');
  if (prevBtn) prevBtn.onclick = sec1Prev;
  if (nextBtn) nextBtn.onclick = sec1Next;
}

function sec1Prev() { goSec1Slide(sec1Slide - 1); }
function sec1Next() { goSec1Slide(sec1Slide + 1); }

function buildSec1Dots() {
  const dc = document.getElementById('sec1Dots');
  if (!dc) return;
  dc.innerHTML = '';
  for (let i = 0; i < TOTAL_SLIDES_CARRUSEL; i++) {
    const d = document.createElement('div');
    d.className = 'c-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goSec1Slide(i));
    dc.appendChild(d);
  }
}

function goSec1Slide(idx) {
  if (sec1Transitioning) return;
  if (idx < 0) idx = TOTAL_SLIDES_CARRUSEL - 1;
  if (idx >= TOTAL_SLIDES_CARRUSEL) idx = 0;
  if (idx === sec1Slide) return;

  sec1Transitioning = true;
  const car    = document.getElementById('sec1Carousel');
  const slides = car?.querySelectorAll('.c-slide');
  if (!slides) { sec1Slide = idx; sec1Transitioning = false; return; }

  const t   = TRANSITIONS[sec1TransIdx % TRANSITIONS.length];
  sec1TransIdx++;
  const old = slides[sec1Slide];
  const nw  = slides[idx];
  old.classList.add(t.o);
  nw.style.display = 'flex';
  nw.classList.add(t.i, 'active');

  setTimeout(() => {
    old.style.display = 'none';
    old.classList.remove('active', t.o);
    nw.classList.remove(t.i);
    sec1Slide = idx;
    sec1Transitioning = false;
    sec1SlidesViewed.add(idx);
    updateSec1Progress();
    // Logro: vio todas las imágenes
    if (sec1SlidesViewed.size >= TOTAL_SLIDES_CARRUSEL && !progress.sec1) {
      completeSection(1);
    }
  }, 550);
}

function updateSec1Progress() {
  const pt = document.getElementById('sec1ProgressText');
  const pb = document.getElementById('sec1ProgressBar');
  if (pt) pt.textContent = `Imagen ${sec1Slide + 1} de ${TOTAL_SLIDES_CARRUSEL} 💗`;
  if (pb) pb.style.width = ((sec1Slide + 1) / TOTAL_SLIDES_CARRUSEL * 100) + '%';
  document.querySelectorAll('#sec1Dots .c-dot').forEach((d, i) =>
    d.classList.toggle('active', i === sec1Slide));
}

// ╔══════════════════════════════════════════════╗
// ║  SECCIÓN 2 — CARTA INTERACTIVA              ║
// ╚══════════════════════════════════════════════╝
function initSec2() {
  const container = document.getElementById('sec2Container');
  if (!container || container.children.length) return;

  // Procesar texto de la carta
  // 1) Reemplazar [IMAGEN:N] por HTML de imagen adorno
  let html = CARTA_DISCULPA_TEXTO;

  // Dividir por marcadores de imagen
  const parts = html.split(/\[IMAGEN:(\d+)\]/g);
  let processedHtml = '';
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      // Texto normal — resaltar palabras clave
      let text = parts[i];
      // Ordenar por longitud desc para evitar solapamiento
      const sorted = [...PALABRAS_CLAVE_DISCULPAS].sort((a,b) => b.palabra.length - a.palabra.length);
      sorted.forEach(pk => {
        const re = new RegExp(`(${escapeRegex(pk.palabra)})`, 'g');
        text = text.replace(re, `<span class="kw-word" data-kw="${pk.palabra}">$1</span>`);
      });
      // Saltos de línea
      text = text.replace(/\n\n/g, '</p><p style="margin:10px 0">').replace(/\n/g, '<br>');
      processedHtml += `<p style="margin:0">${text}</p>`;
    } else {
      // Marcador de imagen
      const imgIdx = parseInt(parts[i]) - 1;
      const adorno = IMAGENES_ADORNO_CARTA[imgIdx];
      if (adorno) {
        processedHtml += `
          <div class="carta-adorno-wrap" data-adorno="${imgIdx}">
            <div>
              <img class="carta-adorno-img"
                   src="${adorno.imagenMini}"
                   alt="${adorno.titulo}"
                   onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))';this.removeAttribute('src')">
              <div class="carta-adorno-caption">✨ ${adorno.titulo} — toca para ver ✨</div>
            </div>
          </div>`;
      }
    }
  }

  // Imagen final de carta
  processedHtml += `
    <div class="carta-final-img-wrap" id="cartaFinalImgWrap">
      <img class="carta-final-img"
           src="${IMAGEN_FINAL_CARTA}"
           alt="Reconciliación"
           onerror="this.style.background='linear-gradient(135deg,var(--pink-pale),var(--blush))';this.removeAttribute('src')">
      <div class="carta-final-caption">💗 ${MENSAJE_FINAL_CARTA} 💗</div>
    </div>`;

  container.innerHTML = `
    <div class="carta-disculpa-wrap">
      <div class="carta-paper" id="cartaPaper">${processedHtml}</div>
      <p style="text-align:center;font-family:var(--font-script);font-size:0.9rem;color:var(--text-mid);margin:10px 0 0;font-style:italic">
        💗 Toca las palabras resaltadas y las imágenes para descubrir mensajes especiales 💗
      </p>
    </div>`;

  // Eventos palabras clave
  container.querySelectorAll('.kw-word').forEach(el => {
    el.addEventListener('click', () => {
      const kw = el.dataset.kw;
      const pk = PALABRAS_CLAVE_DISCULPAS.find(p => p.palabra === kw);
      if (!pk) return;
      el.classList.add('clicked');
      sec2KwClicked.add(kw);
      openSobre(pk.imagen, pk.titulo, pk.mensaje);
      checkSec2Complete();
    });
  });

  // Eventos imágenes adorno
  container.querySelectorAll('.carta-adorno-wrap').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.adorno);
      const adorno = IMAGENES_ADORNO_CARTA[idx];
      if (!adorno) return;
      sec2ImgClicked.add(idx);
      openSobre(adorno.imagenMax, adorno.titulo, adorno.frase);
      checkSec2Complete();
    });
  });

  // Imagen final
  const finalWrap = container.querySelector('#cartaFinalImgWrap');
  if (finalWrap) {
    finalWrap.addEventListener('click', () => {
      sec2FinalClicked = true;
      openSobre(IMAGEN_FINAL_CARTA, TITULO_FINAL_CARTA, MENSAJE_FINAL_CARTA);
      checkSec2Complete();
    });
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function checkSec2Complete() {
  if (sec2Completed) return;
  const allKw    = PALABRAS_CLAVE_DISCULPAS.every(pk => sec2KwClicked.has(pk.palabra));
  const allImg   = IMAGENES_ADORNO_CARTA.every((_, i) => sec2ImgClicked.has(i));
  if (allKw && allImg && sec2FinalClicked) {
    sec2Completed = true;
    completeSection(2);
  }
}

// ╔══════════════════════════════════════════════╗
// ║  MODAL SOBRE ANIMADO                        ║
// ╚══════════════════════════════════════════════╝
function openSobre(imgSrc, titulo, frase) {
  const modal    = document.getElementById('sobreModal');
  const envelope = document.getElementById('sobreEnvelope');
  const flap     = document.getElementById('sobreFlap');
  const content  = document.getElementById('sobreContent');
  const sobreImg = document.getElementById('sobreImg');
  const sobreTit = document.getElementById('sobreTitulo');
  const sobreF   = document.getElementById('sobreFrase');

  // Resetear estado
  flap.classList.remove('open');
  content.style.display = 'none';
  envelope.style.display = 'block';
  sobreImg.src    = imgSrc || '';
  sobreTit.textContent = titulo || '';
  sobreF.textContent   = frase  || '';

  modal.classList.remove('hidden');

  // Animación: abrir solapa después de 400ms, luego mostrar contenido
  setTimeout(() => {
    flap.classList.add('open');
    setTimeout(() => {
      envelope.style.display = 'none';
      content.style.display  = 'block';
      spawnParticles(window.innerWidth/2, window.innerHeight/3, 12, false);
    }, 650);
  }, 400);
}

function closeSobre() {
  document.getElementById('sobreModal')?.classList.add('hidden');
  document.getElementById('sobreContent').style.display = 'none';
  document.getElementById('sobreEnvelope').style.display = 'block';
  document.getElementById('sobreFlap')?.classList.remove('open');
}

// ╔══════════════════════════════════════════════╗
// ║  MÚSICA GLOBAL                              ║
// ╚══════════════════════════════════════════════╝
function initMusic() {
  if (!PLAYLIST_DISCULPAS.length) return;
  loadSong(0, false);
  const tryPlay = () => {
    globalAudio.play().catch(() => {});
    document.removeEventListener('click', tryPlay);
    document.removeEventListener('touchstart', tryPlay);
  };
  document.addEventListener('click', tryPlay, {once:true});
  document.addEventListener('touchstart', tryPlay, {once:true, passive:true});
  setTimeout(() => globalAudio.play().catch(() => {}), 400);
}

function loadSong(idx, play = true) {
  globalSongIdx = ((idx % PLAYLIST_DISCULPAS.length) + PLAYLIST_DISCULPAS.length) % PLAYLIST_DISCULPAS.length;
  const s = PLAYLIST_DISCULPAS[globalSongIdx];
  globalAudio.src = s.src;
  if (gpSongName) gpSongName.textContent = s.name;
  if (gpSongNum)  gpSongNum.textContent  = `${globalSongIdx+1}/${PLAYLIST_DISCULPAS.length}`;
  if (play && globalPlaying) globalAudio.play().catch(() => {});
}

function togglePlay() {
  if (globalPlaying) globalAudio.pause();
  else globalAudio.play().catch(() => {});
}

function changeSong(dir) { loadSong(globalSongIdx + dir, true); }

function updateAudioProgress() {
  if (!globalAudio.duration) return;
  const pct = globalAudio.currentTime / globalAudio.duration * 100;
  if (gpProgressFill)  gpProgressFill.style.width = pct + '%';
  if (gpProgressThumb) gpProgressThumb.style.left  = pct + '%';
  if (gpCurTime)   gpCurTime.textContent   = fmtTime(globalAudio.currentTime);
  if (gpTotalTime) gpTotalTime.textContent = fmtTime(globalAudio.duration);
}

function fmtTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s/60), ss = Math.floor(s%60);
  return m + ':' + (ss < 10 ? '0' : '') + ss;
}

function toggleGP() {
  gpMinimized = !gpMinimized;
  gpPanel?.classList.toggle('minimized', gpMinimized);
}

// ╔══════════════════════════════════════════════╗
// ║  PARTÍCULAS                                 ║
// ╚══════════════════════════════════════════════╝
function spawnParticles(x, y, count, big) {
  if (particlePool.length >= MAX_PARTICLES) return;
  for (let i = 0; i < count; i++) {
    if (particlePool.length >= MAX_PARTICLES) break;
    const el = document.createElement('div');
    el.className = 'particle';
    const useWord = Math.random() > 0.55;
    if (useWord) {
      el.textContent = PARTICLE_WORDS[Math.floor(Math.random() * PARTICLE_WORDS.length)];
      el.style.fontSize  = big ? (Math.random()*5+11)+'px' : (Math.random()*4+8)+'px';
      el.style.color     = ['#ff69b4','#ff1493','#db2777','#f9a8d4','#c026d3'][Math.floor(Math.random()*5)];
      el.style.fontFamily = "'Dancing Script',cursive";
      el.style.fontWeight = '600';
    } else {
      el.textContent  = EMOJI_PARTICLES[Math.floor(Math.random() * EMOJI_PARTICLES.length)];
      el.style.fontSize = big ? (Math.random()*12+16)+'px' : (Math.random()*8+10)+'px';
    }
    const angle = Math.random() * Math.PI * 2;
    const speed = big ? (Math.random()*80+60) : (Math.random()*50+30);
    const vx = Math.cos(angle) * speed;
    const vy = -Math.abs(Math.sin(angle)) * speed - (big ? 60 : 40);
    el.style.cssText += `;position:fixed;left:${x}px;top:${y}px;pointer-events:none;z-index:9500;white-space:nowrap;`;
    document.body.appendChild(el);
    particlePool.push(el);
    const start = performance.now();
    const dur   = big ? (Math.random()*1000+1800) : (Math.random()*800+1200);
    const anim  = now => {
      const t  = (now - start) / 1000;
      const nx = x + vx*t, ny = y + vy*t + 0.5*80*t*t;
      const op = Math.max(0, 1 - t/(dur/1000));
      const sc = Math.max(0.1, 1 - t/(dur/1000)*0.7);
      el.style.left      = nx+'px';
      el.style.top       = ny+'px';
      el.style.transform = `rotate(${t*(big?180:120)}deg) scale(${sc})`;
      el.style.opacity   = op;
      if (t < dur/1000 && op > 0) requestAnimationFrame(anim);
      else { el.remove(); const idx = particlePool.indexOf(el); if (idx!==-1) particlePool.splice(idx,1); }
    };
    requestAnimationFrame(anim);
  }
}

// ╔══════════════════════════════════════════════╗
// ║  CONFETI                                    ║
// ╚══════════════════════════════════════════════╝
function launchConfetti(count = 80) {
  const colors = ['#ff69b4','#f9a8d4','#fda4af','#e9d5ff','#c4b5fd','#fde68a','#fbcfe8'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left             = Math.random() * 100 + 'vw';
      el.style.background       = colors[Math.floor(Math.random()*colors.length)];
      el.style.width            = (Math.random()*10+5)+'px';
      el.style.height           = (Math.random()*10+5)+'px';
      el.style.borderRadius     = Math.random()>0.5?'50%':'3px';
      el.style.animationDuration= (Math.random()*2+1.5)+'s';
      el.style.animationDelay   = Math.random()*0.5+'s';
      confettiCont.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 10);
  }
}

// ╔══════════════════════════════════════════════╗
// ║  CORAZONES FLOTANTES                        ║
// ╚══════════════════════════════════════════════╝
function startIntroHearts() {
  const bg = document.getElementById('introHeartsBg');
  const hearts = ['💗','💕','🌸','✨','💖'];
  const spawn = () => {
    if (!bg) return;
    const el = document.createElement('div');
    el.className = 'intro-float-heart';
    el.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    el.style.left = Math.random()*100+'%';
    el.style.animationDuration = (Math.random()*6+7)+'s';
    el.style.fontSize = (Math.random()*14+12)+'px';
    el.style.opacity  = (Math.random()*0.35+0.2).toFixed(2);
    bg.appendChild(el);
    setTimeout(() => el.remove(), 14000);
  };
  for (let i = 0; i < 6; i++) setTimeout(spawn, i*400);
  setInterval(spawn, 700);
}

function startMainHearts() {
  const hearts = ['💗','💕','🌸','✨','💖','🎀','🌺'];
  const spawn = () => {
    const el = document.createElement('div');
    el.className = 'float-heart';
    el.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    el.style.left   = Math.random()*100+'vw';
    el.style.animationDuration = (Math.random()*6+7)+'s';
    el.style.fontSize = (Math.random()*14+12)+'px';
    el.style.opacity  = (Math.random()*0.35+0.2).toFixed(2);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 14000);
  };
  for (let i = 0; i < 5; i++) setTimeout(spawn, i*500);
  setInterval(spawn, 800);
}

// ╔══════════════════════════════════════════════╗
// ║  NOTIFICACIÓN                               ║
// ╚══════════════════════════════════════════════╝
let notifTimer = null;
function showNotif(msg) {
  globalNotif.textContent = msg;
  globalNotif.classList.add('show');
  clearTimeout(notifTimer);
  notifTimer = setTimeout(() => globalNotif.classList.remove('show'), 3500);
}

// ╔══════════════════════════════════════════════╗
// ║  RESIZE                                     ║
// ╚══════════════════════════════════════════════╝
window.addEventListener('resize', () => {
  particlePool.forEach(p => { if (!document.body.contains(p)) p.remove(); });
  particlePool = particlePool.filter(p => document.body.contains(p));
  // Si el botón ÑO está posicionado fixed, recalcular para que no salga de pantalla
  if (btnNo && btnNo.style.position === 'fixed') {
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 60;
    const curX = parseFloat(btnNo.style.left) || 0;
    const curY = parseFloat(btnNo.style.top) || 0;
    btnNo.style.left = Math.min(curX, maxX) + 'px';
    btnNo.style.top  = Math.min(curY, maxY) + 'px';
  }
});

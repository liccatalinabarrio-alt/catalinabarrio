/* ============================================================
   Lic. Catalina Barrio — lógica del sitio
   ============================================================ */

// ---- Helper: iniciales para placeholder de foto ----
function iniciales(nombre) {
  return nombre.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
}

// ---- Render: Jugadoras ----
function renderJugadoras() {
  const track = document.getElementById('carousel-jugadoras');
  track.innerHTML = JUGADORAS.map(j => `
    <div class="card-jugadora">
      <div class="card-jugadora__photo">
        ${j.foto
          ? `<img src="${j.foto}" alt="${j.nombre}">`
          : `<span class="card-jugadora__initials">${iniciales(j.nombre)}</span>`}
        <span class="card-jugadora__flag flag-${j.pais.toLowerCase()}" title="${j.pais}"></span>
        <span class="card-jugadora__shields">
          ${j.afiliaciones.filter(a => a.escudo).map(a => `
            <img class="card-jugadora__shield-img" src="${a.escudo}" alt="Escudo de ${a.nombre}" title="${a.nombre}">
          `).join('')}
        </span>
      </div>
      <div class="card-jugadora__body">
        <div class="card-jugadora__name">${j.nombre}</div>
        ${j.posicion ? `<div class="card-jugadora__posicion">${j.posicion}</div>` : ''}
        <div class="card-jugadora__afiliaciones">
          ${j.afiliaciones.map(a => `<div>${a.nombre}</div>`).join('')}
        </div>
      </div>
    </div>
  `).join('') + `
    <a href="${CTA_JUGADORAS.whatsapp}" target="_blank" rel="noopener" class="card-jugadora card-jugadora--cta">
      <span class="card-jugadora--cta__texto">${CTA_JUGADORAS.titulo}</span>
    </a>
  `;
}

// ---- Render: Testimonios ----
function renderTestimonios() {
  const grid = document.getElementById('grid-testimonios');
  grid.innerHTML = TESTIMONIOS.map(t => `
    <div class="card-testimonio">
      <div class="card-testimonio__top">
        <span class="card-testimonio__avatar">
          ${t.foto ? `<img src="${t.foto}" alt="${t.autor}">` : ''}
        </span>
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>
      <p>&ldquo;${t.texto}&rdquo;</p>
      <div class="card-testimonio__autor">${t.autor}</div>
    </div>
  `).join('');
}

// ---- Render: Camisetas ----
function renderCamisetas() {
  const track = document.getElementById('track-camisetas');
  track.innerHTML = CAMISETAS.map(c => c.imagen ? `
    <div class="card-camiseta">
      <img src="${c.imagen}" alt="Camiseta regalada por ${c.jugadora}, ${c.club}">
      <div class="card-camiseta__tag">${c.jugadora} · ${c.club}</div>
    </div>
  ` : `
    <div class="card-camiseta card-camiseta--vacia">
      <span class="card-camiseta__plus">+</span>
      <span class="card-camiseta__label">Agregar camiseta</span>
    </div>
  `).join('');
}

// ---- Render: Clubes con los que trabajó (Quién soy) ----
function renderClubesTrabajados() {
  const row = document.getElementById('row-clubes');
  if (!row) return;
  row.innerHTML = CLUBES_TRABAJADOS.map(c => `
    <span class="club-badge" title="${c.club}">
      ${c.escudo ? `<img src="${c.escudo}" alt="Escudo de ${c.club}">` : ''}
    </span>
  `).join('');
}

// ---- Render: Programas ----
function renderProgramas() {
  const row = document.getElementById('row-programas');
  row.innerHTML = PROGRAMAS.map(p => `
    <div class="burbuja">
      <div class="burbuja__titulo">${p.titulo}</div>
      <div class="burbuja__sub">${p.subtitulo}</div>
      <a href="${p.whatsapp}" class="burbuja__wa" target="_blank" rel="noopener">WhatsApp &#8594;</a>
    </div>
  `).join('');
}

// ---- Carrusel de jugadoras: flechas ----
function initCarouselNav() {
  const track = document.getElementById('carousel-jugadoras');
  const prev = document.getElementById('prev-jugadora');
  const next = document.getElementById('next-jugadora');
  const step = () => track.querySelector('.card-jugadora')?.offsetWidth + 18 || 220;
  prev.addEventListener('click', () => track.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step() * 2, behavior: 'smooth' }));
}

// ---- Reveal on scroll ----
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

// ---- Render: Escudo del club en el hero ----
function renderHeroShield() {
  const el = document.getElementById('hero-shield');
  if (CLUB_SHIELD) {
    el.innerHTML = `<img src="${CLUB_SHIELD}" alt="Escudo del club">`;
    el.style.display = 'flex';
  } else {
    el.style.display = 'none';
  }
}

// ---- Menú (rayas) ----
function initMenu() {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('menu-overlay');

  function closeMenu() {
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });
  overlay.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  renderHeroShield();
  renderJugadoras();
  renderTestimonios();
  renderClubesTrabajados();
  renderCamisetas();
  renderProgramas();
  initCarouselNav();
  initReveal();
});

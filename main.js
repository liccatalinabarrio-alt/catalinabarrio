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
  const track = document.getElementById('grid-testimonios');
  track.innerHTML = TESTIMONIOS.map((t, i) => `
    <div class="card-testimonio">
      <div class="card-testimonio__photo">
        ${t.foto
          ? `<img src="${t.foto}" alt="${t.nombre}">`
          : `<span class="card-testimonio__initials">${iniciales(t.nombre)}</span>`}
      </div>
      <div class="card-testimonio__body">
        <div class="card-testimonio__name">${t.nombre}</div>
        <div class="card-testimonio__club">${t.club}</div>
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p id="testimonio-texto-${i}">&ldquo;${t.texto}&rdquo;</p>
        <button class="leer-mas" data-target="testimonio-texto-${i}">Leer más</button>
      </div>
    </div>
  `).join('');

  track.querySelectorAll('.leer-mas').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = document.getElementById(btn.dataset.target);
      const expanded = p.classList.toggle('expanded');
      btn.textContent = expanded ? 'Leer menos' : 'Leer más';
    });
  });
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

// ---- Render: Sobre mí (contacto, estudios, clubes grandes, certificaciones, experiencia) ----
function renderSocial() {
  const el = document.getElementById('sm-social');
  if (!el) return;
  el.innerHTML = `
    <a class="sm-social-icon" href="https://www.instagram.com/lic.catalinabarrio/" target="_blank" rel="noopener" aria-label="Instagram">
      <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>
    </a>
    <a class="sm-social-icon" href="https://linkedin.com/in/catalina-barrio-539531183/?skipRedirect=true" target="_blank" rel="noopener" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 10v6.5M7.5 7.2v.1M12 16.5V12.8c0-1.3 1-2.3 2.2-2.3s2.1 1 2.1 2.3v3.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </a>
    <a class="sm-social-icon" href="https://www.tiktok.com/@lic.catalinabarrio" target="_blank" rel="noopener" aria-label="TikTok">
      <svg viewBox="0 0 24 24" fill="none"><path d="M14 4v9.6a3 3 0 1 1-2.2-2.9M14 4c.3 2 1.8 3.4 4 3.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  `;
}

function renderContacto() {
  const el = document.getElementById('sm-contacto');
  if (!el) return;
  el.innerHTML = `
    <a class="sm-chip" href="https://wa.me/54${CONTACTO_PERSONAL.whatsapp}" target="_blank" rel="noopener">
      <svg class="sm-chip__icon" viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg> WhatsApp
    </a>
    <a class="sm-chip" href="https://instagram.com/${CONTACTO_PERSONAL.instagram.replace('@','')}" target="_blank" rel="noopener">
      <svg class="sm-chip__icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/></svg> ${CONTACTO_PERSONAL.instagram.replace('@','')}
    </a>
    <a class="sm-chip" href="mailto:${CONTACTO_PERSONAL.mail}">
      <svg class="sm-chip__icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Mail
    </a>
  `;
}

function renderFooterContacto() {
  const el = document.getElementById('footer-channels');
  if (!el) return;
  el.innerHTML = `
    <a href="mailto:${CONTACTO_PERSONAL.mail}" class="footer__channel">${CONTACTO_PERSONAL.mail}</a>
    <a href="https://instagram.com/${CONTACTO_PERSONAL.instagram.replace('@','')}" class="footer__channel" target="_blank" rel="noopener">${CONTACTO_PERSONAL.instagram}</a>
  `;
}

function renderClubesGrandes() {
  const row = document.getElementById('row-clubes-grandes');
  if (!row) return;
  row.innerHTML = CLUBES_GRANDES.map(c => `
    <span class="club-grande" title="${c.club}">
      ${c.escudo ? `<img src="${c.escudo}" alt="Escudo de ${c.club}">` : ''}
    </span>
  `).join('');
}

function renderLista(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function initTabs() {
  const tabs = document.querySelectorAll('.sm-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sm-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.sm-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
    });
  });
}

// ---- Render: Programas ----
function renderProgramas() {
  const row = document.getElementById('row-programas');
  row.innerHTML = PROGRAMAS.map(p => `
    <div class="programa-card programa-card--${p.color}">
      <span class="programa-card__duracion">${p.duracion}</span>
      <div class="programa-card__nombre">${p.nombre}</div>
      <span class="programa-card__segmento">${p.segmento}</span>
      <p class="programa-card__publico">${p.publico}</p>
      <a href="${p.formulario}" class="programa-card__btn" target="_blank" rel="noopener">Conocé más acá &#8594;</a>
    </div>
  `).join('');
}

// ---- Carruseles con flechas (genérico) ----
function initCarouselArrows(trackId, prevId, nextId, cardSelector) {
  const track = document.getElementById(trackId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  if (!track || !prev || !next) return;
  const step = () => track.querySelector(cardSelector)?.offsetWidth + 18 || 220;
  prev.addEventListener('click', () => track.scrollBy({ left: -step() * 2, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step() * 2, behavior: 'smooth' }));
}
function initCarouselNav() {
  initCarouselArrows('carousel-jugadoras', 'prev-jugadora', 'next-jugadora', '.card-jugadora');
  initCarouselArrows('grid-testimonios', 'prev-testimonio', 'next-testimonio', '.card-testimonio');
  initCarouselArrows('track-camisetas', 'prev-camiseta', 'next-camiseta', '.card-camiseta');
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

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = overlay.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });
  document.addEventListener('click', (e) => {
    if (overlay.classList.contains('open') && !overlay.contains(e.target) && e.target !== toggle) {
      closeMenu();
    }
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
  renderContacto();
  renderSocial();
  renderFooterContacto();
  renderLista('sm-estudios', ESTUDIOS);
  renderClubesGrandes();
  renderLista('sm-certificaciones', CERTIFICACIONES);
  renderLista('sm-experiencia', EXPERIENCIA);
  initTabs();
  renderCamisetas();
  renderProgramas();
  initCarouselNav();
  initReveal();
});

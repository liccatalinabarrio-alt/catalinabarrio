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
function renderContacto() {
  const el = document.getElementById('sm-contacto');
  if (!el) return;
  el.innerHTML = `
    <a class="sm-chip" href="https://wa.me/54${CONTACTO_PERSONAL.whatsapp}" target="_blank" rel="noopener">
      <span class="sm-chip__icon">&#9742;</span> WhatsApp
    </a>
    <a class="sm-chip" href="https://instagram.com/${CONTACTO_PERSONAL.instagram.replace('@','')}" target="_blank" rel="noopener">
      <span class="sm-chip__icon">@</span> ${CONTACTO_PERSONAL.instagram.replace('@','')}
    </a>
    <a class="sm-chip" href="mailto:${CONTACTO_PERSONAL.mail}">
      <span class="sm-chip__icon">&#9993;</span> Mail
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

function renderListaColapsable(id, items, visibles) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map((item, i) => `<li class="${i >= visibles ? 'oculto' : ''}">${item}</li>`).join('');
}

function initVerTodas() {
  document.querySelectorAll('.ver-todas').forEach(btn => {
    btn.addEventListener('click', () => {
      const lista = document.getElementById(btn.dataset.target);
      const expandida = lista.classList.toggle('expandida');
      btn.textContent = expandida ? 'Ver menos' : 'Ver todas';
    });
  });
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
  renderContacto();
  renderFooterContacto();
  renderListaColapsable('sm-estudios', ESTUDIOS, 2);
  renderClubesGrandes();
  renderListaColapsable('sm-certificaciones', CERTIFICACIONES, 3);
  renderListaColapsable('sm-experiencia', EXPERIENCIA, 3);
  initVerTodas();
  renderCamisetas();
  renderProgramas();
  initCarouselNav();
  initReveal();
});

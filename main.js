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
        <span class="card-jugadora__flag">${j.pais}</span>
      </div>
      <div class="card-jugadora__body">
        <div class="card-jugadora__name">${j.nombre}</div>
        <div class="card-jugadora__meta">
          <span class="card-jugadora__shield" title="${j.club}"></span>
          ${j.club} · ${j.posicion}
        </div>
      </div>
    </div>
  `).join('');
}

// ---- Render: Testimonios ----
function renderTestimonios() {
  const grid = document.getElementById('grid-testimonios');
  grid.innerHTML = TESTIMONIOS.map(t => `
    <div class="card-testimonio">
      <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p>&ldquo;${t.texto}&rdquo;</p>
      <div class="card-testimonio__autor">${t.autor}</div>
    </div>
  `).join('');
}

// ---- Render: Camisetas ----
function renderCamisetas() {
  const track = document.getElementById('track-camisetas');
  track.innerHTML = CAMISETAS.map(c => `
    <div class="card-camiseta">
      <img src="${c.imagen}" alt="Camiseta regalada por ${c.jugadora}, ${c.club}">
      <div class="card-camiseta__tag">${c.jugadora} · ${c.club}</div>
    </div>
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

document.addEventListener('DOMContentLoaded', () => {
  renderJugadoras();
  renderTestimonios();
  renderCamisetas();
  renderProgramas();
  initCarouselNav();
  initReveal();
});

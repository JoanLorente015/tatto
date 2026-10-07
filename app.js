/* Construye menú, pie y contenido de cada página a partir de CONFIG. No hace falta editarlo. */
const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const actual = location.pathname.split('/').pop() || 'index.html';

document.title = (document.body.dataset.titulo ? document.body.dataset.titulo + ' · ' : '') + CONFIG.nombre;

/* Menú y pie (se repiten en todas las páginas) */
const enlaces = CONFIG.menu.map(m => `<li><a href="${m.archivo}" class="${m.archivo === actual ? 'activo' : ''}">${esc(m.texto)}</a></li>`).join('');
$('#cabecera').outerHTML = `
  <header class="top"><div class="wrap">
    <a class="logo" href="index.html">${esc(CONFIG.nombre)}</a>
    <nav aria-label="Principal"><ul>${enlaces}<li><a class="boton" href="${CONFIG.botonReserva.archivo}">${esc(CONFIG.botonReserva.texto)}</a></li></ul></nav>
  </div></header>`;
$('#pie').outerHTML = `
  
  <footer><div class="wrap">© ${new Date().getFullYear()} ${esc(CONFIG.nombre)}. Todos los derechos reservados.</div></footer>`;

/* Textos sueltos: <span data-texto="nombre"></span> */
document.querySelectorAll('[data-texto]').forEach(n => n.textContent = CONFIG[n.dataset.texto] ?? '');

/* Servicios (resumen en inicio = primeros 3, completo en servicios) */
const ls = $('#lista-servicios');
if (ls) {
  const lista = ls.dataset.max ? CONFIG.servicios.slice(0, +ls.dataset.max) : CONFIG.servicios;
  ls.innerHTML = lista.map(s => `<li><strong>${esc(s.nombre)}</strong><span class="precio">${esc(s.precio)}</span><small>${esc(s.detalle || '')}</small></li>`).join('');
}

const eq = $('#equipo-lista');
if (eq) eq.innerHTML = CONFIG.equipo.map(p => `
  <div class="tatuador"><div class="foto">${p.foto ? `<img src="${esc(p.foto)}" alt="${esc(p.nombre)}">` : esc(p.nombre.charAt(0))}</div>
  <h3>${esc(p.nombre)}</h3><p>${esc(p.cargo)}</p></div>`).join('');

const ga = $('#galeria-lista');
if (ga) ga.innerHTML = (CONFIG.galeria.length ? CONFIG.galeria : Array(6).fill(null))
  .map((f, i) => `<div class="item">${f ? `<img src="${esc(f)}" alt="Trabajo ${i + 1}" loading="lazy">` : 'Foto ' + (i + 1)}</div>`).join('');

const op = $('#opiniones-lista');
if (op) op.innerHTML = CONFIG.opiniones.map(o => `<blockquote class="opinion"><p>“${esc(o.texto)}”</p><cite>${esc(o.autor)}</cite></blockquote>`).join('');

const ho = $('#horario');
if (ho) ho.innerHTML = CONFIG.horario.map(([d, h]) => `<tr><td>${esc(d)}</td><td>${esc(h)}</td></tr>`).join('');

if ($('#tel')) { $('#tel').textContent = CONFIG.telefono; $('#tel').href = 'tel:' + CONFIG.telefono.replace(/\s/g, ''); }
if ($('#mapa')) $('#mapa').href = CONFIG.mapaUrl;
const rd = $('#redes');
if (rd) rd.innerHTML = CONFIG.redes.map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.nombre)}</a>`).join('');

/* Cómo trabajamos */
const ps = $('#pasos-lista');
if (ps) ps.innerHTML = CONFIG.pasos.map(p => `<li><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join('');

/* Reserva: abre WhatsApp con el mensaje escrito */
const fr = $('#form-reserva');
if (fr) {
  CONFIG.servicios.forEach(s => $('#sel-servicio').append(new Option(`${s.nombre} (${s.precio})`, s.nombre)));
  fr.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(fr);
    const msg = `Hola, soy ${f.get('nombre')}. Quiero pedir cita para: ${f.get('servicio')}. Zona: ${f.get('zona')}${f.get('tamano') ? ' (' + f.get('tamano') + ')' : ''}. ` +
      (f.get('idea') ? `Idea: ${f.get('idea')}. ` : '') + (f.get('dia') ? `Me iría bien el ${f.get('dia')}.` : '');
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

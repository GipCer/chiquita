/* ============================================================
   ✏️  AQUÍ EDITAS TODO EL CONTENIDO (textos, fotos, canciones…)
   ============================================================ */
const CONFIG = {
  // Fecha de inicio: año, mes (1-12), día
  inicio: { y: 2026, m: 7, d: 3 },

  fotos: [
    { src: 'fotos/foto1.jpg', mini: 'fotos/mini/foto1.jpg', frase: 'Noche de luces y fuentes ✨' },
    { src: 'fotos/foto2.jpg', mini: 'fotos/mini/foto2.jpg', frase: 'Ese guiño que me desarma 😉' },
    { src: 'fotos/foto3.jpg', mini: 'fotos/mini/foto3.jpg', frase: 'Tú, yo y mil lucecitas 💜' },
    { src: 'fotos/foto4.jpg', mini: 'fotos/mini/foto4.jpg', frase: 'jaajajaj' },
    { src: 'fotos/foto5.jpg', mini: 'fotos/mini/foto5.jpg', frase: 'Un bonito recuerdo' },
    { src: 'fotos/foto6.jpg', mini: 'fotos/mini/foto6.jpg', frase: 'Un besito más' },
    { src: 'fotos/foto7.jpg', mini: 'fotos/mini/foto7.jpg', frase: 'Dia de deporte' },
    { src: 'fotos/foto8.jpg', mini: 'fotos/mini/foto8.jpg', frase: 'Una bella sonrisa' },
    { src: 'fotos/foto9.jpg', mini: 'fotos/mini/foto9.jpg', frase: 'Bonito cumpleaños amor' },
    { src: 'fotos/foto10.jpg', mini: 'fotos/mini/foto10.jpg', frase: 'Un mostacho jaja' },
    { src: 'fotos/foto11.jpg', mini: 'fotos/mini/foto11.jpg', frase: 'Te amo mucho mi amor' },
    { src: 'fotos/foto12.jpg', mini: 'fotos/mini/foto12.jpg', frase: 'Holiiiii' },
    { src: 'fotos/foto13.jpg', mini: 'fotos/mini/foto13.jpg', frase: 'Nuestra primera foto' },
    { src: 'fotos/foto14.jpg', mini: 'fotos/mini/foto14.jpg', frase: 'Eres el amor de mi vida' },
    // Para agregar más: copia la foto a /fotos y añade una línea igual a las de arriba
  ],

  canciones: [
    { titulo: 'The Reason', artista: '', archivo: 'canciones/the-reason.mp3' },
    { titulo: 'Cuando Me Enamoro', artista: 'La que suena cuando pienso en ti', archivo: 'canciones/Cuando Me Enamoro.mp3' },
    { titulo: 'Gone, Gone, Gone', artista: '', archivo: 'canciones/Gone, Gone, Gone.mp3' },
    { titulo: 'Photograph', artista: '', archivo: 'canciones/Photograph.mp3' },
    { titulo: 'Thinking Out Loud', artista: '', archivo: 'canciones/Thinking Out Loud.mp3' },
    { titulo: 'Volverte A Ver', artista: '', archivo: 'canciones/Volverte A Ver.mp3' },
    { titulo: 'No Hay Nadie Más', artista: '', archivo: 'canciones/No Hay Nadie Más.mp3' },
    { titulo: 'Amor', artista: '', archivo: 'canciones/Amor.mp3' },
    { titulo: 'ONLY', artista: '', archivo: 'canciones/ONLY.mp3' },
    { titulo: 'Love, Maybe', artista: '', archivo: 'canciones/Love, Maybe.mp3' },
    { titulo: 'Still With You', artista: '', archivo: 'canciones/Still With You.mp3' },
    { titulo: 'Lover Girl', artista: '', archivo: 'canciones/Lover Girl.mp3' },
    { titulo: 'Mi Persona Favorita', artista: '', archivo: 'canciones/Mi Persona Favorita.mp3' },
    { titulo: 'Por Eso Te Amo', artista: '', archivo: 'canciones/Por Eso Te Amo.mp3' }
    
    
  ],

  notas: [
    { t: 'Buenos días ☀️', p: 'Buenos dias mi amorcito bello hermoso, precioso como un diamante ya tomaste tu desayunito jajajaja.' },
    { t: 'Si estás cansada 🫶', p: 'Estoy muy orgulloso de ti amor, cada dia haces lo mejor de ti, nunca te detengas tu puedes mi amor y bueno siempre vas a tener mis brazos para descansar' },
    { t: 'Tu sonrisa 😊', p: 'Tu sonrisa es mi parte favorita del día. Ya lo sabes, pero hoy te lo recuerdo otra vez.' },
    { t: 'Pequeñas cosas 🌷', p: 'Me encanta cómo conviertes lo normal en especial: una caminata, una foto, un antojo a medianoche…' },
    { t: 'Gracias 💜', p: 'Gracias por tu paciencia, por tus risas y por ser exactamente como eres.' },
    { t: 'Lo que viene ✨', p: 'Quiero seguir sumando días a tu lado, y que cada uno tenga al menos una risa tuya.' },
    { t: 'Buenas noches 🌙', p: 'Descansa, mi chiquita linda. Mañana otra vez tendré ganas de verte.' }
  ],

  // {dias} se reemplaza solo por los días que llevan juntos
  carta: [
    'Querida Andrea, mi chiquita linda',
    'Han pasado {dias} días desde el 3 de julio y todavía me sorprende lo fácil que es quererte.',
    'Gracias por tu paciencia, por tu bella risa que se me pega, por los abrazos que arreglan el día y por hacer que hasta un plan sencillo se sienta como una aventura, nuestra aventura.',
    'Gracias por todo tu tiempo que me has dado, gracias por ese apoyo cuando eran los dias muy difíciles para mi, hiciste que las noches tuvieran un proposito, soñar contigo, y más cuando tengo tu polito de trabajo.',
    'No sé qué nos espera, pero sí sé que quiero descubrirlo contigo, de la mano y con ganas.',
    'Eres mi chiquita linda, mi lugar favorito y mi mejor casualidad.',
    'Con cariño, Tu chiquito que te ama de aqui al infinito 💜'
  ],

  planes: [
    'Un picnic en el parque 🧺',
    'Tarde de películas 🎬',
    'Caminar por el malecón 🌊',
    'Salir a comer algo rico 🍕',
    'Una tarde de preguntas ❓',
    'Ir a los juegos mecánicos 🎡',
    'Ver las fuentes de noche ⛲',
    'Cocinar algo juntos 👩‍🍳',
    'Helado y paseo sin rumbo 🍦',
    'Noche de juegos de mesa 🎲',
    'Tomarnos mil fotos 📸',
    'Hacer un picnic viendo el atardecer 🌅',
    'Maratón de nuestra serie favorita 🍿',
    'Escribirnos cartitas y leerlas juntos 💌'
  ],

  razones: [
    'Porque tu risa se me pega y no quiero que se me quite.',
    'Porque contigo cualquier plan se vuelve el mejor plan.',
    'Porque me haces sentir en casa, esté donde esté.',
    'Porque eres linda por fuera y más linda por dentro.',
    'Porque me escuchas aunque diga tonterías.',
    'Porque tu guiño me deja sin palabras.',
    'Porque haces que quiera ser mejor persona.',
    'Porque contigo el tiempo vuela y aun así queda ganas de más.',
    'Porque tus abrazos arreglan días enteros.',
    'Porque eres única y no hay otra como tú.',
    'Porque me animas a vivir cosas nuevas.',
    'Porque simplemente eres tú, y eso me encanta.'
  ],

  abre: [
    { icono: '😢', t: 'Estés triste', p: 'Ven aquí. Un abrazo gigante (virtual por ahora). Lo que sea que pase, no estás sola y todo pasa. Te quiero un montón.' },
    { icono: '🥺', t: 'Me extrañes', p: 'Yo también te extraño. Cierra los ojos, cuenta hasta diez y piensa en nuestra próxima salida: ya falta menos.' },
    { icono: '🌙', t: 'No puedas dormir', p: 'Pon nuestra canción, respira lento y piensa en algo bonito. Que tengas dulces sueños, mi chiquita.' },
    { icono: '😵‍💫', t: 'Estés estresada', p: 'Pausa de un minuto: agua, respira hondo, estírate. Puedes con todo, y si no, lo hacemos juntos.' },
    { icono: '😂', t: 'Quieras reír', p: 'Recuerda tu cara en la foto de los juegos mecánicos. Con eso ya me río yo solo 😂' },
    { icono: '💪', t: 'Dudes de ti', p: 'Eres capaz, inteligente y valiente. Si no me crees a mí, créele a todo lo que ya has logrado.' }
  ],

  cupones: [
    { i: '🤗', t: 'Un abrazo largo', d: 'De los que arreglan el día entero' },
    { i: '🍦', t: 'Un helado', d: 'Donde tú quieras y del sabor que quieras' },
    { i: '🎬', t: 'Noche de película', d: 'Tú eliges la peli, yo pongo la compañía' },
    { i: '💆', t: 'Un masajito', d: '10 minutitos de consentimiento' },
    { i: '🍕', t: 'Salida a comer', d: 'Lo que se te antoje ese día' },
    { i: '🌅', t: 'Paseo al atardecer', d: 'Sin apuro y sin rumbo' }
  ],

  // Parejas extra para el juego de memoria (además de las fotos)
  emojisJuego: ['💜', '🌸', '🐱'],

  // Mensaje secreto: toca 5 veces el título "Para Andrea" en el menú
  secreto: 'Te quiero muchísimo, Andrea 💜'
};

/* ============================================================
   Utilidades
   ============================================================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const mezclar = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;

function hoy0() { const h = new Date(); return new Date(h.getFullYear(), h.getMonth(), h.getDate()); }
const INICIO = new Date(CONFIG.inicio.y, CONFIG.inicio.m - 1, CONFIG.inicio.d);

function diasEntre(a, b) { return Math.round((b - a) / 864e5); }   // redondeo: evita errores por cambio de horario
function sumarMeses(f, n) { return new Date(f.getFullYear(), f.getMonth() + n, f.getDate()); }

/* ============================================================
   Navegación (con botón "atrás" del celular)
   ============================================================ */
function mostrar(id, empujar = true) {
  if (!document.getElementById(id)) id = 'menu';
  $$('.pantalla').forEach(p => p.classList.remove('activa'));
  $('#' + id).classList.add('activa');
  window.scrollTo({ top: 0, behavior: reducir ? 'auto' : 'smooth' });
  if (empujar && location.hash !== '#' + id) history.pushState({ id }, '', '#' + id);
  if (id === 'razones' && !razonVista) siguienteRazon();
}
window.addEventListener('popstate', () => {
  if ($('#visor').classList.contains('activo')) { cerrarFoto(false); return; }
  mostrar(location.hash.slice(1) || 'menu', false);
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-ir]');
  if (b) mostrar(b.dataset.ir);
});

/* ============================================================
   Bienvenida
   ============================================================ */
function saludar() {
  const h = new Date().getHours();
  const s = h < 6 ? 'Buenas madrugadas, mi amor 🌙' : h < 12 ? 'Buenos días, mi amor ☀️' : h < 19 ? 'Buenas tardes, mi amor 🌷' : 'Buenas noches, mi amor 🌙';
  $('#saludo').textContent = s;
}
$('#btnAbrir').addEventListener('click', () => {
  $('#bienvenida').classList.add('salir');
  $('#app').classList.remove('oculto');
  setTimeout(() => $('#bienvenida').remove(), 700);
  lluvia(['💜', '💖', '✨', '🌸'], 22);
  const h = location.hash.slice(1);
  if (h) mostrar(h, false);
});
saludar();

/* ============================================================
   Efectos
   ============================================================ */
function lluvia(emojis, n = 20) {
  if (reducir) return;
  const c = $('#efectos');
  if (c.childElementCount > 60) return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 100 + '%';
    s.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    s.style.animationDuration = (2 + Math.random() * 2) + 's';
    s.style.animationDelay = (Math.random() * .8) + 's';
    c.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}
// corazoncito al tocar la pantalla
document.addEventListener('pointerdown', e => {
  if (reducir || e.target.closest('input')) return;
  const s = document.createElement('span');
  s.className = 'toque';
  s.textContent = ['💜', '💗', '✨'][Math.floor(Math.random() * 3)];
  s.style.left = e.clientX + 'px';
  s.style.top = e.clientY + 'px';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 900);
});

// Fondo de iconos flotantes
(function fondo() {
  const iconos = ['💜', '✨', '💗', '🌸', '🐱', '🐾', '🎀', '💕', '⭐', '🐈‍', '💖', '🌟'];
  const cont = $('#fondo-animado');
  const n = innerWidth < 600 ? 14 : 30;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.textContent = iconos[Math.floor(Math.random() * iconos.length)];
    s.style.left = Math.random() * 100 + '%';
    s.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    s.style.animationDuration = (Math.random() * 15 + 12) + 's';
    s.style.animationDelay = (-Math.random() * 25) + 's';
    cont.appendChild(s);
  }
})();

// Mensaje secreto
let toques = 0, tt;
$('#titulo').addEventListener('click', () => {
  toques++; clearTimeout(tt); tt = setTimeout(() => toques = 0, 1500);
  if (toques >= 5) {
    toques = 0;
    const m = $('#mensaje'); m.textContent = CONFIG.secreto; m.classList.add('ver');
    lluvia(['💜', '💖', '💕', '🌸', '✨'], 40);
    setTimeout(() => m.classList.remove('ver'), 3500);
  }
});

/* ============================================================
   Galería + visor
   ============================================================ */
let fotoIdx = 0;
$('#galeriaGrid').innerHTML = CONFIG.fotos.map((f, i) =>
  `<figure data-foto="${i}" tabindex="0" role="button" aria-label="${f.frase}">
     <img src="${f.mini}" alt="${f.frase}" loading="lazy" decoding="async"><figcaption>${f.frase}</figcaption></figure>`).join('');
$('#galeriaGrid').addEventListener('click', e => {
  const f = e.target.closest('[data-foto]'); if (f) abrirFoto(+f.dataset.foto);
});
$('#galeriaGrid').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { const f = e.target.closest('[data-foto]'); if (f) { e.preventDefault(); abrirFoto(+f.dataset.foto); } }
});

function pintarFoto() {
  const f = CONFIG.fotos[fotoIdx];
  $('#fotoGrande').src = f.src;
  $('#fotoGrande').alt = f.frase;
  $('#fotoPie').textContent = f.frase;
}
function abrirFoto(i) {
  fotoIdx = i; pintarFoto();
  $('#visor').classList.add('activo'); $('#visor').setAttribute('aria-hidden', 'false');
  history.pushState({ visor: 1 }, '', location.hash || '#galeria');
}
function cerrarFoto(volver = true) {
  $('#visor').classList.remove('activo'); $('#visor').setAttribute('aria-hidden', 'true');
  if (volver && history.state && history.state.visor) history.back();
}
function moverFoto(d) {
  fotoIdx = (fotoIdx + d + CONFIG.fotos.length) % CONFIG.fotos.length; pintarFoto();
}
$('#vCerrar').addEventListener('click', () => cerrarFoto());
$('#vPrev').addEventListener('click', e => { e.stopPropagation(); moverFoto(-1); });
$('#vNext').addEventListener('click', e => { e.stopPropagation(); moverFoto(1); });
$('#visor').addEventListener('click', e => { if (e.target.id === 'visor') cerrarFoto(); });
document.addEventListener('keydown', e => {
  if (!$('#visor').classList.contains('activo')) return;
  if (e.key === 'Escape') cerrarFoto();
  if (e.key === 'ArrowLeft') moverFoto(-1);
  if (e.key === 'ArrowRight') moverFoto(1);
});
let sx = null;
$('#visor').addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
$('#visor').addEventListener('touchend', e => {
  if (sx === null) return;
  const dx = e.changedTouches[0].clientX - sx; sx = null;
  if (Math.abs(dx) > 50) moverFoto(dx < 0 ? 1 : -1);
});

/* ============================================================
   Música (reproductor propio, sigue sonando en otras pantallas)
   ============================================================ */
const audio = new Audio();
audio.preload = 'metadata';
let cIdx = 0;
const fmt = s => isFinite(s) ? Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0') : '0:00';

function cargarCancion(i, reproducir = false) {
  cIdx = (i + CONFIG.canciones.length) % CONFIG.canciones.length;
  const c = CONFIG.canciones[cIdx];
  audio.src = c.archivo;
  $('#cTitulo').textContent = c.titulo;
  $('#cArtista').textContent = c.artista || '';
  $('#miniTitulo').textContent = c.titulo;
  if ('mediaSession' in navigator) navigator.mediaSession.metadata = new MediaMetadata({
    title: c.titulo, artist: 'Para Andrea 💜', artwork: [{ src: 'icono-512.png', sizes: '512x512', type: 'image/png' }] });
  $$('#listaCanciones li').forEach((li, k) => li.classList.toggle('sonando', k === cIdx));
  $('#barra').value = 0; $('#tAct').textContent = '0:00'; $('#tTot').textContent = '0:00';
  if (reproducir) audio.play().catch(() => {});
}
$('#listaCanciones').innerHTML = CONFIG.canciones.map((c, i) =>
  `<li data-c="${i}"><span>${i + 1}</span>${c.titulo}</li>`).join('');
$('#listaCanciones').addEventListener('click', e => {
  const li = e.target.closest('[data-c]'); if (li) cargarCancion(+li.dataset.c, true);
});
function alternar() { audio.paused ? audio.play().catch(() => {}) : audio.pause(); }
$('#bPlay').addEventListener('click', alternar);
$('#miniPlay').addEventListener('click', alternar);
$('#bNext').addEventListener('click', () => cargarCancion(cIdx + 1, true));
$('#bPrev').addEventListener('click', () => audio.currentTime > 3 ? audio.currentTime = 0 : cargarCancion(cIdx - 1, true));
audio.addEventListener('play', estadoPlay);
audio.addEventListener('pause', estadoPlay);
function estadoPlay() {
  const on = !audio.paused;
  $('#bPlay').textContent = on ? '⏸' : '▶';
  $('#miniPlay').textContent = on ? '⏸' : '▶';
  $('#disco').classList.toggle('gira', on);
  if (on) $('#mini').dataset.activo = '1';
  actualizarMini();
}
function actualizarMini() {
  const enMusica = $('#musica').classList.contains('activa');
  $('#mini').classList.toggle('oculto', !($('#mini').dataset.activo && !enMusica));
}
new MutationObserver(actualizarMini).observe($('#musica'), { attributes: true, attributeFilter: ['class'] });
audio.addEventListener('loadedmetadata', () => $('#tTot').textContent = fmt(audio.duration));
audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  if (!arrastrando) $('#barra').value = audio.currentTime / audio.duration * 1000;
  $('#tAct').textContent = fmt(audio.currentTime);
});
let arrastrando = false;
$('#barra').addEventListener('input', e => { arrastrando = true; if (audio.duration) $('#tAct').textContent = fmt(e.target.value / 1000 * audio.duration); });
$('#barra').addEventListener('change', e => { if (audio.duration) audio.currentTime = e.target.value / 1000 * audio.duration; arrastrando = false; });
audio.addEventListener('ended', () => cargarCancion(cIdx + 1, true));
cargarCancion(0);
if ('mediaSession' in navigator) {   // controles en la pantalla de bloqueo del celular
  const ms = navigator.mediaSession;
  ms.setActionHandler('play', alternar); ms.setActionHandler('pause', alternar);
  ms.setActionHandler('previoustrack', () => cargarCancion(cIdx - 1, true));
  ms.setActionHandler('nexttrack', () => cargarCancion(cIdx + 1, true));
}

/* ============================================================
   Notas
   ============================================================ */
(function notas() {
  const d = diasEntre(new Date(hoy0().getFullYear(), 0, 0), hoy0());
  const n = CONFIG.notas[d % CONFIG.notas.length];
  $('#notaHoyT').textContent = n.t; $('#notaHoyP').textContent = n.p;
  $('#notasLista').innerHTML = CONFIG.notas.map(n =>
    `<details class="nota"><summary>${n.t}</summary><p>${n.p}</p></details>`).join('');
})();

/* ============================================================
   Carta (aparece párrafo por párrafo)
   ============================================================ */
let cartaVista = false;
function pintarCarta() {
  const dias = Math.max(0, diasEntre(INICIO, hoy0()));
  $('#cartaTexto').innerHTML = CONFIG.carta.map((p, i) =>
    `<p style="animation-delay:${i * .6}s" class="${i === CONFIG.carta.length - 1 ? 'firma' : ''}">${p.replace('{dias}', dias)}</p>`).join('');
}
pintarCarta();
// repetir la animación cada vez que se abre
new MutationObserver(() => {
  if ($('#carta').classList.contains('activa')) {
    pintarCarta();
    if (!cartaVista) { cartaVista = true; lluvia(['💌', '💜'], 10); }
  }
}).observe($('#carta'), { attributes: true, attributeFilter: ['class'] });

/* ============================================================
   Contador
   ============================================================ */
function hitos() {
  const base = [
    { n: '1 semana', f: new Date(+INICIO + 7 * 864e5) },
    { n: '1 mes', f: sumarMeses(INICIO, 1) },
    { n: '50 días', f: new Date(+INICIO + 50 * 864e5) },
    { n: '100 días', f: new Date(+INICIO + 100 * 864e5) },
    { n: '3 meses', f: sumarMeses(INICIO, 3) },
    { n: '4 meses', f: sumarMeses(INICIO, 4) },
    { n: '150 días', f: new Date(+INICIO + 150 * 864e5) },
    { n: '5 meses', f: sumarMeses(INICIO, 5) },
    { n: '200 días', f: new Date(+INICIO + 200 * 864e5) },
    { n: '6 meses', f: sumarMeses(INICIO, 6) },
    { n: '1 año', f: sumarMeses(INICIO, 12) }
  ];
  return base.sort((a, b) => a.f - b.f);
}
const fechaLarga = f => f.toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' });
function pintarHitos() {
  const h0 = hoy0(), lista = hitos();
  $('#hitos').innerHTML = lista.map(h => {
    const ok = h.f <= h0;
    return `<li class="${ok ? 'ok' : ''}"><span>${ok ? '💜' : '🤍'}</span><b>${h.n}</b><em>${fechaLarga(h.f)}</em></li>`;
  }).join('');
  const sig = lista.find(h => h.f > h0);
  const p = $('#proximo');
  if (sig) {
    const falta = diasEntre(h0, sig.f);
    p.innerHTML = `Próximo hito: <b>${sig.n}</b><br>${falta === 1 ? 'Falta 1 día' : 'Faltan ' + falta + ' días'} 💫`;
  } else p.textContent = '¡Seguimos sumando! 💜';
  if (lista.some(h => +h.f === +h0)) p.innerHTML = '🎉 ¡Hoy es un día especial: ' + lista.find(h => +h.f === +h0).n + ' juntos! 🎉';
}
function tick() {
  const ahora = new Date(), h0 = hoy0();
  const dias = Math.max(0, diasEntre(INICIO, h0));
  $('#dias').textContent = dias;
  let meses = (h0.getFullYear() - INICIO.getFullYear()) * 12 + h0.getMonth() - INICIO.getMonth();
  if (sumarMeses(INICIO, meses) > h0) meses--;
  meses = Math.max(0, meses);
  const rest = diasEntre(sumarMeses(INICIO, meses), h0);
  $('#mesesDias').textContent = `${meses} ${meses === 1 ? 'mes' : 'meses'} y ${rest} ${rest === 1 ? 'día' : 'días'} 💜`;
  $('#rH').textContent = ahora.getHours();
  $('#rM').textContent = ahora.getMinutes();
  $('#rS').textContent = ahora.getSeconds();
}
tick(); pintarHitos();
let tid = setInterval(tick, 1000);   // se pausa con la pantalla apagada: ahorra batería
document.addEventListener('visibilitychange', () => {
  clearInterval(tid);
  if (!document.hidden) { tick(); pintarHitos(); tid = setInterval(tick, 1000); }
});
setInterval(pintarHitos, 60 * 60 * 1000);
$('#dias').addEventListener('click', () => lluvia(['💜', '💖', '💕'], 24));

/* ============================================================
   Ruleta
   ============================================================ */
let girando = false, ultimoPlan = -1;
$('#btnGirar').addEventListener('click', () => {
  if (girando) return;
  girando = true;
  const el = $('#plan'), btn = $('#btnGirar');
  btn.disabled = true; el.classList.remove('final'); el.classList.add('girando');
  let n = 0, total = reducir ? 1 : 18, espera = 70;
  (function paso() {
    let i; do { i = Math.floor(Math.random() * CONFIG.planes.length); } while (i === ultimoPlan && CONFIG.planes.length > 1);
    ultimoPlan = i; el.textContent = CONFIG.planes[i];
    if (++n < total) { espera += 12; setTimeout(paso, espera); }
    else {
      el.classList.remove('girando'); el.classList.add('final');
      btn.disabled = false; btn.textContent = 'Girar otra vez 🎲'; girando = false;
      lluvia(['🎉', '💜', '✨'], 14);
    }
  })();
});

/* ============================================================
   Razones
   ============================================================ */
let razonVista = false, ordenRazones = [], posRazon = 0;
function siguienteRazon() {
  razonVista = true;
  if (posRazon >= ordenRazones.length) {
    ordenRazones = mezclar(CONFIG.razones.map((_, i) => i)); posRazon = 0;
  }
  const i = ordenRazones[posRazon++];
  const t = $('#razonTarjeta');
  t.classList.remove('flip'); void t.offsetWidth; t.classList.add('flip');
  $('#razonNum').textContent = '#' + (i + 1);
  $('#razonTexto').textContent = CONFIG.razones[i];
}
$('#btnRazon').addEventListener('click', siguienteRazon);

/* ============================================================
   Ábreme cuando…
   ============================================================ */
$('#sobres').innerHTML = CONFIG.abre.map((s, i) =>
  `<div class="sobre-carta" data-s="${i}" tabindex="0" role="button">
     <div class="sobre-cierre"><span>${s.icono}</span><b>Cuando…<br>${s.t}</b></div>
     <div class="sobre-abierto"><p>${s.p}</p></div>
   </div>`).join('');
function alternarSobre(el) {
  const abierto = el.classList.toggle('abierto');
  if (abierto) lluvia(['💌', '💜'], 6);
}
$('#sobres').addEventListener('click', e => { const s = e.target.closest('.sobre-carta'); if (s) alternarSobre(s); });
$('#sobres').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { const s = e.target.closest('.sobre-carta'); if (s) { e.preventDefault(); alternarSobre(s); } }
});

/* ============================================================
   Juego de memoria
   ============================================================ */
let abiertas = [], bloqueo = false, movs = 0, parejas = 0, totalParejas = 0;
function nuevoJuego() {
  const items = mezclar([
    ...CONFIG.fotos.map(f => ({ k: f.src, html: `<img src="${f.mini}" alt="">` })),
    ...CONFIG.emojisJuego.map(e => ({ k: e, html: `<span>${e}</span>` }))
  ]).slice(0, 8);   // 8 parejas = 16 cartas, cómodo en el celular
  totalParejas = items.length; parejas = 0; movs = 0; abiertas = []; bloqueo = false;
  const cartas = mezclar([...items, ...items]);
  $('#memoria').innerHTML = cartas.map(c =>
    `<button class="carta-m" data-k="${c.k}" aria-label="Carta"><div class="cara dorso">💜</div><div class="cara frente">${c.html}</div></button>`).join('');
  $('#juegoInfo').textContent = 'Movimientos: 0';
}
$('#memoria').addEventListener('click', e => {
  const c = e.target.closest('.carta-m');
  if (!c || bloqueo || c.classList.contains('volteada') || c.classList.contains('hecha')) return;
  c.classList.add('volteada'); abiertas.push(c);
  if (abiertas.length === 2) {
    movs++; $('#juegoInfo').textContent = 'Movimientos: ' + movs;
    const [a, b] = abiertas;
    if (a.dataset.k === b.dataset.k) {
      a.classList.add('hecha'); b.classList.add('hecha'); abiertas = []; parejas++;
      if (parejas === totalParejas) {
        $('#juegoInfo').textContent = `¡Lo lograste en ${movs} movimientos! 🎉💜`;
        lluvia(['🎉', '💜', '💖', '✨'], 36);
      }
    } else {
      bloqueo = true;
      setTimeout(() => { a.classList.remove('volteada'); b.classList.remove('volteada'); abiertas = []; bloqueo = false; }, 800);
    }
  }
});
$('#btnReiniciar').addEventListener('click', nuevoJuego);
nuevoJuego();

/* ============================================================
   Cupones de amor (se guardan en el celular)
   ============================================================ */
(function cupones() {
  let usados = []; try { usados = JSON.parse(localStorage.getItem('cupones') || '[]'); } catch (e) {}
  const pintar = () => $('#cuponesLista').innerHTML = CONFIG.cupones.map((c, i) =>
    `<button class="cupon ${usados.includes(i) ? 'canjeado' : ''}" data-cu="${i}"><span>${c.i}</span><div><b>${c.t}</b><small>${usados.includes(i) ? 'Canjeado ✅' : c.d}</small></div></button>`).join('');
  $('#cuponesLista').addEventListener('click', e => {
    const b = e.target.closest('[data-cu]'); if (!b) return;
    const i = +b.dataset.cu; if (usados.includes(i)) return;
    usados.push(i); try { localStorage.setItem('cupones', JSON.stringify(usados)); } catch (e) {}
    pintar(); lluvia(['🎟️', '💜', '✨'], 18);
    const m = $('#mensaje'); m.textContent = '¡Cupón canjeado! Mándame captura 😘'; m.classList.add('ver');
    setTimeout(() => m.classList.remove('ver'), 3000);
  });
  pintar();
})();

/* ============================================================
   Inicio: abrir la sección del hash y registrar la app offline
   ============================================================ */
history.replaceState({ id: 'menu' }, '', location.hash || '#menu');
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// Guarda la app para que abra rápido y sin internet. Sube VERSION si cambias archivos.
const VERSION = 'andrea-v3';
const ARCHIVOS = ['./', 'index.html', 'style.css', 'script.js', 'sonidos.js', 'manifest.json', 'icono-192.png', 'icono-512.png', 'fotos/foto1.jpg', 'fotos/foto10.jpg', 'fotos/foto11.jpg', 'fotos/foto12.jpg', 'fotos/foto13.jpg', 'fotos/foto14.jpg', 'fotos/foto2.jpg', 'fotos/foto3.jpg', 'fotos/foto4.jpg', 'fotos/foto5.jpg', 'fotos/foto6.jpg', 'fotos/foto7.jpg', 'fotos/foto8.jpg', 'fotos/foto9.jpg', 'fotos/mini/foto1.jpg', 'fotos/mini/foto10.jpg', 'fotos/mini/foto11.jpg', 'fotos/mini/foto12.jpg', 'fotos/mini/foto13.jpg', 'fotos/mini/foto14.jpg', 'fotos/mini/foto2.jpg', 'fotos/mini/foto3.jpg', 'fotos/mini/foto4.jpg', 'fotos/mini/foto5.jpg', 'fotos/mini/foto6.jpg', 'fotos/mini/foto7.jpg', 'fotos/mini/foto8.jpg', 'fotos/mini/foto9.jpg'];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.endsWith('.mp3')) return;
  // primero lo guardado (rápido) y se actualiza en segundo plano
  e.respondWith(caches.match(e.request).then(hit => {
    const red = fetch(e.request).then(r => { if (r.ok) { const c = r.clone(); caches.open(VERSION).then(ca => ca.put(e.request, c)); } return r; }).catch(() => hit);
    return hit || red;
  }));
});

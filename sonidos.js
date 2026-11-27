/* Sonidos de gatito generados con Web Audio (no pesan nada y funcionan sin internet).
   Para usar maullidos reales: cambia miau() por new Audio('sonidos/miau.mp3').play() */
const Gato = (() => {
  let ctx, ult = 0, on = true;
  try { on = localStorage.getItem('sonido') !== '0'; } catch (e) {}
  const ac = () => { ctx = ctx || new (window.AudioContext || window.webkitAudioContext)(); if (ctx.state === 'suspended') ctx.resume(); return ctx; };
  function voz(c, t, f0, f1, f2, d, vol, tipo) {
    const o = c.createOscillator(), f = c.createBiquadFilter(), g = c.createGain();
    o.type = tipo; o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + d * .4); o.frequency.exponentialRampToValueAtTime(f2, t + d);
    f.type = 'bandpass'; f.Q.value = 3;
    f.frequency.setValueAtTime(f0 * 2, t); f.frequency.exponentialRampToValueAtTime(f1 * 2.4, t + d * .4); f.frequency.exponentialRampToValueAtTime(f2 * 2, t + d);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .04); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    o.connect(f); f.connect(g); g.connect(c.destination); o.start(t); o.stop(t + d + .03);
  }
  const miau = c => { const p = .85 + Math.random() * .5, d = .4 + Math.random() * .2; voz(c, c.currentTime, 420 * p, 880 * p, 480 * p, d, .2, 'sawtooth'); };
  const mrrp = c => { const p = .9 + Math.random() * .4, t = c.currentTime; voz(c, t, 330 * p, 560 * p, 520 * p, .1, .18, 'triangle'); voz(c, t + .12, 380 * p, 700 * p, 650 * p, .12, .18, 'triangle'); };
  function sonar() {
    if (!on) return;
    const n = Date.now(); if (n - ult < 140) return; ult = n;
    try { Math.random() < .6 ? mrrp(ac()) : miau(ac()); } catch (e) {}
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('button,[role=button],summary,[data-ir]');
    if (!b || b.id === 'btnSonido') return;
    if (navigator.vibrate) navigator.vibrate(12);
    sonar();
  }, true);
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnSonido');
    const pintar = () => { btn.textContent = on ? '🔊' : '🔇'; };
    pintar();
    btn.addEventListener('click', () => {
      on = !on; try { localStorage.setItem('sonido', on ? '1' : '0'); } catch (e) {}
      pintar(); if (on) sonar();
    });
  });
  return { sonar };
})();

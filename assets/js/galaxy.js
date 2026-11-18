/* ==========================================================================
   EXORDIUM // SYSTEMS GALAXY (home page header)
   The logo in the centre and the game's systems on tilted elliptical orbits,
   each with its own small cloud of particles. Plain 2D canvas, no libraries.
   - hover a system to name it, click (or tap twice) to visit its section
   - still when the visitor asks for reduced motion
   - paused while off screen or in a hidden tab
   ========================================================================== */
(function () {
  'use strict';

  const hero = document.querySelector('.galaxy-hero');
  if (!hero) return;
  const canvas = hero.querySelector('.galaxy-canvas');
  const tip = hero.querySelector('.galaxy-tip');
  const chips = document.querySelector('.galaxy-chips');
  const ctx = canvas.getContext('2d');
  const lang = hero.dataset.lang === 'pt' ? 'pt' : 'en';

  // Category colours (the site's own palette).
  const C = {
    work: '#f59e0b',      // jobs and careers
    rescue: '#ef4444',    // emergencies and law
    move: '#06b6d4',      // transport
    life: '#a855f7',      // the player's own life
    city: '#14b8a6'       // the city itself
  };

  // The game's systems as of 0.4.0. Orbit 0 is the inner one.
  // href: [english page, portuguese page]; null when the site has no section yet.
  const SYSTEMS = [
    // inner orbit: the core of a day
    { icon: '💼', cat: 'work', orbit: 0,
      en: ['Careers & promotions', 'Five employers, ranks 1 to 5: who is promoted to what.'],
      pt: ['Carreiras e promoções', 'Cinco empregadores, níveis 1 a 5: quem é promovido a quê.'],
      href: ['careers.html', 'profissoes.html'] },
    { icon: '🎮', cat: 'work', orbit: 0,
      en: ['Work minigames', 'The work is played: inbox triage, printer jams, Spec & Deal, the pharmacy counter.'],
      pt: ['Minigames de trabalho', 'O trabalho é jogado: caixa de entrada, impressora travada, Spec & Deal, o balcão da farmácia.'],
      href: ['minigames.html', 'minigames.html'] },
    { icon: '🏙️', cat: 'city', orbit: 0,
      en: ['4,700 citizens', 'Each one with a home, a job and a schedule. The city lives without you.'],
      pt: ['4.700 cidadãos', 'Cada um com casa, emprego e horário. A cidade vive sem você.'],
      href: ['index.html#city', 'index.html#city'] },
    { icon: '😴', cat: 'life', orbit: 0,
      en: ['Energy & sleep', 'Coffee, energy drinks, a bed at night, and the nightmare that opens the story.'],
      pt: ['Energia e sono', 'Café, energéticos, a cama à noite e o pesadelo que abre a história.'],
      href: ['index.html#pillars', 'index.html#pillars'] },
    { icon: '📱', cat: 'life', orbit: 0,
      en: ['Phone & friends', 'Messages, apps and friends with opinions of their own.'],
      pt: ['Celular e amigos', 'Mensagens, apps e amigos com opinião própria.'],
      href: ['index.html#city', 'index.html#city'] },

    // middle orbit: the city's services and its law
    { icon: '🚑', cat: 'rescue', orbit: 1,
      en: ['SAMU 192', 'Ambulances, paramedics on foot and the witnesses of every accident.'],
      pt: ['SAMU 192', 'Ambulâncias, socorristas a pé e as testemunhas de cada acidente.'],
      href: ['penalties.html#impact', 'penalidades.html#samu'] },
    { icon: '🏥', cat: 'rescue', orbit: 1,
      en: ['Hospital & health units', 'The hospital has its own people, beds and a bill at the end.'],
      pt: ['Hospital e unidades de saúde', 'O hospital tem gente própria, leitos e uma conta no fim.'],
      href: ['penalties.html#impact', 'penalidades.html#samu'] },
    { icon: '🚦', cat: 'rescue', orbit: 1,
      en: ['Traffic & law', 'Lanes, lights and stop signs; break the law and the police escalate.'],
      pt: ['Trânsito e lei', 'Faixas, semáforos e placas de pare; quebre a lei e a polícia escala.'],
      href: ['penalties.html#escalation', 'penalidades.html#escalation'] },
    { icon: '⛓️', cat: 'rescue', orbit: 1,
      en: ['Federal prison', 'Where the worst choices end. Visits included.'],
      pt: ['Presídio federal', 'Onde terminam as piores escolhas. Com visitas.'],
      href: ['penalties.html#prison', 'penalidades.html#prison'] },
    { icon: '🚒', cat: 'rescue', orbit: 1,
      en: ['Fire department', 'Turntable ladders, drills and the station\'s cat.'],
      pt: ['Corpo de Bombeiros', 'Auto-escadas, simulados e o gato do quartel.'],
      href: ['transit.html#fire', 'transportes.html#fire'] },
    { icon: '🧹', cat: 'work', orbit: 1,
      en: ['Cleaning contracts', 'Offices, shops and the rich houses on the hill: the golden job.'],
      pt: ['Contratos de limpeza', 'Escritórios, lojas e as casas ricas: o trabalho dourado.'],
      href: ['careers.html#board-freelance', 'profissoes.html#board-freelance'] },

    // outer orbit: getting around, and the tools around the game
    { icon: '🚝', cat: 'move', orbit: 2,
      en: ['SkyTrain & Stations', 'The suspended monorail and its Stations above the avenues.'],
      pt: ['SkyTrain e Estações', 'O monotrilho suspenso e suas Estações sobre as avenidas.'],
      href: ['transit.html#skytrain', 'transportes.html#skytrain'] },
    { icon: '🚌', cat: 'move', orbit: 2,
      en: ['Buses', 'Scheduled lines, drivers with shifts, the terminal.'],
      pt: ['Ônibus', 'Linhas com horário, motoristas com turnos, o terminal.'],
      href: ['transit.html#buses', 'transportes.html#buses'] },
    { icon: '🚲', cat: 'move', orbit: 2,
      en: ['Cars & bicycles', 'Buy them at the dealerships. Since 0.4.0 they leave the ground.'],
      pt: ['Carros e bicicletas', 'Compre nas concessionárias. Desde a 0.4.0 eles saem do chão.'],
      href: ['transit.html#vehicles', 'transportes.html#vehicles'] },
    { icon: '🚁', cat: 'move', orbit: 2,
      en: ['The TV helicopter', 'Take the controls: the city from above.'],
      pt: ['O helicóptero da TV', 'Assuma os controles: a cidade vista de cima.'],
      href: ['index.html#city', 'index.html#city'] },
    { icon: '🚗', cat: 'work', orbit: 2,
      en: ['Ride-hailing', 'Drive your own car for the app; every passenger has a story.'],
      pt: ['Motorista de aplicativo', 'Dirija seu carro pelo app; cada passageiro tem uma história.'],
      href: ['careers.html#board-freelance', 'profissoes.html#board-freelance'] },
    { icon: '🍔', cat: 'city', orbit: 2,
      en: ['Restaurants & stalls', 'Buffets, fine dining and the food stalls under the viaducts.'],
      pt: ['Restaurantes e barracas', 'Buffets, alta gastronomia e as barracas sob os viadutos.'],
      href: ['careers.html#board-restaurant', 'profissoes.html#board-restaurant'] },
    { icon: '🛠️', cat: 'city', orbit: 2,
      en: ['World editor', 'Its own product: move buildings, rename streets, build lots.'],
      pt: ['Editor de mundo', 'Um produto à parte: mover prédios, renomear ruas, montar lotes.'],
      href: null }
  ];

  // Orbits as fractions of the hero: [rx of half width, ry of half height, tilt (rad), speed (rad/s)].
  const ORBITS = [
    { rx: 0.40, ry: 0.42, tilt: -0.22, speed: 0.050 },
    { rx: 0.64, ry: 0.68, tilt: 0.16, speed: -0.034 },
    { rx: 0.90, ry: 0.98, tilt: -0.08, speed: 0.022 }
  ];
  const FLAT = 0.82;   // how flat the orbits look: we see the plane at an angle
  // Decorative rings without systems.
  const RINGS = [
    { rx: 0.20, ry: 0.22, tilt: 0.3 },
    { rx: 0.76, ry: 0.70, tilt: -0.22 },
    { rx: 1.05, ry: 0.95, tilt: 0.12 }
  ];

  // Seeded random so every visit looks the same.
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;

  // Spread each orbit's systems evenly, with a per-orbit offset.
  const perOrbit = [0, 0, 0];
  SYSTEMS.forEach(s => { s.slot = perOrbit[s.orbit]++; });
  SYSTEMS.forEach((s, i) => {
    s.phase = (s.slot / perOrbit[s.orbit]) * Math.PI * 2 + s.orbit * 0.9;
    s.color = C[s.cat];
    s.ringed = i % 3 === 0;          // a few systems carry a small ring
    s.cloud = [];
    const n = 18 + Math.floor(rnd() * 12);
    for (let k = 0; k < n; k++) {
      s.cloud.push({ a: rnd() * Math.PI * 2, r: 10 + Math.abs(gauss()) * 38, w: (rnd() - 0.5) * 0.5, z: 0.6 + rnd() * 1.1 });
    }
    // a short spray of particles pointing toward the centre, like a comet's dust
    s.spray = [];
    for (let k = 0; k < 6; k++) s.spray.push({ d: 0.1 + rnd() * 0.35, j: gauss() * 6 });
  });
  const STARS = [];
  for (let k = 0; k < 140; k++) STARS.push({ x: rnd(), y: rnd(), r: rnd() < 0.85 ? 0.7 : 1.3, p: rnd() * 6.28 });

  // ---------------------------------------------------------------- state
  let W = 0, H = 0, dpr = 1;
  let t0 = performance.now(), t = 0;
  let running = false, visible = true;
  let hover = -1, pinned = -1;        // pinned: a tapped system on touch screens
  let chipHover = -1;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function resize() {
    const r = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  // A point on an orbit: [x, y, depth] where depth 1 is in front, 0 behind.
  function onOrbit(o, ang) {
    const ax = o.rx * W * 0.5, ay = o.ry * H * 0.5 * FLAT;   // flattened: we see the plane at an angle
    const x = Math.cos(ang) * ax, y = Math.sin(ang) * ay;
    const c = Math.cos(o.tilt), s = Math.sin(o.tilt);
    return [W / 2 + x * c - y * s, H / 2 + x * s + y * c, (Math.sin(ang) + 1) / 2];
  }

  function ellipse(o, alpha, dash) {
    ctx.save();
    ctx.translate(W / 2, H / 2);
    ctx.rotate(o.tilt);
    ctx.beginPath();
    ctx.ellipse(0, 0, o.rx * W * 0.5, o.ry * H * 0.5 * FLAT, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(200, 255, 245,' + alpha + ')';
    ctx.lineWidth = 1;
    if (dash) ctx.setLineDash(dash);
    ctx.stroke();
    ctx.restore();
  }

  function positions() {
    return SYSTEMS.map(s => {
      const o = ORBITS[s.orbit];
      const p = onOrbit(o, s.phase + t * o.speed);
      const k = Math.min(W, 900) / 900;                  // smaller on phones
      p.push((0.72 + 0.38 * p[2]) * (0.7 + 0.3 * k));     // scale
      return p;
    });
  }

  function drawSystem(s, p, i) {
    const [x, y, depth, sc] = p;
    const lit = i === hover || i === pinned || i === chipHover;
    const a = 0.35 + 0.65 * depth;
    // particle cloud
    ctx.fillStyle = s.color;
    for (const q of s.cloud) {
      const ang = q.a + t * q.w;
      const px = x + Math.cos(ang) * q.r * sc, py = y + Math.sin(ang) * q.r * sc * 0.7;
      ctx.globalAlpha = a * (lit ? 1 : 0.8) * Math.max(0, 1 - q.r / 75);
      ctx.fillRect(px, py, q.z * 1.3, q.z * 1.3);
    }
    // dust toward the centre
    ctx.fillStyle = '#d7fff8';
    for (const q of s.spray) {
      const px = x + (W / 2 - x) * q.d * 0.35 + q.j, py = y + (H / 2 - y) * q.d * 0.35 + q.j * 0.5;
      ctx.globalAlpha = a * 0.35 * (1 - q.d);
      ctx.fillRect(px, py, 1.1, 1.1);
    }
    ctx.globalAlpha = a;
    const R = 15 * sc;
    if (lit) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, R * 3);
      g.addColorStop(0, s.color + '66'); g.addColorStop(1, s.color + '00');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, R * 3, 0, Math.PI * 2); ctx.fill();
    }
    if (s.ringed || lit) {
      ctx.beginPath(); ctx.arc(x, y, R + 7 * sc, 0, Math.PI * 2);
      ctx.strokeStyle = s.color; ctx.globalAlpha = a * (lit ? 0.9 : 0.45); ctx.lineWidth = 1; ctx.stroke();
      ctx.globalAlpha = a;
    }
    ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2);
    ctx.fillStyle = '#0d1414'; ctx.fill();
    ctx.strokeStyle = s.color; ctx.lineWidth = lit ? 2 : 1.2; ctx.stroke();
    ctx.font = Math.round(15 * sc) + 'px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s.icon, x, y + 1);
    ctx.globalAlpha = 1;
  }

  function drawLogo() {
    const k = Math.min(W / 760, 1.25);
    const size = Math.max(28, 52 * k);
    // halo
    const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, size * 3.4);
    g.addColorStop(0, 'rgba(20,184,166,0.30)'); g.addColorStop(0.45, 'rgba(20,184,166,0.08)'); g.addColorStop(1, 'rgba(20,184,166,0)');
    ctx.fillStyle = g;
    ctx.fillRect(W / 2 - size * 3.4, H / 2 - size * 3.4, size * 6.8, size * 6.8);
    // the emblem: a ring around the word, tilted like the orbits
    ctx.save();
    ctx.translate(W / 2, H / 2); ctx.rotate(-0.16);
    ctx.beginPath(); ctx.ellipse(0, 0, size * 3.1, size * 1.05, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(94,234,212,0.55)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.restore();
    // the word
    ctx.save();
    ctx.font = '900 ' + Math.round(size) + 'px Archivo, "Arial Black", sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    if ('letterSpacing' in ctx) ctx.letterSpacing = Math.round(size * 0.06) + 'px';
    const tg = ctx.createLinearGradient(0, H / 2 - size / 2, 0, H / 2 + size / 2);
    tg.addColorStop(0, '#ffffff'); tg.addColorStop(1, '#5eead4');
    ctx.shadowColor = 'rgba(20,184,166,0.65)'; ctx.shadowBlur = 24;
    ctx.fillStyle = tg;
    ctx.fillText('EXORDIUM', W / 2, H / 2);
    ctx.shadowBlur = 0;
    ctx.font = '600 ' + Math.round(Math.max(9, 12 * k)) + 'px "IBM Plex Mono", Consolas, monospace';
    if ('letterSpacing' in ctx) ctx.letterSpacing = '3px';
    ctx.fillStyle = 'rgba(200,240,232,0.75)';
    ctx.fillText(lang === 'pt' ? 'A VIDA COMUM É O JOGO' : 'EVERYDAY LIFE IS THE GAME', W / 2, H / 2 + size * 0.85);
    ctx.restore();
  }

  let lastPos = [];
  function draw() {
    if (!W) return;
    ctx.clearRect(0, 0, W, H);
    // stars
    ctx.fillStyle = '#cfe9e4';
    for (const s of STARS) {
      ctx.globalAlpha = 0.18 + 0.18 * Math.sin(s.p + t * 0.6);
      ctx.fillRect(s.x * W, s.y * H, s.r, s.r);
    }
    ctx.globalAlpha = 1;
    RINGS.forEach(o => ellipse(o, 0.05, [2, 6]));
    ORBITS.forEach(o => ellipse(o, 0.10));
    const pos = positions();
    lastPos = pos;
    const order = pos.map((p, i) => i).sort((a, b) => pos[a][2] - pos[b][2]);
    // behind the logo, the logo, then in front of it
    order.forEach(i => { if (pos[i][2] < 0.5) drawSystem(SYSTEMS[i], pos[i], i); });
    drawLogo();
    order.forEach(i => { if (pos[i][2] >= 0.5) drawSystem(SYSTEMS[i], pos[i], i); });
    placeTip();
  }

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - t0) / 1000);
    t0 = now;
    // the galaxy holds still while a system is pointed at, so it can be clicked
    if (hover < 0 && pinned < 0 && chipHover < 0) t += dt;
    draw();
    requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduce.matches || !visible || document.hidden) { draw(); return; }
    running = true; t0 = performance.now();
    requestAnimationFrame(frame);
  }
  function stop() { running = false; }

  // ---------------------------------------------------------------- tooltip
  function placeTip() {
    const i = hover >= 0 ? hover : (pinned >= 0 ? pinned : chipHover);
    if (i < 0 || !lastPos[i]) { tip.hidden = true; return; }
    const s = SYSTEMS[i], [x, y] = lastPos[i];
    const L = s[lang];
    const link = s.href ? '' : (lang === 'pt' ? '<em>Ainda sem seção no site.</em>' : '<em>No section on the site yet.</em>');
    const tap = (pinned === i && s.href) ? (lang === 'pt' ? '<span class="galaxy-tip-go">Toque de novo para abrir →</span>' : '<span class="galaxy-tip-go">Tap again to open →</span>') : '';
    const html = '<strong style="color:' + s.color + '">' + L[0] + '</strong><span>' + L[1] + '</span>' + link + tap;
    if (tip.dataset.i !== String(i) + tap) { tip.innerHTML = html; tip.dataset.i = String(i) + tap; }
    tip.hidden = false;
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let lx = x - tw / 2, ly = y - th - 26;
    if (ly < 6) ly = y + 26;
    lx = Math.max(6, Math.min(W - tw - 6, lx));
    tip.style.transform = 'translate(' + Math.round(lx) + 'px,' + Math.round(ly) + 'px)';
  }

  function pick(ev) {
    const r = canvas.getBoundingClientRect();
    const mx = ev.clientX - r.left, my = ev.clientY - r.top;
    let best = -1, bd = 1e9;
    lastPos.forEach((p, i) => {
      const d = Math.hypot(p[0] - mx, p[1] - my);
      const lim = (ev.pointerType === 'touch' ? 30 : 22) * p[3];
      if (d < lim && d < bd) { bd = d; best = i; }
    });
    return best;
  }

  function go(i) {
    const s = SYSTEMS[i];
    if (!s || !s.href) return;
    window.location.href = s.href[lang === 'pt' ? 1 : 0];
  }

  canvas.addEventListener('pointermove', ev => {
    if (ev.pointerType === 'touch') return;
    const i = pick(ev);
    if (i !== hover) { hover = i; canvas.style.cursor = i >= 0 && SYSTEMS[i].href ? 'pointer' : 'default'; draw(); }
  });
  canvas.addEventListener('pointerleave', () => { if (hover >= 0) { hover = -1; draw(); } });
  canvas.addEventListener('pointerup', ev => {
    const i = pick(ev);
    if (ev.pointerType === 'touch') {
      if (i >= 0 && i === pinned) go(i);
      else { pinned = i; draw(); }
      return;
    }
    if (i >= 0) go(i);
  });

  // The chips under the header: the same systems as plain links (keyboard, screen readers, phones).
  if (chips) {
    SYSTEMS.forEach((s, i) => {
      const L = s[lang];
      const el = document.createElement(s.href ? 'a' : 'span');
      el.className = 'galaxy-chip';
      if (s.href) el.href = s.href[lang === 'pt' ? 1 : 0];
      el.title = L[1];
      el.style.setProperty('--chip', s.color);
      el.innerHTML = '<span aria-hidden="true">' + s.icon + '</span> ' + L[0];
      const on = () => { chipHover = i; draw(); };
      const off = () => { chipHover = -1; draw(); };
      el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off);
      el.addEventListener('focus', on); el.addEventListener('blur', off);
      chips.appendChild(el);
    });
  }

  // On touch screens there is no hover: say "tap" instead.
  const hint = hero.querySelector('.galaxy-hint');
  if (hint && window.matchMedia('(hover: none)').matches) {
    hint.textContent = lang === 'pt' ? 'Toque num sistema · toque de novo para visitar' : 'Tap a system · tap again to visit';
  }

  // ---------------------------------------------------------------- lifecycle
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(hero);
  else window.addEventListener('resize', resize);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => {
      visible = es[0].isIntersecting;
      visible ? start() : stop();
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });
  const onReduce = () => { reduce.matches ? stop() : start(); draw(); };
  if (reduce.addEventListener) reduce.addEventListener('change', onReduce); else reduce.addListener(onReduce);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);

  resize();
  start();
})();

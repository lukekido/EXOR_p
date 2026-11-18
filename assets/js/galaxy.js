/* ==========================================================================
   EXORDIUM // SYSTEMS GALAXY (home page header)
   The logo in the centre and the game's systems on tilted orbits seen in a simple 3D
   projection, each system with satellites (its sub-topics). Plain 2D canvas, no libraries.
   - drag to turn and tilt the orbit plane (touch: sideways); drag over the logo to turn the logo
   - hover a system to name it and label its satellites, click (or tap twice) to visit its section
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
      href: ['penalties.html#samu', 'penalidades.html#samu'] },
    { icon: '🏥', cat: 'rescue', orbit: 1,
      en: ['Hospital & health units', 'The hospital has its own people, beds and a bill at the end.'],
      pt: ['Hospital e unidades de saúde', 'O hospital tem gente própria, leitos e uma conta no fim.'],
      href: ['penalties.html#samu', 'penalidades.html#samu'] },
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


  // Sub-topics of each system (taken from the site's pages and the game's notes), EN / PT.
  const SUB = {
    'Careers & promotions': [['Lunar sensors', 'Pharmacy chain', 'Restaurants', 'Autonomous gigs', 'Super Takai'], ['Sensores Lunar', 'Rede de farmácias', 'Restaurantes', 'Bicos autônomos', 'Super Takai']],
    'Work minigames': [['Service desk inbox', 'Printer jam', 'Spec & Deal', 'Pharmacy counter', 'Fire drills', 'Tow truck'], ['Caixa de entrada', 'Impressora travada', 'Spec & Deal', 'Balcão da farmácia', 'Simulados de incêndio', 'Guincho']],
    '4,700 citizens': [['A home', 'A job', 'A schedule', 'Lives without you'], ['Uma casa', 'Um emprego', 'Um horário', 'Vive sem você']],
    'Energy & sleep': [['Coffee', 'Energy drinks', 'A bed at night', 'The opening nightmare'], ['Café', 'Energéticos', 'A cama à noite', 'O pesadelo de abertura']],
    'Phone & friends': [['Messages', 'Apps', 'Friends'], ['Mensagens', 'Apps', 'Amigos']],
    'SAMU 192': [['Ambulances', 'Paramedics on foot', 'Witnesses', 'Tow truck'], ['Ambulâncias', 'Socorristas a pé', 'Testemunhas', 'Guincho']],
    'Hospital & health units': [['Its own people', 'Beds', 'The bill'], ['Gente própria', 'Leitos', 'A conta']],
    'Traffic & law': [['Lanes', 'Traffic lights', 'Stop signs', 'Police escalation'], ['Faixas', 'Semáforos', 'Placas de pare', 'Escalada da polícia']],
    'Federal prison': [['Cell routine', 'Visits', 'The clock keeps ticking', 'Back to the bottom rung'], ['Rotina na cela', 'Visitas', 'O relógio não para', 'De volta ao primeiro degrau']],
    'Fire department': [['Turntable ladder', 'Drills', 'Sombra, the station cat', 'Aerial basket trucks'], ['Auto-escada', 'Simulados', 'Sombra, a gata do quartel', 'Caminhões de cesto aéreo']],
    'Cleaning contracts': [['Offices', 'Shops', 'The rich houses', 'The hospital'], ['Escritórios', 'Lojas', 'As casas ricas', 'O hospital']],
    'SkyTrain & Stations': [['Stations', 'Platform doors', 'Elevated loop', 'Viaduct overpass'], ['Estações', 'Portas de plataforma', 'Laço elevado', 'Passagem no viaduto']],
    'Buses': [['Line 101', 'Line 202', 'Line 303', "Drivers' shifts", '02:00 curfew'], ['Linha 101', 'Linha 202', 'Linha 303', 'Turnos dos motoristas', 'Toque de recolher às 02h']],
    'Cars & bicycles': [['Dealerships', 'Car classes', 'Selling', 'Garage list', 'Airborne ramp'], ['Concessionárias', 'Classes de carro', 'Venda', 'Lista da garagem', 'Rampa aérea']],
    'The TV helicopter': [['Take the controls', 'TV Maresol', 'The city from above'], ['Assuma os controles', 'TV Maresol', 'A cidade vista de cima']],
    'Ride-hailing': [['Your own car', 'The app', 'Passenger stories'], ['Seu próprio carro', 'O aplicativo', 'Histórias de passageiros']],
    'Restaurants & stalls': [['Buffets', 'Fine dining', 'Food stalls', 'Franchise owner'], ['Buffets', 'Alta gastronomia', 'Barracas', 'Dono de franquia']],
    'World editor': [['Move buildings', 'Rename streets', 'Build lots'], ['Mover prédios', 'Renomear ruas', 'Montar lotes']]
  };
  SYSTEMS.forEach(s => { const x = SUB[s.en[0]]; s.sub = x ? x[lang === 'pt' ? 1 : 0] : []; });

  // Orbits, in units of U (the outermost orbit's radius). roll tips the plane sideways; speed in rad/s.
  const ORBITS = [
    { r: 0.50, roll: -0.22, speed: 0.050 },
    { r: 0.76, roll: 0.16, speed: -0.034 },
    { r: 1.00, roll: -0.08, speed: 0.022 }
  ];
  // Decorative rings without systems.
  const RINGS = [
    { r: 0.26, roll: 0.3, dash: [2, 6] },
    { r: 0.88, roll: -0.22, dash: [2, 6] },
    { r: 1.12, roll: 0.12, dash: [2, 6] }
  ];

  // Seeded random so every visit looks the same.
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;

  const perOrbit = [0, 0, 0];
  SYSTEMS.forEach(s => { s.slot = perOrbit[s.orbit]++; });
  SYSTEMS.forEach((s, i) => {
    s.phase = (s.slot / perOrbit[s.orbit]) * Math.PI * 2 + s.orbit * 0.9;
    s.color = C[s.cat];
    s.ringed = i % 3 === 0;
    s.litv = 0;                       // 0..1, eased: how "open" the system's satellites are
    s.cloud = [];
    for (let k = 0; k < 9; k++) s.cloud.push({ a: rnd() * Math.PI * 2, r: 12 + Math.abs(gauss()) * 30, w: (rnd() - 0.5) * 0.5, z: 0.6 + rnd() * 1.0 });
    // satellites: tiny dots on short spokes around the planet
    const n = s.sub.length;
    s.sat = s.sub.map((label, k) => ({
      label,
      a0: (k / n) * Math.PI * 2 + rnd() * 0.5,
      r: 27 + rnd() * 14,
      w: (k % 2 ? -1 : 1) * (0.25 + rnd() * 0.35),
      size: 1.8 + rnd() * 1.6
    }));
    s.squash = 0.55 + rnd() * 0.15;   // how flat this system's satellite ellipse looks
    s.rot = (rnd() - 0.5) * 1.2;
  });
  const STARS = [];
  for (let k = 0; k < 140; k++) STARS.push({ x: rnd(), y: rnd(), r: rnd() < 0.85 ? 0.7 : 1.3, p: rnd() * 6.28 });

  // ---------------------------------------------------------------- state
  let W = 0, H = 0, dpr = 1, U = 1;
  let t0 = performance.now(), t = 0;
  let running = false, visible = true;
  let hover = -1, pinned = -1;        // pinned: a tapped system on touch screens
  let chipHover = -1;
  let drag = null;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  // the camera: yaw turns the plane around its axis, pitch tilts it toward or away from us
  const PITCH0 = 0.95;
  let yaw = 0, pitch = PITCH0, vyaw = 0;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const logoW = () => W * (W < 520 ? 0.44 : 0.38);     // the logo is ~40% of the galaxy's width (kept in sync with logo3d.js)

  // The PNG logo is only the fallback (while the 3D one loads, without WebGL, reduced motion).
  const logoImg = new Image();
  let logoReady = false;
  logoImg.onload = () => { logoReady = true; draw(); };
  logoImg.src = (lang === 'pt' ? '../' : '') + 'assets/img/project_exor_logo_1200.png';

  function resize() {
    const r = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    U = Math.min(W * 0.44, H * 0.74);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  // World -> screen. World: x right, y up, z toward the viewer, the orbit planes lie near y = 0.
  // Returns [sx, sy, depth01, perspective].
  function proj(x, y, z) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    const x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
    const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
    const f = 1 / (1 - z2 / (U * 3.4));
    return [W / 2 + x1 * f, H / 2 - y2 * f, clamp(z2 / (U * 2.2) + 0.5, 0, 1), f];
  }
  function orbitPt(o, ang) {
    const x = Math.cos(ang) * o.r * U, z = Math.sin(ang) * o.r * U;
    const c = Math.cos(o.roll), s = Math.sin(o.roll);
    return proj(x * c, x * s, z);
  }

  function ring(o, alpha, dash) {
    ctx.beginPath();
    for (let k = 0; k <= 96; k++) {
      const p = orbitPt(o, (k / 96) * Math.PI * 2);
      k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
    }
    ctx.strokeStyle = 'rgba(200, 255, 245,' + alpha + ')';
    ctx.lineWidth = 1;
    ctx.setLineDash(dash || []);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function positions() {
    const k = Math.min(W, 900) / 900;                    // smaller on phones
    return SYSTEMS.map(s => {
      const o = ORBITS[s.orbit];
      const p = orbitPt(o, s.phase + t * o.speed);
      p.push((0.72 + 0.38 * p[2]) * (0.7 + 0.3 * k) * p[3]);   // scale
      return p;
    });
  }

  const wrapPi = a => { a = (a + Math.PI) % (Math.PI * 2); if (a < 0) a += Math.PI * 2; return a - Math.PI; };

  // Where a satellite is: orbiting loosely, or fanned out evenly (and still) when its system is open.
  function satPos(s, q, k, x, y, sc) {
    const open = s.litv, n = s.sat.length;
    const free = q.a0 + t * q.w;
    const fixed = -Math.PI / 2 + ((k + 0.5) / n) * Math.PI * 2;
    const a = free + wrapPi(fixed - free) * open;
    const r = (q.r + (58 - q.r) * open) * sc;
    const sq = s.squash + (1 - s.squash) * open;
    const ex = Math.cos(a) * r, ey = Math.sin(a) * r * sq;
    const c = Math.cos(s.rot * (1 - open)), sn = Math.sin(s.rot * (1 - open));
    return [x + ex * c - ey * sn, y + ex * sn + ey * c, a];
  }

  function drawSystem(s, p, i) {
    const x = p[0], y = p[1], depth = p[2], sc = p[4];
    const lit = i === hover || i === pinned || i === chipHover;
    const a = 0.35 + 0.65 * depth;
    // particle cloud
    ctx.fillStyle = s.color;
    for (const q of s.cloud) {
      const ang = q.a + t * q.w;
      const px = x + Math.cos(ang) * q.r * sc, py = y + Math.sin(ang) * q.r * sc * 0.7;
      ctx.globalAlpha = a * 0.7 * Math.max(0, 1 - q.r / 50) * (1 - s.litv);
      ctx.fillRect(px, py, q.z * 1.3, q.z * 1.3);
    }
    // satellites: spokes, then dots
    const pts = s.sat.map((q, k) => satPos(s, q, k, x, y, sc));
    ctx.lineWidth = 1;
    ctx.strokeStyle = s.color;
    pts.forEach(pt => {
      ctx.globalAlpha = a * (0.28 + 0.4 * s.litv);
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(pt[0], pt[1]); ctx.stroke();
    });
    ctx.fillStyle = s.color;
    pts.forEach((pt, k) => {
      ctx.globalAlpha = a * (0.75 + 0.25 * s.litv);
      ctx.beginPath(); ctx.arc(pt[0], pt[1], (s.sat[k].size + 1.2 * s.litv) * Math.max(0.8, sc), 0, Math.PI * 2); ctx.fill();
    });
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

  // Labels of the open system, drawn on top of everything.
  function drawLabels(s, p) {
    if (s.litv < 0.35) return;
    const x = p[0], y = p[1], sc = p[4];
    const fs = Math.round(Math.max(10.5, 11.5 * Math.min(1, W / 520)));
    ctx.font = '600 ' + fs + 'px "IBM Plex Mono", Consolas, monospace';
    ctx.textBaseline = 'middle';
    const narrow = W < 520, padx = 5, h = fs + 7;
    const items = s.sat.map((q, k) => {
      const sp = satPos(s, q, k, x, y, sc), sx = sp[0], sy = sp[1], ang = sp[2];
      const c = Math.cos(ang), tw = ctx.measureText(q.label).width;
      let side = c > 0.3 ? 1 : (c < -0.3 ? -1 : 0);
      if (narrow) side = x > W / 2 ? -1 : 1;                       // phones: all labels on the roomier side
      if (side === 1 && sx + 9 + tw + padx * 2 > W - 4) side = -1;   // flip when it would run off the edge
      else if (side === -1 && sx - 9 - tw - padx * 2 < 4) side = 1;
      let lx = side === 1 ? sx + 9 : (side === -1 ? sx - 9 - tw - padx * 2 : sx - tw / 2 - padx);
      let ly = side === 0 ? (Math.sin(ang) < 0 ? sy - 10 - h : sy + 10) : sy - h / 2;
      lx = clamp(lx, 4, W - tw - padx * 2 - 4);
      return { q, tw, lx, ly };
    });
    // keep the labels from sitting on top of each other
    items.sort((p, r) => p.ly - r.ly);
    items.forEach((it, i) => {
      if (i) {
        const prev = items[i - 1];
        const clash = it.lx < prev.lx + prev.tw + padx * 2 && prev.lx < it.lx + it.tw + padx * 2;
        if (clash && it.ly < prev.ly + h + 3) it.ly = prev.ly + h + 3;
      }
      it.ly = clamp(it.ly, 4, H - h - 4);
    });
    items.forEach(it => {
      ctx.globalAlpha = s.litv;
      ctx.fillStyle = 'rgba(6,12,12,0.88)';
      ctx.strokeStyle = s.color + '99'; ctx.lineWidth = 1;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(it.lx, it.ly, it.tw + padx * 2, h, 5); else ctx.rect(it.lx, it.ly, it.tw + padx * 2, h);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#e2f3ef'; ctx.textAlign = 'left';
      ctx.fillText(it.q.label, it.lx + padx, it.ly + h / 2 + 0.5);
    });
    ctx.globalAlpha = 1;
  }

  function drawLogo() {
    if (hero.classList.contains('logo3d-live') || !logoReady) return;
    const lw = logoW(), lh = lw * logoImg.naturalHeight / logoImg.naturalWidth;
    const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, lw * 0.8);
    g.addColorStop(0, 'rgba(20,184,166,0.22)'); g.addColorStop(0.45, 'rgba(20,184,166,0.06)'); g.addColorStop(1, 'rgba(20,184,166,0)');
    ctx.fillStyle = g; ctx.fillRect(W / 2 - lw, H / 2 - lw, lw * 2, lw * 2);
    ctx.drawImage(logoImg, W / 2 - lw / 2, H / 2 - lh / 2, lw, lh);
  }

  let lastPos = [];
  hero.galaxyScreenPositions = () => lastPos.map(p => [p[0], p[1]]);   // for tests and screenshots
  function draw() {
    if (!W) return;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#cfe9e4';
    for (const s of STARS) {
      ctx.globalAlpha = 0.18 + 0.18 * Math.sin(s.p + t * 0.6);
      ctx.fillRect(s.x * W, s.y * H, s.r, s.r);
    }
    ctx.globalAlpha = 1;
    RINGS.forEach(o => ring(o, 0.05, o.dash));
    ORBITS.forEach(o => ring(o, 0.10));
    // ease the satellites open / closed
    SYSTEMS.forEach((s, i) => {
      const target = (i === hover || i === pinned || i === chipHover) ? 1 : 0;
      s.litv = reduce.matches ? target : s.litv + (target - s.litv) * 0.18;
      if (Math.abs(s.litv - target) < 0.01) s.litv = target;
    });
    const pos = positions();
    lastPos = pos;
    const order = pos.map((p, i) => i).sort((a, b) => pos[a][2] - pos[b][2]);
    order.forEach(i => { if (pos[i][2] < 0.5) drawSystem(SYSTEMS[i], pos[i], i); });
    drawLogo();
    order.forEach(i => { if (pos[i][2] >= 0.5) drawSystem(SYSTEMS[i], pos[i], i); });
    order.forEach(i => drawLabels(SYSTEMS[i], pos[i]));
    placeTip();
  }

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - t0) / 1000);
    t0 = now;
    // the galaxy holds still while a system is pointed at, so it can be clicked
    if (hover < 0 && pinned < 0 && chipHover < 0 && !drag) t += dt;
    if (!drag && Math.abs(vyaw) > 0.0005) { yaw += vyaw * dt * 60; vyaw *= 0.93; }
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
    if (i < 0 || !lastPos[i] || drag) { tip.hidden = true; return; }
    const s = SYSTEMS[i], x = lastPos[i][0], y = lastPos[i][1], sc = lastPos[i][4];
    const L = s[lang];
    const link = s.href ? '' : (lang === 'pt' ? '<em>Ainda sem seção no site.</em>' : '<em>No section on the site yet.</em>');
    const tap = (pinned === i && s.href) ? (lang === 'pt' ? '<span class="galaxy-tip-go">Toque de novo para abrir →</span>' : '<span class="galaxy-tip-go">Tap again to open →</span>') : '';
    const html = '<strong style="color:' + s.color + '">' + L[0] + '</strong><span>' + L[1] + '</span>' + link + tap;
    if (tip.dataset.i !== String(i) + tap) { tip.innerHTML = html; tip.dataset.i = String(i) + tap; }
    tip.hidden = false;
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    const gap = 78 * sc;                       // clear of the open satellites and their labels
    let lx = x - tw / 2, ly = y - th - gap;
    if (ly < 6) ly = y + gap;
    if (ly + th > H - 6) ly = H - th - 6;
    lx = Math.max(6, Math.min(W - tw - 6, lx));
    tip.style.transform = 'translate(' + Math.round(lx) + 'px,' + Math.round(ly) + 'px)';
  }

  function pick(ev) {
    const r = canvas.getBoundingClientRect();
    const mx = ev.clientX - r.left, my = ev.clientY - r.top;
    let best = -1, bd = 1e9;
    lastPos.forEach((p, i) => {
      const d = Math.hypot(p[0] - mx, p[1] - my);
      const lim = (ev.pointerType === 'touch' ? 30 : 22) * p[4];
      if (d < lim && d < bd) { bd = d; best = i; }
    });
    return best;
  }
  function inLogo(ev) {
    const r = canvas.getBoundingClientRect();
    const lw = logoW(), lh = lw * 620 / 1810;
    return Math.abs(ev.clientX - r.left - W / 2) < lw * 0.55 && Math.abs(ev.clientY - r.top - H / 2) < Math.max(lh * 0.8, 40);
  }

  function go(i) {
    const s = SYSTEMS[i];
    if (!s || !s.href) return;
    window.location.href = s.href[lang === 'pt' ? 1 : 0];
  }

  // ---------------------------------------------------------------- pointer: hover, click, drag
  // A press that moves more than a few pixels is a drag (never a click). Pressing a planet or empty
  // space turns the galaxy; pressing on the logo turns the logo (logo3d.js listens to "logodrag").
  const THRESH = 6;
  canvas.addEventListener('pointerdown', ev => {
    if (ev.pointerType === 'mouse' && ev.button !== 0) return;
    const hit = pick(ev);
    drag = { id: ev.pointerId, x0: ev.clientX, y0: ev.clientY, lx: ev.clientX, ly: ev.clientY, moved: false, hit: hit, mode: hit < 0 && inLogo(ev) ? 'logo' : 'galaxy', touch: ev.pointerType === 'touch' };
    try { canvas.setPointerCapture(ev.pointerId); } catch (e) {}
  });
  canvas.addEventListener('pointermove', ev => {
    if (drag && ev.pointerId === drag.id) {
      if (!drag.moved && Math.hypot(ev.clientX - drag.x0, ev.clientY - drag.y0) > THRESH) {
        drag.moved = true; hover = -1; canvas.style.cursor = 'grabbing';
      }
      if (drag.moved) {
        const dx = ev.clientX - drag.lx, dy = ev.clientY - drag.ly;
        if (drag.mode === 'logo') hero.dispatchEvent(new CustomEvent('logodrag', { detail: { dx: dx, dy: dy, phase: 'move' } }));
        else {
          yaw += dx * 0.008; vyaw = dx * 0.008 / 3;
          if (!drag.touch) pitch = clamp(pitch + dy * 0.006, 0.3, 1.45);
        }
        if (reduce.matches || !running) draw();
      }
      drag.lx = ev.clientX; drag.ly = ev.clientY;
      return;
    }
    if (ev.pointerType === 'touch') return;
    const i = pick(ev);
    if (i !== hover) { hover = i; canvas.style.cursor = i >= 0 && SYSTEMS[i].href ? 'pointer' : (i >= 0 ? 'default' : 'grab'); draw(); }
  });
  function endPress(ev, cancelled) {
    if (!drag || ev.pointerId !== drag.id) return;
    const d = drag; drag = null;
    canvas.style.cursor = 'grab';
    if (d.mode === 'logo' && d.moved) hero.dispatchEvent(new CustomEvent('logodrag', { detail: { dx: 0, dy: 0, phase: 'end' } }));
    if (d.moved || cancelled) { if (reduce.matches || !running) draw(); return; }
    // a plain click or tap
    const i = pick(ev);
    if (ev.pointerType === 'touch') {
      if (i >= 0 && i === pinned) go(i);
      else { pinned = i; draw(); }
      return;
    }
    if (i >= 0) go(i);
  }
  canvas.addEventListener('pointerup', ev => endPress(ev, false));
  canvas.addEventListener('pointercancel', ev => endPress(ev, true));
  canvas.addEventListener('pointerleave', () => { if (hover >= 0 && !drag) { hover = -1; draw(); } });
  canvas.style.cursor = 'grab';

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

  // Hint text, with "tap" instead of "hover" on touch screens.
  const hint = hero.querySelector('.galaxy-hint');
  if (hint) {
    const touch = window.matchMedia('(hover: none)').matches;
    hint.textContent = lang === 'pt'
      ? (touch ? 'Arraste para girar · toque num sistema' : 'Arraste para girar · passe o mouse num sistema · clique para visitar')
      : (touch ? 'Drag to rotate · tap a system' : 'Drag to rotate · hover a system · click to visit');
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
  hero.addEventListener('logo3d-ready', draw);

  resize();
  start();
})();

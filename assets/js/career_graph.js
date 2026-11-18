/* ==========================================================================
   EXORDIUM // CAREER TREES (shared by careers.html and pt/profissoes.html)
   Each area's board draws its posts as a real tree: rows are the rungs of the
   ladder, columns are the departments, and SVG lines show who is promoted to
   what, the choices, the degrees and the moves between departments.
   The posts' content stays in tree.js / tree_en.js; this file only knows the shape.
   ========================================================================== */
const CareerGraph = (function () {
  'use strict';

  // Where each post sits: [row, column, span]. Columns are departments.
  const LAYOUT = {
    office: { cols: 2, heads: [['Technical & Ombudsman', 'Técnica e Ouvidoria'], ['Commercial & Sales', 'Comercial e Vendas']], at: {
      assistant: [0, 0, 2],
      service_desk: [1, 0], inside_sales: [1, 1],
      quality_supervisor: [2, 0], external_sales: [2, 1],
      analyst: [3, 0], sales_manager: [3, 1],
      cfo: [4, 0], vice_director: [4, 1],
      ceo: [5, 0, 2] } },
    pharmacy: { cols: 2, heads: [['Store management', 'Gerência da loja'], ['Clinical (degree)', 'Clínica (diploma)']], at: {
      attendant_1: [0, 0, 2], attendant_2: [1, 0, 2], pharmacy_supervisor: [2, 0, 2],
      pharmacy_manager: [3, 0], pharmacist: [3, 1],
      manager_pharmacist: [4, 1],
      regional_manager: [5, 0, 2] } },
    restaurant: { cols: 2, heads: [['Front of house (dining room)', 'Salão'], ['Back of house (kitchen)', 'Cozinha']], at: {
      dining_helper: [0, 0], kitchen_helper: [0, 1],
      waiter: [1, 0], cook: [1, 1],
      restaurant_manager: [2, 0], chef: [2, 1],
      franchise_manager: [3, 0, 2] } },
    freelance: { cols: 3, heads: null, at: { courier: [0, 0], driver: [0, 1], cleaner_commercial: [0, 2] } },
    supermarket: { cols: 1, heads: null, at: { stock_clerk: [0, 0] } }
  };

  // Who goes where. kind: auto (promotion), choice (the player picks one branch),
  // degree (needs a university degree), cross (a move to another department),
  // merit (a harder, slower promotion).
  const EDGES = [
    ['assistant', 'service_desk', 'choice'], ['assistant', 'inside_sales', 'choice'],
    ['service_desk', 'quality_supervisor', 'auto'], ['quality_supervisor', 'analyst', 'auto'],
    ['analyst', 'cfo', 'auto'], ['cfo', 'ceo', 'merit', ['4× performance', '4× performance']],
    ['inside_sales', 'external_sales', 'choice'], ['inside_sales', 'sales_manager', 'choice'],
    ['external_sales', 'sales_manager', 'choice', ['+20% for life', '+20% vitalício']],
    ['external_sales', 'vice_director', 'choice', ['springboard', 'atalho']],
    ['sales_manager', 'vice_director', 'auto'], ['vice_director', 'ceo', 'auto', ['fastest', 'mais rápido']],

    ['attendant_1', 'attendant_2', 'auto'], ['attendant_2', 'pharmacy_supervisor', 'auto'],
    ['pharmacy_supervisor', 'pharmacy_manager', 'choice'],
    ['pharmacy_supervisor', 'pharmacist', 'degree', ['pharmacy degree', 'diploma de Farmácia']],
    ['pharmacy_manager', 'manager_pharmacist', 'degree', ['+ degree', '+ diploma']],
    ['pharmacist', 'manager_pharmacist', 'auto', ['promoted to manager', 'promovido a gerente']],
    ['pharmacy_manager', 'regional_manager', 'auto'], ['manager_pharmacist', 'regional_manager', 'auto'],

    ['dining_helper', 'waiter', 'auto'], ['kitchen_helper', 'cook', 'choice'],
    ['kitchen_helper', 'waiter', 'cross', ['to the dining room', 'para o salão']],
    ['waiter', 'restaurant_manager', 'auto'], ['cook', 'chef', 'degree', ['gastronomy degree', 'diploma de Gastronomia']],
    ['restaurant_manager', 'franchise_manager', 'auto'], ['chef', 'franchise_manager', 'choice', ['buys the business', 'compra o negócio']]
  ];

  const NOTES = {
    freelance: ['No ladder here: each gig is its own career. You grow by buying a better bike or car, and a 5-star streak opens the rich houses.',
                'Aqui não há escada: cada bico é uma carreira própria. Você cresce comprando bike ou carro melhores, e uma sequência de 5 estrelas abre as casas ricas.'],
    supermarket: ['One post, three branches: an early-morning job that leaves the afternoon free.',
                  'Um cargo, três filiais: um trabalho de madrugada que deixa a tarde livre.']
  };
  const NO_DOWN = { // "waiters never cook": a forbidden move, drawn crossed out
    restaurant: [['waiter', 'cook', ['never', 'nunca']]]
  };

  const SVGNS = 'http://www.w3.org/2000/svg';
  let uid = 0;

  // board: the area's board element; sec: its CAREER_SECTORS entry;
  // jobs: the posts visible under the current filter; makeNode(job) -> the post's card.
  function render(board, sec, jobs, makeNode, lang) {
    const L = lang === 'pt' ? 1 : 0;
    const lay = LAYOUT[sec.id];
    const wrap = document.createElement('div');
    wrap.className = 'career-graph cols-' + (lay ? lay.cols : 2);
    if (!lay) { jobs.forEach(j => wrap.appendChild(makeNode(j))); board.appendChild(wrap); return; }

    if (lay.heads && lay.cols > 1) {
      const heads = document.createElement('div');
      heads.className = 'career-graph-heads';
      lay.heads.forEach(h => {
        const d = document.createElement('div');
        d.textContent = h[L];
        heads.appendChild(d);
      });
      wrap.appendChild(heads);
    }

    const grid = document.createElement('div');
    grid.className = 'career-graph-grid';
    grid.style.gridTemplateColumns = 'repeat(' + lay.cols + ', minmax(0, 1fr))';
    // Rows that have a visible post, renumbered so a filter leaves no holes.
    const rows = [...new Set(jobs.map(j => (lay.at[j.id] || [99])[0]))].sort((a, b) => a - b);
    const byId = {};
    jobs.forEach(j => {
      const p = lay.at[j.id] || [99, 0, 1];
      const cell = document.createElement('div');
      cell.className = 'career-graph-cell' + ((p[2] || 1) > 1 ? ' is-span' : '');
      cell.style.gridRow = String(rows.indexOf(p[0]) + 1);
      cell.style.gridColumn = (p[1] + 1) + ' / span ' + (p[2] || 1);
      const card = makeNode(j);
      cell.appendChild(card);
      grid.appendChild(cell);
      byId[j.id] = card;
    });
    wrap.appendChild(grid);

    if (NOTES[sec.id]) {
      const n = document.createElement('p');
      n.className = 'career-graph-note';
      n.textContent = NOTES[sec.id][L];
      wrap.appendChild(n);
    }
    board.appendChild(wrap);

    // The lines are drawn once the cards have their sizes, and again on every resize.
    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('class', 'career-graph-lines');
    svg.setAttribute('aria-hidden', 'true');
    grid.insertBefore(svg, grid.firstChild);
    const draw = () => drawLines(svg, grid, byId, sec.id, L);
    requestAnimationFrame(draw);
    if ('ResizeObserver' in window) new ResizeObserver(draw).observe(grid);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  }

  function drawLines(svg, grid, byId, secId, L) {
    const g = grid.getBoundingClientRect();
    if (!g.width) return;
    svg.setAttribute('width', g.width); svg.setAttribute('height', g.height);
    svg.setAttribute('viewBox', '0 0 ' + g.width + ' ' + g.height);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const id = 'cg' + (++uid);
    const defs = document.createElementNS(SVGNS, 'defs');
    ['auto', 'choice', 'degree', 'cross', 'merit'].forEach(k => {
      const m = document.createElementNS(SVGNS, 'marker');
      m.setAttribute('id', id + k); m.setAttribute('viewBox', '0 0 10 10');
      m.setAttribute('refX', '9'); m.setAttribute('refY', '5');
      m.setAttribute('markerWidth', '7'); m.setAttribute('markerHeight', '7');
      m.setAttribute('orient', 'auto-start-reverse');
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('d', 'M0,0 L10,5 L0,10 z');
      p.setAttribute('class', 'cg-head cg-' + k);
      m.appendChild(p); defs.appendChild(m);
    });
    svg.appendChild(defs);

    const box = el => {
      const r = el.getBoundingClientRect();
      return { l: r.left - g.left, r: r.right - g.left, t: r.top - g.top, b: r.bottom - g.top, cx: (r.left + r.right) / 2 - g.left, cy: (r.top + r.bottom) / 2 - g.top };
    };
    const labels = [];
    const line = (d, kind, text, lx, ly) => {
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('d', d);
      p.setAttribute('class', 'cg-line cg-' + kind);
      if (kind !== 'forbid') p.setAttribute('marker-end', 'url(#' + id + kind + ')');
      svg.appendChild(p);
      if (text) labels.push([text, lx, ly, kind]);
    };

    let sideL = 0, sideR = 0;
    EDGES.forEach(([a, b, kind, text]) => {
      if (!byId[a] || !byId[b]) return;
      const A = box(byId[a]), B = box(byId[b]);
      const label = text ? text[L] : '';
      if (B.t - A.b > 4) {
        // Does a card sit in the straight way down? Then go around it, on the outer side.
        const blocked = Object.values(byId).some(el => {
          if (el === byId[a] || el === byId[b]) return false;
          const C = box(el);
          const x = (A.cx + B.cx) / 2;
          return C.t > A.b && C.b < B.t && C.l < x && C.r > x && Math.abs(A.cx - B.cx) < 40;
        });
        if (blocked) {
          const right = A.cx > g.width / 2 || Math.abs(A.cx - g.width / 2) < 2;
          const lane = right ? sideR++ : sideL++;          // two detours on one side don't overlap
          const side = right ? Math.max(A.r, B.r) + 12 + lane * 12 : Math.min(A.l, B.l) - 12 - lane * 12;
          const ax = right ? A.r : A.l, bx = right ? B.r : B.l;
          const d = 'M' + ax + ',' + (A.cy) + ' C' + side + ',' + A.cy + ' ' + side + ',' + A.cy + ' ' + side + ',' + (A.cy + 30) +
                    ' L' + side + ',' + (B.cy - 30) + ' C' + side + ',' + B.cy + ' ' + side + ',' + B.cy + ' ' + (bx + (right ? 3 : -3)) + ',' + B.cy;
          line(d, kind, label, side, (A.cy + B.cy) / 2);
          return;
        }
        // From the bottom of A to the top of B; leave A at the side B lies on.
        const sx = A.cx + Math.max(-A.r + A.cx + 24, Math.min(A.r - A.cx - 24, (B.cx - A.cx) * 0.35));
        const ex = B.cx + Math.max(-B.r + B.cx + 24, Math.min(B.r - B.cx - 24, (A.cx - B.cx) * 0.25));
        const y1 = A.b, y2 = B.t - 3, my = (y1 + y2) / 2;
        line('M' + sx + ',' + y1 + ' C' + sx + ',' + my + ' ' + ex + ',' + my + ' ' + ex + ',' + y2, kind, label, (sx + ex) / 2, my);
      } else {
        // Same row: a short line between the cards' sides.
        const lr = A.cx < B.cx;
        const x1 = lr ? A.r : A.l, x2 = lr ? B.l - 3 : B.r + 3;
        line('M' + x1 + ',' + A.cy + ' L' + x2 + ',' + B.cy, kind, label, (x1 + x2) / 2, A.cy);
      }
    });

    (NO_DOWN[secId] || []).forEach(([a, b, text]) => {
      if (!byId[a] || !byId[b]) return;
      const A = box(byId[a]), B = box(byId[b]);
      const x1 = A.r, x2 = B.l, y = (A.cy + B.cy) / 2;
      if (x2 - x1 < 30) return;
      line('M' + x1 + ',' + y + ' L' + x2 + ',' + y, 'forbid', '✕ ' + text[L], (x1 + x2) / 2, y);
    });

    labels.forEach(([text, x, y, kind]) => {
      const t = document.createElementNS(SVGNS, 'text');
      t.setAttribute('x', x); t.setAttribute('y', y);
      t.setAttribute('class', 'cg-label cg-' + kind);
      t.setAttribute('text-anchor', 'middle'); t.setAttribute('dominant-baseline', 'middle');
      t.textContent = text;
      svg.appendChild(t);
      const bb = t.getBBox();
      const r = document.createElementNS(SVGNS, 'rect');
      r.setAttribute('x', bb.x - 5); r.setAttribute('y', bb.y - 2);
      r.setAttribute('width', bb.width + 10); r.setAttribute('height', bb.height + 4);
      r.setAttribute('rx', 4);
      r.setAttribute('class', 'cg-label-bg cg-' + kind);
      svg.insertBefore(r, t);
    });
  }

  // The legend of the lines, under the cue legend.
  function legend(lang) {
    const L = lang === 'pt' ? 1 : 0;
    const items = [
      ['auto', ['Promotion', 'Promoção']],
      ['choice', ['A choice of branch', 'Escolha de ramo']],
      ['degree', ['Needs a degree', 'Exige diploma']],
      ['cross', ['Move to another department', 'Mudança de departamento']],
      ['merit', ['Harder promotion', 'Promoção mais difícil']],
      ['forbid', ['Never allowed', 'Nunca permitido']]
    ];
    const d = document.createElement('div');
    d.className = 'career-graph-legend';
    d.innerHTML = items.map(([k, t]) =>
      '<span class="cg-key"><svg width="34" height="10" aria-hidden="true"><path class="cg-line cg-' + k + '" d="M1,5 L33,5"/></svg>' + t[L] + '</span>').join('') +
      '<span class="cg-key cg-key-hire">🚪 ' + (L ? 'Contratação direta: vindo de outra empresa do ramo' : 'Direct hire: can come straight from another company in the field') + '</span>';
    return d;
  }

  // Put the lines' legend under the cues' legend, in the page's language.
  document.addEventListener('DOMContentLoaded', () => {
    const cues = document.querySelector('.visual-cue-legend');
    if (cues) cues.insertAdjacentElement('afterend', legend(document.documentElement.lang === 'pt-BR' || document.documentElement.lang === 'pt' ? 'pt' : 'en'));
  });

  return { render, legend };
})();

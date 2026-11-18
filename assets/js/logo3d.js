/* ==========================================================================
   EXORDIUM // live 3D logo for the galaxy header (home pages)
   Renders assets/models/project_exor_3d.glb with three.js (vendored, r160) in a
   transparent canvas under the galaxy canvas. The PNG painted by galaxy.js stays
   as the fallback: it is used while the model loads, when WebGL or modules fail,
   and for visitors who prefer reduced motion. Relative paths, so it works from a
   local server and from GitHub Pages (needs http(s); from file:// the PNG stays).
   ========================================================================== */
const hero = document.querySelector('.galaxy-hero');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

async function start() {
  if (!hero || reduce.matches) return;
  const base = new URL('./', import.meta.url);               // .../assets/js/
  const THREE = await import(new URL('vendor/three/three.module.js', base));
  const { GLTFLoader } = await import(new URL('vendor/three/GLTFLoader.js', base));
  const { RoomEnvironment } = await import(new URL('vendor/three/RoomEnvironment.js', base));

  const canvas = document.createElement('canvas');
  canvas.className = 'galaxy-logo3d';
  canvas.setAttribute('aria-hidden', 'true');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch (e) { return; }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
  scene.environmentIntensity = 1.0;
  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(2, 3, 4); scene.add(key);
  const rim = new THREE.PointLight(0x22d3ee, 14, 12); rim.position.set(-3, -0.5, 1.5); scene.add(rim);

  const camera = new THREE.PerspectiveCamera(22, 1810 / 620, 0.1, 100);

  const gltf = await new GLTFLoader().loadAsync(new URL('../models/project_exor_3d.glb', base).href);
  const model = gltf.scene;
  const pivot = new THREE.Group(); pivot.add(model); scene.add(pivot);
  // centre and fit the model
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
  model.position.sub(ctr);
  const dist = (Math.max(size.x, size.y * 1810 / 620) * 1.12 / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / (1810 / 620) * (1810 / 620);
  camera.position.set(0, 0, size.z / 2 + dist);
  camera.lookAt(0, 0, 0);

  // placement mirrors galaxy.js's drawLogo() so the 3D mark sits where the PNG sat
  function layout() {
    const r = hero.getBoundingClientRect(); const W = r.width, H = r.height;
    const k = Math.min(W / 760, 1.25), s = Math.max(28, 52 * k);
    const lw = Math.min(W * 0.86, s * 8.2), lh = lw * 620 / 1810;
    const pad = 1.18;
    canvas.style.width = lw * pad + 'px'; canvas.style.height = lh * pad + 'px';
    canvas.style.left = (W - lw * pad) / 2 + 'px'; canvas.style.top = (H - lh * pad) / 2 + 'px';
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(lw * pad, lh * pad, false);
    camera.aspect = 1810 / 620; camera.updateProjectionMatrix();
    camera.zoom = 1 / pad; camera.updateProjectionMatrix();
    renderer.render(scene, camera);   // setSize clears the canvas
  }
  hero.insertBefore(canvas, hero.firstChild);
  layout();
  if ('ResizeObserver' in window) new ResizeObserver(layout).observe(hero);

  // gentle sway + mouse parallax, never a full spin
  let mx = 0, my = 0, tx = 0, ty = 0;
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - 0.5) * 2; ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
  });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  let visible = true, running = false, t = 0, last = 0;
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; kick(); }).observe(hero);
  document.addEventListener('visibilitychange', kick);
  function frame(now) {
    running = false;
    if (!visible || document.hidden || reduce.matches) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt;
    mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
    pivot.rotation.y = Math.sin(t * 0.5) * 0.16 + mx * 0.22;
    pivot.rotation.x = Math.sin(t * 0.37 + 1) * 0.04 + my * 0.10;
    rim.position.x = -3 + Math.sin(t * 0.6) * 1.5;
    renderer.render(scene, camera);
    running = true; requestAnimationFrame(frame);
  }
  function kick() { if (!running && visible && !document.hidden) { last = performance.now(); requestAnimationFrame(frame); } }
  renderer.render(scene, camera);
  hero.classList.add('logo3d-live');       // galaxy.js stops painting the PNG
  kick();
  window.__logo3d = { pivot, renderer, scene, camera };
  reduce.addEventListener && reduce.addEventListener('change', () => { if (reduce.matches) { hero.classList.remove('logo3d-live'); canvas.remove(); running = false; } });
}
start().catch(e => { console.warn('3D logo unavailable, keeping the PNG:', e); hero && hero.classList.remove('logo3d-live'); });

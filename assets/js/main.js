/* ==========================================================================
   EXORDIUM // MAIN SCRIPT: Áudio Sintético Diegético, Modais e Navegação
   ========================================================================== */

// --- 1. SÍNTESE DE ÁUDIO DIEGÉTICO VIA WEB AUDIO API ---
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

const SFX = {
  click: function() {
    if (!soundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {}
  },
  
  select: function() {
    if (!soundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1040, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
  },
  
  alert: function() {
    if (!soundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.setValueAtTime(240, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) {}
  },

  success: function() {
    if (!soundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.06, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.1);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.1);
      });
    } catch(e) {}
  }
};

// --- 2. CONTROLE DO BOTÃO DE SOM ---
document.addEventListener('DOMContentLoaded', () => {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle('active', soundEnabled);
      soundBtn.innerHTML = soundEnabled ? '🔊 SFX ON' : '🔇 SFX OFF';
      if (soundEnabled) SFX.select();
    });
  }

  // Interatividade geral com som
  document.querySelectorAll('a, button, .tree-node').forEach(el => {
    el.addEventListener('click', () => {
      initAudio();
      SFX.click();
    });
  });

    // --- 3. MODAL LIGHTBOX PARA TODAS AS IMAGENS ---
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalCloseBtn');
  const zoomBtn = document.getElementById('zoomToggleBtn');

  function openModal(src, captionText) {
    if (!modalOverlay || !modalImg) return;
    modalImg.src = src;
    modalImg.classList.remove('is-original-size');
    if (zoomBtn) zoomBtn.textContent = '🔍 Tamanho 100%';
    if (modalCaption) modalCaption.textContent = captionText || 'Registro Canônico de EXORDIUM';
    modalOverlay.classList.add('open');
    if (typeof SFX !== 'undefined') SFX.select();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    if (typeof SFX !== 'undefined') SFX.click();
  }

  function toggleZoom() {
    if (!modalImg) return;
    modalImg.classList.toggle('is-original-size');
    if (zoomBtn) {
      zoomBtn.textContent = modalImg.classList.contains('is-original-size') ? '📐 Ajustar à Tela' : '🔍 Tamanho 100%';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (zoomBtn) zoomBtn.addEventListener('click', toggleZoom);
  if (modalImg) modalImg.addEventListener('click', toggleZoom);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // Torna TODAS as imagens clicáveis em todas as páginas
  function bindClickableImages() {
    const clickableSelectors = [
      '.card-img-wrap',
      '.dialog-media',
      '.quick-bite-thumb',
      '.card img',
      '.panel-stat-card img',
      '.dialog-avatar img'
    ];
    document.querySelectorAll(clickableSelectors.join(', ')).forEach(el => {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', (e) => {
        const img = el.tagName === 'IMG' ? el : el.querySelector('img');
        if (!img || !img.src) return;
        const caption = el.querySelector('.media-caption')?.textContent 
          || el.closest('.card')?.querySelector('h3, h4')?.textContent 
          || img.alt 
          || 'Registro Canônico';
        openModal(img.src, caption);
        e.stopPropagation();
      });
    });
  }
  bindClickableImages();
});


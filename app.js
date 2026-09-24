/**
 * MEMERIXU - Single Page Application
 * Dark Mode Web Experience - Subtember Edition
 * Community Meme Vault, Video Context Player & Player Profile Card
 */

/* ==========================================================================
   CONSTANTS & MEDIA ASSETS CONFIGURATION
   ========================================================================== */
const MEMES_DATA = [
  {
    id: 0,
    author: 'ErreDeRamon',
    title: 'Top Donadores & La Comunidad es Familia',
    subtitle: 'Clip en directo de Fortnite & Subtember',
    image: 'assets/memes/ErreDeRamon.webp',
    fallbackImage: 'Memes Imagenes/ErreDeRamon.webp',
    downloadName: 'Meme_ErreDeRamon.webp',
    hasVideo: true,
    videoSrc: 'assets/contexto/Contexto ErredeRamon.mp4',
    videoFallback: 'assets/contexto/Contexto ErredeRamon.mov',
    contextTitle: 'Vídeo Clip de Contexto // ErreDeRamon',
    contextDesc: 'Vídeo clip con el momento exacto y contexto de su meme en directo de Fortnite aportado por ErreDeRamon: "Top Donadores del Mes: 1. AbitoRawr (40 subs) 2. ErreDeRamon (35 subs)". ¡La comunidad es familia y a por el Subtember!',
    initialScore: 8.5
  },
  {
    id: 1,
    author: 'Jaratos',
    title: 'Hater en el Chat vs 3 Meses de Sub',
    subtitle: 'Doble personalidad en directo',
    image: 'assets/memes/Jaratos.webp',
    fallbackImage: 'Memes Imagenes/Jaratos.webp',
    downloadName: 'Meme_Jaratos.webp',
    hasVideo: false,
    contextTitle: 'Expediente de Lore // Jaratos',
    contextDesc: 'Meme presentado por Jaratos: "Arichu cuando Jaratos escribe un comentario hater en el chat 😡 vs Arichu cuando Jaratos se suscribe por 3 meses a su canal de Twitch 🥰". La dualidad clásica del chat de Arixu.',
    initialScore: 7.8
  },
  {
    id: 2,
    author: 'KidMaujMagno',
    title: '¡Bienvenido Piyuyin! (Cómo Ari ve el stream vs Subs)',
    subtitle: 'El sótano de los baneados del canal',
    image: 'assets/memes/KidMaujMagno.webp',
    fallbackImage: 'Memes Imagenes/KidMaujMagno.webp',
    downloadName: 'Meme_KidMaujMagno.webp',
    hasVideo: false,
    contextTitle: 'Expediente de Lore // KidMaujMagno',
    contextDesc: 'Meme de KidMaujMagno: El contraste brutal entre "Cómo Ari ve el directo" (fiesta, perrito feliz, confeti y colores) versus "Cómo los subs ven el directo" (Ari enfadada en modo tomate, perrito poseído y la lista de baneados del canal). ¡Piyuyin ya es parte del squad!',
    initialScore: 9.0
  },
  {
    id: 3,
    author: 'LivingBenidorm',
    title: 'Esperando a que ImArixu consiga el Unreal',
    subtitle: 'Tensión máxima en el rango de Fortnite',
    image: 'assets/memes/LivingBenidorm.webp',
    fallbackImage: 'Memes Imagenes/LivingBenidorm.webp',
    downloadName: 'Meme_LivingBenidorm.webp',
    hasVideo: false,
    contextTitle: 'Expediente de Lore // LivingBenidorm',
    contextDesc: 'Aporte de LivingBenidorm: Todo el chat de ImArixu (Rubén, Piyuyin, Mauj, Raquel, Noopo, Lucía...) rezando bajo las mantas con 97% en Campeón esperando la ansiada subida a Unreal: "¡Por favor ImArixu... el Unreal te espera!".',
    initialScore: 8.8
  },
  {
    id: 4,
    author: 'Neeusgoomisiiis',
    title: 'Los Mods del Sótano',
    subtitle: 'Programando y sobreviviendo a base de café',
    image: 'assets/memes/Neeusgoomisiiis.webp',
    fallbackImage: 'Memes Imagenes/Neeusgoomisiiis.webp',
    downloadName: 'Meme_Neeusgoomisiiis.webp',
    hasVideo: false,
    contextTitle: 'Expediente de Lore // Neeusgoomisiiis',
    contextDesc: 'Meme de Neeusgoomisiiis: Visión clandestina del búnker subterráneo de los moderadores: programando HTML, CSS, JavaScript y la web de Fortnite con tazas de "Café para sobrevivir" mientras vigilan 4 pantallas del stream sin descanso.',
    initialScore: 8.2
  },
  {
    id: 5,
    author: 'Raquelvete',
    title: 'Ponte a estudiar de una vez (#help)',
    subtitle: 'Prioridades claras con el directo de Ari',
    image: 'assets/memes/Raquelvete.webp',
    fallbackImage: 'Memes Imagenes/Raquelvete.webp',
    downloadName: 'Meme_Raquelvete.webp',
    hasVideo: false,
    contextTitle: 'Expediente de Lore // Raquelvete',
    contextDesc: 'Creación de Raquelvete: "Ponte a estudiar de una vez y deja de ver esas cosas que te machacan la cabeza... #help". El dilema universal de la comunidad cuando Ari inicia directo en Twitch y los exámenes están a la vuelta de la esquina.',
    initialScore: 8.4
  },
  {
    id: 6,
    author: 'Rubenillo',
    title: 'Stream Fail Bingo // ¡A por todos!',
    subtitle: 'El cartón definitivo de los fails en directo',
    image: 'assets/memes/Rubenillo.png',
    fallbackImage: 'Memes Imagenes/Rubenillo.png',
    downloadName: 'Meme_Rubenillo.png',
    hasVideo: false,
    contextTitle: 'Expediente de Lore // Rubenillo',
    contextDesc: 'Expediente de Rubenillo: Bingo interactivo con todas las situaciones clásicas de los directos de Ari: armas invisibles, muertes de caída, raids a canales rusos, quedarse muteada, apagón de bluetooth, donaciones troll y cancelación del código ARIXU. ¡Línea y Bingo!',
    initialScore: 9.3
  },
  {
    id: 7,
    author: 'Sito',
    title: 'Ari y el Chat Tranquilos vs Piyu y su Bocina',
    subtitle: 'Susto legendario en directo (Undertaker)',
    image: 'assets/memes/Sito.webp',
    fallbackImage: 'Memes Imagenes/Sito.webp',
    downloadName: 'Meme_Sito.webp',
    hasVideo: false,
    contextTitle: 'Expediente de Lore // Sito',
    contextDesc: 'Meme de Sito: "Ari y el chat tranquilamente" representado por AJ Styles sonriente, mientras detrás acecha El Enterrador (The Undertaker) con la etiqueta "Piyu y su bocina" a punto de romper los cascos de toda la audiencia.',
    initialScore: 8.6
  },
  {
    id: 8,
    author: 'UsuarioX',
    title: 'Hueco Libre // Slot de la Comunidad #09',
    subtitle: 'Espacio disponible para un nuevo participante',
    image: 'assets/memes/placeholder_usuariox.svg',
    fallbackImage: 'Memes Imagenes/placeholder_usuariox.svg',
    downloadName: 'Hueco_Libre_UsuarioX.svg',
    hasVideo: false,
    contextTitle: 'Expediente Disponible // UsuarioX',
    contextDesc: 'Este hueco (#09) está actualmente libre y reservado a la espera de un nuevo participante o meme de la comunidad de Arixu.',
    initialScore: 6.0
  }
];

/* ==========================================================================
   APP CONTROLLER INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  // Vault & Grid Elements
  const revealGate = document.getElementById('reveal-gate');
  const revealMemesBtn = document.getElementById('reveal-memes-btn');
  const quickRevealBtn = document.getElementById('quick-reveal-btn');
  const vaultCapsule = document.getElementById('vault-capsule');
  const vaultSecurityStatus = document.getElementById('vault-security-status');
  const padlockShackle = document.getElementById('padlock-shackle');
  const boxesGrid = document.getElementById('boxes-grid');

  // Navigation & Toast Elements
  const headerNavLinks = document.getElementById('header-nav-links');
  const tabMemeBtn = document.getElementById('tab-meme-btn');
  const brandBadge = document.getElementById('brand-badge');
  const toastContainer = document.getElementById('toast-container');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxImg = document.getElementById('lightbox-img');
  const lbAmbientBg = document.getElementById('lb-ambient-bg');
  const lbTitle = document.getElementById('lb-title');
  const lbSubtitle = document.getElementById('lb-subtitle');
  const lbCounter = document.getElementById('lb-counter');
  const lbAuthor = document.getElementById('lb-author');
  const lbDownload = document.getElementById('lb-download');
  const lbCloseBtn = document.getElementById('lb-close');
  const lbBottomClose = document.getElementById('lb-bottom-close');
  const lbPrevBtn = document.getElementById('lb-prev');
  const lbNextBtn = document.getElementById('lb-next');
  const lbZoomIn = document.getElementById('lb-zoom-in');
  const lbZoomOut = document.getElementById('lb-zoom-out');
  const lbZoomReset = document.getElementById('lb-zoom-reset');

  // Context Modal Elements
  const contextModal = document.getElementById('context-modal');
  const contextBackdrop = document.getElementById('context-backdrop');
  const contextCloseBtn = document.getElementById('context-close-btn');
  const contextModalTitle = document.getElementById('context-modal-title');
  const contextChipText = document.getElementById('context-chip-text');
  const contextModalBody = document.getElementById('context-modal-body');

  // Player Profile Card Elements
  const userProfileBtn = document.getElementById('user-profile-btn');
  const profileCardBackdrop = document.getElementById('profile-card-backdrop');
  const playerProfileCard = document.getElementById('player-profile-card');
  const btnCloseProfile = document.getElementById('btn-close-profile');
  const tabBtnAbilities = document.getElementById('tab-btn-abilities');
  const tabBtnCombat = document.getElementById('tab-btn-combat');
  const paneAbilities = document.getElementById('pane-abilities');
  const paneCombat = document.getElementById('pane-combat');
  const btnCopyCreatorCode = document.getElementById('btn-copy-creator-code');
  const btnFooterCopyCode = document.getElementById('btn-footer-copy-code');
  const creatorCodeVal = document.getElementById('creator-code-val');

  // State
  let isRevealed = false;
  let currentZoom = 1;
  let currentMemeIndex = 0;

  /* ==========================================================================
     1. CANVAS DYNAMIC BACKGROUND (Notes, Waves, Cyber/Sci-Fi Particles)
     ========================================================================== */
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  const musicalSymbols = ['♪', '♫', '♬', '♩', '𝄞', '⚡', '★', '🟣'];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class MusicalParticle {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height;
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 20 + Math.random() * 50;
      this.symbol = musicalSymbols[Math.floor(Math.random() * musicalSymbols.length)];
      this.size = Math.random() * 18 + 12;
      this.speedY = Math.random() * 0.7 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.35 + 0.1;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
      this.color = Math.random() > 0.4 ? 'rgba(192, 132, 252, ' : 'rgba(155, 81, 224, ';
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y < -40 || this.x < -40 || this.x > canvas.width + 40) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = `${this.color}${this.opacity})`;
      ctx.font = `${this.size}px 'Inter', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.symbol, 0, 0);
      ctx.restore();
    }
  }

  const particleCount = Math.min(Math.floor(window.innerWidth / 28), 50);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new MusicalParticle());
  }

  function drawEqualizerWaves(time) {
    const waveCount = 4;
    const baseHeight = 70;
    const boost = 0.8;

    for (let w = 0; w < waveCount; w++) {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      const freq = 0.002 + w * 0.0012;
      const amp = (15 + w * 10) * boost;
      const speed = (time * 0.0015 * (w % 2 === 0 ? 1 : -1));

      for (let x = 0; x <= canvas.width; x += 15) {
        const y = canvas.height - baseHeight + Math.sin(x * freq + speed) * amp + Math.cos(x * 0.005 + speed * 1.5) * (amp * 0.5);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();

      const alpha = 0.035 - w * 0.006;
      ctx.fillStyle = `rgba(155, 81, 224, ${alpha})`;
      ctx.fill();
    }
  }

  function animateCanvas(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawEqualizerWaves(timestamp || 0);

    animationFrameId = requestAnimationFrame(animateCanvas);
  }
  animateCanvas(0);

  /* ==========================================================================
     2. MEME / VAULT REVEAL CONTROLLER (Subtember Edition)
     ========================================================================== */
  function playVaultUnlockSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      [1480, 1850].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.07 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.065);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.07);
      });

      const bassOsc = audioCtx.createOscillator();
      const bassGain = audioCtx.createGain();
      bassOsc.type = 'triangle';
      bassOsc.frequency.setValueAtTime(160, now + 0.18);
      bassOsc.frequency.exponentialRampToValueAtTime(42, now + 0.6);
      bassGain.gain.setValueAtTime(0.3, now + 0.18);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      bassOsc.connect(bassGain);
      bassGain.connect(audioCtx.destination);
      bassOsc.start(now + 0.18);
      bassOsc.stop(now + 0.68);

      [587.33, 739.99, 880.00, 1174.66].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + 0.3 + idx * 0.04);
        gain.gain.setValueAtTime(0.12, now + 0.3 + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3 + idx * 0.04 + 0.7);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + 0.3 + idx * 0.04);
        osc.stop(now + 0.3 + idx * 0.04 + 0.75);
      });
    } catch (e) {}
  }

  /* ==========================================================================
     2. MEME / VAULT REVEAL CONTROLLER (Subtember Edition)
     ========================================================================== */
  function playVaultUnlockSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;

      [1480, 1850].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.07 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.065);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.07);
      });

      const bassOsc = audioCtx.createOscillator();
      const bassGain = audioCtx.createGain();
      bassOsc.type = 'triangle';
      bassOsc.frequency.setValueAtTime(160, now + 0.18);
      bassOsc.frequency.exponentialRampToValueAtTime(42, now + 0.6);
      bassGain.gain.setValueAtTime(0.3, now + 0.18);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      bassOsc.connect(bassGain);
      bassGain.connect(audioCtx.destination);
      bassOsc.start(now + 0.18);
      bassOsc.stop(now + 0.68);

      [587.33, 739.99, 880.00, 1174.66].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + 0.3 + idx * 0.04);
        gain.gain.setValueAtTime(0.12, now + 0.3 + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3 + idx * 0.04 + 0.7);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + 0.3 + idx * 0.04);
        osc.stop(now + 0.3 + idx * 0.04 + 0.75);
      });
    } catch (e) {}
  }

  function revealGrid(immediate = false, autoCascade = true) {
    if (isRevealed && !immediate) return;
    isRevealed = true;
    try {
      sessionStorage.setItem('memerixu_unlocked', 'true');
    } catch (e) {}

    if (headerNavLinks) headerNavLinks.classList.add('nav-visible');
    if (brandBadge) {
      brandBadge.innerHTML = '<span class="badge-pulse-dot" style="background:#10B981;box-shadow:0 0 8px #10B981;"></span>DESCLASIFICADO';
      brandBadge.style.color = '#34D399';
      brandBadge.style.borderColor = 'rgba(16, 185, 129, 0.5)';
      brandBadge.style.background = 'rgba(16, 185, 129, 0.12)';
    }

    if (immediate) {
      if (revealGate) revealGate.style.display = 'none';
      if (boxesGrid) {
        boxesGrid.style.display = 'grid';
        boxesGrid.classList.add('grid-visible');
      }
      if (autoCascade) {
        document.querySelectorAll('.box-card.is-sealed').forEach((card) => {
          revealCard(card, true);
        });
      }
    } else {
      playVaultUnlockSound();

      if (vaultCapsule) {
        vaultCapsule.classList.add('vault-unlocking');
      }
      if (vaultSecurityStatus) {
        vaultSecurityStatus.innerHTML = `
          <span class="status-bracket">[</span>
          <span class="status-icon-dot" style="background:#10B981;box-shadow:0 0 10px #10B981;"></span>
          <span class="status-msg" style="color:#38BDF8;text-shadow:0 0 12px #38BDF8;">ACCESO AUTORIZADO // DESPLEGANDO</span>
          <span class="status-bracket">]</span>
        `;
      }

      setTimeout(() => {
        if (revealGate) {
          revealGate.classList.add('fade-out');
        }

        setTimeout(() => {
          if (revealGate) revealGate.style.display = 'none';

          if (boxesGrid) {
            boxesGrid.style.display = 'grid';
            void boxesGrid.offsetWidth;
            boxesGrid.classList.add('grid-visible');
            boxesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }

          showToast("🔓 ¡Bóveda desclasificada! Revelando todos los expedientes...", "sparkles");

          // Auto cascade reveal cards in sequence for immediate visibility
          if (autoCascade) {
            const sealedCards = Array.from(document.querySelectorAll('.box-card.is-sealed'));
            sealedCards.forEach((card, idx) => {
              setTimeout(() => {
                revealCard(card, idx > 0);
              }, 120 + idx * 80);
            });
          }
        }, 320);
      }, 550);
    }
  }

  function resealGrid() {
    isRevealed = false;
    try {
      sessionStorage.removeItem('memerixu_unlocked');
    } catch (e) {}

    revealedCardsCount = 0;
    updateRevealProgress();

    if (boxesGrid) {
      boxesGrid.style.display = 'none';
      boxesGrid.classList.remove('grid-visible');
    }
    if (revealGate) {
      revealGate.style.display = 'block';
      revealGate.classList.remove('fade-out');
    }
    if (vaultCapsule) {
      vaultCapsule.classList.remove('vault-unlocking');
    }
    if (vaultSecurityStatus) {
      vaultSecurityStatus.innerHTML = `
        <span class="status-bracket">[</span>
        <span class="status-icon-dot"></span>
        <span class="status-msg">ACCESO DENEGADO // CLAVE REQUERIDA</span>
        <span class="status-bracket">]</span>
      `;
    }
    if (brandBadge) {
      brandBadge.innerHTML = '<span class="badge-pulse-dot"></span>TOP SECRET';
      brandBadge.style.color = '';
      brandBadge.style.borderColor = '';
      brandBadge.style.background = '';
    }

    // Re-seal all cards
    document.querySelectorAll('.box-card').forEach((card) => {
      card.classList.remove('is-revealed', 'is-revealing');
      card.classList.add('is-sealed');
      const cover = card.querySelector('.box-sealed-cover');
      if (cover) cover.style.display = 'flex';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast("🔒 Bóveda cerrada y expedientes bloqueados de nuevo.", "info");
  }

  if (revealMemesBtn) {
    revealMemesBtn.addEventListener('click', () => revealGrid(false, true));
  }

  if (quickRevealBtn) {
    quickRevealBtn.addEventListener('click', () => revealGrid(true, true));
  }

  if (tabMemeBtn) {
    tabMemeBtn.addEventListener('click', () => {
      if (!isRevealed) {
        revealGrid(true, true);
      } else if (boxesGrid) {
        boxesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  /* ==========================================================================
     2.1 INDIVIDUAL CARD REVEAL LOGIC & ANIMATIONS
     ========================================================================== */
  let revealedCardsCount = 0;
  const totalCards = 9;
  const revealedCountEl = document.getElementById('revealed-count');
  const revealedBarFillEl = document.getElementById('revealed-bar-fill');
  const btnRevealAll = document.getElementById('btn-reveal-all');
  const btnResealAll = document.getElementById('btn-reseal-all');

  function updateRevealProgress() {
    if (revealedCountEl) {
      revealedCountEl.textContent = revealedCardsCount;
    }
    if (revealedBarFillEl) {
      const pct = Math.min(100, Math.round((revealedCardsCount / totalCards) * 100));
      revealedBarFillEl.style.width = pct + '%';
    }
  }

  function playRevealAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const t = ctx.currentTime;
      const freqs = [329.63, 440, 659.25, 880];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq * 0.75, t);
        osc.frequency.exponentialRampToValueAtTime(freq, t + 0.12 + idx * 0.03);

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.08 / (idx + 1), t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.45 + idx * 0.06);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.55);
      });
    } catch (e) {}
  }

  function spawnRevealParticles(card) {
    const colors = ['#38BDF8', '#FBBF24', '#A855F7', '#EC4899', '#10B981', '#FFFFFF'];
    for (let i = 0; i < 16; i++) {
      const spark = document.createElement('span');
      spark.className = 'reveal-spark-particle';
      const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.35;
      const distance = 45 + Math.random() * 85;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const color = colors[i % colors.length];

      spark.style.setProperty('--dx', `${dx}px`);
      spark.style.setProperty('--dy', `${dy}px`);
      spark.style.setProperty('--spark-color', color);
      spark.style.left = '50%';
      spark.style.top = '45%';

      card.appendChild(spark);
      setTimeout(() => spark.remove(), 750);
    }
  }

  function spawnRevealFlash(card) {
    const flash = document.createElement('div');
    flash.className = 'card-reveal-flash';
    card.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
  }

  function revealCard(card, isSilent = false) {
    if (!card || !card.classList.contains('is-sealed')) return;

    card.classList.add('is-revealing');
    const memeIndex = parseInt(card.getAttribute('data-meme-index'), 10);
    const authorName = MEMES_DATA[memeIndex]?.author || 'Comunidad';

    if (!isSilent) {
      playRevealAudio();
      spawnRevealParticles(card);
      spawnRevealFlash(card);
    }

    setTimeout(() => {
      card.classList.remove('is-sealed');
      card.classList.remove('is-revealing');
      card.classList.add('is-revealed');

      const cover = card.querySelector('.box-sealed-cover');
      if (cover) {
        cover.style.display = 'none';
      }

      revealedCardsCount++;
      updateRevealProgress();

      if (!isSilent) {
        showToast(`🔓 ¡Meme de ${authorName} desclasificado!`, "sparkles");
        if (revealedCardsCount === totalCards) {
          setTimeout(() => {
            showToast("🎉 ¡Todos los expedientes han sido desclasificados con éxito!", "sparkles");
          }, 600);
        }
      }
    }, isSilent ? 50 : 380);
  }

  // Setup click and keyboard events on all sealed covers
  document.querySelectorAll('.box-card').forEach((card) => {
    const cover = card.querySelector('.box-sealed-cover');
    if (cover) {
      cover.addEventListener('click', (e) => {
        e.stopPropagation();
        revealCard(card);
      });
      cover.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          revealCard(card);
        }
      });
    }
  });

  // "Revelar Todos" Button
  if (btnRevealAll) {
    btnRevealAll.addEventListener('click', () => {
      const sealedCards = Array.from(document.querySelectorAll('.box-card.is-sealed'));
      if (sealedCards.length === 0) {
        showToast("Todos los expedientes ya están desclasificados.", "info");
        return;
      }
      btnRevealAll.disabled = true;
      playRevealAudio();
      sealedCards.forEach((card, idx) => {
        setTimeout(() => {
          revealCard(card, idx !== 0 && idx !== sealedCards.length - 1);
          if (idx === sealedCards.length - 1) {
            setTimeout(() => {
              btnRevealAll.disabled = false;
            }, 600);
          }
        }, idx * 90);
      });
    });
  }

  // "Bloquear Bóveda" Button
  if (btnResealAll) {
    btnResealAll.addEventListener('click', resealGrid);
  }

  // Ambient backdrop generator for cards (ensures glowing ambient color on any aspect ratio)
  document.querySelectorAll('.box-media-wrap').forEach((wrap) => {
    const img = wrap.querySelector('.box-meme-img');
    if (img && !wrap.querySelector('.box-meme-bg-ambient')) {
      const ambient = document.createElement('div');
      ambient.className = 'box-meme-bg-ambient';
      ambient.style.backgroundImage = `url("${img.src || img.getAttribute('src')}")`;
      ambient.setAttribute('aria-hidden', 'true');
      wrap.insertBefore(ambient, wrap.firstChild);
    }
  });

  // Real-time rating sliders score update (1 al 10)
  document.querySelectorAll('.rating-slider').forEach((slider) => {
    const scoreDisplay = slider.closest('.box-rating-control')?.querySelector('.rating-score');
    slider.addEventListener('input', () => {
      if (scoreDisplay) {
        scoreDisplay.textContent = parseFloat(slider.value).toFixed(1);
      }
    });
  });

  /* ==========================================================================
     3. FULLSCREEN LIGHTBOX MODAL WITH GALLERY NAVIGATION
     ========================================================================== */
  function openLightbox(index = 0) {
    if (!lightboxModal) return;
    currentZoom = 1;
    updateZoom();

    // Wrap-around bounds check
    if (index < 0) index = MEMES_DATA.length - 1;
    if (index >= MEMES_DATA.length) index = 0;

    const meme = MEMES_DATA[index] || MEMES_DATA[0];
    currentMemeIndex = index;

    if (lightboxImg) {
      lightboxImg.src = meme.image;
      lightboxImg.alt = meme.title;
      // Handle fallback on error
      lightboxImg.onerror = () => {
        if (meme.fallbackImage && lightboxImg.src !== meme.fallbackImage) {
          lightboxImg.src = meme.fallbackImage;
        }
      };
    }
    if (lbTitle) lbTitle.textContent = meme.title;
    if (lbSubtitle) lbSubtitle.textContent = meme.subtitle ? `${meme.subtitle} • Autor: ${meme.author}` : `Autor: ${meme.author}`;
    if (lbDownload) {
      lbDownload.href = meme.image;
      lbDownload.download = meme.downloadName;
    }
    if (lbCounter) {
      lbCounter.textContent = `${index + 1} / ${MEMES_DATA.length}`;
    }
    if (lbAuthor) {
      lbAuthor.textContent = meme.author;
    }
    if (lbAmbientBg) {
      lbAmbientBg.style.backgroundImage = `url("${meme.image}")`;
    }

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function nextLightbox() {
    openLightbox((currentMemeIndex + 1) % MEMES_DATA.length);
  }

  function prevLightbox() {
    openLightbox((currentMemeIndex - 1 + MEMES_DATA.length) % MEMES_DATA.length);
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateZoom() {
    if (lightboxImg) {
      lightboxImg.style.transform = `scale(${currentZoom})`;
    }
  }

  if (lbZoomIn) {
    lbZoomIn.addEventListener('click', () => {
      currentZoom = Math.min(currentZoom + 0.25, 3.0);
      updateZoom();
    });
  }

  if (lbZoomOut) {
    lbZoomOut.addEventListener('click', () => {
      currentZoom = Math.max(currentZoom - 0.25, 0.5);
      updateZoom();
    });
  }

  if (lbZoomReset) {
    lbZoomReset.addEventListener('click', () => {
      currentZoom = 1;
      updateZoom();
    });
  }

  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
  if (lbBottomClose) lbBottomClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', prevLightbox);
  if (lbNextBtn) lbNextBtn.addEventListener('click', nextLightbox);

  // Touch Swipe on mobile for Lightbox
  let touchStartX = 0;
  let touchEndX = 0;
  const lbStage = document.getElementById('lightbox-stage');
  if (lbStage) {
    lbStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lbStage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextLightbox();
      } else if (touchEndX - touchStartX > 50) {
        prevLightbox();
      }
    }, { passive: true });
  }

  // Hook image clicks in the grid to open lightbox with that specific meme
  document.querySelectorAll('.box-media-wrap').forEach((wrap) => {
    wrap.addEventListener('click', (e) => {
      if (wrap.closest('.box-card.is-sealed')) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const idx = parseInt(wrap.dataset.index, 10);
      openLightbox(isNaN(idx) ? 0 : idx);
    });
  });

  /* ==========================================================================
     4. CONTEXT MODAL (VÍDEO PLAYER / EXTRA CONTENT)
     ========================================================================== */
  function openContextModal(index) {
    if (!contextModal || !contextModalBody) return;
    const meme = MEMES_DATA[index];
    if (!meme) return;

    if (contextModalTitle) {
      contextModalTitle.textContent = meme.contextTitle;
    }
    if (contextChipText) {
      contextChipText.textContent = meme.hasVideo ? 'VÍDEO CLIP EXTRA // ERREDERAMON' : 'EXPEDIENTE // LORE DE STREAM';
    }

    if (meme.hasVideo) {
      contextModalBody.innerHTML = `
        <div class="context-video-container">
          <div class="video-hud-header">
            <div>
              <span class="hud-rec-dot"></span>
              <span>● REPRODUCIENDO CONTENIDO EXTRA DE ERREDERAMON</span>
            </div>
            <span class="hud-res-badge">VÍDEO HD 1080p</span>
          </div>

          <div class="video-frame-wrap">
            <video id="context-video-element" class="context-video" controls playsinline autoplay preload="auto">
              <source src="${meme.videoSrc}" type="video/mp4">
              <source src="${meme.videoFallback || 'assets/contexto/Contexto ErredeRamon.mov'}" type="video/quicktime">
              <source src="Contexto Memes/Contexto ErredeRamon.mp4" type="video/mp4">
              <source src="Contexto Memes/Contexto ErredeRamon.mov" type="video/quicktime">
              Tu navegador no soporta el formato de vídeo directo.
            </video>
          </div>

          <div class="context-desc-box">
            <p class="context-description">${meme.contextDesc}</p>
          </div>

          <div class="context-footer-actions">
            <a href="${meme.videoSrc}" download="Contexto_ErreDeRamon.mp4" class="context-download-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Descargar Vídeo MP4</span>
            </a>
            <button type="button" class="context-download-btn secondary" id="ctx-btn-zoom-meme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Ver Meme Completo</span>
            </button>
          </div>
        </div>
      `;
      const btnZoom = contextModalBody.querySelector('#ctx-btn-zoom-meme');
      if (btnZoom) {
        btnZoom.addEventListener('click', () => {
          closeContextModal();
          openLightbox(index);
        });
      }
    } else {
      contextModalBody.innerHTML = `
        <div class="context-lore-container">
          <div class="video-hud-header" style="background: rgba(139, 92, 246, 0.12); border-color: rgba(139, 92, 246, 0.35); color: #C084FC;">
            <span>📄 EXPEDIENTE DE LA COMUNIDAD // ${meme.author.toUpperCase()}</span>
            <span class="hud-res-badge" style="background: rgba(139, 92, 246, 0.25); border-color: rgba(139, 92, 246, 0.5);">ESPECIAL SUBTEMBER</span>
          </div>

          <div style="display: flex; gap: 16px; align-items: center; background: rgba(0,0,0,0.45); border-radius: 12px; padding: 14px; border: 1px solid rgba(255,255,255,0.08); margin-top: 10px; cursor: pointer;" id="ctx-preview-card" title="Click para ampliar meme">
            <div style="position: relative; width: 120px; height: 95px; border-radius: 8px; overflow: hidden; background: #0b0714; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(168, 85, 247, 0.3);">
              <img src="${meme.image}" alt="${meme.title}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <div style="flex: 1;">
              <h4 style="font-size: 1.18rem; font-weight: 800; color: #fff; margin-bottom: 4px;">${meme.title}</h4>
              <span style="font-size: 0.85rem; color: var(--primary-light);">Autor de la creación: <strong style="color:#FFFFFF;">${meme.author}</strong></span>
              <p style="font-size: 0.78rem; color: #94A3B8; margin-top: 4px;">🔍 Haz clic para ver en pantalla completa</p>
            </div>
          </div>

          <div class="context-desc-box" style="margin-top: 14px;">
            <p class="context-description">${meme.contextDesc}</p>
          </div>

          <div class="context-footer-actions">
            <button type="button" class="context-download-btn" id="ctx-lore-btn-zoom">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Ver Meme en Alta Definición</span>
            </button>
            <a href="${meme.image}" download="${meme.downloadName}" class="context-download-btn secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Descargar Imagen</span>
            </a>
          </div>
        </div>
      `;

      const prevCard = contextModalBody.querySelector('#ctx-preview-card');
      const zoomBtn = contextModalBody.querySelector('#ctx-lore-btn-zoom');
      const triggerZoom = () => {
        closeContextModal();
        openLightbox(index);
      };
      if (prevCard) prevCard.addEventListener('click', triggerZoom);
      if (zoomBtn) zoomBtn.addEventListener('click', triggerZoom);
    }

    contextModal.classList.add('active');
    contextModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    playHudChirp(true);
  }

  function closeContextModal() {
    if (!contextModal) return;
    const vid = contextModal.querySelector('video');
    if (vid) {
      try {
        vid.pause();
        vid.currentTime = 0;
      } catch (e) {}
    }

    contextModal.classList.remove('active');
    contextModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    playHudChirp(false);
  }

  if (contextCloseBtn) contextCloseBtn.addEventListener('click', closeContextModal);
  if (contextBackdrop) contextBackdrop.addEventListener('click', closeContextModal);

  // Hook context buttons on cards
  document.querySelectorAll('.box-btn.btn-context').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index, 10);
      openContextModal(isNaN(idx) ? 0 : idx);
    });
  });

  // Keyboard navigation: Escape closes modals, Arrow keys browse lightbox
  window.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowRight') {
        nextLightbox();
        return;
      }
      if (e.key === 'ArrowLeft') {
        prevLightbox();
        return;
      }
    }

    if (e.key === 'Escape') {
      if (contextModal && contextModal.classList.contains('active')) {
        closeContextModal();
        return;
      }
      if (playerProfileCard && playerProfileCard.classList.contains('active')) {
        closeProfileCard();
        return;
      }
      if (lightboxModal && lightboxModal.classList.contains('active')) {
        closeLightbox();
        return;
      }
    }
  });

  /* ==========================================================================
     5. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message, icon = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">✨</span>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-leave');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 2800);
  }

  /* ==========================================================================
     6. PLAYER PROFILE CARD (FICHA DE OPERADOR FORTNITE MÍTICA)
     ========================================================================== */
  function playHudChirp(isOpen = true) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      if (isOpen) {
        osc.frequency.setValueAtTime(580, now);
        osc.frequency.exponentialRampToValueAtTime(1180, now + 0.12);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      } else {
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.1);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      }

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) {}
  }

  function playCopyChime() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      [659.25, 880, 1318.51].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.001, now + i * 0.06);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.3);
      });
    } catch (e) {}
  }

  function positionProfileCard() {
    if (!playerProfileCard || !userProfileBtn) return;
    if (window.innerWidth <= 680) {
      playerProfileCard.style.top = '';
      playerProfileCard.style.right = '';
      playerProfileCard.style.left = '';
      return;
    }
    const rect = userProfileBtn.getBoundingClientRect();
    const cardWidth = Math.min(510, window.innerWidth - 32);
    let rightOffset = Math.max(16, window.innerWidth - rect.right);
    if (window.innerWidth - rightOffset - cardWidth < 16) {
      rightOffset = Math.max(16, window.innerWidth - cardWidth - 16);
    }
    playerProfileCard.style.top = `${rect.bottom + 10}px`;
    playerProfileCard.style.right = `${rightOffset}px`;
    playerProfileCard.style.left = 'auto';
  }

  function openProfileCard() {
    if (!playerProfileCard) return;
    positionProfileCard();
    playerProfileCard.classList.add('active');
    playerProfileCard.setAttribute('aria-hidden', 'false');
    if (profileCardBackdrop) {
      profileCardBackdrop.classList.add('active');
      profileCardBackdrop.setAttribute('aria-hidden', 'false');
    }
    if (userProfileBtn) {
      userProfileBtn.classList.add('active');
      userProfileBtn.setAttribute('aria-expanded', 'true');
    }
    playHudChirp(true);
  }

  function closeProfileCard() {
    if (!playerProfileCard || !playerProfileCard.classList.contains('active')) return;
    playerProfileCard.classList.remove('active');
    playerProfileCard.setAttribute('aria-hidden', 'true');
    if (profileCardBackdrop) {
      profileCardBackdrop.classList.remove('active');
      profileCardBackdrop.setAttribute('aria-hidden', 'true');
    }
    if (userProfileBtn) {
      userProfileBtn.classList.remove('active');
      userProfileBtn.setAttribute('aria-expanded', 'false');
    }
    playHudChirp(false);
  }

  function toggleProfileCard() {
    if (!playerProfileCard) return;
    if (playerProfileCard.classList.contains('active')) {
      closeProfileCard();
    } else {
      openProfileCard();
    }
  }

  function switchProfileTab(tabName) {
    if (!tabBtnAbilities || !tabBtnCombat || !paneAbilities || !paneCombat) return;

    if (tabName === 'abilities') {
      tabBtnAbilities.classList.add('active');
      tabBtnAbilities.setAttribute('aria-selected', 'true');
      tabBtnCombat.classList.remove('active');
      tabBtnCombat.setAttribute('aria-selected', 'false');

      paneAbilities.classList.add('active-pane');
      paneAbilities.hidden = false;
      paneCombat.classList.remove('active-pane');
      paneCombat.hidden = true;
    } else {
      tabBtnCombat.classList.add('active');
      tabBtnCombat.setAttribute('aria-selected', 'true');
      tabBtnAbilities.classList.remove('active');
      tabBtnAbilities.setAttribute('aria-selected', 'false');

      paneCombat.classList.add('active-pane');
      paneCombat.hidden = false;
      paneAbilities.classList.remove('active-pane');
      paneAbilities.hidden = true;
    }
    playHudChirp(true);
  }

  function copyCreatorCode() {
    const code = creatorCodeVal ? creatorCodeVal.textContent.trim() : 'ARIXU';
    const fallbackCopy = (text) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (err) {}
      document.body.removeChild(textarea);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).catch(() => fallbackCopy(code));
    } else {
      fallbackCopy(code);
    }

    if (btnCopyCreatorCode) {
      btnCopyCreatorCode.classList.add('copied');
      const label = btnCopyCreatorCode.querySelector('.copy-label');
      if (label) label.textContent = '¡Copiado! ✓';
      setTimeout(() => {
        btnCopyCreatorCode.classList.remove('copied');
        if (label) label.textContent = 'Copiar';
      }, 2400);
    }

    if (btnFooterCopyCode) {
      btnFooterCopyCode.classList.add('copied');
      const footerText = btnFooterCopyCode.querySelector('.btn-footer-text');
      if (footerText) footerText.textContent = '¡Código ARIXU Copiado! ✓';
      setTimeout(() => {
        btnFooterCopyCode.classList.remove('copied');
        if (footerText) footerText.textContent = 'Copiar Código Creador';
      }, 2400);
    }

    playCopyChime();
    showToast('¡Código ARIXU copiado al portapapeles! 🛒', 'success');
  }

  if (userProfileBtn) {
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleProfileCard();
    });
  }

  if (btnCloseProfile) {
    btnCloseProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      closeProfileCard();
    });
  }

  if (profileCardBackdrop) {
    profileCardBackdrop.addEventListener('click', closeProfileCard);
  }

  document.addEventListener('click', (e) => {
    if (
      playerProfileCard &&
      playerProfileCard.classList.contains('active') &&
      !playerProfileCard.contains(e.target) &&
      userProfileBtn &&
      !userProfileBtn.contains(e.target)
    ) {
      closeProfileCard();
    }
  });

  window.addEventListener('resize', () => {
    if (playerProfileCard && playerProfileCard.classList.contains('active')) {
      positionProfileCard();
    }
  });

  if (tabBtnAbilities) {
    tabBtnAbilities.addEventListener('click', () => switchProfileTab('abilities'));
  }

  if (tabBtnCombat) {
    tabBtnCombat.addEventListener('click', () => switchProfileTab('combat'));
  }

  if (btnCopyCreatorCode) {
    btnCopyCreatorCode.addEventListener('click', (e) => {
      e.stopPropagation();
      copyCreatorCode();
    });
  }

  if (btnFooterCopyCode) {
    btnFooterCopyCode.addEventListener('click', (e) => {
      e.stopPropagation();
      copyCreatorCode();
    });
  }

  /* Auto-restore state or Query Param handler */
  const urlParams = new URLSearchParams(window.location.search);
  const testState = urlParams.get('test_state');
  const wasUnlocked = sessionStorage.getItem('memerixu_unlocked') === 'true' || window.location.hash === '#memes' || window.location.hash === '#galeria';

  if (testState) {
    document.body.classList.add('no-anim');
  }
  if (testState === 'revealed' || wasUnlocked) {
    revealGrid(true, true);
  } else if (testState === 'lightbox') {
    revealGrid(true, true);
    openLightbox(0);
  } else if (testState === 'context') {
    revealGrid(true, true);
    openContextModal(0);
  } else if (testState === 'profile') {
    openProfileCard();
  }


  /* ==========================================================================
     5. TOP 3 WINNERS PODIUM LOGIC & FANFARE
     ========================================================================== */
  const btnOpenPodium = document.getElementById('btn-open-podium');
  const podiumModal = document.getElementById('podium-modal');
  const podiumBackdrop = document.getElementById('podium-backdrop');
  const podiumCloseBtn = document.getElementById('podium-close-btn');
  const podiumBtnCloseMain = document.getElementById('podium-btn-close-main');
  const podiumBtnEdit = document.getElementById('podium-btn-edit');
  const podiumStage = document.getElementById('podium-stage');
  const podiumConfettiWrap = document.getElementById('podium-confetti-wrap');
  const rankingAccordionBtn = document.getElementById('ranking-accordion-btn');
  const rankingAccordionBody = document.getElementById('ranking-accordion-body');

  function playVictoryFanfare() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;

      // Triumphant Victory Chords: C5, E5, G5, C6
      const notes = [
        { f: 523.25, start: 0.00, dur: 0.14 }, // C5
        { f: 523.25, start: 0.15, dur: 0.14 }, // C5
        { f: 523.25, start: 0.30, dur: 0.14 }, // C5
        { f: 659.25, start: 0.45, dur: 0.36 }, // E5
        { f: 783.99, start: 0.82, dur: 0.26 }, // G5
        { f: 1046.50, start: 1.08, dur: 0.85 } // C6
      ];

      notes.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, t + note.start);

        gain.gain.setValueAtTime(0.001, t + note.start);
        gain.gain.linearRampToValueAtTime(0.12, t + note.start + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + note.start + note.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t + note.start);
        osc.stop(t + note.start + note.dur);
      });
    } catch (e) {
      // Audio not permitted, ignore
    }
  }

  function spawnPodiumConfetti() {
    if (!podiumConfettiWrap) return;
    podiumConfettiWrap.innerHTML = '';
    const colors = ['#F59E0B', '#FDE047', '#38BDF8', '#A855F7', '#EC4899', '#10B981', '#FFFFFF'];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.left = (Math.random() * 95) + '%';
      piece.style.top = '-20px';
      piece.style.animationDelay = (Math.random() * 0.8) + 's';
      piece.style.animationDuration = (2.2 + Math.random() * 1.2) + 's';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      podiumConfettiWrap.appendChild(piece);
    }
  }

  function openPodiumModal() {
    if (!podiumModal || !podiumStage) return;

    // 1. Gather all current scores from sliders
    const currentRankings = MEMES_DATA.map((meme, idx) => {
      const card = document.querySelector(`.box-card[data-meme-index="${idx}"]`);
      const slider = card ? card.querySelector('.rating-slider') : null;
      const score = slider ? parseFloat(slider.value) : (meme.initialScore || 8.0);
      return {
        ...meme,
        index: idx,
        score: isNaN(score) ? 8.0 : score
      };
    });

    // 2. Sort descending (highest score first)
    currentRankings.sort((a, b) => b.score - a.score);

    const first = currentRankings[0];
    const second = currentRankings[1];
    const third = currentRankings[2];

    // 3. Render 3D Pedestal Stage
    podiumStage.innerHTML = `
      <!-- 2º PUESTO (PLATA) -->
      <div class="podium-column place-2">
        <div class="podium-card">
          <div class="podium-place-badge">🥈 2º Puesto</div>
          <div class="podium-img-wrap" data-meme-idx="${second.index}" title="Click para ampliar imagen">
            <img src="${second.image}" alt="${second.title}" class="podium-meme-img">
          </div>
          <div class="podium-author-name">${second.author}</div>
          <div class="podium-score-pill">
            <span class="podium-score-val">${second.score.toFixed(1)}</span>
            <span class="podium-score-max">/ 10</span>
          </div>
        </div>
        <div class="podium-pedestal">
          <span class="pedestal-rank-number">2</span>
          <span class="pedestal-rank-label">PLATA</span>
        </div>
      </div>

      <!-- 1º PUESTO (ORO / MÍTICO) -->
      <div class="podium-column place-1">
        <div class="podium-card">
          <div class="podium-card-crown">👑</div>
          <div class="podium-place-badge">🥇 1º GANADOR</div>
          <div class="podium-img-wrap" data-meme-idx="${first.index}" title="Click para ampliar meme campeón">
            <img src="${first.image}" alt="${first.title}" class="podium-meme-img">
          </div>
          <div class="podium-author-name">${first.author}</div>
          <div class="podium-score-pill">
            <span class="podium-score-val">${first.score.toFixed(1)}</span>
            <span class="podium-score-max">/ 10</span>
          </div>
        </div>
        <div class="podium-pedestal">
          <span class="pedestal-rank-number">1</span>
          <span class="pedestal-rank-label">CAMPEÓN</span>
        </div>
      </div>

      <!-- 3º PUESTO (BRONCE) -->
      <div class="podium-column place-3">
        <div class="podium-card">
          <div class="podium-place-badge">🥉 3º Puesto</div>
          <div class="podium-img-wrap" data-meme-idx="${third.index}" title="Click para ampliar imagen">
            <img src="${third.image}" alt="${third.title}" class="podium-meme-img">
          </div>
          <div class="podium-author-name">${third.author}</div>
          <div class="podium-score-pill">
            <span class="podium-score-val">${third.score.toFixed(1)}</span>
            <span class="podium-score-max">/ 10</span>
          </div>
        </div>
        <div class="podium-pedestal">
          <span class="pedestal-rank-number">3</span>
          <span class="pedestal-rank-label">BRONCE</span>
        </div>
      </div>
    `;

    // Hook image clicks on podium to open lightbox
    podiumStage.querySelectorAll('.podium-img-wrap').forEach((wrap) => {
      wrap.addEventListener('click', () => {
        const idx = parseInt(wrap.getAttribute('data-meme-idx'), 10);
        closePodiumModal();
        openLightbox(isNaN(idx) ? 0 : idx);
      });
    });

    // 4. Render Remaining Rankings (4º to 9º)
    if (rankingAccordionBody) {
      const rest = currentRankings.slice(3);
      rankingAccordionBody.innerHTML = rest.map((item, idx) => `
        <div class="ranking-row-item">
          <div class="ranking-row-left">
            <span class="ranking-pos-chip">${idx + 4}º</span>
            <img src="${item.image}" alt="${item.title}" class="ranking-thumb">
            <span class="ranking-row-name">${item.author}</span>
          </div>
          <span class="ranking-row-score">${item.score.toFixed(1)} pts</span>
        </div>
      `).join('');
    }

    // 5. Open modal & trigger fanfare
    podiumModal.classList.add('active');
    playVictoryFanfare();
    spawnPodiumConfetti();
    showToast(`🏆 ¡${first.author} se corona como campeón con ${first.score.toFixed(1)} puntos!`, "sparkles");
  }

  function closePodiumModal() {
    if (podiumModal) {
      podiumModal.classList.remove('active');
    }
  }

  if (btnOpenPodium) {
    btnOpenPodium.addEventListener('click', openPodiumModal);
  }
  if (podiumBackdrop) podiumBackdrop.addEventListener('click', closePodiumModal);
  if (podiumCloseBtn) podiumCloseBtn.addEventListener('click', closePodiumModal);
  if (podiumBtnCloseMain) podiumBtnCloseMain.addEventListener('click', closePodiumModal);
  if (podiumBtnEdit) {
    podiumBtnEdit.addEventListener('click', () => {
      closePodiumModal();
      if (boxesGrid) {
        boxesGrid.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Accordion toggle
  if (rankingAccordionBtn && rankingAccordionBody) {
    rankingAccordionBtn.addEventListener('click', () => {
      const isOpen = rankingAccordionBody.style.display !== 'none';
      rankingAccordionBody.style.display = isOpen ? 'none' : 'flex';
      rankingAccordionBtn.classList.toggle('expanded', !isOpen);
    });
  }

  // Close podium on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && podiumModal && podiumModal.classList.contains('active')) {
      closePodiumModal();
    }
  });

});

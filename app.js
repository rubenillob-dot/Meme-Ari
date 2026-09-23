/**
 * ARIFY - Single Page Application
 * Interactive Spotify-Style Dark Mode Web Experience
 * Track: "La Ari la lía" - Arixu ft. Ruben
 */

/* ==========================================================================
   CONSTANTS & MEDIA ASSETS CONFIGURATION
   ========================================================================== */
const MEME_IMAGE_URL = 'assets/bingo_arixu.png';
const SONG_AUDIO_URL = 'assets/la_ari_la_lia.mp3';

const LYRICS_DATA = [
  // INTRO
  { time: 0.0, section: "Intro", text: "🎵 [Intro instrumental - Arify Beats]" },
  { time: 0.8, section: "Intro", text: "¡Hey chat, bienvenidos al directo de hoy!" },
  { time: 4.5, section: "Intro", text: "¡Código ARIXU en la tienda de Fortnite!" },

  // VERSO 1
  { time: 8.2, section: "Verso 1", text: "Caigo en Pisos Picados con la escopeta en mano" },
  { time: 12.0, section: "Verso 1", text: "Miro al suelo... ¡las armas son invisibles, hermano!" },
  { time: 16.0, section: "Verso 1", text: "Diez minutos hablando y el micro silenciado" },
  { time: 20.0, section: "Verso 1", text: "¡Chat, avisadme que llevo media hora muteada!" },
  { time: 24.0, section: "Verso 1", text: "Me muevo pal tejado, tropiezo con un pixel" },
  { time: 27.8, section: "Verso 1", text: "Caída libre al lobby, ¡muerte de caída otra vez!" },
  { time: 31.8, section: "Verso 1", text: "Y se me apaga el Bluetooth en pleno tiroteo..." },

  // ESTRIBILLO 1
  { time: 35.2, section: "Estribillo", text: "¡Ay mi madre, que la Ari la lía!" },
  { time: 39.0, section: "Estribillo", text: "Otro fail pa' la colección de cada día" },
  { time: 43.0, section: "Estribillo", text: "Mandando una raid a un canal de Rusia" },
  { time: 47.0, section: "Estribillo", text: "Y el stream sigue en vivo hasta por la mañana" },
  { time: 51.0, section: "Estribillo", text: "¡La Ari la lía, no para de liarla!" },
  { time: 55.0, section: "Estribillo", text: "Con el sniper cazándola y el chat a carcajadas" },
  { time: 59.0, section: "Estribillo", text: "¡Bingo de fails, cántalo que hoy se gana!" },

  // VERSO 2
  { time: 62.4, section: "Verso 2", text: "Llega donación troll: Erická Verga te dona un pavo" },
  { time: 66.4, section: "Verso 2", text: "Y yo leyéndolo en alto mientras me pongo colorada" },
  { time: 70.2, section: "Verso 2", text: "Modo TikTok sensible, ¡prohibido bebés y niños!" },
  { time: 74.0, section: "Verso 2", text: "Metiendo acento latino fingiendo que tengo estilo" },
  { time: 78.0, section: "Verso 2", text: "Me cancelan el código, ¡ay que me muero!" },
  { time: 81.8, section: "Verso 2", text: "Pero sigo en la partida aunque quede en el agujero" },
  { time: 85.6, section: "Verso 2", text: "Cascos volando, Ruben gritando, ¡menudo jaleo!" },

  // ESTRIBILLO 2
  { time: 89.4, section: "Estribillo", text: "¡Ay mi madre, que la Ari la lía!" },
  { time: 93.2, section: "Estribillo", text: "Otro fail pa' la colección de cada día" },
  { time: 97.2, section: "Estribillo", text: "Mandando una raid a un canal de Rusia" },
  { time: 101.2, section: "Estribillo", text: "Y el stream sigue en vivo hasta por la mañana" },
  { time: 105.2, section: "Estribillo", text: "¡La Ari la lía, no para de liarla!" },
  { time: 109.2, section: "Estribillo", text: "Con el sniper cazándola y el chat a carcajadas" },
  { time: 113.2, section: "Estribillo", text: "¡Bingo de fails, cántalo que hoy se gana!" },

  // OUTRO
  { time: 117.0, section: "Outro", text: "¿Quién marcó la casilla trece? ¡Esa no me la esperaba!" },
  { time: 121.2, section: "Outro", text: "Apaga el directo... espera, ¿sigo en directo?" },
  { time: 125.2, section: "Outro", text: "¡Ruben, que no le he dado a terminar transmisión!" },
  { time: 129.2, section: "Outro", text: "Código ARIXU en la tienda... ¡Hasta la próxima, gente!" },
  { time: 133.0, section: "Outro", text: "🎵 [Fade out Arify Sound]" }
];

/* ==========================================================================
   APP CONTROLLER INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  // DOM Elements
  const audio = document.getElementById('audio-engine');
  audio.src = SONG_AUDIO_URL;

  const mysteryCard = document.getElementById('mystery-card');
  const revealBtn = document.getElementById('reveal-btn');
  const revealedWrapper = document.getElementById('revealed-wrapper');
  const memeImg = document.getElementById('meme-img');
  const memeImgContainer = document.getElementById('meme-img-container');
  const quickZoomBtn = document.getElementById('quick-zoom-btn');
  const btnOpenLightbox = document.getElementById('btn-open-lightbox');
  const btnPlaySongShortcut = document.getElementById('btn-play-song-shortcut');
  const shortcutBtnText = document.getElementById('shortcut-btn-text');

  // Player Elements
  const playerBar = document.getElementById('arify-player');
  const btnPlayPause = document.getElementById('btn-play-pause');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnShuffle = document.getElementById('btn-shuffle');
  const btnRepeat = document.getElementById('btn-repeat');
  const currentTimeEl = document.getElementById('current-time');
  const totalTimeEl = document.getElementById('total-time');
  const seekBarWrapper = document.getElementById('seek-bar-wrapper');
  const seekFill = document.getElementById('seek-fill');
  const seekThumb = document.getElementById('seek-thumb');
  const seekTooltip = document.getElementById('seek-tooltip');
  const trackLikeBtn = document.getElementById('track-like-btn');
  const playerThumbBtn = document.getElementById('player-thumb-btn');

  // Volume Elements
  const btnVolumeIcon = document.getElementById('btn-volume-icon');
  const volHighIcon = btnVolumeIcon.querySelector('.vol-high');
  const volMutedIcon = btnVolumeIcon.querySelector('.vol-muted');
  const volBarWrapper = document.getElementById('vol-bar-wrapper');
  const volFill = document.getElementById('vol-fill');
  const volThumb = document.getElementById('vol-thumb');

  // Views & Tabs
  const tabMemeBtn = document.getElementById('tab-meme-btn');
  const tabLyricsBtn = document.getElementById('tab-lyrics-btn');
  const btnLyricsToggle = document.getElementById('btn-lyrics-toggle');
  const closeLyricsBtn = document.getElementById('close-lyrics-btn');
  const closeLyricsIconBtn = document.getElementById('close-lyrics-icon-btn');
  const memeView = document.getElementById('meme-view');
  const lyricsView = document.getElementById('lyrics-view');
  const lyricsScrollContainer = document.getElementById('lyrics-scroll-container');
  const lyricsLinesWrapper = document.getElementById('lyrics-lines-wrapper');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxImg = document.getElementById('lightbox-img');
  const lbCloseBtn = document.getElementById('lb-close');
  const lbZoomIn = document.getElementById('lb-zoom-in');
  const lbZoomOut = document.getElementById('lb-zoom-out');
  const lbZoomReset = document.getElementById('lb-zoom-reset');
  const btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');

  // Search & Toast & Vault Elements
  const searchInput = document.getElementById('search-input');
  const toastContainer = document.getElementById('toast-container');
  const headerNavLinks = document.getElementById('header-nav-links');
  const brandBadge = document.getElementById('brand-badge');

  // State
  let isRevealed = false;
  let isPlaying = false;
  let isMuted = false;
  let previousVolume = 0.85;
  let isShuffle = false;
  let repeatMode = 0; // 0: no repeat, 1: repeat song
  let activeLyricIndex = -1;
  let isSeeking = false;
  let isVolumeDragging = false;
  let currentZoom = 1;

  // Set assets
  memeImg.src = MEME_IMAGE_URL;
  lightboxImg.src = MEME_IMAGE_URL;

  // Audio configuration
  audio.volume = previousVolume;
  updateVolumeUI(previousVolume);

  /* ==========================================================================
     1. CANVAS DYNAMIC BACKGROUND (Notes, Waves, Microphone Particles)
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
      this.y = Math.random() * canvas.height; // initial scatter
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

    update(beatBoost = 1) {
      this.y -= this.speedY * beatBoost;
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

  // Populate particles
  const particleCount = Math.min(Math.floor(window.innerWidth / 28), 50);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new MusicalParticle());
  }

  // Draw Audio Visualizer Waves at the bottom
  function drawEqualizerWaves(time) {
    const waveCount = 4;
    const baseHeight = 70;
    const isSongActive = isPlaying;
    const boost = isSongActive ? 1.8 : 0.6;

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

      const alpha = (0.04 - w * 0.008) * (isSongActive ? 1.5 : 1);
      ctx.fillStyle = `rgba(155, 81, 224, ${alpha})`;
      ctx.fill();
    }
  }

  function animateCanvas(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Audio-reactive boost
    const beatMultiplier = isPlaying ? 1.6 : 1.0;

    // Draw particles
    particles.forEach(p => {
      p.update(beatMultiplier);
      p.draw();
    });

    // Draw subtle wave spectrum at background bottom
    drawEqualizerWaves(timestamp || 0);

    animationFrameId = requestAnimationFrame(animateCanvas);
  }
  animateCanvas(0);

  /* ==========================================================================
     2. MEME / BINGO REVEAL CONTROLLER
     ========================================================================== */
  function revealMeme() {
    if (isRevealed) return;
    isRevealed = true;

    // Audio chime effect
    playRevealChime();

    // Smoothly reveal the player bar from bottom and nav links from top
    playerBar.classList.add('player-visible');
    if (headerNavLinks) headerNavLinks.classList.add('nav-visible');
    if (brandBadge) brandBadge.textContent = 'STREAM EDITION';
    if (searchInput) searchInput.placeholder = '¿Qué quieres escuchar hoy? (ej. La Ari la lía...)';

    // Hide mystery card with smooth transition
    mysteryCard.style.transition = 'all 0.4s var(--ease-smooth)';
    mysteryCard.style.opacity = '0';
    mysteryCard.style.transform = 'scale(0.92)';

    setTimeout(() => {
      mysteryCard.style.display = 'none';
      revealedWrapper.style.display = 'flex';
      revealedWrapper.classList.add('animate-reveal');

      showToast("✨ ¡Acceso concedido! Archivo desbloqueado.", "sparkles");

      // Auto start track
      if (audio.paused) {
        startPlayback();
      }
    }, 380);
  }

  revealBtn.addEventListener('click', revealMeme);

  // Quick zoom clicking directly on image
  memeImgContainer.addEventListener('click', () => {
    openLightbox();
  });
  quickZoomBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openLightbox();
  });
  btnOpenLightbox.addEventListener('click', openLightbox);

  // Play shortcut button on meme card
  btnPlaySongShortcut.addEventListener('click', () => {
    togglePlayPause();
  });

  /* ==========================================================================
     3. AUDIO PLAYER (Spotify Bar Controls)
     ========================================================================== */
  function togglePlayPause() {
    if (audio.paused) {
      startPlayback();
    } else {
      pausePlayback();
    }
  }

  function startPlayback() {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayPauseButtonUI();
      shortcutBtnText.textContent = "Pausar tema";
      showToast("▶ Reproduciendo: La Ari la lía - Arixu ft. Ruben", "play");
    }).catch(err => {
      console.warn("Audio play prevented or file not ready:", err);
      // Still show active state
      isPlaying = true;
      updatePlayPauseButtonUI();
    });
  }

  function pausePlayback() {
    audio.pause();
    isPlaying = false;
    updatePlayPauseButtonUI();
    shortcutBtnText.textContent = "Reproducir tema";
  }

  function updatePlayPauseButtonUI() {
    if (isPlaying) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      btnPlayPause.title = "Pausar";
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      btnPlayPause.title = "Reproducir";
    }
  }

  btnPlayPause.addEventListener('click', togglePlayPause);

  // Previous button (restarts song or goes to beginning)
  btnPrev.addEventListener('click', () => {
    audio.currentTime = 0;
    if (audio.paused) startPlayback();
    showToast("⏮ Reiniciando canción...", "music");
  });

  // Next button (loops or jumps forward 15s)
  btnNext.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.currentTime + 15, audio.duration || 135);
    showToast("⏭ Saltando +15s...", "forward");
  });

  // Shuffle button (simulated toggle)
  btnShuffle.addEventListener('click', () => {
    isShuffle = !isShuffle;
    btnShuffle.classList.toggle('active', isShuffle);
    showToast(isShuffle ? "🔀 Modo aleatorio activado" : "Modo aleatorio desactivado");
  });

  // Repeat button (toggles repeat-all / repeat-one / off)
  btnRepeat.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 2;
    audio.loop = (repeatMode === 1);
    btnRepeat.classList.toggle('active', repeatMode === 1);
    btnRepeat.classList.toggle('repeat-one', repeatMode === 1);
    showToast(repeatMode === 1 ? "🔂 Repetición activada" : "Repetición desactivada");
  });

  // Like button
  trackLikeBtn.addEventListener('click', () => {
    const isLiked = trackLikeBtn.classList.toggle('liked');
    if (isLiked) {
      showToast("💜 Añadido a tus canciones favoritas", "heart");
    } else {
      showToast("Eliminado de tus canciones favoritas", "heart-broken");
    }
  });

  // Clicking thumbnail in player switches to Meme view & scrolls
  playerThumbBtn.addEventListener('click', () => {
    switchTab('meme');
    if (!isRevealed) revealMeme();
  });

  // Audio Time Update & Seek Bar Handling
  audio.addEventListener('timeupdate', () => {
    if (isSeeking) return;

    const curr = audio.currentTime;
    const dur = audio.duration || 135.48; // fallback to duration

    currentTimeEl.textContent = formatTime(curr);
    totalTimeEl.textContent = formatTime(dur);

    const percent = Math.min((curr / dur) * 100, 100);
    seekFill.style.width = `${percent}%`;
    seekThumb.style.left = `${percent}%`;

    syncLyricsWithTime(curr);
  });

  audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration || 135.48);
  });

  audio.addEventListener('ended', () => {
    if (repeatMode === 1) {
      audio.currentTime = 0;
      audio.play();
    } else {
      pausePlayback();
      audio.currentTime = 0;
    }
  });

  // Seek bar scrub & click
  function handleSeek(e) {
    const rect = seekBarWrapper.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = clickX / rect.width;
    const dur = audio.duration || 135.48;
    audio.currentTime = percent * dur;
    seekFill.style.width = `${percent * 100}%`;
    seekThumb.style.left = `${percent * 100}%`;
  }

  seekBarWrapper.addEventListener('mousedown', (e) => {
    isSeeking = true;
    handleSeek(e);
  });

  window.addEventListener('mousemove', (e) => {
    if (isSeeking) {
      handleSeek(e);
    }

    // Hover tooltip calculation
    const rect = seekBarWrapper.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top - 15 && e.clientY <= rect.bottom + 15) {
      const hoverX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const hoverPercent = hoverX / rect.width;
      const dur = audio.duration || 135.48;
      seekTooltip.textContent = formatTime(hoverPercent * dur);
      seekTooltip.style.left = `${hoverPercent * 100}%`;
    }
  });

  window.addEventListener('mouseup', () => {
    if (isSeeking) {
      isSeeking = false;
    }
  });

  /* ==========================================================================
     4. VOLUME CONTROLLER
     ========================================================================== */
  function updateVolumeUI(vol) {
    const percent = Math.round(vol * 100);
    volFill.style.width = `${percent}%`;
    volThumb.style.left = `${percent}%`;

    if (vol === 0 || isMuted) {
      volHighIcon.style.display = 'none';
      volMutedIcon.style.display = 'block';
    } else {
      volHighIcon.style.display = 'block';
      volMutedIcon.style.display = 'none';
    }
  }

  function handleVolumeChange(e) {
    const rect = volBarWrapper.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const vol = clickX / rect.width;
    audio.volume = vol;
    previousVolume = vol;
    isMuted = (vol === 0);
    updateVolumeUI(vol);
  }

  volBarWrapper.addEventListener('mousedown', (e) => {
    isVolumeDragging = true;
    handleVolumeChange(e);
  });

  window.addEventListener('mousemove', (e) => {
    if (isVolumeDragging) handleVolumeChange(e);
  });

  window.addEventListener('mouseup', () => {
    if (isVolumeDragging) isVolumeDragging = false;
  });

  btnVolumeIcon.addEventListener('click', () => {
    if (isMuted) {
      isMuted = false;
      audio.volume = previousVolume > 0 ? previousVolume : 0.8;
      updateVolumeUI(audio.volume);
    } else {
      isMuted = true;
      previousVolume = audio.volume;
      audio.volume = 0;
      updateVolumeUI(0);
    }
  });

  /* ==========================================================================
     5. KARAOKE / SYNCHRONIZED LYRICS ENGINE
     ========================================================================== */
  function renderLyrics() {
    lyricsLinesWrapper.innerHTML = '';
    let currentSection = '';

    LYRICS_DATA.forEach((item, index) => {
      // If new section, render header
      if (item.section !== currentSection) {
        currentSection = item.section;
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'lyrics-section-title';
        sectionHeader.textContent = currentSection;
        lyricsLinesWrapper.appendChild(sectionHeader);
      }

      const lineEl = document.createElement('div');
      lineEl.className = 'lyrics-line';
      lineEl.dataset.index = index;
      lineEl.dataset.time = item.time;
      lineEl.textContent = item.text;

      // Click on line to jump audio
      lineEl.addEventListener('click', () => {
        audio.currentTime = item.time;
        if (audio.paused) startPlayback();
        highlightLyricLine(index, true);
        showToast(`Ir al verso: "${item.text.slice(0, 30)}..."`, "music");
      });

      lyricsLinesWrapper.appendChild(lineEl);
    });
  }

  function syncLyricsWithTime(currTime) {
    let activeIdx = -1;

    for (let i = 0; i < LYRICS_DATA.length; i++) {
      if (currTime >= LYRICS_DATA[i].time) {
        activeIdx = i;
      } else {
        break;
      }
    }

    if (activeIdx !== activeLyricIndex && activeIdx >= 0) {
      highlightLyricLine(activeIdx);
    }
  }

  function highlightLyricLine(index, forceScroll = false) {
    activeLyricIndex = index;
    const lines = lyricsLinesWrapper.querySelectorAll('.lyrics-line');

    lines.forEach((line) => {
      const idx = parseInt(line.dataset.index, 10);
      if (idx === index) {
        line.classList.add('active');
        
        // Auto scroll to center active line
        if (lyricsView.classList.contains('active-panel') || forceScroll) {
          line.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      } else {
        line.classList.remove('active');
      }
    });
  }

  renderLyrics();

  /* ==========================================================================
     6. NAVIGATION TABS (Meme vs Lyrics View)
     ========================================================================== */
  function switchTab(target) {
    if (target === 'meme') {
      if (lyricsView.classList.contains('active-panel')) {
        lyricsView.classList.add('panel-closing');
        setTimeout(() => {
          lyricsView.classList.remove('active-panel', 'panel-closing');
          memeView.classList.add('active-panel');
          tabMemeBtn.classList.add('active');
          tabLyricsBtn.classList.remove('active');
          btnLyricsToggle.classList.remove('active');
        }, 180);
      } else {
        memeView.classList.add('active-panel');
        lyricsView.classList.remove('active-panel');
        tabMemeBtn.classList.add('active');
        tabLyricsBtn.classList.remove('active');
        btnLyricsToggle.classList.remove('active');
      }
    } else {
      if (memeView.classList.contains('active-panel')) {
        memeView.classList.add('panel-closing');
        setTimeout(() => {
          memeView.classList.remove('active-panel', 'panel-closing');
          lyricsView.classList.add('active-panel');
          tabMemeBtn.classList.remove('active');
          tabLyricsBtn.classList.add('active');
          btnLyricsToggle.classList.add('active');

          // Scroll to current active line when switching
          if (activeLyricIndex >= 0) {
            const currentLine = lyricsLinesWrapper.querySelector(`.lyrics-line[data-index="${activeLyricIndex}"]`);
            if (currentLine) {
              setTimeout(() => {
                currentLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }, 80);
            }
          }
        }, 180);
      } else {
        tabMemeBtn.classList.remove('active');
        tabLyricsBtn.classList.add('active');
        btnLyricsToggle.classList.add('active');
        memeView.classList.remove('active-panel');
        lyricsView.classList.add('active-panel');

        if (activeLyricIndex >= 0) {
          const currentLine = lyricsLinesWrapper.querySelector(`.lyrics-line[data-index="${activeLyricIndex}"]`);
          if (currentLine) {
            setTimeout(() => {
              currentLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 80);
          }
        }
      }
    }
  }

  // Toggle behavior: clicking Meme tab always returns to meme view
  tabMemeBtn.addEventListener('click', () => switchTab('meme'));

  // Toggle behavior: clicking Lyrics tab toggles back and forth without stopping audio
  tabLyricsBtn.addEventListener('click', () => {
    const isLyricsActive = lyricsView.classList.contains('active-panel');
    switchTab(isLyricsActive ? 'meme' : 'lyrics');
  });

  // Toggle behavior on player bar microphone icon
  btnLyricsToggle.addEventListener('click', () => {
    const isLyricsActive = lyricsView.classList.contains('active-panel');
    switchTab(isLyricsActive ? 'meme' : 'lyrics');
  });

  // Return / Close buttons inside lyrics view
  closeLyricsBtn.addEventListener('click', () => switchTab('meme'));
  if (closeLyricsIconBtn) {
    closeLyricsIconBtn.addEventListener('click', () => switchTab('meme'));
  }

  /* ==========================================================================
     7. FULLSCREEN LIGHTBOX MODAL
     ========================================================================== */
  function openLightbox() {
    currentZoom = 1;
    updateZoom();
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateZoom() {
    lightboxImg.style.transform = `scale(${currentZoom})`;
  }

  lbZoomIn.addEventListener('click', () => {
    currentZoom = Math.min(currentZoom + 0.25, 3.0);
    updateZoom();
  });

  lbZoomOut.addEventListener('click', () => {
    currentZoom = Math.max(currentZoom - 0.25, 0.5);
    updateZoom();
  });

  lbZoomReset.addEventListener('click', () => {
    currentZoom = 1;
    updateZoom();
  });

  lbCloseBtn.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);
  btnFullscreenToggle.addEventListener('click', openLightbox);

  // Escape key closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
    // Spacebar toggles playback if not typing in input
    if (e.code === 'Space' && e.target !== searchInput) {
      e.preventDefault();
      togglePlayPause();
    }
  });


  /* ==========================================================================
     9. SEARCH BAR SIMULATION
     ========================================================================== */
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) return;

    if (query.includes('ari') || query.includes('fail') || query.includes('bingo') || query.includes('fortnite')) {
      // highlight match
      if (!isRevealed) revealMeme();
    }
  });

  /* ==========================================================================
     10. SOUND EFFECTS (Web Audio API Synth Chimes)
     ========================================================================== */
  function playRevealChime() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [440, 554.37, 659.25, 880]; // A major chord
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0, audioCtx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime + idx * 0.08);
        osc.stop(audioCtx.currentTime + idx * 0.08 + 0.85);
      });
    } catch (e) {
      // AudioContext unavailable or autoplay blocked
    }
  }


  /* ==========================================================================
     11. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message, icon = 'info') {
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
     12. TIME FORMATTER (MM:SS)
     ========================================================================== */
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

});

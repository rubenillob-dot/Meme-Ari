# 🟣 Arify - Streamer Edition | Documentación Técnica y Funcional

**Arify** es una Single Page Application (SPA) interactiva, moderna y responsive inspirada fielmente en la experiencia de usuario y diseño visual de **Spotify Dark Mode**, personalizada con una identidad de marca en tonos morados, violetas y neón (`#8A2BE2`, `#9B51E0`, `#C084FC`).

Combina un reproductor de audio completo, una experiencia inmersiva de letras sincronizadas (Karaoke), un fondo dinámico reactivo en Canvas HTML5 y un sistema de "archivo confidencial" con desbloqueo fluido.

---

## 🧭 ¿De qué consta la web?

La aplicación está diseñada bajo el concepto de una **bóveda de contenido confidencial** que se transforma dinámicamente al interactuar con ella. A continuación se desglosan todos sus módulos, capas y funcionalidades:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        APP HEADER (Navegación)                         │
│  [Logo Arify]   [Buscador Contextual]   [Pestañas Modo]   [Perfil User]│
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│               CANVAS DE FONDO (Notas, Espectro, Aurora)                │
│                                                                        │
│                    PANEL CENTRAL DINÁMICO (SPA)                        │
│                                                                        │
│   ┌───────────────────────────┐    ┌──────────────────────────────┐    │
│   │   ESTADO 1: BLOQUEADO     │    │    ESTADO 2: DESBLOQUEADO    │    │
│   │  - Tarjeta Confidencial   │ ──>│  - Imagen Meme en Alta Res   │    │
│   │  - Candado Pulsante       │    │  - Acciones: Zoom, Descarga  │    │
│   │  - Botón Desbloquear      │    │  - Atajo de Reproducción     │    │
│   └───────────────────────────┘    └──────────────────────────────┘    │
│                                                   ▲                    │
│                                                   │ (Alternar Pestaña) │
│                                                   ▼                    │
│                                    ┌──────────────────────────────┐    │
│                                    │   VISTA 2: LETRA KARAOKE     │    │
│                                    │  - Letras Sincronizadas      │    │
│                                    │  - Auto-scroll Inteligente   │    │
│                                    │  - Salto por Clic en Verso   │    │
│                                    └──────────────────────────────┘    │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│               ARIFY PLAYER (Barra Inferior Estilo Spotify)             │
│  [Carátula + Track]  │  [Play/Pause, Seek, Duración]  │  [Vol, Letras] │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 1. El Flujo de Experiencia ("Vault Experience")

La aplicación cuenta con dos estados principales:

#### A. Estado Inicial: Archivo Confidencial (Bloqueado)
- **Misterio total:** No se revelan nombres de temas, imágenes ni pistas sobre el contenido.
- **Reproductor oculto:** La barra inferior permanece completamente fuera de la vista (`translateY(115%)` y `opacity: 0`).
- **Navegación limpia:** Las pestañas de la cabecera permanecen invisibles y el buscador muestra un texto neutral (*"¿Buscar contenido...?"*).
- **Tarjeta protegida:** En el centro destaca una tarjeta misteriosa con resplandor púrpura, insignia de acceso restringido, candado animado y el botón **"★ Desbloquear Contenido"**.

#### B. Estado Desbloqueado: Experiencia Completa
Al pulsar el botón de desbloqueo:
1. Suena un acorde de revelación sintetizado con la **Web Audio API**.
2. La tarjeta de bloqueo se desvanece y la imagen central se descubre con una animación de *unblur*, escala y *fade-in*.
3. La barra inferior **Arify Player** asciende suavemente desde abajo (*slide-up* a `translateY(0)`).
4. Los botones de navegación (**Meme & Bingo** y **Letra Karaoke**) descienden con suavidad en la cabecera.
5. El reproductor inicia la canción oficial: **"La Ari la lía" - Arixu ft. Ruben**.

---

### 2. Desglose Detallado de Componentes

#### 🎵 Cabecera Superior (`app-header`)
- **Branding Arify:** Logotipo que integra ondas de frecuencia y auriculares dentro de un gradiente violeta neón, acompañado de una insignia de estado.
- **Buscador interactivo:** Input con estética Spotify que filtra o enfoca el contenido en tiempo real.
- **Pestañas de cambio de vista:** Botones píldora que permiten alternar fluidamente entre la vista del archivo visual y la vista inmersiva de letras.
- **Sesión de usuario:** Indicador con avatar circular (`R`) y estado de conexión de **Ruben**.

#### 🌌 Fondo Dinámico Interactivo (Canvas HTML5 + Mesh Aurora)
- **Generador de partículas musicales:** Emite de forma continua notas musicales (♩, ♪, ♫, ♬, 𝄞), rayos de energía y partículas estelares que ascienden con balanceo sinusoidal.
- **Espectro de ondas reactivo:** En la base del fondo se dibuja un ecualizador de ondas sinusoidales que **aumenta su amplitud y velocidad rítmicamente** cuando el audio está en reproducción.
- **Aurora Mesh Glow:** Gradiente radial en respiración continua sobre el fondo Dark Mode (`#121212` y `#181818`).

#### 🖼️ Panel Central y Visor de Imagen
- **Tarjeta de visualización:** Marco de alta resolución con acabado *glassmorphism*, bordes con resplandor neón y sombra profunda.
- **Acciones integradas:**
  - **🔍 Ver en grande:** Despliega el visualizador **Lightbox** a pantalla completa con controles de zoom in/out, restauración de zoom y arrastre.
  - **📥 Descargar imagen:** Descarga directa del archivo en resolución completa original (1254x1254 px).
  - **🎵 Reproducir / Pausar tema:** Control de transporte directo vinculado al reproductor.

#### 🎧 Reproductor "Arify Player" (Barra Inferior Estilo Spotify)
- **Zona izquierda (Metadatos):**
  - Carátula miniatura interactiva (al hacer clic vuelve a la vista de imagen).
  - Título del tema (*"La Ari la lía"*) y nombre de los artistas (*"Arixu ft. Ruben"*).
  - Botón de Like (corazón) con animación *pop*, cambio a morado neón y notificación flotante.
- **Zona central (Controles de Reproducción):**
  - Botón **Play/Pause** circular prominente con brillo morado neón.
  - Botón **Anterior:** Reinicia la canción al segundo 0.
  - Botón **Siguiente:** Salto rápido de +15 segundos.
  - Botones de **Modo Aleatorio** y **Bucle / Repetición**.
  - **Barra de progreso interactiva (Seek Bar):** Permite hacer clic o arrastrar (scrubbing) para moverse por cualquier punto de la canción.
  - **Tooltip flotante:** Muestra la marca de tiempo exacta al pasar el cursor sobre la barra.
  - Tiempos de reproducción en formato digital `mm:ss` (tiempo actual y duración total).
- **Zona derecha (Utilidades):**
  - **Botón de micrófono (Letra):** Alterna el modo Karaoke en pantalla.
  - **Control de volumen:** Deslizador interactivo con relleno púrpura e icono de altavoz para silenciar/activar con un solo clic.
  - **Pantalla completa:** Atajo para abrir la imagen a pantalla completa.

#### 🎤 Modo "Karaoke / Letras Sincronizadas" (Lyrics View)
- Inspirado en la pantalla de letras inmersivas de Spotify:
  - Fondo degradado púrpura profundo (*violet gradient mesh*).
  - Estructuración lírica por estrofas: **Intro, Verso 1, Estribillo, Verso 2, Estribillo y Outro**.
  - **Sincronización en tiempo real:** Conforme avanza el audio, el verso activo se resalta en **negrita**, aumenta su tamaño, cambia a blanco puro y emite un sutil resplandor neón.
  - **Búsqueda por clic:** Al hacer clic en cualquier línea de la letra, el reproductor salta instantáneamente a ese segundo exacto de la canción.
  - **Botones de retorno:** Botón tipo pastilla **"← Volver atrás"** e icono de cierre **"✕"** para regresar a la vista del meme con transición suave sin pausar el audio.
  - **Alternancia (Toggle):** Se puede regresar también pulsando de nuevo en el botón "Letra Karaoke" de la cabecera o en el reproductor.

#### 🔔 Sistema de Notificaciones Flotantes (Toasts)
- Avisos emergentes discretos en la esquina inferior que confirman acciones del usuario:
  - *"✨ ¡Acceso concedido! Archivo desbloqueado."*
  - *"▶ Reproduciendo: La Ari la lía - Arixu ft. Ruben"*
  - *"💜 Añadido a tus canciones favoritas"*
  - Saltos de pista, cambio de volumen y repetición.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Estructura** | HTML5 Semántico | Layout moderno, accesible y sin dependencias externas. |
| **Estilos** | CSS3 Moderno | Variables CSS (Design Tokens), Flexbox, Grid, Glassmorphism, animaciones `cubic-bezier`. |
| **Interactividad** | JavaScript (ES6+) | Lógica modular en Vanilla JS: controlador de audio, eventos de scrubbing, sincronización de letras. |
| **Gráficos** | Canvas API 2D | Motor de partículas y ecualizador de ondas reactivo en tiempo real a 60 FPS. |
| **Audio FX** | Web Audio API | Síntesis procedural de acordes para avisos y feedback sonoro. |
| **Audio Master** | HTML5 Audio + MP3 | Pista estéreo 44.1 kHz a 192 kbps con instrumental y pistas vocales sintetizadas. |

---

## 📁 Estructura del Repositorio

```text
Meme-Ari/
├── index.html              # Estructura semántica de la SPA y todos sus componentes
├── style.css               # Estilos globales, paleta neón, layout Spotify y media queries
├── app.js                  # Lógica de la app: reproductor, canvas, karaoke y lightbox
├── assets/
│   ├── bingo_arixu.png     # Imagen del meme/bingo en alta definición (1254x1254)
│   └── la_ari_la_lia.mp3   # Pista de audio oficial sincronizada con la letra
├── Imagen/
│   └── Arimeme.png         # Archivo gráfico original de respaldo
└── README.md               # Esta documentación técnica y de usuario
```

---

## 🚀 Cómo Iniciar la Web

La aplicación es completamente autónoma y no requiere compilación previa (`npm build`, `webpack`, etc.).

### Opción A: Abrir directamente en el navegador
Simplemente haz doble clic sobre [index.html](file:///home/alumnot/Documentos/Meme-Ari/index.html) o arrástralo a tu navegador (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari o Brave).

### Opción B: Mediante un servidor local ligero
Para una experiencia idéntica a un entorno web de producción:

```bash
# Entra al directorio del proyecto
cd /home/alumnot/Documentos/Meme-Ari

# Inicia un servidor HTTP con Python 3
python3 -m http.server 8080
```

Accede a través de tu navegador a:
`http://localhost:8080`

---

## ⌨️ Atajos y Controles Rápidos

| Control | Acción |
| :--- | :--- |
| **Barra espaciadora** | Reproducir / Pausar el tema actual. |
| **Tecla Escape (`Esc`)** | Cerrar el visor en pantalla completa (Lightbox). |
| **Clic en la barra de progreso** | Saltar al punto exacto de la canción. |
| **Clic en cualquier verso de la letra** | Saltar el audio inmediatamente a esa estrofa. |
| **Icono de altavoz** | Silenciar (Mute) / Restaurar volumen previo. |
| **Clic en la miniatura de la carátula** | Regresar a la visualización central de la imagen. |
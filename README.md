# 🟣 Memerixu - Especial Subtember | Documentación Técnica & Funcional

**Memerixu** es una Single Page Application (SPA) interactiva, inmersiva y de temática gamer/cyberpunk inspirada en la estética de **Fortnite (Cámara Acorazada / Punto Cero / Victoria Magistral)**, diseñada especialmente para el concurso de memes de la comunidad de **ImArixu (Arixu)** durante el evento **Subtember**.

Combina una mecánica de desclasificación progresiva de expedientes con animaciones de desbloqueo, síntesis de audio procedural en tiempo real (Web Audio API), reproductor de clips de vídeo, sliders de puntuación decimal interactivos y un podio 3D para coronar al ganador del concurso.

---

## 🧭 Arquitectura y Flujo de la Experiencia

La plataforma sigue una progresión en tres fases diseñadas para dinamizar el directo de streaming:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BARRA SUPERIOR (NAVBAR)                         │
│  [Logo Memerixu: TOP SECRET]    [Meme & Bingo]    [Arixu • MÍTICO 👑]  │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
    ┌────────────────────────────────▼───────────────────────────────┐
    │  FASE 1: CÁMARA ACORAZADA (Bóveda Sellada)                     │
    │  - Telemetría HUD y contexto del Especial Subtember            │
    │  - Botón: [ DESCLASIFICAR BÓVEDA // REVELAR MEMES ]            │
    └────────────────────────────────┬───────────────────────────────┘
                                     │ (Transición & Desbloqueo)
    ┌────────────────────────────────▼───────────────────────────────┐
    │  FASE 2: GALERÍA DE EXPEDIENTES (9 Cajas Selladas)             │
    │  - Barra de progreso: [ DESCLASIFICADOS: X / 9 ]               │
    │  - Botón rápido: [ ⚡ Revelar Todos ]                          │
    │  - 9 Cajas en modo oculto / contenedor clasificado             │
    │  - Clic en caja ──> Animación + Audio FX ──> Meme Desvelado   │
    │  - Sliders de puntuación interactivos (1.0 al 10.0 en 0.1)     │
    │  - Botones de acción: Zoom Lightbox, Descarga HD y Contexto    │
    │  - Reproductor de vídeo integrado (Expediente ErreDeRamon)     │
    │  - Slot libre reservado para la comunidad (Expediente UsuarioX)│
    └────────────────────────────────┬───────────────────────────────┘
                                     │
    ┌────────────────────────────────▼───────────────────────────────┐
    │  FASE 3: PODIO FINAL DE GANADORES (Victoria Magistral)         │
    │  - Botón inferior: [ 👑 MOSTRAR GANADOR TOP 3 ]               │
    │  - Ordenación matemática automática según notas de los sliders │
    │  - Modal 3D con Pedestales: 🥇 1º Oro, 🥈 2º Plata, 🥉 3º Bronce │
    │  - Fanfarria triunfal procedural + Lluvia de confeti           │
    │  - Acordeón con clasificación completa restante (4º al 9º)     │
    └────────────────────────────────────────────────────────────────┘
```

---

## ✨ Características Principales

### 1. Barra Superior y Ficha de Operador Mítica
- **Identidad visual:** Logotipo `Memerixu` con badge militar pulsante `TOP SECRET // SUBTEMBER`.
- **Navegación:** Botón directo `Meme & Bingo` para volver o enfocar la galería de expedientes.
- **Ficha de Operador (Player Profile Card):**
  - Se activa al pulsar en el botón `[ Arixu • MÍTICO ]`.
  - Tarjeta desplegable con marco dorado legendario, reflejos violetas y fondo desenfocado (`backdrop-blur`).
  - **Cabecera:** Avatar con anillo resplandeciente, badge `👑 CREADORA & STREAMER`, nombre de pantalla **ImArixu**, alias de combate `La Rubia` y mote `AKA: Mamixu`.
  - **Pestaña "Estilo de Juego & Stats":**
    - Puntería con Escopeta (*"99% de disparos a los árboles, 1% headshot instintivo..."*).
    - Habilidad de Construcción (*"¿Construir? Mejor corre y salta..."*).
    - Inventario Favorito (*"6 impulses para regalar al enemigo..."*).
    - Zona de Aterrizaje (*"Cualquier sitio con loot dorado..."*).
    - Radar de estadísticas (Carisma, Puntería, Sigilo, Suerte, etc.).
  - **Código de Creadora:** Botón para copiar el código `ARIXU` con feedback visual inmediato.

---

### 2. Bóveda Sellada (Pantalla Previa de Apertura)
- **Ambientación:** Hero con tipografía militar/sci-fi, radar de telemetría HUD (*Bóveda Sellada*, *Protocolo de Despliegue*, *Subtember*).
- **Desbloqueo:** Botón de apertura central interactivo que oculta la pantalla previa con desvanecimiento y despliega la cuadrícula con una transición suave a 60 FPS.

---

### 3. Galería de Memes con Revelación Individual
- **Modo Oculto Inicial:** Las 9 cajas arrancan como contenedores acorazados sellados (`is-sealed`), con esquinas tecnológicas, barrido de radar, anillo giratorio, candado resplandeciente y el autor del expediente.
- **Animación de Desclasificación (Al pulsar en cada caja):**
  1. **Audio FX Procedural:** Acorde armónico ascendente de despresurización sintetizado en tiempo real con la **Web Audio API** (sin latencia ni descargas externas).
  2. **Flash & Resplandor:** Haz de luz radial cian y blanco barriendo la tarjeta (`.card-reveal-flash`).
  3. **Ráfaga de Partículas:** Chispas holográficas en 360° expandiéndose desde el centro.
  4. **Desintegración:** La compuerta sellada se desvanece con desenfoque dinámico.
  5. **Pop-in Elástico:** El contenido de la tarjeta entra suavemente con efecto de escala y brillo.
- **Barra de Progreso:**
  - Contador interactivo: `🔓 DESCLASIFICADOS: X / 9` con barra animada que avanza en cada revelación.
  - Botón opcional **`[ ⚡ Revelar Todos ]`**: Activa una apertura en cascada escalonada de todos los expedientes restantes.

---

### 4. Sliders de Puntuación con 1 Decimal
- Cada una de las 9 cajas cuenta con un slider interactivo (`range`) configurado del **1.0 al 10.0** con pasos de **0.1** (`step="0.1"`).
- Muestra la nota numérica en tiempo real con un decimal exacto (ej. `8.5 / 10`, `9.2 / 10`, `10.0 / 10`).

---

### 5. Expedientes y Participantes

| EXP | Autor / Título | Formato | Contenido & Particularidades |
| :---: | :--- | :---: | :--- |
| **#01** | **ErreDeRamon** | `WebP` + `MOV` | **Vídeo Clip Extra:** Modal interactivo con reproductor de vídeo HD del momento exacto en Fortnite. |
| **#02** | **Jaratos** | `WebP` | Meme conmemorativo del lore y anécdotas de chat. |
| **#03** | **KidMaujMagno** | `WebP` | Creación sobre partidas en squad y giros en Pisos Picados. |
| **#04** | **LivingBenidorm** | `WebP` | Sustos legendarios y momentos destacados del Subtember. |
| **#05** | **Neeusgoomisiiis** | `WebP` | Momentos de tensión y clips de stream. |
| **#06** | **Raquelvete** | `WebP` | Anécdotas y humor característico de la comunidad. |
| **#07** | **Rubenillo** | `PNG` | Visión técnica de moderación, alertas y producción. |
| **#08** | **Sito** | `WebP` | La legendaria puntería con escopeta de combate. |
| **#09** | **UsuarioX** | `SVG` | **Slot Vacante / Hueco Libre:** Gráfico vectorial de reserva para incorporar un nuevo participante. |

---

### 6. Acciones de Tarjeta & Visores
- **Zoom Lightbox en Pantalla Completa:**
  - Al hacer clic en la imagen de cualquier meme revelado, se abre un visor modal oscuro.
  - Controles de zoom (`+`, `-`, `1:1`), arrastre táctil/ratón y atajo de cierre con tecla `Escape`.
- **Descarga Directa:** Enlace con atributo `download` para obtener el archivo original en resolución nativa.
- **Modal de Contexto:** Ventana flotante con detalles y anécdotas de cada creación. En el caso de ErreDeRamon, reproduce el archivo de vídeo `assets/contexto/Contexto ErredeRamon.mov`.

---

### 7. Podio de Ganadores (Top 3) al Final de la Página
- **Disparador:** Banner al pie de la cuadrícula con trofeo animado y botón: `[ 👑 MOSTRAR GANADOR TOP 3 ]`.
- **Cálculo en Vivo:** Ordena automáticamente los 9 memes según las notas decimales fijadas en los sliders.
- **Pedestales 3D:**
  - **1º Lugar (Oro / Mítico 🥇👑):** Pedestal superior con corona flotante, aureola dorada resplandeciente y título de Campeón.
  - **2º Lugar (Plata 🥈):** Pedestal intermedio con aureola plateada.
  - **3º Lugar (Bronce 🥉):** Pedestal con acabados en bronce cálido.
- **Celebración Audiovisual:**
  - **Fanfarria de Victoria:** Melodía triunfal sintetizada por software con osciladores Web Audio API.
  - **Lluvia de Confeti:** 40 partículas animadas multicolores cayendo por la pantalla.
  - **Interacción:** Clic en cualquier imagen del podio para ampliar en el Lightbox.
  - **Acordeón Desplegable:** Clasificación completa del 4º al 9º puesto con miniaturas y notas.
  - **Modificar Puntuaciones:** Botón para cerrar y volver a los sliders para ajustar decimales y recalcular.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Implementación |
| :--- | :--- | :--- |
| **Estructura** | HTML5 Semántico | Layout accesible, modular y sin frameworks externos. |
| **Estilos** | CSS3 Moderno | Custom Properties (Design Tokens), Flexbox, CSS Grid, Glassmorphism, animaciones aceleradas por GPU. |
| **Lógica** | JavaScript (ES6+ Vanilla) | Controlador de estados, eventos táctiles/ratón, cálculo de rankings y gestión de modales. |
| **Gráficos** | Canvas API 2D & SVG | Fondo con partículas flotantes y gráficos vectoriales adaptables. |
| **Audio FX** | Web Audio API | Síntesis procedural de despresurización sci-fi y fanfarria triunfal sin ficheros de audio externos. |
| **Multimedia** | HTML5 Video & Picture | Formatos modernos (`WebP`, `PNG`, `MOV`, `SVG`). |

---

## 📁 Estructura del Proyecto

```text
Meme-Ari/
├── index.html                   # Documento principal SPA con todos los componentes y modales
├── style.css                    # Hoja de estilos completa (tokens, animaciones, podio, cards)
├── app.js                       # Controlador JS: estado de bóveda, audio FX, sliders y podio
├── assets/
│   ├── memes/                   # Galería de imágenes de los participantes
│   │   ├── ErreDeRamon.webp
│   │   ├── Jaratos.webp
│   │   ├── KidMaujMagno.webp
│   │   ├── LivingBenidorm.webp
│   │   ├── Neeusgoomisiiis.webp
│   │   ├── Raquelvete.webp
│   │   ├── Rubenillo.png
│   │   ├── Sito.webp
│   │   ├── MemeAri.png
│   │   └── placeholder_usuariox.svg  # Gráfico vectorial de slot disponible
│   └── contexto/
│       └── Contexto ErredeRamon.mov  # Clip de vídeo original de ErreDeRamon
└── README.md                    # Esta documentación técnica y funcional
```

---

## 🚀 Puesta en Marcha

La aplicación es completamente autónoma (estática) y no requiere ningún proceso de compilación (`npm`, `vite`, `webpack`, etc.).

### Opción A: Abrir directamente en el navegador
Haz doble clic sobre el archivo [index.html](file:///C:/Users/ruben/Documents/Ari/Meme-Ari/index.html) en tu explorador de archivos para abrirlo en Chrome, Edge, Firefox, Brave o Safari.

### Opción B: Mediante un servidor local ligero
Para una experiencia idéntica a producción con soporte completo de streaming de vídeo:

```bash
# Con Node.js (npx serve)
npx serve .

# O con Python 3
python -m http.server 8080
```

Accede en tu navegador a:  
`http://localhost:8080`

---

## ⌨️ Atajos y Controles de Teclado

| Tecla / Control | Acción |
| :--- | :--- |
| **Escape (`Esc`)** | Cerrar cualquier modal abierto (Lightbox, Perfil de Operador, Contexto, Podio). |
| **Enter / Espacio** | Desclasificar la caja sellada enfocada con el teclado. |
| **Clic fuera del modal** | Cierre automático mediante backdrop interactivo. |
| **Clic en imagen de meme** | Abrir visor Lightbox a pantalla completa con zoom. |

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
    │  FASE 2: GALERÍA DE EXPEDIENTES (15 Cajas Selladas)            │
    │  - Barra de progreso: [ DESCLASIFICADOS: X / 15 ]              │
    │  - Botón rápido: [ ⚡ Revelar Todos ]                          │
    │  - 15 Cajas en modo oculto / contenedor clasificado            │
    │  - Clic en caja ──> Animación + Audio FX ──> Meme Desvelado   │
    │  - Sliders de puntuación interactivos (1.0 al 10.0 en 0.1)     │
    │  - Botones de acción: Zoom Lightbox y Descarga HD              │
    └────────────────────────────────┬───────────────────────────────┘
                                     │
    ┌────────────────────────────────▼───────────────────────────────┐
    │  FASE 3: PODIO FINAL DE GANADORES (Victoria Magistral)         │
    │  - Botón inferior: [ 👑 MOSTRAR GANADOR TOP 3 ]               │
    │  - Ordenación matemática automática según notas de los sliders │
    │  - Modal 3D con Pedestales: 🥇 1º Oro, 🥈 2º Plata, 🥉 3º Bronce │
    │  - Fanfarria triunfal procedural + Lluvia de confeti           │
    │  - Acordeón con clasificación completa restante (4º al 15º)    │
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
- **Modo Oculto Inicial:** Las 15 cajas arrancan como contenedores acorazados sellados (`is-sealed`), con esquinas tecnológicas, barrido de radar, anillo giratorio, candado resplandeciente y el autor del expediente.
- **Animación de Desclasificación (Al pulsar en cada caja):**
  1. **Audio FX Procedural:** Acorde armónico ascendente de despresurización sintetizado en tiempo real con la **Web Audio API** (sin latencia ni descargas externas).
  2. **Flash & Resplandor:** Haz de luz radial cian y blanco barriendo la tarjeta (`.card-reveal-flash`).
  3. **Ráfaga de Partículas:** Chispas holográficas en 360° expandiéndose desde el centro.
  4. **Desintegración:** La compuerta sellada se desvanece con desenfoque dinámico.
  5. **Pop-in Elástico:** El contenido de la tarjeta entra suavemente con efecto de escala y brillo.
- **Barra de Progreso:**
  - Contador interactivo: `🔓 DESCLASIFICADOS: X / 15` con barra animada que avanza en cada revelación.
  - Botón opcional **`[ ⚡ Revelar Todos ]`**: Activa una apertura en cascada escalonada de todos los expedientes restantes.

---

### 4. Sliders de Puntuación con 1 Decimal
- Cada una de las 15 cajas cuenta con un slider interactivo (`range`) configurado del **1.0 al 10.0** con pasos de **0.1** (`step="0.1"`).
- Muestra la nota numérica en tiempo real con un decimal exacto (ej. `8.5 / 10`, `9.2 / 10`, `10.0 / 10`).

---

### 5. Expedientes y Participantes

| EXP | Autor / Título | Formato | Contenido & Particularidades |
| :---: | :--- | :---: | :--- |
| **#01** | **ErreDeRamon** | `WebP` | Momento de Fortnite: "Top Donadores del Mes". La comunidad es familia. |
| **#02** | **Jaratos** | `WebP` | Meme conmemorativo del lore y anécdotas de chat: Hater vs 3 Meses de Sub. |
| **#03** | **KidMaujMagno** | `WebP` | ¡Bienvenido Piyuyin! Cómo Ari ve el stream vs el sótano de baneados. |
| **#04** | **LivingBenidorm** | `WebP` | Esperando a que ImArixu consiga el rango Unreal en Fortnite. |
| **#05** | **Neeusgoomisiiis** | `WebP` | Los Mods del Sótano: programando a base de café para el stream. |
| **#06** | **Raquelvete** | `WebP` | Ponte a estudiar de una vez (#help) vs el directo de Ari. |
| **#07** | **Sito** | `WebP` | Ari y el Chat tranquilos vs Piyu y su bocina (Undertaker). |
| **#08** | **Daniela** | `WebP` | Las Veladoras de Santa Ari: fe ciega para la subida a Unreal. |
| **#09** | **Elenuky8** | `WebP` | Los Stream Snipers vs Arixu: el plan del sniper desbaratado. |
| **#10** | **Ferdinang** | `WebP` | La Ruleta del Ban: 99% Ban vs 1% Timeout y champán de celebración. |
| **#11** | **Franco930910** | `WebP` | La Veladora de Santa Ari a la venta en Mercadona para subir de rango. |
| **#12** | **Karem Bal** | `WebP` | Código ARIXU en la tienda de Fortnite (Formato Drake Meme). |
| **#13** | **Mabelda** | `WebP` | Skin Tryhard de Ari: Godzilla con alas de hada y zapatillas rosa. |
| **#14** | **Nahuel159** | `WebP` | Directo sonriente vs fitness secreto con mancuernas bajo la mesa. |
| **#15** | **Piyuyin6** | `WebP` | ¿Pero y este Men?: El cachondo profesional del chat desatando el caos. |

---

### 6. Acciones de Tarjeta & Visores
- **Zoom Lightbox en Pantalla Completa:**
  - Al hacer clic en la imagen de cualquier meme revelado, se abre un visor modal oscuro con navegación de galería (1 / 15).
  - Controles de zoom (`+`, `-`, `1:1`), flechas de navegación previa/siguiente, arrastre táctil/ratón y atajo de cierre con tecla `Escape`.
- **Descarga Directa:** Enlace con atributo `download` para obtener el archivo original en resolución nativa.

---

### 7. Podio de Ganadores (Top 3) al Final de la Página
- **Disparador:** Banner al pie de la cuadrícula con trofeo animado y botón: `[ 👑 MOSTRAR GANADOR TOP 3 ]`.
- **Cálculo en Vivo:** Ordena automáticamente los 15 memes según las notas decimales fijadas en los sliders.
- **Pedestales 3D:**
  - **1º Lugar (Oro / Mítico 🥇👑):** Pedestal superior con corona flotante, aureola dorada resplandeciente y título de Campeón.
  - **2º Lugar (Plata 🥈):** Pedestal intermedio con aureola plateada.
  - **3º Lugar (Bronce 🥉):** Pedestal con acabados en bronce cálido.
- **Celebración Audiovisual:**
  - **Fanfarria de Victoria:** Melodía triunfal sintetizada por software con osciladores Web Audio API.
  - **Lluvia de Confeti:** 40 partículas animadas multicolores cayendo por la pantalla.
  - **Interacción:** Clic en cualquier imagen del podio para ampliar en el Lightbox.
  - **Acordeón Desplegable:** Clasificación completa del 4º al 15º puesto con miniaturas y notas.
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
| **Multimedia** | Imágenes Web | Formatos modernos (`WebP`, `PNG`, `SVG`). |

---

## 📁 Estructura del Proyecto

```text
Meme-Ari/
├── index.html                   # Documento principal SPA con todos los componentes y modales
├── style.css                    # Hoja de estilos completa (tokens, animaciones, podio, cards)
├── app.js                       # Controlador JS: estado de bóveda, audio FX, sliders y podio
├── assets/
│   └── memes/                   # Galería de imágenes de los 15 participantes
│       ├── ErreDeRamon.webp
│       ├── Jaratos.webp
│       ├── KidMaujMagno.webp
│       ├── LivingBenidorm.webp
│       ├── Neeusgoomisiiis.webp
│       ├── Raquelvete.webp
│       ├── Sito.webp
│       ├── Daniela.webp
│       ├── Elenuky8.webp
│       ├── Ferdinang.webp
│       ├── Franco930910.webp
│       ├── Karem Bal.webp
│       ├── Mabelda.webp
│       ├── Nahuel159.webp
│       └── Piyuyin6.webp
├── Memes Imagenes/              # Copia de seguridad de los artes originales
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
| **Escape (`Esc`)** | Cerrar cualquier modal abierto (Lightbox, Perfil de Operador, Podio). |
| **Enter / Espacio** | Desclasificar la caja sellada enfocada con el teclado. |
| **Clic fuera del modal** | Cierre automático mediante backdrop interactivo. |
| **Clic en imagen de meme** | Abrir visor Lightbox a pantalla completa con zoom. |

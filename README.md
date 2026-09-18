# 🌌 Cosmic Pulse — Interactive Neon Particle Universe

> ✨ Turn simple HTML, CSS & JavaScript into a glowing cosmic experience.

**Cosmic Pulse** is a visually immersive particle animation built using **HTML, CSS, JavaScript, and the HTML5 Canvas API**.

The project creates a dynamic cosmic environment filled with **radial light rays, sparkling particles, glowing energy, moving streaks, and interactive particle explosions**.

Move your cursor around the screen, watch the particles react, and click anywhere to create an energetic burst of light. 💫

---

## ✨ Features

* 🌌 Dynamic cosmic background
* ✨ **900+ sparkling particles**
* ☄️ Moving star particles
* 💫 **420+ radial light rays**
* ⭐ Four-point glowing sparkles
* 🌠 Moving light streaks
* 🔮 Pulsating central energy core
* 🌈 Continuously changing neon colors
* 💥 Interactive particle explosions
* 🖱️ Mouse interaction
* 📱 Touch interaction for mobile devices
* ⚡ Smooth Canvas animation
* 📐 Fully responsive
* 🚫 No external libraries required

---

## 🎨 Visual Effects

### 🌟 Radial Light Rays

Hundreds of individually animated rays originate from the central energy core to create a powerful **cosmic burst effect**.

### ✨ Sparkling Particles

The scene contains multiple particle layers:

* Tiny background stars
* Bright four-point sparkles
* Glowing particles
* Moving light streaks
* Interactive particles

Each particle has its own size, opacity, movement, and animation timing.

### 🔮 Energy Core

At the center of the scene is a glowing energy core created using layered **Canvas radial gradients**.

The core continuously pulses to create a living-energy effect.

### 💥 Particle Explosion

Click anywhere on the canvas to generate an explosion containing **180+ particles** that spread outward from the clicked position.

---

## 🖱️ Interaction

### Desktop

Move your mouse around the canvas to interact with nearby particles.

Click anywhere to create a particle explosion.

### Mobile

Touch the screen to create an energy burst.

The animation automatically adapts to different screen sizes.

---

## 🛠️ Technologies Used

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| HTML5           | Page structure                |
| CSS3            | Layout and visual styling     |
| JavaScript      | Animation and interaction     |
| Canvas API      | Particle rendering            |
| CSS Gradients   | Background effects            |
| JavaScript Math | Particle movement and physics |

---

## 📁 Project Structure

```text
cosmic-pulse/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/cosmic-pulse.git
```

### 2. Open the project

```bash
cd cosmic-pulse
```

### 3. Run the project

Simply open:

```text
index.html
```

in your browser.

No installation or dependencies are required. 🎉

---

## ⚙️ Particle Configuration

You can easily customize the animation from `script.js`.

```javascript
const STAR_COUNT = 900;
const RAY_COUNT = 420;
const SPARKLE_COUNT = 180;
const STREAK_COUNT = 70;
```

### Increase the stars

```javascript
const STAR_COUNT = 1500;
```

### Increase the radial rays

```javascript
const RAY_COUNT = 700;
```

### Add more sparkles

```javascript
const SPARKLE_COUNT = 300;
```

### Add more light streaks

```javascript
const STREAK_COUNT = 120;
```

Experiment with these values to create your own cosmic style. 🌌

---

## 🎨 Customize the Colors

The project automatically changes its neon hue over time.

You can change the starting color by modifying:

```javascript
let hue = 190;
```

You can also customize the hue transition:

```javascript
hue =
    (
        190 +
        Math.sin(time * 0.00022) * 150 +
        360
    ) % 360;
```

Try different starting values such as:

```javascript
let hue = 280;
```

for a purple cosmic theme, or:

```javascript
let hue = 40;
```

for a golden energy effect.

---

## 💥 Create Your Own Explosion

The explosion is generated when the canvas is clicked:

```javascript
canvas.addEventListener(
    "click",
    (event) => {

        createExplosion(
            event.clientX,
            event.clientY
        );
    }
);
```

You can increase the explosion particles by changing:

```javascript
for (let i = 0; i < 180; i++) {
```

For example:

```javascript
for (let i = 0; i < 300; i++) {
```

---

## 📱 Responsive Design

Cosmic Pulse works across:

* 💻 Desktop
* 🖥️ Large screens
* 📱 Mobile
* 📲 Tablets

The Canvas automatically resizes when the browser window changes:

```javascript
window.addEventListener("resize", resize);
```

---

## 🧠 How It Works

The animation is divided into several layers:

```text
                 ✦ Sparkles
                     ↓
            ☄️ Light Streaks
                     ↓
          ✨ Star Particles
                     ↓
        💫 Radial Light Rays
                     ↓
             🔮 Energy Core
                     ↓
              🌌 Background
```

Each animation frame redraws these layers and updates the particle positions.

The main animation loop is:

```javascript
function animate(time) {

    drawRays(time);

    drawStars(time);

    drawStreaks();

    drawSparkles(time);

    drawCore(time);

    drawExplosions();

    requestAnimationFrame(animate);
}
```

---

## 📸 Preview

Add your project screenshot here:

```markdown
![Cosmic Pulse Preview](preview.png)
```

You can also add a GIF of the animation:

```markdown
![Cosmic Pulse Animation](cosmic-pulse.gif)
```

---

## 🌟 Why This Project?

This project demonstrates how powerful visual experiences can be created using **vanilla JavaScript and Canvas** without depending on animation frameworks.

It is useful for learning:

* Canvas rendering
* Particle systems
* Radial gradients
* Animation loops
* Mouse events
* Touch events
* Basic particle physics
* Dynamic color generation
* Responsive canvas design

---

## 🔮 Future Improvements

Some ideas you can add later:

* 🎵 Music-reactive particles
* 🎚️ Particle control panel
* 🌌 Multiple galaxy modes
* 🌀 Rotating galaxy rings
* 🖱️ Advanced mouse physics
* 🌠 Random shooting stars
* 🎨 Color theme selector
* 🔊 Sound effects
* 📸 Screenshot/export button
* 🌐 Interactive 3D version

---

## 💡 Inspiration

Cosmic Pulse is designed as a creative front-end experiment inspired by:

**space + energy + particles + light + motion**

The goal is to transform simple browser technologies into an immersive visual experience.

---

## 👨‍💻 Built With

**HTML5 • CSS3 • JavaScript • Canvas API**

No frameworks.
No external libraries.
Just creative coding. ✨

---

## 📜 License

This project is available for learning, experimentation, and personal projects.

Feel free to modify the code and create your own version.

---

## ⭐ Support

If you enjoyed this project:

⭐ Star the repository
🍴 Fork the project
📤 Share it with other developers
💬 Experiment with the particle settings

---

### ✨ Keep Coding. Keep Creating. Keep Glowing. 🌌

**#HTML #CSS #JavaScript #Canvas #CreativeCoding #WebAnimation #Particles #FrontendDevelopment**

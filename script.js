
const canvas = document.getElementById("cosmos");
const ctx = canvas.getContext("2d");

let width;
let height;

let centerX;
let centerY;

let particles = [];
let rays = [];
let explosions = [];

let mouse = {
    x: 0,
    y: 0,
    active: false
};

let hue = 150;

const PARTICLE_COUNT = 520;
const RAY_COUNT = 180;


// ===============================
// RESIZE
// ===============================

function resize() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    centerX = width / 2;
    centerY = height / 2;

    createParticles();
    createRays();
}

window.addEventListener("resize", resize);


// ===============================
// RANDOM
// ===============================

function random(min, max) {
    return Math.random() * (max - min) + min;
}


// ===============================
// PARTICLES
// ===============================

function createParticles() {

    particles = [];

    const maxRadius =
        Math.min(width, height) * 0.43;

    for (let i = 0; i < PARTICLE_COUNT; i++) {

        const angle =
            Math.random() * Math.PI * 2;

        const radius =
            Math.pow(Math.random(), 0.55) * maxRadius;

        particles.push({

            angle: angle,

            radius: radius,

            size: random(0.4, 2.2),

            speed: random(0.0005, 0.002),

            alpha: random(0.25, 1),

            twinkle:
                random(0.01, 0.04),

            phase:
                Math.random() * Math.PI * 2

        });
    }
}


// ===============================
// ENERGY RAYS
// ===============================

function createRays() {

    rays = [];

    const maxRadius =
        Math.min(width, height) * 0.42;

    for (let i = 0; i < RAY_COUNT; i++) {

        rays.push({

            angle:
                (Math.PI * 2 / RAY_COUNT) * i
                + random(-0.015, 0.015),

            length:
                random(maxRadius * 0.45, maxRadius),

            width:
                random(0.3, 1.3),

            alpha:
                random(0.08, 0.35),

            speed:
                random(0.001, 0.004),

            phase:
                Math.random() * 10

        });
    }
}


// ===============================
// STAR BACKGROUND
// ===============================

function drawStars(time) {

    for (let particle of particles) {

        particle.angle += particle.speed;

        const x =
            centerX +
            Math.cos(particle.angle) *
            particle.radius;

        const y =
            centerY +
            Math.sin(particle.angle) *
            particle.radius;

        const twinkle =
            0.5 +
            Math.sin(
                time * particle.twinkle +
                particle.phase
            ) * 0.5;

        let glowDistance = 0;

        if (mouse.active) {

            glowDistance =
                Math.hypot(
                    x - mouse.x,
                    y - mouse.y
                );
        }

        const interaction =
            Math.max(
                0,
                1 - glowDistance / 220
            );

        const size =
            particle.size +
            interaction * 2;

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `hsla(
                ${hue + 30},
                100%,
                ${75 + interaction * 25}%,
                ${particle.alpha * twinkle}
            )`;

        ctx.fill();

        if (interaction > 0.2) {

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                size * 4,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `hsla(
                    ${hue},
                    100%,
                    70%,
                    ${interaction * 0.08}
                )`;

            ctx.fill();
        }
    }
}


// ===============================
// ENERGY RAYS
// ===============================

function drawRays(time) {

    const maxRadius =
        Math.min(width, height) * 0.45;

    for (let ray of rays) {

        ray.angle += ray.speed;

        const pulse =
            0.75 +
            Math.sin(
                time * 0.002 +
                ray.phase
            ) * 0.25;

        const length =
            ray.length * pulse;

        const startRadius = 15;

        const x1 =
            centerX +
            Math.cos(ray.angle) *
            startRadius;

        const y1 =
            centerY +
            Math.sin(ray.angle) *
            startRadius;

        const x2 =
            centerX +
            Math.cos(ray.angle) *
            length;

        const y2 =
            centerY +
            Math.sin(ray.angle) *
            length;

        const gradient =
            ctx.createLinearGradient(
                x1,
                y1,
                x2,
                y2
            );

        gradient.addColorStop(
            0,
            `hsla(${hue},100%,85%,0.8)`
        );

        gradient.addColorStop(
            0.25,
            `hsla(${hue},100%,70%,0.25)`
        );

        gradient.addColorStop(
            1,
            `hsla(${hue},100%,60%,0)`
        );

        ctx.beginPath();

        ctx.moveTo(x1, y1);

        ctx.lineTo(x2, y2);

        ctx.strokeStyle = gradient;

        ctx.lineWidth =
            ray.width * pulse;

        ctx.stroke();
    }
}


// ===============================
// CENTRAL CORE
// ===============================

function drawCore(time) {

    const pulse =
        1 +
        Math.sin(time * 0.006) * 0.12;

    const radius =
        22 * pulse;

    // Outer glow

    const outer =
        ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            radius * 7
        );

    outer.addColorStop(
        0,
        `hsla(${hue},100%,90%,0.9)`
    );

    outer.addColorStop(
        0.15,
        `hsla(${hue},100%,75%,0.45)`
    );

    outer.addColorStop(
        0.4,
        `hsla(${hue},100%,60%,0.15)`
    );

    outer.addColorStop(
        1,
        `hsla(${hue},100%,50%,0)`
    );

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY,
        radius * 7,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = outer;

    ctx.fill();


    // Inner core

    const core =
        ctx.createRadialGradient(
            centerX - 5,
            centerY - 5,
            0,
            centerX,
            centerY,
            radius
        );

    core.addColorStop(
        0,
        "rgba(255,255,255,1)"
    );

    core.addColorStop(
        0.2,
        `hsla(${hue},100%,95%,1)`
    );

    core.addColorStop(
        0.65,
        `hsla(${hue},100%,70%,0.9)`
    );

    core.addColorStop(
        1,
        `hsla(${hue},100%,50%,0)`
    );

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY,
        radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = core;

    ctx.fill();


    // White center

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY,
        5 * pulse,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "white";

    ctx.shadowBlur = 30;

    ctx.shadowColor =
        `hsl(${hue},100%,85%)`;

    ctx.fill();

    ctx.shadowBlur = 0;
}


// ===============================
// EXPLOSIONS
// ===============================

function createExplosion(x, y) {

    for (let i = 0; i < 100; i++) {

        const angle =
            Math.random() *
            Math.PI *
            2;

        explosions.push({

            x: x,

            y: y,

            angle: angle,

            speed: random(1, 7),

            radius: 1,

            life: 1,

            size: random(0.5, 2)

        });
    }
}


function drawExplosions() {

    for (
        let i = explosions.length - 1;
        i >= 0;
        i--
    ) {

        const p = explosions[i];

        p.radius += p.speed;

        p.life -= 0.018;

        p.x +=
            Math.cos(p.angle) *
            p.speed;

        p.y +=
            Math.sin(p.angle) *
            p.speed;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `hsla(
                ${hue},
                100%,
                85%,
                ${p.life}
            )`;

        ctx.fill();

        if (p.life <= 0) {

            explosions.splice(i, 1);
        }
    }
}


// ===============================
// MOUSE
// ===============================

window.addEventListener(
    "mousemove",
    (event) => {

        mouse.x = event.clientX;
        mouse.y = event.clientY;

        mouse.active = true;
    }
);

window.addEventListener(
    "mouseleave",
    () => {

        mouse.active = false;
    }
);


// ===============================
// CLICK
// ===============================

canvas.addEventListener(
    "click",
    (event) => {

        createExplosion(
            event.clientX,
            event.clientY
        );
    }
);


// ===============================
// TOUCH
// ===============================

canvas.addEventListener(
    "touchmove",
    (event) => {

        const touch =
            event.touches[0];

        mouse.x = touch.clientX;
        mouse.y = touch.clientY;

        mouse.active = true;
    },
    { passive: true }
);

canvas.addEventListener(
    "touchstart",
    (event) => {

        const touch =
            event.touches[0];

        mouse.x = touch.clientX;
        mouse.y = touch.clientY;

        mouse.active = true;

        createExplosion(
            touch.clientX,
            touch.clientY
        );
    },
    { passive: true }
);


// ===============================
// ANIMATION
// ===============================

function animate(time) {

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    // Slowly change cosmic color

    hue =
        (150 +
            Math.sin(time * 0.00025) * 130 +
            360) % 360;


    // Dark space

    const background =
        ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            Math.max(width, height) * 0.7
        );

    background.addColorStop(
        0,
        `hsla(${hue},50%,12%,0.45)`
    );

    background.addColorStop(
        0.5,
        "#050816"
    );

    background.addColorStop(
        1,
        "#01030a"
    );

    ctx.fillStyle = background;

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    drawStars(time);

    drawRays(time);

    drawCore(time);

    drawExplosions();


    requestAnimationFrame(animate);
}


// ===============================
// START
// ===============================

resize();

requestAnimationFrame(animate);


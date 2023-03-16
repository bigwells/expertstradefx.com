
     /* background animation start here */

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.bg').appendChild(canvas);

let w, h;
function updateCanvasSize() {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
}
window.addEventListener('resize', updateCanvasSize);
updateCanvasSize();

let particles = [];
const particleCount = 200;

class Particle {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.radius = Math.random() * 3 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.x = w;
    }
    if (this.x > w) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = h;
    }
    if (this.y > h) {
      this.y = 0;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < particleCount; i++) {
    particles[i].update();
    particles[i].draw();
  }

  requestAnimationFrame(animate);
}

init();
animate();

       /* background animation end here */
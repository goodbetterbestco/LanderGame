console.log('Lunar Landing: Starship Edition is starting!');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
if (!ctx) {
  console.error('Failed to get 2D context for canvas');
} else {
  console.log('Canvas context created successfully');
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'black';
document.body.appendChild(canvas);
console.log('Canvas appended to body, width:', canvas.width, 'height:', canvas.height);

let starship = {
  x: canvas.width / 2,
  y: canvas.height, // Start at ground, adjust in first loop
  velocityY: 0,
  fuel: 100,
};

const GRAVITY = 0.1; // Pixels per frame
const THRUST = 0.2; // Reduced for control
const MAX_VELOCITY = 5; // Cap maximum upward velocity
let thrusting = false;
let firstRun = true;

function gameLoop() {
  if (firstRun) {
    starship.y = canvas.height - 200; // Set starting position on first run
    firstRun = false;
  }

  starship.velocityY += GRAVITY;
  if (thrusting && starship.fuel > 0) {
    starship.velocityY -= THRUST;
    starship.fuel -= 0.1;
    starship.velocityY = Math.max(-MAX_VELOCITY, starship.velocityY); // Limit upward speed
  }

  starship.y += starship.velocityY;

  if (starship.y > canvas.height) {
    starship.y = canvas.height;
    starship.velocityY *= -0.5; // Slight bounce
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(starship.x - 20, starship.y - 20, 40, 40);
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, canvas.height - 10, canvas.width, 10);

  ctx.fillStyle = 'white';
  ctx.font = '16px Arial';
  if (ctx.measureText) {
    ctx.fillText(`Fuel: ${Math.max(0, starship.fuel.toFixed(1))}`, 10, 30);
  } else {
    console.warn('Text rendering not supported');
  }

  console.log('Game loop running, starship position:', starship.x.toFixed(0), starship.y.toFixed(0));

  requestAnimationFrame(gameLoop);
}

console.log('Starting game loop');
requestAnimationFrame(gameLoop);

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    thrusting = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    thrusting = false;
  }
});

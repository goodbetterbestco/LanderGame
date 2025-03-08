// Get canvas and context
const canvas = document.getElementById('gameCanvas');
if (!canvas) {
    console.error('Canvas element not found! Check index.html for <canvas id="gameCanvas">');
    throw new Error('Canvas not found');
}
const ctx = canvas.getContext('2d');
if (!ctx) {
    console.error('Failed to get 2D context from canvas!');
    throw new Error('Context not found');
}

// Set canvas size to match viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Starship state
const starship = {
    x: canvas.width / 2 - 10, // Center horizontally
    y: canvas.height - 200, // Start 200px above ground
    width: 20,
    height: 20,
    velocityY: 0,
    fuel: 100
};

// Game state
let isThrusting = false;

// Event listeners for controls
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent browser scrolling
        isThrusting = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        isThrusting = false;
    }
});

// Game loop
function update() {
    // Physics update
    if (isThrusting && starship.fuel > 0) {
        starship.velocityY -= 0.2; // Apply thrust
        starship.fuel -= 0.1; // Decrease fuel
        if (starship.velocityY < -5) starship.velocityY = -5; // Cap upward velocity
    }
    starship.velocityY += 0.1; // Apply gravity
    starship.y += starship.velocityY; // Update position

    // Ground collision
    const groundY = canvas.height - 50; // Ground height is 50px
    if (starship.y + starship.height > groundY) {
        starship.y = groundY - starship.height;
        starship.velocityY *= -0.5; // Bounce
    }

    // Clear canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw starship (white rectangle)
    ctx.fillStyle = 'white';
    ctx.fillRect(starship.x, starship.y, starship.width, starship.height);

    // Draw ground (gray rectangle)
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    // Draw fuel display
    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.fillText(`Fuel: ${starship.fuel.toFixed(1)}`, 10, 20);

    // Request next frame
    requestAnimationFrame(update);
}

// Start the game loop
update();

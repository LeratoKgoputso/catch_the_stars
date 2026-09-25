// Get the canvas from HTML
const canvas = document.getElementById("gameCanvas");

// Get the drawing area of the canvas
const ctx = canvas.getContext("2d");

// Player properties
const player = {
    x: 350,
    y: 440,
    width: 100,
    height: 30
};

// Draw the player
function drawPlayer() {
    ctx.fillStyle = "orange";
    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}

// Draw the game
function drawGame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player
    drawPlayer();
}

// Start the game
drawGame();
# ⭐ Catch the Stars

A beginner JavaScript browser game where the player controls a basket
and catches falling stars.

## Technologies

- HTML5
- CSS3
- JavaScript
- HTML Canvas

## Game Objective

Catch as many falling stars as possible.

## Controls

- Left Arrow - Move left
- Right Arrow - Move right

## Game Rules

- The player starts with 3 lives.
- Catching a star increases the score.
- Missing a star reduces a life.
- The game ends when all lives are lost.

## Project Structure

catch-the-stars/
│
├── index.html
├── style.css
├── stars.js
└── README.md

## Current Progress

- [x] Create project
- [x] Create HTML structure
- [x] Create game canvas
- [x] Connect JavaScript
- [x] Create player
- [x] Add player movement
- [x] Add boundaries
- [x] Create falling stars
- [x] Star reset
- [ ] Add collision detection
- [ ] Add scoring
- [ ] Add lives
- [ ] Add game over
- [ ] Add restart
- [ ] Add increasing difficulty
- [ ] Add sound
- [ ] Polish game

## Step 3: Player Movement

The player can move horizontally using the keyboard.

### Controls

- Left Arrow - Move left
- Right Arrow - Move right

The player's movement is controlled using JavaScript keyboard events.
## Step 5: Star Creation

A star object was created using JavaScript.

The star has:

- X position
- Y position
- Size

The star is currently displayed near the top of the game canvas.
## Step 6: Falling Star

A game loop was introduced using `requestAnimationFrame()`.

The star's Y position is continuously increased using its falling speed.

This creates continuous downward movement.
## Step 7: Star Reset

When the star reaches the bottom of the canvas, it is moved back
to the top.

A random X position is generated using `Math.random()` so the star
can appear in different horizontal positions.

This creates unpredictable star positions for the player.

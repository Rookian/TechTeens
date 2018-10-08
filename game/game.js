let figurImage;
let mySprite;
let vx;
let vy;
let x;
let y;
const groundY = 400;

// Sprite
let sx = 0;
let sy = 0;
const spriteWidth = 32;
const spriteHeight = 27;
const speed = 0.1;
let index = 0;
const amountOfPics = 8

let images = [];

function preload(){
  figurImage = loadImage('images/Figur2.png');
  mySprite = loadImage('images/Animation.png'); // Muss in preload stehen
}

function setup() {
  for (let index = 0; index < amountOfPics; index++) {
    let image = mySprite.get(sx, 0, spriteWidth, spriteHeight);
    images.push(image);
    sx = sx + spriteWidth;
  }

  createCanvas(windowWidth, windowHeight);
  background(0);
  vx = 0;
  vy = 0;
  x = 0;
  y = groundY;
}

function draw() {

  x = x + vx;
  y = y + vy;

  if (y <= 100) {
    vy += 5;
  }
  if (y >= groundY) {
    vy = 0;
    if (keyIsDown(UP_ARROW)) {
      this.jump();
    }
  }

  background(0);
  stroke(100, 200, 100);
  line(0, groundY + figurImage.height, windowWidth, groundY + figurImage.height);

  image(figurImage, x, y);
  index += speed;
  scale(2);
  image(images[floor(index) % images.length], x, y );
}

function keyPressed() {
  console.log("keyPressed");
  if (keyCode === LEFT_ARROW) {
    vx = -10;
  } else if (keyCode === RIGHT_ARROW) {
    vx = 10;
  }
  else if (keyCode === UP_ARROW) {
    this.jump();
  }
}

function jump() {
  if (y === groundY) {
    vy -= 20;
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
    vx = 0;
  }
}
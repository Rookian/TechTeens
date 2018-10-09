let figurImage;
let mySprite;
let vx;
let vy;
let x;
let y;
const groundY = 400;

let spriteAni;

function preload() {
  figurImage = loadImage('images/Figur2.png');
  mySprite = loadImage('images/dog/walk.png'); // Muss in preload stehen
}

function setup() {
  const images = Sprite.getSpriteImages(15, mySprite, 158, 197);
  spriteAni = new Sprite(images, 0.4, 100, 200);

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

  spriteAni.show();
  spriteAni.animate();
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

class Sprite {
  constructor(images, speed, x, y) {
    this.images = images;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.index = 0;
  }

  show() {
    image(this.images[floor(this.index) % this.images.length], this.x, this.y);
  }

  animate() {
    this.x = this.x + 5;
    if (this.x > windowWidth + this.images[0].width){
      this.x = -300;
    }

    this.index += this.speed;
  }

  static getSpriteImages(amountOfPics, spriteImage, width, height) {
    let images = [];
    let sx = 0;
    for (let index = 0; index < amountOfPics; index++) {
      let image = spriteImage.get(sx, 0, width, height);
      images.push(image);
      sx = sx + width;
    }

    return images;
  }
}
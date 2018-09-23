let figurImage;
let vx;
let vy;
let x;
let y;
const groundY = 400;

function setup() {
  figurImage = loadImage('images/Figur2.png');
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
    if (keyIsDown(UP_ARROW)){
      this.jump();
    }
  }

  background(0);
  fill(255,0,130);
  line(0, groundY, windowWidth, groundY);
  ellipse(150, 150, 100, 100);
  
  image(figurImage, x, y);
  console.log(vy)
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
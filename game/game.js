let figurImage;
let vx;
let vy;
let x;
let y;

function setup() {
  figurImage = loadImage('images/Figur2.png');
  createCanvas(windowWidth, windowHeight);
  background(0);
  vx = 0;
  vy = 0;
  x = 0;
  y = 0;
}

function draw() {

  x = x + vx;
  y = y + vy;

  if (keyIsDown(LEFT_ARROW)) {
    vx = -10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    vx = 10;
  }
  else if (keyIsDown(UP_ARROW)) {
    vy = -10;
  } else if (keyIsDown(DOWN_ARROW)) {
    vy = 10;
  }

  background(0);
  image(figurImage, x, y, 514, 586);
}

function keyPressed() {

}

function keyReleased() {
  vx = 0;
  vy = 0;
}
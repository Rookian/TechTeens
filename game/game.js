const groundY = 400;

let figureImage;
let figure;

let dogImage;
let dog;

function preload() {
  figureImage = loadImage('images/Figur2.png');
  dogImage = loadImage('images/dog/walk.png'); // Muss in preload stehen
}

function setup() {
  const images = Sprite.getSpriteImages(15, dogImage, 158, 197);
  dog = new Sprite(images, 0.4, 0, groundY + 112);
  figure = new Sprite([figureImage], 0, 200, groundY)

  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  stroke(100, 200, 100);
  line(0, groundY + figureImage.height, windowWidth, groundY + figureImage.height);

  figure.show();
  figure.animate();

  dog.show();
  dog.animate();
}

function keyPressed() {
  dog.keyPressed(keyCode);
  figure.keyPressed(keyCode);
}

function keyReleased() {
  dog.keyReleased(keyCode);
  figure.keyReleased(keyCode);
}


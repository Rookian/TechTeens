const groundY = 400;

let figureImage;
let figure;

let walkImage;
let dog;
let idleImage;
let jumpImage;

function preload() {
  // Muss in preload stehen
  figureImage = loadImage('images/Figur2.png');
  walkImage = loadImage('images/dog/walk.png'); 
  idleImage = loadImage('images/dog/idle.png');
  jumpImage = loadImage('images/dog/jump.png');
}

function setup() {
  const walkImages = Sprite.getSpriteImages(15, walkImage, 158, 197);
  const idleImages = Sprite.getSpriteImages(8, idleImage, 204, 176);
  const jumpImages = Sprite.getSpriteImages(2, jumpImage, 122, 198)
  dog = new Sprite(idleImages, walkImages, jumpImages, 0.4, 0, groundY + 112);
  figure = new Sprite([figureImage], [figureImage], [figureImage], 0, 200, groundY)

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


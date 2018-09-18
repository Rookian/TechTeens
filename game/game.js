let figurImage;
function setup() {
  figurImage = loadImage('images/Figur.png');
  createCanvas(window.screen.width, window.screen.height);
  background(0);
}

function draw() {
  image(figurImage, 0, 0, 514, 586);
}
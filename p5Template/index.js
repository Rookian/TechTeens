/// <reference path="./p5.global-mode.d.ts" />

let x = 0;
let wave;
function setup() {
    createCanvas(windowWidth, windowHeight);
    wave = new p5.TriOsc(0);
    wave.setType('');
   
   
    wave.start();
}

function draw() {
    background(255);
    wave.freq(x + 200);
    wave.amp(x/100/3);
    if (x < 400){
        x += 1;
    }   
    else {
        wave.stop();
    }

    fill(200,100,100);
    rect(x, 200, 300, 400, 10, 10, 10, 10);

    fill(200,100,200);
    ellipse(300, 300, x, x / 3  );
}

function mousePressed(){
    fill(0,0,0);
    ellipse(mouseX, mouseY, 50, 50);
    return false;
}
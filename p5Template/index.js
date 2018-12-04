/// <reference path="./p5.global-mode.d.ts" />

// Dokumentation
// https://p5js.org/
// https://p5js.org/reference/#group-Shape (2D Primitives)
// https://p5js.org/examples/
// https://p5js.org/examples/data-variables.html

// https://github.com/Rookian/TechTeens/blob/master/p5js%20Cheat%20Sheet.md 

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // Schwarzer Hintergrund
    background(0);

    // Rotes Rechteck
    fill(255, 10, 75);
    rect(200, 200, 300, 400);

    // Weißer Text
    fill(255,255,255);
    textSize(100);
    text("Guten morgen :)", 300, 300);
}
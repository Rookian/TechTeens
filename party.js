/// <reference path="./p5.global-mode.d.ts" />
let angle = 0;
let x = 0;
let y = 0;
let snowflakes = []; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(240);
    noStroke();
    
}

function draw() {
    background(0);

    noCursor();
    x = lerp(random(x, x + 30), mouseX, 0.05);
    y = lerp(random(y, y + 30), mouseY, 0.05);

    let t = frameCount / 60; // update time

    // create a random number of snowflakes each frame
    for (var i = 0; i < random(5); i++) {
        const color = { r: random(0, 255), g: random(0, 255), b: random(0, 255) };
        const snow = new snowflake();
        snow.color = color;
        snowflakes.push(snow); // append snowflake object
    }

    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
        flake.update(t); // update snowflake position
        fill(flake.color.r, flake.color.g, flake.color.b);
        flake.display(); // draw snowflake
    }

    push();


    textStyle(BOLD);
    textSize(200);
    fill(255, 10, 100);
    text("TechTeens", x, y);

    textSize(210);
    fill(255, 255, 255);
    text("TechTeens", x - 10, y - 10);
    pop();
}

function mousePressed() {

}

function keyPressed() {
    // keyCodes unter: http://keycode.info/
    if (keyCode == 32) {
        background(random(1, 255), random(1, 255), random(1, 255));
    }
}

// snowflake class
function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(10, 70);
    this.color = { r: random(0, 255), g: random(0, 255), b: random(0, 255) };

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function (time) {
        // x position follows a circle
        let w = 0.6; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);

        // different size snowflakes fall at slightly different y speeds
        this.posY += pow(this.size, 0.5);

        // delete snowflake if past end of screen
        if (this.posY > height) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function () {
        ellipse(this.posX, this.posY, this.size);
    };
}

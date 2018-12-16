# p5js Cheat Sheet

## Aufbau

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

}
```



Die Funktion `setup()` wird **eimal** ausgeführt und dient dazu, um Grundeinstellungen wie zum Beispiel die Größe des Canvas zu setzen.

Die Function `draw()` wird **ständig** ausgeführt (mehr mals pro Sekunde). In dieser Funktion ruft man sämtliche Methoden zum Zeichnen von Formen oder Bildern auf. 

Sowohl `setup()` als auch `draw()` werdwen von der p5.js Bibliothek aufgerufen und **dürfen damit nicht selbst aufgerufen werden**.

/// <reference path="./p5.global-mode.d.ts" />
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
}

function draw() {
    fill(random(0, 255), 0, random(140, 255));
    background(255);
    rect(100, 200, 300, 400);
}

function mousePressed() {
    
}

// Maus
// Maus gedrückt 
//function mousePressed()


// mouseX, mouseY --> Koordinaten der Maus

// Zufallszahlen
// random(von, bis);

// Blinken
// Framerate auf niedrigeren Wert stellen frameRate(10); 

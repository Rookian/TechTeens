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

## Anzahl der Bilder einstellen 

Bspw. 10 Bilder pro Sekunde darstellen
```javascript
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
}
```
 
## Zufallszahlen
random(von, bis);

### Bspw. Zufallszahlen von 1 bis 5:
```javascript
let meineZahl = random(1, 5);
```
### Bspw. Zufallsfarbe:
```javascript
function draw() {
  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(10, 10, 100, 100);
}
```


 
## Mausinteraktionen
## Mausgdrückt

Einmalig:
```javascript
function mousePressed() {
  // Code der ausgeführt werden soll
}
```
Dauerhaft:

```javascript
function draw() {
  if (mouseIsPressed) {
    // Code der ausgeführt werden soll
  }
}
```

## Tastaturinteraktion
Einmalig:
```javascript
function keyPressed() {
  // keyCodes unter: http://keycode.info/
  if (keyCode == 32) {
      // Code der ausgeführt werden soll, wenn die Leertaste gedrückt wurden ist
  }
}
```
Dauerhaft:

```javascript
function draw() {
  if (keyIsPressed) {
    // Code der ausgeführt werden soll
  }
}
```

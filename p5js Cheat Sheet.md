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

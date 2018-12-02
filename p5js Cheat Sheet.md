# p5js Cheat Sheet

## Aufbau

```javascript
function setup() {

}

function draw() {

}
```

Sowohl `setup()` als auch `draw()` wird von der p5.js Bibliothek aufgerufen und **darf damit nicht selbst aufgerufen werden**.

Die Methode `setup()` wird **eimal** ausgeführt und dient dazu, um Grundeinstellungen wie zum Beispiel die Größe des Canvas zu setzen.

Die Methode `draw()` wird **ständig** ausgeführt (mehr mals pro Sekunde). In dieser Methode ruft man sämtliche Methoden zum Zeichnen von Formen oder Bildern auf. 

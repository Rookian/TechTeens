# TechTeens

Page: https://techteens.z6.web.core.windows.net/


# Javascript Cheat Sheet
siehe auch
+ https://htmlcheatsheet.com/js/
+ https://www.cheatography.com/pyro19d/cheat-sheets/javascript/
+ https://wiki.selfhtml.org/wiki/JavaScript/Funktion
+ https://www.w3schools.com/js/default.asp

## Typen
+ *Number* (Zahl)
+ *String* (Text)
+ *Boolean*  (*True*=Wahr bzw. *False*=Falsch)

## Operatoren
|Operator | Bedeutung                   | Beispiel          |
|---------|-----------------------------|---------------    |
| =       | Wert zu weisen              | `let a = 5;`  |
| +       | Addieren von Zahlen         | `let a = b + 1;`  |
| -       | Subtrahieren von Zahlen     | `let a = b - 1;`  |
| *       | Multiplizieren von Zahlen   | `let a = b * 1;`  |
| /       | Dividieren von Zahlen       | `let a = b / 1;`  |
| +=      | Addieren von Zahlen mit sich selbst          | `a += 5;` Ist das gleiche wie `a = a + 5;` |
| -=      | Subtrahieren von Zahlen mit sich selbst      | `a -= 5;` Ist das gleiche wie `a = a - 5;` |
| *=      | Multiplizieren von Zahlen mit sich selbst      | `a *= 5;` Ist das gleiche wie `a = a * 5;` |
| /=      | Subtrahieren von Zahlen mit sich selbst      | `a /= 5;` Ist das gleiche wie `a = a / 5;` |
| ++      | Inkrementieren      | `a++;` Ist das gleiche wie `a = a + 1;` |
| --      | Dekrementieren      | `a--;` Ist das gleiche wie `a = a - 1;` |

## Kommentare
Kommentare (`//` bzw. `/* */`) werden nicht ausgeführt und dienen als Beschreibung des Quellcodes.
Kommentare werden grün angezeigt.

### Variable `name` näher beschreiben
```javascript
// Name der Spielfigur
let name; 
```
## Eine Codezeile auskommentieren
```javascript
// let a = 5 
```

## Einen Codeblock auskommentieren
```javascript
/*
let a;
let b;
let c;
*/
```

## Variablen
Variablen dienen zur **Wiederverwendung** von Werten und zur besseren **Strukturierung** von Programmcode. Bspw. könnte man sich die aktuelle Punktzahl oder die Anzahl an Leben in einer Variable speichern.

Variablen können **deklariert**, **zu gewiesen** oder **berechnet** werden.

### Schlüsselwörter
+ `const` (konstante, also sich nicht ändernde Werte)
+ `let` (nicht konstante Werte, wird meistens genutzt)
+ `var` (altes Javascript, **nicht mehr nutzen**)

### Variablen deklarieren und zuweisen
Variablen dürfen nicht mit Sonderzeichen oder Zahlen beginnen. Variablen sollten immer kleingeschrieben werden.

#### Deklaration:
```javascript
let name;
```

#### Deklarieren und zuweisen:
```javascript
let a = 1;
const pi = 3.14;
```

#### Deklaration und später zuweisen
```javascript
let projekt;
projekt = "TechTeens";
Projekt = "TechTeens" // --> geht nicht, weil man für Variablen Groß-und Kleinschreibung beachten muss
```

### Berechnen
```javascript
let a = 1; 
let d = a * 2; // Deklaration, Zuweisung und Berechnung auf einer Zeile
let z;         // separate Deklaration
z = d + a * 4; // Zuweisung und Berechnung auf einer Zeile
```

## Anweisungen
Anweisung enden immer mit einem Semikolon (`;`)


## Methoden/Funktionen
### Methodendeklaration
```javascript
  // Methode mit Argument
  function fahren(geschwindigkeit) {

  }
  
  // Methode ohne Argumente
  function linksBewegen() {

  }
  
  // Methode mit Argumenten und Rückgabewert
  function summeBerechnen(a, b) {
    const summe = a + b;
    return summe;
  }  
```
### Methodenaufruf
```javascript
// Aufruf von Methode mit Rückgabewert
const summe = summeBerechnen(2, 4);

// Aufruf von Methode ohne Rückgabewert
wertSpeichern(summe);
```

## Informationen in Console schreiben
```javascript
console.log("Hallo Welt");

let meinText = "Mein Text 123";
console.log(meinText);
```

# Shortcuts für Visual Studio Code (VS Code)

| Shortcut         | Beschreibung                                         | 
| -----------------| -----------------------------------------------------|
| Strg + C         | Text kopieren                                        |
| Strg + V         | Text einfügen                                        |
| Strg + A         | Alles markieren                                      |
| Strg + P         | Gehe zu Datei...                                     |
| Strg + Shift + P | Zeige Befehle/Führe Befehl aus                       |
| F1               | Zeige Befehle/Führe Befehl aus                       |
| F2               | Methode/Variable umbennen                            |
| Atl + Shift + F  | Datei formatieren                                    |
| Strg + Leertaste | IntelliSense aufrufen (mit Enter Auswahl übernehmen) |

# HTML Grundgerüst
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Meine HTML Seite</title>
    <!-- link ist optional für Styles-->
    <link rel="stylesheet" href="style123.css">
    <!-- script ist optional für eine Javascript Datei-->
    <script src="script123.js"></script>
  </head>
  <body>
  </body>
</html>
```

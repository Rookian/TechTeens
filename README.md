# TechTeens

Page: https://techteens.z6.web.core.windows.net/


# Javascript Cheat Sheet
siehe auch
+ https://htmlcheatsheet.com/js/
+ https://www.cheatography.com/pyro19d/cheat-sheets/javascript/

## Typen
+ *Number* (Zahl)
+ *String* (Text)
+ *Boolean*  (*True*=Wahr bzw. *False*=Falsch)

## Kommentare
Kommentare (`//`) werden nicht ausgeführt und dienen als Beschreibung des Quellcodes.
Kommentare werden in den meisten Code Editoren grün angezeigt.

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

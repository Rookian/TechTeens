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
Kommentare werden nicht ausgeführt und dienen als Beschreibung des Quellcodes.
Kommentare werden in den meisten Code Editoren grün angezeigt.
```javascript
// Name der Spielfigur
let name; 

// let a = 5 
```


## Variablen
### Schlüsselwörter
+ `const` (konstante, also sich nicht ändernde Werte)
+ `let` (nicht konstante Werte, wird meistens genutzt)
+ `var` (altes Javascript, **nicht mehr nutzen**)

### Variablen deklarieren und zuweisen
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


## Klassen und Methoden
```javascript
class Auto {
  fahren(geschwindigkeit) {

  }

  bremsen() {

  }
}
```

# Shortcuts für Visual Studio Code (VS Code)

| Shortcut         | Beschreibung                   | 
| -----------------| -------------------------------|
| Strg + C         | Text kopieren                  |
| Strg + V         | Text einfügen                  |
| Strg + A         | Alles markieren                |
| Strg + P         | Gehe zu Datei...               |
| Strg + Shift + P | Zeige Befehle/Führe Befehl aus |

# HTML Grundgerüst
```
<!DOCTYPE html>
<html>
  <head>
    <title>Meine HTML Seite</title>
    <!-- link ist optional für Styles-->
    <link rel="stylesheet" href="css/styles.css">
    <!-- script ist optional für eine Javascript Datei-->
    <script src="script123.js"></script>
  </head>
  <body>
  </body>
</html>
```

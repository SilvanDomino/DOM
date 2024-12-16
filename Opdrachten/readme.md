## Stap 1: HTML
* Maak een folder genaamd 'DOM Oefening 3' in jouw javascript folder.
* Maak in deze folder de volgende bestanden aan:
    * index.html
    * main.js
    * style.css
* Om de basis HTML code te genereren open het HTML bestand en type ! en druk dan op de tab knop.
* Voor het text input field en de knop om iets toe te voegen aan de todo lijst neem de volgende code over, en stop deze in de body tags.
```html
<div>
    <input type="text" name="text" id="textField">
    <button id="addButton">Add</button>
</div>
```
Het eerst element is een text field. Het tweede element is een button. De `id`'s die we meegeven worden straks gebruikt in de javascript.
We gaan een lijst met todo's maken. Dat betekent dat we elementen in een lijst gaan maken.
* Voeg een `ul` element toe. Dit is een **u**nsorted **l**ist, daar staat de ul voor. Geef dit element een id genaamd *ulist*.
* Geef de lijst een child, een `li` element. De inhoud van dit element is een taak. Bijvoorbeeld
```html
<li>Javascript Huiswerk maken</li>
```

We hebben onze HTML voor deze applicatie klaar. De rest van ons werk gaat gebeuren in de javascript. Om ons javascript bestand in te laden, type in de head tags `<script src="main.js" defer> </script>

## Stap 2: Javascript
* Voor deze applicatie hebben we 3 verschillende HTML elementen nodig.
    * De text uit het **textfield** gaat gekopieerd worden in de lijst.    
    `let textfield = document.getElementById("textField");`
    * Wanneer de **button** ingedrukt wordt dan wordt de text uit de inputfield gekopieerd.    
    `let button = document.getElementById("addButton");`
    * De **list** is de plek waar onze Todo teksten terecht komen.    
    `let list = document.getElementById("ulist");`

### De Button
* Maak een functie aan. Deze functie gaat (straks) een todo toevoegen aan de lijst. Dus *addTodo* is een goede naam voor de functie.
* Je kan de functie op enkele verschillende manieren hangen aan het 'click' event van de button. Kies er een van de bovenste twee uit. De onderste niet, Arrow functies leren jullie later bij fullstack/web.
```js 
button.onclick = addTodo
button.addEventListener("click", addTodo)
button.addEventListener("click", ()=>{/*code hier*/})
```
* Laat de functie iets uitprinten in de console wanneer deze aangeroepen wordt. Als het goed is wordt de functie nu uitgevoerd wanneer je op de knop drukt.

### Het Textfield
* De tekst uit het textfield kunnen we ophalen met target. 
* Probeer maar uit, in plaats van iets willekeurig uit printen, print uit `textfield.target`. Als het goed is print je nu de text uit het textfield naar de debugging console.

### De Lijst
* Iedere keer dat er op de knop gedrukt wordt, moet een een nieuw `li` element aangemaakt worden, en dit li-element moet worden toegevoegd aan de lijst. 
* Om een `li` item aan te maken in de javascript doe het volgende in de addTodo functie: 
    ```js 
    let listitem = document.createElement("li");
    ```
* Pas de inhoud van het *listitem* aan. Maak gebruik van de `innerHTML` of `innerText` property. Geef het listitem de inhoud van de tekst uit het textfield.
    We hebben nu een list item (een li). Deze hebben we nog niet toegevoegd aan het DOM dus deze zien we niet op onze website.
* Voeg het *listitem* toe aan het DOM. Deze li voegen we toe aan onze list (ul) om precies te zijn.
```js
list.appendChild(listitem);
```


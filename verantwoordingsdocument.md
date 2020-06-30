# Verantwoordingsdocument toets programmeren 4

Hieronder noteer je de verantwoording, volgens de eisen van de beoordelingscriteria, van de volgende onderdelen: 

## Classes en verantwoordelijkheden
- Game class 
De game class bevat de Bomb en Tank, de objecten worden aangemaakt en gepushed in het gameobjects array. De game is verantwoordelijk om de collision te checken tussen de Tank en de Bommen. Verder houdt het ook de score en je levens bij en checkt het wanneer je de bommen niet optijd opvangt. Als je af bent dan word de gameOver functie uitgevoerd van de Game. 

- GameObject class
Deze class houdt de properties en functies bij die door de classes Bomb en Tank worden gebruikt. Deze classe wordt gebruikt voor overerving. Verder bevat het ook een aantal getters en setters, zodat Game.ts hier ook bij kon zonder de classe te hoeven over te erven. De Bomb en Tank worden getekend in de Game Object class, waardoor je ze kunt zien op beeld. 

- Bomb class 
De bomb class houdt zijn eigen posities(x, y) en snelheid(speed) bij. Elke bom zet zichzelf willekeurig neer door middel van de functies this.setRandomXInScreen(this.div) en  this.setRandomYAboveScreen(). De bom verwijderd zichzelf ook als de Tank het heeft opgevangen. Ook resetten de bommen zichzelf weer als de Tank ze niet allemaal optijd heeft opgevangen. 

- Tank class
De tank class houdt zijn eigen posities(x, y) bij. De tank laat de x en y waardes ook veranderen, wanneer de knoppen A of D worden ingedrukt, zodat het kan bewegen. De tank reset zichzelf weer als het de bommen niet optijd heeft opgevangen. 


## Encapsulation

Uitleg over waarom het protected of public is:

- class GameObject 
protected x: De x variabele heb ik protected gezet, omdat het alleen gebruikt wordt door de children van GameObject. Het wordt niet van buitenaf gebruikt door bijvoorbeeld Game.ts, waardoor ik het nut er niet van inzag om het private te maken met bijbehorende getters en setters. 

public set y, public get y, public, get div functies: Deze variabelen worden ook gebruikt in Game.ts in een if statement om te checken of de bommen de grond hebben geraakt. Omdat Game.ts Gameobject niet overerft, moeten er getters gemaakt worden van de y en div variabelen. Voor de y moet er ook een setter gemaakt worden, omdat het nu private is en aangepast moet worden in Bom.ts

public update functie: Update moet in Game.ts aangeroepen worden om de Bomb en Tank te kunnen tekenen. 

public restart functie: Omdat Bomb en Tank de restart functie ook hebben, staat deze er ook in bij GameObject. Anders kon ik de restart functie niet aanroepen.


- class Bomb 
public update functie: Update moet in Game.ts aangeroepen worden om de Bomb naar beneden te laten vallen. 
public removeBomb functie: In Game.ts wordt deze functie aangroepen, zodat de Bom zichzelf kan verwijderen. 
public restart functie: De bommen moeten opnieuw uit de lucht vallen, maar de functie moet worden aangeroepen in Game.ts

- class Tank
public restart functie: De Tank moet weer terug naar het begin gaan, maar de functie moet worden aangeroepen in Game.ts 


## Composition

- class Game
Game heeft een compositie met Bom en Tank, omdat het instanties moet maken van Bom en Tank om ze te kunnen vertonen. De class Game maakt dus instanties van Bom en Tank, waardoor Game deze objecten kent. De class Game moet ook functies kunnen aanroepen van deze classes. Een voorbeeld is: bom.removeBomb(), dus Game roept een functie aan van zijn compositie. 


## Inheritance

- class Bomb en Tank 

Op deze twee classes is overerving toegepast, omdat ze allebei de variabelen div, x, y en de functies getDiv, getRectangle, update() en restart() nodig hebben. Het is onnodig om deze variabelen en functies zowel in Bom als in Tank te stoppen terwijl je gebruik kan maken van overerving. Ze extenden dus allebei GameObject, waardoor die properties en functies automatisch worden geerfd. 
/* || Or 
    looks at the first argument, if it's truely returns true, else goes to the second argument.

    && and



    */


/* Javascript for interactive webpage
    <script></script>
        move your script element out of the head element, and place it at the end of your body element

    DOM: (document)
        JavaScript interacts with the HTML using the Document Object Model, or DOM. 
        The DOM is a tree of objects that represents the HTML. 
        You can access the HTML using the document object, which represents your entire HTML document.


    document.querySelector()
        One method for finding specific elements in your HTML is using the querySelector() method.
        The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. 
        For example, to find the <h1> element in your HTML, you would write:

        Example Code
        let h1 = document.querySelector("h1");

        Note that h1 is a string and matches the CSS selector you would use.

        Remember that CSS id selectors are prefixed with a #. 
            document.querySelector("#button1")

            .text
            This is a class selector. It selects all elements with the class attribute text

            #text
            It selects the single element with the ID attribute text.

    
    .innerText
        The innerText property controls the text that appears in an HTML element

        <p id="info">Demo content</p> 

        const info = document.querySelector("#info"); 
        info.innerText = "Hello World"; 

            The following example would change the text of the p element from Demo content to Hello World.


    .innerHTML:
        Retrieves or sets the HTML markup contained within the element.
        it Can include HTML tags and will render them as HTML.

        e.i:
            // this will out put a bold text in HTML
            element.innerHTML = "<strong>Hello, World!</strong>";
            
            // this will put all the characters as string in the HTML with out bolding it or removing the HTML tags.
            element.innerText = "<strong>Hello, World!</strong>";
    

    Escaping ""
        you can escape them with a backslash \
            const escapedString = "Naomi likes to play \"Zelda\" sometimes.";

        ! you could use single qutations ('') for the outer string and double qutation("") for the inner string.

    line escape :
        "\n"

    Styling with javascript (CSS integration):
        The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.

        Here is an example of how to update the display for a paragraph element:
            onst paragraph = document.querySelector('p');
            paragraph.style.display = 'block';

    objects

        Objects written as name value pairs are similar to:
            Associative arrays in PHP
            Dictionaries in Python
            Hash tables in C
            Hash maps in Java
            Hashes in Ruby and Perl

        Objects are non primitive data types that store key-value pairs.
        Non primitive data types are mutable data types that are not undefined, null, boolean, number, string, or symbol.
        Mutable means that the data can be changed after it is created.


        How to Define a JavaScript Object:
            1. Using an Object Literal:
                An object literal is a list of name:value pairs inside curly braces {}.
                (name:value pairs are also called key:value pairs.
                object literals are also called object initializers.)

                Properties consist of a key and a value. here's a single property object:
                    const objectName = {
                        key: " value"
                    };

                (It is a common practice to declare objects with the const keyword.)

                creating an empty JavaScript object, and then adds 4 properties:
                    const person = {};

                    person.firstName = "John";
                    person.lastName = "Doe";
                    person.age = 50;
                    person.eyeColor = "blue";


            2. Using the "new Object()" Keyword:

                const person = new Object();
                
                person.firstName = "John";
                person.lastName = "Doe";
                person.age = 50;
                person.eyeColor = "blue";

            3. Using an Object Constructor
                Sometimes we need to create many objects of the same type.
                To create an object type we use an object constructor function.
                It is considered good practice to name constructor functions with an upper-case first letter.

                    function Person(first, last, age, eye) {
                        this.firstName = first;
                        this.lastName = last;
                        this.age = age;
                        this.eyeColor = eye;
                        this.nationality = "English";
                            ! (A value given to a property will be a default value for all objects created by the constructor)
                    }

                In the constructor function, this has no value.
                The value of this will become the new object when a new object is created.

                
                # --- Creating instances: --- #
                Now we can use "new Object()" to create many new Person objects:

                    const myFather = new Person("John", "Doe", 50, "blue");
                    const myMother = new Person("Sally", "Rally", 48, "green");
                    const mySister = new Person("Anna", "Rally", 18, "green");
                    const mySelf = new Person("Johnny", "Rally", 22, "green");
                
                
                # --- constructor Prototype function: --- #
                When you use a constructor function, if reluctant to edit the cunstruction function (which should be the considered option),
                you can add methods to its prototype, which allows all instances created by that constructor to share those methods.
                it's true for properties too.

                    // Constructor function
                    function Person(firstName, lastName) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                      }

                    // Adding a method to the prototype
                        Person.prototype.fullName = function() {
                        return this.firstName + " " + this.lastName;
                      };

                    // Adding a property to the prototype
                    Person.prototype.age = 30;

                    // Creating instances
                    const person1 = new Person("John", "Doe");
                    const person2 = new Person("Jane", "Smith");

                    console.log(person1.fullName()); // Outputs: John Doe
                    console.log(person2.fullName()); // Outputs: Jane Smith

                    console.log(person1.age); // Outputs: 30
                    console.log(person2.age); // Outputs: 30



                Adding a method or Property to an Object inctence instead of the constructor function
                    
                    myMother.changeName = function (name) {
                        this.lastName = name;
                    }
                    
                    myFather.nationality = "English";



        Object Methods
            Methods are actions that can be performed on objects.
            Methods are function definitions stored as property values.

            const person = {
            firstName: "John",
            lastName : "Doe",
            id       : 5566,
            fullName : function () {
            return this.firstName + " " + this.lastName;
                }
            };

            console.log(person.fullName()); #output: John Doe



        Accessing Object Properties
            1. dot notation:
                objectName.propertyName;

            2. bracket notation:
                objectName["propertyName"];

            ! if there is spaces in the property name you must use the braket notation:
                const cat = {
                    name: "Whiskers",
                    "Number of legs": 4
                };

                console.log(cat.name); // Outputs: Whiskers
                console.log(cat["Number of legs"]); // Outputs: 4

*/


/* Math
    ! Math is upeercase
    
    Math.random():
    generates random number in range of "[0, 1)".
    ! random is a method (remember to add paranthesis)

        this generates a random number between 0 and 10: 
            Math.floor(Math.random() * 11)

        this generates a random number between 1 and 5: 
            Math.floor(Math.random() * 5) + 1;


*/



/* Buttons

    .onclick property
    you can use to determine what happens when someone clicks that button

    button.onclick = myFunction; 
    (! not myFunction(), you're not assigning a function)
    In this example, button is the button element, and myFunction is a reference to a function. 
    When the button is clicked, myFunction will be called.


    
*/



/* ternary operator
    The ternary operator is a conditional operator and can be used as a one-line if-else statement.
    
    The syntax is: 
        condition ? expressionIfTrue : expressionIfFalse

        // if-else statement
            if (score > 0) {
            return score
            } else {
            return default_score;
            };

        // ternary operator
            return score > 0 ? score : default_score;

*/

/* .includes ()
    The .includes() method determines if an array contains an element and will return either true or false.

        const numbersArray = [1, 2, 3, 4, 5]
        const number = 3
        console.log(numbersArray.includes(number)) //output: True;
        
*/

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
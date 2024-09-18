/*
+= 
  plus the amount at right side

++
  increment by one.
  ! use it with no space:   variable++;

===
  The strict equality operator === is used to check if two values are equal and share the same type. 
  As a general rule, this is the equality operator you should always use. 
  With the strict equality operator, "0" === 0 becomes false, because while they might have the same value of zero, they are not of the same type.

  !== : strict inequlity operator

*/


// Coments: // or /**/



// ?! var or let or const?
  // initialize (let) and declare (assign value)

// properties and methods?!
  // .length vs .pop()

// Note that strings are immutable, which means once they are created, they cannot be changed. The variable can still be reassigned another value.


/* 
  .pop()
  It removes the last element from an array and returns that element.

  .push() 
  returns the new length of the array, after adding the value you give it.

    let pushed = rows.push("freeCodeCamp");
    console.log(pushed);
    # output: 4;
  
  
  .unshift()
  The .unshift() method of an array allows you to add a value to the beginning of the array, 
  unlike .push() which adds the value at the end of the array.
  .unshift() returns the new length of the array it was called on.

    const countDown = [2, 1, 0];
    const newLength = countDown.unshift(3);
    console.log(countDown); // [3, 2, 1, 0]
    console.log(newLength); // 4

  .shift()
  This will remove and return the first element of the array, unlike .pop() which removes the last element.

    const numbers = [1, 2, 3];
    numbers.shift();  # output: 2
    
*/



/* for syntax:
for (iterator; condition; iteration) {
  logic;
}*/


/* for .. of :
for (const value of iterable) {


}
*/


/* concatenation
You can do a similar thing with a string value, by appending a new string to an existing string. For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable. This is called concatenation.
*/


/* Functions
function name(parameter) {

}
The syntax for a function call is the function name followed by parentheses

// To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.
    const call = padRow(); (! let Woudn't do it)

// hard-coded value.

*/

/* if :
  if (condition) {
    logic
  }


  conditions:
  "false" is a string, which when evaluated to a boolean becomes true. This means "false" is a truthy value.
  
  A truthy value is a value that is considered true when evaluated as a boolean. 
  Most of the values you encounter in JavaScript will be truthy.

  A falsy value is the opposite - a value considered false when evaluated as a boolean. 
  JavaScript has a defined list of falsy values. Some of them include :
    false, 
    0, 
    "", 
    null, 
    undefined, 
    and NaN



  else if:
    if (condition1) {
      // code to run if condition1 is true
    } else if (condition2) {
      // code to run if condition2 is true
    } else if (condition3) {
      // code to run if condition3 is true
    } 



    else :
    if (condition) {
      // this code will run if condition is true
    } else if (condition2) {
      // this code will run if the first condition is false
    } else {
      // this code will run 
      // if the first and second conditions are false
    }
*/


/* while loop:
  while (condition) {
    logic;
  }

*/





































/* Simulation for the question:
  # ---
  # one row pyramid
  # ---
      #

      Size = 1
      Row_num = 1
      Char_num = 1
      Dot_num = 0
  # ---
  # two row pyramid
  # ---
      .#.
      ###

      Size = 2
      Row_num = 1, 2
      Char_num = 1, 3
      Dot_num = 2, 0

  # ---
  # three row pyramid
  # ---
      ..#..
      .###.
      #####

      Size = 3
      Row_num = 1, 2, 3
      Char_num = 1, 3, 5
      Dot_num = 4, 2, 0

  # ---
  # four row pyramid
  # ---
      ...#...
      ..###..
      .#####.
      #######

      Size = 4
      Row_num = 1, 2, 3, 4
      Char_num = 1, 3, 5, 7
      Dot_num = 6, 4, 2, 0
  # ---
  # General pattern
  # ---
      Size = n
      Row_num = i
      Char_num = 2 * i - 1
      Dot_num = 2 * (n - i) 
*/


/* my code
  character = "#"
  const count = 8;
  const rows = [];

  for (let i = 0; i < count; i ++) {
    rows.push(character.repeat(i + 1))
  }

  let result = ""

  for (const row of rows) {
    if (row == rows[0]){
      result = result + row ;
    } else {
      result = result + "\n" + row;
    }
  }

  console.log(result);
*/





const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

/* other algos
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}
*/

/* other algos
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
  */
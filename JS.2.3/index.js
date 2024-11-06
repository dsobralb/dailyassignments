
//-----------------
// Problem 1
//-----------------

// I will give you a color through the 'color' parameter.
// We want to know if the color is either 'green' or 'yellow'.
// If it's 'green' or 'yellow' have favGreenOrYellow be true.

let favGreenOrYellow = false;
function problem1(color) {
  // Check if the color is 'green' or 'yellow'
  if (color === "green" || color === "yellow") {
    favGreenOrYellow = true;
  }
  
  console.log(`Favorite is Green or Yellow: ${favGreenOrYellow}`);
}

// Test examples
problem1("green");    // Should output: Favorite is Green or Yellow: true
problem1("blue");     // Should output: Favorite is Green or Yellow: false


//-----------------
// Problem 2
//-----------------

// We want to create a game where the user guesses what number
// the computer is thinking of between 1-100.
// I will give you a number through the 'guess' parameter.
// We need to first test to make sure the 'guess' is a valid number.
// If the guess is greater than 0 and less than 101 then our 
// validInput variable should be true.

let validInput = false;
function problem2(guess) {
  // Check if guess is between 1 and 100
  if (guess > 0 && guess <= 100) {
    validInput = true;
  }
  
  console.log(`Valid input: ${validInput}`);
}

// Test examples
problem2(50);     // Should output: Valid input: true
problem2(150);    // Should output: Valid input: false
problem2(0);      // Should output: Valid input: false


//-----------------
// Problem 3
//-----------------

// Similar to problem 1 we are going to test if a user enters 'green' or 'yellow'
// as their favorite color. We also want to test if they enter the 
// hex code for green('#00ff00') or yellow('#ffff00'). If any of these 4 inputs
// are entered then we want our favGreenOrYellowWithHex variable to be true.
// The input will be given through the 'color' parameter.

let favGreenOrYellowWithHex = false;
function problem3(color) {
  // Check if color is 'green', 'yellow', '#00ff00', or '#ffff00'
  if (color === "yellow" || color === "#ffff00" || color === "green" || color === "#00ff00") {
    favGreenOrYellowWithHex = true;
  }
  
  console.log(`Favorite is Green or Yellow (with hex): ${favGreenOrYellowWithHex}`);
}

// Test examples
problem3("green");       // Should output: Favorite is Green or Yellow (with hex): true
problem3("#00ff00");     // Should output: Favorite is Green or Yellow (with hex): true
problem3("blue");        // Should output: Favorite is Green or Yellow (with hex): false
problem3("#ff0000");     // Should output: Favorite is Green or Yellow (with hex): false

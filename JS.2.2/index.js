//--------------------
// Problem 1
//--------------------

// I will be giving you a color through the 'color' parameter. 
// If the color is 'red' have the variable 'redIsFavorite' be true.
// If any other color is entered have the variable 'redIsFavorite' be false.

let redIsFavorite = false;
function problem1(color) {
  // Check if color is 'red'
  if(color === "red") {
    redIsFavorite = true;
  } else {
    redIsFavorite = false;
  }
  
  console.log(`Red is favorite: ${redIsFavorite}`);
}

// Test examples
problem1("red");     // Should output: Red is favorite: true
problem1("blue");    // Should output: Red is favorite: false


//--------------------
// Problem 2
//--------------------

// I will give you a number through the 'someNumber' parameter.
// If the number is greater than 0 assign typeNumber the string 'positive'
// If the number is 0 assign typeNumber the string 'zero'
// If the number is less than 0 assign typeNumber the string 'negative'

let typeNumber = "";
function problem2(someNumber) {
  // Check if number is positive, zero, or negative
  if (someNumber > 0) {
    typeNumber = "positive";
  } else if (someNumber === 0) {
    typeNumber = "zero";
  } else {
    typeNumber = "negative";
  }
  
  console.log(`typeNumber: ${typeNumber}`);
}

// Test examples
problem2(5);    // Should output: typeNumber: positive
problem2(0);    // Should output: typeNumber: zero
problem2(-3);   // Should output: typeNumber: negative


//--------------------
// Problem 3
//--------------------

// I will give you a letter as a string. Either 'a', 'b', 'c', 'd', or 'f'. 
// You can access the letter through the 'grade' parameter.
// You then need to assign the correct percent respectivly to the percentGrade variable.
// '100%', '80%', '70%', '60%', '0%'.

let percentGrade;
function problem3(grade) {
  // Assign corresponding percent based on the grade
  if (grade === 'a') {
    percentGrade = '100%';
  } else if (grade === 'b') {
    percentGrade = '80%';
  } else if (grade === 'c') {
    percentGrade = '70%';
  } else if (grade === 'd') {
    percentGrade = '60%';
  } else if (grade === 'f') {
    percentGrade = '0%';
  }
  
  console.log(`percentGrade: ${percentGrade}`);
}

// Test examples
problem3('a');    // Should output: percentGrade: 100%
problem3('c');    // Should output: percentGrade: 70%
problem3('f');    // Should output: percentGrade: 0%

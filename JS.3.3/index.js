// Problem 1
// Create a function that takes two parameters and returns their sum.

function addTwoNumbers(a, b) {
  let sum = a + b;  // Add the two parameters
  return sum;       // Return the result
}

console.log(addTwoNumbers(1, 1));  // Example usage


// Problem 2
// Create a function that calculates the perimeter given width and height.

function perimeter(width, height) {
  let answer = 2 * (width + height);  // Perimeter formula: 2 * (width + height)
  return answer;                      // Return the result
}

console.log(perimeter(5, 10));  // Example usage


// Problem 3
// Create a function that calculates the area given width and height.

function area(width, height) {
  let answer = width * height;  // Area formula: width * height
  return answer;                // Return the result
}

console.log(area(5, 10));  // Example usage


// Problem 4
// Create a function that takes a name parameter and returns a greeting message.

function helloMessage(name) {
  return `Hello ${name}`;  // Use template literals to include the person's name
}

console.log(helloMessage("Alice"));  // Example usage


// Problem 5
// Create a function that takes a color parameter and returns different responses based on the color.

function favColor(color) {
  if (color === "blue" || color === "red" || color === "green") {
    return "That is a great color!";
  } else if (color === "yellow") {
    return "Just like the sun!";
  } else {
    return "Great choice!";
  }
}

console.log(favColor("blue"));     // Example usage
console.log(favColor("yellow"));   // Example usage
console.log(favColor("purple"));   // Example usage

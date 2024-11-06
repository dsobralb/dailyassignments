// Problem 1
// Create an object representing a person with given properties.

let person = {
  name: "John",
  age: 23,
  height: "5 feet 11 inches"
};

console.log(person);


// Problem 2
// Create an object representing a theme park with given properties.

let themePark = {
  rollerCoasters: 8,
  kidFriendlyRides: 11,
  shows: 3,
  churroStands: 40
};

console.log(themePark);


// Problem 3
// Create an object representing a fast food restaurant's stock status.

let fastFood = {
  burgers: true,
  fries: true,
  iceCreamMachineBroken: true,
  orangeSoda: false
};

console.log(fastFood);


// Problem 4
// Create an object with math helper functions.

let mathHelp = {
  squared: function(num) {
    return num ** 2;  // Returns the square of the parameter
  },
  
  toCelsius: function(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);  // Converts Fahrenheit to Celsius
  },
  
  distanceBetweenTwoPoints: function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);  // Distance formula
  }
};

// Example usage
console.log(mathHelp.squared(5));  // Example: 25
console.log(mathHelp.toCelsius(68));  // Example: 20
console.log(mathHelp.distanceBetweenTwoPoints(0, 0, 3, 4));  // Example: 5

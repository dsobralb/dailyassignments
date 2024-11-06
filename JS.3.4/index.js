// Problem 1
// Function to calculate the area of a circle based on radius.

function circleArea(radius) {
  return 3.14 * radius ** 2;  // Area formula: π * r^2
}

console.log(circleArea(5));  // Example usage


// Problem 2
// Function to calculate the circumference of a circle based on radius.

function circleCircumference(radius) {
  return 2 * 3.14 * radius;  // Circumference formula: 2 * π * r
}

console.log(circleCircumference(5));  // Example usage


// Problem 3
// Function to calculate the average of three numbers.

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;  // Sum all numbers and divide by 3
}

console.log(average(5, 10, 15));  // Example usage


// Problem 4
// Function to concatenate two strings.

function combineTwoStrings(str1, str2) {
  return str1 + str2;  // Concatenate str1 and str2
}

console.log(combineTwoStrings("Hello, ", "world!"));  // Example usage


// Problem 5
// Function to cube a given number.

function cubed(num) {
  return num ** 3;  // Cubes the given number
}

console.log(cubed(3));  // Example usage


// Problem 6
// Function to square a given number.

function squared(num) {
  return num ** 2;  // Squares the given number
}

console.log(squared(4));  // Example usage


// Problem 7
// Function to calculate the surface area of a sphere based on radius.

function sphereArea(radius) {
  return 4 * 3.14 * squared(radius);  // Surface area formula: 4 * π * r^2
}

console.log(sphereArea(5));  // Example usage

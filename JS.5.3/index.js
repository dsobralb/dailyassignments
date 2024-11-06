// Problem 1
// Use the filter function to get numbers greater than 5 and less than 11 from myArray.

let myArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];
function filterMyArray() {
  myArray = myArray.filter(num => num > 5 && num < 11); // Filters numbers between 5 and 11
}
filterMyArray();
console.log(myArray); // Output: [7, 8, 10, 6]


// Problem 2
// Use the forEach function to multiply each item in multiplyArray by 5.

let multiplyArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];

function multiplyNumbers() {
  multiplyArray.forEach((num, index, array) => {
    array[index] = num * 5; // Multiply each element by 5 and update the array in place
  });
}
multiplyNumbers();
console.log(multiplyArray); // Output: [5, 55, 35, 15, 40, 10, 15, 10, 50, 15, 30, 10, 25]

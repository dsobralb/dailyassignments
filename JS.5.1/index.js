// Problem 1 
// Create an array with numbers 4 and 8, and calculate their sum.

let myFirstArray = [4, 8];
let addUp = myFirstArray[0] + myFirstArray[1];
console.log(addUp); // This should output 12


// Problem 2
// Push the value of addUp to the end of myFirstArray.

myFirstArray.push(addUp); // myFirstArray now becomes [4, 8, 12]
console.log(myFirstArray);


// Problem 3
// Remove the first element (at index 0) from myFirstArray.

myFirstArray.shift(); // myFirstArray now becomes [8, 12]
console.log(myFirstArray);


// Problem 4
// Add the two items in the array together and store in addAgain.

let addAgain = myFirstArray[0] + myFirstArray[1];
console.log(addAgain); // This should output 20


// Problem 5
// Create a new array with 10 different items, and set its length in arrLength.

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrLength = newArray.length;
console.log(arrLength); // This should output 10

// Problem 1
// Remove the last item from array1.

let array1 = [1, 2, 3, 4, 5, 6];
function removeLastItem() {
  array1.pop(); // Removes the last item (6) from the array
}
removeLastItem();
console.log(array1); // Output: [1, 2, 3, 4, 5]


// Problem 2
// Remove the first item from array2.

let array2 = ["This", "Hello", "World"];
function removeFirstItem() {
  array2.shift(); // Removes the first item ("This") from the array
}
removeFirstItem();
console.log(array2); // Output: ["Hello", "World"]


// Problem 3
// Remove "stuff" and "ready" from array3.

let array3 = ["well", "stuff", "money", "ready", "hello"];
function removeItems() {
  array3.splice(1, 1); // Removes "stuff" at index 1
  array3.splice(2, 1); // Removes "ready" at the new index 2
}
removeItems();
console.log(array3); // Output: ["well", "money", "hello"]


// Problem 4
// Add "well" to the beginning of array4.

let array4 = ["hello", "people"];
function addItem() {
  array4.unshift("well"); // Adds "well" to the beginning of the array
}
addItem();
console.log(array4); // Output: ["well", "hello", "people"]


// Problem 5
// Add "power" in between "great" and "comes" in array5.

let array5 = ["with", "great", "comes", "great", "responsibility"];
function addMoreItem() {
  array5.splice(2, 0, "power"); // Inserts "power" at index 2
}
addMoreItem();
console.log(array5); // Output: ["with", "great", "power", "comes", "great", "responsibility"]


// Problem 6
// Add 7 to the end of array6.

let array6 = [1, 2, 3, 4, 5, 6];
function addLast() {
  array6.push(7); // Adds 7 to the end of the array
}
addLast();
console.log(array6); // Output: [1, 2, 3, 4, 5, 6, 7]

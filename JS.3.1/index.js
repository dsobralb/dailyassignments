// Problem 1
// We have a variable 'i' that is set to 0. Create a while loop that loops
// five times. Increment 'i' each time.

let i = 0;

// Write loop here
while (i < 5) {
  i++;
  console.log(`Current value of i: ${i}`);
}
// After this loop, `i` will be 5.


  
// Problem 2
// We have a variable `lessThan5` set to true.
// Create a loop that tests if `j` is less than 5.
// If `j` is less than 5, increment it by 1. If it is not, set `lessThan5` to false.

let lessThan5 = true;
let j = 0;

while (lessThan5) {
  if (j < 5) {
    j++;
  } else {
    lessThan5 = false;
  }
  console.log(`Current value of j: ${j}`);
}
// After this loop, `j` will be 5 and `lessThan5` will be false.



// Problem 3
// We will give you a number through the 'num' parameter
// Create a while loop that will loop `num` amount of times.
// Increment `k` every loop.

let k = 0;
function keepLooping(num) {
  let count = 0; // Initialize a counter to control the number of loops
  
  while (count < num) {
    k++;
    count++;
  }
  console.log(`Final value of k after looping ${num} times: ${k}`);
}

// Example usage
keepLooping(3);  // This will increment `k` 3 times
keepLooping(20); // This will increment `k` 20 times from its current value

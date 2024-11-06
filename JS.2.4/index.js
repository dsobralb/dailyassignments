let addTo;
function adding(myNum) {
  addTo = myNum;

  // Write the for loop here
  for (let i = 0; i < 10; i++) {
    addTo += i;  // Adds the current value of i to addTo on each loop
  }

  console.log(`Final value of addTo: ${addTo}`);
}

// Example usage
adding(5);  // You can pass any number to test the function, e.g., 5

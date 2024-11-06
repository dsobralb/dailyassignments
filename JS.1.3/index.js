
// 1) Calculate the perimeter of the yard
let yardWidth = 100;
let yardLength = 15;
let yardPerimeter = yardWidth + yardWidth + yardLength + yardLength; // Result: 230

// 2) Create a message with the yard perimeter using string interpolation
let messagePerimeter = `You are going to need ${yardPerimeter}ft of fence.`;

// 3) Calculate the total price of the fence
let pricePerFoot = 15;
let totalPrice = yardPerimeter * pricePerFoot; // Result: 3450

// Console output to verify results
console.log(messagePerimeter); // "You are going to need 230ft of fence."
console.log(`Total price: $${totalPrice}`); // "Total price: $3450"

// Problem 1
// Calculate the total price of in-stock items in the shoppingCart array.

let shoppingCart = [
  {
    itemName: "TV",
    inStock: true,
    price: 799.99,
  },
  {
    itemName: "Controller",
    inStock: true,
    price: 49.99,
  },
  {
    itemName: "Phone case",
    inStock: false,
    price: 19.99,
  },
  {
    itemName: "Pencils",
    inStock: true,
    price: 5.99,
  }
];

function totalPrice() {
  let total = 0;  // Initialize total to store the sum of prices of in-stock items

  shoppingCart.forEach(item => {
    if (item.inStock) {      // Check if item is in stock
      total += item.price;   // Add item price to total
    }
  });

  return total; // Return the total price of in-stock items
}

console.log(totalPrice()); // Expected output: 855.97


// Problem 2
// Create an array of item names that are in stock from the shopItems array.

const shopItems = [
  {
    itemName: "TV",
    inStock: true,
    price: 799.99,
  },
  {
    itemName: "Controller",
    inStock: true,
    price: 49.99,
  },
  {
    itemName: "Phone case",
    inStock: false,
    price: 19.99,
  },
  {
    itemName: "Pencils",
    inStock: true,
    price: 5.99,
  },
  {
    itemName: "Game Console",
    inStock: true,
    price: 250.00,
  },
  {
    itemName: "Laptop",
    inStock: false,
    price: 1000.00,
  },
  {
    itemName: "Movie",
    inStock: true,
    price: 20.00,
  }
];

function inStockItems() {
  let inStockNames = []; // Initialize an array to store names of in-stock items

  shopItems.forEach(item => {
    if (item.inStock) {        // Check if item is in stock
      inStockNames.push(item.itemName); // Add item name to the inStockNames array
    }
  });

  return inStockNames; // Return the array of in-stock item names
}

console.log(inStockItems()); // Expected output: ["TV", "Controller", "Pencils", "Game Console", "Movie"]

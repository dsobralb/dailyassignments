let addTo;
function adding(num) {
  addTo = num;
  for (let i = 0; i < 20; i++) {
    addTo += i;  // Adds each `i` from 0 to 19 to `addTo`
  }
  console.log(`Final value of addTo: ${addTo}`);
}

adding(5);  // Starting with 5, adds 0 through 19 to it
let anotherAdd;
function adding1(num) {
  anotherAdd = num;
  for (let i = 20; i < 30; i++) {
    anotherAdd += i;  // Adds each `i` from 20 to 29 to `anotherAdd`
  }
  console.log(`Final value of anotherAdd: ${anotherAdd}`);
}

adding1(10);  // Starting with 10, adds 20 through 29 to it
let moreAdding;
function adding2(num) {
  moreAdding = num;
  for (let i = 0; i <= 100; i += 5) {
    moreAdding += i;  // Adds each `i` (0, 5, 10, ..., 100) to `moreAdding`
  }
  console.log(`Final value of moreAdding: ${moreAdding}`);
}

adding2(0);  // Starting with 0, adds 0, 5, 10, ..., 100 to it

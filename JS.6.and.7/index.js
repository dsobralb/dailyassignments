// Random word selected
let theWord = randomWords();

// Example 1: Check if the word is "happy" and print a message
if (theWord === 'happy') {
  console.log("The word is 'happy'! Spread the joy!");
} else {
  console.log(`The word is '${theWord}'.`);
}

// Example 2: Print the word in uppercase
console.log(`The word in uppercase is: ${theWord.toUpperCase()}`);

// Example 3: Check if the word has more than 4 letters
if (theWord.length > 4) {
  console.log(`The word '${theWord}' has more than 4 letters.`);
} else {
  console.log(`The word '${theWord}' has 4 or fewer letters.`);
}

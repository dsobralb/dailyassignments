function rockPaperScissors(playerChoice) {
    // Convert player input to lowercase to handle case-insensitive inputs
    playerChoice = playerChoice.toLowerCase();
    
    // Check if the player input is valid
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
      return "I do not understand. Try entering rock, paper, or scissors.";
    }
  
    // Generate a random number between 0 and 2
    let computerNumber = Math.floor(Math.random() * 3);
    
    // Map the random number to rock, paper, or scissors for the computer's choice
    let computerChoice;
    if (computerNumber === 0) {
      computerChoice = "rock";
    } else if (computerNumber === 1) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
  
    // Determine the outcome
    if (playerChoice === computerChoice) {
      return `It's a tie! I chose ${computerChoice}`;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      return `You win! I chose ${computerChoice}`;
    } else {
      return `You lose! I chose ${computerChoice}`;
    }
  }
  
  // Example usage
  console.log(rockPaperScissors("rock"));       // Test with "rock"
  console.log(rockPaperScissors("paper"));      // Test with "paper"
  console.log(rockPaperScissors("scissors"));   // Test with "scissors"
  console.log(rockPaperScissors("lizard"));     // Test with an invalid choice
  

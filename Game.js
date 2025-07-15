//  const Hands = ["Rock", "Paper", "Scissors"];

// function playGame() {
//       return Hands[Math.floor(Math.random() * Hands.length)];
// }

// const randomHands = document.getElementById("Hands");
// randomHands.onclick = function() {
//    console.log(playGame())
// }

const Hands = ["Rock", "Paper", "Scissors"];

function getComputerHand() {
  return Hands[Math.floor(Math.random() * Hands.length)];
}

function playRound(playerChoice) {
  const computerHand = getComputerHand();
  let result = "";

  if (playerChoice === computerHand) {
    result = `This is a draw, you both chose ${playerChoice}`;
  } else if (
    (playerChoice === "Rock" && computerHand === "Scissors") ||
    (playerChoice === "Paper" && computerHand === "Rock") ||
    (playerChoice === "Scissors" && computerHand === "Paper") ||
    (playerChoice === "paper" && computerHand === "scissors") ||
    (playerChoice === "rock" && computerHand === "paper") ||
    (playerChoice === "scissors" && computerHand === "rock")
  ) {
    result = `You Win! ${playerChoice} beats ${computerHand}`;
  } else {
    result = `You Lose! ${computerHand} beats ${playerChoice}`;
  }

  console.log(result);
  document.getElementById("resultText").textContent = result;

}

//creates computer's RPS choice
function getComputerChoice() {
  //create random integer 1, 2, or 3
  const randNum = Math.floor(Math.random() * 3) + 1;

  //switch randNum int to RPS word
  switch (randNum) {
    case 1:
      "Rock";
      break;
    case 2:
      "Paper";
      break;
    case 3:
      "Scissors";
      break;
    default:
      "Try again.";
  }
}

//creates player's RPS
function playGame(userPick, compPick) {
  const compPick = getComputerChoice();
  if (userPick === computerPick) {
    return "You're tied";
  } else if (
    (userPick === "Rock" && compPick === "scissors") ||
    (userPick === "paper" && compPick === "rock") ||
    (userPick === "scissors" && compPick === "paper")
  ) {
    return "You Win!";
  } else {
    return "You lose.";
  }
}
const userPick = "Rock";

console.log(playGame(userPick));

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

//creates player's RPS choice
function playGame(userPick, compPick) {
  //player's pick

  if (userPick === "rock" && compPick === "scissors") {
    return "Player Wins";
  }
}
const userPick = "rock";
const compPick = getComputerChoice();
console.log(playGame(userPick, compPick));

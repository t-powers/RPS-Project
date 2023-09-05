//creates computer's RPS choice
function getComputerChoice() {
  //create random integer 1, 2, or 3
  const randNum = Math.floor(Math.random() * 3) + 1;

  //switch randNum int to RPS word
  switch (randNum) {
    case 1:
      result = "Rock";
      break;
    case 2:
      result = "Paper";
      break;
    case 3:
      result = "Scissors";
      break;
    default:
      result = "Try again.";
  }
  return result;
}

//creates player's RPS
function playGame(userPick, compPick) {
  if (userPick === compPick) {
    choice = "You're tied";
  } else if (
    (userPick === "Rock" && compPick === "Scissors") ||
    (userPick === "Paper" && compPick === "Rock") ||
    (userPick === "Scissors" && compPick === "Paper")
  ) {
    choice = "You Win!";
  } else {
    choice = "You lose.";
  }
  return choice;
}

let userString = "roCK";
let toLowerString = userString.toLowerCase();
const userPick = toLowerString.charAt(0).toUpperCase() + toLowerString.slice(1);

const compPick = getComputerChoice();
console.log(playGame(userPick, compPick));
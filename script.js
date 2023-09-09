//creates computer's RPS choice
function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1; //create random integer 1, 2, or 3

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

//assigning logic to player's choice
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

const prompt = require("prompt-sync")();

const playerPrompt = prompt("Choose rock, paper, scissors. ");

const playerPrompt = prompt("Choose rock, paper, scissors. ");

  let userString = playerPrompt;
  let toLowerString = userString.toLowerCase(); //prep user response to match userPick condition inside playGame
  const userPick =
    toLowerString.charAt(0).toUpperCase() + toLowerString.slice(1);
}
const compPick = getComputerChoice();
console.log(playGame(userPick, compPick));

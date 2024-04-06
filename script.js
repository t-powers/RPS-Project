let yourPick = document.getElementById("your-pick");
let oppPick = document.getElementById("opp-pick");
let winnerEl = document.getElementById("winner-el");
let reset = document.getElementById("reset");


function rock() {
  const rock = "Rock";
  const opp = getComputerChoice();

  yourPick.innerHTML += rock;
  oppPick.innerHTML += opp;

  if (rock === opp) {
    winnerEl.innerHTML += "Tie";
  } else if (opp === "Scissors") {
    winnerEl.innerHTML += "You win";
  } else {
    winnerEl.innerHTML += "You lose";
  }
}

function paper() {
  const paper = "Paper";
  const opp = getComputerChoice();

  yourPick.innerHTML += paper;
  oppPick.innerHTML += opp;

  if (paper === opp) {
    winnerEl.innerHTML += "Tie";
  } else if (opp === "Rock") {
    winnerEl.innerHTML += "You win";
  } else {
    winnerEl.innerHTML += "You lose";
  }
}

function scissors() {
  const scissors = "Scissors";
  const opp = getComputerChoice();

  yourPick.innerHTML += scissors;
  oppPick.innerHTML += opp;

  if (scissors === opp) {
    winnerEl.innerHTML += "Tie";
  } else if (opp === "Paper") {
    winnerEl.innerHTML += "You win";
  } else {
    winnerEl.innerHTML += "You lose";
  }
}

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



let yourPick = document.getElementById("your-pick")
let oppPick = document.getElementById("opp-pick")
let winnerEl = document.getElementById("winner-el")

function rock(){
  let user = yourPick.innerHTML += "Rock"
  let comp = oppPick.innerHTML += getComputerChoice()
  winnerEl.innerHTML += playGame(user, comp)
}

function paper() {
  let user = yourPick.innerHTML += "Paper";
  let comp = oppPick.innerHTML += getComputerChoice();
  winnerEl.innerHTML += playGame(user, comp);
}

function scissors() {
  let user = yourPick.innerHTML += "Scissors";
  let comp = oppPick.innerHTML += getComputerChoice();
  winnerEl.innerHTML += playGame(user, comp);
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

//assigning logic to player's choice
function playGame(userPick, compPick) {
  if (userPick === compPick) {
    choice = "You're tied";
  } else if (
    (userPick === "Rock" && compPick === "Scissors") ||
    (userPick === "Paper" && compPick === "Rock") ||
    (userPick === "Scissors" && compPick === "Paper")
  ) {
    choice = "You've Won!";
  } else {
    choice = "You lost";
  }
  return choice;
}
 

// function game() {
//   for (let i = 5; i > 0; i--) {
//     console.log(`You have ${i} guesses.`);
//     if (i === 0) {
//       console.log("Game Over");
//     } else {
//       playing();
//     }
//   }
// }


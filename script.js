let yourPick = document.getElementById("your-pick")
let oppPick = document.getElementById("opp-pick")
let winnerEl = document.getElementById("winner-el")



let rock = function rock(){
  yourPick.innerHTML += "Rock"
  oppPick.innerHTML += getComputerChoice()
  
}

let paper = function paper() {
  let user = yourPick.innerHTML += "Paper";
  let comp = oppPick.innerHTML += getComputerChoice();
}

let scissors = function scissors() {
  let user = yourPick.innerHTML += "Scissors";
  let comp = oppPick.innerHTML += getComputerChoice();
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


//create random integer 1 || 2 || 3
//switch createRandNum function int to RPS word
function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      console.log("Rock");
      break;
    case 2:
      console.log("Paper");
      break;
    case 3:
      console.log("Scissors");
      break;
    default:
      "Try again.";
  }
}
getComputerChoice();

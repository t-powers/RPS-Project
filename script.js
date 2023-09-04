//create random integer 1 || 2 || 3
const getComputerChoice = Math.floor(Math.random() * 3) + 1;

//switch createRandNum function int to RPS word

switch (getComputerChoice()) {
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
//play a round of RPS

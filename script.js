//planning

/*
pseudocode plan
get computer's choice
add function called getComputerChoice
randomly pick number and switch number to rock, paper, scissors
*/

//create random integer 1 || 2 || 3
function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  return randNum;
}
//switch createRandNum function int to RPS word
switch (getComputerChoice()) {
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
q
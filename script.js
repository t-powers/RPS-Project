//planning

/*
pseudocode plan
get computer's choice
add function called getComputerChoice
randomly pick number and switch number to rock, paper, scissors
*/

//create random integer 1 || 2 || 3
function createRandNum() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  return randNum;
}
//switch createRandNum function int to RPS word
switch (createRandNum()) {
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
    console.log("Try again.");
}

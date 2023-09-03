//planning

/*
pseudocode plan
get computer's choice
add function called getComputerChoice
randomly pick number and switch number to rock, paper, scissors
*/

function createRandNum() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  return randNum;
}

switch (createRandNum()){
  case 1:
    console.log("Rock");
  break;
  default:
    console.log("Try again.");
}

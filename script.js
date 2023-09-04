//creates computer's RPS choice
function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1; //create random integer 1, 2, or 3

  //switch randNum int to RPS word
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

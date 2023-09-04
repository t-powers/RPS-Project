//creates computer's RPS choice
function getComputerChoice() {
  //create random integer 1, 2, or 3
  const randNum = Math.floor(Math.random() * 3) + 1;

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
let options = {
  rock: {
    displayMessage: '',
    beats: ['scissors'],
    losesTo: 'paper'
  },
  paper: {
    displayMessage: '',
    beats: ['rock'],
    losesTo: 'scissors'

  },
  scissors: {
    displayMessage: '',
    beats: ['paper'],
    losesTo: 'rock'
  }
}

function playerChoice(playerChoice) {
  let compChoice = getComputerChoice()
  drawBattle(playerChoice, compChoice)
  let outcome = play(playerChoice, compChoice)
  if (outcome == "You Win") {
    //oop surprise
  } else if (outcome == "You Lose") {

    // surprised again
  }
  drawResults(outcome)
}
function rockWin() {
  console.log('Rock beats Scissors!')
  document.getElementById("speak-output").innerText = "The Cow says Moo."
}

function paperWin() {
  console.log('Paper beats Rock!')
  document.getElementById("speak-output").innerText = "The Cow says Moo."
}



function scissorwin() {
  console.log('Scissors beats Paper!')
  document.getElementById("speak-output").innerText = "The Cow says Moo."
}



function play(player, comp) {









}
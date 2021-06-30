let options = {
  rock: {
    displayMessage: '',
    winsAgainst: 'scissors',
    losesTo: 'paper'
  },
  paper: {
    displayMessage: '',
    winsAgainst: 'rock',
    losesTo: 'scissors'

  },
  scissors: {
    displayMessage: '',
    winsAgainst: 'paper',
    losesTo: 'rock'
  }
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



function play(playerChoice) {
  let choice = playerChoice








}
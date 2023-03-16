function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissor']
    let randomNumber = Math.floor(Math.random() * choiceArray.length)
    return choiceArray[randomNumber]
}



function playRound(playerSelection) {
    let win = 'You win'
    let lose = 'You lose'
    let draw = 'It is a tie'
    let computerSelection = getComputerChoice()
    if (computerSelection == 'rock' && playerSelection == 'paper') {
        return win
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissor') {
        return lose
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissor') {
        return win
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return lose
    }
    else if (computerSelection == 'scissor' && playerSelection == 'rock') {
        return win
    }
    else if (computerSelection == 'scissor' && playerSelection == 'paper') {
        return draw
    }
    else {
        return win
    }
 
    
}

function game(){
    let humanCounter = 0
    let compCounter = 0 
    for(let i = 0; i<5; i++ ){
        let userInput = prompt('Enter your choice')
        userInput = userInput.toLowerCase()
        compInput = getComputerChoice()
        if(playRound(userInput,compInput) == win){
            humanCounter++ 
        }
        else if(playRound(userInput,compInput) == lose){
            compCounter ++ 
        }
        else{
            continue
        }
    }

    if(humanCounter < compCounter){
        console.log('You lost')
    }
    else if(humanCounter > compCounter){
        console.log('You won')
    }
    else{
        console.log('It is a draw')
    }

}
const container = document.querySelector("#container")

const buttons = document.querySelectorAll ("button")

let win = 'You win'
let lose = 'You lose'
let draw = 'It is a tie'



buttons.forEach((button) => {
      
    button.addEventListener('click', () => {
        let play = button.className
        let comp = this.getComputerChoice()
        let counterPlay = 0
        x = playRound(play)
        let playCounter = document.createElement('p')
        playCounter.textContent =counterPlay
        container.append(playCounter)
        
    })

})

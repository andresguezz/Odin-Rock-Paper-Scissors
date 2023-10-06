const computerChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('player-choice')
const result = document.getElementById ('result')
const button = document.querySelectorAll ('button')
let buttonChoice
let compuRandom
let finalResult
let roundPlayed = 0
let computerScore = 0
let playerScore = 0


button.forEach(buttons => buttons.addEventListener('click', (e) =>{
    buttonChoice = e.target.id 
    playerChoice.innerHTML = buttonChoice
    randomChoice()
    computerChoice.innerHTML = compuRandom
    Results()
    result.innerHTML = finalResult
    if(finalResult === 'You Won!'){
        playerScore ++
    }
    if (finalResult === 'You lose!'){
        computerScore ++
    }
    console.log('this are rounds' + roundPlayed)
    console.log('this is the player' +playerScore)
    console.log('this is a computer' + computerScore)
    roundPlayed ++
    if (roundPlayed >= 5){
        endGame()
        playerScore = 0;
        computerScore = 0;
        roundPlayed = 0;
    }
    
}))

function randomChoice(){
    const randomizer = Math.floor(Math.random()*3 + 1) 

    if (randomizer === 1){
        compuRandom = 'Rock'
    }
    if (randomizer === 2){
        compuRandom = 'Paper'
    }
    if (randomizer === 3){
        compuRandom = 'Scissors'
    }
};

function Results(){
     if (buttonChoice === compuRandom){
        finalResult = 'A tie'
     }
     else if(
        buttonChoice == 'Rock' && compuRandom == 'Scissors' ||
        buttonChoice == 'Paper' && compuRandom == 'Rock' ||
        buttonChoice == 'Scissors' && compuRandom == 'Paper'
     ){
        finalResult = 'You Won!'
     }
     else{
        finalResult = 'You lose!'
     }
}

function endGame(){
    if(computerScore > playerScore){
        prompt('You lose mister')
    }
    else if (computerScore < playerScore){
        prompt('You won yay')
    }else{
        prompt('looks like a tie to me ')
    }
}



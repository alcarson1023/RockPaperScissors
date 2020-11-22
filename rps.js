function computerPlay(){
    let computerChoice = ''
    let result = ''
    let userScore = 0
    let computerScore = 0

    // Uses the current time in milliseconds to generate a random number based on the last 2 digits.
    const randomNum = Date.now() % 100
    randomNum < 33 ? computerChoice = 'rock' :
    randomNum < 66 ? computerChoice = 'paper' :
    computerChoice = 'scissors'





    /* MAKE SURE THIS IS UPDATED TO LOOP UNTIL AN ANSWER IS ACCEPTED */
    // Accept the user's choice, convert it to lowercase & trim it. Make sure it's valid.
    let inputToCheck = ''
    function getChoice(){
        let inputToCheck = prompt('Rock, Paper, or Scissors?\n(Please enter exactly)', '').toLowerCase().trim()
        return(inputToCheck)
    }
    let userChoice = getChoice()
    
    if(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors'){
        let userChoice = inputToCheck
    } else {
        userChoice = getChoice()
    }






    console.log(`User choice: ${userChoice}. ComputerChoice: ${computerChoice}`)
    // Ternary statements to find the winner. If it's a tie, return tie.
    userChoice == computerChoice ? (result = 'It\'s a tie!') :

    // If it's not a tie, check to see if the user won. Otherwise, computer wins.
    userChoice == 'rock' && computerChoice == 'scissors' ? (alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`), userScore ++) :
    userChoice == 'paper' && computerChoice == 'rock' ? (alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`), userScore ++) :
    userChoice == 'scissors' && computerChoice == 'paper' ? (alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`), userScore ++) :
    (alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. Computer wins!`), computerScore ++)

    console.log(result)


    // return(play)
}

computerPlay()

// fullGame(){

// }
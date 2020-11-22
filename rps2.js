function fullGame(){
    let gamesPlayed = 0;
    let userScore = 0;
    let computerScore = 0;

    while(gamesPlayed < 5){
        let computerChoice = ''
        // Uses the current time in milliseconds to generate a random number based on the last 2 digits.
        const randomNum = Date.now() % 100
        randomNum < 33 ? computerChoice = 'rock' :
        randomNum < 66 ? computerChoice = 'paper' :
        computerChoice = 'scissors'

        // Accept the user's choice, convert it to lowercase & trim it. Don't proceed until it's valid.
        let userChoice = prompt('Please enter "Rock", "Paper", or "scissors".', '').toLowerCase().trim()
        while(userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors'){
            userChoice = prompt('Your input was not valid.\nPlease enter "Rock", "Paper", or "scissors".', '').toLowerCase().trim()
            return(gamesPlayed, userScore, computerScore)
        }   

        // If statements to find the winner. If it's a tie, return tie.
        if(userChoice == computerChoice){
            alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. It's a tie!`)
        }
        // If it's not a tie, check to see if the user won. Otherwise, computer wins.
        else if(userChoice == 'rock' && computerChoice == 'scissors'){
            alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`);
            userScore ++;
        }
        else if(userChoice == 'paper' && computerChoice == 'rock'){
            alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`);
            userScore ++;
        }
        else if(userChoice == 'scissors' && computerChoice == 'paper'){
            alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`);
            userScore ++;
        }
        else{
            alert(`User chose: ${userChoice}. Computer chose: ${computerChoice}. Computer wins!`);
        }
        
        gamesPlayed ++
    }
    // Check the scores, report the winner.
    if(computerScore > userScore){
        alert(`Computer wins ${computerScore} to ${userScore}`)}
    else if(computerScore < userScore){
        alert(`User wins ${userScore} to ${computerScore}`)}
    else{
        alert(`It's a tie! ${userScore} to ${computerScore}`)
    }
}
fullGame()
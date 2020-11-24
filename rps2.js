// Starting variables & functions
    let userScore = 0;
    let computerScore = 0;
    let gamesCounter = 0
    const buttons = document.querySelectorAll('.selection');
    const games = document.querySelector('#games');
    const winner = document.querySelector('#winner');
    const results = document.querySelector('#results');
    const reset = document.querySelector('#reset');
    const btnBox = document.querySelector('#btnBox');

// Whenever a button is pushed, set that button as the user's choice.

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userChoice = button.id;
            oneGame(userChoice)
        });
    });

// When the reset button is pushed, set everything back to zero.
    reset.addEventListener('click', function() {
        userScore = 0;
        computerScore = 0;
        gamesCounter = 0;
        winner.textContent = ``;
        results.textContent = ``;
        games.textContent = gamesCounter
        reset.style.cssText = 'display: none;'
        btnBox.style.cssText = 'display: block;'
    });

    function oneGame(userChoice){
        let computerChoice = ''
        
        // Uses the current time in milliseconds to generate a random number based on the last 2 digits.
        const randomNum = Date.now() % 100
        randomNum < 33 ? computerChoice = 'rock' :
        randomNum < 66 ? computerChoice = 'paper' :
        computerChoice = 'scissors'

        // If statements to find the winner. If it's a tie, return tie.
        if(userChoice == computerChoice){
            results.textContent = `User chose: ${userChoice}. Computer chose: ${computerChoice}. It's a tie!`
        }
        // If it's not a tie, check to see if the user won. Otherwise, computer wins.
        else if(userChoice == 'rock' && computerChoice == 'scissors'){
            results.textContent = `User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`;
            userScore ++;
        }
        else if(userChoice == 'paper' && computerChoice == 'rock'){
            results.textContent = `User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`;
            userScore ++;
        }
        else if(userChoice == 'scissors' && computerChoice == 'paper'){
            results.textContent = `User chose: ${userChoice}. Computer chose: ${computerChoice}. User wins!`;
            userScore ++;
        }
        else{
            results.textContent = `User chose: ${userChoice}. Computer chose: ${computerChoice}. Computer wins!`;
            computerScore ++;
        }
        gamesCounter += 1
        games.textContent = gamesCounter

        // Perform end-of-game actions (score reporting, game reset)
        if(gamesCounter === 5){
            // Check the scores, report the winner.
            if(computerScore > userScore){
                winner.textContent = `Computer wins ${computerScore} to ${userScore}`
            }
            else if(computerScore < userScore){
                winner.textContent = `User wins ${userScore} to ${computerScore}`
            }
            else{
                winner.textContent = `It's a tie! ${userScore} to ${computerScore}`
            }
            reset.style.cssText = 'display: block;'
            btnBox.style.cssText = 'display: none;'
        }
    }
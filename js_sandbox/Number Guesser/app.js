//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3

// UI Elements 
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('#message')

// Assign UI Min and Max
minNum.textContent = min
maxNum.textContent = max

//Play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})

// Listen for guess 
guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessInput.value)

    //Check if Won
    if (guess === winningNum) {
        //calling gameOver function
        gameOver(true, `${winningNum} is the correct number, YOU WIN!`)
    } else {
        //Wrong number
        guessesLeft -= 1 // guessesLeft = guessesLeft-1
        if (guessesLeft === 0) {
            //calling gameOver function
            gameOver(false, `Game Over, you lost. The correct number is ${winningNum}`)
            //Validate
        } else if (isNaN(guess) || guess < min || guess > max) {
            //Set message
            setMessage(`Please enter the number between ${min} and ${max}`, 'red')
            //Resetting guesses left
            guessesLeft = 3
            //Resetting value
            guessInput.value = ''
        } else {
            //Change  border color
            guessInput.style.borderColor = 'red'
            //Resetting value
            guessInput.value = ''
            //Let player know the guesses left
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
}
)

//Game over
function gameOver(won, msg) {
    let color
    won === true ? color = 'green' : color = 'red'
    //Disable input
    guessInput.disabled = true
    //Change  border color
    guessInput.style.borderColor = color
    //set text color
    message.style.color = color
    //Set message
    setMessage(msg)
    //Play again?
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

//Get Winning Number

function getRandomNum(min, max){

    return Math.floor(Math.random() * (max - min + 1)+min)
}

//Setting the error message
function setMessage(msg, color) {
    //setting the color
    message.style.color = color
    //setting the message
    message.textContent = msg
}
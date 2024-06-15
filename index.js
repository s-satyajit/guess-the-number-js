let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

// let prevGuess = []
let newNum = 1

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert(`Enter a valid number`)
    } else if(guess < 1) {
        alert(`Enter a number more than 1`)
    } else if(guess > 100) {
        alert(`Enter a number less than 100`)
    } else {
        // prevGuess.push(guess)
        if(newNum === 11) {
            displayMessage(`Game Over. The random number was ${randomNumber}`)
            endGame()
        } else {
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage('The number is TOOO low')
    } else if(guess > randomNumber) {
        displayMessage(`The number is TOOO high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    newNum++
    remaining.innerHTML = `${11 - newNum}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled' , '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        // prevGuess = []
        newNum = 1
        remaining.innerHTML = `${11 - newNum}`
        guessSlot.innerHTML = '';
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    }) 
}

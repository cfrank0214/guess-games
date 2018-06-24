let firstArg = 0;
let secondArg = 100;
let amoutOfGuesses;
let guessedNumber = getRandom(firstArg, secondArg)

let gameChoiceElement = document.getElementById('gameChoice')
let computerGameElement = document.getElementById('computerGame')
let humanGameElement = document.getElementById('humanGame')

function say(message) {
    document.getElementById('output').textContent = message;
}
function startGame() {
    say('Press H to play human guess or C to play computer guess')
    amoutOfGuesses = 1
    gameChoiceElement.className = ''
    computerGameElement.className = 'hidden'
    humanGameElement.className = 'hidden'
}

function gameChoice(Answer) {
    if (Answer == 'H') {
        gameChoiceElement.className = 'hidden'
        computerGameElement.className = 'hidden'
        humanGameElement.className = ''
        say('I am thinking of a number between '
            + firstArg + ' and ' + secondArg +
            '. Please guess what it is.')
    } else if (Answer == 'C') {
        gameChoiceElement.className = 'hidden'
        computerGameElement.className = ''
        humanGameElement.className = 'hidden'
        say('Please think of a number between ' + firstArg + ' and ' + secondArg +
            ' (inclusive).\n I will try to guess it.\n Is it...' + guessedNumber +
            '\n Press Correct Button if it is correct,\n Press High Button if its higher than ' + guessedNumber +
            ',\n Press Low Button if its lower than ' + guessedNumber)
    }
}
/*
Human guesses computer's number
*/
function humanGuess() {
    let Answer = document.querySelector('#humanGame input').value
    console.log('Human input ' + Answer)
    console.log('Comput number ' + guessedNumber)
    if (Answer == guessedNumber) {
        say('You got it! The number is ' + Answer + '!\n In just ' + amoutOfGuesses + ' tries!')
       
    } else {
        amoutOfGuesses++
        if (Answer > guessedNumber) {
            say('Your guess of ' + Answer + ' is too high!')
            

        }
        if (Answer < guessedNumber) {
            say('Your guess of ' + Answer + ' is too low!')
           
        }

    }
    document.querySelector('#humanGame input').value = '';
}
/*
Computer guesses Human's number
*/
function computerguess(Answer) {

    if (Answer === 'C') {
        say('Your number was ' + guessedNumber + '!\n I guessed it in ' + amoutOfGuesses + ' tries.');

    } else {


        if (Answer === 'H') {
            firstArg = guessedNumber + 1
            amoutOfGuesses++;
        }
        if (Answer === 'L') {
            secondArg = guessedNumber - 1
            amoutOfGuesses++;
        }
        guessedNumber = getRandom(firstArg, secondArg);
        if (firstArg > secondArg) {
            say('I think you are trying to cheat.');
            startGame()
        }
        say('Is ' + guessedNumber + ' your number?');
    }
}


function capitalization(name) {
    let nameClean = name.toString().trim();
    let capitalName = nameClean[0].toUpperCase() + nameClean.slice(1, nameClean.length)
    return capitalName
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
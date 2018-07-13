let firstArg;
let secondArg;
let amoutOfGuesses;
let guessedNumber 

let gameChoiceElement = document.getElementById('gameChoice')
let computerGameElement = document.getElementById('computerGame')
let humanGameElement = document.getElementById('humanGame')

function say(message) {
    document.getElementById('output').textContent = message;
}
function startGame() {
    say('Please choose which kind of game you want to play.')
    firstArg = 0;
    secondArg = 100;
    amoutOfGuesses = 1
    guessedNumber = getRandom(firstArg, secondArg)
    
    gameChoiceElement.className = ''
    computerGameElement.className = "invisible"
    humanGameElement.className = 'invisible'
}

function gameChoice(Answer) {
    if (Answer == 'H') {
        gameChoiceElement.className = 'invisible'
        computerGameElement.className = 'invisible'
        humanGameElement.className = ''
        say('I am thinking of a number between '
            + firstArg + ' and ' + secondArg +
            '. Please guess what it is.')
    } else if (Answer == 'C') {
        gameChoiceElement.className = 'invisible'
        computerGameElement.className = ''
        humanGameElement.className = 'invisible'
        say('Please think of a number \n  between ' + firstArg + ' and ' + secondArg +
            '\n I will try to guess it.\n Is it...' + guessedNumber + ' ?')
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
        setTimeout(function(){ startGame(); }, 3000);

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
        setTimeout(function(){ startGame(); }, 3000);
        

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
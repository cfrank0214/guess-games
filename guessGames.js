let firstArg = +process.argv[2]
let secondArg = +process.argv[3]
gameChoice();

function gameChoice() {
    console.log('Press H to play human guess or C to play computer guess')
    process.stdin.removeAllListeners('data');
    process.stdin.once('data', (chunk) => {
        let Answer = capitalization(chunk);
        if (Answer == 'H') {
            humanGuess(firstArg, secondArg)
        } else if (Answer == 'C') {
            computerguess(firstArg, secondArg)
        }
    });
}
/*
Human guesses computer's number
*/
function humanGuess(firstArg, secondArg) {
    let theNum = getRandom(firstArg, secondArg);
    console.log('I am thinking of a number between '
        + firstArg + ' and ' + secondArg +
        '. Please guess what it is.')

    let x = 1

    process.stdin.on('data', (chunk) => {
        let Answer = chunk;
        if (Answer == theNum) {
            console.log('You got it! The number is ' + Answer + '!')
            console.log('In just ' + x + ' tries!')
            gameChoice();
        } else {
            x++
            if (Answer > theNum) { console.log('Your guess is too high!') }
            if (Answer < theNum) { console.log('Your guess is too low!') }
            console.log('Please guess again...')
        }
    })
}
/*
Computer guesses Human's number
*/
function computerguess(min, max) {
    let i = 1;
    let guessedNumber = getRandom(min, max);
    console.log('Please think of a number between ' + min + ' and ' + max + ' (inclusive).');
    console.log('I will try to guess it.');
    console.log('Is it...' + guessedNumber);
    console.log('Enter Y for Yes, H if its higher than ' + guessedNumber + ', L if its lower than ' + guessedNumber + ': H')
    process.stdin.on('data', (answer) => {
        answer = capitalization(answer);
        if (answer === 'Y') {
            console.log('Your number was ' + guessedNumber + '!');
            console.log('I guessed it in ' + i + ' tries.');
            gameChoice();

        } else {
            if (answer === 'H') {
                min = guessedNumber + 1
                i++;
            } if (answer === 'L') {
                max = guessedNumber - 1
                i++;
            }
            guessedNumber = getRandom(min, max);

            if (min > max) {
                console.log('I think you are trying to cheat.');
                process.exit()
            }
            console.log('Is ' + guessedNumber + ' your number?');
        }
    });

}

function capitalization(name) {
    let nameClean = name.toString().trim();
    let capitalName = nameClean[0].toUpperCase() + nameClean.slice(1, nameClean.length)
    return capitalName
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // console.log(“between ” + min + ” and ” + max)
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
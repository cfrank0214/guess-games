function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  function guess(min, max){
      let i = 1;
      let guessedNumber = getRandomIntInclusive(min, max);
      console.log('Please think of a number between ' + min + ' and ' + max + ' (inclusive).');
      console.log('I will try to guess it.');
      console.log('Is it...' + guessedNumber );
      console.log('Enter Y for Yes, H if its higher than ' + guessedNumber + ', L if its lower than ' + guessedNumber + ': H')
      process.stdin.on('data', (answer) => {
        answer = capitalization(answer);
        if(answer === 'Y'){
            console.log('Your number was ' + guessedNumber + '!');
            console.log('I guessed it in ' + i + ' tries.');
            process.exit();
        }else if(answer === 'H'){
            min = guessedNumber + 1
            i++;
        }else if(answer === 'L'){
            max = guessedNumber - 1
            i++;
        }
        if(min < max){
        guessedNumber = getRandomIntInclusive(min, max);
        console.log('Is ' + guessedNumber + ' your number?');
        }else{
            console.log('I think you are trying to cheat.');
            process.exit()
        }
    });
      
  }

function capitalization(name) {
    let nameClean = name.toString().trim();
    let capitalName = nameClean[0].toUpperCase() + nameClean.slice(1, nameClean.length)
    return capitalName
}
let firstArg = +process.argv[2];
let secondArg = +process.argv[3];
 guess(firstArg,secondArg);
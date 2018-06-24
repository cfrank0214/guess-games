function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   // console.log(“between ” + min + ” and ” + max)
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 
 }
 
 let firstArg = +process.argv[2]
 let secondArg = +process.argv[3]
 
 let theNum = getRandom(firstArg,secondArg);
 // console.log(theNum)
 
 humanGuess ()
 
 function humanGuess () {
 
 console.log('I am thinking of a number between '
    + firstArg +' and '+ secondArg +
    '. Please guess what it is.')
 
    let x = 1
    
    process.stdin.on('data', (chunk) => {
    
        let Answer = chunk;
        if (Answer == theNum)
        {
            console.log('You got it! The number is ' + Answer + '!')
            console.log('In just '+ x + ' tries!')
            process.exit()
        }
        x++
        if (Answer > theNum) {console.log('Your guess is too high!')}
        if (Answer < theNum) {console.log('Your guess is too low!')}
        
        console.log('Please guess again...')
    })
  
 
 }
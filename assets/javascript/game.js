var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//giving the computer the computer choices,  I wondered about puting a for loop here to go through it all but I wasn't too sure about it.

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;
//setting for zero so that the user can start fresh.  

var aiGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
//Making it to where the computer makes a guess out of the length of the computerchoices array.
function countGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
    document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function restart() {
    aiGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessesLeft = 9;
    letterUser = [];
}

// When the user presses a key, it will run the following function..
document.onkeyup = function (event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userGuess);
    countGuessesLeft();
    farUserGuesses();

    if (userGuess === aiGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
    }
    else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
    }
};



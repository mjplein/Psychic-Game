//declare variables
    //letter guesses (a-z)
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //wins (starts at "0")
    var wins = 0;
    //losses (starts at "0")
    var losses = 0;
    //guesses left (starts at "9")
    var guessesLeft = 9;
    //display user's guess on screen
    var lettersSoFar = [];
    //user's guess
    var userGuess = null;

//get computer to randomly guess letter
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//get user's input
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //stores user's input and decreases number of "guessesLeft"
    if (lettersSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        lettersSoFar[lettersSoFar.length]=userGuess;
        guessesLeft--;
    }

    //compares computer's choice with user's guess and if a match, counts as a win then resets game
    if (computerChoice == userGuess) {
        wins++;
        guessesLeft = 9;
        lettersSoFar = [];
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    //Once guesses reach 0 game resets
    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        lettersSoFar = [];
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    //displays progress on screen
    var html = "<h1>The Psychic Game</h1>" + "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + lettersSoFar + "</p>";
    document.querySelector("#game").innerHTML = html;
}
//create secretNumber
var secretNumber = 4;

//ask user to guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is correct
if(guess === secretNumber) {
	alert('You got it right!');
} else if (guess > secretNumber) {
	alert("That number is too high. Refresh the page to try again.");
} else {
	alert("That number is too low. Refresh the page to try again.");
}

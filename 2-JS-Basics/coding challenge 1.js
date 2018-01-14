//Player names
var player1;    var player2;   var player3;

// Player heights
var p1Height;   var p2Height;   var p3Height;

// Player ages
var p1Age;      var p2Age;      var p3Age;

// Player scores
var p1Score;    var p2Score;    var p3Score;

//Ask Player 1 for inputs.
player1 = prompt('Player 1, what\'s your name?');
p1Height = prompt(player1 + ', how tall are you? (CM)');
p1Age = prompt(player1 + ', what\'s your age?');
console.log(player1 + ' is ' + p1Height + 'cm. tall and ' + p1Age + ' years old.');

//Ask Player 2 for inputs.
player2 = prompt('Player 2, what\'s your name?');
p2Height = prompt(player2 + ', how tall are you? (CM)');
p2Age = prompt(player2 + ', what\'s your age?');
console.log(player2 + ' is ' + p2Height + 'cm. tall and ' + p2Age + ' years old.');

//Ask Player 3 for inputs.
player3 = prompt('Player 3, what\'s your name?');
p3Height = prompt(player3 + ', how tall are you? (CM)');
p3Age = prompt(player3 + ', what\'s your age?');
console.log(player3 + ' is ' + p3Height + 'cm. tall and ' + p3Age + ' years old.');

// Claculate and print scores for the tree players.
p1Score = parseInt(p1Height) + 5 * parseInt(p1Age);
console.log(player1 + '\'s score is ' + p1Score);
p2Score = parseInt(p2Height) + 5 * parseInt(p2Age);
console.log(player2 + '\'s score is ' + p2Score);
p3Score = parseInt(p3Height) + 5 * parseInt(p3Age);
console.log(player3 + '\'s score is ' + p3Score);

// Find out who the winner is.
if (p1Score > p2Score && p3Score) {
  console.log(player1.toUpperCase() + ' WINS THE GAME!');
} else if (p2Score > p1Score && p3Score) {
  console.log(player2.toUpperCase() + ' WINS THE GAME!');
} else if (p3Score > p1Score && p2Score) {
  console.log(player3.toUpperCase() + ' WINS THE GAME!');
} else {
  console.log('It\'s a draw.\nEVERYONE WINS!');
}
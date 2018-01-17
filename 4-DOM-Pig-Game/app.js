/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none'; // Hide dice before the game starts


document.querySelector('.btn-roll').addEventListener('click', function() { // When the player clicks the roll dice button
  diceValue = Math.floor(Math.random() * 6) + 1; // Picks a random number between 1 and 6 and stores it to var diceValue
  var diceDOM = document.querySelector('.dice'); //Shorthand for the dice's document selector property
  diceDOM.style.display = 'block'; // Displays the dice
  diceDOM.src = 'dice-' + diceValue + '.png' // Displays the correct .png file for the dice, based on random diceValue
});



// document.querySelector('#current-' + activePlayer).textContent = dice; //Display score for current dice roll
// var x = document.querySelector('#score-' + activePlayer).textContent //Store score for current dice roll to var x

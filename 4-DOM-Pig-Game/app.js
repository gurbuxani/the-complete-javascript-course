// Please note, this is only practice code. Therefore, every line is commented to reinforce learning.

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice; // Declare global variables

init(); // Initialize game

// ROLL BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() { // When the player clicks the Roll Dice button
  diceValue = Math.floor(Math.random() * 6) + 1; // Picks a random number between 1 and 6 and stores it to var diceValue
  var diceDOM = document.querySelector('.dice'); //Shorthand for the dice's document selector property
  diceDOM.style.display = 'block'; // Displays the dice
  diceDOM.src = 'dice-' + diceValue + '.png' // Displays the correct .png file for the dice, based on random diceValue
  
  if (diceValue !== 1) { // If the random dice value is not 1
    roundScore += diceValue; // Add dice value to the round score
    document.querySelector('#current-' + activePlayer).textContent = roundScore; //Display the total round score for current dice roll
  } else {
    nextPlayer(); // Switch players
  }
});

// HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function() { // When the player clicks the Hold button
  score[activePlayer] += roundScore; // Add the active player's round score to their global score
  document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]; // Update the UI to show active player's global score
  
  if (score[activePlayer] >= 100) { // If the active player's global score is more than 100
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'; // Update the UI to show active player's name as 'WINNER!'
    document.querySelector('.dice').src = 'winner-' + activePlayer + '.png'; // Update the UI to show the winner's trophy in place of the dive 
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // Remove 'active' CSS class from the active player
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // Add 'winner' CSS class to the active player to highlight their victory
    gameOver(); // Call the gameOver function
  } else {
  nextPlayer(); // Switch players 
  }
});

// NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', init); // When the player clicks the New Game button call the init function
  
function init() {
  score = [0, 0]; // Set score to 0 for both players
  activePlayer = 0; // Set Player 1 as default active player
  roundScore = 0; // set round score to 0 for both players
  
  document.querySelector('.dice').style.display = 'none'; // Hide dice before the first roll
  
  document.getElementById('score-0').textContent = '0'; // Update UI to show Player 1's global score as 0
  document.getElementById('score-1').textContent = '0'; // Update UI to show Player 2's global score as 0
  document.getElementById('current-0').textContent = '0'; // Update UI to show Player 1's round score as 0
  document.getElementById('current-1').textContent = '0'; // Update UI to show Player 2's round score as 0
  
  document.getElementById('name-0').textContent = 'Player 1'; // Update UI to show Player 1
  document.getElementById('name-1').textContent = 'Player 2'; //Update UI to show Player 2
  
  document.querySelector('.player-0-panel').classList.remove('winner'); //Update UI to remove 'winner' CSS class from Player 1
  document.querySelector('.player-1-panel').classList.remove('winner'); //Update UI to remove 'winner' CSS class from Player 2 
  
  document.querySelector('.player-0-panel').classList.remove('active'); //Update UI to remove 'active' CSS class from Player 1 
  document.querySelector('.player-1-panel').classList.remove('active'); //Update UI to remove 'active' CSS class from Player 2 
  
  document.querySelector('.player-0-panel').classList.add('active'); //Update UI to add 'active' CSS class to Player 1
  
  document.querySelector('.btn-roll').style.display = 'block'; // Update UI to display the Roll Dice button
  document.querySelector('.btn-hold').style.display = 'block'; // Update UI to display the Hold button
}


function nextPlayer() { // This function switches players
  roundScore = 0; // Update the active player's round score to 0
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // If player 1 is active, switch to player 2 ... and vice-versa
    
  document.getElementById('current-0').textContent = '0'; // Update UI to show roundscore as 0 for player 1
  document.getElementById('current-1').textContent = '0'; // Update UI to show roundscore as 0 for player 2
  
  document.querySelector('.player-0-panel').classList.toggle('active'); // Toggle 'active' CSS class for player 1
  document.querySelector('.player-1-panel').classList.toggle('active'); // Toggle 'active' CSS class for player 2
}

function gameOver() {
  document.querySelector('.btn-roll').style.display = 'none'; // Update UI to hide the Roll Dice button
  document.querySelector('.btn-hold').style.display = 'none'; // Update UI to hide the Hold button
}

//var player1Name =
// var player1 = prompt("player 1 name :");
// var player2 = prompt("player 2 name :");
// var p1 = document.getElementById('p1');
// var p2 = document.getElementById('p2');
// p1.innerText = `${player1}`;
// p2.innerText = `${player2}`;

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var btnDice = document.querySelector(".roll-dice-btn");
var result = document.querySelector("h1");
var scorePlayer1 = document.querySelector(".player-1-score > .round1");
var scorePlayer2 = document.querySelector(".player-2-score > .round1");
var totalscorep1 = document.querySelector(".player-1-score > .total");
var totalscorep2 = document.querySelector(".player-2-score > .total");
var score1 = 0;
var score2 = 0;

btnDice.addEventListener('click', (event) => {
  dice1.style.transform = "rotate(360deg)";
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var player1Dice = "images/dice" + randomNumber1 + ".png";
  dice1.setAttribute("src", player1Dice);
  score1 += randomNumber1;
  console.log(dice1);
  scorePlayer1.innerText = `${randomNumber1}`;
  totalscorep1.innerText = `${score1}`;

  dice2.style.transform = "rotate(-360deg)";
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var player2Dice = "images/dice" + randomNumber2 + ".png";
  dice2.setAttribute("src", player2Dice);
  score2 += randomNumber2;
  console.log(score2);
  scorePlayer2.innerText = `${randomNumber2}`;
  totalscorep2.innerText = `${score2}`;
});
// TODO:
// - grab user name
// - display score in each placeHolder
// - display the winner / end game
// - start a new game
// refactor the table

// if (player1Dice > player2Dice) {
//   result.innerHTML = " 🚩 Player 1 wins!";
// } else if (player1Dice === player2Dice) {
//   result.innerHTML = " Draw!";
// } else {
//   result.innerHTML = " Player 2 wins! 🚩";
// }

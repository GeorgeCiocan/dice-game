//background color
let background = document.querySelector("body");
background.style.backgroundColor = `rgb(${Math.trunc(
  Math.random() * 256
)},${Math.trunc(Math.random() * 256)},${Math.trunc(Math.random() * 256)})`;

// selecting the needed DOM elements
let pointsLeft = document.getElementsByClassName("points left")[0];
let pointsRight = document.getElementsByClassName("points right")[0];
let showResult = document.getElementsByClassName("result")[0];

//declaring the players
let playerOne = prompt("Please enter first player's name");
let playerTwo = prompt("Please enter second player's name");
let playerOneScore = 0;
let playerTwoScore = 0;

//function for the onClick event
function rollTheDice(event) {
  let side = event.target.id;
  let firstRoll = Math.trunc(Math.random() * 7);
  let secondRoll = Math.trunc(Math.random() * 7);
  let thirdRoll = Math.trunc(Math.random() * 7);

  let result = function resultAfterRoll(player) {
    let string = `<p>${player}, you rolled ${firstRoll}, ${secondRoll} and ${thirdRoll}</p>`;
    return string;
  };

  if (side === "btn-left") {
    pointsLeft.innerHTML = result(playerOne);
    playerOneScore = firstRoll + secondRoll + thirdRoll;
    showResult.innerHTML = "";
  } else if (side === "btn-right") {
    pointsRight.innerHTML = result(playerTwo);
    playerTwoScore = firstRoll + secondRoll + thirdRoll;
    // Not so proud that the logic for deciding the winner
    // is here, but then I'd have to make a function
    // for each button, and then I kind of loose the
    // opportunity for using event parameter, that
    // allows us to show the connection between two different buttons, but the same function
    // (regarding line 18)
    if (playerOneScore < playerTwoScore) {
      showResult.innerText = playerTwo + " won!";
    } else if (playerOneScore > playerTwoScore) {
      showResult.innerText = playerOne + " won!";
    } else {
      showResult.innerText = "We have a tie!";
    }
  }
}

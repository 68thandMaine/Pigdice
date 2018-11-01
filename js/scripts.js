//Business logic
function Player() {
  this.score = 0
  this.totalScore = 0
}

Player.prototype.hold = function() {
  this.totalScore += this.score
  playerOne.scoreChecker()
  playerTwo.scoreChecker()
  this.score = 0
}

Player.prototype.scoreChecker = function() {
  if (playerOne.totalScore >= 100) {
    alert("Congratulations Player One, you have has won!")
  } else if (playerTwo.totalScore >= 100) {
    alert("Congratulations Player Two, you have won!")
  }
}

Player.prototype.roll = function(turn) {
  var number = Math.floor((Math.random() * 6) + 1)
  $("#roll-number").text(number)
  if (turn === "PlayerOne") {
    if (number === 1) {
      playerOne.score = 0
    } else {
      playerOne.score += number
    }
  } else if (turn === "PlayerTwo") {
    if (number === 1) {
      playerTwo.score = 0
    } else {
      playerTwo.score += number
    }
  }
}

//User interface logic
var playerOne = new Player();
var playerTwo = new Player();

function playerOneContols() {
  $("#player-one-roll").click(function() {
    var result = playerOne.roll("PlayerOne")
    $("#turn-score").text(playerOne.score)
    if (playerOne.score === 0) {
      document.getElementById("player-one-roll").disabled = true;
      document.getElementById("player-two-roll").disabled = false;
      $("#roll-number").text("You rolled a 1. It's player two's turn.")
    }
  });
  $("#player-one-hold").click(function() {
    var result = playerOne.hold()
    $("#total-score").text(playerOne.totalScore)
    $("#turn-score").text(playerOne.score)
    document.getElementById("player-one-roll").disabled = true;
    document.getElementById("player-two-roll").disabled = false;
    $("#roll-number").text("It's player two's turn.")
  });

}
function playerTwoControls() {
  $("#player-two-roll").click(function() {
    var result = playerTwo.roll("PlayerTwo")
    $("#player-two-turn-score").text(playerTwo.score)
    if (playerTwo.score === 0) {
      document.getElementById("player-two-roll").disabled = true;
      document.getElementById("player-one-roll").disabled = false;
      $("#roll-number").text("You rolled a 1. It's player one's turn.")
    }
  });
  $("#player-two-hold").click(function() {
    var result = playerTwo.hold()
    $("#player-two-total-score").text(playerTwo.totalScore)
    $("#player-two-turn-score").text(playerTwo.score)
    document.getElementById("player-two-roll").disabled = true;
    document.getElementById("player-one-roll").disabled = false;
    $("#roll-number").text("It's player one's turn.")
  });
}

$(document).ready(function() {
  playerOneContols();
  playerTwoControls();
});

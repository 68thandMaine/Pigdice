//Business logic
function Player() {
  this.score = 0
  this.totalScore = 0
}

Player.prototype.hold = function() {
  this.totalScore += this.score
  this.score = 0
}

Player.prototype.roll = function(turn) {
  var number = Math.floor((Math.random() * 6) + 1)
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
  return number
}

//User interface logic
var playerOne = new Player();
var playerTwo = new Player();

function playerOneControls() {
  $("#player-one-roll").click(function() {
    var number = playerOne.roll("PlayerOne")
    $("#roll-number").text(number)
    $("#turn-score").text(playerOne.score)
    var accumulated = playerOne.totalScore + playerOne.score
    console.log(accumulated);
    if (accumulated >= 20) {
      $("#player-one").addClass("opaque")
      $("#player-two").addClass("opaque")
      var buttons = document.getElementsByClassName("move-button");
      for(var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
      $("#roll-number").text("Congratulations Player One, you have won!")
    } else if (playerOne.score === 0) {
      $("#player-one").addClass("opaque")
      $("#player-two").removeClass("opaque")
      document.getElementById("player-one-roll").disabled = true;
      document.getElementById("player-one-hold").disabled = true;
      document.getElementById("player-two-roll").disabled = false;
      document.getElementById("player-two-hold").disabled = false;
      $("#roll-number").text("You rolled a 1. It's player two's turn.")
    }
  });
  $("#player-one-hold").click(function() {
    playerOne.hold()
    console.log(playerOne.totalScore);
    $("#total-score").text(playerOne.totalScore)
    $("#turn-score").text(playerOne.score)
    $("#player-one").addClass("opaque")
    $("#player-two").removeClass("opaque")
    document.getElementById("player-one-roll").disabled = true;
    document.getElementById("player-one-hold").disabled = true;
    document.getElementById("player-two-roll").disabled = false;
    document.getElementById("player-two-hold").disabled = false;
    $("#roll-number").text("It's player two's turn.")
  });
}

function playerTwoControls() {
  $("#player-two-roll").click(function() {
    var number = playerTwo.roll("PlayerTwo")
    $("#roll-number").text(number)
    $("#player-two-turn-score").text(playerTwo.score)
    var accumulated = playerOne.totalScore + playerOne.score
    if (accumulated >= 20) {
      $("#player-one").addClass("opaque")
      $("#player-two").addClass("opaque")
      var buttons = document.getElementsByClassName("move-button");
      for(var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
      $("#roll-number").text("Congratulations Player Two, you have won!")
    } else if (playerTwo.score === 0) {
      $("#player-two").addClass("opaque")
      $("#player-one").removeClass("opaque")
      document.getElementById("player-two-roll").disabled = true;
      document.getElementById("player-two-hold").disabled = true;
      document.getElementById("player-one-roll").disabled = false;
      document.getElementById("player-one-hold").disabled = false;
      $("#roll-number").text("You rolled a 1. It's player one's turn.")
    }
  });
  $("#player-two-hold").click(function() {
    playerTwo.hold()
    $("#player-two-total-score").text(playerTwo.totalScore)
    $("#player-two-turn-score").text(playerTwo.score)
    $("#player-two").addClass("opaque")
    $("#player-one").removeClass("opaque")
    document.getElementById("player-two-roll").disabled = true;
    document.getElementById("player-two-hold").disabled = true;
    document.getElementById("player-one-roll").disabled = false;
    document.getElementById("player-one-hold").disabled = false;
    $("#roll-number").text("It's player one's turn.")
  });
}

$(document).ready(function() {
  playerOneControls();
  playerTwoControls();
  $("#play-again").click(function() {
    location.reload();
  });
});

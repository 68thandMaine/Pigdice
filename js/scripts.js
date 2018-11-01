//Business logic
function Player() {
  this.score = 0
  this.totalScore = 0
}

Player.prototype.hold = function () {
  this.totalScore += this.score
  playerOne.scoreChecker()
  playerTwo.scoreChecker()
  this.score = 0
}

Player.prototype.scoreChecker = function () {
  if (playerOne.totalScore >= 100) {
    alert("Congratulations Player One, you have has won!")
  }
  else if (playerTwo.totalScore >= 100 ){
    alert("Congratulations Player Two, you have won!")
  }
}

Player.prototype.roll = function (turn) {
  var number = Math.floor((Math.random() * 6 ) + 1)
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

$(document).ready(function(){
  $("#player-one-roll").click(function() {
    var result = playerOne.roll("PlayerOne")
    $("#turn-score").text(playerOne.score)
  });
  $("#player-one-hold").click(function() {
    var result = playerOne.hold()
    $("#total-score").text(playerOne.totalScore)
    $("#turn-score").text(playerOne.score)
  });

  $("#player-two-roll").click(function() {
    var result = playerTwo.roll("PlayerTwo")
    $("#player-two-turn-score").text(playerTwo.score)
  });
  $("#player-two-hold").click(function() {
    var result = playerTwo.hold()
    $("#player-two-total-score").text(playerTwo.totalScore)
    $("#player-two-turn-score").text(playerTwo.score)
  });


});

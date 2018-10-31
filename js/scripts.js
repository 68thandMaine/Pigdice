//Business logic
function Player() {
  this.turn =
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
    alert("Congrats! PlayerOne has won")
  }
  else if (playerTwo.totalScore >=100 ){
    alert("Congratulations PlayerTwo, you have won!")
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


// this.totalScore = this.score + number
// Player.prototype.roll = function ("roll") {
//   if (action === "roll") {
//     return this.score += roll()
//   } else if (action === "hold") {
//     return this.totalScore += this.score
//   }
// }
// function dice () {
//   return (Math.floor((Math.random() * 6 ) + 1));
// }

// function turnScore (dice) {
// console.log(dice)
//  if (dice === 1) {
//   console.log(Player.score);
//   return Player.score - Player.score
// } else if (dice !== 1) {
//    return dice
//  }
// }

//User interface logic
var playerOne = new Player(turn = true);
var playerTwo = new Player;

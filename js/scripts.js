//Business logic
function Player() {
  this.score = 0
  // console.log( this.score);
  this.totalScore = 0
  // console.log(this.totalScore);

}
Player.prototype.hold = function () {
   this.totalScore += this.score
}

Player.prototype.roll = function () {
  var number = Math.floor((Math.random() * 6 ) + 1)
  // console.log(number);
  if (number === 1) {
    this.score = 0
  } else {
   this.score += number
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
var playerOne = new Player;
var playerTwo = new Player;

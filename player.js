var player1 = new Player("Markov", "X")
var player2 = new Player("Tchaikovsky", "O")
var currentPlayer = player1;

function Player(name, mark) {
  this.name = name;
  this.mark = mark;
}

var playerMessage = function(){
  $(turn).text("It's " + currentPlayer.name + "'s turn.");
}

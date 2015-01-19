function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};

var winMessage = function(){
  winner = board.won();
  if (winner === false) { return; };
  switch(winner){
    case "X":
      var message = "Logic overcomes pathos forevermore.";
      break;
    case "O":
      var message = "Tchaikovsky wins! Listen to Tchaikovsky's 5th Symphony in honor of his victory!";
      break;
    case "draw":
      var message = "Mathematics and music are in perfect equilibrium.";
      break;
  };
  var response = prompt(message + " Play again? (y/n)");
  if (response === "y") {
    console.log("heyads;fh");
    board.init();
  };

};


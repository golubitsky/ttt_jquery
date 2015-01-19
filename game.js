function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};

var endGame = function(){
  winner = board.won();
  if (winner === false) { return; };
  switch(winner){
    case "X":
      $(turn).text("Logic overcomes pathos. Markov wins.");
      break;
    case "O":
      $(turn).text("Tchaikovsky wins! Listen to Tchaikovsky's 5th Symphony in honor of his victory!");
      break;
    case "draw":
      $(turn).text("Mathematics and music are in perfect equilibrium.");
      break;
  };
  $('#play-again').css('display', 'block');
};

$('#play-again').on('click', function () {
  board.init();
  // var $parEl = $("<p></p>");
  // $parEl.text(input);
  // $("body").append($parEl);
  $(this).css('display', 'none');
});

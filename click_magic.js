for (var i = 0; i <= 2; i++) {
  for (var j = 0; j <= 2; j++) {
    var cell = "#row"+ i + " .col" + j;
    var turn = $('#turn');
    $(cell).click(function() {
      var x = parseInt($(this).attr('x'));
      var y = parseInt($(this).attr('y'));
      var pos = [x,y];
      var mark = board.placeMark(pos, currentPlayer.mark)

      if (mark) {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
        $(turn).text("It's " + currentPlayer.name + "'s turn.");
      } else {
        $(turn).text("Invalid move. It's still " + currentPlayer.name + "'s turn.");
      };

      board.render();
      winMessage();
    });
  };
};

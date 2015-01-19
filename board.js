var board = new Board();

function Board(){
  this.grid = [[" "," "," "], [" "," "," "], [" "," "," "]];
};

Board.prototype.init = function() {
  this.grid = [[" "," "," "], [" "," "," "], [" "," "," "]];
  this.render();
}
Board.prototype.won = function() {
  var diags = [
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
  ];

  var blanks = 0;
  for(i = 0; i < 3; i++){
    var xv = 0, xh = 0, ov = 0, oh = 0, xd = 0, od = 0;
    for(j = 0; j < 3; j++){
      if(this.grid[i][j] == 'X') xh += 1;
      if(this.grid[j][i] == 'X') xv += 1;
      if(this.grid[i][j] == 'O') oh += 1;
      if(this.grid[j][i] == 'O') ov += 1;
      if(i < 2){
        if(this.grid[diags[i][j][0]][diags[i][j][1]] == 'X') xd += 1;
        if(this.grid[diags[i][j][0]][diags[i][j][1]] == 'O') od += 1;
      }
      if(this.grid[i][j] == ' ') blanks += 1;
    }
    if(xv === 3 || xh === 3 || xd === 3)
      return 'X';
    if(ov === 3 || oh === 3 || od === 3)
      return 'O';
  }
  if(blanks === 0)
    return 'draw';
  return false;
};

Board.prototype.empty = function(pos){
  if (this.grid[pos[0]][pos[1]] !== " ") {
    return false;
  } else {
    return true;
  };
};

Board.prototype.placeMark = function(pos, mark) {
  if (this.empty(pos)) {
    this.grid[pos[0]][pos[1]] = mark;
    return true;
  } else {
    console.log("Invalid Move: Space Ocupado, Permiso")
    return false;
  };
};

Board.prototype.render = function(){
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      var cell = "#row"+ i + " .col" + j;
      $(cell).text(this.grid[i][j]);
    };
  };
};

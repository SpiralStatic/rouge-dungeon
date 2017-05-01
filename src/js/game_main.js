$(document).ready(function() {
  let display = new GameDisplay('gameCanvas');
  let logic = new GameLogic();
  let engine = new GameEngine(display, logic);
});

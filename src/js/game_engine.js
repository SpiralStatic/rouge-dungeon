class GameEngine {
  constructor(GameDisplay, GameLogic) {
    this.display = GameDisplay;
    this.gameLogic = GameLogic;
    this.draw();
  }

  draw() {
    this.display.drawView(this.gameLogic);
  }
}

class GameEngine {
  constructor(GameDisplay, GameLogic) {
    this.display = GameDisplay;
    this.gameLogic = GameLogic;
    this.state = 'TURN_TAKEN';

    this.onResize();
    this.draw();
  }

  onResize() {
    $(window).resize(() => {
      this.display.responsiveCanvas();
      this.redraw();
    });
  }

  redraw() {
    this.display.drawView(this.gameLogic);
    this.display.drawPlayer(this.gameLogic.player.position);
  }

  draw() {
    switch (this.state) {
      case 'WAITING_FOR_INPUT':
        if(this.gameLogic.getInput()) this.state = 'TURN_TAKEN';
        setTimeout(() => {
          this.draw();
        }, 0);
        break;
      case 'TURN_TAKEN':
        console.log("turn taken");
        this.display.drawView(this.gameLogic);
        this.display.drawPlayer(this.gameLogic.player.position);
        this.state = 'WAITING_FOR_INPUT';
        this.gameLogic.player.isTurn = true;
        this.draw();
        break;
      default:
    }
  }
}

class PlayerController {
  constructor() {
    this.position = {
      x: 12,
      y: 6
    };

    this.isTurn = true;

    this.setControls();
  }

  setControls() {
    /* [W, A, S, D, ↑, ←, →, ↓] */
    this.controls = [87, 65, 68, 83, 38, 37, 39, 40];

    $(window).on('keydown', (event) => {
      if(this.isTurn) this.playerMove(event.which);
    });
  }

  playerMove(keyPress) {
    switch (keyPress) {
      case this.controls[0]: case this.controls[4]:
        this.movePlayer(0, -1);
        break;
      case this.controls[1]: case this.controls[5]:
        this.movePlayer(-1, 0);
        break;
      case this.controls[2]: case this.controls[6]:
        this.movePlayer(1, 0);
        break;
      case this.controls[3]: case this.controls[7]:
        this.movePlayer(0, 1);
        break;
      default:
        break;
    }
  }

  movePlayer(diffX, diffY) {
    this.position.x += diffX;
    this.position.y += diffY;
    this.isTurn = false;
    console.log("turn")
  }
}

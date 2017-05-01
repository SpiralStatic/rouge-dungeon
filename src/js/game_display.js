class GameDisplay {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.container = $(this.canvas).parent();

    this.onResize();
    this.responsiveCanvas();
  }

  onResize() {
    $(window).resize(() => this.responsiveCanvas());
  }

  responsiveCanvas() {
    this.canvas.width = $(this.container).width();
    this.canvas.height = $(this.container).width() / 16 * 9; // 16:9 Ratio
    this.tileSize = this.canvas.width / 24;
  }

  drawView(GameLogic) {
    this.context.fillStyle = "#e3406e";
    GameLogic.area.map((row, i) => {
      row.map((tile, j) => {
        if(tile !== 0) this.drawTile(j, i);
      });
    });
  }

  drawTile(x, y) {
    this.context.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
  }
}

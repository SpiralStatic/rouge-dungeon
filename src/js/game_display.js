class GameDisplay {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.container = $(this.canvas).parent();

    this.images = [];

    this.responsiveCanvas();
    this.loadImages();
  }

  responsiveCanvas() {
    this.canvas.width = $(this.container).width();
    this.canvas.height = $(this.container).width() / 16 * 9; // 16:9 Ratio
    this.tileSize = this.canvas.width / 24;
  }

  drawView(GameLogic) {
    GameLogic.area.map((row, i) => {
      row.map((tile, j) => {
        this.drawTile(this.images[tile], j, i);
      });
    });
  }

  drawTile(image, x, y) {
    this.context.drawImage(image, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
  }

  drawPlayer(player) {
    this.drawTile(this.images[0], player.x, player.y);
  }

  loadImages() {
    const imageSrc = ["assets/images/0_PlayerRight.png", "assets/images/100_WoodWall.png", "assets/images/200_FancyPaved.png"];

    for(let i = 0; i < imageSrc.length; i++) {
      const tempImage = new Image();
      tempImage.src = imageSrc[i];
      this.images[imageSrc[i].replace(/\D/g, '')] = tempImage;
    }
  }
}

class GameDisplay {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.container = $(this.canvas).parent();

    this.images = [];

    this.onResize();
    this.responsiveCanvas();
    this.loadImages();
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
    GameLogic.area.map((row, i) => {
      row.map((tile, j) => {
        this.drawTile(this.images[tile], j, i);
      });
    });
  }

  drawTile(image, x, y) {
    this.context.drawImage(image, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
  }

  loadImages() {
    const imageSrc = ["assets/images/0_FancyPaved.png", "assets/images/1_WoodWall.png"];

    for(let i = 0; i < imageSrc.length; i++) {
      let tempImage = new Image();
      tempImage.src = imageSrc[i];
      this.images.push(tempImage);
    }
  }
}

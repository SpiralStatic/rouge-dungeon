class GameDisplay {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.container = $(this.canvas).parent();

    this.canvas.width = 1920;
    this.canvas.height = 1080;

    this.onResize();
    this.responsiveCanvas();
  }

  onResize() {
    $(window).resize(() => this.responsiveCanvas());
  }

  responsiveCanvas() {
    this.canvas.width = $(this.container).width();
    this.canvas.height = $(this.container).height();
  }
}

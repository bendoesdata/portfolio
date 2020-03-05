function setup() {
    var canvas = createCanvas(640, 640);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");

}

function draw() {
    const mid = width / 2;
    background('#08535A');
    stroke('#E3D5BC');
    strokeWeight(1);
    noFill();
    drawCircle(mid, height / 2, 300);
}

function drawCircle(x, y, d) {
    ellipse(x, y, d);
    if (d > 2) {
        drawCircle(x + (d * 0.5), y, d * 0.5);
        drawCircle(x - (d * 0.5), y, d * 0.5);
        // drawCircle(x, y - (d * 0.5), d * 0.5);
        // drawCircle(x, y + (d * 0.5), d * 0.5);
    }
}
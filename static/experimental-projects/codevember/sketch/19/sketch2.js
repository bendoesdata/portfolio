let a, b, c, d, e;

function setup() {
    createCanvas(710, 400);
    noStroke();
    a = color('#E7C95D');
    b = color('#D3725D');
    c = color('#A8D7C8');
    d = color('#433446');
    e = color('#B9B09F');
    noLoop(); // Draw only one time
}

function draw() {
    drawBand(a, b, c, d, e, 0, width / 128);
    drawBand(c, a, d, b, e, height / 2, width / 128);
}

function drawBand(v, w, x, y, z, ypos, barWidth) {
    let num = 5;
    let colorOrder = [v, w, x, y, z];
    for (let i = 0; i < width; i += barWidth * num) {
        for (let j = 0; j < num; j++) {
            fill(colorOrder[j]);
            rect(i + j * barWidth, ypos, barWidth, height / 2);
        }
    }
}
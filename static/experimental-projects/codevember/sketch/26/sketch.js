/*
Day 26 - SHADOW
*/
function setup() {
    createCanvas(640, 640);
    angleMode(DEGREES);
    noLoop();
    background(230); // black
}

function draw() {
    // background(230, 200) // gray

    translate(width / 2, height / 2);
    rotate(180);
    fill(30);
    stroke(230)

    let xOff = 30;
    let yOff = -150;
    let size = 200;
    for (let a = 0; a < 3; a++) {
        xOff = xOff - 65;
        yOff = yOff + 1;
        size = size + 20;
        rect(xOff, yOff, 40, size);
        // rect(x, y, w, h)
    }

    xOff = 30;
    yOff = -150;
    size = 200;
    rotate(180);
    for (let a = 0; a < 3; a++) {
        noStroke();
        fill(30, 20);
        xOff = xOff + 65;
        yOff = yOff + 1;
        size = size + 20;
        rect(xOff, yOff, 40, size);
        // rect(x, y, w, h)
    }
}
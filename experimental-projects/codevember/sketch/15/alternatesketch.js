// look at this example to add a starry background
// https://editor.p5js.org/Eddershaw/sketches/puBAzXcEy

function setup() {
    var canvas = createCanvas(1200, 1200);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");
    background(230);

    // translucent stroke using alpha value
    stroke(0, 0, 0, 10);

    frameRate(120);
}

function draw() {
    // draw two random chords each frame

    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
    randomChord();
}

function randomChord() {
    // find a random point on top of circle
    let angle1 = random(0, -1 * PI);
    let xpos1 = 200 + 200 * cos(angle1);
    let ypos1 = 200 + 200 * sin(angle1);

    // find another random point on bottom of circle
    let angle2 = random(0, 1 * PI);
    let xpos2 = 200 + 200 * cos(angle2);
    let ypos2 = 200 + 200 * sin(angle2);

    // draw a line between thems
    noFill();
    line(xpos1, ypos1, xpos2, ypos2);
    // bezier(xpos1, ypos1, xpos1 * 1.3, ypos1 * 1.3, xpos1 * 1.3, ypos1 * 1.3, xpos2, ypos2)
    // bezier(xpos1, ypos1, random(xpos1, xpos2), random(ypos1, ypos2), random(xpos1, xpos2), random(ypos1, ypos2), xpos2, ypos2)
}
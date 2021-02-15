function setup() {
    var canvas = createCanvas(800, 800);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");
    background(255, 255, 255);

    // translucent stroke using alpha value
    stroke(0, 0, 0, 5);
}

function draw() {
    // draw two random chords each frame

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

    // draw a line between them
    line(xpos1, ypos1, xpos2, ypos2);
}
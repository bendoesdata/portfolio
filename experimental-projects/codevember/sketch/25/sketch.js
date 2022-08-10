/*
Day 25 - OPEN
*/

let a = 7;
let b = 8;

let k = a / b; // define shape
let i = 1; // number rotations


function setup() {
    createCanvas(640, 640);
}

function draw() {
    // background(230, 200) // gray
    background(50, 100); // black
    translate(width / 2, height / 2);

    beginShape();
    stroke(230);
    noFill();
    strokeWeight(2);
    for (let a = 0; a < TWO_PI * i; a += 0.02) {
        let r = 200 * cos(k * a);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape();

    i = i + 0.01; // simulate real drawing of lines

    if (a < 8) {
        // uncomment for some trippy animations
        // a = a + 0.002; // rotates the circle
    } else {
        a = 8
    }

    k = a / b;
}
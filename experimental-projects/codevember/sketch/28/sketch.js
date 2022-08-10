// REPEAT RINGS
let mid;
let speed = -1;
let move = 1;
let offset;
let spacing;

// colors
c0 = [230, 50];
c1 = ['#D5DECD', '#323B5B'];
c2 = ['#7395B1', '#CF6C38'];
c3 = ['#B3B7B4', '#C83D15'];

function setup() {
    createCanvas(700, 700);
    mid = width / 2;
    angleMode(DEGREES);
    strokeCap(ROUND);
    offset = random(10, 50);
}

function draw() {
    background(color(c3[0]));
    translate(mid, mid);

    rotate(-135);

    noFill();
    strokeWeight(5);
    let c = c3[1];
    spacing = 50;
    for (let i = 0; i < 18; i++) {
        spacing = spacing + 30;
        // c = c + 2;
        stroke(c);
        push();
        rotate(-speed);
        arc(0, 0, spacing, spacing, 0, -i * 10);
        pop();
        speed = -speed;
    }

    speed = speed + move;
}
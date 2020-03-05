// lines version
let mid;

function setup() {
    createCanvas(640, 640);
    mid = width / 2;
    angleMode(DEGREES);
    strokeCap(SQUARE);
}

function draw() {
    background(230);
    let hr = hour();
    let sc = second();
    let minu = minute();
    let d = day();
    let mth = month();
    let yr = year();
    translate(mid, mid);

    push();
    rotate(0);
    noStroke();
    fill(30);
    textFont('Monospace');
    textSize(24);
    text('2019.' + mth + '.' + d, 140, 250);

    text('n o w', -250, 250);
    pop();

    rotate(-135);


    let endSc = map(sc, 0, 60, 0, 360);
    let endMin = map(minu, 0, 60, 0, 360);
    let endHr = map(hr % 12, 0, 12, 0, 360);
    let endDay = map(d, 0, 7, 0, 360);
    let endMonth = map(mth, 0, 12, 0, 360);

    noFill();
    strokeWeight(3);

    // arc(0, 0, 100, 100, 0, endSc);
    push();
    stroke(90);
    rotate(endSc);
    line(20, 20, 30, 30);
    pop();

    push();
    stroke(70);
    rotate(endMin);
    line(40, 40, 60, 60);
    pop();

    // arc(0, 0, 200, 200, 0, endHr);
    push();
    stroke(50);
    rotate(endHr);
    line(70, 70, 90, 90);
    pop();

    push();
    stroke(30);
    rotate(endDay);
    line(100, 100, 120, 120);
    pop();

    push();
    stroke(10);
    rotate(endMonth);
    line(120, 120, 180, 180);
    pop();

}
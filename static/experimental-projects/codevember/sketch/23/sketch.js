// bar version
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
    text('2019.' + mth + '.' + d, 140, 300);
    text('n o w', -40, 250);
    text('8' + ':0' + minu + 'pm', -250, 300);
    pop();

    rotate(-90);


    let endSc = map(sc, 0, 60, 0, 360);
    let endMin = map(minu, 0, 60, 0, 360);
    let endHr = map(hr % 12, 0, 12, 0, 360);
    let endDay = map(d, 0, 7, 0, 360);
    let endMonth = map(mth, 0, 12, 0, 360);

    noFill();
    strokeWeight(10);
    stroke(10);
    arc(0, 0, 100, 100, 0, endSc);
    stroke(30);
    arc(0, 0, 150, 150, 0, endMin);
    stroke(50);
    arc(0, 0, 200, 200, 0, endHr);
    stroke(90);
    arc(0, 0, 350, 350, 0, endDay);
    stroke(120);
    arc(0, 0, 400, 400, 0, endMonth);

}
let i = 1;
let shadow = 50;

function setup() {
    createCanvas(840, 840, WEBGL);
    noLoop();
    angleMode(DEGREES)
}

function draw() {
    background(10);

    // translate(width / 2, height / 2, width / 2);

    ambientLight(12, 12, 12);

    // let direction = 200;
    let locX = shadow - height / 1.5;
    let locY = 300 - width / 2;
    let locZ = 0;
    let moonY = 350;
    let moonX = -150;
    let moonSize = 10;

    const a = [90, 90, 80, 60, 60, 40, 30, 30, 10];
    const b = [80, 120, 80, 50, -80, -70, -50, -50];
    for (var i = 0; i < 8; i = i + 1) {
        push();

        moonY = moonY - a[i];
        moonX = moonX + b[i];
        pointLight(255, 255, 255, locX, locY, locZ);
        translate(moonX, moonY, moonSize);
        moonSize = moonSize + 50;
        locZ = locZ - 10;
        // noStroke();
        stroke(100);
        ambientMaterial(220);
        sphere(30, 25, 25);
        pop();
    }

    // shadow = shadow + i;
}
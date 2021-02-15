let i = 1;
let shadow = 80;

function setup() {
    createCanvas(640, 640, WEBGL);
}

function draw() {
    background(10);

    ambientLight(12, 12, 12);

    // let direction = 200;
    let locX = shadow - height / 1.5;
    let locY = 300 - width / 2;
    pointLight(255, 255, 255, locX, locY, 70);
    // pointLight(30, 30, 30, direction, direction, 0);

    translate(0, -10, 20);
    // noStroke();
    stroke(100);
    ambientMaterial(220);
    sphere(120, 25, 25);

    shadow = shadow + i;
}

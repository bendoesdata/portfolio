let img;
let smallPoint, largePoint;

function preload() {
    img = loadImage('EFFECTS.jpg');
}

function setup() {
    createCanvas(720, 400);
    smallPoint = 5;
    largePoint = 20;
    imageMode(CENTER);
    noStroke();
    background(255);
    frameRate(120);
    img.loadPixels();
}

function draw() {
    let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    let x = floor(random(img.width));
    let y = floor(random(img.height));
    let pix = img.get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
}

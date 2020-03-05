// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);

  // Disable animation loop since its a static artwork
  noLoop();
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  // Set the default blend mode
  blendMode(BLEND);
  background(20);
  fill(230);

  // Set x-or / difference blend mode
  blendMode(DIFFERENCE);

  // Disable stroke
  noStroke();

  // Center of screen
  const x = width / 2;
  const y = height / 2;

  // Fraction of screen dimension to handle resize
  const dim = Math.min(width, height);
  const size = dim * 0.3;

  // Make a rectangle centred on the screen
  rectMode(CENTER);
  rect(x, y, size * 1.5, size * 1.5);

  let space = 10;
  for (let i = 0; i < 5; i++) {
    let sides = random(['tri','square', 'circle']);
    let rx = random(50, width - 20);
    let ry = random(50, width - 20);
    if (sides == 'circle') {
      ellipse(rx, ry, size, size);
    } else if(sides == 'square') {
      polygon(rx, ry, size, 4, 0);
    } else if(sides == 'tri') {
      polygon(rx, ry, size, 3, 0);
    }
    space = space + 20;
  }


}

function polygon(x, y, radius, sides = 3, angle = 0) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides);
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

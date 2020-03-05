let max = 30;
let min = 2;
let count = 0;

// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  fill(230);
  textSize(14);
  text('shape shifting', 100, 100);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  
  // Black background
  background(230);
  
  // Stroke only with a specific join style and thickness
  noFill();
  stroke(30);
  strokeJoin(BEVEL);
  strokeWeight(5);

  // Get time in seconds
  const time = millis() / 1000;
  
  // Get a value that ping-pongs from 0 ... 1
  const pingPong = sin(time * 0.5 - PI / 2) * 0.5 + 0.5;
  
  if (pingPong < 0.00001) {
   count = count + 1;
   console.log(count);
  }
  
  if (count > 1) {
   max = 3; 
  }
  
  if (count > 3) {
   max = 6; 
  }
  
  if (count > 5) {
   max = 4; 
  }
  
   if (count > 7) {
   max = 8; 
  }
  
  
  // Get a number of points, using pow() to skew to one end
  const points = lerp(min, max, pow(pingPong, 2));
  
  // Draw shape with an angle offset
  const angle = pingPong * PI * 4;
  
  push();
  stroke(10);
  fill(10);
  polygon(width / 2, height / 2, 240, points, angle);
  pop();
  push();
  stroke(40);
  fill(40);
  polygon(width / 2, height / 2, 220, points, -angle);
  pop();
  push();
  stroke(70);
  fill(70);
  polygon(width / 2, height / 2, 200, points, angle);
  pop();
  push();
  stroke(100);
  fill(100);
  polygon(width / 2, height / 2, 180, points, -angle);
  pop();
  push();
  stroke(130);
  fill(130);
  polygon(width / 2, height / 2, 160, points, angle);
  pop();
  push();
  stroke(160);
  fill(160);
  polygon(width / 2, height / 2, 140, points, -angle);
  pop();
  push();
  stroke(190);
  fill(190);
  polygon(width / 2, height / 2, 120, points, -angle);
  pop();
  push();
  stroke(220);
  fill(220);
  polygon(width / 2, height / 2, 100, points, -angle);
  pop();
  push();
  stroke(250);
  fill(250);
  polygon(width / 2, height / 2, 80, points, -angle);
  pop();
}

// Draw a basic polygon, handles triangles, squares, pentagons, etc
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

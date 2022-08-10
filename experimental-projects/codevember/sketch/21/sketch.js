let t = 0; // time variable
let r = 0.001; // rate variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(230, 230, 230);
}

function draw() {
  background(30, 120); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = -20; x <= width; x = x + 10) {
    for (let y = -20; y <= height+ 20; y = y + 8) {
      // adjust first number to change direction of waves
      const xAngle = map(0, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(00, 0, height, -4 * PI, 4 * PI, true);

      // and also varies based on the particle's location
      const angle = xAngle * (x / width-100) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 3); // draw particle
    }
  }

  t = t + 0.005;

  // if statement to change speedss based on iterator value
  // if (r > 0.6) {
  //   r = 1
  //   t = t + 0.005;
  // } else {
  //   t = t + 0.4; // update time
  //   r = r + 0.005;
  //   t = t * r;
  // }

}

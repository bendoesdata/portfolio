var yoff = 0.0

function setup() {
  createCanvas(640,640);
  background(20);

}

function draw() {
  stroke(255,20);
  noFill();

  beginShape();
  var xoff= 0;

	// change the increment for the height of line change
  for (var x = 0; x <= width; x += 12) {
  // Map noise value (between 0 and 1) to y-value of canvas
    var y = map(noise(xoff, yoff), 0, 0.5, 100,500);
    // Set the vertex of a line point
    vertex(x, y);
		// increase offset
    xoff += 0.03;
  }

  //Speed of moving waves
  yoff += 0.002;

	// other vertex points
  vertex(width-10, height+10);
  vertex(-10, height+10);
  endShape(CLOSE);
}

function mousePressed() {
  noLoop();
}

function keyPressed() {
	draw();
	loop();
}

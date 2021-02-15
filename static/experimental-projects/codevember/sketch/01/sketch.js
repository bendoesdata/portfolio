var a = [];
var speed = 1;
var radius = 15;
var x = -radius - 20;
var x2= 50;
var y = -20;

function setup() {
	createCanvas(800, 800);
	background(0);
	fill(235);
	noStroke();
	
	// draw white rectangle
	rect(width/2,0,width/2,height);
	
	// generate array of 20 random numbers
	for (var i = 0; i < 30; i++) {
		a[i] = random(-40,height);
	}
}

function draw() {
	
	// draw each circle in the array
	for (var i = 0; i < a.length; i++) {
		
		// if left of middle, fill white. else, fill black.
		if (x < width/2) {
		stroke(0);
		fill(235);
	} else {
		fill(0);
	}
		// draw the circle
		ellipse(x-(i*5),a[i],radius,radius);
	}
	
	// increase x location
	x += speed;
	
	// draw the Codevember
	push();
	textFont('Helvetica');
	textSize(42);
	fill(235);
	text('#CODEVEMBER', x2, (height/2))+30;
	ellipseMode(RADIUS);
	pop();
	
	
	
	
	
}

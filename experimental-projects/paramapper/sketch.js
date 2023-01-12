// create array of 5 random numbers between 1 and 50
var randomNumbers = [];
for (var i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

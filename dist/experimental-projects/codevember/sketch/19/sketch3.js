/*
Day 19 - COLOR
*/

function preload() {
  fontBold = loadFont('fonts/BasisGrotesquePro-Bold.otf');
  fontBlack = loadFont('fonts/BasisGrotesquePro-Black.otf');
  fontItalic = loadFont('fonts/BasisGrotesquePro-BoldItalic.otf');
  fontRegular = loadFont('fonts/BasisGrotesquePro-Medium.otf');
}

function setup() {
  createCanvas(512, 512);
  noLoop();
}

function draw() {
  background(256);

  numShape = 10;
  margin = 1;
  boxSize = 512 / numShape;
  shapeSize = boxSize - 2 * margin;


  for (var i = 0; i < numShape; i = i + 1) {
    for (var j = 0; j < numShape; j = j + 1) {
      var shape = randomShape()
      if (shape == "square") {
        drawSquare(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
      }
      else if (shape == "circle") {
        drawCircle(randomColor(), boxSize * (i+0.5), boxSize * (j+0.5), shapeSize);
      }
      else if (shape == "triangle") {
        drawTriangle(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
      }
      else if (shape == "half square") {
        drawHalfSquare(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
      }
      else if (shape == "half circle") {
        drawHalfCircle(randomColor(), boxSize * (i+0.5), boxSize * (j+0.5), shapeSize);
      }
      else if (shape == "quarter circle") {
        drawQuarterCircle(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
      }
    }
  }

// add title
  push();
  textSize(72);
  // textMode(CENTER);
  fill(color('#433446'));
  textFont(fontBlack);
  textAlign(CENTER);
  text("The Grand", width/2, (height/2)-20);
  text("Budapest", width/2, (height/2)+60);
  pop();
}


var randomColor = function() {
  const mrfox = [color('#E7C95D'),
   color('#D3725D'),
   color('#A8D7C8'),
   // color('#433446'), // dark color
   color('#B9B09F')];

   const dogs = [color('#CB3D3C'), color('#D05037'), color('#965E4F'),
   color('#D6C5A9'), // light pale
   // color('#231C12') // black
 ];

  const moonrise = [
    color('#8D9876'),
    color('#CBB548'),
    color('#609F80'),
    // color('#4B574D'),
    color('#AF420A')
  ];

  const budapest = [
    color('#E6A0C4'),
    color('#C6CDF7'),
    color('#D8A499'),
    color('#7294D4')
  ]

  return random(budapest);
}

var randomShape = function() {
  return random(["circle", "half circle", "quarter circle"]);
}

function drawCircle(col, x, y, d) {
  fill(col);
  noStroke();
  circle(x, y, d);
}

function drawHalfCircle(col, x, y, d) {
  fill(col);
  noStroke();

  var randomHalfCircle = random(["arc1", "arc2", "arc3", "arc4"]);

  if (randomHalfCircle == "arc1") {
    arc(x, y - d/2, d, d, 0, PI);
  }
  else if (randomHalfCircle == "arc2") {
    arc(x, y +d/2, d, d, PI, 0);
  }
  else if (randomHalfCircle == "arc3") {
    arc(x - d/2, y, d, d, HALF_PI+PI, HALF_PI);
  }
  else if (randomHalfCircle == "arc4") {
    arc(x + d/2, y, d, d, HALF_PI, HALF_PI+PI);
  }
}

function drawQuarterCircle(col, x, y, r) {
  fill(col);
  noStroke();

  d = r * 2;
  var randomQuarterCircle = random(["corner1", "corner2", "corner3", "corner4"]);

  if (randomQuarterCircle == "corner1") {
    arc(x, y, d, d, 0, HALF_PI);
  }
  else if (randomQuarterCircle == "corner2") {
    arc(x+r, y, d, d, HALF_PI, PI);
  }
  else if (randomQuarterCircle == "corner3") {
    arc(x+r, y+r, d, d, PI, HALF_PI+PI);
  }
  else if (randomQuarterCircle == "corner4") {
    arc(x, y+r, d, d, HALF_PI+PI, 0);
  }
}

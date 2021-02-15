var bird;
var clouds;
var score = 100;
var life = 100;

function setup() {
  var width = windowWidth;
  var height = windowHeight;
  createCanvas(width, height);

    // create a group of sprites
  clouds = new Group();
  for (var i = 0; i < 30; i++) {
    var c = createSprite(
      random(width), random(height),
      random(25, 100), random(25, 100));
    c.shapeColor = color(random(0, 50));
    clouds.add(c);
  }

  var birdStart = 0;
    // make the bird
  bird = createSprite(
    width/2, birdStart, 20,20); 
}

function startScreen() {
    
}

function draw() {
    
  background(230);
  fill(30);
  noStroke();
  fill(30);
  
textAlign(CENTER, CENTER);
textFont("Courier New");
textSize(14);
text("Use arrow keys to move and SPACE to stop. Press down arrow to start. ",
  (width /2) - 10,20);
  
  push();
  textFont("Courier New");
  textSize(20);
  text("GAME DASH",
  (70),20);
  pop();
  

    for (var i = 0; i < clouds.length; i++) {
        clouds[i].position.x += clouds[i].width * 0.02;
        if (clouds[i].position.x > width) {
          clouds[i].position.x = 0;
        }
      }

      // if bird hits clouds, remove life points
      if (bird.overlap(clouds)) {
          bird.shapeColor = color(255, 0, 0);
          bird.overlap(clouds, (score = score - 1));
          life = life -1;
      } else {
        bird.shapeColor = color(37, 123, 252);
      }

      if (bird.position.y > height) {
        textSize(72);
          text("you win!", width/2, height/2);
      }

  drawSprites();

  // scorebar
  push();
  fill(15, 226, 128);
  var scorebar = rect(width - 140, 40, life, 10);
  pop();

  // subtract life points
    textSize(42);
  if (score > 0.5) {
    textSize(32);
    fill(3, 163, 88);
    text(score, width - 120, 70);
  }
  else {
    textSize(72);
    text("you lose!", width/2, height/2);
    bird.remove();
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    bird.setSpeed(2, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    bird.setSpeed(2, 90);
    startScreen.remove();
  }
  else if (keyCode == LEFT_ARROW) {
    bird.setSpeed(2, 180);
  }
  else if (keyCode == UP_ARROW) {
    bird.setSpeed(2, 270);
  }
  else if (key == ' ') {
    bird.setSpeed(0, 0);
  }
  return false;
}
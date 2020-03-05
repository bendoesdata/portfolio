// create global variables
var data = [];
var maxData;
let cnv;

// make sure data is loaded first
function preload() {
    mydata = loadJSON('data/strava.json');
}

// setup the document
function setup() {
    var canvas = createCanvas(800, 800);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");
    angleMode(DEGREES);
    rectMode(TOP);
    // comment out the loop that generated random data
    // for (var i = 0; i < 100; i = i + 1) {
    //     var randomNumber = random(20, 80);
    //     data.push(randomNumber);
    // }
    maxData = max(data);
    // access the distance column
    var distance = mydata.distance;
    // console.log(distance);

}

function drawRadial(barValue, barDate) {

    var angleSeparation = 360 / barValue.length;
    var padding = 40;

    if (frameCount <= 200) {
        maxValue = constrain(frameCount * 2, 0, 400);
    } else {
        maxValue = 400;
    }
    var offset = 80;
    var maxData = 1;
    var dataMultiplier = (windowHeight / 1 - offset - padding) / maxData;

    fill(139, 171, 103);
    for (var i = 0; i < barValue.length; i = i + 1) {
        push();
        var currentData = barValue[i];
        var currentDate = barDate[i];
        var finalHeight = currentData / dataMultiplier * 2;
        var animatedHeight = map(maxValue, 5, 100, 0, finalHeight);
        translate(windowWidth / 2, windowHeight / 2);
        rotate(angleSeparation * i);
        var rects = rect(0, offset, angleSeparation * 1, animatedHeight);
        // text(currentDate, offset - 20, 0);
        pop();

    }
}

function draw() {

    background(43, 53, 63);
    // stroke(89, 86, 74);

    //create the axis circles
    c = color('rgba(250,250,250,0.2)'); // Define color 'c'
    noFill();
    stroke(c);
    strokeWeight(1);
    circle(windowWidth / 2, windowHeight / 2, 200);
    circle(windowWidth / 2, windowHeight / 2, 300);



    var distance = mydata.distance;

    var date = mydata.date;

    // call the function to draw the radial graph
    drawRadial(distance, date);

    // add text
    noStroke();
    fill(250, 250, 250);
    textSize(32);

    title = text('Top runs', 30, 40);
    pop();

    // add text in the middle
    fill('white');
    text('August', (windowWidth / 2) - 50, windowHeight / 2)


    fill(0, 102, 153);



}
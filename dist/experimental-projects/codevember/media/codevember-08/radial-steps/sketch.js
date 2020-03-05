// create global variables
var data = [];
var maxData;
let cnv;

// make sure data is loaded first
function preload() {
    mydata = loadJSON('data/steps.json');
}

// setup the document
function setup() {
    var canvas = createCanvas(800, 800);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");

    // set modes
    angleMode(DEGREES);
    rectMode(TOP);

    // max value of data
    maxData = max(data);
}

// draw radial function
function drawRadial(barValue, barDate) {

    // wrap the bars around 360 degrees
    var angleSeparation = 360 / barValue.length;
    var padding = 20;

    // this animates the bars as the frameCount increases
    if (frameCount <= 300) {
        maxValue = constrain(frameCount * 2, 0, 400);
    } else {
        maxValue = 400;
    }

    // size of inner radial circle
    var offset = 65;

    // a multiplier
    var maxData = 1;

    // acts as a scale for the data so it fits within screen
    // tweak this if the bars go outside screen
    var dataMultiplier = (windowHeight - padding) / maxData;

    // bar color
    fill(30);

    for (var i = 0; i < barValue.length; i++) {
        push();

        // access date and value
        var currentData = barValue[i];
        var currentDate = barDate[i];

        // set the final height of each bar
        var finalHeight = currentData / dataMultiplier;

        // set animation to reach finalHeight
        var animatedHeight = map(maxValue, 1, 80, 0, finalHeight);

        // position in center and rotate around the circle
        // each time a new bar is drawn in the for loop
        translate(windowWidth / 2, windowHeight / 2);
        rotate(angleSeparation * i);
        var rects = rect(0, offset, angleSeparation * 0.6, animatedHeight,
            0, 0, 15, 15); // tese last 4 numbers provide rounded corners

        // add day count in the center of circle
        textSize(8)
        textFont('Monospace');
        text(currentDate, 0, offset - 5);
        pop();

    }
}

function draw() {

    background(230);

    //create the axis circles
    c = color('rgba(30,30,30,0.2)'); // Define color 'c'
    noFill();
    stroke(c);
    strokeWeight(1);

    circle(windowWidth / 2, windowHeight / 2, 200); // at 5000
    circle(windowWidth / 2, windowHeight / 2, 280); // at 10000
    circle(windowWidth / 2, windowHeight / 2, 370); // at 15000

    // call the function to draw the radial graph
    drawRadial(mydata.value, mydata.day);

    // add all the annotations
    push();
    fill(50);
    textSize(20);
    textFont('Monospace');
    text('October Step Count', (windowWidth / 2) - 100, windowHeight - 120)
    pop();
    push();
    textSize(10);
    textFont('Monospace');
    text('5000', (windowWidth / 2) + 15, (windowHeight / 3) + 10)
    pop();
    push();
    textSize(10);
    textFont('Monospace');
    text('10000', (windowWidth / 2) + 15, (windowHeight / 3) - 30)
    pop();
    push();
    textSize(10);
    textFont('Monospace');
    text('15000', (windowWidth / 2) + 15, (windowHeight / 3) - 75)
    pop();



    fill(0, 102, 153);



}
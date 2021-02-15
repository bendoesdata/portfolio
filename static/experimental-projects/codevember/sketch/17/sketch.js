// Code adapted from Matt DesLauriers random rect tutorial
// https://glitch.com/edit/#!/p5-example-random-rects?path=sketch.js:85:0

const rectangles = [];

// Create a new canvas to the browser size
function setup() {
    createCanvas(640, 640);

    // Disable loop since we are doing a static artwork
    noLoop();

    // Create some random rectangles
    const rectangleCount = 30;
    for (let i = 0; i < rectangleCount; i++) {
        // Randomly place some rectangles within -1..1 space
        const shrink = 0.8;
        const position = [
            random(-1, 1) * shrink,
            random(-1, 1) * shrink
        ];
        // Create a random 0..1 scale for the rectangles
        const scale = random(0.2, 0.8);
        const size = [
            random(0, 1) * scale,
            random(0, 1) * scale
        ];

        rectangles.push({
            position,
            size,
        });
    }
}

// Render loop that draws shapes with p5
function draw() {
    // Black background
    background('#D1C8C7');

    // Setup drawing style
    rectMode(CENTER);
    noFill();

    // Get the minimum edge
    const minDim = Math.min(width, height);

    // Draw each rect
    rectangles.forEach(rectangle => {
        const {
            position,
            size,
            newColor
        } = rectangle;

        // The position and size in -1..1 normalized space
        let [x, y] = position;
        let [w, h] = size;
        let aColor = newColor;

        // Map -1..1 to screen pixels
        // First we 'push' to save transformation state
        push();

        // Then translate to the center
        translate(width / 2, height / 2);

        // And scale the context by half the size of the screen
        // We use a square ratio so that the lines have even thickness
        scale(minDim / 2, minDim / 2);

        // The stroke weight is specified in 0..1 normalized space
        // It will be multiplied by the scale above
        strokeWeight(0.008);
        // let newColor = random('#B19583', '#96402C', '#916B30');
        let counter = random(0, 1);
        if (counter < 0.3) {
            stroke('#B19583');

        } else if (counter < 0.6) {
            stroke('#96402C');
        } else {
            stroke('#004147')
        }


        // now draw the rectangle
        rect(x, y, w, h);

        // and restore the transform for the next rectangle
        pop();
    });
}
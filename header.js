// get the current width of the window
let windowWidth = window.innerWidth;

// setup a resize listener, and if the window is resized, update the width
window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;

    // remove the canvas and add a new canvas
    
});

// Array to store our circles
let circles = [];

// Array to store our lines
let lines = [];

// Circle object
class Circle {
    constructor() {
        this.x = random(width);
        this.y = random(height);

        // assign a random value between 5 and 20 to this.r
        this.r = random(5, 20);

        
    }

    display() {
        fill(230);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}

// Line object
class Line {
    constructor(circle1, circle2) {
        this.startX = circle1.x;
        this.startY = circle1.y;
        this.endX = circle2.x;
        this.endY = circle2.y;
        this.progress = 0;
        this.speed = 0.01;
    }

    display() {
        stroke(230);
        strokeWeight(1.5);
        let currentX = lerp(this.startX, this.endX, this.progress);
        let currentY = lerp(this.startY, this.endY, this.progress);
        line(this.startX, this.startY, currentX, currentY);
        
        this.progress += this.speed;

        // return true if the line has finished drawing
        return this.progress >= 1.0;
    }
}

// Setup function
function setup() {
    myCanvas = createCanvas(windowWidth, 600);
    myCanvas.parent("header-graphic");

    // Generate circles
    for(let i=0; i<30; i++) {
        circles.push(new Circle());
    }

    // Draw a line every 500 ms
    setInterval(() => {
        if (lines.length < 5) {  // Only add a line if there are fewer than 5 active
            let circle1 = random(circles);
            let circle2 = random(circles);

            // Don't allow a line to be drawn from a circle to itself
            while(circle1 === circle2) {
                circle2 = random(circles);
            }

            lines.push(new Line(circle1, circle2));
        }
    }, 1500);
}

// Draw function
function draw() {
    background(255);

    // Display circles
    for(let circle of circles) {
        circle.display();
    }

    // Draw and update lines
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].display()) {  // If the line has finished drawing
            lines.splice(i, 1);  // Remove it from the array
        }
    }
}

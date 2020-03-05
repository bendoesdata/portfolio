/*
Day 24 - PATTERN
*/

function setup() {
    createCanvas(512, 512);
    noLoop();
}

function draw() {
    background(256);

    numShape = 15;
    margin = 0;
    boxSize = 512 / numShape;
    shapeSize = boxSize - 2 * margin;

    for (var i = 0; i < numShape; i = i + 1) {
        for (var j = 0; j < numShape; j = j + 1) {
            var shape = randomShape()
            if (shape == "square") {
                drawSquare(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
            } else if (shape == "circle") {
                drawCircle(randomColor(), boxSize * (i + 0.5), boxSize * (j + 0.5), shapeSize);
            } else if (shape == "triangle") {
                drawTriangle(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
            } else if (shape == "half square") {
                drawHalfSquare(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
            } else if (shape == "half circle") {
                drawHalfCircle(randomColor(), boxSize * (i + 0.5), boxSize * (j + 0.5), shapeSize);
            } else if (shape == "quarter circle") {
                drawQuarterCircle(randomColor(), i * boxSize + margin, j * boxSize + margin, shapeSize);
            }
        }
    }
}


var randomColor = function() {
    const fruit1 = [
        '#A8BDAE',
        '#C15F53'
    ];
    const fruit2 = [
        '#2E5D5D',
        '#8CB6A3'
    ];

    const fruit3 = [
        '#69989D',
        '#512E4D'
    ]

    return random(fruit3);
}

var randomShape = function() {
    return random(
        [
            // "circle",
            // "half circle",
            // "quarter circle",
            "triangle"
        ]
    );
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
        arc(x, y - d / 2, d, d, 0, PI);
    } else if (randomHalfCircle == "arc2") {
        arc(x, y + d / 2, d, d, PI, 0);
    } else if (randomHalfCircle == "arc3") {
        arc(x - d / 2, y, d, d, HALF_PI + PI, HALF_PI);
    } else if (randomHalfCircle == "arc4") {
        arc(x + d / 2, y, d, d, HALF_PI, HALF_PI + PI);
    }
}

function drawQuarterCircle(col, x, y, r) {
    fill(col);
    noStroke();

    d = r * 2;
    var randomQuarterCircle = random(["corner1", "corner2", "corner3", "corner4"]);

    if (randomQuarterCircle == "corner1") {
        arc(x, y, d, d, 0, HALF_PI);
    } else if (randomQuarterCircle == "corner2") {
        arc(x + r, y, d, d, HALF_PI, PI);
    } else if (randomQuarterCircle == "corner3") {
        arc(x + r, y + r, d, d, PI, HALF_PI + PI);
    } else if (randomQuarterCircle == "corner4") {
        arc(x, y + r, d, d, HALF_PI + PI, 0);
    }
}

function drawTriangle(col, x, y, l) {
    fill(col);
    noStroke();

    var randomTriangle = random(["triangle1", "triangle2", "triangle3", "triangle4"]);

    if (randomTriangle == "triangle1") {
        triangle(x, y, x, y + l, x + l, y + l);
    } else if (randomTriangle == "triangle2") {
        triangle(x, y, x + l, y, x + l, y + l);
    } else if (randomTriangle == "triangle3") {
        triangle(x, y, x, y + l, x + l, y);
    } else if (randomTriangle == "triangle4") {
        triangle(x, y + l, x + l, y, x + l, y + l);
    }
}
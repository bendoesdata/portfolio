let coffee = [];
let colors;
let drift = [0.01, 0.01];
let girl, mug1, mug2, mug3;

function preload() {
    girl = loadImage('assets/head.png');
    bg = loadImage('assets/head.png');
    mug1 = loadImage('assets/mug1.png');
    mug2 = loadImage('assets/mug2.png');
    mug3 = loadImage('assets/mug3.png');
}

function setup() {
    createCanvas(620, 620);
    // colors = ['#952B1A', '#093F61', '#0C1345'];
    colors = ['#00C1D3', '#F27C41', '#75C358', '#F3DC68', '#953B44'];
}

function draw() {
    background(color('rgba(240, 214, 215, 0.01)'));

    for (let stream of coffee) {
        stream.show();
        stream.update();
    }

    image(girl, width / 5, 520, 300, 200);
    image(mug1, width - 320, 250, 100, 100);
    image(mug2, width - 400, 250, 100, 100);
    image(mug3, width - 480, 250, 100, 100);

    startStream(3, 215, [0.08, 0.082]);
    startStream(3, 258, [-0.01, -0.02]);
    startStream(4, 335, [-0.08, -0.082]);


}

// add snowflakes function
function startStream(num, xStart, moveAngle) {
    for (let count = 0; count < num; count = count + 2) {
        let newStream = new Cafe(
            xStart, random(325, 340),
            random(0.1, 0.3),
            color('rgba(71, 43, 0, 0.3)'),
            random(moveAngle[0], moveAngle[1]));
        coffee.push(newStream);
    }
}

// what it means to be coffee drip
class Cafe {
    constructor(x, y, speed, c, drift) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.falling = true;
        this.color = c;
        this.drift = drift;
    }

    update() {
        // if true, then generate random y point with speed
        // once it hits the ground, falling = false
        if (this.falling) {
            this.y += this.speed;
            this.x += random(this.drift);
            if (this.y > height - random(10, 30)) {
                this.falling = false;
            }
        }
    }
    show() {
        noStroke();
        if (this.falling) {
            fill(this.color);
        } else {
            fill('rgba(240, 214, 215, 0.02)')
        }
        ellipse(this.x, this.y, 4);
    }
}
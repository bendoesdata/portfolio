let table;

function setup() {
    table = loadTable('../data/run_clean.csv', 'csv', 'header');

  createCanvas(400, 400);
  background(235);
}

function draw() {
  fill(0);
  ellipse(mouseX, mouseY, 10, 10);
}

// get the data from the table and return it
function getData() {
    let arr = [];
    let obj = {};
    for (let r = 0; r < table.getRowCount(); r++) {
        obj.val = table.getNum(r, 0);

        arr.push(obj);
    }

    return arr;
}

function sonifyData() {
    let data = getData();
    let synth = new Tone.Synth().toDestination();

    data.forEach((d) => {
        synth.triggerAttackRelease(d.val, "8n");
    });
}
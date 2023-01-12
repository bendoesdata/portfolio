var url = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=yLeK5umsbkYxahsLWuYq7XoeWgkseD3cZUXBdzVb';
var bubbles = [];
let synth;
const notes = [ "G2",  "B2", "C3", "E3", "F3", "G3", "A3", "C4", "D4", "F4", "G4", "B4", "C5", "E6"]
const intervals = [1, 2, 4, 6, 8, 12]
let d;
let allVals = []
let allSynths = [];
let distances = []
let nasa;

let attackTime = 0.02;
let decayTime = 0.6;
let susPercent = 0.5;
let releaseTime = 2;

let minMag, maxMag;
let minDistance, maxDistance;

let verb;

function preload() {
  nasa = loadJSON(url); 
}

function setup() {
  var height = 600;
  
  synth = new p5.PolySynth();
  
  d = 10;
  
  var cnv = createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES)
  
  noStroke();
  
  drawViz()
  
}

function mousePressed() {
  console.log('start')
  userStartAudio();
  allVals.forEach((d,i) => {
    let val = map(d, min(allVals), max(allVals), 0, allVals.length)
    // synth.play(, vel, time, dur);
    let timing = map(i, 0, 12, 0, allVals.length)
    // console.log(round(timing)*1000, notes[round(val)])
    // setInterval(playNote, round(timing)*1000, notes[round(val)]);
    let vel = 0.2;
    let dur = 1;
    // time is currently being calculated based on the index value
    // need to replace it with the mapped distance value
    // let timeConverted = (timing+1)*2000
    let timeConverted = map(distances[i], minDistance, maxDistance, 2, 16)
    timeConverted = timeConverted*1000;
    setInterval(playNote, timeConverted, i, val, timeConverted)
    // synth.play(notes[round(val)], vel, timing, dur); 
    // allSynths[i].play(notes[round(val)], vel, timing, dur)
  })
  
}

function draw() {
  let today = "2022-10-27"
  let now = new Date()
  let nowFormatted = now.toISOString().split('T')[0]
  
  // Get the loaded JSON data
  var sats = nasa.near_earth_objects[nowFormatted]; 
  translate(width/2, height/2)
  background(5);
  fill(220); 
  
  // draw earth
  ellipse(0,0,60);


  
  var c = color('rgba(24, 119, 168,0.7)')
  fill(c);
  let r = frameCount/10;
  for (var i = 0; i < sats.length; i++) {  
    var distance = sats[i].close_approach_data[0].miss_distance.lunar
    
    var size = sats[i].absolute_magnitude_h;
    
    var sizeScaled = map(size, minMag, maxMag, 5, 50)
    
    rotate(r)  
    ellipse(0,map(distance, minDistance, maxDistance, 50, 250), sizeScaled, sizeScaled);
  }
}

function drawViz() {
  
  let now = new Date()
  let nowFormatted = now.toISOString().split('T')[0]
  
  // Get the loaded JSON data
  var sats = nasa.near_earth_objects[nowFormatted]; 
  console.log(sats);
  
  for (var i = 0; i < sats.length; i++) {  
    allVals.push(+sats[i].absolute_magnitude_h)
    distances.push(+sats[i].close_approach_data[0].miss_distance.lunar)

    let sy = new p5.MonoSynth();


    verb = new p5.Reverb();

    verb.process(sy, 8, 8)
    sy.setADSR(attackTime, decayTime, susPercent, releaseTime);
    allSynths.push(sy)
  }

  // find the maximum value in the allVals array
  maxMag = max(allVals)
  minMag = min(allVals)
  minDistance = min(distances)
  maxDistance = max(distances)

  console.log(minMag, maxMag)
  
  // scale the range of the data to fit into the canvas
} 

function playNote(index, val, timing) {
  // console.log(index)
  let vel = 0.2;
  let time = 0;
  let dur = 0.3;
  console.log(round(val),notes[round(val)])
  console.log(timing)
  push()
  translate(width/2, height/2)
    noFill()
    stroke(255)
    strokeWeight(2)
    ellipse(0,0,map(index, 0,12, 50, 500));
  pop()

  allSynths[index].play(notes[round(val)], vel, time, dur)
  // synth.play(note, vel, time, dur); 
}

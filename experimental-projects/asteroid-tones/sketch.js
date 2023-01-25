var url = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=yLeK5umsbkYxahsLWuYq7XoeWgkseD3cZUXBdzVb';
var bubbles = [];
let synth;
const notes = ["C3", "E3", "F3", "G3", "A3", "C4", "D4", "F4", "G4", "B4", "C5", "E6", "F6", "G6", "A6", "C7"]

let d;
let allMagVals = []
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
let dim;

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
  // for eery magnitude value, loop through and convert
  allMagVals.forEach((d,i) => {
    // map the magnitude to find the closest note
    // notes in the array
    // reverse the order of the range so that larger sizes 
    // correspond to lower notes
    let val = map(d, min(allMagVals), max(allMagVals), notes.length, 0)
    
    // console.log(round(timing)*1000, notes[round(val)])
    // setInterval(playNote, round(timing)*1000, notes[round(val)]);
    let vel = 0.2;
    let dur = 1;
    
    // distance away from center represents the distance of asteroid from earth
    let timeConverted = map(distances[i], minDistance, maxDistance, 2, 16)
    timeConverted = timeConverted*1000;
    setInterval(playNote, timeConverted, i, val, timeConverted)
    // synth.play(notes[round(val)], vel, timing, dur); 
    // allSynths[i].play(notes[round(val)], vel, timing, dur)
  })
  
}

function draw() {
  // store the dimensions 
  dim = Math.min(width, height);

  let today = "2022-10-27"
  let now = new Date()
  let nowFormatted = now.toISOString().split('T')[0]
  
  // Get the loaded JSON data
  var sats = nasa.near_earth_objects[nowFormatted]; 
  translate(width/2, height/2)
  background("#222222");
  fill(220); 
  
  // draw earth
  ellipse(0,0,20);


  var c = color('rgba(24, 119, 168,0.7)')
  fill(c);
  let r = frameCount/10;
  for (var i = 0; i < sats.length; i++) {  
    var distance = sats[i].close_approach_data[0].miss_distance.lunar
    
    var size = sats[i].absolute_magnitude_h;
    
    var sizeScaled = map(size, minMag, maxMag, 5*(dim*0.001), 80*(dim*0.001))
    
    rotate(r)  
    ellipse(0,map(distance, minDistance, maxDistance, 10*(dim*0.01), 40*(dim*0.01)), sizeScaled, sizeScaled);
  }
}

function drawViz() {
  
  let now = new Date()
  let nowFormatted = now.toISOString().split('T')[0]
  
  // Get the loaded JSON data
  var sats = nasa.near_earth_objects[nowFormatted]; 
  console.log(sats);
  
  for (var i = 0; i < sats.length; i++) {  
    allMagVals.push(+sats[i].absolute_magnitude_h)
    distances.push(+sats[i].close_approach_data[0].miss_distance.lunar)

    let sy = new p5.MonoSynth();

    verb = new p5.Reverb();

    verb.process(sy, 10, 8)
    sy.setADSR(attackTime, decayTime, susPercent, releaseTime);
    allSynths.push(sy)
  }

  // find the maximum value in the allMagVals array
  maxMag = max(allMagVals)
  minMag = min(allMagVals)
  minDistance = min(distances)
  maxDistance = max(distances)

  console.log(minMag, maxMag)
  
  // scale the range of the data to fit into the canvas
} 

function playNote(index, val, timing) {
  // console.log(index)
  let vel = 0.1;
  let time = 0;
  let dur = 0.3;
  console.log(round(val),notes[round(val)])
  console.log(timing)
  push()
  //translate(width/2, height/2)
    noFill()
    stroke(255)
    strokeWeight(2)
    ellipse(0,0,map(timing, 2000, 16000, 50, 800));
  pop()

  allSynths[index].play(notes[round(val)], vel, time, dur)
  // synth.play(note, vel, time, dur); 
}

var url = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=yLeK5umsbkYxahsLWuYq7XoeWgkseD3cZUXBdzVb';
var bubbles = [];
let synth;
const notes = ["C3", "E3", "F3", "G2", "B2", "C4", "D4", "F4", "G3", "A3", "B4", "C5", "G4", "G4", "G4", "E4"]
const intervals = [1, 2, 4, 6, 8, 12]
let d;
let allVals = []
let allSynths = [];
let nasa;

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
    let timeConverted = (timing+1)*1000
    setInterval(playNote, timeConverted, i, val)
    // synth.play(notes[round(val)], vel, timing, dur); 
    // allSynths[i].play(notes[round(val)], vel, timing, dur)
  })
  // setInterval(playNote, 1000, notes[0]);
  // setInterval(playNote, 1000, notes[3]);
  // setInterval(playNote, 1000, notes[5]);
  // setInterval(playNote, 1000, notes[9])
  // setInterval(playNote, 2000, notes[2]);
  // setInterval(playNote, 4000, notes[5]);
  
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
  
  for (var i = 0; i < sats.length; i++) {  
    var distance = sats[i].close_approach_data[0].miss_distance.lunar
    
    var size = sats[i].estimated_diameter.miles.estimated_diameter_max
    
    var sizeScaled = map(size, 0.01, 1, 5, 100)
    rotate(frameCount)  
    ellipse(-(distance*2),0, sizeScaled, sizeScaled);
    
  }
  
  
  console.log('hi')
}

function drawViz() {
  
  let today = "2022-10-27"
  let now = new Date()
  let nowFormatted = now.toISOString().split('T')[0]
  
  // Get the loaded JSON data
  var sats = nasa.near_earth_objects[nowFormatted]; 
  console.log(sats);
  
  
  // background(5);
  // fill(220); 
  
  // // draw earth
  // ellipse(0,0,100);
  
  // var c = color('rgba(24, 119, 168,0.7)')
  // fill(c);
  
  for (var i = 0; i < sats.length; i++) {  
    allVals.push(sats[i].absolute_magnitude_h)

    let sy = new p5.MonoSynth();
    allSynths.push(sy)
  }
  
  // fill(5)
  // textSize(22);
  // text("near earth asteroids",width-(width/3),50);
  
  // textSize(12);
  // text("asteroids passing earth today",width-(width/3),70);
  
} 

function playNote(index, val) {
  console.log(index)
  let vel = 0.1;
  let time = 0;
  let dur = 0.5;
  allSynths[index].play(notes[round(val)], vel, time, dur)
  // synth.play(note, vel, time, dur); 
}

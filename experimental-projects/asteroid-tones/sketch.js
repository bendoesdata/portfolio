// URL for NASA NEO (Near Earth Object) Feed API. Contains an API key.
var url = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=yLeK5umsbkYxahsLWuYq7XoeWgkseD3cZUXBdzVb';

// A few global arrays and variables used throughout the sketch
var bubbles = []; // (unused here but left as original placeholder)
let synth; // top-level polyphonic synth (not heavily used — per-asteroid MonoSynths are used)

// Array of note names used when mapping asteroid magnitude to pitch
const notes = ["C3", "E3", "F3", "G3", "A3", "C4", "D4", "F4", "G4", "B4", "C5", "E6", "F6", "G6", "A6"]

// Data/state containers
let d; // generic numeric variable used for spacing/diameters
let allMagVals = [] // stores absolute magnitude (size proxy) for each asteroid
let allSynths = []; // stores a p5.MonoSynth for each asteroid
let distances = [] // stores miss distances (in lunar units) for each asteroid
let nasa; // will hold the loaded JSON response from NASA

// Envelope parameters used when setting synth ADSR
let attackTime = 0.02;
let decayTime = 0.6;
let susPercent = 0.5;
let releaseTime = 2;

// Min/max values computed from data for mapping into visual/sound ranges
let minMag, maxMag;
let minDistance, maxDistance;

let verb; // reverb instance (reused in creation loop)
let dim; // stores the minimum of width/height for responsive sizing

function preload() {
  // Load the NASA feed JSON before setup runs so data is available immediately
  nasa = loadJSON(url);
}

function setup() {
  // (legacy) local height value — not used after making canvas fullscreen
  var height = 600;

  console.log(nasa)

  // Create a polyphonic synth (not used for every voice but kept available)
  synth = new p5.PolySynth();

  d = 10; // example spacing/diameter value used elsewhere if needed

  // Create a full-window canvas
  var cnv = createCanvas(windowWidth, windowHeight);

  // Work with degrees for rotations instead of radians
  angleMode(DEGREES)

  // Draw shapes without outlines by default
  noStroke();

  // Build the visualization structures (compute synths, ranges, etc.)
  drawViz()

}

function mousePressed() {
  // Called when the user clicks — start audio context and schedule notes
  console.log('start')
  userStartAudio(); // ensure browser audio is enabled by user gesture

  // For every stored magnitude value, map it to a note and schedule playback
  allMagVals.forEach((d,i) => {
    // Map the asteroid magnitude to an index in the notes array.
    // Note: magnitudes are mapped in reverse so that larger magnitude
    // values (which are numerically larger but actually indicate smaller
    // bodies) map to higher notes — reversing keeps larger visual sizes
    // corresponding to lower pitches in this mapping.
    let val = map(d, min(allMagVals), max(allMagVals), notes.length, 0)

    // velocity and duration for the note
    let vel = 0.2;
    let dur = 1;

    // Convert the asteroid's distance into a scheduling interval.
    // Closer asteroids will have smaller mapped values (faster repeats),
    // farther ones will be slower. The map returns seconds between 2 and 32,
    // multiplied by 2000 to convert to milliseconds for setInterval.
    let timeConverted = map(distances[i], minDistance, maxDistance, 2, 32)
    timeConverted = timeConverted * 2000;

    // Schedule repeated calls to playNote for this asteroid.
    // Parameters: index of asteroid, mapped note value, and timing interval
    setInterval(playNote, timeConverted, i, val, timeConverted)
  })

}

function draw() {
  // store the dimensions 
  dim = Math.min(width, height);
  // Choose today's date (this was originally hard-coded to 2022 but uses 'now')
  let today = "2022-10-27" // (legacy variable — not used below)
  let now = new Date()
  // Format date as YYYY-MM-DD to index into NASA's daily object list
  let nowFormatted = now.toISOString().split('T')[0]

  // Get the list of near-earth-objects for today
  var sats = nasa.near_earth_objects[nowFormatted];

  // Translate origin to center of canvas for circular layout
  translate(width/2, height/2)

  // Clear background and set fill color for labels/foreground
  background("#222222");
  fill(220);

  // Draw a small dot representing Earth at the center
  ellipse(0,0,20);

  // Set a semi-transparent color for orbit rings (not strictly used later)
  var c = color('rgba(24, 119, 168,0.7)')
  fill(c);

  // Rotation amount to animate asteroid positions over time
  let r = frameCount/30;

  // First loop: draw orbit rings for each asteroid
  for (var i = 0; i < sats.length; i++) {
    // Extract miss distance (in lunar units)
    var distance = sats[i].close_approach_data[0].miss_distance.lunar;

    // Map the distance into an orbit radius (in pixels)
    var orbitRadius = map(distance, minDistance, maxDistance, 10*(dim*0.01), 40*(dim*0.01));

    // Draw the orbit ring as an ellipse (diameter = 2 * radius)
    stroke(100);
    noFill();
    ellipse(0, 0, orbitRadius * 2, orbitRadius * 2);
  }

  // Second loop: draw the asteroid as a small circle positioned on its ring
  for (var i = 0; i < sats.length; i++) {
    var distance = sats[i].close_approach_data[0].miss_distance.lunar;
    var size = sats[i].absolute_magnitude_h; // absolute magnitude used as size proxy

    // Map distance to radius again (same mapping as above)
    var orbitRadius = map(distance, minDistance, maxDistance, 10*(dim*0.01), 40*(dim*0.01));

    // Map the asteroid's magnitude into a visually scaled size
    var sizeScaled = map(size, minMag, maxMag, 5*(dim*0.001), 80*(dim*0.001));

    push();
    // Rotate the drawing context so the asteroid sits on the ring; adding
    // i*(360 / sats.length) distributes asteroids evenly around the circle
    rotate(r + i*(360 / sats.length)); // avoid cumulative rotation
    noStroke();
    fill(180);
    // Draw asteroid as an ellipse located at (0, orbitRadius)
    ellipse(0, orbitRadius, sizeScaled, sizeScaled);
    pop();
  }
}

function drawViz() {
  
  let now = new Date()
  let nowFormatted = now.toISOString().split('T')[0]
  
  // Get the loaded JSON data
  var sats = nasa.near_earth_objects[nowFormatted]; 
  console.log(sats);
  
  for (var i = 0; i < sats.length; i++) {  
    // Store numeric magnitude and distance values for mapping
    allMagVals.push(+sats[i].absolute_magnitude_h)
    distances.push(+sats[i].close_approach_data[0].miss_distance.lunar)

    // Create a dedicated monophonic synth for this asteroid
    let sy = new p5.MonoSynth();

    // Create a Reverb instance and process this synth through it
    verb = new p5.Reverb();
    verb.process(sy, 20, 8) // (source, seconds, decayRate)

    // Set ADSR envelope for the synth voice and save it
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
    // Draw a visual pulse with size mapped from the timing interval so
    // fast events draw small pulses and slow events draw large pulses.
    noFill()
    stroke(255)
    strokeWeight(2)
    ellipse(0,0,map(timing, 2000, 16000, 50, 800));
  pop()

  // Trigger the synth associated with this asteroid index. `val` is a
  // floating index into the `notes` array so we round it to pick a note.
  allSynths[index].play(notes[round(val)], vel, time, dur)
  // alternative: play using the global poly synth: synth.play(note, vel, time, dur);
}

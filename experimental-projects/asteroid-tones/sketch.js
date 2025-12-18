// URL for NASA NEO (Near Earth Object) Feed API. Replace the key for production.
const url = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=yLeK5umsbkYxahsLWuYq7XoeWgkseD3cZUXBdzVb';

// Audio / synth configuration
const notes = ["C3", "E3", "F3", "G3", "A3", "C4", "D4", "F4", "G4", "B4", "C5", "E6", "F6", "G6", "A6"];
let attackTime = 0.02;
let decayTime = 0.8;
let susPercent = 1;
let releaseTime = 15.0;

const tempoMultiplier = 6; // global speed multiplier for scheduling

// Core state structures (refactor away from parallel arrays)
let asteroids = []; // array of { mag, distance, synth, intervalId }
let pulses = []; // visual pulses created when sounds play (rendered in draw)
let nasa; // JSON data loaded from API

// computed ranges used for mapping
let minMag, maxMag, minDistance, maxDistance;

// single reusable audio effects
let globalPolySynth;
let verb; // single Reverb instance reused across voices

// UI / runtime state
let scheduled = false; // prevent duplicate scheduling on repeated clicks
let dim; // min(width, height) for responsive sizing

// Scheduler state for WebAudio-timed events
let schedulerTimer = null;
const lookahead = 25; // ms between scheduler checks
const scheduleAheadTime = 0.5; // seconds to schedule ahead

// Rotation speed for visual animation (degrees per second)
const rotationSpeed = 5; // adjust to taste (original used frameCount/30)

// Angular speed mapping (degrees/sec) range for asteroids based on velocity
const minAngularSpeed = 0.5; // deg/sec for slowest
const maxAngularSpeed = 6.0; // deg/sec for fastest

// Volume scaling for high notes: base velocity and minimum scale at top of register
const baseVelocity = 0.12;
const topNoteMinScale = 0.45; // highest note will be played at 45% of base velocity

function preload() {
  // Load the NASA feed JSON before setup runs so data is available immediately.
  // Note: embeded API key in a public repo is not recommended for production.
  nasa = loadJSON(url);
}

function setup() {
  // Create canvas and basic audio objects
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();

  // poly synth available if desired
  globalPolySynth = new p5.PolySynth();

  // single reverb instance shared by per-asteroid synths
  verb = new p5.Reverb();

  // Build visualization and audio voices from loaded data
  drawViz();
}

// Start audio (must be called from a user gesture like the Start button)
function startAudio() {
  // Start audio (browser requires a user gesture) and initialize scheduler.
  if (scheduled) return; // avoid duplicate scheduling on multiple clicks
  console.log('start');
  userStartAudio();

  if (!asteroids || asteroids.length === 0) return;

  const ac = getAudioContext();
  const now = ac.currentTime;

  // compute per-asteroid period (seconds) and initial nextTime
  asteroids.forEach((a) => {
    // map distance -> period in seconds (closer => more frequent)
    const seconds = map(a.distance, minDistance, maxDistance, 2, 32);
    a.basePeriod = Math.max(0.2, seconds); // seconds, unscaled
    a.period = a.basePeriod * tempoMultiplier; // actual used period
    // schedule first event randomly within the asteroid's period so they don't all fire together
    a.nextTime = now + Math.random() * a.period;
  });

  // start the scheduler loop which will use audioContext.currentTime
  startScheduler();
  scheduled = true;
}

// no-op mousePressed so clicks anywhere don't start audio
function mousePressed() {
  // intentionally empty — use the Start button to call startAudio()
}

function draw() {
  // store the dimensions 
  dim = Math.min(width, height);
  // Render background and center the Sun
  translate(width / 2, height / 2);
  background("#222222");
  fill(255, 218, 86);
  ellipse(0, 0, 20); // center sun

  push()
  // draw ellipse for earth near the sun
  fill(100, 149, 237);
  ellipse(30, 0, 8);
  pop()

  // early exit if no asteroid data
  if (!asteroids || asteroids.length === 0) return;

  // rotation amount for animation (use time-based rotation for scheduler consistency)
  let r = (millis() / 1000) * rotationSpeed;

  // padding outside of sun so there is some space between sun and innermost orbit
  const sunPadding = 10 * (dim * 0.01);

  // draw orbit rings first
  for (let i = 0; i < asteroids.length; i++) {
    const a = asteroids[i];
    let orbitRadius;
    if (minDistance === maxDistance) {
      orbitRadius = (sunPadding + 40 * (dim * 0.01)) / 2;
    } else {
      orbitRadius = map(a.distance, minDistance, maxDistance, sunPadding, 40 * (dim * 0.01));
    }
    stroke(100);
    noFill();
    ellipse(0, 0, orbitRadius * 2, orbitRadius * 2);
  }

  // draw asteroids on their rings
  for (let i = 0; i < asteroids.length; i++) {
    const a = asteroids[i];
    let orbitRadius;
    if (minDistance === maxDistance) {
      orbitRadius = (sunPadding + 40 * (dim * 0.01)) / 2;
    } else {
      orbitRadius = map(a.distance, minDistance, maxDistance, sunPadding, 40 * (dim * 0.01));
    }
    let sizeScaled;
    if (minMag === maxMag) {
      sizeScaled = (80 * (dim * 0.001) + 5 * (dim * 0.001)) / 2;
    } else {
      sizeScaled = map(a.mag, minMag, maxMag, 80 * (dim * 0.001), 5 * (dim * 0.001));
    }

    // compute this asteroid's rotation using its angularSpeed (deg/sec)
    const angleDeg = (millis() / 1000) * a.angularSpeed + i * (360 / asteroids.length);
    push();
    rotate(angleDeg);
    noStroke();
    fill(`rgba(180,180,180,0.9)`);
    ellipse(0, orbitRadius, sizeScaled, sizeScaled);
    pop();
  }

  // draw pulses generated by playNote (these live for a short lifetime)
  for (let i = pulses.length - 1; i >= 0; i--) {
    const p = pulses[i];
    const age = millis() - p.created;
    // not yet time to display this pulse
    if (age < 0) continue;
    if (age > p.lifetime) {
      pulses.splice(i, 1);
      continue;
    }
    const alpha = map(age, 0, p.lifetime, 255, 0);
    
    push();
    noFill();
    stroke(255, alpha);
    strokeWeight(2);
    // draw at stored x,y so the pulse lines up with the asteroid's ring
    ellipse(p.x, p.y, p.size);
    pop();
  }
}

function drawViz() {
  // Build the `asteroids` array from the loaded NASA JSON.
  if (!nasa || !nasa.near_earth_objects) return;

  // Choose today's key if available, otherwise use the first available day
  const keys = Object.keys(nasa.near_earth_objects);
  if (keys.length === 0) return;
  const today = new Date().toISOString().split('T')[0];
  const dayKey = nasa.near_earth_objects[today] ? today : keys[0];
  const sats = nasa.near_earth_objects[dayKey];
  console.log(sats)

  asteroids = [];
  for (let i = 0; i < sats.length; i++) {
    const mag = +sats[i].absolute_magnitude_h;
    const distance = +sats[i].close_approach_data[0].miss_distance.lunar;
    const velocity = +sats[i].close_approach_data[0].relative_velocity.kilometers_per_second;

    // create a MonoSynth voice for this asteroid; ADSR/reverb configured after ranges computed
    const sy = new p5.MonoSynth();
    
    asteroids.push({ mag, distance, velocity, synth: sy, intervalId: null });
  }

  // compute min/max ranges for mapping
  const mags = asteroids.map(a => a.mag);
  const dists = asteroids.map(a => a.distance);
  const vels = asteroids.map(a => a.velocity);
  if (mags.length === 0) return;
  maxMag = max(mags);
  minMag = min(mags);
  minDistance = min(dists);
  maxDistance = max(dists);

  // Now that min/max are known, configure per-synth ADSR, amp, and reverb
  asteroids.forEach(a => {
    // determine expected note index safely (guard against min==max)
    let expectedIndex;
    if (minMag === maxMag) {
      expectedIndex = Math.floor((notes.length - 1) / 2);
    } else {
      const expectedVal = map(a.mag, maxMag, minMag, notes.length - 1, 0);
      expectedIndex = Math.max(0, Math.min(round(expectedVal), notes.length - 1));
    }

    // Scale release shorter for higher notes (so high pitches decay faster)
    const releaseScale = map(expectedIndex, notes.length - 1, 0, 1.0, 0.05);
    const synthRelease = releaseTime * releaseScale;
    a.synth.setADSR(attackTime, decayTime, susPercent, synthRelease);

    // also scale velocity lower for higher notes
    const velScale = map(expectedIndex, 0, notes.length - 1, 1.0, 0.2);
    a.synth.amp(baseVelocity * velScale);

    // Apply reverb time scaled by pitch (shorter for higher notes)
    const reverbTime = map(expectedIndex, 0, notes.length - 1, 10, 0.6); // seconds
    const reverbDecay = map(expectedIndex, 0, notes.length - 1, 1, 0.6);
    verb.drywet(0.9)
    verb.amp(5)
    verb.process(a.synth, reverbTime, reverbDecay);
  });

  // map velocity range to per-asteroid angular speeds (deg/sec)
  const minVel = min(vels);
  const maxVel = max(vels);
  asteroids.forEach(a => {
    // protect against division by zero when all velocities equal
    if (minVel === maxVel) {
      a.angularSpeed = (minAngularSpeed + maxAngularSpeed) / 2;
    } else {
      a.angularSpeed = map(a.velocity, minVel, maxVel, minAngularSpeed, maxAngularSpeed);
    }
  });

  console.log('mag range', minMag, maxMag);
  // Notify the page that asteroid data is ready so the Start button can be shown
  try {
    document.dispatchEvent(new CustomEvent('asteroidDataReady'));
  } catch (e) {
    // document may not be available in some contexts; ignore errors
  }
} 

function playNote(index, noteIndex, timing) {
  // Trigger audio for asteroid at `index` using a precomputed noteIndex.
  if (!asteroids[index]) return;
  const a = asteroids[index];
  const time = 0;
  const dur = 0.3;

  // safeguard noteIndex
  const ni = Math.max(0, Math.min(noteIndex, notes.length - 1));
  // reduce velocity for higher notes
  const scale = map(ni, 0, notes.length - 1, 1.0, topNoteMinScale);
  const velScaled = baseVelocity * scale;
  a.synth.play(notes[ni], velScaled, time, dur);

  // push a visual pulse (drawn from draw() to avoid drawing inside timer)
  const size = map(timing, 200, 32000, 50, 800);
  pulses.push({ created: millis(), lifetime: 1000, size });
}

// stop scheduled intervals and reset scheduling state
function stopAllIntervals() {
  asteroids.forEach(a => {
    if (a.intervalId) {
      clearInterval(a.intervalId);
      a.intervalId = null;
    }
  });
  scheduled = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// --- WebAudio scheduler -------------------------------------------------
function startScheduler() {
  if (schedulerTimer) return;
  schedulerTimer = setTimeout(schedulerLoop, lookahead);
}

function stopScheduler() {
  if (schedulerTimer) {
    clearTimeout(schedulerTimer);
    schedulerTimer = null;
  }
}

function schedulerLoop() {
  const ac = getAudioContext();
  const currentTime = ac.currentTime;
  const scheduleWindow = currentTime + scheduleAheadTime;

  // For each asteroid, schedule any events that should occur within the window
  asteroids.forEach((a, i) => {
    // compute noteIndex for this asteroid (magnitude -> pitch mapping)
    const val = map(a.mag, maxMag, minMag, notes.length - 1, 0);
    const rawIndex = round(val);
    const noteIndex = Math.max(0, Math.min(rawIndex, notes.length - 1));

    // schedule all occurrences that fall within the schedule window
    while (a.nextTime <= scheduleWindow) {
      const secondsFromNow = Math.max(0, a.nextTime - currentTime);
      // use the synth's startTime parameter (seconds from now)

      // reduce velocity for higher notes so upper register is quieter
      const scale = map(noteIndex, 0, notes.length - 1, 1.0, topNoteMinScale);
      const vel = baseVelocity * scale;
      a.synth.play(notes[noteIndex], vel, secondsFromNow, 0.3);

      // schedule a visual pulse at the appropriate future moment and position
      const scheduledMillis = millis() + secondsFromNow * 1000;
      // compute angular position at scheduled time (degrees)
      const angleDeg = (scheduledMillis / 1000) * rotationSpeed + i * (360 / asteroids.length);
      const angleRad = radians(angleDeg);
      const orbitRadius = map(a.distance, minDistance, maxDistance, 10 * (dim * 0.01), 40 * (dim * 0.01));
      // convert polar to cartesian to match rotate()+ellipse(0, orbitRadius):
      // rotated point (0, R) -> world x = -R * sin(theta), y = R * cos(theta)
      const x = 0;
      const y = 0;
      // use the orbit's diameter so the pulse matches the ring size
      const size = orbitRadius * 2;
      pulses.push({ created: scheduledMillis, lifetime: 1000, size, x, y });

      // advance to the next scheduled time for this asteroid
      a.nextTime += a.period;
    }
  });

  // queue the next scheduler tick
  schedulerTimer = setTimeout(schedulerLoop, lookahead);
}

var myCanvas, song, slider, amp, bgColor, sideBarX, trebStartY, trebRange, midStartY, midRange;

var trebhistory = [];
var midhistory = [];

var button, button2;

var saveMode = false;

function handleFile(file) {	
	song = loadSound(file, loaded);
}

function handleSongSelect() {
	if (sel.value() == "Sorry") {
		song = loadSound("sorry-short.mp3", loaded);
	} else if (sel.value() == "Older Now") {
		song = loadSound("older-now-1.mp3", loaded);
	} else if (sel.value() == "Mean Something") {
		song = loadSound("mean-something.mp3", loaded);
	}
}

function saveFlower() {
	saveCanvas(pg, "frequency-flower.png");
}

function setup() {
	myCanvas = createCanvas(windowWidth, windowHeight);
	sideBarX = width/9;

	sel = createSelect();
	sel.position(sideBarX, 120);
	sel.option('Select a song');
	sel.option('Sorry');
	sel.option('Mean Something');
	sel.option('Older Now');
	sel.changed(handleSongSelect)
	// sel.disable('Select a song');

	input = createFileInput(handleFile);
	input.position(sideBarX + 160, 117);
	  
	button = createButton('play/pause');
	button.position(sideBarX, 160);
	button.mousePressed(pressPlay)

	button2 = createButton('save flower');
	button2.position(sideBarX+100, 160);
	button2.mousePressed(saveFlower)
	
	// load sound file with a callback function
	// song = loadSound("mean-something.mp3", loaded);
	
	// create slider for volume
	slider = createSlider(0,1,0.2,0.02);
	slider.position(sideBarX, 200)

	bgColor = createColorPicker('#333');
	bgColor.position(sideBarX, 250);

	circColor = createColorPicker("#5ca890");
	circColor.position(sideBarX, 290);

	midColor = createColorPicker('#7dc1ac');
	midColor.position(sideBarX, 330);

	trebColor = createColorPicker('#cde3d6');
	trebColor.position(sideBarX, 370);
	
	
	// create an amplitude object
	amp = new p5.Amplitude();
	
	// set angle mode for radians
	angleMode(DEGREES);
	
	fft = new p5.FFT();

	trebStartY = 150;
	trebRange = 400;

	midStartY = 30;
	midRange = 300;
	
}

function loaded() {
	print('new '+ song.isPlaying())
	song.pause();
	noLoop();
	song.play();
	loop();
}


function draw() {
	
	fft.analyze();
	
	var bass = fft.getEnergy( "bass" );
	var mid = fft.getEnergy( "mid" );
	var treb = fft.getEnergy( "treble" );
	
	trebhistory.push(treb);
	midhistory.push(mid);
	
	// create background each new draw
	background(bgColor.color());
	
	push()
	textSize(42);
	stroke('#cde3d6')
	strokeWeight(3);
	noFill();
	text('FREQUENCY FLOWERS', sideBarX-90, 80);
	pop()
	
// sidebar labels
	push()
	let labelOffset = 30;
	textSize(14)
	noStroke();
	fill('#fff')
	textAlign("right")
	text('select/upload', sideBarX-labelOffset, 127)
	// text('controls', sideBarX-labelOffset, 167)
	text('volume', sideBarX-labelOffset, 207)
	text('background', sideBarX-labelOffset, 257)
	text('bass', sideBarX-labelOffset, 297)
	text('mids', sideBarX-labelOffset, 337)
	text('trebles', sideBarX-labelOffset, 377)
	pop()
	
	// get amp level
	var vol = amp.getLevel();
	
	// if slider changes, update volume value
	song.setVolume(slider.value());
	// song.setVolume(0.2);
	
	noFill();
	
	// put everything in the center
	translate(width/2,height/2);
	
	// treble line
	beginShape();
	for (var i=0; i<trebhistory.length; i++) {
		stroke(trebColor.color());
		noFill();
		strokeWeight(5);
		var r = map(trebhistory[i], 20, 256, trebStartY, trebStartY+trebRange);
		var x = r * cos(i);
		var y = r * sin(i);
		fill(trebColor.color());
		// var y = map(volhistory[i], 0, 1, height/2, 0);
		vertex(x,y);
	}
	endShape();
	beginShape();
	for (var i=0; i<trebhistory.length; i++) {
		stroke(trebColor.color());
		noFill()
		strokeWeight(3);
		var r = map(trebhistory[i], 20, 256, trebStartY+30, trebStartY+trebRange+30);
		var x = r * cos(i);
		var y = r * sin(i);
		// var y = map(volhistory[i], 0, 1, height/2, 0);
		vertex(x,y);
	}
	endShape();
	beginShape();
	for (var i=0; i<trebhistory.length; i++) {
		stroke(trebColor.color());
		noFill()
		strokeWeight(1);
		var r = map(trebhistory[i], 20, 256, trebStartY+50, trebStartY+trebRange +50);
		var x = r * cos(i);
		var y = r * sin(i);
		// var y = map(volhistory[i], 0, 1, height/2, 0);
		vertex(x,y);
	}
	endShape();
	
	// mid line
	beginShape();
	for (var i=0; i<midhistory.length; i++) {
		stroke(midColor.color());
		fill(midColor.color());
		strokeWeight(10);
		var r = map(midhistory[i], 10, 256, midStartY, midStartY+midRange);
		var x = r * cos(i);
		var y = r * sin(i);
		// var y = map(volhistory[i], 0, 1, height/2, 0);
		vertex(x,y);
	}
	endShape();
	beginShape();
	for (var i=0; i<midhistory.length; i++) {
		stroke(midColor.color());
		noFill();
		strokeWeight(6);
		var r = map(midhistory[i], 10, 256, midStartY+30, midStartY+midRange+30);
		var x = r * cos(i);
		var y = r * sin(i);
		// var y = map(volhistory[i], 0, 1, height/2, 0);
		vertex(x,y);
	}
	endShape();
	
	// map the volume to diamater between 10 and 100
	var diam = map(bass, 100, 256, 10, 340);
	
	// create center circle
	push();
	noStroke();
	fill(circColor.color());
	ellipse(0, 0, diam, diam);
	pop();
	
	// when volhistory arr reaches 360
	// update by dropping first and adding new value each draw
	if (trebhistory.length > 360) {
		trebhistory.splice(0, 1);
	}
	// same for mid line
	if (midhistory.length > 360) {
		midhistory.splice(0, 1);
	}
	
}

// play and pause sketch when key pressed
function keyPressed() {
	if (keyCode === OPTION) {
		if (song.isPlaying()) {
			song.pause();
			noLoop();
		} else {
			loop();
			song.play();
		}
	}
}

function pressPlay() {
	if (sel.value() == "Sorry") {
		print("chose sorry")
	}

	if (song.isPlaying()) {
		song.pause();
		noLoop();
	} else {
		loop();
		song.play();
	}
}


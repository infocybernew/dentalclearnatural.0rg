// Code based on Daniel Shiffman's P5.js* book on learning to code in P5 - see the JitterBug() construct

var Cells = [];	
var tileSize = .9;
var tiles = 1450;

function setup() {

  noStroke();
  colorMode(HSB, 360, 100, 50, .1);
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < tiles; i++) {
    var x = round((random(width / tileSize)) * tileSize);
    var y = round(random(height / tileSize) * tileSize);	
    var r = tileSize;
    var h = random(100, 190);
	var t = random(.8, 8);
	var u = random(.3, .8);
    Cells[i] = new Covid(x, y, r, h, t, u);
  }
}



function draw() {

   background(200, 100, 0, .009);

  for (var i =0; i < tiles; i++) {
    Cells[i].spread();
    Cells[i].update();
  }
}

function Covid(isX, isY, myD, myHue, newX, newY) {
  this.x = isX;
  this.y = isY;
  this.tS = newX;
  this.tU = newY;
  this.diameter = myD;
  this.h = myHue;
  this.spread = function() {
    var tx = round(random(-2, 2));
    var ty = round(random(-2, 2));
    this.x += (tx * tileSize);
    if ((this.x > width+(tileSize * 8)) || (this.x < -tileSize * 8)) {this.x = random(width / tileSize) * tileSize;}
    this.y += (ty * tileSize);
    if ((this.y > height+(tileSize * 8)) || (this.y < -tileSize * 8)) {this.y = random(height / tileSize) * tileSize;}
	if ((this.x < ((window.innerWidth - 640) / 2) -3)) this.x+= this.tS * 2;
	if ((this.x > ((window.innerWidth - 640) / 2) +642)) this.x-= this.tS * 2;
	if ((this.y < ((window.innerHeight - 360) / 2))) this.y+= this.tU;
	if ((this.y > ((window.innerHeight - 360) / 2) +360)) this.y-= this.tU;		
}
  
  this.update = function() {
  fill(myHue, 100, 50, .7);
    rect(this.x, this.y, this.diameter, this.diameter);
  }
}

function mousePressed() {
  tileSize = random(0.3, 2);
  tiles = random(1500, 3500);

  for (var i = 0; i < tiles; i++) {
    var x = random(width / tileSize) * tileSize;
    var y = random(height / tileSize) * tileSize;
    var r = tileSize;
    var h = random(0, 360);
	var t = random(.5, 2);
	var u = random(.3, 3.8);
    Cells[i] = new Covid(x, y, r, h, t, u);
  }
  
}
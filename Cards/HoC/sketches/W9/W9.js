var font1, rand;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var listLength;

function preload(){
  font1 = loadFont('data/RNDMV2.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(128);
  noStroke();
  textFont(font1);
  textAlign(CENTER);
  listLength=letters.length;
  //frameRate(4);
}


function draw() {
  cursor(CROSS);
  rand = int(random(0, listLength-1));
  textSize(random(12, 128));
  background(0,10);
  fill(0,255,200);
  text(letters[rand], random(width), random(height));
}

function mouseDragged() {
  push();
    noFill();
    stroke(255);
    circle(random(width), random(height),400);
  pop();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

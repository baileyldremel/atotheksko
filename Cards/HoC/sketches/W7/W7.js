//Sets a variable for the font
var font1;
//Sets the variable for the spin
var spin=0;
var letterSize;

function preload(){
  //Loading the font. Make sure that the font is in the Data folder for this sketch
  //It also must be the exact file path as well.
  font1 = loadFont('data/RNDMV2.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  fill(0);
  noStroke();
  //Sets the default font for the sketch
  textFont(font1);
  //textSize(64);
  textAlign(CENTER);
  //This sets the angle mode for the sketch
  angleMode(DEGREES);
}


function draw() {
  cursor(CROSS);
  background(100, 50);
  //Push/Pop will do everything within themselves.
  //After the pop, the code will revert back to the original settings.
  push();
    fill(0,255,200);
    noStroke();
    translate(width/2, height/2);
    spin += map(mouseX, 0, width, -5, 5);
    rotate(spin);
    letterSize = map(mouseY, 0, height, 8, 72);
    push();
      noFill();
      stroke(0);
      circle(0,0,letterSize*10);
    pop();
    textSize(letterSize);
    textAlign(CENTER,CENTER);
    text('RNDM\nVERSIONTWO',0,0);
  pop();

}

//This function will resize the canvas when the window is resized.
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

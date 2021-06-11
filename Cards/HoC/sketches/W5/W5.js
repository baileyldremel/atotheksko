//Sets a variable for the font
var font1;
//Sets the variable for the spin
var spin=0;

function preload(){
  //Loading the font. Make sure that the font is in the Data folder for this sketch
  //It also must be the exact file path as well.
  font1 = loadFont('data/SilkaRegular.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(150);
  fill(0);
  noStroke();
  ////Sets the default font for the sketch
  //textFont(font1);
  textSize(64);
  textAlign(CENTER);
  //This sets the angle mode for the sketch
  angleMode(DEGREES);
}


function draw() {
  cursor(CROSS);
  background(150, 5);
  //Push/Pop will do everything within themselves.
  //After the pop, the code will revert back to the original settings.
  push();
  noStroke();
  translate(width/2, height/2);
  spin = map(mouseX, 0, width/2, 0, 360);
  rotate(spin);
  textSize(mouseY/6);
  textAlign(CENTER,CENTER);
  text('Hello World',0,0);
  pop();

}

//This function will resize the canvas when the window is resized.
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

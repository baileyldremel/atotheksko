var font1;
//var spin=0;

//Loading in stuff that you will use in the sketch
function preload(){
  //MUST BE THE EXACT PATH FILE AND CASE AS FILE NAME
  font1 = loadFont('data/LEMONMILKRegular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  fill(0);
  textFont(font1);
  textSize(64);
  textAlign(CENTER);
  angleMode(DEGREES);
}


function draw() {
  cursor(CROSS);
  background(150);
  //push();
  //noStoke();
  translate(width/2-25, height/2);
  rotate(90);
  text('HELLO WORLD', 0,0);
  //pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

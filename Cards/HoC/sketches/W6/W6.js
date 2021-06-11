var myText= "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.";
var ripple;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont("Georgia");
  textSize(0.02*width);
  textAlign(CENTER);
  fill(0);
  noStroke();
}

function draw() {
  cursor(CROSS);
  background(255);
  ripple = map(mouseX, 0, width, -50, 50);
  //With sin, processing automatically creates waves.
  textLeading(sin(frameCount*0.01)*30);
  text(myText, 0.2*width,0.2*height, 0.6*width, 0.6*height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

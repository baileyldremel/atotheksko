//Setup code, nothing special
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(50,150,0);
}

function draw() {
  cursor(CROSS);
  //For the outline of the main shapes
  strokeWeight(4);
  stroke(219, 255, 226);

  //The letter b.
  fill(150,255,150);
  rect((width/2)-250, height/2-200, 100, 200);
  fill(80,230,120);
  arc((width/2)-150,height/2,200,200, PI/2,PI*2,PIE);

  //The letter d.
  fill(150,255,150);
  rect((width/2)+150, height/2-200, 100, 200);
  fill(80,230,120);
  arc((width/2)+150,height/2,200,200, PI/2,PI*1.5,PIE);

  //Reference shapes
  noStroke();
  fill(255);
  rect((width/2)-30,height-70,25,50);
  arc((width/2)+5,height-20,50,50, PI*1.5, PI*2, PIE);
}

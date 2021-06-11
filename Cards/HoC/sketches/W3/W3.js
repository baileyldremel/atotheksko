//Variables for the code which makes things easier and saves some time typing.
var fRateArc1;
var fRateArc2;
var fRateRect;
var rVal, gVal, bVal;
var fillCol;

//Setup code
function setup() {
  //I've specified framerate this time, you'll see why later.
  frameRate(60);
  createCanvas(windowWidth,windowHeight);
  fillCol = 255;
}

function draw() {
  cursor(CROSS);
  //These three lines are setting up the values for the shapes. Basically,
  //they are changing their shape either by the endpoint of the arc or the height
  //of the rectangle. The true statement stops it when it hits the endpoint value.
  fRateArc1 = map(frameCount, 0, 60, PI/2, PI*2, true);
  fRateArc2 = map(frameCount, 0, 60, PI/2, PI*1.5, true);
  fRateRect = map(frameCount,0,60,0,200, true);
  //This if statement is checks to see if the framecount is 100.
  //If it is, it resets all the fRate values and the framecount itself.
  if (frameCount == 100)
  {
    fRateArc1 = 0;
    fRateArc2=0;
    fRateRect=0;
    frameCount = 0;
  }

  background(50,150,0);
  //For the outline of the main shapes
  strokeWeight(4);
  stroke(219, 255, 226);

  //The letter b. The change is I've made the shapes form based on the framerate.
  fill(150,255,150);
  rect((width/2)-250, height/2-200, 100, fRateRect);
  fill(80,230,120);
  arc((width/2)-150,height/2,200,200, PI/2,fRateArc1,PIE);

  //The letter d. Same deal as above, just a different way around.
  fill(150,255,150);
  rect((width/2)+150, height/2-200, 100, fRateRect);
  fill(80,230,120);
  arc((width/2)+150,height/2,200,200, PI/2,fRateArc2,PIE);

  //Reference shapes.
  noStroke();
  //See moused pressed function for more info
  fill(fillCol);
  rect((width/2)-30,height-70,25,50);
  arc((width/2)+5,height-20,50,50, PI*1.5, PI*2, PIE);
}

//This bit of code creates a random colour when you click.
function mousePressed() {
  rVal = random([0],[255]);
  gVal = random([0],[255]);
  bVal = random([0],[255]);
  fillCol = [rVal,gVal,bVal];
}

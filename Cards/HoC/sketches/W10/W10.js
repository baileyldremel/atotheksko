var letter,size,rand,speed,xposition, yposition;
var rcol, gcol, bcol, col;

var wigglyLetters = [];

function setup() {

 createCanvas(windowWidth, windowHeight);

 background(0);

 textSize(32);

 textFont("Times");

 xposition = 0;

 yposition = 50;

}

function draw() {

 cursor(CROSS);
 
 background(0, 10);

 //each of the wiggly letters that we have

 for (var i=0; i<wigglyLetters.length ; i++){

  wigglyLetters[i].wiggle();

  wigglyLetters[i].display();

 }


}

function mousePressed(){

  rand = int(random(65,160));

  letter = char(rand);

  size= int(random(6,100));

  speed=int(100-size)/4;

  //rcol=int(random(0,255));

  //gcol=int(random(0,255));

  //bcol=int(random(0,255));

  wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed, rcol, gcol, bcol));

}

function keyTyped(){

 wigglyLetters.push(new Wiggle (xposition, yposition, 54, key, 1, 255));

 xposition+=54;

}

function keyPressed(){

 if (keyCode === LEFT_ARROW){

  wigglyLetters=[];

  xposition = 0;

  yposition = 50;

 }

 else if (keyCode === RIGHT_ARROW) {

  yposition +=60;

  xposition = 0;

 }

}

class Wiggle {

 constructor(x, y, size, letter, speed, rcol, gcol, bcol){

  this.x= x;

  this.y= y;

  this.textSize=size;

  this.letter=letter;

  this.speed=speed;

  this.rcol=rcol;

  this.gcol=gcol;

  this.bcol=bcol;

 }

 wiggle() { //randomwalker

  // x+=4 add 4 to the variable

  //HOW THIS WORKS
  //It takes the speed of the letter and picks a random
  //x position based on the speed between the negative speed and positive speed
  this.x += random(-this.speed, this.speed);

  this.y += random (-this.speed, this.speed);

  rcol=random(0,255);

  gcol=random(0,255);

  bcol=random(0,255);

  if (this.x <0){

   this.x += this.speed;

  }

 }

 display() {

  textSize(this.textSize);

  text(this.letter, this.x, this.y);

  fill(rcol, gcol, bcol);

 }

}

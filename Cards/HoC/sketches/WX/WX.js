//This is used as a hold for when the user presses Enter.
var input = [];

//The text that changes for the commands.
var maintxt = "";

//The text that changes for every character the user types.
var entertxt = "";

//All the non-counter variables
var func, lines, rand, words, check, terminal, leading, tracking, size, alignment, rcol, gcol, bcol, keys;
//All the counter variables, which tells you how many times I have counters.
var i, j, k, l, m;


var hdrive, keyboard, enterkey;


//Loads the font. That's all it is.
function preload(){
  terminal=loadFont('data/FontV6Terminal.otf');
  hdrive = loadSound('data/HardDrive.mp3');
  keyboard = loadSound('data/Keyboard.mp3');
  enterkey = loadSound('data/EnterKey.mp3');

}

//Sets up everything
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);

  //Text stuff.
  noStroke();
  textFont(terminal);
  //All these values are variables as the user can change them at will.
  size = width*0.03;
  leading = size;
  alignment = LEFT;
  //Colour stuff
  rcol = 0;
  gcol = 255;
  bcol = 0;
  //This is used later to say if the command exists.
  check = true;

  maintxt = "> Terminal-10brk> A display font based on old computers and ones and zeros.brk> Created by Bailey Dremel.brkbrk> For the full and complete version of the samplerbrkplease visit the link.brk> Feel free to type and play around with this mini sampler.";
  entertxt="";



}


function draw() {
  cursor(CROSS);
  //Redrawing the background.
  background(0);
  //The following are settings that they user can adjust.
  //Filling the text with the green colour.
  fill(rcol, gcol, bcol);
  textSize(size);
  textLeading(leading);
  textAlign(alignment);


  //This is a check. It's function is to check if a function exists.
  if(check === true){
    //Splits the main text into lines. I'm using the characters 'brk' to indicate a break.

    lines=maintxt.split('brk');
      //This for loop writes the lines of text over time.

      for(i=0; i<lines.length; i++){

        if(frameCount>30*i) {
        text(lines[i], 10, 20+(i*leading), width-10, height);
        }
      }
    }

  //If the command doesn't exist, it runs this code instead.
  if(check === false){

    //Runs 25 lines of the same thing, which is the error text.
    for(j=0; j<(size-6); j++){
      for(k=0; k<words.length; k++){
       if(frameCount>10*k) {
         text(words[k], 32*k, leading*j, width-10, height);
         }
       }
      }
    }

  //This is for the command line down the bottom of the screen.
  push();
    //This bit of the code is for the line, which is techincally a box but you can only see the top line.
    push();
      strokeWeight(2);
      stroke(255);

      line(0, height-54, width, height-54);
      fill(0);
      noStroke();
      rect(0,height-54,width, height-54);
    pop();
    //This is for the enter text, where the user enters their command.
    textSize(32);
    textAlign(LEFT);
    textLeading(32);
    text(entertxt, 10, height-20);
  pop();

  //Info text, which sits in the top right corner of the screen.


  //This writes the character pressed onto the screen. The value writing the character is keys.
  push();
    textSize(width/2);
    textAlign(CENTER, CENTER);
    text(keys, width/2, height/2);
  pop();

}


function keyTyped(){

  //For writing the character to the screen.
  keys = key;

  //If the key is NOT enter, it runs the main part of the program.
  if(keyCode !== ENTER) {

    //Checks to see if there is a value in enter text. Without it, it would write 'Undefined' first.
    keyboard.play();
    if(entertxt === "") {
       entertxt = key;
       hold = key;
       } else {
       entertxt = entertxt+key;
       hold = key;
    }

  }
  //This code stops the program from writing enter.
  if(keyCode === ENTER){
   keys = "";
   enterkey.play();
  }
}

function keyPressed(){
 //Resets input.

 hdrive.stop();
 input = [];
 if (keyCode === ENTER) {

   frameCount=0;
   //Sets execute to false.
   var execute = false;
   input = entertxt.toUpperCase();

   for(l=0; l<commands.length; l++){
      if(input === commands[l]) {

         check = true;
         func = commands[l];
         //THX to https://www.labnol.org/code/20181-call-javascript-function-by-name. Figured it out!
         //This function grabs the command and executes the function. AKA Run this function.
         this[func]();
         //Sets execute to true
         execute = true;
         //Whenever I code, I always seem to add a break. This is a break, which breaks the code and is cool.
         break;
     }
   }
   //If execute is still false.
   if (!execute){
     //This is a special function that changes the text.
     ERROR();
     hdrive.play();
   }
   //Blanks entertext.
   entertxt = "";

 }

 //This function adds the previous function back into the enter text, which can be used.
 if (keyCode === UP_ARROW) {
   if(func != ""){
     entertxt = func;
   }
 }

 //This clears the enter text as well.
 if (keyCode === BACKSPACE){
     entertxt = "";
     keys = "";
  }
}


//Here are all the functions that can be executed.

//Help text that has
function ERROR(){
  maintxt="";
  alignment = LEFT;
  for(n = 0; n<50; n++){
   rand = int(random(33, 126));
   letter = char(rand);
   if(maintxt == ""){
    maintxt = letter;
   }else{
    maintxt = maintxt + letter;
   }
  }
  words=maintxt.split('');
  check = false;
}

//Function currently works but the screenshot includes the last letter of the command (g). Will fix soon
//function JPEG(){
//  keys = "";
//  saveCanvas("Terminal", 'jpg');
//}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  text(lines[i], 10, 20+(i*leading), width-10, height);
}

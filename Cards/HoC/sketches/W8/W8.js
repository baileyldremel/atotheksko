var font1, words;
var size=24;
var myText= "Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing (leading), and letter-spacing (tracking), and adjusting the space between pairs of letters (kerning). The term typography is also applied to the style, arrangement, and appearance of the letters, numbers, and symbols created by the process.";
function preload() {
  font1 = loadFont('data/GilSans.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font1);
  textSize(size);
  words=myText.split(' ');
  //textLeading(32*1.5);
  noStroke();
}


function draw() {
  cursor(CROSS);
  background(225);
  //text(myText, width/20, height/20, 0.9*width, 0.9*height);

  for(var i=0; i<words.length; i++) {
     if (frameCount>30*i){
      text(words[i], 10, i*32);
     }
  }
}

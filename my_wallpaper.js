//setup - run once when the code is first starts
function setup() {
  createCanvas(1080, 720); // this sets the size of the area in which we can draw things. We call it a canvas
  textSize(32); // sets the size of the textAscent()

}
//draw - this function loops, the code within read through repeatedly while running
function draw() {
  clear(); // resets all elements on screen
  background(255); // this makes the whole canvas the screen grey
  var triH = 60;
  var triW = triH/2;
  var fliped = false;
  var flipNext = true;
  var allign = true;
  var spaces = false;
  var square = false;
  noStroke();
  var red=random(0,255);
  var green=random(0,0);
  var blue=random(red,red);
  fill(red,green,blue);
  stroke(red,green,blue);
  //text("x pos is " + mouseX, 50, 50); // displays text, including a P5.js variable which tracks the mouse position
  //text("y pos is " + mouseY, 50, 80);

  //ellipse(mouseX, mouseY, 20, 20); // draws a circle 20 pixels accross at location of the mouse pointer
  //line(mouseX, mouseY, pmouseX, pmouseY); // draws a line from the mouse pointer, to where the mouse pointer previously was
  for (var j=0;j<720/triH;j++){
    for (var i=0;i<1080/triW;i++){
      if (!fliped){
        if (flipNext){
          beginShape();
          vertex(i*triW,j*triH);
          vertex(triW+(i*triW),(j*triH));
          vertex((i*triW),triH+(j*triH));
          vertex(i*triW,j*triH);
          endShape();
          flipNext=false;
          fliped=true;
          if (!spaces)i--;
          if (!square){
          var red=random(0,255);
          var green=random(0,0);
          var blue=random(red,red);
          fill(red,green,blue);
          stroke(red,green,blue);
          }
        }
        else{
          beginShape();
          vertex(triW+(i*triW),(j*triH));
          vertex(i*triW,j*triH);
          vertex(triW+(i*triW),triH+(j*triH));
          vertex(triW+(i*triW),(j*triH));
          endShape();
          flipNext=true;
          if (square){
            var red=random(0,255);
            var green=random(0,0);
            var blue=random(red,red);
            fill(red,green,blue);
            stroke(red,green,blue);
            }
        }
      }
      else{
        if (flipNext){
          beginShape();
          vertex((i*triW),triH+(j*triH));
          vertex(i*triW,j*triH);
          vertex(triW+(i*triW),+triH+(j*triH));
          vertex((i*triW),triH+(j*triH));
          endShape();
          flipNext=false;
          fliped=false;
          if (!spaces)i--;
          if (!square){
          var red=random(0,255);
          var green=random(0,0);
          var blue=random(red,red);
          fill(red,green,blue);
          stroke(red,green,blue);
          }
        }
        else{
          beginShape();
          vertex(triW+(i*triW),triH+(j*triH));
          vertex(triW+(i*triW),(j*triH));
          vertex((i*triW),triH+(j*triH));
          vertex(triW+(i*triW),triH+(j*triH));
          endShape();
          flipNext=true;
          if (square){
            var red=random(0,255);
            var green=random(0,0);
            var blue=random(red,red);
            fill(red,green,blue);
            stroke(red,green,blue);
            }
        }
      }
   }
   if (allign){
   if (fliped){
    fliped=false;
    var red=random(0,255);
  var green=random(0,0);
  var blue=random(red,red);
  fill(red,green,blue);
  stroke(red,green,blue);

   }
   else {
    fliped=true;
    var red=random(0,255);
          var green=random(0,0);
          var blue=random(red,red);
          fill(red,green,blue);
          stroke(red,green,blue);
   } 
  }
}
  sleep(9999999999999999999999);
}

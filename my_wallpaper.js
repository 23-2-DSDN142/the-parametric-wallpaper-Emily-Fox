//setup - run once when the code is first starts
function setup() {
  createCanvas(2000, 1000); // this sets the size of the area in which we can draw things. We call it a canvas
  textSize(32); // sets the size of the textAscent()

}
//draw - this function loops, the code within read through repeatedly while running
function draw() {
  clear(); // resets all elements on screen
  background(255); // this makes the whole canvas the screen white
  var triH = 2000/18;
  var triW = triH/2;//thease are the size of the single triangles
  var fliped = false;
  var flipNext = true;//thease two variables control the four possible orentations of the single triangles
  var allign = true; //this lines up the shapes created by the program in a way that makes them act as a mirror image of each other
  var spaces = false;//this disconnects the triangles allowing you to play with negative space.
  var rowSpaces = false;//this does the same thing on the y axis not very interesting in my opinion
  var flip1 = true;
  var flip2 = true;
  var flip3 = true;
  var flip4 = true;//thease variables control wether or not the color should change in each state
  var flipSkip = false;
  var skipThis = 0;
  var skipTurns = 2;//this allows the program to skip color changes, allowing for more interesting shapes
  var color =0;
  noStroke();
  colorMode(HSB,360);
  //this color mode allows for the rainbow patterns used in my faverate design
  var red=random(0,0);
  var green=random(100,255);
  var blue=random(green,green);
  //i left this in to make changing between rgb and hsb easyer
  fill(color,360,360);
  stroke(color,360,360);
  color+=5;
  if (color>=360)color-=360;
  //this sets the triangle color to something within the paramiters
  //in hindsight i should have made this into a function
  //the rgb version works like this
  //var red=0;
  //var green=0);
  //var blue=color;
  //fill(red,green,blue);
  //stroke(red,green,blue);
  //color+=93;
  //color%=256;
  for (var j=0;j<1000/triH;j++){
    for (var i=0;i<2000/triW;i++){
    //this runs the script once for every triangle
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
          //this draws a right angle triangle like you would see in a top left corner
          i--;
          if (flip1){
          if ((!flipSkip)||(!skipThis)){
            //this determains if the color should change
            var red=random(0,0);
            var green=random(100,255);
            var blue=random(green,green);
            fill(color,360,360);
            stroke(color,360,360);
            color+=5;
            if (color>=360)color-=360;
            if (spaces)i++;
          }
          if (skipThis==skipTurns)skipThis=0;
            else skipThis++;
          }
          //updates the skip
        }
        else{
          beginShape();
          vertex(triW+(i*triW),(j*triH));
          vertex(i*triW,j*triH);
          vertex(triW+(i*triW),triH+(j*triH));
          vertex(triW+(i*triW),(j*triH));
          endShape();
          //this draws a top right corner triangle
          flipNext=true;
          if (flip2){
            if ((!flipSkip)||(!skipThis)){
              //changes the color
              var red=random(0,0);
              var green=random(100,255);
              var blue=random(green,green);
              fill(color,360,360);
             stroke(color,360,360);
             color+=5;
             if (color>=360)color-=360;
              if (spaces)i++;
            }
            if (skipThis==skipTurns)skipThis=0;
            else skipThis++;
            //updates the skip
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
          //this draws a bottem left corner triangle
          i--;
          if (flip3){
            if ((!flipSkip)||(!skipThis)){
              //changes the color
              var red=random(0,0);
              var green=random(100,255);
              var blue=random(green,green);
              fill(color,360,360);
              stroke(color,360,360);
              color+=5;
              if (color>=360)color-=360;
              if (spaces)i++;
            }
            if (skipThis==skipTurns)skipThis=0;
            else skipThis++;
            //updates the skip
          }
        }
        else{
          beginShape();
          vertex(triW+(i*triW),triH+(j*triH));
          vertex(triW+(i*triW),(j*triH));
          vertex((i*triW),triH+(j*triH));
          vertex(triW+(i*triW),triH+(j*triH));
          endShape();
          //this draws a bottem right corrner triangle
          flipNext=true;
          if (flip4){
            if ((!flipSkip)||(!skipThis)){
              var red=random(0,0);
              var green=random(100,255);
              var blue=random(green,green);
              fill(color,360,360);
             stroke(color,360,360);
             color+=5;
             if (color==360)color=0;
              //changes the color
              if (spaces)i++;
            }
            if (skipThis==skipTurns)skipThis=0;
            else skipThis++;
            //updates the skip
            }
        }
      }
   }
   if (allign){
    //this code basicly reverses the orentation of the triangle
   if (fliped){
    fliped=false;

   }
   else {
    fliped=true;
   } 
  }
    var red=random(0,0);
  var green=random(100,255);
  var blue=random(green,green);
  fill(color,360,360);
  stroke(color,360,360);
  color+=5;
  if (color>=360)color-=360;
  if (rowSpaces)j++;
  //one last color change
}
  sleep(9999999999999999999999);
  //this stops the program from doing anything else
}

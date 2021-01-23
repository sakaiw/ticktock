var hr;
var mn;
var sc;
var hangle;
var mangle;
var sangle;
function setup() {
  createCanvas(1600,800);
   //set angle in Degrees
   angleMode(DEGREES);   
}

function draw() {
  background(0);  
   
  hr = hour();
  mn = minute();
  sc = second();

  scangle = map(sc,0,60,0,360);
  mnangle = map(mn,0,60,0,360);
 
  hrangle = map(hr%12,0,11,0,360);
 
  translate(800,400);
  push();
  rotate(scangle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(mnangle - 90);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();
  
  push();
  rotate(hrangle - 90);
  stroke(0,0,255);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  rotate(-90);
  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,500,500,0,scangle);

  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,530,530,0,mnangle);

  stroke(0,0,255);
  strokeWeight(9);
  noFill();
  arc(0,0,570,570,0,hrangle);
}
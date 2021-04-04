var hrs,min,sec;
var hsound,ssound;
var chg;

function preload(){
  hsound=loadSound("hsnd.wav");
  ssound=loadSound("secsnd.mp3");
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  createSprite(400, 200, 50, 50);
  hr=hour();
  chg=hr;
}

function draw() {
  background(0);  
  hr=hour();
  min=minute();
  sec=second();
  
  angleMode(DEGREES);
   translate(width/2,height/2);
   rotate(-90);
  var sang=map(sec,0,60,0,360);
   var mang=map(min,0,60,0,360);
   var hang=map(hr%12,0,12,0,360);
   console.log(hr);
   push();
   rotate(sang);
   if(frameCount%10===0){
    ssound.play();
   }
   /*if(frameCount%){
     //hsound.play();
   }*/
   stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  
  push();
  rotate(mang);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,75,0);
  
  pop();
 
  push();
  rotate(hang);
  stroke("green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();
 
  

  noFill();
  strokeWeight(10);
  stroke("red");
  arc(0,0,300,300, 0,sang );

  stroke("yellow");
  arc(0,0,280,280 ,0,mang );

  stroke("green");
  arc(0,0,260,260 ,0,hang );


  drawSprites();
}
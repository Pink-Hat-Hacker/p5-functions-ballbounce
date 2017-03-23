var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;
var diameter = 50;


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    display();
    move();
    bounce();
}

function display(){
    //display ball
    stroke(255);
    strokeWeight(4);
    fill(50,250,50);
    var ball = ellipse(x, y, diameter, diameter);
}

function move(){
     //make ball move
    y = y + speedy;
    x = x + speedx;
}

function bounce(){
    //ball changes direction when it hits wall
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
   
}

 function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    diameter = 255;
    
    
  } else if (keyCode == RIGHT_ARROW) {
    diameter = 10;
  }
  if (keyCode == UP_ARROW){
      diameter = 30;
  }else if (keyCode == DOWN_ARROW){
      diameter = 75;
  }
  if (keyCode == space){
      ellipse(x, y, 20, 50);
  }
 }
 
 

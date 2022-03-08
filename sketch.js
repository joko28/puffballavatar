let micVar;
let mic;
let micLevel;
let angleTail = 0;
let rectX = 0;
let fr = 20; //starting FPS
let clr;
let myLeaves =  [];
let value = '#B2D8E6';
let sketchStarted = false;

function setup() {  
  createCanvas(500, 500);

 createButton("Start").mousePressed(startSketch);
  
  //FrameRate-Cubes
  frameRate(fr); 
  clr = color('pink');
  
  //Class-Leaves-Backgrounds
 for (let i = 0; i <30; i++) {
    let x = random(width*0.075,width*0.925);
    let y = random(width*0.075,width*0.925);
    let r;
    let g;
    let b;
    if (i<10) {
      r = 252;
      g = 255; 
      b = 178;
    } else if (i<20) {
      r = 229;
      g = 204; 
      b = 255;
    } else if (i<30) {
      r = 229;
      g = 220; 
      b = 67;
    }
    myLeaves[i] = new Leaves(x,y,r,g,b);
  }
}

function startSketch() {
  mic = new p5.AudioIn();  //Create Audio Input
  mic.start(); //Start Audio Input
	
  sketchStarted = true;
}

function draw() {
	
  if(sketchStarted) {
	  
  createCanvas(500, 500);
  background(value);
    
  //Class-Leaves-Background
   for (let i = 0; i <30; i++) {
    myLeaves[i].display();
    myLeaves[i].move();
  }

  micLevel = mic.getLevel(0.9);
	  
  //Movements
  TailMouseMovement();
  MicMovement();
  FrameRateCubes();
  KeyPressedBackground();
  //EyebrowMovement();
  
  //Background Design  
  drawTopLeftCornerFrame();
  drawTopRightCornerFrame();
  drawBottomLeftCornerFrame();
  drawBottomRightCornerFrame();
  drawTopFrame();
  drawLeftFrame();
  drawRightFrame();
  drawBottomFrame();
  
  //Avatar Figure
  drawTail(angleTail);
  drawHorns();
  drawBody();
  drawEyeball();
  drawPupils();
  drawPupilShineTop();
  drawPupilShineBottom();
  drawEyebrows();//moveEyebrows
  drawNose();
  drawMouth();
  drawBlush();
  }
}

function TailMouseMovement () {
  if (mouseX > width * 0.2 && mouseX < width * 0.3) {
    if (mouseY > height * 0.5 && mouseY < height * 0.75) {
      angleTail = -0.28;
      console.log('wave');
    } else {
      angleTail = 0;
    }
  } else {
    angleTail = 0;
  }
}

function MicMovement() {
  micLevel = mic.getLevel(100);
   micVar = map(mic.getLevel(), 0 , 1, 0, 250);
   console.log(micVar);
}

function FrameRateCubes() {
  rectX = rectX + 1 * (deltaTime / 15); 

  if (rectX >= width) {
    
   if (fr === 30) {
      clr = color(204, 255, 204);
      fr = 10;
      frameRate(fr);
    } else {
      clr = color(255, 229, 204);
      fr = 30;
      frameRate(fr);
    }
    rectX = 0;
  }
  push();
  fill(clr);
  noStroke();
  //x-axis cubes
  rect(rectX, 25, 50, 50);
  rect(rectX, 125, 50, 50);
  rect(rectX, 225, 50, 50);
  rect(rectX, 325, 50, 50);
  rect(rectX, 425, 50, 50);
  //y-axis cubes
  rect(25, rectX, 50, 50);
  rect(125, rectX, 50, 50);
  rect(225, rectX, 50, 50);
  rect(325, rectX, 50, 50);
  rect(425, rectX, 50, 50);
  pop();
}

function KeyPressedBackground() {
  if (keyCode === LEFT_ARROW) {
    value = '#B2D8E6';
  } else if (keyCode === RIGHT_ARROW) {
    value = '#009999';
  }
}

function drawTopLeftCornerFrame() {
  //topleftcornerframe
  push();
  fill(0, 20+micVar);
  circle(10, 10, 30);
  circle(40, 40, 30);
  circle(70, 70, 30);
  circle(100, 100, 30);
  circle(130, 130, 30);
  circle(160, 160, 30);
  pop();
}

function drawTopRightCornerFrame() {
  push();
  fill(0, 20+micVar);
  circle(490, 10, 30);
  circle(460, 40, 30);
  circle(430, 70, 30);
  circle(400, 100, 30);
  circle(370, 130, 30);
  circle(340, 160, 30);
  pop();
}

function drawBottomLeftCornerFrame() {
  push();
  fill(0, 20+micVar);
  circle(10, 490, 30);
  circle(40, 460, 30);
  circle(70, 430, 30);
  circle(100, 400, 30);
  circle(130, 370, 30);
  circle(160, 340, 30);
  pop();
}

function drawBottomRightCornerFrame() {
  push();
  fill(0, 20+micVar);
  circle(490, 490, 30);
  circle(460, 460, 30);
  circle(430, 430, 30);
  circle(400, 400, 30);
  circle(370, 370, 30);
  circle(340, 340, 30);
  pop();
}

function drawTopFrame() {
  push();
  fill(0, 20+micVar);
  circle(70, 10, 30);
  circle(130, 10, 30);
  circle(190, 10, 30);
  circle(250, 10, 30);
  circle(310, 10, 30);
  circle(370, 10, 30);
  circle(430, 10, 30);
  pop();
}

function drawLeftFrame() {
  push();
  fill(0, 20+micVar);
  circle(10, 70, 30);
  circle(10, 130, 30);
  circle(10, 190, 30);
  circle(10, 250, 30);
  circle(10, 310, 30);
  circle(10, 370, 30);
  circle(10, 430, 30);
  pop();
}

function drawRightFrame() {
  push();
  fill(0, 20+micVar);
  circle(490, 70, 30);
  circle(490, 130, 30);
  circle(490, 190, 30);
  circle(490, 250, 30);
  circle(490, 310, 30);
  circle(490, 370, 30);
  circle(490, 430, 30);
  pop();
}

function drawBottomFrame() {
  push();
  fill(0, 20+micVar);
  circle(70, 490, 30);
  circle(130, 490, 30);
  circle(190, 490, 30);
  circle(250, 490, 30);
  circle(310, 490, 30);
  circle(370, 490, 30);
  circle(430, 490, 30);
  pop();
}

function drawTail() {
  //tail  
  push();
  fill(0);
  noStroke();
  translate(200, 320);
  rotate(angleTail);
  triangle(0, 0, -100, -30, -120, -100); 
    //x, y(bottom), x, y(middle), x, y(top)
  pop();
}

function drawHorns() {
  //horns 
    //let c = color(255, 204, 0); //peach
  push();
  fill(0);
  noStroke();
  arc(175, 190, 90, 85, 2, PI + QUARTER_PI, PIE); //lefthorn
  arc(325, 190, 90, 85, -0.75, 265, PIE); //righthorn
  pop();
}

function drawBody() {
  //body
  push();
  fill(255);
  noStroke();
  ellipse(250,250,200,200); //body
  pop();
}

function drawEyeball() {
  //eyeball
  push();
  fill(177, 156, 217);
  stroke(0);
  strokeWeight(0);
  ellipse(215, 225, 45, 55); //lefteyeball
  ellipse(285, 225, 45, 55); //righteyeball
  pop();
}

function drawPupils() {
  //pupils
  push();
  fill(0);
  ellipse(215, 226, 25, 35); //leftpupil
  ellipse(285, 226, 25, 35); //rightpupil
  pop();
}

function drawPupilShineTop() {
  //pupilshinetop
  push();
  fill(255);
  ellipse(210, 220, 5, 6); //leftshinetop
  ellipse(280, 220, 5, 6); //rightshinetop
  pop();
}

function drawPupilShineBottom() {
  //pupilshinebottom
  push();
  fill(255);
  ellipse(220, 235, 5, 6); //leftshinebottom
  ellipse(290, 235, 5, 6); //rightshinebottom
  pop();
}

function drawEyebrows() {
  //eyebrows
  push();
  fill(0);
  rect(200, 190, 30, 5); //lefteyebrow
  rect(270, 190, 30, 5); //righteyebrow
  pop();
}

function drawBlush() {
    //let p = color('pink');
  push();
  fill('pink');
  ellipse(200, 260, 20, 8); //leftblush
  ellipse(300, 260, 20, 8); //rightblush
  pop();
}

function drawNose() {
  //nose
  push();
  fill(0);
  circle(250,260,10); //nose
  pop();
}

function drawMouth() {
  //mouth
  push();
  noFill();
  stroke(0);
  strokeWeight(6);
  arc(width * 0.5, height * 0.57, width * 0.05, width * 0.05, width * 0, PI); //mouth
  pop();
}

class Leaves {
  constructor(xpos, ypos, r, g, b) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.t = int(random(360));
    this.s = random(-2,2);
    this.r = r;
    this.g = g;
    this.b = b;
  }
  display() {
    push();
    noStroke();
    translate(this.xpos, this.ypos);
    rotate(this.t);
    fill(this.r, this.g, this.b);
    ellipse(0, 0, 8);
    rect(2, 2, 8);
    rect(4, 4, 8);
    rect(2, -2, 8);
    rect(-2, -4, 8);
    pop();
  }
  move() {
    this.t = this.t + this.s;
  }
}
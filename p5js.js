let xpos = 0;
let ypos = 0;

function setup() {
 createCanvas(720, 400,WEBGL);
}


function draw() {
background(0); 
  xpos = mouseX;
  ypos = mouseY;
  fill(255,0,0, 20);
  stroke(100,0,100);
  translate(mouseX-360,mouseY-200);
  box(50);
}

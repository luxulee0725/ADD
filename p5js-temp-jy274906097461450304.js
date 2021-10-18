let xpos = 0;
let ypos = 0;
function setup() {
 createCanvas(720, 400,WEBGL);
}


function draw() {
background(0); 
  fill(100,25,100,0.5);//0-255
  stroke(150,0,1000.5);
  translate(mouseX-360,mouseY-200);
  box(100);
}

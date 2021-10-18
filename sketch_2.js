function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  background(127);
  noStroke();
  for (let i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, mouseX, 10);
    fill(255);
    rect(i, 0, 10, mouseY);
  }
}

function setup() {
  createCanvas(600, 400);
  background("black")
}

function draw() {
  stroke("blue")
  fill("red")
  
  if (mouseIsPressed) {
    rect(mouseX,mouseY,20,35)
  }
}
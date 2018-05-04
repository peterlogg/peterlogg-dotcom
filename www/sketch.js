function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  frameRate(500);
}

function draw() {
	noStroke()
	var clicked = color(0, 0.5 * 255 * sin(-1 * frameCount), 0.5 * 255 * sin(frameCount));
	var notClicked = color(0.5*255*sin(frameCount), 0.05 * tan(frameCount), -0.5 * 255 * sin(frameCount));
  if (mouseIsPressed) {
    fill(clicked);
    ellipse(0.5*mouseX, 0.5*mouseY, 25 + 5 * sin(-0.01 * frameCount), 25 + 50 * cos(0.01 * frameCount));
    ellipse(0.5*mouseX, -0.5*mouseY, 25 + 5 * sin(-0.01 * frameCount), 25 + 50 * cos(0.01 * frameCount));
    ellipse(-0.5*mouseX, -0.5*mouseY, 25 + 5 * sin(-0.01 * frameCount), 25 + 50 * cos(0.01 * frameCount));
    ellipse(-0.5*mouseX, 0.5*mouseY, 25 + 5 * sin(-0.01 * frameCount), 25 + 50 * cos(0.01 * frameCount));
  } else {
    fill(notClicked);
    ellipse(mouseX, mouseY, 25 + 5 * sin(-0.01 * frameCount), 25 + 50 * cos(0.01 * frameCount));
  }
  
}
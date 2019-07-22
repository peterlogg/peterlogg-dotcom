var img;

function setup() {
   createCanvas(300, 300);
   img = loadImage('https://i.imgur.com/Q6aZlme.jpg');
}

function draw() {
   background('#111');
   translate(width / 2, height / 2);
   rotate(PI / 180 * 45);
   imageMode(CENTER);
   image(img, 0, 0, 150, 150);
}

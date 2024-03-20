/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Verdana");
}

function draw() {
  background(200);
  textSize(12);
  text("Scorpion once said...", 20, 60);
  if(mouseIsPressed){
    textSize(24);
  text("GET OVER HERE!", 20, 160);
  }
}
  

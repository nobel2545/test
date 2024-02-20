let url = ('https://raw.githubusercontent.com/novellac/multilanguage-hello-json/master/hello.json');
let img

function preload(){
  hi = loadJSON(url);
}

function setup() {
  randNum = int(random(104));
}

function draw() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);

  noStroke();
  ellipse(mouseX - 300,mouseY, 200, 100);
  triangle(mouseX -250,mouseY, mouseX -300,mouseY + 20, mouseX -200,mouseY + 50);

  textSize(25);
    fill(0);
    textAlign(CENTER);
    text(hi[randNum].hello, mouseX - 300,mouseY + 7);

  drawProfile();
}

function drawProfile(){
  
  noStroke();
  fill(255);
  rect(mouseX -70,mouseY,200,200);
  circle(mouseX + 30,mouseY,200);
  
  fill(0);
  triangle(mouseX - 30,mouseY + 25, mouseX - 20,mouseY,mouseX,mouseY + 25);
  
  fill(255);
  stroke(0);
  circle(mouseX,mouseY,50);
  
  fill(0);
  circle(mouseX,mouseY,20);
  
  fill(0);
  triangle(mouseX + 90,mouseY + 25, mouseX + 80,mouseY, mouseX + 60,mouseY + 25);
  
  fill(255);
  circle(mouseX + 60,mouseY,50);
  
  fill(0);
  circle(mouseX + 60,mouseY,20);
}
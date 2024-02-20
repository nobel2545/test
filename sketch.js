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
  background(100);

  noStroke();
  ellipse(150, 150, 200, 100);
  triangle(250, 200, 80, 150, 200, 150);

  textSize(25);
    text(hi[randNum].hello, 80, 155);
}
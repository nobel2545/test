function setup() {
    createCanvas(windowWidth, windowHeight/2);
  }
  
  function draw() {
    background(25);
    drawCloud();
  }

  function drawCloud(){
    noStroke();
    fill(random(250,255));
    circle(50,150,50);
    circle(85,140,75);
    circle(100,100,70);
    circle(140,110,50);
    circle(120,145,80);
    circle(160,140,60);
  }
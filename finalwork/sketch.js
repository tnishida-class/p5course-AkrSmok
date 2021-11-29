// 最終課題を制作しよう
let gameState;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
  vx = 6;
  vy = 6;
  LL = windowWidth/5;
  RL = windowWidth*4/5;
  TL = windowHeight/5;
  BL = windowHeight*4/5;
  b = windowWidth*2/5;
}

function draw(){
  gameState =="startGame"
  background(33, 19, 13);
  fill(250, 250, 250);
  textAlign(CENTER, BOTTOM);
  textSize(200);
  text('SQUASH', windowWidth/2, windowHeight*2/5);

  textSize(75);
  textAlign(CENTER, TOP);
  text('Press Buttom', windowWidth/2, windowHeight/2);

  textSize(30);
  text('START TO----(s)', windowWidth/2, windowHeight*7/10);
  if(key == "s"){gameState="nowGame"}


  if(gameState=="nowGame"){drawNowGameScreen();}
  if(gameState=="gameOver"){drawGameoverScreen();}
}



function drawNowGameScreen(){
        if(gameState=="nowGame"){
        background(33, 19, 13);
        textSize(100);
        textAlign(CENTER, CENTER);
        text('READY GO!!', windowWidth/2, windowHeight/2);
        let millisecond = millis();
        if(millisecond>=1500){
        background(33,19,13);
        strokeJoin(MITER);
        stroke(250);
        strokeCap(SQUARE);
        strokeWeight(10);
        line(LL, TL, LL, BL);
        line(LL, TL, RL, TL);
        line(RL, TL, RL, BL);
        line(b, BL, b + windowWidth/5, BL);
        }

        if(millisecond > 2500){
        strokeJoin(MITER);
        stroke(250);
        strokeCap(SQUARE);
        strokeWeight(10);
        line(LL, TL, LL, BL);
        line(LL, TL, RL, TL);
        line(RL, TL, RL, BL);

        ellipse(x, y, 20);

        x += vx;
        y += vy;

        if(x < LL + 15|| x > RL - 15){ vx = -1 * vx; }
        if(y < TL + 15|| y > BL - 15){ vy = -1 * vy; }
        x = constrain(x, 0, width);
        y = constrain(y, 0, height);

        strokeWeight(5);
        if(keyIsDown(LEFT_ARROW)){ b -= 5; }
        if(keyIsDown(RIGHT_ARROW)){ b += 5; }
        constrain(b, LL, windowWidth*3/5);
        line(b, BL, b + windowWidth/5, BL);
        if((x < b && y>= BL-15) || (x > b + windowWidth/5 && y>= BL-15)){
          gameState = "gameOver"}
      }
    }
  }



function drawGameoverScreen(){
  background(33,19,13);
  fill(255);
  textSize(150);
  textAlign(CENTER, CENTER);
  text("GAME OVER", windowWidth / 2, windowHeight / 2);
  textSize(40);
  vx=0;
  vy=0;
  text('PLEASE RELOAD PAGE TO CONTINUE', windowWidth/2, windowHeight*3/4)
}

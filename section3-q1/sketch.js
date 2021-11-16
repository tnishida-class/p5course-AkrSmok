// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count, cycle, size, speed;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  speed = 0;
}

function draw(){
  background(160, 192, 255);
  count = (count + 2 + speed) % cycle;
  size = 100 - count;
  fill(191, 66, 57);
  ellipse(width / 2, height / 2, size);

  //if(keyIsDown(UP_ARROW)){speed = 1;}
  //if(keyIsDown(DOWN_ARROW)){speed = -1;}

}
function keyPressed(){
  if(keyCode == UP_ARROW){speed += 1;}
  else if (keyCode == DOWN_ARROW) {speed -= 1;}
}

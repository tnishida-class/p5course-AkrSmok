// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    let plus = i + j;
     if(plus%2==0){
       noFill();
     }
     else {
       fill(196);
     }
     rect(size*i, size*j, size, size);
     if (j<=2 && plus%2==1) {
      fill(255, 0, 0);

      }
      if (j>=5 && plus%2==1) {
        fill(0, 0, 0);
      }
      ellipse(size*i + size / 2, size*j + size / 2, size)
      }
  }
}

// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  stroke(36, 135, 49);
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(70, 100, 100, 100, QUARTER_PI * 1 + PI, QUARTER_PI * 1);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  //神戸大学ロゴ
  fill(14, 47, 146);
  noStroke();
  circle(302, 100, 122);

  fill(22, 131, 46);
  stroke(255);
  strokeWeight(5);
  circle(293, 95, 110);

  fill(255);
  circle(293, 100, 100);

  fill(77);
  textFont('Georgia');
  textStyle(BOLD);
  textSize(26);
  text('KOBE', 254, 94)
  textStyle(NORMAL);
  textSize(13);
  text('university', 280, 110);




}

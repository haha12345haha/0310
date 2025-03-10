let question, radio, submitButton, result;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30);
  
  question = createP("1 + 1 等於多少？");
  question.style('font-size', '30px');
  question.position(width / 2 - question.width / 2 + 850, height / 2 - 250);
  
  radio = createRadio();
  radio.option('1');
  radio.option('2');
  radio.option('3');
  radio.option('4');
  radio.style('font-size', '30px');
  radio.position(width / 2 - radio.width / 2 + 850, height / 2 - 100);
  
  submitButton = createButton('送出');
  submitButton.style('font-size', '30px');
  submitButton.position(width / 2 - submitButton.width / 2, height / 2 + 50);
  submitButton.mousePressed(checkAnswer);
  
  result = createP('');
  result.style('font-size', '30px');
  result.position(width / 2 - result.width / 2 + 250, height / 2 + 10);
}

function draw() {
  background(220);
}

function checkAnswer() {
  const answer = radio.value();
  if (answer === '2') {
    result.html('對');
  } else {
    result.html('錯');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  question.position(width / 2 - question.width / 2 + 850, height / 2 - 250);
  radio.position(width / 2 - radio.width / 2 + 850, height / 2 - 100);
  submitButton.position(width / 2 - submitButton.width / 2, height / 2 + 50);
  result.position(width / 2 - result.width / 2 + 250, height / 2 + 10);
}

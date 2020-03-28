var symbolSize = 26;
var streams = [];
function setup() { // called only once
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
  var x = 0;

  for (var i= 0; i<= width/ symbolSize; i++){ // for no. of streams
    var stream = new Stream();
    stream.generateSymbols(x, random(-1000, 0));
    streams.push(stream);
    x += symbolSize;
  }
  textSize(symbolSize);
}

function draw() {  // called repeatedly at 60 fames per sec
  background(0, 150);
  streams.forEach(function(stream){
    stream.render();
  });

}

function Symbol(x,y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.switchInterval = round(random(2, 50));
  this.first = first;

// code to set and retrieve symbol
  this.setToRandomSymbol = function(){
    if (frameCount % this.switchInterval == 0){ // switch symbols in given time
      this.value = String.fromCharCode(
        0x30A0 + round(random(0, 96))  // random katakana code
      );

    }

  }

  this.rain = function() { // to rain symbols down
    this.y = (this.y >= height) ? 0: this.y +=this.speed;

  }

}
// for random no. of streams
function Stream(){
  this.symbols = [];
  this.totalSymbols = round(random(5, 30));
  this.speed = random(5, 15);
// initializing symbols for each stream
  this.generateSymbols = function(x, y) {
    var first = round(random(0, 4)) == 1;
    for (var i =0; i<= this.totalSymbols; i++){
      symbol = new Symbol(x, y, this.speed, first);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {

    this.symbols.forEach(function(symbol){
      if (symbol.first){
        fill(180, 255, 180);
      }else{
        fill(0, 255, 70);
      }

      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();

    });
  }

}

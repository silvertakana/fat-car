var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database,shadow;

var form, player, game;

var cars, car1, car2, car3, car4,carimg = [],track,ground;

function preload(){
  for(let i = 0;i<4;i++){
    carimg[i] = loadImage("images/car"+(i+1)+".png");
  }
  shadow =  loadImage("images/car1.png");
  track =loadImage('images/track.jpg');
  ground =loadImage('images/ground.png');
  
  // shadow.loadPixels()
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  shadow.loadPixels()
  for(let i = 0;i<shadow.pixels.length;i+=4){
    // let p =shadow.pixels[i]
    console.log(i)
    if(shadow.pixels[i + 3] !== 0){
    shadow.pixels[i] = 0;
    shadow.pixels[i + 1] = 0;
    shadow.pixels[i + 2] = 0;
    shadow.pixels[i + 3] = 100;
    }
  }
  
    
   
  shadow.updatePixels();
  console.log(shadow.pixels)
}


function draw(){
  if(playerCount >= 4 ){
    game.update(1);
  }else{
    game.update(0);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  // image(shadow,0, 0, width, height)
}

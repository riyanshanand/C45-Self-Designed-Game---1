var trex;
var ground;
var bgImage;
function preload(){

}
function setup(){
  createCanvas(900,620)
  ground = createSprite(450,310,900,620)
  ground.shapeColor = "Black"
  ground.velocityX = -5
  trex = createSprite(250,520,50,50)

}

function draw(){
  background("blue")

  if(ground.x<450){
    ground.x = 450
  }
  drawSprites()
}
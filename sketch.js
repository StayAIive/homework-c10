var ship, shipImg,backgroundImg,back;
function preload(){
  backgroundImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  back = createSprite(200,200,1,1);
  back.addImage(backgroundImg);
  back.scale = 0.25;
  back.velocityX = -2;

  ship = createSprite(200,200,10,10);
  ship.addAnimation("a",shipImg);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  if(back.x < 0){
    back.x = width/2;
  }
  drawSprites()

}
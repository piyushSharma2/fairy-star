var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
   starImg = loadImage("star.png");
   fairyImg = loadAnimation("fairy1.png","fairy2.png");
   bgImg = loadImage("starnight.png");
   fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

    fairy = createSprite(130, 520);
    fairy.addAnimation("fairyflying",fairyImg);  
    fairy.scale =0.25;

    star = createSprite(650,30);
    star.addImage(starImg);
    star.scale = 0.2;
    
    engine = Engine.create();
    world = engine.world;
    fairyVoice.play();

    
}

function draw() {

    background(bgImg);
    fairy.velocityX=0;

    if(star.position.y >480){
        star.velocityY=0;
        fairy.velocityX=0;
    }

   keyPressed();
   drawSprites();

}

function keyPressed() {
    //write code here
     
    if(keyDown("right")){
        fairy.velocityX=4;
    }
  
    if(keyDown("left")){
        fairy.velocityX=-4
    }
  
    if(keyDown("down")){
        star.velocityY=4;
    }
  
}



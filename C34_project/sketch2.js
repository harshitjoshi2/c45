var bgImg,bg;
var zombie1,zombie2,zombie3;
var hero,heroImg;
var zombie1Img,zombie2Img,zombie3Img;

function preload(){
bgImg = loadImage("zombies images/background.jpg");
heroImg = loadImage("zombies images/Hero.png");
zombie1Img=loadImage("zombies images/zombie1.png");
zombie2Img=loadImage("zombies images/zombie2.png");
zombie3Img=loadImage("zombies images/cerif zombie.png")
}

function setup(){
createCanvas(windowWidth-100,windowHeight-100);

hero=createSprite(200,500,50,100);
hero.addImage(heroImg);


    

}

function draw(){
background(bgImg);

if(keyDown("RIGHT_ARROW")){
  hero.x+=5;
}

if(keyDown("LEFT_ARROW")){
  hero.x-=5;

}
if(hero.x<0){
  hero.x=10;
}

if(hero.x>windowWidth-100){
  hero.x=windowWidth-150;
}

spawnZombie1();
drawSprites();
}


function spawnZombie1(){
  if(frameCount%250===0){
    zombie1=createSprite(width-50,500,50,100);
    zombie1.addImage(zombie1Img);
    zombie1.velocityX=-2;
  }
}
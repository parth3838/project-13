var garden,rabbit;
var gardenImg,rabbitImg;
var leftBoundary, rightBoundary;
var apple , appleImg;
var leaf , leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

// creating invisible boundary
leftBoundary = createSprite(0,200,30,400);
leftBoundary.visible = false;
rightBoundary = createSprite(400,200,30,400);
rightBoundary.visible = false;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  rabbit.collide(leftBoundary);
  rabbit.collide(rightBoundary);

  spawnApple();
  spawnLeaf();

  drawSprites();
}

//function to spawn the apple
function spawnApple(){
  console.log(frameCount);
 
   if (frameCount % 80===0){
  apple = createSprite(200,10,20,50);
  apple.scale = 0.10;
  apple.velocityY = 3;
  apple.x = Math.round(random(78,320));
  apple.addImage(appleImg);
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
   }
 
  
 }
 
 //function to spawn the leaf
function spawnLeaf(){
  console.log(frameCount);
 
   if (frameCount % 60===0){
  leaf = createSprite(355,10,20,50);
  leaf.scale = 0.10;
  leaf.velocityY = 3;
  leaf.x = Math.round(random(98,215));
  leaf.addImage(leafImg);
  leaf.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
   }
 
  
 }
var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png")
  boyImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite (200,200,300,750)
 path.addImage(pathImg)
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

boy=createSprite(200,200,20,20)
boy.addAnimation("running",boyImg)
boy.scale=0.5;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  if (keyDown("left")){
    boy.x=boy.x - 5
  }
  if (keyDown("right")){
    boy.x=boy.x + 5
  }
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.bounceOff(leftBoundary) 
   boy.bounceOff(rightBoundary)  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

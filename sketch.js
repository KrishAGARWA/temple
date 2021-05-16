
var ground,groundImage;

var openImage;
var player,playerImage
var input,button;
var name1;
var gameState="start"
var bg,bgImage
var obImage,obImag
function preload(){

openImage=loadImage("start.png")
bgImage=loadImage("start.png")
playerImage=loadAnimation("run1.png","run5.png","run6.png")
obImag=loadImage("ob1.png")
obImage=loadImage("ob2.png")

}


function setup() {
  createCanvas(windowWidth-10, windowHeight-30);
  background('green')

 

 ground=createSprite(750,300,width,height)
ground.addImage(openImage)
ground.scale=1



bg=createSprite(windowWidth/2,windowHeight/2,width,height)
bg.addImage(bgImage)
bg.scale=1.65
bg.velocityX=-10
bg.x=bg.width/2
bg.visible=false

player=createSprite(width-1350,height-150,100,100)
player.addAnimation("running"+playerImage)
player.scale=0.5

input=createInput("name")
button=createButton("submit")
input.position(width/2,height/2+100);
button.position(width/2+200,height/2+100)
}

function draw() {

  background("green");

  if(bg.x<0){
    bg.x=bg.width/2
  }
  button.mousePressed(()=>{
    input.hide()
    button.hide()
    var name=input.value()
    name1=name
    gameState="level1"
  })
 

if(gameState==="level1"){
  // background(bgImage)
ground.visible=false
bg.visible=true
SpawnObstacles()
}

drawSprites()

textSize(24)
fill("Yellow")
strokeWeight(3)
stroke("red")
text("Welcome "+name1,100,50)


}

function SpawnObstacles(){
  if (frameCount % 80 === 0){
    var obstacle = createSprite(width,height-150,10,40);
    obstacle.velocityX = -6
var no =Math.round(random(1,2))
switch(no){
case 1:  obstacle.addImage(obImage)
break;
case 2: obstacle.addImage(obImag)
break;
default: break;

}
obstacle.lifetime = 800;


}}


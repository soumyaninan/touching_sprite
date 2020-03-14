var obj1,obj2;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,rect9,rect10;
function setup(){
  createCanvas(1200,800);
  rect1=createSprite(100,100,80,50);
  rect2=createSprite(200,100,80,50);
  rect3=createSprite(300,100,80,50);
  rect4=createSprite(400,100,80,50);
  rect5=createSprite(500,100,80,50);
  rect6=createSprite(600,100,80,50);
  rect7=createSprite(700,100,80,50);
  rect8=createSprite(800,100,80,50);
  rect9=createSprite(900,100,80,50);
  rect10=createSprite(1000,100,80,50);
}
function draw() {
  background(0,0,0);  
 rect2.x=mouseX;
 rect2.y=mouseY;

if(isTouching(rect10,rect2)){
  rect10.shapeColor = "blue";
  rect2.shapeColor = "blue";
}
else{
rect10.shapeColor = "red";
  rect2.shapeColor = "red";
}
 
  
  drawSprites();
};





function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2 
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2 
  && obj1.y - obj2.y < obj2.height/2 + obj1.height/2)
 {
  return true;
 }
else {
  return false;
}
}
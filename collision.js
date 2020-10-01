var fixedRect,movingRect,ball1,ball2,ball3,ball4,object1,object2;

function setup(){
    
    createCanvas(1200,800);
    fixedRect=createSprite(300,300,50,90);
    movingRect=createSprite(900,300,90,50);
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue";
    fixedRect.debug=true;
    movingRect.debug=true;
    
  ball1=createSprite(100,100,50,50);
 ball1.shapeColor="green";
  ball2=createSprite(200,100,50,50);
 ball2.shapeColor="green";  
  ball3=createSprite(300,100,50,50);  
ball3.shapeColor="green";
ball4=createSprite(400,100,50,50);  
  ball4.shapeColor="green";
 


}

function draw(){

    background(0,0,0);
        movingRect.y=World.mouseY
        movingRect.x=World.mouseX

if(isTouching(movingRect,ball2)){
  movingRect.shapeColor="red";
  
}
else{
  movingRect.shapeColor="blue";
}
    drawSprites();
}  
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&  object2.x-object1.x<object2.width/2+object1.width/2
    &&  object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2
    ){
return true;
  }
  else{
   return false;
  }
}
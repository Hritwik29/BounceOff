var fixedRect,movingRect;

function setup(){
    
    craeteCanvas(1200,800);
    fixedRect=createSprite(300,300,50,90);
    movingRect=createSprite(500,500,90,50);

}

function draw(){
    background(0,0,0);
    movingRect.x= World.mouseX;
    movingRect.y=World.mouseY;
    drawSprites();
    }

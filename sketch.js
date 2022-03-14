var box;
var box2
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor= "lime"
box2 = createSprite (100,100,30,30);
box2.shapeColor= "turquoise"
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }
 if  (keyDown("s"))
 {
   box2.position.y=box2.position.y +5;
 }
 if  (keyDown("w"))
 {
   box2.position.y=box2.position.y -5;
 }
 if  (keyDown("a"))
 {
   box2.position.x=box2.position.x -5;
 }
 if  (keyDown("d"))
 {
   box2.position.x=box2.position.x +5;
 }
  drawSprites();
}





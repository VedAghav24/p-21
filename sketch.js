var thickness,bullet,wall,speed,weight



function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed
  bullet.shapeColor=color(255);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(230,230);
}

function draw() {
  background(0); 
  if(hasColided(bullet,wall)){
  bullet.velocityX=0
var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }

  if(deformation>10){
    wall.shapeColor=color(255,0,0)   
}


//if(deformation<10){
 // bullet.shapeColor=color(0,255,0)   
//}
  drawSprites();
}
function hasColided(bullets,walls){
  bulletRightedge=bullets.x+bullets.width
  wallLeftedge=walls.x

  if(bulletRightedge>=wallLeftedge){
  return true
  }
  return false
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 700);

    paper = createSprite(200,680,15,15)

	ground = createSprite(width/2,700,windowWidth,10)
	ground.shapeColor = "lightblue"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	can1 = Bodies.rectangle(windowWidth - 250, 690, 300, 20 , {isStatic:true} );
	World.add(world, can1);
	can2 = Bodies.rectangle(windowWidth - 100, 610, 20, 210 , {isStatic:true} );
	World.add(world, can2);
	can3 = Bodies.rectangle(windowWidth - 400, 610, 20, 210 , {isStatic:true} );
	World.add(world, can3);

	Engine.run(engine);
  
    

}


function draw() {
  rectMode(CENTER);
  background("silver");
 paper.visible = false 
paper.collide(ground)

if(keyDown("up") && paper.x === 200){
	paper.velocityY = -22
	paper.velocityX = 21.8
}

if(paper.x < windowWidth - 205  && paper.velocityX < 0) {
	paper.velocityX = 0
}

if(paper.x < windowWidth - 250  && paper.velocityX < -0) {
	paper.velocityX = 0
}

  object1 = createSprite(can1.position.x,can1.position.y,300,20);
  object2 = createSprite(can2.position.x,can2.position.y,20,210);
  object3 = createSprite(can3.position.x,can3.position.y,20,210);
fill("white")
stroke("white")
ellipse(paper.x,paper.y,15,15)

  paper.bounceOff(object1)
  paper.bounceOff(object2)
  paper.bounceOff(object3)

  paper.bounciness = 0.26

  paper.velocityY = paper.velocityY + 0.8
  drawSprites();
 
}




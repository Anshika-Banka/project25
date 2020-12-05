var paper,wall1,wall2,wall3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	db=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,height,800,20);
	paper =  new Paper(100,100);
	wall1Sprite=createSprite(width/2,height-100,200,20);
	wall1Sprite.shapeColor="red";
	
	wall1Sprite.addImage(db);
     wall1Sprite.scale=1;
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
 
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	}
}




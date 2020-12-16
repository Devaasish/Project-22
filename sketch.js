var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var engine, world, bodies;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	}

	var packageBody_options = {restitution:1.0, isStatic:true}

	packageSprite=createSprite(width/2, 80, 10,10);
	World.add(world,packageSprite);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	World.add(world,helicopterSprite);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	World.add(world,groundSprite);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, ground_options);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  packageSprite.collide(groundSprite);
  drawSprites();
  keyPressed();	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	packageSprite.scale = 0.2;
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
  }
}
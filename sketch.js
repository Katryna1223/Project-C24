
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, rubber, stone, plane;
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(0,0, 140, 45);
	plane = new Plane(width/2, height-10, width, 50);
	stone = new Stone(340,105);
	rubber = new Rubber(300, 123, 60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}




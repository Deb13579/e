
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy, boyimg
function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    stone = new Stone(20,20,20)
	//Create the Bodies Here.
	ground = new Ground(400,height,800,100)
	World.add(world, ground)
boy = createSprite(200,590,20,20)
boy.addImage(boyimg)
boy.scale = 0.1
slingShot = new Chain(boy.body,{x:200, y:590})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display()
  stone.display()
  slingShot.display()
  drawSprites();
 
}




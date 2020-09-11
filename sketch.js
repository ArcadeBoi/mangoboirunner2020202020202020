
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var boy;
var mango1, mango2,	mango3,	mango4, mango5;
var stone ;
var ground;
var tree;
var papa
var mangoBodyPosition ,stoneBodyPosition;

function preload()
{

}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (600,600,1800,40);
	stone = new Stone (280,430,50,50)

	boy = new Boy(200,475,200,250);
	tree = new Tree(1100,300,600,600);

	mango1 = new Mango(1100,100,70);
	mango2 = new Mango(1050,200,60);

	chain = new Chain(stone.body,{x:280,y:440});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  stone.display();
  chain.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    
}
function mouseReleased(){
    chain.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.setPosition
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y )
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

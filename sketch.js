
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, stone;
var boy, boyImage;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
   boyImage = loadImage("boy.png"); 	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(200,250,10,10);
	ground = new Ground(600,height,1200,20);
	stone = new Stone(235,420,30);
	boy = new Boy(700,240,70,70);
	boy(boyImage);
	mango1 = new Mango(150,100,10);
	mango2 = new Mango(120,150,10);
	mango3 = new Mango(190,160,10);
	mango4 = new Mango(110,130,10);
	mango5 = new Mango(170,120,10);;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);


  drawSprites();
 
}
function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    stone.fly();  
}

function detectCollision(Lstonne,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420});
		launcherObject.attach(stone.body);
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var dustbinobj,paperobj,groundobj
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinobj = new dustbinobj(1200,600);
	paperobj = new paperobj(200,500,50);
	groundobj = new groundobj(width/2,680,width,20);
	

	//Create a Ground
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObj.display();
  paperObject.display();
  groundObject.display();
}
  function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
  
  drawSprites();
 
}




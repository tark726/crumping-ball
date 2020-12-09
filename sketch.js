var ballsp,ballb;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	
	var r1s = createSprite(900, 650, 200, 20 );
	r1s.shapeColor = "red";
	var r2s = createSprite(800, 610, 20, 100 );
	r2s.shapeColor = "red";
	var r2s = createSprite(1000, 610, 20, 100 );
	r2s.shapeColor = "red";

	
    
	
	var options = {
		
		isStatic: false,
		'restitution': 0.3,
		friction:0.5  ,
		density:1.2
		

	}
	
	var ground_options = {
    isStatic:true
}
ground = Bodies.rectangle(width/2, height-35, width,10,ground_options);
World.add(world,ground)
ballb = Matter.Bodies.circle(200 , 620 , 10 ,options);
console.log(ballb.position.y)
World.add(world,ballb);	
r1 = Bodies.rectangle(900, 630, 200, 20 , {isStatic:true} );
World.add(world,r1)
r2 = Bodies.rectangle(800, 610, 20, 100 , {isStatic:true} );
World.add(world,r2)
r3 = Bodies.rectangle(1000, 610, 20, 100,  {isStatic:true} );
World.add(world,r3)
Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  fill("red");
  circle(ballb.position.x,ballb.position.y,20);
  fill(255);
  rect(width/2, height-35, width,10);
  keyPressed();
  drawSprites();
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ballb.body,ballb.body.position,{x:85,y:85})
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine, world;
var ball;
var wall1;
var wall2;
var wall3;


function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	wall1 = new wall(1000, 535, 10, 150);
	wall2 = new wall(1300,535,10,150);
	wall3 = new wall(width/2,600,width,20);

	var ball_options = {
		//isStatic:false,
		restitution:0.95,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(150,300,20,ball_options);
	World.add(world,ball);

	
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);
  wall1.show();
  wall2.show();
  wall3.show();
  Engine.update(engine);

 
}

/*function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}*/
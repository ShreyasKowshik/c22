const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engineObject, engineWorld;
var ground, ball;

function setup() {
  createCanvas(400,400);

engineObject = Engine.create ();
engineWorld = engineObject.world;

var groundOptions = {
  isStatic: true,
}

var ballOptions = {
 restitution: 1,
}


ground = Bodies.rectangle (200,380,400,20,groundOptions);
ball = Bodies.circle (150,150,20,ballOptions);
World.add (engineWorld,ground);
World.add (engineWorld,ball);
console.log(ball);


}

function draw() {
  background(255,255,255); 
 Engine.update(engineObject);
  rectMode (CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode (RADIUS);
  ellipse (ball.position.x,ball.position.y,20,20);

}

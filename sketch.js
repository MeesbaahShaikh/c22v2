const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,object
function setup() {
  createCanvas(800,400);

//first create your engine 

engine=Engine.create();

//second create world;
world=engine.world;

var options={
  isStatic :true
}
object=Bodies.rectangle(200,100,50,50,options)
  

//add your object into your world
World.add(world,object)


}

function draw() {
  background(0);  
 
  Engine.update(engine);


  fill ("white")
  //container
  rect(object.position.x,object.position.y,50,50);
}
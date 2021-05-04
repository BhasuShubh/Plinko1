const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [] ;
var division = [];
var plinko = [];
var engine;
var world ;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground (width/2,height-5,width,10);
  for(var k = 0;k<= width;k = k+80){
    division.push(new wall(k,height-135,10,250))
  }
  for(var q = 0;q<=800;q = q+50)
  plinko.push(new Plinko(q,50))
  for(var q = 25;q<=800;q = q+50)
  plinko.push(new Plinko(q,100))
  for(var q = 0;q<=800;q = q+50)
  plinko.push(new Plinko(q,150))
  for(var q = 25;q<=800;q = q+50)
  plinko.push(new Plinko(q,200))
  for(var q = 0;q<=800;q = q+50)
  plinko.push(new Plinko(q,250))
  for(var q = 25;q<=800;q = q+50)
  plinko.push(new Plinko(q,300))
  for(var q = 0;q<=800;q = q+50)
  plinko.push(new Plinko(q,350))
 
}

function draw() {
  background('black');  
  Engine.update(engine)
  ground.display();
 for(var v = 0;v<division.length;v++){
   division[v].display();

 }
 
 for(var q = 0;q<plinko.length;q++)
 plinko[q].display();

 if(frameCount %90=== 0){
    particles.push(new particle(random(20,780),0))
 }
  for(var w = 0;w<particles.length;w++)
  particles[w].display();
  
  drawSprites();
}
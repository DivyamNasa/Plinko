
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,division1,division2,division3,division4,division5,division6,division7;
var plinkos = [];
var particles = [];


function setup() {
	createCanvas(489, 650);


	engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
 ground = new Ground(240,640,500,10)

 division1 = new Ground(4,530,6,220)
 division2 = new Ground(84,530,6,220)
 division3 = new Ground(164,530,6,220)
 division4 = new Ground(244,530,6,220)
 division5 = new Ground(324,530,6,220)
 division6 = new Ground(404,530,6,220)
 division7 = new Ground(484,530,6,220)

 for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }


  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }


division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();

ground.display();

  drawSprites();
 
}




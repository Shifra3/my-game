const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(displayWidth/2,displayHeight-50,displayWidth,20)
    game= new Game()
    game.start()
    

    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
   
}
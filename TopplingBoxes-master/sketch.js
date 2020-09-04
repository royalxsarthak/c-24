const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5
var log1,log2,pig1,pig2,birdy,log3,log4
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new Box(300,100,50,100)
    box4 = new Box(150,200,50,100)
    box5 = new Box(100,280,50,100)
    pig1 = new pig(235,100,50,50)
    pig2 = new pig(150,190,50,50)
    birdy = new bird(50,200,20,20)
    log1 = new log(30,120,PI/4)
    log2 = new log(350,120,-PI/4)
    log3 = new log(100,50,PI)
    log4 = new log(300,50,PI)
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    box3.display()
    box4.display()
    box5.display()
    pig1.display()
    pig2.display()
    birdy.display()
log1.display()
log2.display()
log3.display()
log4.display()
    
    
}
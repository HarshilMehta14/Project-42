const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella, human;
var walking, thunderbolt;
var raindrops = [];
var maxDrops = 100;

function preload(){
    thunderbolt = loadAnimation("1.png", "2.png",
    "3.png", "4.png");

    walking = loadAnimation("walking_1.png", "walking_2.png",
    "walking_3.png", "walking_4.png", 
    "walking_5.png", "walking_6.png",
    "walking_7.png", "walking_8.png");
}

function setup(){
   var canvas = createCanvas(400, 700);

   engine = Engine.create();
   world = engine.world;

   for(var i = 0; i < maxDrops; i++){
       var appearance = frameCount % 30;
       if(appearance = 0){
       raindrops.push(new createDrop(random(0, 400), random(0, 400)));
   }
  }
  

  umbrella = new Umbrella();

  thunder = createSprite(200, 350, width, height);
  thunder.addAnimation("thunders", thunderbolt);


  human = createSprite(300, 720, 20, 100);
  human.addAnimation("Human_Walking", walking);
  human.scale = 0.5;
}
function draw(){
    background(0);

    Engine.update(engine);

    raindrops.display();
    umbrella.display();
}
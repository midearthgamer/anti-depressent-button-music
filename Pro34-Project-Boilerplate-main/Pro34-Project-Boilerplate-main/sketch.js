
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var music;

var cost1 = 10;

var score = 0;

var add_to_ammount = 1;

function preload() {
  music = loadSound('your-love-is-what-i-need-soundroll-main-version-12292-03-37.mp3');
}

function setup() {

  music.play();
  createCanvas(window.innerWidth-4,window.innerHeight-4);


  button = createImg('istockphoto-1293320736-170667a.jpg');
  button.position(canvas.width/2-75,canvas.height/2-75);
  button.size(150,150);
  button.mouseClicked(add);

  buttonAddToAdd = createImg('istockphoto-1293320736-170667a.jpg');
  buttonAddToAdd.position(canvas.width/25,canvas.height/25);
  buttonAddToAdd.size(150,150);
  buttonAddToAdd.mouseClicked(addToAdd);

  engine = Engine.create();
  world = engine.world;
  
}


function draw()
{

  score = round(score);

  cost1 = round(cost1);

  background(255,255,255);
  Engine.update(engine);
  text.size = 50;
  text('Anti Depressent(s): ' + score,canvas.width/2-75,canvas.height/2-75)
  text('Anti Depressent(s) Per Click: ' + add_to_ammount,canvas.width/2-75,canvas.height/2-85)
  text('Cost for more Anti Depressent(s) Per Click: ' + cost1,canvas.width/25,canvas.height/25-10)
  
}

function add() {
  score = score+add_to_ammount;
}

function addToAdd() {
  if (cost1 <= score) {
    score = score-cost1
    cost1 = cost1*1.2
    add_to_ammount = add_to_ammount+1;
  }
}
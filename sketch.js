
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
const Body = Matter.Body;
var ground;
var particle 
var plinkos=[]
var divisions=[]
var score=0,count=0,gameState="Start"

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,790,width,20);
	
	for(var i=0;i<width;i=i+80){
		divisions.push(new Ground(i,height-150,10,300))
	}
	for(var i=75;i<width;i=i+50){
		plinkos.push(new Plinko(i,75,10))
	}
	for(var i=50;i<width;i=i+50){
		plinkos.push(new Plinko(i,175,10))
	}	
	for(var i=75;i<width;i=i+50){
		plinkos.push(new Plinko(i,275,10))
	}
	for(var i=55;i<width;i=i+50){
		plinkos.push(new Plinko(i,375,10))
	}
	
	
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("black");
  textSize(35);
  text("score :"+score,20,40);
  fill("white");
  text(" 500 ",3,550);
  text(" 500 ",80,550);
  text(" 500 ",160,550);
  text(" 100 ",240,550);
  text(" 100 ",320,550);
  text(" 100 ",400,550);
  text(" 100 ",480,550);
  text(" 200 ",560,550);
  text(" 200 ",640,550);
  text(" 200 ",720,550);
  ground.display();
  if(gameState=="end"){
	  textSize(100);
	  text("game over",150,250)
  }
 for(var i=0;i<plinkos.length;i++){
	 plinkos[i].display()
	 
 }
 if (particle!=null){
	 particle.display();
	 if(particle.body.position.y>760){
		 if (particle.body.position.x<220){
			 score+=500
		 }
		 else  if (particle.body.position.x<540 && particle.body.position.x>220){
			score+=100
		}
		else  if (particle.body.position.x<900 && particle.body.position.x>540){
			score+=200
		}
		particle=null
		if(count>=5){
			gameState="end"
		}
	 }
	
 }
 
for(var i=0;i<divisions.length;i++){
	divisions[i].display()
	
}
}

function mouseReleased(){
	if(gameState!="end"){
		count++;
		particle=new Particle(mouseX,10,10)
	}
}
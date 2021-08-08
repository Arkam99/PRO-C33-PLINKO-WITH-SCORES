var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particle ;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var gameState = "PLAY";
var count = 0;
var flag = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20)
  text("Score : "+score,20,30);
  text("500",25,530);
  text("500",105,530);
  text("500",185,530);
  text("500",265,530);
  text("100",345,530);
  text("100",425,530);
  text("100",505,530);
  text("200",585,530);
  text("200",665,530);
  text("200",745,530);

 // text(mouseX,400,20);
// text(mouseY,400,40);

  Engine.update(engine);
  ground.display();

  if(particle!=null && flag == 0)
  {
     particle.display();

     if(particle.body.position.y>780)
     {
         if(particle.body.position.x<325)
         {
           score=score+500;
           flag=1;
         
        
           if (count>=5){ gameState = "END";}
         }
     

    
         if(particle.body.position.x>325 && particle.body.position.x<560)
         {
           score=score+100;
           flag=1;
         
         
           if (count>=5){ gameState = "END";}
         }

         if(particle.body.position.x>560)
         {
           score=score+200;
           flag=1;
          
         
           if (count>=5){ gameState = "END";}
         }
     
        }
      }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
 if(gameState!="END"){
   particle=new Particle(mouseX,10,10,10);
   count+=1;
   flag=0;
 }

}
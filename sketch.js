var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var schoolBoy,schoolBoyImage;
var dog1,dog2,dog4,dog4,dog1Image,dog2Image,dog3Image,dog4Image;
var edges;
var house,houseImage
var wallGroup;
var milk,milkImage;
var milk2,milk2Image;
var bread,breadImage;
var bread2,bread2Image;
var fruitsandvegetables,fruitsandvegetablesImage;
var fruitsandvegetables2,fruitsandvegetables2Image;
var cheese,cheeseImage;
var cheese2,cheese2Image;
var gameState="level2";
var laser1,laser2,laser3,laser4;
var chancesleft=3;
var girl,girlImage;
var cherry1,cherry1Image,cherry2,cherry2Image;
var i=4;
var sound1,sound2,sound3;
var sadBoy,sadBoyImage;

function preload() {
 schoolBoyImage = loadImage("SchoolBoy.png");
 houseImage = loadImage("House.png");
 dog1Image = loadImage("dog1.png");
 dog2Image = loadImage("dog2.png");
 dog3Image = loadImage("dog3.png");
 dog4Image = loadImage("dog4.png");
 cheeseImage = loadImage("cheese.png");
 cheese2Image = loadImage("cheese2.png");
 fruitsandvegetablesImage = loadImage("fruitsandvegetables.png");
 fruitsandvegetables2Image = loadImage("fruitsandvegetables2.png");
 breadImage = loadImage("bread.png");
 bread2Image = loadImage("bread2.png");
 milkImage = loadImage("Milk.png");
 milk2Image = loadImage("Milk2.png");
 girlImage = loadImage("girl.png");
 cherry1Image = loadImage("cherry.png");
 cherry2Image = loadImage("cherry2.png");
 sadBoyImage = loadImage("sad boy.png");
 sound1 = loadSound("retro_game_long_fall_2.mp3");
 sound2 = loadSound("peaceful_win_8.mp3");
 sound3 = loadSound("bells_win_low.mp3"); 
}


function setup() {
  canvas=createCanvas(1350,650);
   
  edges=createEdgeSprites()

  wallGroup=new Group();

  cherry1=createSprite(1150,620,20,20);
  cherry1.addImage(cherry1Image);
  cherry1.scale=0.1;

  cherry2=createSprite(1200,620,20,20);
  cherry2.addImage(cherry2Image);
  cherry2.scale=0.1;
  cherry2.visible=false;

  schoolBoy=createSprite(50,590,20,20);
  schoolBoy.addImage(schoolBoyImage);
  schoolBoy.scale=0.2;

  dog1=createSprite(350,450,20,20);
  dog1.addImage(dog1Image);
  dog1.scale=0.05;
  dog1.velocityX=2;
  dog1.velocityY=8;

  dog2=createSprite(50,400,20,20);
  dog2.addImage(dog2Image);
  dog2.scale=0.07;
  dog2.velocityX=-6;
  dog2.velocityY=7;

  dog3=createSprite(160,100,20,20);
  dog3.addImage(dog3Image);
  dog3.scale=0.1;  
  dog3.velocityX=2;
  dog3.velocityY=7;
  dog3.setCollider("circle",0,0,200);
  //dog3.debug=true;

  dog4=createSprite(1300,600,20,20);
  dog4.addImage(dog4Image);
  dog4.scale=0.1;
  dog4.velocityX=-8;
  dog4.velocityY=-3;

  milk=createSprite(50,100,20,20);
  milk.addImage(milkImage);
  milk.scale=0.1;
  milk.visible=true;
  
  milk2=createSprite(650,620,20,20);
  milk2.addImage(milkImage);
  milk2.scale=0.07;
  milk2.visible=false;

  cheese=createSprite(750,470,20,20);
  cheese.addImage(cheeseImage);
  cheese.scale=0.15;
  cheese.visible=true;
  
  cheese2=createSprite(700,620,20,20);
  cheese2.addImage(cheeseImage);
  cheese2.scale=0.1;
  cheese2.visible=false;

  bread=createSprite(1050,400,20,20);
  bread.addImage(breadImage);
  bread.scale=0.15;
  bread.visible=true;
  
  bread2=createSprite(550,620,20,20);
  bread2.addImage(breadImage);
  bread2.scale=0.1;
  bread2.visible=false;

  fruitsandvegetables=createSprite(810,280,20,20);
  fruitsandvegetables.addImage(fruitsandvegetablesImage);
  fruitsandvegetables.scale=0.05;
  fruitsandvegetables.visible=true;
  
  fruitsandvegetables2=createSprite(800,620,20,20);
  fruitsandvegetables2.addImage(fruitsandvegetables2Image);
  fruitsandvegetables2.scale=0.05;
  fruitsandvegetables2.visible=false;


wall1 = createSprite(80,640,150,20);
wall1.shapeColor="red";

wall2 = createSprite(150,580,20,170);
wall2.shapeColor="red";

wall3 = createSprite(40,500,110,20);
wall3.shapeColor="red";

wall4 = createSprite(85,450,20,100);
wall4.shapeColor="red";

wall5=createSprite(120,420,80,20);
wall5.shapeColor="red";

wall6 = createSprite(200,505,80,20);
wall6.shapeColor="red";

wall7 = createSprite(250,500,20,140);
wall7.shapeColor="red";

wall8= createSprite(170,380,20,100);
wall8.shapeColor="red";

wall9 = createSprite(230,350,100,20);
wall9.shapeColor="red";

wall10 = createSprite(310,440,100,20);
wall10.shapeColor="red";

wall11 = createSprite(410,430,20,100);
wall11.shapeColor="red";

wall12 = createSprite(390,600,20,100);
wall12.shapeColor="red";

wall13 = createSprite(320,560,140,20);
wall13.shapeColor="red";

wall14 = createSprite(320,215,20,90);
wall14.shapeColor="red";

wall15 = createSprite(290,310,20,100);
wall15.shapeColor="red";

wall16 = createSprite(445,375,90,20);
wall16.shapeColor="red";

wall17 = createSprite(365,250,70,20);
wall17.shapeColor="red";

wall18 = createSprite(280,250,100,20);
wall18.shapeColor="red";

wall19 = createSprite(470,320,20,100);
wall19.shapeColor="red";

wall20 = createSprite(440,560,100,20);
wall20.shapeColor="red";

wall21 = createSprite(460,420,100,20);
wall21.shapeColor="red";

wall22 = createSprite(500,400,20,100);
wall22.shapeColor="red";

wall23 = createSprite(490,570,20,100);
wall23.shapeColor="red";

wall24 = createSprite(500,260,100,20);
wall24.shapeColor="red";

wall25 = createSprite(500,200,20,120);
wall25.shapeColor="red";

wall26 = createSprite(450,150,110,20);
wall26.shapeColor="red";

wall27 = createSprite(480,70,20,140);
wall27.shapeColor="red";

wall28 = createSprite(550,530,100,20);
wall28.shapeColor="red";

wall29 = createSprite(600,500,20,100);
wall29.shapeColor="red";

wall30 = createSprite(640,450,100,20);
wall30.shapeColor="red";

wall31 = createSprite(560,360,100,20);
wall31.shapeColor="red";

wall32 = createSprite(680,390,20,100);
wall32.shapeColor="red";

wall33 = createSprite(680,290,20,100);
wall33.shapeColor="red";

wall34 = createSprite(550,200,100,20);
wall34.shapeColor="red";

wall35 = createSprite(600,160,20,100);
wall35.shapeColor="red";

wall36 = createSprite(700,160,200,20);
wall36.shapeColor="red";

wall37 = createSprite(750,250,20,170);
wall37.shapeColor="red";

wall38 = createSprite(750,410,150,20);
wall38.shapeColor="red";

wall39 = createSprite(800,320,120,20);
wall39.shapeColor="red";

wall40 = createSprite(920,270,20,120);
wall40.shapeColor="red";

wall41 = createSprite(840,230,160,20);
wall41.shapeColor="red";

wall42 = createSprite(880,480,20,160);
wall42.shapeColor="red";

wall43 = createSprite(920,450,100,20);
wall43.shapeColor="red";

wall44 = createSprite(980,385,20,150);
wall44.shapeColor="red";

wall45 = createSprite(1020,320,100,20);
wall45.shapeColor="red";

wall46 = createSprite(1060,300,20,100);
wall46.shapeColor="red";

wall47 = createSprite(1080,250,200,20);
wall47.shapeColor="red";

wall48 = createSprite(920,200,20,210);
wall48.shapeColor="red";

wall49 = createSprite(1010,90,200,20);
wall49.shapeColor="red";

wall50 = createSprite(1100,50,20,100);
wall50.shapeColor="red";

wall51 = createSprite(1040,450,100,20);
wall51.shapeColor="red";

wall52 = createSprite(1100,320,100,20);
wall52.shapeColor="red";

wall53 = createSprite(1150,320,20,120);
wall53.shapeColor="red";

wall54 = createSprite(1180,20,150,20);
wall54.shapeColor="red";

wall55 = createSprite(1070,150,300,20);
wall55.shapeColor="red";

wall56 = createSprite(740,530,260,20);
wall56.shapeColor="red";

wall57 = createSprite(490,600,20,100);
wall57.shapeColor="red";

wall58 = createSprite(880,600,20,100);
wall58.shapeColor="red";

wall59 = createSprite(1290,150,150,20);
wall59.shapeColor="green";

wallGroup.add(wall1);
wallGroup.add(wall2);
wallGroup.add(wall3);
wallGroup.add(wall4);
wallGroup.add(wall5);
wallGroup.add(wall6);
wallGroup.add(wall7);
wallGroup.add(wall8);
wallGroup.add(wall9);
wallGroup.add(wall10);
wallGroup.add(wall11);
wallGroup.add(wall12);
wallGroup.add(wall13);
wallGroup.add(wall14);
wallGroup.add(wall15);
wallGroup.add(wall16);
wallGroup.add(wall17);
wallGroup.add(wall18);
wallGroup.add(wall19);
wallGroup.add(wall20);
wallGroup.add(wall21);
wallGroup.add(wall22);
wallGroup.add(wall23);
wallGroup.add(wall24);
wallGroup.add(wall25);
wallGroup.add(wall26);
wallGroup.add(wall27);
wallGroup.add(wall28);
wallGroup.add(wall29);
wallGroup.add(wall30);
wallGroup.add(wall31);
wallGroup.add(wall32);
wallGroup.add(wall33);
wallGroup.add(wall34);
wallGroup.add(wall35);
wallGroup.add(wall36);
wallGroup.add(wall37);
wallGroup.add(wall38);
wallGroup.add(wall39);
wallGroup.add(wall40);
wallGroup.add(wall41);
wallGroup.add(wall42);
wallGroup.add(wall43);
wallGroup.add(wall44);
wallGroup.add(wall45);
wallGroup.add(wall46);
wallGroup.add(wall47);
wallGroup.add(wall48);
wallGroup.add(wall49);
wallGroup.add(wall50);
wallGroup.add(wall51);
wallGroup.add(wall52);
wallGroup.add(wall53);
wallGroup.add(wall54);
wallGroup.add(wall55);
wallGroup.add(wall56);
wallGroup.add(wall57);
wallGroup.add(wall58);
wallGroup.add(wall59);

house=createSprite(1300,50,20,20);
house.addImage(houseImage);
house.scale=0.3

//level 2 stuffs

laser1=createSprite(750,500,500,20);
laser1.visible=false;

laser2=createSprite(300,400,500,20);
laser2.visible=false;

laser3=createSprite(750,300,500,20);
laser3.visible=false;

laser4=createSprite(300,200,500,20);
laser4.visible=false;

laser1.velocityX=-60;
laser2.velocityX=60;
laser3.velocityX=-60;
laser4.velocityX=60;

laser1.shapeColor="red";
laser2.shapeColor="red";
laser3.shapeColor="red";
laser4.shapeColor="red";

girl=createSprite(675,100,20,20);
girl.addImage(girlImage);
girl.visible=false;
girl.scale=0.2;

}



function draw() {
  background(0); 
  
  if(keyIsDown(UP_ARROW)){
    schoolBoy.y+=-5;
  }
   
  if(keyIsDown(DOWN_ARROW)){
    schoolBoy.y+=5;
  }
  
  if(keyIsDown(LEFT_ARROW)){
    schoolBoy.x+=-5;
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    schoolBoy.x+=5;
  }
  

  if(gameState==="level1"){
    level1();
  }

  if(gameState==="level2"){
    cherry2.visible=true;
    level2();
  }
  
  schoolBoy.collide(edges);
    


  textSize(15);
  text("Chances left:"+chancesleft,200,600)

  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  
  drawSprites();

  
}

function level1(){

  if(schoolBoy.isTouching(milk)){
    sound3.play();
    schoolBoy.addImage(schoolBoyImage);
    milk2.visible=true;
    milk.visible=false;
    i++;
  }
  
  if(schoolBoy.isTouching(cheese)){
    sound3.play();
    schoolBoy.addImage(schoolBoyImage);
    cheese2.visible=true
    cheese.destroy();
    i++;
  }

  if(schoolBoy.isTouching(bread)){
    sound3.play();
    schoolBoy.addImage(schoolBoyImage);
    bread2.visible=true
    bread.destroy();
    i++;
  }

  if(schoolBoy.isTouching(fruitsandvegetables)){
    sound3.play();
    schoolBoy.addImage(schoolBoyImage);
    fruitsandvegetables2.visible=true
    fruitsandvegetables.destroy();
    i++;
  }

  fill("blue")
  textSize(15)
  text("Use UP ARROW,DOWN ARROW,LEFT ARROW and RIGHT ARROW to move",500,50)
  
  fill("green")
  text("Collected Items",650,570)



  if(chancesleft===0){
    schoolBoy.destroy();
    dog1.velocityX=0;
    dog1.velocityY=0;
    dog2.velocityX=0;
    dog2.velocityY=0;
    dog3.velocityX=0;
    dog3.velocityY=0;
    dog4.velocityX=0;
    dog4.velocityY=0;
  }
  
   
  if(i===4){
     wallGroup.remove(wall59);
     wall59.destroy();
  }
   


  if((schoolBoy.isTouching(dog1))||
  (schoolBoy.isTouching(dog2))||
  (schoolBoy.isTouching(dog3))||
  (schoolBoy.isTouching(dog4))){
    sound1.play();
    schoolBoy.addImage(sadBoyImage);
    chancesleft=chancesleft-1;
  schoolBoy.x=50;
  schoolBoy.y=590;
  }


schoolBoy.collide(wall1);
schoolBoy.collide(wall2);
schoolBoy.collide(wall3);
schoolBoy.collide(wall4);
schoolBoy.collide(wall5);
schoolBoy.collide(wall6);
schoolBoy.collide(wall7);
schoolBoy.collide(wall8);
schoolBoy.collide(wall9);
schoolBoy.collide(wall10);
schoolBoy.collide(wall11);
schoolBoy.collide(wall12);
schoolBoy.collide(wall13);
schoolBoy.collide(wall14);
schoolBoy.collide(wall15);
schoolBoy.collide(wall16);
schoolBoy.collide(wall17);
schoolBoy.collide(wall18);
schoolBoy.collide(wall19);
schoolBoy.collide(wall20);
schoolBoy.collide(wall21);
schoolBoy.collide(wall22);
schoolBoy.collide(wall23);
schoolBoy.collide(wall24);
schoolBoy.collide(wall25);
schoolBoy.collide(wall26);
schoolBoy.collide(wall27);
schoolBoy.collide(wall28);
schoolBoy.collide(wall29);
schoolBoy.collide(wall30);
schoolBoy.collide(wall31);
schoolBoy.collide(wall32);
schoolBoy.collide(wall33);
schoolBoy.collide(wall34);
schoolBoy.collide(wall35);
schoolBoy.collide(wall36);
schoolBoy.collide(wall37);
schoolBoy.collide(wall38);
schoolBoy.collide(wall39);
schoolBoy.collide(wall40);
schoolBoy.collide(wall41);
schoolBoy.collide(wall42);
schoolBoy.collide(wall43);
schoolBoy.collide(wall44);
schoolBoy.collide(wall45);
schoolBoy.collide(wall46);
schoolBoy.collide(wall47);
schoolBoy.collide(wall48);
schoolBoy.collide(wall49);
schoolBoy.collide(wall50);
schoolBoy.collide(wall51);
schoolBoy.collide(wall52);
schoolBoy.collide(wall53);
schoolBoy.collide(wall54);
schoolBoy.collide(wall55);
schoolBoy.collide(wall56);
schoolBoy.collide(wall57);
schoolBoy.collide(wall58);
schoolBoy.collide(wall59);

dog1.bounceOff(edges);
dog2.bounceOff(edges);
dog3.bounceOff(edges);
dog4.bounceOff(edges);
dog1.bounceOff(house);
dog2.bounceOff(house);
dog3.bounceOff(house);
dog4.bounceOff(house);
dog1.bounce(dog2);
dog1.bounce(dog3);
dog1.bounce(dog4);
dog2.bounce(dog3);
dog2.bounce(dog4);
dog3.bounce(dog4);

if((wallGroup.isTouching(dog1))||
  (wallGroup.isTouching(dog2))||
  (wallGroup.isTouching(dog3))||
  (wallGroup.isTouching(dog4))){
   dog1.bounceOff(wallGroup);
   dog2.bounceOff(wallGroup);
   dog3.bounceOff(wallGroup);
   dog4.bounceOff(wallGroup);
  }

   

if(schoolBoy.isTouching(house)){
  sound2.play();
  gameState="level2";
  cherry2.visible=true;
  schoolBoy.x=675;
  schoolBoy.y=590;
  chancesleft=3;
}

}

function level2(){
    background(0);
    wallGroup.destroyEach();
    dog1.destroy();
    dog2.destroy();
    dog3.destroy();
    dog4.destroy();
    house.destroy();

    milk.destroy();
    cheese.destroy();
    bread.destroy();
    fruitsandvegetables.destroy();


    milk2.destroy();
    cheese2.destroy();
    bread2.destroy();
    fruitsandvegetables2.destroy();

    laser1.visible=true;
    laser2.visible=true;
    laser3.visible=true;
    laser4.visible=true;

    girl.visible=true;


    if((schoolBoy.isTouching(laser1))||
    (schoolBoy.isTouching(laser2))||
    (schoolBoy.isTouching(laser3))||
    (schoolBoy.isTouching(laser4))){
      sound1.play();
      chancesleft=chancesleft-1;
      schoolBoy.x=675;
      schoolBoy.y=590;
    }

    if(chancesleft===0){
      laser1.velocityX=0;
      laser2.velocityX=0;
      laser3.velocityX=0;
      laser4.velocityX=0;
      schoolBoy.destroy();
    }

    if(schoolBoy.isTouching(girl)){
      sound2.play();
      text("You Won",250,300);
      laser1.velocityX=0;
      laser2.velocityX=0;
      laser3.velocityX=0;
      laser4.velocityX=0;
      schoolBoy.destroy();
      girl.destroy();
    }


}


var PLAY = 1;
var END = 0;
var gameState = PLAY;

var madara;
var madaraimg;
var dragon;
var dragonimg;
var spider;
var spiderimg;
var scorpian;
var scorpianimg;
var wall1, wall2, wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11, wall12;
var wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21, wall22;
var wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31, wall32, wall33,wall34;
var wall35,wall36,wall37,wall38,wall39,wall40,wall41, wall42, wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50; 
var wall51,wall52;
var maze;
var mazeimg;
var border1,border2,border3,border4,border5,border6;
var lives = 7;



function preload(){
 madaraimg = loadImage('madara mini.png');
 dragonimg = loadImage('dragon.png');
 spiderimg = loadImage('spider.png');
 scorpianimg = loadImage('scorpian.png');
 mazeimg = loadImage('maze.png');
}



function setup() {
  createCanvas(400,400);
wall1 = createSprite(18, 145 , 5,260);
wall2 = createSprite(200 ,18, 370,5);
wall3 = createSprite(382 ,55, 5,75);
wall4 = createSprite(382 , 255 , 5,260);
wall5 = createSprite(200 ,382  ,370,5);
wall6 = createSprite(18 ,345  ,5,75);
wall7 = createSprite(237 ,365  , 5,40);
wall8 = createSprite( 365,310  , 40,5);
wall9 = createSprite(365, 200 , 40,5);
wall10 = createSprite(365 ,126  , 40,5);
wall11 = createSprite(35 ,310  , 40,5);
wall12 = createSprite( 35, 126 , 40,5);
wall13 = createSprite( 71, 54 , 40,5);//(the 2nd line from top)
wall14= createSprite( 182, 54 , 40,5);//(in the same line as wall13)
wall15= createSprite(145 ,126  ,40,5);//same line as wall12
wall16= createSprite(290 ,126  , 40,5);//same line as wall12
wall17= createSprite( 255,200  , 40,5);
wall18= createSprite( 108,200  , 40,5);
wall19= createSprite(108 ,310  , 40,5);
wall20= createSprite( 128, 346 ,153,5);
wall21 = createSprite(328 ,346  , 40,5);
//wall22 = createSprite( ,  , 20,10);
//wall23= createSprite( ,  , 20,10);
//wall24= createSprite( ,  , 20,10);
//wall25= createSprite( ,  , 20,10);
//wall26= createSprite( ,  , 20,10);
//wall27= createSprite( ,  , 20,10);
//wall28= createSprite( ,  , 20,10);
//wall29= createSprite( ,  , 20,10);
//wall30= createSprite( ,  , 20,10);
//wall31= createSprite( ,  , 20,10);
//wall32= createSprite( ,  , 20,10);
//wall33= createSprite( ,  , 20,10);
//wall34= createSprite( ,  , 20,10);
//wall35= createSprite( ,  , 20,10);
//wall36= createSprite( ,  , 20,10);
//wall37= createSprite( ,  , 20,10);
//wall38= createSprite( ,  , 20,10);
//wall39= createSprite( ,  , 20,10);
//wall40= createSprite( ,  , 20,10);
//wall41= createSprite( ,  , 20,10);
//wall42= createSprite( ,  , 20,10);
//wall43= createSprite( ,  , 20,10);
//wall44= createSprite( ,  , 20,10);
//wall45= createSprite( ,  , 20,10);
//wall46= createSprite( ,  , 20,10);
//wall47= createSprite( ,  , 20,10);
//wall48= createSprite( ,  , 20,10);
//wall49= createSprite( ,  , 20,10);
//wall50= createSprite( ,  , 20,10);
//wall51= createSprite( ,  , 20,10);
//wall52 = createSprite( ,  , 20,10);


madara = createSprite(380,120,10,10);
madara.addImage(madaraimg);
madara.scale = 0.08;
//madara.velocityX = madara.x + 2;
//madara.velocityY = madara.y + 2;
scorpian = createSprite(280,220,10,10);
scorpian.addImage(scorpianimg);
scorpian.scale = 0.02;
//scorpian.velocityX = 2;
//scorpian.velocityY = 2;
spider = createSprite(180,180,10,10);
spider.addImage(spiderimg);
spider.scale = 0.1;
//spider.velocityX = 2;
//spider.velocityY = 2;
dragon = createSprite(100,230,10,10);
dragon.addImage(dragonimg);
dragon.scale = 0.04;
//dragon.velocityX = 2;
//dragon.velocityY = 2;


//maze = createSprite(400,200,10,10);
//maze.addImage(mazeimg);
//maze.scale = 1;

border1 = createSprite(400,200,20,400);
border1.shapeColor = 'red';
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(mazeimg);
  //
  //wall1.display(); 
  //wall2.display(); 
  //wall3.display();
  //wall4.display();
  //wall5.display();
  //wall6.display();
  //wall7.display();
  //wall8.display();
  //wall9.display();
  //wall10.display();
  //wall11.display();
//wall12.display();
//wall13.display();
//wall14.display();
//wall15.display();
//wall16.display();
//wall17.display();
//wall18.display();
//wall19.display();
//wall20.display();
//wall21.display();
//wall22.display();
//wall23.display();
//wall24.display();
//wall25.display();
//wall26.display();
//wall27.display();
//wall28.display();
//wall29.display();
//wall30.display();
//wall31.display();
//wall32.display();
//wall33.display();
//wall34.display();
//wall35.display();
//wall36.display();
//wall37.display();
//wall38.display();
//wall39.display();
//wall40.display();
//wall41.display();
//wall42.display();
//wall43.display();
//wall44.display();
//wall45.display();
//wall46.display();
//wall47.display();
//wall48.display();
//wall49.display();
//wall50.display();
//wall51.display();
//wall52.display();

  madara.display();
  dragon.display();
  spider.display();
  scorpian.display();

  madara.bounceOff(border1);
  madara.bounceOff(wall1);
  madara.bounceOff(wall2);
  madara.bounceOff(wall3);
  madara.bounceOff(wall4);
  madara.bounceOff(wall5);
  madara.bounceOff(wall6);
  madara.bounceOff(wall7);
  madara.bounceOff(wall8);
  madara.bounceOff(wall9);
  madara.bounceOff(wall10);
  madara.bounceOff(wall11);
  madara.bounceOff(wall12);
  madara.bounceOff(wall13);
  madara.bounceOff(wall14);
  madara.bounceOff(wall15);
  madara.bounceOff(wall16);
  madara.bounceOff(wall17);
  madara.bounceOff(wall18);
  madara.bounceOff(wall19);
  madara.bounceOff(wall20);
  madara.bounceOff(wall21);
  //madara.bounceOff(wall22);
  //madara.bounceOff(wall23);
  //madara.bounceOff(wall24);
  //madara.bounceOff(wall25);
  //madara.bounceOff(wall26);
  //madara.bounceOff(wall27);
  //madara.bounceOff(wall28);
  //madara.bounceOff(wall29);
  //madara.bounceOff(wall30);
  //madara.bounceOff(wall31);
  //madara.bounceOff(wall32);
  //madara.bounceOff(wall33);
  //madara.bounceOff(wall34);
  //madara.bounceOff(wall35);
  //madara.bounceOff(wall36);
  //madara.bounceOff(wall37);
  //madara.bounceOff(wall38);
  //madara.bounceOff(wall39);
  //madara.bounceOff(wall40);
  //madara.bounceOff(wall41);
  //madara.bounceOff(wall42);
  //madara.bounceOff(wall43);
  //madara.bounceOff(wall44);
  //madara.bounceOff(wall45);
  //madara.bounceOff(wall46);
  //madara.bounceOff(wall47);
  //madara.bounceOff(wall48);
  //madara.bounceOff(wall49);
  //madara.bounceOff(wall50);
  //madara.bounceOff(wall51);
 
  text(lives,170,15);

  if(keyDown(UP_ARROW)) {
    madara.y = madara.y - 2;
  }

  if (keyDown(DOWN_ARROW)) {
    madara.y = madara.y + 2;
  }

  if (keyDown(RIGHT_ARROW)) {
    madara.x = madara.x + 2;
  }

  if (keyDown(LEFT_ARROW)) {
    madara.x = madara.x - 2;
  }
  if (madara.isTouching(wall1)|| madara.isTouching(wall2)|| madara.isTouching(wall3)||madara.isTouching(wall4)||
  madara.isTouching(wall5)||madara.isTouching(wall6)||madara.isTouching(wall7)||madara.isTouching(wall8)||
  madara.isTouching(wall9)||madara.isTouching(wall10)||madara.isTouching(wall11)||madara.isTouching(wall12)||
  madara.isTouching(wall13)||madara.isTouching(wall14)||madara.isTouching(wall15)||madara.isTouching(wall16)||
  madara.isTouching(wall17)||madara.isTouching(wall18)||madara.isTouching(wall19)||madara.isTouching(wall20)||
  madara.isTouching(wall21)){
    madara.x = 380;
    madara.y = 120;
  }
  
  if (madara.isTouching(wall1)|| madara.isTouching(wall2)|| madara.isTouching(wall3)||madara.isTouching(wall4)||
  madara.isTouching(wall5)||madara.isTouching(wall6)||madara.isTouching(wall7)||madara.isTouching(wall8)||
  madara.isTouching(wall9)||madara.isTouching(wall10)||madara.isTouching(wall11)||madara.isTouching(wall12)||
  madara.isTouching(wall13)||madara.isTouching(wall14)||madara.isTouching(wall15)||madara.isTouching(wall16)||
  madara.isTouching(wall17)||madara.isTouching(wall18)||madara.isTouching(wall19)||madara.isTouching(wall20)||
  madara.isTouching(wall21))
  {
    lives = lives - 1;
  }

if (lives === 3){
  madara.velocityX =  0.3;
}
if(keyDown ('space')){
  gameState = PLAY;
}


  drawSprites();
}
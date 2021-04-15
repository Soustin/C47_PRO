var Plr, plrTop, plrDown, plrRight, plrLeft;
var Zombie;
var rightEdge, leftEdge;
var edges;
var zombieGrp, zombieDL, zombieDR, zombieD;
var Plrhead;
var zomSound, vicSound;
var safeZone;
PLAY = 1;
END = 2;
var gameState = 0;
var counter = 10;
var endImg, end;
var endArrow1, endArrow1Img, endArrow2, endArrow2Img, endArrow3, endArrow3Img;

function preload(){
  plrTop = loadImage("Survivor faceTop.png");
  plrDown = loadImage("Survivor faceDown.png");
  plrRight = loadImage("Survivor faceLeft.png");
  plrLeft = loadImage("Survivor faceRight.png");

  zombieDL = loadImage("Zombie1DL.png");
  zombieDR = loadImage("Zombie1DR.png");
  zombieD = loadImage("Zombie1D.png");

  zomSound = loadSound("SpookyZombies.mp3");
  vicSound = loadSound("VictorySound.wav");

  safeZone1Img = loadImage("Circular park.png");
  safeZone2Img = loadImage("Rectangular park.jpg");
  safeZone3Img = loadImage("Square park.png");
  safeZone4Img = loadImage("Circular park.png");
  safeZone5Img = loadImage("Square park.png");

  endImg = loadImage("Ended logo.jpg");

  endArrow1Img = loadImage("triple-right-arrow-1.png");
  endArrow2Img = loadImage("Right-Arrow-2.png");
  endArrow3Img = loadImage("triple-arrow-3.png");

}

function setup() {
  createCanvas(1600,750);

  rightEdge = createSprite(0, 375, 20, 900);
  leftEdge = createSprite(1600, 375, 20, 900);

  safeZone1 = createSprite(150, 350, 150, 150);
  safeZone1.addImage(safeZone1Img);
  safeZone1.scale = 0.23;
  safeZone2 = createSprite(800, 670, 50, 150);
  safeZone2.addImage(safeZone2Img);
  safeZone2.scale = 0.4;
  safeZone3 = createSprite(1450, 400, 100, 150);
  safeZone3.addImage(safeZone3Img);
  safeZone3.scale = 0.2;
  safeZone4 = createSprite(900, 200, 100, 150);
  safeZone4.addImage(safeZone4Img);
  safeZone4.scale = 0.2;
  safeZone5 = createSprite(100, 650, 100, 150);
  safeZone5.addImage(safeZone5Img);
  safeZone5.scale = 0.2;

  end = createSprite(1405, 200, 50, 50);
  end.addImage(endImg);
    
  endArrow1 = createSprite(1405, 200, 50, 50);
  endArrow1.addImage(endArrow2Img);
  endArrow1.scale = 0.5;

  // Plrhead = createSprite(400, 200, 20, 20);
  // Plrhead.setColor("34, 32, 33");

  zombieGrp = new Group();

  
  Plr = createSprite(800, 670, 40, 40);
  Plr.addImage(plrTop);
}

function draw() {
  background(255, 223, 0);

  fill("red");
  stroke("black")
  textSize(30);
  text("In the next class I will do the things related to winning the game and losing the game and credits to the player", 100, 20);

  if(gameState === 0){

  if(counter === 0){
    gameState = 1;
  }

  if(counter === 10){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 9){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 8){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 7){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 6){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 5){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 4){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 3){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 2){
    textSize(45);
    text(counter, 800, 375);
  }

  if(counter === 1){
    textSize(45);
    text(counter, 800, 375);
  }
}

  if(gameState === 1){

    Plr.debug = true;

    // zomSound.play();
    // vicSound.play();

  // zombieGrp.collide(rightEdge);

  if(keyDown(UP_ARROW)){
    Plr.y -= 8;
    Plr.addImage(plrTop);
  }

  if(keyDown(DOWN_ARROW)){
    Plr.y += 8;
    Plr.addImage(plrDown);
  }

  if(keyDown(RIGHT_ARROW)){
    Plr.x += 8;
    Plr.addImage(plrRight);
  }

  if(keyDown(LEFT_ARROW)){
    Plr.x -= 8;
    Plr.addImage(plrLeft);
  }

  // zombieGrp.collide(rightEdge);
  // zombieGrp.collide(leftEdge);

  if(zombieGrp.isTouching(rightEdge)){
    zombieGrp.collide(rightEdge);
    zombieGrp.setVelocityX = -2;
  }

  if(zombieGrp.isTouching(leftEdge)){
    zombieGrp.collide(leftEdge);
    zombieGrp.setVelocityX =  2;
  }

  if(zombieGrp.isTouching(Plr)){
    gameState = 2;
  }

  if(Plr.position.x > 1208 && Plr.position.y === Math.round(random(70, 334))){
    gameState = 2
  }

  console.log(Plr.position.x, Plr.position.y);
  
  // zombieGrp.bounce(rightEdge);
  // zombieGrp.bounce(leftEdge);
  zombieGrp.bounceOff(safeZone1);
  zombieGrp.bounceOff(safeZone2);
  zombieGrp.bounceOff(safeZone3);
  zombieGrp.bounceOff(safeZone4);
  zombieGrp.bounceOff(safeZone5);
  zombieGrp.bounceOff(end);

  spawnZombie();
}

if(gameState === 2){
  zombieGrp.destroyEach();
  zombieGrp.setVelocityXEach(0);
  zombieGrp.setVelocityYEach(0);

  // if(keyDown("space")){
  //   gameState = 0;
  // }
}

zombieGrp.collide(zombieGrp);

  drawSprites();
}

function spawnZombie(){
  if(frameCount%30 === 0){
    Zombie = createSprite(Math.round(random(100, 1500)), Math.round(random(-20, -100)), 20, 20);
    Zombie.velocityY = 3;
    Zombie.velocityX = Math.round(random(-8, 8));
    Zombie.scale = 0.4;
    Zombie.setCollider("circle", -5, -5, 100);
    Zombie.debug = true;

    if(Zombie.velocityX < 0){
      Zombie.addImage(zombieDL);
    }

    if(Zombie.velocityX > 0){
      Zombie.addImage(zombieDR);
    }

    if(Zombie.velocityX === 0){
      Zombie.addImage(zombieD);
    }

    zombieGrp.add(Zombie);
  }
}

function timeCount(){
  counter--;
}

setInterval(timeCount, 1000);
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;
var ground;
var something;
var restartButton, restartButtonImage;

function preload(){
  monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  gameOverImage = loadImage("gameover.png");
  obstacleImage = loadImage("obstacle.png");
  restartButton = loadImage("retsart.png")
  bananaGroup = new Group();
  obstacleGroup = new Group();
}
function setup() {
  createCanvas(500,500);
  monkey = createSprite(60,350,0,0);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  ground = createSprite(250,440,1000,200);
  gameOver = createSprite(250,250,10,10);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 0.85;
  restartButton = createSprite(300,300,10,10);
  restartButton.addImage(restartButtonImage);
  restartButton.scale = 1.0;
}
function draw() {
  background("lightgreen");
  if (gameState === PLAY) {
  spawnObstacles();
  spawnBananas();
  gameOver.visible = true;
  ground.velocityX = -3;
  if (ground.x < 0)  {
    ground.x = 250;
  }
  if (keyDown("SPACE")){
    monkey.velocityY = -13;
  }
  monkey.velocityY = monkey.velocityY + 0.75;
  monkey.collide(ground);
  textSize(20);
  textFont()
  text("SCORE : "+ score, 190,20);
  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    score = score + 1;
  }
    if (score == 5) {
    monkey.scale = 0.2;
  }
    if (score == 10) {
    monkey.scale = 0.25;
  }
    if (score == 15) {
    monkey.scale = 0.3;
  }
    if (score == 20) {
    monkey.scale = 0.35;
  }
    if (score == 25) {
    monkey.scale = 0.40;
  }
    if (score == 30) {
    monkey.scale = 0.45;
  }
    if (score == 35) {
    monkey.scale = 0.475;
  }
    if (score == 40) {
    monkey.scale = 0.5;
  }
    if (score == 45) {
    monkey.scale = 0.525;
  }
    if (score == 50) {
    monkey.scale = 0.550;
  }
    if (score == 55) {
    monkey.scale = 0.575;
  }
    if (score == 60) {
    monkey.scale = 0.6;
  }
    if (score == 65) {
    monkey.scale = 0.625
  }
    if (score == 70) {
    monkey.scale = 0.65;
  }
    if (score == 75) {
    monkey.scale = 0.675
  }
    if (score == 80) {
    monkey.scale = 0.7;
  }
    if (score == 85) {
    monkey.scale = 0.725;
  }
    if (score == 90) {
    monkey.scale = 0.750;
  }
    if (score == 95) {
    monkey.scale = 0.775;
  }
    if (score == 100) {
    monkey.scale = 0.8;
  }
  if (obstacleGroup.isTouching(monkey)) {
    monkey.scale = 0.15;
  }
  if (monkey.scale == 0.15 && obstacleGroup.isTouching(monkey)) {
    gameState = END
  }
  }
  else if (gameState === END) {
    monkey.velocityY = 0;
    gameOver.visible = true;
  }
  //monkey.velocityY = monkey.velocityY + 0.75;
  drawSprites();
}
function spawnObstacles() {
  if (frameCount % Math.round(random(190, 275)) === 0) {
    obstacle = createSprite(510,335,0,0);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = random(0.25,0.35);
    obstacle.velocityX = -5;
    obstacle.setCollider('circle',0,0,obstacle.height-300);
    obstacle.debug = true;
    obstacleGroup.add(obstacle);
  }
}
function spawnBananas() {
  if (frameCount % Math.round(random(190, 275)) === 0) {
    banana = createSprite(510,random(150,275),0,0);
    banana.addImage("banana", bananaImage);
    banana.scale = random(0.1, 0.15);
    banana.velocityX = random(-6, -5.5);
    bananaGroup.add(banana);
    monkey.depth = banana.depth - 1;
  }
}



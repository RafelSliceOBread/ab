var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ce9bc3ca-a02f-4020-b155-a0d04433bc6d"],"propsByKey":{"ce9bc3ca-a02f-4020-b155-a0d04433bc6d":{"name":"puck_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var raqueteJ1 = createSprite(200, 380, 120, 10);
var raqueteJ2 = createSprite(200, 20, 120, 10);
var bola = createSprite(200, 200, 30, 30);
var pointsRed = 0
var pointsBlue = 0
createEdgeSprites();

raqueteJ1.shapeColor = "red";
raqueteJ2.shapeColor = "blue";
bola.setAnimation("puck_1");
bola.scale = 0.11;



function draw() {
  background("white");
  
  fill("blue");
  textFont("Arial");
  textSize(20);
  text("J2: " + pointsBlue, 336, 88);
  
  fill("red");
  textFont("Arial");
  textSize(20);
  text("J1: " + pointsRed, 336, 324);
  
  
   if (bola.isTouching(raqueteJ1)) {
    playSound("assets/category_notifications/game_notification_81.mp3");
  }
  if (bola.isTouching(raqueteJ2)) {
    playSound("assets/category_notifications/game_notification_81.mp3");
  }
  if (bola.isTouching(rightEdge)) {
    playSound("assets/category_digital/bounce_1.mp3");
  }
  if (bola.isTouching(leftEdge)) {
    playSound("assets/category_digital/bounce_1.mp3");
  }
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(raqueteJ1);
  bola.bounceOff(raqueteJ2);
  
  
  drawDivider();
  
  drawSprites();
  
  if (keyDown("right")) {
    raqueteJ1.x = raqueteJ1.x + 15;
  }
  if (keyDown("left")) {
    raqueteJ1.x = raqueteJ1.x - 15;
  }
  if (keyDown("o")) {
    bola.velocityX = 5;
    bola.velocityY = -10;
  }
  if (keyDown("k")) {
    bola.velocityX = 5;
    bola.velocityY = 10;
  }
  if (keyDown("p")) {
    bola.velocityX = 0;
    bola.velocityY = 0;
  }
  if (bola.y > 400) {
   redGoal();
  }
  if (bola.y < 0) {
    blueGoal();
  }
  if (keyDown("d")) {
    raqueteJ2.x = raqueteJ2.x + 15;
  }
  if (keyDown("a")) {
    raqueteJ2.x = raqueteJ2.x - 15;
  }
  if (pointsBlue >= 10) {
   fill("blue");
   text("J2 ganhou!!", 200, 160);
  }
  if (pointsRed >= 10) {
   fill("red");
   text("J1 ganhou!!", 200, 240);
  }
}

function drawDivider() {
  for (var i = 0; i < 400; i = i + 20) {
    line(0 + i, 200, 10 + i, 200);
  }
}

function redGoal() {
bola.y = 200
bola.x = 200
bola.velocityX = 0;
bola.velocityY = 0;
playSound("assets/category_digital/coin_1.mp3");
pointsBlue++
}

function blueGoal() {
bola.y = 200
bola.x = 200
bola.velocityX = 0;
bola.velocityY = 0;
playSound("assets/category_digital/coin_2.mp3");
pointsRed++
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

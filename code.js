var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

background(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
rect(100, 100, 200, 200);
var EyeColor = randomNumber(0, 255);
fill(rgb(EyeColor, EyeColor, EyeColor));
ellipse(145, 145, 20, 20);
ellipse(250, 145, 20, 20);
fill("white");
ellipse(200, 255, 120, 50);
line(145, 250, 250, 250);
var mouthlines = 280;
line(170, 230, 170, mouthlines);
line(195, 230, 195, mouthlines);
line(220, 230, 220, mouthlines);
line(240, 230, 240, mouthlines);
fill("black");
ellipse(310, 170, 20, 40);
ellipse(90, 170, 20, 40);
var antennaforx = 200;
var antennafory = 100;
line(antennaforx, antennafory, 200, 60);
line(antennaforx, antennafory, 230, 60);
line(antennaforx, antennafory, 170, 60);
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
regularPolygon(200, 190, 3, 20);

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

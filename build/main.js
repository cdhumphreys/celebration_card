var card = document.getElementById('card');
var clickActive = false;
var startX, startY;
var currentXRotation = 0;
var currentYRotation = 0;
container.addEventListener('mousedown', function(e) {
  clickActive = true;

  startX = e.clientX;
  startY = e.clientY;
});
container.addEventListener('mouseup', function() {
  clickActive = false;
});
container.addEventListener('mousemove', function(e) {
  if (clickActive) {
    var moveX = e.clientX;
    var moveY = e.clientY;

    var xDisplacement = (moveX - startX);
    var yDisplacement = (moveY - startY);

    currentYRotation += xDisplacement/4;
    currentXRotation += yDisplacement/4;
    //
    if (currentYRotation > 130) {
      currentYRotation = 130;
    }
    else if (currentYRotation < -180) {
      currentYRotation = -180;
    }

    card.style.transform = "rotateY(" + currentYRotation + "deg) rotateX("+ currentXRotation +"deg)";
    // card.style.transform = "rotate3d(0, 1, 0, "+currentYRotation+"deg)";
    // card.style.transform = "rotate3d(1, 0, 0, "+currentXRotation+"deg)";

    startX = e.clientX;
    startY = e.clientY;
  }
});

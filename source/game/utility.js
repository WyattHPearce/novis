//Resize window functionality
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Checks if a point is inside the bounds of a rectangle
function isPointInsideRectangle(pointX, pointY, rectCenterX, rectCenterY, rectWidth, rectHeight) {
  const rectLeft = rectCenterX - rectWidth / 2;
  const rectRight = rectCenterX + rectWidth / 2;
  const rectTop = rectCenterY - rectHeight / 2;
  const rectBottom = rectCenterY + rectHeight / 2;

  return (
    pointX >= rectLeft &&
    pointX <= rectRight &&
    pointY >= rectTop &&
    pointY <= rectBottom
  );
}
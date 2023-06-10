// Get the mouse position in screen space
let screenMousePosition;
// Convert mouse position from screen space to game world space
let worldMousePosition;

function controlsSetup(){
    screenMousePosition = createVector(0, 0);
    worldMousePosition = createVector(0, 0);
}

function controlsUpdate(){
    screenMousePosition.x = mouseX;
    screenMousePosition.y = mouseY;
    worldMousePosition = playerCamera.position.copy().add(screenMousePosition.sub(width / 2, height / 2).div(playerCamera.zoom));
}

function keyPressed() {
    switch(keyCode) {
        case 87:
            // W - UP
            player.direction[0] = true;
            break;
        case 83:
            // S - DOWN
            player.direction[1] = true;
            break;
        case 65:
            // A - LEFT
            player.direction[2] = true;
            break;
        case 68:
            // D - RIGHT
            player.direction[3] = true;
            break;
    }
}

function keyReleased() {
    switch(keyCode) {
        case 87:
            // W - UP
            player.direction[0] = false;
            break;
        case 83:
            // S - DOWN
            player.direction[1] = false;
            break;
        case 65:
            // A - LEFT
            player.direction[2] = false;
            break;
        case 68:
            // D - RIGHT
            player.direction[3] = false;
            break;
    }
}

function mousePressed() {
    if (mouseButton == LEFT) {
        buildManager.break();
      } else if (mouseButton == RIGHT) {
        buildManager.place();
      }
}

function mouseWheel(event) {
    // Change the offset based on the mouse wheel delta
    playerCamera.zoom -= event.delta*0.0005;

    // Prevent the default scrolling behavior
    return false;
}
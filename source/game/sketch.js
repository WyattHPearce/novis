// Declare game managers
let worldManager;
let graphicsManager;

// Declare primary game objects
let player;
let playerCamera;

function preload(){
  // Preloading external files and data
  graphicsManager = new GraphicsManager();
  graphicsManager.preloadFiles();
  graphicsManager.processFiles();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // General code settings
  noSmooth();
  rectMode(CENTER);
  imageMode(CENTER);
  controlsSetup();

  // Initializing game managers
  worldManager = new WorldManager();

  // Game manager setup methods
  worldManager.setupChunks();

  // Game Objects
  player = new Player(new createVector(0, 0), 50, 50);
  playerCamera = new PlayerCamera(new createVector(0, 0));
}

function draw() {
  background(50);
  
  // Apply camera transformations
  playerCamera.applyTransformations();

  // Update mouse position other control variables
  controlsUpdate();

  worldManager.processChunks();

  player.update();
  player.render();
  playerCamera.lerp(player.position, 0.2);
  //playerCamera.position = player.position;

  rect(worldMousePosition.x, worldMousePosition.y, 50, 50);

  // Reset camera (all) transformations
  resetMatrix();

  // Draw UI or other elements unaffected by the camera
}
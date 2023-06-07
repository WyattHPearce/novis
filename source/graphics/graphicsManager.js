class GraphicsManager {
    constructor(directory) {
        // Files (ALL ASSETS MUST BE TYPE png)
        this.playerSpriteSheet;
        this.playerSpriteData;

        // Animations
        this.playerWalkAnimation = [];
    }

    // Called at preload() to access files
    preloadFiles() {
        this.playerSpritesheet = loadImage('data/character/playerSpriteSheet.png');
        this.playerSpriteData = loadJSON('data/character/playerSpriteData.json');
    }

    // Takes a spritesheet (spritesheet) and an array (jsonArray, which specifies the animation being used from the corresponding JSON file),
    // and pushes them to an array of images (animationArray) to be used for animations
    spritesheetToAnimation(spritesheet, jsonArray, animationArray) {
        for (let i = 0; i < jsonArray.length; i++) {
          let position = jsonArray[i].position;

          // .get() takes a part out of a whole image and returns that section as its own p5 image
          let image = spritesheet.get(position.x, position.y, position.w, position.h)
          animationArray.push(image);
        }
    }

    // This function takes a file path, the number of images in that path, and an array for storing the images.
    // It loads images from the specified directory with an index number appended to their names and adds them to the array for animation purposes.
    imagesToArray(imageDirectory, amount, animationArray){
       for (let i = 0; i < amount; i++) {
           let image = loadImage("" + imageDirectory + i + ".png");
           animationArray.push(image);
         }
    }

    // Called at preload() and calls the functions above as needed in order to process files into the graphics manager
    processFiles() {
       this.imagesToArray("data/character/playerSpriteSheet", 8, this.playerWalkAnimation);
    }
}


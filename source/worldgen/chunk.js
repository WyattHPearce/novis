class Chunk {
    constructor(x, y, width, height) {
        // Chunk coordinate is the chunks coordinates within the world array
        this.chunkCord = createVector(x, y);
        // Width and height of the chunk in tiles
        this.widthInTiles = width;
        this.heightInTiles = height;

        // Calculate the top-left corner position within the canvas
        this.chunkOriginX = this.chunkCord.x * this.widthInTiles * worldManager.tileSize;
        this.chunkOriginY = this.chunkCord.y * this.heightInTiles * worldManager.tileSize;

        // Calculate the center of the chunk on the canvas
        this.chunkCenterX = this.chunkOriginX + (this.widthInTiles * worldManager.tileSize) / 2 - worldManager.tileSize / 2;
        this.chunkCenterY = this.chunkOriginY + (this.heightInTiles * worldManager.tileSize) / 2 - worldManager.tileSize / 2;

        // True when the chunk is within render distance of the player
        this.active = false;

        this.isMouseInside = false;

        // Array of tile ID's that represents the chunks data
        this.tiles = [];

        // Add second dimension to the tiles array and populate it with 0's
        for (let x = 0; x < this.widthInTiles; x++) {
            this.tiles[x] = []; // Create an empty array for each element, thus creating a 2d array
            for (let y = 0; y < this.heightInTiles; y++) {
                this.tiles[x][y] = 0; // Each tile id defaults to 0
            }
        }
    }

    render(){
        // Debug outline
        if (this.isMouseInside) {
          stroke(255,0,0);
        } else {
          stroke(0, 0, 0);
        }
        strokeWeight(3);
        rect(this.chunkCenterX, this.chunkCenterY, this.widthInTiles*worldManager.tileSize, this.widthInTiles*worldManager.tileSize);
        stroke(0,0,0);
        strokeWeight(1);

        push();
        // Set draw origin to chunk origin temporarily
        translate(this.chunkOriginX, this.chunkOriginY);

        for (let x = 0; x < this.widthInTiles; x++) {
            for (let y = 0; y < this.heightInTiles; y++) {
              if (this.tiles[x][y] == 0){
                rect(x*worldManager.tileSize, y*worldManager.tileSize, worldManager.tileSize, worldManager.tileSize);
              } else {
                ellipse(x*worldManager.tileSize, y*worldManager.tileSize, worldManager.tileSize, worldManager.tileSize);
              }
            }
        }
        pop();
    }
  }
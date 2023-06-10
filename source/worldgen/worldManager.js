class WorldManager {
  constructor() {
    // Array that holds all chunks
    this.world = [];
    // Array that hold all rendered chunks
    this.activeChunks = [];


    // Radius around the player that chunks render (This is in canvas pixel units)
    this.renderDistance = 400;
    // Size of each tile in pixels
    this.tileSize = 15;
    // Size of each chunk in tiles
    this.chunkSize = 15;
    // Number of chunks in the world horizontally and vertically
    this.horizontalChunks = 3;
    this.verticalChunks = 3;
  }

  setupChunks(){
    for (let x = 0; x < this.horizontalChunks; x++) {
      this.world[x] = []; // Initialize each element as an empty array
      for (let y = 0; y < this.verticalChunks; y++) {
        // Create a new chunk
        let tempChunk = new Chunk(x, y, this.chunkSize, this.chunkSize);

        // Make necessary adjustments to that chunk
              
        // Add the chunk to the world
        this.world[x][y] = tempChunk;
      }
    }
  }

  renderChunks() {
    // Clear the activeWorld array before rendering new chunks
    this.activeChunks = [];

    // Loop through all chunks in the world array
    for (let x = 0; x < this.horizontalChunks; x++) {
      for (let y = 0; y < this.verticalChunks; y++) {
        let chunk = this.world[x][y];

        // Calculates the distance from the player to the center of the chunk
        let distanceOfChunk = dist(player.position.x, player.position.y, chunk.chunkCenterX, chunk.chunkCenterY);
        // Render chunks if they are within render distance
        if (distanceOfChunk < this.renderDistance) {
          chunk.active = true;
          chunk.render(player.position);

          // Add the rendered chunk to the activeWorld array
          this.activeChunks.push(chunk);
        } else {
          chunk.active = false;
        }
      }
    }
  }
}
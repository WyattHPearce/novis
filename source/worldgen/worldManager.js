class WorldManager {
  constructor() {
    // Array that holds all chunks
    this.world = [];
    // Radius around the player that chunks render (This is in canvas pixel units)
    this.renderDistance = 300;
    // Size of each tile in pixels
    this.tileSize = 15;
    // Size of each chunk in tiles
    this.chunkSize = 15;
    // Number of chunks in the world horizontally and vertically
    this.horizontalChunks = 10;
    this.verticalChunks = 10;
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

  processChunks() {
    // Loop through all chunks in the world array
    for (let x = 0; x < this.horizontalChunks; x++) {
      for (let y = 0; y < this.verticalChunks; y++) {
        let chunk = this.world[x][y];
        chunk.updateAroundPoint(player.position);
  
        // Render active chunks
        if (chunk.active) {
          chunk.render(player.position);
        }
      }
    }
  }
}












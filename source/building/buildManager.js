class BuildManager {
  constructor(){
    // Coordinates within the world array of the chunk that the mouse is hovering
    this.currentChunkX;
    this.currentChunkY;

    // Coordinates of the tile within the chunk
    this.currentTileX;
    this.currentTileY;
  }

  // Returns the tile indices within a chunk givin a point
  getTileInChunk(chunk, worldPoint) {
    const relativeX = (worldPoint.x+worldManager.tileSize/2) - chunk.chunkOriginX;
    const relativeY = (worldPoint.y+worldManager.tileSize/2) - chunk.chunkOriginY;
  
    const tileIndexX = Math.floor(relativeX / worldManager.tileSize);
    const tileIndexY = Math.floor(relativeY / worldManager.tileSize);
  
    return { x: tileIndexX, y: tileIndexY };
  }

  // Returns the chunk worldMousePosition is currently hovering over
  getMousedOverChunk() {
    // Loop through all active chunks
    for (let i = 0; i < worldManager.activeChunks.length; i++) {
      let chunk = worldManager.activeChunks[i];
      if (isPointInsideRectangle(worldMousePosition.x, worldMousePosition.y, chunk.chunkCenterX, chunk.chunkCenterY, chunk.widthInTiles * worldManager.tileSize, chunk.heightInTiles * worldManager.tileSize)) {
        return chunk;
      }
    }

    return null;
  }

  place() {
    let currentTile = this.getTileInChunk(this.getMousedOverChunk(), worldMousePosition);
    if (this.getMousedOverChunk() != null) {
      this.getMousedOverChunk().tiles[currentTile.x][currentTile.y] = 0;
    }
  }

  break() {
    let currentTile = this.getTileInChunk(this.getMousedOverChunk(), worldMousePosition);
    if (this.getMousedOverChunk() != null) {
      this.getMousedOverChunk().tiles[currentTile.x][currentTile.y] = 1;
    }
  }
}
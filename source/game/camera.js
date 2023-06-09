class PlayerCamera {
  constructor(position) {
    this.position = createVector(position.x, position.y);
    this.zoom = 2.5;
    this.lerpSpeed = 0;
  }

  applyTransformations() {
    translate(width / 2, height / 2);
    scale(this.zoom);
    translate(-this.position.x, -this.position.y);
  }

  // Lerps camera position to target position (might be changed later)
  follow(target, speed) {
    this.lerpSpeed = speed;

    const dx = target.x - this.position.x;
    const dy = target.y - this.position.y;
    this.position.x += dx * this.lerpSpeed;
    this.position.y += dy * this.lerpSpeed;
  }
}
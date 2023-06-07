class PlayerCamera {
  constructor(position) {
    this.position = createVector(position.x, position.y);
    this.zoom = 1;
    this.lerpSpeed = 0;
  }

  applyTransformations() {
    translate(width / 2, height / 2);
    scale(this.zoom);
    translate(-this.position.x, -this.position.y);
  }

  lerp(target, speed) {
    this.lerpSpeed = speed;

    const dx = target.x - this.position.x;
    const dy = target.y - this.position.y;
    this.position.x += dx * this.lerpSpeed;
    this.position.y += dy * this.lerpSpeed;
  }
}
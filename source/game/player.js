class Player {
  constructor(position, w, h) {
    // Position of player
    this.position = createVector(position.x, position.y);
    this.width = w;
    this.height = h;

    // Up, Down, Left, Right
    this.direction = [false, false, false, false]
    this.speed = 6;

    this.playerAnimation = new animatedSprite(graphicsManager.playerWalkAnimation, 0.1, this.width, this.height);
  }

  update() {
    if (this.direction[0]) {
      // Code for Up direction
      this.position.y -= this.speed;
    }
  
    if (this.direction[1]) {
      // Code for Down direction
      this.position.y += this.speed;
    }
  
    if (this.direction[2]) {
      // Code for Left direction
      this.position.x -= this.speed;
    }
  
    if (this.direction[3]) {
      // Code for Right direction
      this.position.x += this.speed;
    }
  }

  render(){
    push();
    translate(this.position.x, this.position.y);
    //rect(0,0,this.width, this.height);

    this.playerAnimation.render();
    this.playerAnimation.stepAnimation();
    pop();
  }
}
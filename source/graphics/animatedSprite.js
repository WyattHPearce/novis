class animatedSprite {
    constructor(animation, speed, w, h){
        this.animation = animation;
        this.speed = speed;
        this.index = 0;
        this.width = w;
        this.height = h;
    }

    render(){
        // Flooring index allows for the speed value to be a non-whole number
        // This way index only acts as the animation array index when its decimal value is close to whole number
        let index = floor(this.index % this.animation.length);
        // Sprites are rendered at current origin (0, 0, 0)
        image(this.animation[index], 0, 0, this.width, this.height);
    }

    stepAnimation(){
        this.index += this.speed;
    }
}
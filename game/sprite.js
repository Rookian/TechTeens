class Sprite {
    constructor(images, animationSpeed, x, y) {
      this.images = images;
      this.animationSpeed = animationSpeed;
      this.x = x;
      this.y = y;
  
      this.index = 0;
      this.vx = 0;
      this.vy = 0;
      this.groundY = y;
      this.maxJumpHeight = 300;
    }
  
    show() {
      const imageIndex = this.images.length === 0 ? 0 : floor(this.index) % this.images.length;
      image(this.images[imageIndex], this.x, this.y);
    }
  
    animate() {
      if (this.x > windowWidth + this.images[0].width){
        this.x = -this.images[0].width;
      }
  
      this.index += this.animationSpeed;
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    
      if (this.y <= this.groundY - this.maxJumpHeight) {
        this.vy += 5;
      }
    
      if (this.y >= this.groundY) {
        this.vy = 0;
        if (keyIsDown(UP_ARROW)) {
          this.jump();
        }
      }
    }
  
    jump() {
      if (this.y === this.groundY) {
        this.vy -= 20;
      }
    }
  
    keyPressed(keyCode){
      console.log({x: this.x, y: this.y});
      console.log("keyPressed");
      if (keyCode === LEFT_ARROW) {
        this.vx = -10;
      } else if (keyCode === RIGHT_ARROW) {
        this.vx = 10;
      }
      else if (keyCode === UP_ARROW) {
        this.jump();
      }
    }
  
    keyReleased(keyCode){
      if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        this.vx = 0;
      }
    }
  
    static getSpriteImages(amountOfPics, spriteImage, width, height) {
      let images = [];
      let sx = 0;
      for (let index = 0; index < amountOfPics; index++) {
        let image = spriteImage.get(sx, 0, width, height);
        images.push(image);
        sx = sx + width;
      }
  
      return images;
    }
  }
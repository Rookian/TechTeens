class Sprite {
  constructor(idleImages, movingImages, jumpImages, animationSpeed, x, y) {
    this.idleImages = idleImages;
    this.movingImages = movingImages;
    this.jumpImages = jumpImages;
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
    const currentImages = this.getCurrentImages() ||this.idleImages;
    
    const imageIndex = currentImages.length === 0 ? 0 : floor(this.index) % currentImages.length;
    image(currentImages[imageIndex], this.x, this.y);
  }

  getCurrentImages() {
    if (keyIsDown(UP_ARROW)) {
      return [this.jumpImages[0]];
    } else if (abs(this.vx) > 0 && this.vy === 0) {
      return this.movingImages
    }
    else if (this.vy === 0 && this.vx === 0) {
      return this.idleImages;
    }
  }

  animate() {
    if (this.x > windowWidth + this.movingImages[0].width) {
      this.x = -this.movingImages[0].width;
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

  keyPressed(keyCode) {
    console.log({ x: this.x, y: this.y });
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

  keyReleased(keyCode) {
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
declare var p5: any

export default class Ball {
  static balls: Ball[] = []

  static create(count: number) {
    for (let i = 0; i < count; i++) {
      this.balls.push(new Ball())
    }
  }

  static draw() {
    this.balls.forEach((ball) => {
      ball.update()
      ball.draw()
    })
  }

  position = createVector(random(width), random(height))
  // angle = Math.random() * 360
  // speed = 5
  velocity = createVector(random(-5, 5), random(-5, 5))
  radius = random(10, 30)

  update() {
    // const velocity = p5.Vector.fromAngle(radians(this.angle), this.speed);
    // this.position.add(velocity)
    //
    // if(this.position.y < this.radius){
    //   this.position.y = this.radius + 1
    //
    //   const diffRect = this.angle
    //   this.angle
    // }
    this.position.add(this.velocity)
    if (
      this.position.y < this.radius ||
      this.position.y > height - this.radius
    ) {
      this.velocity.y *= -1
    }
    if (
      this.position.x < this.radius ||
      this.position.x > width - this.radius
    ) {
      this.velocity.x *= -1
    }

    for (const ball of Ball.balls) {
      const distance = dist(
        ball.position.x,
        ball.position.y,
        this.position.x,
        this.position.y
      )

      if (distance < ball.radius + this.radius) {
        ball.velocity.mult(-1)
        this.velocity.mult(-1)
      }
    }
  }

  draw() {
    fill(255)
    circle(this.position.x, this.position.y, this.radius * 2)
  }
}

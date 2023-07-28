class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30; //radius
    this.body = Bodies.circle(x, y, this.r, options); //creating a circular body
    this.image = loadImage("./assets/cannonball.png"); //loaded image
    World.add(world, this.body); //added the object the the world
  }

  shoot(){
    var newAngle = cannon.angle-28; //storing the cannon's angle
    newAngle = newAngle*(3.14/180) //updating the angle so you can define the velocity
    var velocity = p5.Vector.fromAngle(newAngle); //defining the velocity
    velocity.mult(0.5); //multiplying it by 0.5
    Matter.Body.setStatic(this.body,false); //making the body able to move
    Matter.Body.setVelocity(this.body,{ //upadting the veloctiy x and y according the the angle
      x:velocity.X*(180/3.14),
      y:velocity.Y*(180/3.14),
    })
   }

  display() 
  {
    var pos = this.body.position; //variable position; defined the position
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}

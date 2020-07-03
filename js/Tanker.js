class Tanker {
  constructor(x, y, width, height,angle) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      var pos =this.body.position;
      var angle=this.body.angle;
   
      push();
      rectMode(CENTER);
      translate(pos.x,pos.y - this.width/4);
      angle = atan2(mouseY - height / 2, mouseX - width / 2);
      rotate(angle);
      fill(0,102,51);
      stroke(6);
      rect(-30,-10,80,40);
      pop();
      ellipseMode(CENTER);
      fill(25,51,0); 
      ellipse(pos.x,pos.y - this.width/4,this.width,this.width);
      rectMode(CENTER);
      fill(0,102,51);
      stroke(6);
      rect(pos.x, pos.y, this.width, this.height);
    };
}

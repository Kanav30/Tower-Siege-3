class Polygon{
    constructor(x, y, width,height) {
        var options = {
          isStatic : false,
            restitution:0.8,
            friction:1,
            density:1
        }
        this.p = loadImage("polygon.png");
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
      }
      display(){
            image(this.p,this.body.x,this.body.y);
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
       fill("yellow");
        image(this.p,0,0);
             
        pop();
      }
  }
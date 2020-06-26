/*class Block{
  constructor(x, y, width,height) {
      var options = {
        restitution:1,
          friction:1,
          density:1
      }
      
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
     fill(137, 255, 143);
      rect(0,0,this.width,this.height);
      pop();
    }
}*/

class Block{
  constructor(x, y, width, height) {
      var options = {
        restitution:1,
        friction:1,
        density:1
         
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
   score(){
     if(this.visibility<0 && this.visibility >-105){
       score++;
     }
   }

    display(){
      
      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(137, 255, 143);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      pop();
      
    }
  }
}
class log{
    constructor(x, y,angle) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 20, 150, options);
        this.width = 20
        this.height = 150
        Matter.body.setAngle(this.body,angle)
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
      }
}
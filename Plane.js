class Plane{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            density: 1,
            restitution: 0,
            friction: 2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(255,255,255);
        rect(0, 0, this.width, this.height);
        pop();
    }

}
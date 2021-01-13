class Rubber{
    constructor(x, y, radius){
        var opt = {
            restitution: 0.3,
            density: 1,
            friction: 5
        };
        this.body = Bodies.circle(x, y, radius, opt);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        noStroke();
        fill(32, 46, 134);
        //making the x and y "0" seems to be the only way for thigs to work properly 
        ellipse(0,0, this.radius);
        pop();
    }
}
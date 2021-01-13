class Stone{
    constructor(x, y){
        var options={
        isStatic: false,
        restitution :0.4,
        friction:10,
        density:4.0,
        mass: 200
        }
        this.body = Bodies.rectangle(x,y, 156,163, options);
        this.width = 156;
        this.height=163;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0,255,60);
        rect(0, 0, this.width, this.height);
        pop();
    }
}

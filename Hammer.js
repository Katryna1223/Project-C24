class Hammer{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            density: 5,
            friction: 23,
            restitution: 0.5
        };
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
            noStroke();
            fill(34,25,230);
            rect(mouseX, mouseY, this.width, this.height);
            pop();
        }

    }

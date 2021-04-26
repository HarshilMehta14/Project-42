class Umbrella{
    constructor(x, y){
        var options = {
            isStatic : true
        }
            this.image = loadImage("images/Walking Frame/walking_1.png");

      
        this.umbrella = Bodies.circle(x, y, 90, options);
        this.radius = 50;
        World.add(world, this.umbrella);

    }

    display(){
        var p = this.umbrella.position;
        
        imageMode(CENTER);
        image(this.image, p.x, p.y+20, 300, 300);
    }
}
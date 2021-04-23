class Umbrella{
    constructor(){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(200, 650, 80, 20);
        World.add(world, this.body);

        this.image = loadImage("Umbrella.png");
    }

    display(){
        var p = this.body.position;
        
        imageMode(CENTER);
        image(this.image, p.x, p.y);
    }
}
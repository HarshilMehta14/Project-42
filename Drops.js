class Drop{
    constructor(x, y, r){
        var option = {
        'restitution' : 0.2,
        'friction' : 1,
        'density' : 1.0
        }

        this.body = Bodies.circle(x, y, r, r, option);
        this.x = x;
        this.y = y;
        this.r = r;

        World.add(world, this.body);

    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);

         noStroke();
         fill("blue");

         ellipseMode(RADIUS);
         ellipse(0, 0, this.r, this.r);

         if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)});
        }
    
         pop();
    }

    
}
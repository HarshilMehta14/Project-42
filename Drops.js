class createDrop{
    constructor(x, y){
        var option = {
        'restitution' : 0.1,
        'friction' : 0.001,
        }

        this.rain = Bodies.circle(x, y, 5, option);
        this.r = 5;

        World.add(world, this.rain);

    }
    updateY(){
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0, 400)});
        }
    }

    showDrop(){
         fill("blue");

         ellipseMode(CENTER);
         ellipse(this.rain.position.x, this.rain.position.y, this.r, this.r);
    }
}
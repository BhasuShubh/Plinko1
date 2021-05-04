class particle {

    constructor(x,y){
        var options = {
            restitution: 0.5
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.col = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        fill(this.col);
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2, this.r*2)
        
        pop();
    } 
}

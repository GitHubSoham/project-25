class paper{
 
constructor(x,y){

   var options = {
        'density': 1.2,
        'isStatic': false,
        'friction': 0,
        'restitution': 0.3
    }

    this.body = Bodies.rectangle(x,y,60,60,options);
    this.width = 60;
    this.height = 60;
    this.image = loadImage("paper.png");
    World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
}


}
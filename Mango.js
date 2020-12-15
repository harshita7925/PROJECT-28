class Mango{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image=loadImage("mango.png");
        this.body=Bodies.circle(this.x , this.y , options);
        World.add(world, this.body);
    }
}
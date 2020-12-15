class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
      super(x,y,50,50);
      this.image = loadImage("stone.png");
    }

    fly(){
        this.sling.bodyA=null;
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
  
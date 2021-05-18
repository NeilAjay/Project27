class Paper
{
	constructor(x,y,r)
	{
        var options = {
            isStatic : false,
            'restitution':0.3,
            'friction':0,
            'density':2.1,
          };
		this.x=x;
		this.y=y;
		this.r=r;
	
		this.image=loadImage("paper.png")

		this.body=Bodies.circle(this.x, this.y, (this.r-0.8)/2.6, options)
		World.add(world, this.body);

	}
	display()
	{

		var pos = this.body.position;

		push()
		translate(pos.x, pos.y);
		imageMode(CENTER);
		image(this.image, 0, 0, this.r, this.r);
		pop();
	}


}
var ninja =
{
	position:
	{
		x: 7,
		y: 3
	},
	moveLeft: function()
	{
		this.position.x--;
	},
	moveRight: function()
	{
		this.position.x++;
	},
	moveUp: function()
	{
		this.position.y--;
	},
	handleGravity: function()
	{
		if(!this.hasDownwardsCollision())
		{
			this.position.y++;
			
			if(this.hasDownwardsCollision())
			{
				this.jump = 3;
			}
		}
	},
	hasDownwardsCollision: function()
	{
		return !(this.position.y+1 < stage.length
		&& !stage[this.position.y+1][this.position.x])
	},
	jump: 3
}

var stage = 
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var size = 32;

$(window).keyup(function(event)
{
	if(event.keyCode == 39)
	{
		ninja.moveRight();
	}
	else if(event.keyCode == 37)
	{
		ninja.moveLeft();
	}
	
	if(event.keyCode == 39
	|| event.keyCode == 37
	|| event.keyCode == 40)
	{
		ninja.handleGravity();
	}
	
	if(event.keyCode == 38)
	{
		if(ninja.jump > 0)
		{
			ninja.moveUp();
			ninja.jump--;
		}
	}
	
	$screen = $("canvas#screen");
	$screen.clearCanvas();
	for(y = 0; y < 11; y++)
	{
		for(x = 0; x < 16; x++)
		{
			if(stage[y][x] == 1)
			{
				$screen.drawRect(
				{
					x: x*size, y: y*size,
					width: size, height: size,
					fillStyle: "#000",
					fromCenter:false
				});
			}
		}
	}
	$screen.drawRect(
	{
		x: ninja.position.x*size,
		y: ninja.position.y*size,
		width: size, height: size,
		fillStyle: "green",
		fromCenter:false
	});
});
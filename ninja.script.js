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
	handleGravity: function()
	{
		if(this.position.y+1 < stage.length)
		{
			if(stage[this.position.y+1][this.position.x] === 0)
			{
				this.position.y++;
			}
		}
		else
		{
			alert("Game Over!");
		}
	}
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
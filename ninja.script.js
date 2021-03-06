var ninja =
{
	position:
	{
		x: 10,
		y: 9
	},
	moveLeft: function()
	{
		if(!this.hasLeftwardsCollision())
		{
			this.position.x--;
		}
	},
	moveRight: function()
	{
		if(!this.hasRightwardsCollision())
		{
			this.position.x++;
		}
	},
	moveUp: function()
	{
		if(!this.hasUpwardsCollision())
		{
			this.position.y--;
		}
	},
	moveDown: function()
	{
		if(!this.hasDownwardsCollision())
		{
			this.position.y++;
		}
	},
	hasDownwardsCollision: function()
	{
		if(this.position.y+1 >= stage.length) {return false;}
		return stage[this.position.y+1][this.position.x];
	},
	hasUpwardsCollision: function()
	{
		if(this.position.y-1 < 0) {return true;}
		return stage[this.position.y-1][this.position.x];
	},
	hasRightwardsCollision: function()
	{
		if(this.position.x+1 >= stage[0].length) {return false;}
		return stage[this.position.y][this.position.x+1];
	},
	hasLeftwardsCollision: function()
	{
		if(this.position.x-1 < 0) {return true;}
		return stage[this.position.y][this.position.x-1];
	},
	jump: 3
}

var stage = 
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var entity =
{
	position:
	{
		x: 6,
		y: 9
	},
	move: function()
	{
		if(this.direction == "left")
		{
			this.position.x--;
			if(this.hasLeftwardsCollision())
			{
				this.direction = "right"
			}
		}
		else if(this.direction == "right")
		{
			this.position.x++;
			if(this.hasRightwardsCollision())
			{
				this.direction = "left"
			}
		}
	},
	hasRightwardsCollision: function()
	{
		if(this.position.x+1 >= stage[0].length) {return false;}
		return stage[this.position.y][this.position.x+1];
	},
	hasLeftwardsCollision: function()
	{
		if(this.position.x-1 < 0) {return true;}
		return stage[this.position.y][this.position.x-1];
	},
	direction: "left"
}

var size = 32;

var SCREEN_WIDTH = 16;
var SCREEN_HEIGHT = 11;

$(window).load(function()
{
	$canvas = $("canvas");
	$canvas[0].width = SCREEN_WIDTH * size;
	$canvas[0].height = SCREEN_HEIGHT * size;
	
	render($canvas);
});

$(window).keyup(function(event)
{
	if(event.keyCode == 68
	|| event.keyCode == 39)
	{
		ninja.moveRight();
		ninja.moveDown();
		ninja.jump = 0;
	}
	else if(event.keyCode == 65
	|| event.keyCode == 37)
	{
		ninja.moveLeft();
		ninja.moveDown();
		ninja.jump = 0;
	}
	else if(event.keyCode == 83
	|| event.keyCode == 40)
	{
		ninja.moveDown();
		ninja.jump = 0;
	}
	else if(event.keyCode == 87
	|| event.keyCode == 38)
	{
		if(ninja.jump > 0)
		{
			ninja.moveUp();
			ninja.jump--;
		}
		else
		{
			ninja.moveDown();
		}
	}
	else if(event.keyCode == 69)
	{
		ninja.moveRight();
		if(ninja.jump > 0)
		{
			ninja.moveUp();
			ninja.jump--;
		}
		else
		{
			ninja.moveDown();
		}
	}
	else if(event.keyCode == 81)
	{
		ninja.moveLeft();
		if(ninja.jump > 0)
		{
			ninja.moveUp();
			ninja.jump--;
		}
		else
		{
			ninja.moveDown();
		}
	}
	
	if(ninja.hasDownwardsCollision())
	{
		ninja.jump = 3;
	}
	
	entity.move();
	
	render($("canvas"));
});

function render($canvas)
{
	$canvas.clearCanvas();
	
	for(y = 0; y < 11; y++)
	{
		for(x = 0; x < 16; x++)
		{
			if(stage[y][x] == 1)
			{
				$canvas.drawRect(
				{
					x: x*size, y: y*size,
					width: size, height: size,
					fillStyle: "#000",
					fromCenter: false
				});
			}
		}
	}
	
	$canvas.drawImage(
	{
		x: ninja.position.x*size,
		y: ninja.position.y*size,
		width: size, height: size,
		source: ninja.jump > 0 ? "media/character.default.gif" : "media/character.flipped.gif",
		fromCenter: false
	});
	
	$canvas.drawImage(
	{
		x: entity.position.x*size,
		y: entity.position.y*size,
		width: size, height: size,
		source: "media/character.default.gif",
		fromCenter: false
	});
}
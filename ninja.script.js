var ninja = { position: {x: 0} }

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
		ninja.position.x++;
	}
	else if(event.keyCode == 37)
	{
		ninja.position.x--;
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
		y: 352-size-size,
		width: size, height: size,
		fillStyle: "green",
		fromCenter:false
	});
});
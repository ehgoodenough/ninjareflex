var ninja = { position: {x: 0} }

window.addEventListener("keyup", function(event)
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
	$screen.drawRect(
	{
		x: ninja.position.x*32, y: 360-32,
		width: 32, height: 32,
		fillStyle: "green",
		fromCenter:false
	});
}, false);
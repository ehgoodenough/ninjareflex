window.addEventListener("keyup", function(event)
{
	$("canvas#screen").drawRect(
	{
		x: Math.random()*(480-32),
		y: Math.random()*(360-32),
		width: 32, height: 32,
		fillStyle: "green",
		fromCenter:false
	});
}, false);
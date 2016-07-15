var snake;
var food;

function setup()
{
	var cnv = createCanvas(720, 520);
	cnv.parent('canvas');
	snake = new Snake();
	frameRate(10);
	pickLocation();
}

function draw()
{
	background(0, 0, 0);
	setInterval(30);
	snake.update();
	snake.show();
	snake.death();

	if (snake.eat(food))
	{
		pickLocation();
	}

	fill(230, 0, 15);
	rect(food.x, food.y, 20, 20);
}

function keyPressed() //detects arrow keys and updates direction accordingly
{
	if (keyCode === UP_ARROW) { snake.dir("up"); }
	else if (keyCode === LEFT_ARROW) { snake.dir("left"); }
	else if (keyCode === RIGHT_ARROW) { snake.dir("right"); }
	else { snake.dir("down"); }
}

function pickLocation() //picks location for food
{
	var cols = floor(width / 20);
	var rows = floor(height / 20);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(20);

	for (var i = 0; i < snake.tailLength(); i++)
	{
		if (snake.tailIndex(i).x === food.x && snake.tailIndex(i).y === food.y)
		{
			pickLocation();
		}
	}
}

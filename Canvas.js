var snake;
var food;

function setup()
{
	createCanvas(600, 600);
	snake = new Snake();
	frameRate(10);
	pickLocation();
}

function draw()
{
	background(51);
	setInterval(30);
	snake.update();
	snake.show();

	if (snake.eat(food))
	{
		pickLocation();
	}

	fill(230, 0, 15);
	rect(food.x, food.y, 15, 15);
}

function keyPressed() {
	if (keyCode === UP_ARROW) { snake.dir(0, -1); }
	else if (keyCode === LEFT_ARROW) { snake.dir(-1, 0); }
	else if (keyCode === RIGHT_ARROW) { snake.dir(1, 0); }
	else { snake.dir(0, 1); }
}

function pickLocation() {
	var cols = floor(width / 15);
	var rows = floor(height / 15);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(15);
}

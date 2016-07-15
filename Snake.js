var scl = 20;
var food;

function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.highscore = 0;
	this.tail = [];
	this.direction = "right";

	this.update = function() //sets class variables for next frame
	{
		if (this.total === this.tail.length) 
		{
      			for (var i = 0; i < this.tail.length - 1; i++) 
      			{
        			this.tail[i] = this.tail[i + 1];
      			}
    		}
    		this.tail[this.total - 1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;

		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);

		document.getElementById("highscore").innerHTML = "This Score: " + this.total + "     High Score: " + this.highscore;
	}

	this.show = function() //draws snake
	{
		fill(46, 184, 46);

		for (var i = 0; i < this.tail.length; i++)
		{
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}

	this.dir = function(direction) //changes the direction snake moves 
	{
		if (direction == "right" && this.direction != "left") {
			this.xspeed = 1;
			this.yspeed = 0;
			this.direction = "right";
		} else if (direction == "down" && this.direction != "up") {
			this.xspeed = 0;
			this.yspeed = 1;
			this.direction = "down";
		} else if (direction == "left" && this.direction != "right") {
			this.xspeed = -1;
			this.yspeed = 0;
			this.direction = "left";
		} else if (direction == "up" && this.direction != "down") {
			this.xspeed = 0;
			this.yspeed = -1;
			this.direction = "up";
		}
	}
	
	this.death = function() //checks if head touches any part of tail
	{
		if (this.tail.length > 0)
		{
			for (var i = 0; i < this.tail.length; i++)
			{
				var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
				if (d === 0)
				{
					if (this.total > this.highscore)
					{
						this.highscore = this.total;
						document.getElementById("highscore").innerHTML = "This Score: 0     High Score: " + this.highscore;
					}

					this.total = 0;
					this.tail = [];
					window.alert("You died!");
				}
			}
		}
	}

	this.eat = function(food) //checks if head touches any food and updates tail
	{
		var d = dist(this.x, this.y, food.x, food.y);
		if (d > 0) { return false; }
		this.total++;
		return true;
	}

	this.tailLength = function()
	{
		return this.tail.length;
	}

	this.tailIndex = function(index) 
	{
		return this.tail[index];
	}
}

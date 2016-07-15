var scl = 20;

var food;

function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	this.direction = "right";

	this.update = function() 
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

		document.getElementById("header").innerHTML = "Snake Game - Score: " + this.total;
	}

	this.show = function() {
		fill(46, 184, 46);

		for (var i = 0; i < this.tail.length; i++)
		{
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}

	this.dir = function(direction) {
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
	
	this.death = function()
	{
		if (this.tail.length > 0)
		{
			for (var i = 0; i < this.tail.length; i++)
			{
				var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
				if (d === 0)
				{
					this.total = 0;
					this.tail = [];
					window.alert("You died!");
				}
			}
		}
	}

	this.eat = function(food) {
		var d = dist(this.x, this.y, food.x, food.y);
		if (d > 0) { return false; }
		this.total++;
		return true;
	}
}

			//variables for the canvas
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			//variables for the ball
			var x = canvas.width/2;
			var y = canvas.height-30;
			var dx = 2;
			var dy = -2;
			var ballRadius = 10;
			//variables for the paddle
			var paddleHeight = 10;
			var paddleWidth = 75;
			var paddleX = (canvas.width-paddleWidth)/2;
			//key variables
			var rightPressed = false;
			var leftPressed = false;
			//brick variables
			var brickRowCount = 5;
			var brickColumnCount = 7;
			var brickWidth = 75;
			var brickHeight = 20;
			var brickPadding = 10;
			var brickOffsetTop = 30;
			var brickOffsetLeft = 30;
			//Score variables
			var score= 0;
			//Lives variable
			var lives = 3;
			
			//Creating the  position and status of the bricks
			var bricks = [];
			for(c = 0; c < brickColumnCount; c++){
				bricks[c] = [];
				for(r = 0; r < brickRowCount; r++){
					bricks[c][r] = { x: 0, y: 0, status: 1};
				}
			}
			
			//The main draw function that draw the canvas and all the elements that create the game
			function draw() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawBricks();
				drawBall();
				drawPaddle();
				drawScore();
				drawLives();
				collisionDetection();
				//detects if the ball is touching the three walls around the game it will bounce back
				if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
					dx = -dx;
				}
				if(y + dy < ballRadius) {
					dy = -dy;
					//if the ball touches the paddle it will bounce back
				} 
				else if (y + dy > canvas.height-ballRadius) 
				{
					if(x > paddleX && x < paddleX + paddleWidth)
					{
						dy = -dy;
					}
					//if it misses the paddle and you have no lives you lose
					
					else{
						lives--;
						if(!lives)
						{
							var a = document.getElementById('gameOver');
							var b = document.getElementById('youWin');
									a.style.display = 'block';
									b.style.display = 'none';
									canvas.style.display = 'none';	
						} //otherwise you start over until you have no lives
							else
							{
								x = canvas.width/2;
								y = canvas.height - 30;
								dx = 3;
								dy= -3;
								paddleX = (canvas.width - paddleWidth)/2;
							}
						}
				}
				
				//When the right or left arrow key is pressed and the paddle is within the canvas boundries the paddle moves 7px/frame
				if(rightPressed && paddleX < canvas.width-paddleWidth){
					paddleX +=7;
				}
				else if(leftPressed && paddleX > 0){
					paddleX -=7;
				}
				//allow the ball to move across the canvas by changing the position of the ball
				x += dx;
				y += dy;
				//refreshes each fram according to the browser
				requestAnimationFrame(draw);
			}
			
			draw();
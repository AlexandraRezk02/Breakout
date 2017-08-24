//detects if the center of the ball has touched the brick and redirects the ball
function collisionDetection(){
				for (c = 0; c < brickColumnCount; c++){
					for ( r = 0; r < brickRowCount; r++){
						var b = bricks[c][r];
						if(b.status == 1){
						if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
							dy = -dy;
							b.status = 0;
							score++;
							if(score == brickRowCount * brickColumnCount){
								alert("YOU WIN, CONGRATULATIONS!");
								document.location.reload();
							}
							}
						}
					}
				}
			}
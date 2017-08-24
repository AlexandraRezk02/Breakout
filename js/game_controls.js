//Even Listners for mouse and arrow key controls
			document.addEventListener("keydown", keyDownHandler, false);
			document.addEventListener("keyup", keyUpHandler, false);
			document.addEventListener("mousemove", mouseMoveHandler, false);
//when the mouse is detected to be on the canvas the paddle moves with the mouse
function mouseMoveHandler(e){
				var relativeX = e.clientX - canvas.offsetLeft;
				if(relativeX > 0 && relativeX < canvas.width) {
					paddleX = relativeX - paddleWidth/2;
				}
			}
//detects when the left or right arrow key is pressed
function keyDownHandler(e) {
				if (e.keyCode == 39){
					rightPressed = true;
				}
				else if(e.keyCode == 37){
					leftPressed = true;
				}
			}
			
function keyUpHandler(e){
				if(e.keyCode == 39) {
					rightPressed = false;
				}
				else if(e.keyCode == 37){
					leftPressed = false;
				}
			}
			
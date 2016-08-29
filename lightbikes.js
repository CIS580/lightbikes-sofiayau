var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;
var backCanvas = document.createElement('canvas');
 backCanvas.width = canvas.width;
  backCanvas.height = canvas.height;
var backCtx = backCanvas.getContext('2d');

var x = 0;
var y = 0;

var image = new Image();
image.src = "file:///Users/sofiachiu/Desktop/canada.png";

var input = {
  up:false,
  down:false,
  left:false,
  right:false
}

window.onkeydown = function(event){
 event.preventDefault();
  switch(event.keyCode){
//up
  case 38:
  case 87:
    input.up = true;

    break;
    //left
  case 37:
  case 65:
    input.left = true;
    break;
    //right
  case 39:
  case 68:
    input.right = true;
    break;
    //down
  case 40:
  case 83:
    input.down = true;
    break;
  }
return false;
}
window.onkeyup = function(event){
  event.preventDefault();
  switch(event.keyCode){
    //up
  case 38:
  case 87:
    input.up = false;

    break;
    //left
  case 37:
  case 65:
    input.left = false;
    break;
    //right
  case 39:
  case 68:
    input.right = false;
    break;
    //down
  case 40:
  case 83:
    input.down = false;
    break;
  }
  return true;
}


function loop(timestamp){

  if(input.up) y -= 1;
  if(input.down) y += 1;
  if(input.left)  x -= 1;
  if(input.right)  x += 1;

  backCtx.clearRect(0,0,canvas.width, canvas.height);
  //backCtx.drawImage(image, 400, 200, 2000, 1000, 0, 0, 2000, 1000);
   //source x dest x
   backCtx.drawImage(image, 0, 0);
  for(i = 0; i < 1000 ;i++){
    backCtx.fillStyle = "Red";
    backCtx.fillRect(
      // i = y*width +x ; x = i % width  y = (int) (i% width)
      (i*20) %100, (i*20) %100, 10,10
    )
  }

  backCtx.fillRect(x, y, 5, 5);
  backCtx.fillStyle = "yellow";

  //swap buffer
  ctx.drawImage(backCanvas,0,0);
  setTimeout(loop, speed);
  //requestAnimationFrame(loop);
}
//replace setTimeout and loop
//var intervalId = setInterval(loop,speed);
//requestAnimationFrame(loop);
loop();

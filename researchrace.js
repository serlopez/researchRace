var raceCanvas=document.getElementById("racecanvas");
raceCanvas.width=window.innerWidth;
var c=raceCanvas.getContext("2d");
var img=new Image();

var x=50;
var dx=1;
function animation(){
  var points=0;
  img.src="images/lastRental.jpg";
  id=requestAnimationFrame(animation);
  c.drawImage(img, x, 50);
  if(x>innerWidth){
    dx=-dx;
  }
  x+=dx;
  if(x>90){
    cancelAnimationFrame(id);
  }
}


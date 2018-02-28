var raceCanvas=document.getElementById("racecanvas");
raceCanvas.width=window.innerWidth;
var c=raceCanvas.getContext("2d");
var img=new Image();

x=50;
y=0;
function animation(){
  img.src="images/lastRental.jpg";
  requestAnimationFrame(animation);
  c.drawImage(img, x, 50);
  x+=1;
  document.getElementById('questionPlace').innerHTML="Here's your answer";
}

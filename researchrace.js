var raceCanvas = document.getElementById("racecanvas");
raceCanvas.width=window.innerWidth;
var c = raceCanvas.getContext("2d");
var img = new Image();
img.onload=function(){
  c.drawImage(img, 50, 50);
}
img.src="images/lastRental.jpg";
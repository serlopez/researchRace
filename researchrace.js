var raceCanvas=document.getElementById("racecanvas");
raceCanvas.width=window.innerWidth;
var c=raceCanvas.getContext("2d");
var img=new Image();
var x=50;
var dx=1;


function animation(){
  //selects car
  var carnumber=document.getElementById("carname").selectedIndex;
  if(carnumber===0){
    img.src="images/upsTruck.jpg";
  }else if(carnumber===1){
    img.src="images/schoolBus.jpg";
  }else if(carnumber===2){
    img.src="images/priusCar.jpg";
  }else if(carnumber===3){
    img.src="images/lastRental.jpg";
  }else
  {alert("Please select a car");
    return 0;
  }
  
  //adds points as the questions are answered
  var points=document.getElementById("answers1").value;
  points=parseInt(points, 10);
  console.log(points);
  points+=parseInt(50, 10);
  console.log(points);
  id=requestAnimationFrame(animation);
  c.drawImage(img, x, 50);
  if(x>innerWidth){
    dx=-dx;
  }
  x+=dx;
  if(x>points){
    cancelAnimationFrame(id);
  }
}

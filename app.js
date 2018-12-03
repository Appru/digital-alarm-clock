
function clock() {
  const fullDate = new Date();

  var hours = fullDate.getHours();
  var mins = fullDate.getMinutes();
  var seconds = fullDate.getSeconds();

  

  if(hours < 10){
      hours = "0" + hours;
  }
  if(mins < 10){
    mins = "0" + mins;
}
if(seconds < 10){
    seconds = "0" + seconds;
}

 

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = ":"+mins;
  document.getElementById("second").innerHTML = ":" +seconds;
}

setInterval(clock,100);


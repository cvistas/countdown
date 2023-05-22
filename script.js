var countdownDate = new Date("May 30, 2023 00:00:00").getTime();

var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";
  
    if (distance < 0) {
        clearInterval(countdownFunction);
        document

var pastDate = new Date("May 20, 2023 22:27:00").getTime();

var elapsedFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - pastDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";
    document.getElementById("message").innerHTML = "O FCP está sem penalties há";
}, 1000);

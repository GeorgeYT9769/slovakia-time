function showTime() {
    var date = new Date();
    var time = date.toLocaleTimeString("en-US", { timeZone: "Europe/Bratislava" });
    document.getElementById("time").innerHTML = time;
  }
  setInterval(showTime, 1000);
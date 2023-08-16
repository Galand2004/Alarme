function setAlarm() {
  var alarmTime = prompt("À quelle heure veux-tu régler ton alarme ? (Format : HH:MM)");
  var timeParts = alarmTime.split(":");
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);

  var now = new Date();
  var alarm = new Date();
  alarm.setHours(hours);
  alarm.setMinutes(minutes);

  var timeDiff = alarm - now;

  if (timeDiff > 0) {
    setTimeout(function() {
      alert("Réveille-toi !");
    }, timeDiff);
    document.getElementById("time").innerHTML = "Alarme réglée à " + alarmTime;
  } else {
    alert("L'heure d'alarme doit être dans le futur !");
  }

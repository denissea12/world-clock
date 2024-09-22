function updateTime() {
  let austinElement = document.querySelector("#austin");
  let austinDateElement = austinElement.querySelector(".date");
  let austinTimeElement = austinElement.querySelector(".time");
  let austinTime = moment().tz("America/Chicago");

  austinDateElement.innerHTML = austinTime.format("MMMM Do YYYY");
  austinTimeElement.innerHTML = austinTime.format(
    "h:mm:ss [<small]>A[</small>]"
  );

  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");
  let milanTime = moment().tz("Europe/Madrid");

  milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
  milanTimeElement.innerHTML = milanTime.format("h:mm:ss [<small]>A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

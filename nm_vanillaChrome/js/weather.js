function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "2716fba9155342c5c70edd74782af1b1";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherDiv = document.querySelector("#weather");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const icon = document.createElement("img");
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon.slice(
        0,
        2
      )}d@2x.png`;
      weather.innerText = `${data.main.temp}:`;
      city.innerText = ` ${data.name}`;
      weatherDiv.appendChild(icon);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you :(");
}

// 현재 좌표 줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

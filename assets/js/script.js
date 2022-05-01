var searchEl = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var currentWeatherEl = document.querySelector("#current-weather");

function getWeather(cityname) {
  var geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=9209536caeff33b08c2db4e1b75caa85`;

  fetch(geoApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      var weatherApi = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${lat}&lon=${lon}&exclude=currentminutelyhouryalerts&appid=9209536caeff33b08c2db4e1b75caa85`;
      fetch(weatherApi)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          var temp = data.current.temp;
          var tempEl = document.createElement("p");
          tempEl.textContent = temp;
          currentWeatherEl.append(tempEl);
        });
    });
}

searchButton.addEventListener("click", function () {
  var cityname = searchEl.value;
  getWeather(cityname);
});

var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=39.09&lon=94.57&exclude=currentminutelyhouryalerts&appid=9209536caeff33b08c2db4e1b75caa85";
var tempatureEl = document.querySelector("#input-button");
var displayWeather = function(current, searchTerm) {
    console.log(current);
}
function getAPI() {
    fetch(weatherApi)
    .then(response => response.json())
    .then(data => console.log(data));



}
getAPI()
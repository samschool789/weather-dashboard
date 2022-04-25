const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=39.09&lon=94.57&exclude=currentminutelyhouryalerts&appid=9209536caeff33b08c2db4e1b75caa85";
const inputEl = document.getElementById("input-button");
const searchEl = document.getElementById("search-button");

function getAPI() {
    fetch(weatherApi)
    .then(response => response.json())
    .then(data => console.log(data));

    

}
getAPI()
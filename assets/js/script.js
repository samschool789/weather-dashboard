var weatherApi = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9209536caeff33b08c2db4e1b75caa85";


function getAPI() {
    fetch(weatherApi)
    .then(response => response.json())
    .then(data => console.log(data));

}
getAPI()
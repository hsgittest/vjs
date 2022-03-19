

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
// console.log("ok",lat,long, url);
fetch(url).then(response => response.json()).then(data =>{
     console.log(data);
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
});
}
function onGeoError(){
console.log("error");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
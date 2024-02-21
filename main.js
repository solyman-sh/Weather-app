const apiKey = "11003ab62eff51e7ee2023ff10022280";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srcBox = document.querySelector(".search input");
const btnBox = document.querySelector(".search button");
const weatherBox = document.querySelector(".weather-icon");


async function getWeather(city){
    const response = await fetch(url + city + `&appid=${apiKey} `);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherBox.src="img/cloud.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherBox.src="img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherBox.src="img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherBox.src="img/mizz.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherBox.src="img/clear.png";
    }
    



}
btnBox.addEventListener("click" , function(){
    getWeather(srcBox.value);
})
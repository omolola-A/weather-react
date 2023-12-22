import React,{useState} from "react";
import axios from "axios";



export default function Weather(){
    const [city, setCity]= useState("");
    const [message, setMessage]= useState(false);
    const [weather, setWeather]= useState({});


    function displayWeather(response) {
    setMessage(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    }


    function handleSubmit(event) {
     event.preventDefault();
    let apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    }
    
    function updateCity(event) {
      setCity(event.target.value);
    }

    let form = (<form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity}/>
      <button type="submit">Search</button>
    </form>
    );
if (message) {
    return (
      <div>
        {form}
        <ul>
          <li>City: {weather.city}</li>
          <li>Temperature: {Math.round(weather.temperature)}</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
} else {
return(form);
}
}

import React,{useState} from "react";
import axios from "axios";



export default function Weather(){
    const [city, setCity]= useState("");

    function displayWeather(response) {
      alert(`Temperature in ${response.data.name} ${response.data.main.temp}⁰C`);
    }


    function handleSubmit(event) {
     event.preventDefault();
    let apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    }
    
    function updateCity(event) {

    }

    let form = (<form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity}/>
      <button type="submit">Search</button>
    </form>
    );

    return (
<div>
{form}
</div>
    );
}

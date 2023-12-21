import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";


export default function Weather(props){
    function displayWeather(response) {
      alert(`Temperature in ${response.data.name} ${response.data.main.temp}⁰C`);
    }
    let apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
}

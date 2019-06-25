import React from "react";

const Weather = (props) =>
    (
        <div className="weather" className="weather">
            { props.city &&
            <div >
                <p className="textSite" id="informationWeather">Location: {props.city}, {props.country} </p>
                <p className="textSite" id="informationWeather">Temperature: {props.temp}° </p>
                <p className="textSite" id="informationWeather">Sunrise: {props.sunrise} A.M. </p>
                <p className="textSite" id="informationWeather">Sunset: {props.sunset} A.M. </p>
            </div>
            }
            <p id="informationWeather">{props.error}</p>
        </div>
    );

export default Weather;
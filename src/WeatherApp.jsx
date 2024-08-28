import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "vadodara",
        feelslike: 26.06,
        temp: 25.14,
        tempMin: 25.14,
        tempMax: 25.14,
        humidity: 90,
        weather: "overcast clouds",
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="abc">
            <br /><br />
           <h1>Weather App by Dhyan</h1>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
           <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
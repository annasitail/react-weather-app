import React, {useState} from 'react';
import axios from 'axios';
import "./Weather.css";

import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

export default function Weather()
{
    let [ready, setReady] = useState(false);
    const [city, setCity] = useState("New York");
    let [weather, setWeather] = useState(null);

    function handleResponse(response)
    {
        setWeather (
            {
                date: new Date(),
                city: response.data.city,
                description: response.data.condition.description,
                icon: response.data.condition.icon,
                iconUrl: response.data.condition.icon_url,
                temperature: Math.round(response.data.temperature.current),
                unit: "°C",
                humidity: Math.round(response.data.temperature.humidity),
                wind: Math.round(response.data.wind.speed)
            }
        );
        if (weather != null)
        {
            setReady(true);
        }
    }
    
    function search()
    {
        let apiKey = "0cc8e7fa49bb99310fbeoc8fcadt1a8b";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event)
    {
        event.preventDefault();
        search();
    }
    
    function handleCityChange(event)
    {
        setCity(event.target.value);
    }

    if (ready)
    {
        return (
        <div className='Weather'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-9'>
                        <input type='search' placeholder='Enter a city..' className='form-control' autoFocus='on' onChange={handleCityChange} />
                    </div>
                    <div className='col-3'>
                        <input type='submit' value='Search' className='btn btn-primary w-100' />
                    </div>
                </div>
            </form>
            <WeatherInfo weather={weather}/>
            <WeatherForecast iconUrl={weather.iconUrl} icon={weather.icon} city={weather.city}/>

        </div>
        );
    }
    else 
    {
        search();
        return (<h2>Loading...</h2>);
    }
}
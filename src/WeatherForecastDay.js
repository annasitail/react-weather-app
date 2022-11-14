import React from 'react';
import './WeatherForecastDay.css';

export default function WeatherForecastDay(props)
{
    let weather = {
        day: props.forecast.time,
        icon: props.forecast.condition.icon,
        iconUrl: props.forecast.condition.icon_url,
        max_temperature: Math.round(props.forecast.temperature.maximum),
        min_temperature: Math.round(props.forecast.temperature.minimum)
    }

    function day()
    {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date = new Date(weather.day * 1000);
        let day = date.getDay();
        return days[day];
    }

    return (
        <div className='WeatherForecastDay'>
            <div className='weather-f-day'>{day()}</div>
            <div className='weather-f-icon'>
                <img src={weather.iconUrl} alt={weather.icon}></img>
            </div>
            <div className='weather-temp'>
                <div>
                    <span className='weather-f-max-temp'>{weather.max_temperature}°</span>
                    <span className='weather-f-min-temp'>{weather.min_temperature}°</span>
                </div>
            </div>
        </div>
    );
}
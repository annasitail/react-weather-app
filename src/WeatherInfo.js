import React from 'react';
import './WeatherInfo.css';
import FormatDate from './FormatDate';
import WeatherTemperature from './WeatherTemperature';

export default function Weather(props)
{
    return (
    <div className='WeatherInfo'>
        <h1>{props.weather.city}</h1>
        <ul>
            <li><FormatDate date={props.weather.date} /></li>
            <li>{props.weather.description}</li>
        </ul>
        <div className='row mt-3'>
            <div className='col-6'>
                <div className='clearfix'>
                    <img src={props.weather.iconUrl} alt={props.weather.icon}></img>
                    <WeatherTemperature celsius={props.weather.temperature} />
                </div>
            </div>
            <div className='col-6'>
                <ul>
                    <li>Humidity: {props.weather.humidity}%</li>
                    <li>Wind: {props.weather.wind}km/h</li>
                </ul>
            </div>
        </div>
    </div>
    );    
}
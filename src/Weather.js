import React, {useState} from 'react';
import axios from 'axios';
import "./Weather.css";

export default function Weather(props)
{
    let [ready, setReady] = useState(false);
    let [city, setCity] = useState(props.defaultCity);
    let [temperature, setTemperature] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    let [description, setDescription] = useState(null);
    let [icon, setIcon] = useState(null);
    let [icon_url, setIconUrl] = useState(null);

    function handleResponse(response){
        setCity(response.data.city);
        setTemperature(Math.round(response.data.temperature.current));
        setHumidity(Math.round(response.data.temperature.humidity));
        setWind(Math.round(response.data.wind.speed));
        setDescription(response.data.condition.description);
        setIcon(response.data.condition.icon);
        setIconUrl(response.data.condition.icon_url);
        setReady(true);
        console.log(response);
    }

    if (ready)
    {
        return (
        <div className='Weather'>
            <form>
                <div className='row'>
                    <div className='col-9'>
                        <input type='search' placeholder='Enter a city..' className='form-control' autoFocus='on' />
                    </div>
                    <div className='col-3'>
                        <input type='submit' value='Search' className='btn btn-primary w-100' />
                    </div>
                </div>
            </form>
            <h1>{city}</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>{description}</li>
            </ul>
            <div className='row mt-3'>
                <div className='col-6'>
                    <div className='clearfix'>
                        <img src={icon_url} alt={icon}></img>
                        <span className='temperature'>{temperature}</span>
                        <span className='unit'>°C</span>
                    </div>
                </div>
                <div className='col-6'>
                    <ul>
                        <li>Humidity: {humidity}%</li>
                        <li>Wind: {wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
    else 
    {
        let apiKey = "0cc8e7fa49bb99310fbeoc8fcadt1a8b";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
        return (<h2>Loading...</h2>);
    }
    
}
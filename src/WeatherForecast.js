import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './WeatherForecast.css';
import WeatherForecastDay from './WeatherForecastDay';


export default function WeatherForecast(props)
{
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() =>
    {
        setReady(false);
    }, [props.city]);

    function handleResponse(response)
    {
        setForecast(response.data.daily);
        setReady(true);
    }

    if (ready)
    {
        return (
            <div className='WeatherForecast'>
                <div className='row'>
                    {
                        forecast.map(function (dailyForecast, index)
                        {
                            let elem = null;
                            if (index > 0 & index < 6)
                            {
                                elem = <div id={index} className='col'>
                                    <WeatherForecastDay forecast={dailyForecast}/>
                                </div>;
                            }
                            return elem;
                        })
                    }
                </div>
            </div>
        );
    }
    else
    {
        let apiKey = "0cc8e7fa49bb99310fbeoc8fcadt1a8b";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse)
        return null;
    }

}
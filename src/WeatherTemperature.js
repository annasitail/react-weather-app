import React, {useState} from 'react';

export default function WeatherTemperature(props)
{
    let [unit, setUnit] = useState("celsius");

    function displayFahrenheit(event)
    {
        event.preventDefault();
        setUnit("celsius");
    }

    function displayCelsius(event)
    {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "celsius")
    {
        return (
            <span>
                <span className='temperature'>{props.celsius}</span>
                <span className='unit'>°C | <a href="/" onClick={displayCelsius}>°F</a></span>
            </span>
        )
    }
    else
    {
        let f = Math.round((props.celsius * 9/5 + 32));
        return (
            <span>
                <span className='temperature'>{f}</span>
                <span className='unit'><a href="/" onClick={displayFahrenheit}>°C</a> | °F</span>
            </span>
        );
    }
}
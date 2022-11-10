export default function FormatDate(props)
{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (hours < 10)
    {
        return `${day} 0${hours}:${minutes}`;    
    }
    if (minutes < 10)
    {
        return `${day} ${hours}:0${minutes}`;    
    }
    return `${day} ${hours}:${minutes}`;
}

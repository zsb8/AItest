import React, { useState, useEffect } from 'react'
import axios from 'axios' 
const Weather = ({ url }) => {
    console.log("url===:",url) 
    const [weather, setWeather] = useState([])
    const [code,setCode] = useState('')
    const [info,setInfo] = useState('')
    useEffect(() => {
        console.log('effect')
        axios
          .get(url)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
          })
      },[])

    console.log("weather===:",weather)  
    const handleClick = () => {
      console.log(weather)
      setCode(weather.error.code)
      setCode(weather.error.info)
    }
    return (
        <div>    
          {code}
          {info}
          <button onClick={handleClick}> weather </button>
        </div>
    )
    {/*           {weather.error.code}
      <div>temperature: {weather.current.temperature} Celcius 
          <img width='100px' src={weather.current.weather_icons} />
          wind speed: {weather.current.wind_speed} mph, directory:{weather.current.wind_dir} </div> 
         */}
  }

  export default Weather
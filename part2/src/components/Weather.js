import React, { useState, useEffect } from 'react'
import axios from 'axios' 

const Weather = ({ url }) => {
  console.log("url:",url) 
  const tempObject = {
    error:{code:'',info111:''}
  }
  const [weather, setWeather] = useState(tempObject)
  // const [code,setCode] = useState('')
  // const [info,setInfo] = useState('')
  

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

  // const handleClick = () => {
  //   console.log(weather)
  //   setCode(weather.error.code)
  //   setInfo(weather.error.info)
  // }

  return (
      <div>    
          error code: {weather.error.code}<br/>
          error info: {weather.error.info}<br/>      
      </div>
  )
  {/*           
          error code: {weather.error.code}<br/>
          error info: {weather.error.info}<br/>

         {code}<br/>
         {info}<br/>
         <button onClick={handleClick}> weather </button>    
  */}
}

export default Weather
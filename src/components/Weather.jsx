import axios from 'axios';
import React, { useState } from 'react';

const Weather = () => {
   
  const [city,setCity] = useState();
  const [weather,setWeather] = useState()

  const handalcitychange = (e) =>{
    setCity(
      e.target.value
    )
  }

  const handalsm = (e) =>{
    e.preventDefault()
    console.log(city);
    
  }

   const Fatchdata = () =>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'a05ef66524071c6cec16b73c64375dda'}`).then((res)=>{
        setWeather(res)
         console.log(res);  
      }).catch((error)=>{
         console.log("Weather Location Is Notfound",error);  
      })
      console.log("weather",weather);  
    }

   const getwether = () =>{
    Fatchdata()
   }

  return (
    <div className=' bg-light vh-100 d-flex justify-content-center align-items-center'>
        <div className=' bg-info w-25 p-3 rounded-3'>
            <div className=''>
              <form onSubmit={(e)=>handalsm(e)}>
              <input type="text" className=' form-control' placeholder='Enter city Name' value={city} onChange={(e)=>handalcitychange(e)}/>
              <div className='text-center mt-2'>
              <button className='btn btn-danger' type='submit' onClick={getwether}>Get Weather</button>
              </div>
              </form>
            </div>
          {weather && <>
            <div>
              <h1>{weather.data.name}</h1>
              <h4>temprature is : {weather.data.main.temp}</h4>
              <p>{weather.data.weather[0].icon}</p>
              <h3>{weather.data.weather[0].description}</h3>
            </div>
          </>}  
        </div>
    </div>
  );
}

export default Weather;

// current weather conditions display 
import React, { useState } from 'react';
import Locic from '../resources/ic_location_on_white.png';

export default function CurrentWeather(props){
  const [weatherInfo] = useState(props.wdatacurrent.current);
  const [locationInfo] = useState(props.wdatalocation.location);

  var options = { weekday: 'short', month: 'short', day: 'numeric' };
  const wrkd = new Date(weatherInfo.last_updated);

  return (
    <>
    {weatherInfo && <>
    <div className="cw-row mb-4">
      <div className=" conditionbg mb-4">
        <div className='cw-colum'>
          <img src={weatherInfo.condition.icon}
            alt="condition"
            className="img-responsive condicon"
          />
        </div>
      </div>

      <div className="cw-colum mb-4">
        <h1>
          {props.tempFormat === 0 ? 
            Math.floor(weatherInfo.temp_c)
          : Math.floor(weatherInfo.temp_f)
          }
          {props.tempFormat === 0 ? 
            <span><sup>O</sup>C</span> 
          : <span><sup>O</sup>F</span>
          }
        </h1>
      </div>

      <div className="cw-colum mb-4">
        <h4>{weatherInfo.condition.text}</h4>
      </div>

      <div className="cw-colum p-0 m-0">
        <p>Today <span>• </span> {new Intl.DateTimeFormat('en-GB', options).format(wrkd)}</p>
      </div>
    </div>
    </>}
    {locationInfo && 
    <div className="cw-row">
      <div className="cw-colum p-0">
        <p>
          <img src={Locic} alt="" className="img-responsive"/>
          {locationInfo.name}
        </p>
      </div>
    </div>}
    </>
  )
}
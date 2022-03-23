// display daily weather conditions reads
import React, { useState } from "react";

export default function DaysSec(props){
  const [forecast] = useState(props.wdataforecast.forecast.forecastday);
  var options = { weekday: 'short', month: 'short', day: 'numeric' };
  var dating = new Intl.DateTimeFormat('en-GB', options);
  
  return(
    <>
    <div className="daycon-row mx-2">
      {forecast && forecast.map((data, index) => (
      <div className="daycontain bgcolor m-2" key={index}>
        <div className="dateicon">
          <div className="dat">
            <p>{dating.format(new Date(data.date))}</p>
          </div>
          <div className="dayicon">
            <img src={data.day.condition.icon} 
              alt="condition" 
              className="img-responsive skyic"
            />
          </div>
        </div>
        <div className="daytemp">
          <p>
            {props.tempFormat === 0 ? 
              Math.floor(data.day.maxtemp_c)
            : Math.floor(data.day.maxtemp_f)
            }
            {props.tempFormat === 0 ? 
              <span><sup>O</sup>C</span> 
            : <span><sup>O</sup>F</span>
            }
          </p>
          <p>
            {props.tempFormat === 0 ? 
              Math.floor(data.day.mintemp_c)
            : Math.floor(data.day.mintemp_f)
            }
            {props.tempFormat === 0 ? 
              <span><sup>O</sup>C</span> 
            : <span><sup>O</sup>F</span>
            }
          </p>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}
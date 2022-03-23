//display current weather highlights 
import React, { useState } from "react";
import Compassic from '../resources/naviconwyt.png';

export default function HighlightsSec(props){
  const [highlights] = useState(props.wdatacurrent.current);
  
  return(
    <>
    {highlights &&
    <div className="row mx-4 ">
      <div className="col-md-4 bgcolor m-3">
        <div className="row justify-content-center">
          <div className="highdet">
            <p>Wind status</p>
            <h1>{highlights.wind_mph} mph</h1>
            <p>
              <img src={Compassic} 
                alt=""
                className="img-responsive compass"
              />
              &nbsp;
              {highlights.wind_dir}
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 bgcolor m-3">
        <div className="row justify-content-center">
          <div className="highdet">
            <p>Humidity</p>
            <h1>{highlights.humidity}%</h1>
            <div className="humid-progress">
              <div className="prognumbs">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <progress value={highlights.humidity} max="100" />
              <div className="progpercnt">
                <p className="text-end">%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 bgcolor m-3">
        <div className="row justify-content-center">
          <div className="highdet mb-2">
            <p>Visibility</p>
            <h1>{highlights.vis_miles}&nbsp;miles</h1>
          </div>
        </div>
      </div>

      <div className="col-md-4 bgcolor m-3">
        <div className="row justify-content-center">
          <div className="highdet mb-2">
            <p>Air Pressure</p>
            <h1>{highlights.pressure_mb}mb</h1>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}
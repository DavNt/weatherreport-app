//change unit of measures between celsius or fahrenheit
import React from "react";

export default function UnitChange(props){
  return(
    <>
    <div className="row justify-content-end my-4">
      <div className="col-4">
        <p>
          <button 
            id="celsius"
            className="unitc bgsearch selected"
            onClick={() => props.setTempFormat("celsius", 0)}
          >
            <sup>O</sup>C
          </button>
          <button 
            id="fahrenheit"
            className="unitc bgsearch ms-2"
            onClick={() => props.setTempFormat("fahrenheit", 1)}
          >
            <sup>O</sup>F
          </button>
        </p>
      </div>
    </div>
    </>
  )
}
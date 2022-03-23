import React from "react";
import './backdrop.css';

export default function Backdrop(props){
  return(
    <div 
        className="backdrop"
        onClick={props.close}
      ></div>
  )
}
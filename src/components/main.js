import React, { useEffect, useState } from "react";
import axios from "axios";

import DaysSec from "./daysweather";
import HighlightsSec from "./highlights";
import SearchSec from "./searchlocation";
import CurrentWeather from "./currentweather";
import UnitChange from "./unitchange";
import Footer from "./footer.component";

export default function MainWindow(props){
  const [weatherD, setWeatherD] = useState();
  const [location, setLocation] = useState(); //where on earth identification 
  const [locat, setLocat] = useState(); //where on earth identification 
  const [loading, setloading] = useState(true);
  const [tempFormat, setTempFormat] = useState(0);
  
  // https://www.weatherapi.com/docs/
  // api used for weather data
  const apiKey = "e6daad2c30814c31b74125033220703";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=7&api=no&alerts=no&q=`;

  useEffect(() => {
    axios.get(apiUrl + `bulawayo`)
      .then((response) => {
        setWeatherD(response.data)
      })
      .catch((err)=>{
        console.log(err)
      })
      .finally(()=>{
        setloading(false)
        // console.log(weatherD)
      })
  }, [apiUrl]);

  function toggleTempFormat(id, state) {        
    //Styling temperature button 
    const selectedElement = document.getElementById(id)
    const groupElements = document.querySelectorAll('.selected')
    if (selectedElement.classList.contains('selected')) {            
    } else {
        groupElements.forEach(e => {
            if(e.classList.contains('selected')) {
                e.classList.remove('selected')
            }
        })
        selectedElement.classList.add('selected')
    }        
    setTempFormat(state)        
  }

  function getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`);

        console.log(location);

        setloading(true);

        axios.get(apiUrl.concat(`${location}`))
          .then((response) => {
            setWeatherD(response.data)
          })
          .catch((err)=>{
            console.log(err)
          })
          .finally(()=>{
            setloading(false)
            // console.log(weatherD)
          })
      });      
    }
  }
  
  function searchLocation(txt){
    console.log(txt);
    setLocat(txt);

    setloading(true)
    axios.get(apiUrl.concat(`${locat}`))
      .then((response) => {
          // if(searchWord === "") {
          //     // setFilteredData([])
          // } else {
              setWeatherD(response.data)
          // }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(()=>{
        setloading(false)
      })      
  }

  return(
    <>
    {weatherD && 
    <div className="row">
      <div className="col-md-4 mainleft">
        <div className="row">
          <SearchSec
            detectLocation={()=>getCurrentLocation()}
            search={searchLocation}
            locat={location}
          />
        </div>

        {!loading?
        <CurrentWeather
          wdatacurrent={weatherD}
          wdatalocation={weatherD}
          tempFormat={tempFormat}
        />: <p>loading...</p>}
      </div>
      
      <div className="col-md-8 mainright">
        <UnitChange
          tempFormat={tempFormat}
          setTempFormat={(state, id) => toggleTempFormat(state, id)}
        />

        {!loading?
        <DaysSec
          wdataforecast={weatherD}
          tempFormat={tempFormat}
        />: <p>loading...</p>}
        
        <div className="row mx-3 mt-5">
          <h3>Today's Highlights</h3>
        </div>
        {!loading?
        <HighlightsSec
          wdatacurrent={weatherD}
        />: <p>loading...</p>}

        <Footer/>
      </div>
    </div>}
    </>
  )
}
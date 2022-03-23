import React, { useState } from "react";

export default function DrawerContent(props){
  const [places, setPlaces] = useState(["Harare","Pretoria","London"])
  const [txtsrch, setTxtsrch] = useState('');

  const reserInput = () => {
    setTxtsrch('');
  }
  const handleSearch = (e) => {
    e.preventDefault();
    props.search(txtsrch);
    reserInput();
    props.closedrawer();
  }
  return(
    <>
    <div className="drawcontain">
      <form className="inputsearch mb-5">
        <input type="text" 
          className="txtsearch" 
          placeholder="Type in location"
          onChange={(e)=>{setTxtsrch(e.target.value)}}
        />
        <input type="submit" 
          className="btnsearch ms-2"
          onClick={handleSearch}
          value='Search'
        />
      </form>
      <div className="suggstsearch">
        <ul className="list-group">
          {places && places.map((item, index)=>(
          <li key={index} 
            className=" suggstlist my-2"
            onClick={()=>{
              props.search(item);
              props.closedrawer();
              console.log(item);
            }}
          >
            {item}
          </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}
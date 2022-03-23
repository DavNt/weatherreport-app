//search btn and geolocation
import React, { useState } from "react";
import Locdtctic from '../resources/ic_location_searching_white.png';
import Drawer from "./drawer.component/drawer";
import Backdrop from "./drawer.component/backdrop";

export default function SearchSec(props){
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  }

  let backdrop;
  if(drawerOpen){
    backdrop = <Backdrop close={backdropClickHandler}/>
  }

  return(
    <>
    <Drawer show={drawerOpen}
      closedrawer={backdropClickHandler}
      search={props.search}
      locat={props.locat}
    />
    {backdrop}
    <div className="searchcont my-4 ">
      <div className="typesearch bgsearch">
        <p className="text-center"
          onClick={drawerToggleClickHandler}
        >
          Search by place
        </p>
      </div>

      <button className="detectsearch bgsearch"
        onClick={props.detectLocation}
      >
        <img src={Locdtctic} alt="" className="img-responsive ds-locic"/>
      </button>
    </div>
    </>
  )
}
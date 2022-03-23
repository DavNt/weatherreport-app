import React from "react";
import './drawer.css';
import DrawerContent from "../drawercontent";

export default function Drawer(props){
  let drawerClasses = 'side-drawer'
  if(props.show) {
    drawerClasses = 'side-drawer open'
  }

  return(
    <div className={drawerClasses}>
      <div className="closedraw"
        onClick={props.closedrawer}
      >
        <h2 className="text-end">x</h2>
      </div>
      {/* <h1>Hello, I'm sliding!</h1> */}
      <DrawerContent
        search={props.search}
        locat={props.locat}
        closedrawer={props.closedrawer}
      />
    </div>
  )
}
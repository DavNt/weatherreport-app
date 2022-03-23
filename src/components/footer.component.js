import React, {Component} from "react";

export default class Footer extends Component{
  render(){
    return(
      <div className="container mt-auto py-3">
        <p className="text-center ">
          Created by 
          <a 
            href="https://github.com/DavNt" 
            target="_blank" rel="noreferrer"
            className="text-decoration-none foota"
          >
            -David Nt- 
          </a> 
          @ devchallenges.io
        </p>
      </div>
    )
  }
}
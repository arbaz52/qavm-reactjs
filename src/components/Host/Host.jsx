import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import  HostLogo from './undraw_group_video_el8e.svg'
import "./Host.css";


const Host = (props) => {
  let history = useHistory();

  const makeARoom =()=>{
     fetch("https://api.daily.co/v1/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" +" "+ "642ad4f79aa255a6b5f921b1a02cde414aab957be401d174c3c558ff5a7e522f",
      },
      
    }).then((res) => res.json()).then((result) => {
        if(result.api_created==true){
          history.push("/room/" + result.name);
  
          console.log(result)
            
        }
    }
    )

  }
  
  
  
  return (
    <div className="container justify-content-center">
      <div className="row my-5">
      <div className="col-sm-5">
      <img src={HostLogo}></img>
        </div>
        <div className="col-sm-5 offset-2 pt-5">
          <h3>Enter a Title</h3>
          <input type="text" placeholder="Title"></input>{" "}
          <button className="enter" onClick={makeARoom}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Host;

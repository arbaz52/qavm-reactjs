import React, { useState } from 'react';
import  LandingLogo from './undraw_video_call_kxyp.svg'
import './Landing.css'
const Landing = (props) => {
    return(
       <div className="intro">
         <div className="col1">
       <h1>Welcome to<br/> Quick Audio Video Meetings</h1>
       <br/>
       <h2>Host or join a meeting with just one click!</h2>
       <h2>Lets get started...</h2>
       </div>
       <img src={LandingLogo}></img>
       
       </div>
  );
}

export default Landing;


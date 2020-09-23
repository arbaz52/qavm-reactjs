import React, { useState } from "react";
import "./Join.css";
import  JoinLogo from './undraw_remote_meeting_cbfk.svg'
const Join = (props) => {
  return (
    <div className="container justify-content-center">
      <div className="row my-5">
        <div className="col-sm-5">
        <img src={JoinLogo}></img>
        </div>
        <div className="col-sm-5  offset-2 pt-5">
        <h1 className="info">Join a Meeting</h1>
          <h3 className="ID"> Enter meeting ID </h3>
          <input type="text" placeholder="Meeting ID"></input>{" "}
          <button className="enter">Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Join;

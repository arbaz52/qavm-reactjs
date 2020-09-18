import React, { useState } from "react";
import "./Host.css";
const Host = (props) => {
  return (
    <div className="container justify-content-center">
      <div className="row my-5">
        <div className="col-sm-5">
          <h3>Enter a Title</h3>
          <input type="text" placeholder="Title"></input>{" "}
          <button className="enter" onClick>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Host;

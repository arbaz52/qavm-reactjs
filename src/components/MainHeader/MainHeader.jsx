import React, { useState } from 'react';
import {
    Route,
    Link,
    Switch,
    BrowserRouter,
    Redirect,
  } from 'react-router-dom';
import './MainHeader.css'
const MainHeader = (props) => {
    return(
        <div className="header">
             <Link style={{ color: '#FFF' }} to ="/join"><div className="title">Qavm</div></Link>
            <ul className="links">
            <Link style={{ color: '#FFF' }} to ="/join"><li>Join a meeting</li></Link>
            <Link style={{ color: '#FFF' }} to ="/host"><li>Host a meeting</li></Link>
            </ul>

        </div>
  );
}

export default MainHeader;
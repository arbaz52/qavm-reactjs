import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "./components/MainHeader/MainHeader";
import Landing from "./components/Landing/Landing";
import Join from "./components/Join/Join";
import Host from "./components/Host/Host";
import {
  Route,
  Link,
  Switch,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
<>
   
    <BrowserRouter>
      <MainHeader/>
      <Switch>
         <Route path="/" component={Landing} exact/>
         <Route path="/join" component={Join} exact/>
         <Route path="/host" component={Host} exact/>
        
      </Switch>
  

    </BrowserRouter>
</>
  );
}

export default App;

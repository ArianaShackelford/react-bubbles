import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <PrivateRoute path='/protected' component={BubblePage}/>
        <Route path="/login" component={Login} />
        <Route component={Login}/>
          
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;

// import React, { Component } from 'react';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/homepage'
// import logo from './logo.svg';
import './App.css';


// export default App;
const App = () =>
  <Router>
    <div className="screenview">
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        
      </Switch>
    </div>
  </Router>;

export default App;
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Login/>
        </Route>
      </Switch>
    

    </Router>
  );
}

export default App;

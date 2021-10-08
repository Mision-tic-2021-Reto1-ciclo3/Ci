import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productos from "pages/Productos";
import Usuarios from "pages/Usuarios";
import Ventas from "pages/Ventas";
import Menu from "layouts/Menu";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/productos">
          <Productos />
        </Route>
        <Route path="/usuarios">
          <Usuarios />
        </Route>
        <Route path={["/productos", "/usuarios", "/ventas"]}>
          <Menu>
            <Route path="/ventas">
              <Ventas />
            </Route>
          </Menu>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

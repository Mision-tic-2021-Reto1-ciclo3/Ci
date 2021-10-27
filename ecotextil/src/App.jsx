import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productos from "pages/Productos";
import Usuarios from "pages/Usuarios";
import Ventas from "pages/Ventas";
import Menu from "layouts/Menu";
import Sidebar from "components/Sidebar"
import { Auth0Provider } from "@auth0/auth0-react";


function App() {
  return (
    <Auth0Provider
    domain="ecotextil.us.auth0.com"
    clientId="Mttt25nRKflRKEGPIWNomCEFp8r1sS8e"
    redirectUri={"http://localhost:3000/productos"}
    >
    <Router>
      <Switch>
        
        <Route path="/Sidebar">
          <Sidebar />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/productos">
          <Productos />
        </Route>
        <Route path="/usuarios">
          <Usuarios />
        </Route>
        <Route path="/ventas">
          <Ventas />
        </Route>
        <Route path={["/productos", "/usuarios", "/ventas"]}>
          <Menu>
          </Menu>
        </Route>
      </Switch>
    </Router>
    </Auth0Provider>
  );
}

export default App;

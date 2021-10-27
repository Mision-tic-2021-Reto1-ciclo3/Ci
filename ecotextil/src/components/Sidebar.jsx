import React from "react";
import user from "media/usuario.svg";
import log from "media/LOGO ECO TEXTIL.png";
import "styles/estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { logout } = useAuth0();
  return (
    <div className=" ">
      {

        //<img src={tela}/>
      }
      <div id="sidemenu" class="menu-expanded">

        <br />
        <br />

        <div id="profile">

          <br />
          <div className="title">USUARIO1</div>
        </div>
        <br />

        <div id="menu-items">
          <div className="item margen google">

            <Link to="/Ventas">
              <div class="title">Administrar Ventas</div>
            </Link>
            <div className="item separator"></div>
            <Link to="/Productos">
              <div class="title">Administrar Productos</div>
            </Link>
            <div className="item separator"></div>
            <Link to="/Usuarios">
              <div class="title">Gestión de usuarios</div>
            </Link>
            <div className="item separator"></div>
            <button className="google center" onClick={() => logout({ returnTo: "https://ecotextil.herokuapp.com/" })}>Cerrar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

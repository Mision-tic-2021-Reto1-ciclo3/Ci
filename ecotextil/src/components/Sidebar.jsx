import React from "react";
import user from "media/usuario.svg";
import log from "media/LOGO ECO TEXTIL.png";
import "styles/estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className=" sidenav ">
      {

      //<img src={tela}/>
      }
      <div id="sidemenu" class="menu-expanded">
        <div id="header">
          <div>
            <img src={log} />
          </div>
        </div>
        <br />
        <br />

        <div id="profile">
          <div id="photo">
            <img src={user} alt="" />
          </div>
          <br />
          <div className="title">USUARIO1</div>
        </div>
        <br />

        <div id="menu-items">
          <div class="item">
            <a href="ventas.html">
              <div className="icon">
                <span class="glyphicon glyphicon-tags"></span>
              </div>
              <div class="title">Administrar Ventas</div>
            </a>
          </div>
          <div className="item separator"></div>
          <div className="item">
            <a href="producto.html">
              <div class="icon">
                <span type="button" class="glyphicon glyphicon-barcode"></span>
              </div>
              <div class="title">Administrar Productos</div>
            </a>
          </div>
          <div class="item separator"></div>
          <div class="item">
            <a href="">
              <div class="icon">
                <span class="glyphicon glyphicon-user"></span>
              </div>
              <div class="title">Gestión de Usuarios</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

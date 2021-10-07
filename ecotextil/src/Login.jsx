import React from "react";
import logo from "media/logoEcoTextil.png";
import "styles/estilos.css";
import "styles/estilosMenu.css";

const Login = () => {
  return (
    <div className="login-box">
      <div>
        <div className="login-logo">
          <img src={logo} alt="logo empresa" className="img-responsive" />
        </div>
        <div className="login-box-body">
          <h2 className="login-box-msg">Ingresa al sistema</h2>
          <div className="form-group has-feedback">
            <input
              type="text"
              class="form-control"
              placeholder="Usuario"
              name="ingUsuario"
            />
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
        </div>
        <div className="login-box-body">
          <div class="form-group has-feedback">
            <input
              type="password"
              placeholder="Contraseña"
              name="ingPassword"
            />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
        </div>
        <main>
          <div class="row center">
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-flat">
                Iniciar Sesión
              </button>
            </div>
          </div>
          <a href="menu.html">
            <div class="row center">
              <div class="col-xs-4">
                <button type="button" class="btn btn-primary btn-flat">
                  Registrar nueva cuenta
                </button>
              </div>
            </div>
          </a>
          <br />

          <div class="row center">
            <div class="g-signin2"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;

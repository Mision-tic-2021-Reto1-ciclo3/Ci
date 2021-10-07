import React from "react";
import logo from "media/logoEcoTextil.png";

const Login = () => {
  return (
    <div>
      <div>
        <div className="">
          <img src={logo} alt="logo empresa" />
        </div>
        <h2>Ingresa al sistema</h2>
        <input
          type="text"
          class="form-control"
          placeholder="Usuario"
          name="ingUsuario"
        />
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div>
        <input type="password" placeholder="Contraseña" name="ingPassword" />
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
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
  );
};

export default Login;

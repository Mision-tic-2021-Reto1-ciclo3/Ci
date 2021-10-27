import React from "react";
import logo from "media/logoEcoTextil.png";
import "styles/estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import {Link } from "react-router-dom";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
 
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
              className="form-control"
              placeholder="Contraseña"
              name="ingPassword"
            />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
        </div>
        <main>
          <div className="center">
            <div class="col-xs-4">
              {
                //autenticación con AUTH0, pendiente por modificar el acceso dependiendo el usuario, vendedor o admin
              }
              <button onClick={() => loginWithRedirect()} type="submit" className="btn btn-success btn-flat">
                Iniciar Sesión    
                <i class="fab fa-google google"></i>
              </button>

            </div>
          </div>
          
            <div class="center margen">
              <Link to="/Ventas">
                <button type="button" className="btn btn-success btn-flat">
                  Registrar nueva cuenta
                </button>

              </Link>
            
              </div>
          
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
